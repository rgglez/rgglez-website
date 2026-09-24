# %% Entorno
from pathlib import Path
import json
import platform
from importlib.metadata import version

import numpy as np
import pandas as pd
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy import stats
from sklearn.compose import ColumnTransformer
from sklearn.decomposition import PCA
from sklearn.dummy import DummyClassifier
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.metrics import (
    average_precision_score,
    mean_absolute_error,
    precision_recall_curve,
    roc_auc_score,
)
from sklearn.model_selection import (
    StratifiedKFold,
    cross_val_predict,
    cross_validate,
    train_test_split,
)
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

SALIDA = Path.cwd() / "graficos-eda"
SALIDA.mkdir(exist_ok=True)
plt.rcParams.update({
    "figure.dpi": 150,
    "font.size": 11,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "axes.grid": True,
    "grid.alpha": 0.18,
    "axes.axisbelow": True,
    "savefig.facecolor": "white",
})
AZUL, NARANJA = "#0072B2", "#D55E00"
resultados = {}


def guardar(fig, nombre):
    fig.savefig(SALIDA / nombre, format="webp", bbox_inches="tight")
    plt.close(fig)


print("Python:", platform.python_version())
for paquete in ["numpy", "pandas", "matplotlib", "scipy", "scikit-learn", "pillow"]:
    print(paquete, version(paquete))

# %% Datos sintéticos
rng = np.random.default_rng(42)
n = 2400
plan = rng.choice(["Básico", "Pro", "Empresa"], n, p=[0.62, 0.30, 0.08])
antiguedad = rng.integers(1, 73, n)
sesiones = rng.poisson(12, n)
incidencias = rng.poisson(1.2, n)
gasto = rng.lognormal(3.4, 0.7, n) * np.select(
    [plan == "Pro", plan == "Empresa"], [1.8, 3.2], default=1.0
)
logit = (
    -0.8 - 0.025 * antiguedad - 0.08 * sesiones
    + 0.65 * incidencias + 0.55 * (plan == "Básico")
)
abandono = rng.binomial(1, 1 / (1 + np.exp(-logit)))
df = pd.DataFrame({
    "cliente_id": np.arange(n),
    "plan": plan,
    "antiguedad_meses": antiguedad,
    "sesiones_30d": sesiones,
    "incidencias_30d": incidencias,
    "gasto_mensual": gasto.round(2),
    "gasto_anual_estimado": (12 * gasto).round(2),
    "abandono_30d": abandono,
    "reembolso_posterior": abandono * rng.uniform(10, 100, n),
})
# La ausencia depende de una variable observada: el plan.
falta_gasto = rng.random(n) < np.where(plan == "Básico", 0.22, 0.04)
df.loc[falta_gasto, ["gasto_mensual", "gasto_anual_estimado"]] = np.nan
df.loc[0, "antiguedad_meses"] = -5
df = pd.concat([df, df.iloc[:12]], ignore_index=True)

# %% Auditoría estructural y partición
print("Dimensiones recibidas:", df.shape)
print("Duplicados exactos:", int(df.duplicated().sum()))
print("Antigüedades inválidas:", int((df.antiguedad_meses < 0).sum()))
df = df.drop_duplicates().copy()
# Regla de dominio prefijada; no estima parámetros del conjunto completo.
df.loc[df.antiguedad_meses < 0, "antiguedad_meses"] = np.nan
assert df.cliente_id.is_unique
assert df.abandono_30d.isin([0, 1]).all()
train, test = train_test_split(
    df, test_size=0.2, stratify=df.abandono_30d, random_state=42
)
train, test = train.copy(), test.copy()
assert set(train.cliente_id).isdisjoint(test.cliente_id)
print("Filas de entrenamiento y prueba:", len(train), len(test))
auditoria = pd.DataFrame({
    "tipo": train.dtypes.astype(str),
    "ausentes_pct": train.isna().mean().mul(100),
    "valores_distintos": train.nunique(dropna=False),
})
print(auditoria.round(2).to_string())
auditoria.to_csv(SALIDA / "auditoria.csv")
resultados["filas"] = {"entrenamiento": len(train), "prueba": len(test)}

# %% Variable objetivo
conteo = train.abandono_30d.value_counts().sort_index()
fig, ax = plt.subplots(figsize=(8, 4))
barras = ax.bar(["Permanece (0)", "Abandona (1)"], conteo, color=[AZUL, NARANJA])
ax.bar_label(barras, labels=[f"{v} ({v / len(train):.1%})" for v in conteo], padding=5)
ax.set(ylabel="Clientes", title="Objetivo en entrenamiento", ylim=(0, conteo.max() * 1.18))
guardar(fig, "01-objetivo.webp")
resultados["abandono_pct"] = float(train.abandono_30d.mean() * 100)

# %% Ausencias
columnas = ["gasto_mensual", "gasto_anual_estimado", "antiguedad_meses"]
ausencias = train[columnas].isna().mean().mul(100).sort_values()
por_plan = train.assign(falta_gasto=train.gasto_mensual.isna()).groupby("plan").falta_gasto.mean().mul(100)
fig, axs = plt.subplots(1, 2, figsize=(11, 4), layout="constrained")
axs[0].barh(ausencias.index, ausencias, color=AZUL)
axs[0].set(xlabel="Valores ausentes (%)", title="¿Qué columnas faltan?")
axs[1].bar(por_plan.index, por_plan, color=AZUL)
axs[1].set(ylabel="Gasto ausente (%)", title="¿En qué grupos faltan?")
guardar(fig, "02-ausencias.webp")
resultados["gasto_ausente_por_plan_pct"] = por_plan.round(2).to_dict()

# %% Distribuciones
g = train.gasto_mensual.dropna()
fig, axs = plt.subplots(1, 3, figsize=(13, 4), layout="constrained")
axs[0].hist(g, bins="fd", color=AZUL, edgecolor="white")
axs[0].axvline(g.mean(), color=NARANJA, label="Media")
axs[0].axvline(g.median(), color="black", linestyle="--", label="Mediana")
axs[0].set(xlabel="Gasto (unidades monetarias)", ylabel="Clientes", title="Escala original")
axs[0].legend()
axs[1].hist(np.log1p(g), bins=25, color=AZUL, edgecolor="white")
axs[1].set(xlabel="log(1 + gasto)", ylabel="Clientes", title="Transformación logarítmica")
axs[2].ecdf(g, color=AZUL)
axs[2].axhline(0.9, color=NARANJA, linestyle="--")
axs[2].set(xlabel="Gasto (unidades monetarias)", ylabel="Proporción acumulada", title="Distribución acumulada")
guardar(fig, "03-distribuciones.webp")
resumen = g.describe(percentiles=[0.25, 0.5, 0.75, 0.9, 0.99])
print(resumen.round(2).to_string())
resultados["gasto"] = resumen.round(2).to_dict()

# %% Atípicos
q1, q3 = g.quantile([0.25, 0.75])
iqr = q3 - q1
limite = q3 + 1.5 * iqr
marcados = train.gasto_mensual > limite
fig, axs = plt.subplots(1, 2, figsize=(11, 4), layout="constrained")
axs[0].boxplot(g, orientation="horizontal")
axs[0].axvline(limite, color=NARANJA, linestyle="--", label="Q3 + 1.5 IQR")
axs[0].set(xlabel="Gasto", yticks=[], title="Regla global de revisión")
axs[0].legend()
planes = ["Básico", "Pro", "Empresa"]
axs[1].boxplot(
    [train.loc[train.plan == p, "gasto_mensual"].dropna() for p in planes],
    tick_labels=planes,
)
axs[1].set(ylabel="Gasto", title="El contexto cambia la interpretación")
guardar(fig, "04-atipicos.webp")
resultados["atipicos"] = {"limite": round(float(limite), 2), "n": int(marcados.sum())}

# %% Relaciones con el objetivo
tasas = train.groupby("plan").abandono_30d.agg(["sum", "count", "mean"]).reindex(planes)
# Wilson: intervalos puntuales aproximados al 95 % para proporciones.
z = stats.norm.ppf(0.975)
p, m = tasas["mean"], tasas["count"]
centro = (p + z**2 / (2 * m)) / (1 + z**2 / m)
radio = z * np.sqrt(p * (1 - p) / m + z**2 / (4 * m**2)) / (1 + z**2 / m)
tasas["inferior"], tasas["superior"] = centro - radio, centro + radio
fig, axs = plt.subplots(1, 2, figsize=(11, 4), layout="constrained")
axs[0].boxplot(
    [train.loc[train.abandono_30d == y, "incidencias_30d"] for y in [0, 1]],
    tick_labels=["Permanece", "Abandona"],
)
axs[0].set(ylabel="Incidencias en 30 días", title="Numérica frente a clase")
axs[1].errorbar(
    np.arange(len(tasas)), p * 100,
    yerr=np.vstack([p - tasas.inferior, tasas.superior - p]) * 100,
    fmt="o", color=AZUL, capsize=5,
)
axs[1].set(
    xticks=np.arange(len(tasas)),
    xticklabels=[f"{plan}\nn={n}" for plan, n in zip(tasas.index, m)],
    ylabel="Abandono (%)", title="Tasa e intervalo de Wilson (95 %)",
)
guardar(fig, "05-relaciones-objetivo.webp")
print(tasas.round(3).to_string())
resultados["tasas_por_plan"] = tasas.round(4).to_dict(orient="index")

# %% Correlaciones
variables = ["antiguedad_meses", "sesiones_30d", "incidencias_30d", "gasto_mensual", "gasto_anual_estimado"]
etiquetas = ["Antigüedad", "Sesiones", "Incidencias", "Gasto/mes", "Gasto/año"]
corr = train[variables].corr(method="spearman")
fig, ax = plt.subplots(figsize=(7, 6), layout="constrained")
im = ax.imshow(corr, vmin=-1, vmax=1, cmap="RdBu_r")
ax.set(xticks=range(5), yticks=range(5), xticklabels=etiquetas, yticklabels=etiquetas, title="Correlación de Spearman entre predictores")
plt.setp(ax.get_xticklabels(), rotation=35, ha="right")
ax.grid(False)
for i in range(5):
    for j in range(5):
        ax.text(j, i, f"{corr.iloc[i, j]:.2f}", ha="center", va="center", color="white" if abs(corr.iloc[i, j]) > 0.6 else "black")
fig.colorbar(im, ax=ax, shrink=0.8)
guardar(fig, "06-correlaciones.webp")
print("Correlación gasto mensual/anual:", corr.loc["gasto_mensual", "gasto_anual_estimado"])

# %% Relaciones no lineales: ejemplo independiente
rng_curva = np.random.default_rng(12)
x = np.linspace(-3, 3, 500)
y_curva = x**2 + rng_curva.normal(0, 0.4, len(x))
pearson = stats.pearsonr(x, y_curva).statistic
spearman = stats.spearmanr(x, y_curva).statistic
fig, ax = plt.subplots(figsize=(8, 4), layout="constrained")
ax.scatter(x, y_curva, s=12, alpha=0.5, color=AZUL)
ax.set(xlabel="x", ylabel="y", title=f"Relación en U: Pearson={pearson:.3f}; Spearman={spearman:.3f}")
guardar(fig, "07-no-lineal.webp")
resultados["curva"] = {"pearson": float(pearson), "spearman": float(spearman)}

# %% Proyección multivariable
numericas = ["antiguedad_meses", "sesiones_30d", "incidencias_30d", "gasto_mensual"]
proyeccion = Pipeline([
    ("imputar", SimpleImputer(strategy="median")),
    ("escalar", StandardScaler()),
    ("pca", PCA(n_components=2)),
])
coords = proyeccion.fit_transform(train[numericas])
varianza = proyeccion.named_steps["pca"].explained_variance_ratio_
fig, ax = plt.subplots(figsize=(8, 5), layout="constrained")
for clase, color, marca, nombre in [(0, AZUL, "o", "Permanece"), (1, NARANJA, "^", "Abandona")]:
    mascara = train.abandono_30d.to_numpy() == clase
    ax.scatter(coords[mascara, 0], coords[mascara, 1], s=16, alpha=0.35, c=color, marker=marca, label=nombre)
ax.set(xlabel=f"PC1 ({varianza[0]:.1%})", ylabel=f"PC2 ({varianza[1]:.1%})", title="PCA de cuatro predictores numéricos")
ax.legend()
guardar(fig, "08-pca.webp")
resultados["pca_varianza_pct"] = (varianza * 100).round(2).tolist()

# %% Tiempo y cambio de distribución: ejemplo independiente
rng_tiempo = np.random.default_rng(7)
fechas = pd.date_range("2025-01-01", periods=180, freq="D")
t = np.arange(len(fechas))
serie = pd.Series(
    100 + 0.12 * t + 15 * np.sin(2 * np.pi * t / 7)
    + 25 * (t >= 120) + rng_tiempo.normal(0, 4, len(t)),
    index=fechas, name="pedidos",
)
fig, axs = plt.subplots(1, 2, figsize=(12, 4), layout="constrained")
axs[0].plot(serie.index, serie, alpha=0.45, color=AZUL, label="Diario")
axs[0].plot(serie.index, serie.rolling(7).mean(), color="black", label="Media de 7 días")
axs[0].axvline(serie.index[120], color=NARANJA, linestyle="--", label="Cambio simulado")
axs[0].set(ylabel="Pedidos simulados", title="Tendencia, ciclo semanal y cambio de nivel")
axs[0].tick_params(axis="x", rotation=30)
axs[0].legend(fontsize=9)
axs[1].ecdf(serie.iloc[:90], label="Primeros 90 días", color=AZUL)
axs[1].ecdf(serie.iloc[90:], label="Últimos 90 días", color=NARANJA)
axs[1].set(xlabel="Pedidos", ylabel="Proporción acumulada", title="Comparación descriptiva de periodos")
axs[1].legend()
guardar(fig, "09-tiempo.webp")
# Variables para predecir el día t: usan exclusivamente días anteriores.
historico = pd.DataFrame({
    "objetivo": serie,
    "retardo_1": serie.shift(1),
    "media_previa_7": serie.shift(1).rolling(7).mean(),
})
assert pd.isna(historico.media_previa_7.iloc[6])
assert np.isclose(historico.media_previa_7.iloc[7], serie.iloc[:7].mean())

# %% Regresión y residuos: ejemplo independiente
rng_reg = np.random.default_rng(21)
superficie = rng_reg.uniform(30, 180, 600)
precio = 50000 + 1800 * superficie + rng_reg.normal(0, 450 * superficie)
X_reg = superficie.reshape(-1, 1)
Xa, Xv, ya, yv = train_test_split(X_reg, precio, test_size=0.25, random_state=42)
reg = LinearRegression().fit(Xa, ya)
pred = reg.predict(Xv)
residuos = yv - pred
fig, axs = plt.subplots(1, 2, figsize=(11, 4), layout="constrained")
axs[0].scatter(superficie, precio / 1000, s=12, alpha=0.45, color=AZUL)
axs[0].set(xlabel="Superficie (m²)", ylabel="Precio (miles de unidades)", title="Datos sintéticos: variabilidad creciente")
axs[1].scatter(pred / 1000, residuos / 1000, s=18, alpha=0.55, color=AZUL)
axs[1].axhline(0, color="black", linestyle="--")
axs[1].set(xlabel="Predicción (miles)", ylabel="Residuo (miles)", title="Residuos en validación")
guardar(fig, "10-regresion.webp")
resultados["regresion_mae"] = round(float(mean_absolute_error(yv, pred)), 2)

# %% Pipeline y validación cruzada
X = train[numericas + ["plan"]]
y = train.abandono_30d
preparar = ColumnTransformer([
    ("numericas", Pipeline([
        ("imputar", SimpleImputer(strategy="median", add_indicator=True)),
        ("escalar", StandardScaler()),
    ]), numericas),
    ("categoricas", Pipeline([
        ("imputar", SimpleImputer(strategy="most_frequent")),
        ("codificar", OneHotEncoder(handle_unknown="ignore")),
    ]), ["plan"]),
])
modelo = Pipeline([
    ("preparar", preparar),
    ("clasificar", LogisticRegression(max_iter=2000)),
])
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
metricas = {"roc_auc": "roc_auc", "ap": "average_precision", "accuracy": "accuracy"}
evaluacion = {}
for nombre, estimador in [
    ("Referencia", DummyClassifier(strategy="prior")),
    ("Regresión logística", modelo),
]:
    scores = cross_validate(estimador, X, y, cv=cv, scoring=metricas, n_jobs=1)
    evaluacion[nombre] = {
        metrica: f"{scores['test_' + metrica].mean():.3f} ± {scores['test_' + metrica].std():.3f}"
        for metrica in metricas
    }
print(pd.DataFrame(evaluacion).T.to_string())
# Cada probabilidad se obtiene sin entrenar con la fila correspondiente.
prob_oof = cross_val_predict(modelo, X, y, cv=cv, method="predict_proba", n_jobs=1)[:, 1]
precision, recall, _ = precision_recall_curve(y, prob_oof)
fig, ax = plt.subplots(figsize=(8, 4), layout="constrained")
ax.step(recall, precision, where="post", color=AZUL, label=f"AP OOF={average_precision_score(y, prob_oof):.3f}")
ax.axhline(y.mean(), color=NARANJA, linestyle="--", label=f"Prevalencia={y.mean():.3f}")
ax.set(xlabel="Exhaustividad (recall)", ylabel="Precisión (precision)", xlim=(0, 1), ylim=(0, 1.03), title="Predicciones fuera de pliegue en entrenamiento")
ax.legend()
guardar(fig, "11-precision-recall.webp")
assert np.isfinite(prob_oof).all() and len(prob_oof) == len(train)
resultados["validacion_cruzada"] = evaluacion
resultados["oof"] = {
    "ap": round(float(average_precision_score(y, prob_oof)), 4),
    "roc_auc": round(float(roc_auc_score(y, prob_oof)), 4),
}

# %% Registro de resultados
# La prueba queda reservada: no se utiliza para gráficos ni selección.
(SALIDA / "resultados.json").write_text(
    json.dumps(resultados, ensure_ascii=False, indent=2), encoding="utf-8"
)
assert len(list(SALIDA.glob("[0-9][0-9]-*.webp"))) == 11
print("Resultados y gráficos guardados en:", SALIDA)
