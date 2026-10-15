import type { QuizQuestion } from "../types";

/**
 * Banco del examen de entrenamiento sobre el glosario de sistemas cognitivos
 * artificiales. Las respuestas incorrectas son afirmaciones del propio
 * glosario aplicadas al concepto equivocado, no distractores obvios.
 */
export const questions: QuizQuestion[] = [
  {
    id: "q01",
    section: "1. Introducción al aprendizaje profundo",
    kind: "single",
    prompt:
      "¿Qué distingue al aprendizaje profundo del aprendizaje de representaciones en general?",
    options: [
      {
        id: "a",
        text: "El sistema aprende la forma de representar los datos, en vez de recibir solo características diseñadas por personas.",
        correct: false,
      },
      {
        id: "b",
        text: "Construye representaciones jerárquicas: las capas iniciales detectan regularidades simples y las posteriores las combinan en conceptos más abstractos.",
        correct: true,
      },
      {
        id: "c",
        text: "Un algoritmo obtiene patrones desde ejemplos y los usa para predecir o clasificar, a diferencia de un sistema de reglas escrito a mano.",
        correct: false,
      },
      {
        id: "d",
        text: "Una persona selecciona, transforma o construye las variables que exponen la información pertinente para la tarea.",
        correct: false,
      },
    ],
    explanation:
      "El aprendizaje de representaciones ya cubre que el sistema aprenda sus propias variables internas. El aprendizaje profundo es el subcampo que las organiza en una jerarquía de capas. La opción sobre patrones frente a reglas describe el aprendizaje automático; la última, la ingeniería de características.",
  },
  {
    id: "q02",
    section: "1. Introducción al aprendizaje profundo",
    kind: "boolean",
    prompt:
      "Sin funciones de activación no lineales, encadenar varias capas sigue siendo equivalente a una sola transformación lineal.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "Cada capa sin no linealidad calcula una transformación afín. La composición de transformaciones afines es otra transformación afín, así que la profundidad no añade capacidad para modelar relaciones complejas. La no linealidad es lo que rompe esa equivalencia.",
  },
  {
    id: "q03",
    section: "1. Introducción al aprendizaje profundo",
    kind: "single",
    prompt:
      "En la neurona artificial, ¿qué papel cumple el sesgo b dentro de z = wᵀx + b?",
    options: [
      {
        id: "a",
        text: "Escala la longitud del paso con el que se actualizan los pesos para reducir el coste.",
        correct: false,
      },
      {
        id: "b",
        text: "Comprime la suma ponderada al intervalo (0, 1) para interpretarla como probabilidad.",
        correct: false,
      },
      {
        id: "c",
        text: "Desplaza la respuesta de la neurona con independencia de sus entradas, de modo que la transformación no queda obligada a pasar por el origen.",
        correct: true,
      },
      {
        id: "d",
        text: "Regula cuánto influye cada entrada; entrenar la red consiste, en gran parte, en ajustarlo.",
        correct: false,
      },
    ],
    explanation:
      "El sesgo es un parámetro aditivo, independiente de x. La tasa de aprendizaje escala el paso del optimizador; la sigmoide comprime a (0, 1); y los pesos, no el sesgo, regulan la influencia de cada entrada.",
  },
  {
    id: "q04",
    section: "1. Introducción al aprendizaje profundo",
    kind: "multi",
    prompt:
      "¿Cuáles de estas afirmaciones describen correctamente una red prealimentada o sus capas? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "La información avanza de la entrada a la salida sin ciclos.",
        correct: true,
      },
      {
        id: "b",
        text: "La capa de entrada recibe el ejemplo, las ocultas transforman y la de salida produce la predicción.",
        correct: true,
      },
      {
        id: "c",
        text: "Realimenta un estado interno para procesar secuencias de longitud variable.",
        correct: false,
      },
      {
        id: "d",
        text: "Cada unidad recibe necesariamente la salida de todas las unidades de la capa precedente.",
        correct: false,
      },
    ],
    explanation:
      "Una red prealimentada no tiene ciclos: se distingue precisamente de las recurrentes, que realimentan un estado. La división en capa de entrada, ocultas y de salida describe el recorrido. La conectividad total es propia de una red totalmente conectada, no una exigencia de toda red prealimentada: una convolucional también es prealimentada y usa filtros locales.",
  },
  {
    id: "q05",
    section: "1. Introducción al aprendizaje profundo",
    kind: "single",
    prompt: "La sigmoide σ(z) = 1 / (1 + e⁻ᶻ) se satura cuando…",
    options: [
      {
        id: "a",
        text: "z está cerca de cero, porque ahí la salida vale 0.5 y la derivada es máxima.",
        correct: false,
      },
      {
        id: "b",
        text: "la magnitud de z es grande: la salida se acerca a 0 o a 1 y la derivada se aproxima a cero.",
        correct: true,
      },
      {
        id: "c",
        text: "z es negativo, porque la unidad queda muerta y deja de transmitir gradiente para siempre.",
        correct: false,
      },
      {
        id: "d",
        text: "se interpreta como probabilidad, porque entonces deja de ser diferenciable.",
        correct: false,
      },
    ],
    explanation:
      "La saturación es la región donde cambios grandes de la entrada apenas mueven la salida y la derivada se acerca a cero. En la sigmoide eso ocurre en los extremos, no cerca de cero, donde la pendiente es mayor. La unidad muerta es un fallo de ReLU, no de la sigmoide, y usarla como probabilidad no le quita diferenciabilidad.",
  },
  {
    id: "q06",
    section: "2. Entrenamiento de redes neuronales",
    kind: "single",
    prompt:
      "¿Qué cuantifica la función de coste J(θ) = (1/m) Σ ℓ(f_θ(xᵢ), yᵢ)?",
    options: [
      {
        id: "a",
        text: "La tasa de aprendizaje que debe usarse en la siguiente actualización de parámetros.",
        correct: false,
      },
      {
        id: "b",
        text: "El error promedio entre las predicciones del modelo y los objetivos conocidos, sobre los m ejemplos considerados.",
        correct: true,
      },
      {
        id: "c",
        text: "El gradiente de la pérdida respecto de cada peso, obtenido al recorrer el grafo hacia atrás.",
        correct: false,
      },
      {
        id: "d",
        text: "La norma euclídea del vector de parámetros, usada como penalización de magnitud.",
        correct: false,
      },
    ],
    explanation:
      "ℓ mide el error de un ejemplo y J lo promedia. No es la tasa de aprendizaje, ni el gradiente que calcula la retropropagación, ni una penalización sobre la magnitud de los pesos.",
  },
  {
    id: "q07",
    section: "2. Entrenamiento de redes neuronales",
    kind: "boolean",
    prompt:
      "La retropropagación actualiza los pesos; el descenso de gradiente solo indica en qué dirección crece el coste.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "Es al revés. La retropropagación recorre el grafo hacia atrás y obtiene el gradiente de la pérdida respecto de cada parámetro. SGD, Adam u otro optimizador decide cómo usar esos gradientes para actualizar. Son pasos relacionados, no equivalentes.",
  },
  {
    id: "q08",
    section: "2. Entrenamiento de redes neuronales",
    kind: "multi",
    prompt:
      "¿Cuáles de estos valores son hiperparámetros, y no parámetros aprendidos como un peso? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "El número de unidades de una capa oculta.",
        correct: true,
      },
      {
        id: "b",
        text: "El sesgo b de una neurona.",
        correct: false,
      },
      {
        id: "c",
        text: "La tasa de aprendizaje η.",
        correct: true,
      },
      {
        id: "d",
        text: "El tamaño del minilote.",
        correct: true,
      },
    ],
    explanation:
      "Un hiperparámetro se elige antes o durante el entrenamiento y no se aprende como un peso ordinario. El número de unidades, η y el tamaño del lote cumplen esa definición. El sesgo sí se ajusta con el gradiente, igual que los pesos.",
  },
  {
    id: "q09",
    section: "2. Entrenamiento de redes neuronales",
    kind: "single",
    prompt:
      "En el descenso de gradiente, θₜ₊₁ = θₜ − η ∇_θ J(θₜ). ¿Qué ocurre si η es excesivo?",
    options: [
      {
        id: "a",
        text: "El paso se acorta tanto que el aprendizaje se vuelve muy lento, aunque sigue siendo estable.",
        correct: false,
      },
      {
        id: "b",
        text: "El gradiente se estima con un solo ejemplo y el ruido puede ayudar a explorar el espacio.",
        correct: false,
      },
      {
        id: "c",
        text: "El paso puede rebasar regiones útiles o hacer divergir el coste.",
        correct: true,
      },
      {
        id: "d",
        text: "La actualización usa el gradiente completo del conjunto y deja de ser iterativa.",
        correct: false,
      },
    ],
    explanation:
      "η escala el desplazamiento en la dirección contraria al gradiente. Un valor demasiado grande puede saltarse regiones útiles o divergir; uno demasiado pequeño es el que vuelve lento el aprendizaje. Estimar el gradiente con un ejemplo es lo propio de SGD, no un efecto del tamaño de η.",
  },
  {
    id: "q10",
    section: "2. Entrenamiento de redes neuronales",
    kind: "single",
    prompt:
      "¿Para qué se conservan resultados intermedios durante el pase hacia delante?",
    options: [
      {
        id: "a",
        text: "Para que el optimizador pueda promediar los parámetros de varios trabajadores.",
        correct: false,
      },
      {
        id: "b",
        text: "Para poder calcular después las derivadas locales que necesita el pase hacia atrás.",
        correct: true,
      },
      {
        id: "c",
        text: "Para servir el modelo sin volver a evaluar el grafo en cada solicitud.",
        correct: false,
      },
      {
        id: "d",
        text: "Para reemplazar la regla de la cadena por una solución cerrada del coste.",
        correct: false,
      },
    ],
    explanation:
      "El pase hacia delante evalúa el grafo de la entrada a la salida. En entrenamiento se guardan activaciones intermedias porque el pase hacia atrás las necesita para aplicar la derivada local de cada nodo. No tiene que ver con el promedio entre trabajadores ni con el servicio del modelo.",
  },
  {
    id: "q11",
    section: "2. Entrenamiento de redes neuronales",
    kind: "boolean",
    prompt:
      "El gradiente ∇J(θ) apunta hacia el mayor incremento local del coste, así que el descenso de gradiente se mueve en la dirección opuesta.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "El gradiente reúne las derivadas parciales y, bajo la norma euclídea, señala el mayor aumento local. Por eso la actualización resta η veces el gradiente: se busca reducir J, no aumentarlo.",
  },
  {
    id: "q12",
    section: "3. Frameworks de aprendizaje profundo",
    kind: "single",
    prompt:
      "¿Qué ventaja práctica tiene un grafo dinámico frente a uno estático?",
    options: [
      {
        id: "a",
        text: "Conocer toda la estructura por adelantado facilita validaciones y optimizaciones globales.",
        correct: false,
      },
      {
        id: "b",
        text: "La definición se parece al flujo ordinario del programa y la estructura puede variar entre ejemplos o iteraciones.",
        correct: true,
      },
      {
        id: "c",
        text: "Obliga a declarar el grafo completo antes de ejecutar datos, lo que simplifica el control dinámico.",
        correct: false,
      },
      {
        id: "d",
        text: "Elimina la necesidad de diferenciación automática, porque las derivadas quedan escritas en el grafo.",
        correct: false,
      },
    ],
    explanation:
      "El grafo dinámico se construye al ejecutar las operaciones. Eso acerca el código al flujo del programa y permite cambiar la estructura según los datos. Conocer la estructura de antemano, y la rigidez que eso implica, es lo propio del grafo estático. Ninguno de los dos sustituye a la diferenciación automática.",
  },
  {
    id: "q13",
    section: "3. Frameworks de aprendizaje profundo",
    kind: "multi",
    prompt:
      "Según el estado descrito para 2026, ¿cuáles de estos frameworks siguen vigentes para desarrollar redes nuevas? Marca todas las que apliquen.",
    options: [
      { id: "a", text: "PyTorch.", correct: true },
      { id: "b", text: "Theano.", correct: false },
      {
        id: "c",
        text: "Keras 3, con TensorFlow, JAX o PyTorch como backend.",
        correct: true,
      },
      { id: "d", text: "Apache MXNet.", correct: false },
    ],
    explanation:
      "PyTorch sigue vigente para investigación y producción. Keras 3 también, y funciona con TensorFlow, JAX o PyTorch. Theano terminó su desarrollo oficial y MXNet fue retirado por Apache en 2023 y trasladado al Attic en 2024.",
  },
  {
    id: "q14",
    section: "3. Frameworks de aprendizaje profundo",
    kind: "single",
    prompt: "¿Cuándo conviene la API funcional de Keras y no la secuencial?",
    options: [
      {
        id: "a",
        text: "Cuando cada capa tiene exactamente una entrada y una salida dentro de una pila lineal.",
        correct: false,
      },
      {
        id: "b",
        text: "Cuando hace falta un entorno que reserve recursos y evalúe el grafo con llamadas a run().",
        correct: false,
      },
      {
        id: "c",
        text: "Cuando hay ramas, varias entradas o salidas, reutilización de capas o una topología que no cabe en una secuencia.",
        correct: true,
      },
      {
        id: "d",
        text: "Cuando se quiere que la compilación elija sola la pérdida y el optimizador.",
        correct: false,
      },
    ],
    explanation:
      "La API secuencial encadena capas en un único recorrido lineal. La funcional conecta tensores y capas de forma explícita, así que admite ramas y topologías más libres. Las sesiones y run() pertenecen a la API histórica de TensorFlow 1.x, y la compilación no elige la pérdida: hay que asociarla al modelo.",
  },
  {
    id: "q15",
    section: "3. Frameworks de aprendizaje profundo",
    kind: "boolean",
    prompt:
      "En la entropía cruzada categórica con etiquetas one-hot, solo la clase correcta contribuye a la pérdida de ese ejemplo.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "Con one-hot, y_k vale 1 para la clase correcta y 0 para el resto, así que en −Σ y_k log ŷ_k solo sobrevive el término de la clase correcta. Cuanto menor sea la probabilidad que recibe, mayor es la pérdida.",
  },
  {
    id: "q16",
    section: "3. Frameworks de aprendizaje profundo",
    kind: "single",
    prompt:
      "Un escalar, un vector y una matriz son, respectivamente, tensores de orden…",
    options: [
      { id: "a", text: "uno, dos y tres.", correct: false },
      { id: "b", text: "cero, uno y dos.", correct: true },
      { id: "c", text: "cero, dos y tres.", correct: false },
      {
        id: "d",
        text: "uno, uno y dos, porque el sesgo también cuenta como dimensión.",
        correct: false,
      },
    ],
    explanation:
      "El orden es el número de dimensiones del arreglo: un escalar tiene orden cero, un vector orden uno y una matriz orden dos. Los frameworks tratan datos, parámetros y resultados intermedios como tensores de cualquier orden.",
  },
  {
    id: "q17",
    section: "4. Entrenamiento práctico",
    kind: "single",
    prompt:
      "¿Por qué inicializar todos los pesos de una capa en cero impide que sus unidades aprendan funciones distintas?",
    options: [
      {
        id: "a",
        text: "Porque la varianza inicial queda por encima de la que prescribe la inicialización He y las ReLU se saturan.",
        correct: false,
      },
      {
        id: "b",
        text: "Porque las unidades equivalentes reciben gradientes idénticos y permanecen sincronizadas.",
        correct: true,
      },
      {
        id: "c",
        text: "Porque el sesgo deja de poder desplazar la activación y toda transformación pasa por el origen.",
        correct: false,
      },
      {
        id: "d",
        text: "Porque la normalización por lotes anula la media del minilote y borra la señal.",
        correct: false,
      },
    ],
    explanation:
      "Si unidades equivalentes empiezan con los mismos pesos, calculan lo mismo y reciben el mismo gradiente, así que siguen aprendiendo la misma función. Hace falta una inicialización distinta para romper esa simetría. He no se usa para diagnosticar el cero, y la normalización por lotes es otra técnica.",
  },
  {
    id: "q18",
    section: "4. Entrenamiento práctico",
    kind: "multi",
    prompt:
      "¿Cuáles de estas técnicas reducen el sobreajuste? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Penalizar el cuadrado de los pesos con un término λ Σ wⱼ².",
        correct: true,
      },
      {
        id: "b",
        text: "Desactivar al azar una fracción de las unidades durante el entrenamiento.",
        correct: true,
      },
      {
        id: "c",
        text: "Seguir entrenando mientras el error de entrenamiento baje, aunque el de validación ya suba.",
        correct: false,
      },
      {
        id: "d",
        text: "Detener el ajuste cuando la métrica de validación deja de mejorar.",
        correct: true,
      },
    ],
    explanation:
      "L2, dropout y la parada temprana son regularizadores: limitan la capacidad efectiva o cortan el ajuste antes de memorizar el conjunto de entrenamiento. Continuar cuando la validación empeora es justamente la trayectoria del sobreajuste, no su remedio.",
  },
  {
    id: "q19",
    section: "4. Entrenamiento práctico",
    kind: "single",
    prompt: "¿Qué problema de AdaGrad corrige RMSProp?",
    options: [
      {
        id: "a",
        text: "La falta de una media móvil del gradiente, que Adam añade junto con la de su cuadrado.",
        correct: false,
      },
      {
        id: "b",
        text: "La acumulación ilimitada de gradientes cuadrados, que puede reducir demasiado la tasa efectiva.",
        correct: true,
      },
      {
        id: "c",
        text: "La oscilación del SGD, que el momento amortigua acumulando una velocidad.",
        correct: false,
      },
      {
        id: "d",
        text: "El uso de una tasa distinta por parámetro, que RMSProp reemplaza por una tasa global fija.",
        correct: false,
      },
    ],
    explanation:
      "AdaGrad divide por la raíz de los cuadrados acumulados desde el principio, así que la tasa efectiva puede caer hasta casi detener el aprendizaje. RMSProp sustituye esa suma por una media móvil exponencial. Sigue siendo adaptativo por parámetro; la media del gradiente, no solo de su cuadrado, es lo que añade Adam.",
  },
  {
    id: "q20",
    section: "4. Entrenamiento práctico",
    kind: "boolean",
    prompt:
      "Durante la inferencia, la normalización por lotes usa la media y la varianza del lote de solicitudes que acaba de llegar.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "En entrenamiento se normaliza con la media y la varianza del minilote. En inferencia se usan estadísticas acumuladas durante el entrenamiento, no las de un lote nuevo. Después siguen aplicándose la escala γ y el desplazamiento β aprendidos.",
  },
  {
    id: "q21",
    section: "4. Entrenamiento práctico",
    kind: "single",
    prompt:
      "Una ReLU muerta y la saturación de una sigmoide se parecen en que el gradiente se anula. ¿En qué se distinguen?",
    options: [
      {
        id: "a",
        text: "La ReLU muerta queda siempre en el tramo negativo; la sigmoide se satura en los extremos de gran magnitud, positiva o negativa.",
        correct: true,
      },
      {
        id: "b",
        text: "La sigmoide se satura solo para z negativo; la ReLU, solo para z positivo.",
        correct: false,
      },
      {
        id: "c",
        text: "La ReLU muerta conserva una pendiente α pequeña; la sigmoide no tiene remedio equivalente.",
        correct: false,
      },
      {
        id: "d",
        text: "Ninguna de las dos deja de transmitir gradiente: el problema es de la tasa de aprendizaje, no de la activación.",
        correct: false,
      },
    ],
    explanation:
      "ReLU(z) = max(0, z). Si la unidad queda siempre en z < 0, su salida y su gradiente son cero. La sigmoide se aplana tanto al acercarse a 0 como al acercarse a 1. La pendiente α pequeña es la de Leaky ReLU y PReLU, pensadas precisamente para evitar unidades del todo inactivas.",
  },
  {
    id: "q22",
    section: "4. Entrenamiento práctico",
    kind: "single",
    prompt:
      "¿Por qué la inicialización He usa Var(W) ≈ 2 / n_in y no la de Xavier?",
    options: [
      {
        id: "a",
        text: "Porque Xavier no rompe la simetría y He sí asigna valores distintos a cada unidad.",
        correct: false,
      },
      {
        id: "b",
        text: "Porque está pensada para ReLU, que anula los negativos y, bajo sus hipótesis, requiere compensar esa pérdida de varianza.",
        correct: true,
      },
      {
        id: "c",
        text: "Porque He incluye el número de salidas y Xavier solo el de entradas.",
        correct: false,
      },
      {
        id: "d",
        text: "Porque He fija la desviación estándar en 2 / n_in, no en su raíz cuadrada.",
        correct: false,
      },
    ],
    explanation:
      "Xavier escala con 2 / (n_in + n_out) para conservar la varianza con activaciones que no anulan la mitad de la señal. He compensa, bajo sus hipótesis, que ReLU elimine los negativos, y por eso depende solo de n_in con un factor 2. Si se muestrea de una normal, la desviación estándar es la raíz de esa varianza, no la varianza misma.",
  },
  {
    id: "q23",
    section: "5. Redes neuronales convolucionales",
    kind: "single",
    prompt:
      "¿Por qué una capa convolucional necesita muchos menos parámetros que una capa densa aplicada a todos los píxeles?",
    options: [
      {
        id: "a",
        text: "Porque el pooling elimina pesos y deja solo el máximo de cada ventana.",
        correct: false,
      },
      {
        id: "b",
        text: "Porque cada filtro es local y sus pesos se reutilizan en todas las posiciones.",
        correct: true,
      },
      {
        id: "c",
        text: "Porque cada unidad de salida se conecta con todas las entradas, pero solo una vez.",
        correct: false,
      },
      {
        id: "d",
        text: "Porque el aumento de datos reduce el número de pesos que hay que almacenar.",
        correct: false,
      },
    ],
    explanation:
      "El filtro mira una vecindad y el mismo tensor de pesos se desplaza por toda la entrada. Esa compartición, no la conectividad total, es lo que reduce parámetros. El pooling no tiene pesos, pero no es la razón de que la convolución sea ligera. El aumento de datos multiplica ejemplos, no comprime el modelo.",
  },
  {
    id: "q24",
    section: "5. Redes neuronales convolucionales",
    kind: "boolean",
    prompt:
      "Con una entrada de tamaño 5, un filtro de tamaño 3, relleno P = 1 y paso S = 1, la salida espacial mide 5.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "La fórmula es ⌊(N − F + 2P) / S⌋ + 1. Sustituyendo: ⌊(5 − 3 + 2) / 1⌋ + 1 = 5. El relleno de un píxel a cada lado compensa el filtro 3×3 cuando el paso es 1, y la fórmula supone un filtro sin dilatación.",
  },
  {
    id: "q25",
    section: "5. Redes neuronales convolucionales",
    kind: "multi",
    prompt:
      "¿Cuáles de estas descripciones emparejan bien la tarea con lo que produce el modelo? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "La clasificación de imágenes asigna una o varias categorías a la imagen completa.",
        correct: true,
      },
      {
        id: "b",
        text: "La detección estima qué objetos hay y dónde, mediante regiones o cajas delimitadoras.",
        correct: true,
      },
      {
        id: "c",
        text: "La segmentación asigna una clase a cada píxel o región y conserva la distribución espacial.",
        correct: true,
      },
      {
        id: "d",
        text: "La recuperación de imágenes devuelve una caja por cada objeto parecido del conjunto de búsqueda.",
        correct: false,
      },
    ],
    explanation:
      "Clasificación, detección y segmentación quedan bien descritas. La recuperación busca imágenes parecidas comparando representaciones, no devuelve una caja por objeto: eso mezcla la tarea con la detección.",
  },
  {
    id: "q26",
    section: "5. Redes neuronales convolucionales",
    kind: "single",
    prompt:
      "En aprendizaje por transferencia con un conjunto nuevo pequeño, ¿para qué se congelan capas?",
    options: [
      {
        id: "a",
        text: "Para que el aumento de datos no altere las etiquetas de los recortes y reflejos.",
        correct: false,
      },
      {
        id: "b",
        text: "Para mantener fijos parte de los pesos, reducir lo que hay que ajustar y no perder las representaciones generales ya aprendidas.",
        correct: true,
      },
      {
        id: "c",
        text: "Para convertir los filtros 3×3 de VGG en un campo receptivo mayor sin añadir parámetros.",
        correct: false,
      },
      {
        id: "d",
        text: "Para que el pooling deje de ser una operación fija y pase a tener pesos entrenables.",
        correct: false,
      },
    ],
    explanation:
      "Congelar es decidir que ciertos pesos no se actualicen. Con pocos datos nuevos conviene reajustar solo las capas finales y conservar las representaciones generales de las primeras. No tiene que ver con el aumento de datos ni convierte el pooling en una capa con parámetros.",
  },
  {
    id: "q27",
    section: "6. Representaciones del lenguaje",
    kind: "single",
    prompt:
      "¿Qué limitación concreta tiene una representación discreta frente a un embedding?",
    options: [
      {
        id: "a",
        text: "Dos palabras distintas quedan en direcciones ortogonales aunque sus significados sean cercanos.",
        correct: true,
      },
      {
        id: "b",
        text: "Reparte el significado entre muchas dimensiones aprendidas y acerca las palabras de contextos parecidos.",
        correct: false,
      },
      {
        id: "c",
        text: "Ignora el orden de las palabras, aunque conserva su frecuencia.",
        correct: false,
      },
      {
        id: "d",
        text: "Exige un recurso léxico mantenido a mano, como WordNet, para existir.",
        correct: false,
      },
    ],
    explanation:
      "En una codificación discreta cada palabra ocupa su propia dimensión, así que términos distintos no comparten geometría. El vector denso es el que reparte el significado y acerca contextos parecidos. Ignorar el orden es propio de la bolsa de palabras, que puede ser discreta, pero no es la limitación que define a toda representación discreta.",
  },
  {
    id: "q28",
    section: "6. Representaciones del lenguaje",
    kind: "boolean",
    prompt:
      "Skip-gram predice la palabra central a partir del contexto; CBOW hace lo contrario.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "Es al revés. Skip-gram parte de la palabra central y predice las del contexto. CBOW combina el contexto para predecir la palabra central. CBOW invierte la dirección predictiva de skip-gram, no al contrario.",
  },
  {
    id: "q29",
    section: "6. Representaciones del lenguaje",
    kind: "single",
    prompt: "¿Qué coste evita el muestreo negativo en Word2Vec?",
    options: [
      {
        id: "a",
        text: "Calcular la similitud coseno entre todos los pares del vocabulario al final de cada época.",
        correct: false,
      },
      {
        id: "b",
        text: "Normalizar la softmax sobre todo el vocabulario en cada actualización.",
        correct: true,
      },
      {
        id: "c",
        text: "Mantener una ventana de contexto a ambos lados de la palabra central.",
        correct: false,
      },
      {
        id: "d",
        text: "Entrenar dos juegos de vectores, uno para la palabra central y otro para el contexto.",
        correct: false,
      },
    ],
    explanation:
      "La softmax del objetivo exige un denominador con una exponencial por palabra del vocabulario. El muestreo negativo contrasta el par observado con unos pocos pares negativos y así evita esa normalización completa. La ventana de contexto sigue haciendo falta para definir qué pares son positivos.",
  },
  {
    id: "q30",
    section: "6. Representaciones del lenguaje",
    kind: "multi",
    prompt:
      "Sobre la similitud coseno entre dos embeddings no nulos, ¿qué afirmaciones son correctas? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Vale 1 cuando los vectores tienen la misma dirección, aunque su magnitud difiera.",
        correct: true,
      },
      {
        id: "b",
        text: "Vale 0 cuando las direcciones son perpendiculares.",
        correct: true,
      },
      {
        id: "c",
        text: "Crece cuando los dos vectores se alargan sin cambiar de dirección.",
        correct: false,
      },
      {
        id: "d",
        text: "Puede valer −1 si las direcciones son opuestas.",
        correct: true,
      },
    ],
    explanation:
      "El coseno divide el producto escalar por las dos normas, así que compara dirección y no escala: alargar ambos vectores no lo cambia. Los valores 1, 0 y −1 corresponden a la misma dirección, a direcciones perpendiculares y a direcciones opuestas.",
  },
  {
    id: "q31",
    section: "7. Redes neuronales recurrentes",
    kind: "single",
    prompt:
      "¿Qué problema de una RNN básica ataca la ruta aditiva del estado de celda de una LSTM?",
    options: [
      {
        id: "a",
        text: "El gradiente explosivo, reescalando el estado cuando su norma supera un umbral.",
        correct: false,
      },
      {
        id: "b",
        text: "La dificultad para conservar dependencias largas, porque el gradiente de una RNN básica se degrada al atravesar muchos pasos.",
        correct: true,
      },
      {
        id: "c",
        text: "La imposibilidad de compartir las matrices de pesos entre pasos temporales.",
        correct: false,
      },
      {
        id: "d",
        text: "La necesidad de leer la secuencia en los dos sentidos para usar contexto futuro.",
        correct: false,
      },
    ],
    explanation:
      "En una RNN básica el estado pasa una y otra vez por una transformación con tanh, y el gradiente puede desvanecerse. La celda de la LSTM se actualiza sumando memoria anterior y candidata, con puertas que regulan esa suma, y esa ruta aditiva facilita dependencias más largas. El recorte de gradiente mitiga explosiones, no desvanecimientos, y la lectura bidireccional es otra arquitectura.",
  },
  {
    id: "q32",
    section: "7. Redes neuronales recurrentes",
    kind: "boolean",
    prompt:
      "El recorte de gradiente evita tanto los gradientes explosivos como los desvanecidos.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "El recorte reescala el gradiente cuando su norma supera un umbral, conservando la dirección. Mitiga explosiones. No amplifica un gradiente que ya se acercó a cero, así que no resuelve el desvanecimiento.",
  },
  {
    id: "q33",
    section: "7. Redes neuronales recurrentes",
    kind: "multi",
    prompt:
      "¿Cuáles de estas descripciones de las puertas de una LSTM son correctas? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "La puerta de olvido decide cuánto de la memoria anterior se conserva.",
        correct: true,
      },
      {
        id: "b",
        text: "La puerta de entrada regula cuánto de la memoria candidata se incorpora.",
        correct: true,
      },
      {
        id: "c",
        text: "La puerta de salida controla qué parte del estado se expone como estado oculto.",
        correct: true,
      },
      {
        id: "d",
        text: "Las tres puertas sustituyen al estado de celda, que en una LSTM no existe.",
        correct: false,
      },
    ],
    explanation:
      "Las tres puertas son vectores entre cero y uno que controlan la celda: olvido, escritura y exposición. No la sustituyen. El estado de celda es precisamente la memoria que esas puertas regulan; la GRU es la variante que combina memoria y estado oculto en un solo vector.",
  },
  {
    id: "q34",
    section: "7. Redes neuronales recurrentes",
    kind: "single",
    prompt: "¿Qué conserva y qué limita la BPTT truncada?",
    options: [
      {
        id: "a",
        text: "Corta la secuencia, descarta el estado al final de cada fragmento y así ahorra memoria.",
        correct: false,
      },
      {
        id: "b",
        text: "Limita cuántos pasos atraviesa el gradiente, pero conserva el estado entre fragmentos.",
        correct: true,
      },
      {
        id: "c",
        text: "Calcula el gradiente completo de la secuencia y solo trunca la actualización de los pesos.",
        correct: false,
      },
      {
        id: "d",
        text: "Reemplaza la retropropagación por un muestreo autoregresivo de los pasos lejanos.",
        correct: false,
      },
    ],
    explanation:
      "TBPTT divide secuencias largas y no propaga el gradiente más allá de una ventana, lo que reduce memoria y coste. El estado oculto sí continúa de un fragmento al siguiente. No es un recorte de la actualización ni tiene relación con el muestreo autoregresivo.",
  },
  {
    id: "q35",
    section: "8. Aprendizaje por refuerzo",
    kind: "single",
    prompt:
      "En un proceso de decisión de Markov, ¿qué afirma la propiedad de Markov?",
    options: [
      {
        id: "a",
        text: "La recompensa inmediata basta para ordenar las políticas, sin mirar el retorno futuro.",
        correct: false,
      },
      {
        id: "b",
        text: "Dado el estado y la acción actuales, el pasado no aporta información adicional sobre la transición siguiente.",
        correct: true,
      },
      {
        id: "c",
        text: "La política óptima es única, porque el valor de cada acción queda determinado por el historial completo.",
        correct: false,
      },
      {
        id: "d",
        text: "El agente debe alternar exploración y explotación con probabilidad ε en cada paso.",
        correct: false,
      },
    ],
    explanation:
      "La propiedad dice que s_t y a_t resumen todo lo relevante para modelar la transición siguiente. No afirma que baste la recompensa inmediata, ni que la política óptima sea única: puede haber varias acciones con el mismo valor. ε-greedy es una forma de explorar, no parte de la definición del MDP.",
  },
  {
    id: "q36",
    section: "8. Aprendizaje por refuerzo",
    kind: "boolean",
    prompt:
      "Q-learning exige que la política con la que se recogen las transiciones sea la misma política óptima que se está evaluando.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "Q-learning aprende valores de acción a partir de transiciones sin exigir que la política de comportamiento sea la política óptima que se evalúa. Por eso puede aprender mientras explora. Confundirlo con un método que solo evalúa la política que está siguiendo invierte esa propiedad.",
  },
  {
    id: "q37",
    section: "8. Aprendizaje por refuerzo",
    kind: "multi",
    prompt:
      "¿Cuáles de estos mecanismos forman parte del Deep Q-learning descrito en el glosario? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Una red Q(s, a; θ) que aproxima el valor de acción cuando el espacio de estados es enorme.",
        correct: true,
      },
      {
        id: "b",
        text: "Un buffer de transiciones del que se extraen minilotes aleatorios.",
        correct: true,
      },
      {
        id: "c",
        text: "Una red objetivo cuyos parámetros se actualizan con menor frecuencia que los de la red entrenada.",
        correct: true,
      },
      {
        id: "d",
        text: "Una tabla explícita de valores que se actualiza con la ecuación de Bellman en cada estado.",
        correct: false,
      },
    ],
    explanation:
      "DQN sustituye la tabla, inviable en espacios enormes, por una red. La memoria de repetición reduce la correlación entre ejemplos consecutivos y la red objetivo estabiliza el objetivo de Bellman. La tabla explícita corresponde a la iteración de valores clásica, no a la variante profunda.",
  },
  {
    id: "q38",
    section: "8. Aprendizaje por refuerzo",
    kind: "single",
    prompt:
      "Con γ = 0.9, ¿qué peso recibe en G_t la recompensa que llega tres pasos después de t?",
    options: [
      {
        id: "a",
        text: "0.9³ = 0.729, porque k cuenta los pasos de descuento desde la recompensa inmediata.",
        correct: false,
      },
      {
        id: "b",
        text: "0.9² = 0.81, porque la recompensa r_{t+1} entra sin descuento y k empieza en cero.",
        correct: true,
      },
      {
        id: "c",
        text: "0.9, porque el factor se aplica una sola vez a todo el retorno futuro.",
        correct: false,
      },
      {
        id: "d",
        text: "1, porque tres pasos todavía cuentan como recompensa inmediata en la suma.",
        correct: false,
      },
    ],
    explanation:
      "G_t = Σ γ^k r_{t+k+1}, con k desde cero. La primera recompensa, r_{t+1}, lleva γ⁰ = 1. La que llega tres pasos después es r_{t+3}, así que k = 2 y el peso es 0.9² = 0.81. Contar k = 3 confunde el índice de la suma con el número de pasos de calendario.",
  },
  {
    id: "q39",
    section: "9. GPU y entrenamiento distribuido",
    kind: "single",
    prompt:
      "¿En qué se distingue el paralelismo de datos del paralelismo de modelo?",
    options: [
      {
        id: "a",
        text: "El de datos reparte capas entre dispositivos; el de modelo replica la red y reparte ejemplos.",
        correct: false,
      },
      {
        id: "b",
        text: "El de datos replica el modelo y reparte ejemplos; el de modelo divide la red entre dispositivos.",
        correct: true,
      },
      {
        id: "c",
        text: "El de datos solo funciona con SGD asíncrono; el de modelo exige promedio síncrono de parámetros.",
        correct: false,
      },
      {
        id: "d",
        text: "El de modelo evita toda comunicación; el de datos la concentra en un servidor de parámetros.",
        correct: false,
      },
    ],
    explanation:
      "En paralelismo de datos cada trabajador tiene una copia y un subconjunto de ejemplos, y luego se combinan gradientes o parámetros. En paralelismo de modelo la red se parte porque no cabe en un solo acelerador, y sus partes tienen que comunicarse. Ninguno de los dos está atado a un único esquema síncrono o asíncrono.",
  },
  {
    id: "q40",
    section: "9. GPU y entrenamiento distribuido",
    kind: "boolean",
    prompt:
      "Un gradiente obsoleto es el que se calculó con una versión de los parámetros que otros trabajadores ya modificaron.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "En el SGD asíncrono un trabajador puede enviar un gradiente calculado sobre parámetros que ya cambiaron. Un retraso excesivo deteriora la convergencia. No es lo mismo que un gradiente recortado ni que uno estimado con un minilote pequeño.",
  },
  {
    id: "q41",
    section: "9. GPU y entrenamiento distribuido",
    kind: "multi",
    prompt:
      "¿Cuáles de estas afirmaciones sobre el cómputo del entrenamiento son correctas? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Una GPU resulta eficaz en productos de matrices y convoluciones por su gran cantidad de núcleos simples.",
        correct: true,
      },
      {
        id: "b",
        text: "El entrenamiento puede quedar limitado por el ancho de banda de memoria aunque sobre capacidad aritmética.",
        correct: true,
      },
      {
        id: "c",
        text: "Un cuello de botella de entrada se corrige subiendo la tasa de aprendizaje.",
        correct: false,
      },
      {
        id: "d",
        text: "cuDNN implementa primitivas como convoluciones y pooling para GPU NVIDIA, y los frameworks suelen ocultar ese nivel.",
        correct: true,
      },
    ],
    explanation:
      "La GPU acelera el álgebra masiva; la memoria puede ser el límite real; y cuDNN aporta las primitivas que el framework llama por debajo. El cuello de botella de entrada es de lectura, decodificación o transformación de datos, y se mitiga con almacenamiento rápido, procesamiento paralelo y carga anticipada, no tocando η.",
  },
  {
    id: "q42",
    section: "10. Nube y puesta en producción",
    kind: "single",
    prompt: "¿Qué es la desviación entre entrenamiento y servicio?",
    options: [
      {
        id: "a",
        text: "La diferencia entre una métrica agregada y el desempeño de un grupo pequeño.",
        correct: false,
      },
      {
        id: "b",
        text: "La degradación que aparece cuando los datos o las transformaciones de la predicción no coinciden con los del entrenamiento.",
        correct: true,
      },
      {
        id: "c",
        text: "El aumento de latencia que produce esperar a formar un lote de inferencia.",
        correct: false,
      },
      {
        id: "d",
        text: "La distancia entre la métrica offline, calculada antes del despliegue, y la métrica online.",
        correct: false,
      },
    ],
    explanation:
      "El skew aparece cuando el preprocesamiento, el esquema o la distribución cambian entre el entrenamiento y la predicción, o cuando la población real se desplaza. La brecha entre métrica agregada y subpoblación es otro problema. El coste de latencia del batching y la diferencia offline/online son fenómenos distintos, aunque también importen en producción.",
  },
  {
    id: "q43",
    section: "10. Nube y puesta en producción",
    kind: "boolean",
    prompt:
      "El batching de inferencia mejora el rendimiento total sin ningún efecto sobre la latencia de cada solicitud.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "Agrupar solicitudes aprovecha operaciones vectorizadas y sube el rendimiento. Esperar a completar el lote puede aumentar la latencia individual. Por eso el buffer necesita límites de tiempo y de tamaño, no solo de tamaño.",
  },
  {
    id: "q44",
    section: "10. Nube y puesta en producción",
    kind: "multi",
    prompt:
      "Antes de sustituir el modelo en producción, ¿qué debe comprobar una validación seria? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Que las métricas globales no empeoren respecto de la versión vigente.",
        correct: true,
      },
      {
        id: "b",
        text: "Que el desempeño por segmentos relevantes no oculte una regresión.",
        correct: true,
      },
      {
        id: "c",
        text: "Que el artefacto sea compatible con el servicio que lo va a cargar.",
        correct: true,
      },
      {
        id: "d",
        text: "Que el error de entrenamiento haya seguido bajando hasta la última época.",
        correct: false,
      },
    ],
    explanation:
      "La validación del modelo es una puerta de despliegue: compatibilidad, métricas globales, desempeño por segmentos y ausencia de regresiones frente a la versión vigente. Que el error de entrenamiento siga bajando no dice nada sobre la generalización y puede ser síntoma de sobreajuste.",
  },
  {
    id: "q45",
    section: "10. Nube y puesta en producción",
    kind: "single",
    prompt:
      "Según el estado descrito para 2026, ¿cuál de estos servidores ya no es una opción mantenida?",
    options: [
      {
        id: "a",
        text: "TensorFlow Serving, específico para modelos de TensorFlow.",
        correct: false,
      },
      {
        id: "b",
        text: "Clipper, conservado como artefacto de investigación sin mantenimiento.",
        correct: true,
      },
      {
        id: "c",
        text: "KServe sobre Kubernetes, como plataforma multiformato.",
        correct: false,
      },
      {
        id: "d",
        text: "NVIDIA Triton Inference Server.",
        correct: false,
      },
    ],
    explanation:
      "Clipper ya no se mantiene. MXNet Model Server también quedó archivado. TensorFlow Serving sigue disponible para TensorFlow, y KServe y Triton son equivalentes actuales para una plataforma nueva y multiformato.",
  },
  {
    id: "q46",
    section: "11. Modelos generativos y metaaprendizaje",
    kind: "single",
    prompt: "¿Qué coloca a una GAN en la estimación implícita de densidad?",
    options: [
      {
        id: "a",
        text: "Aprende un procedimiento para generar muestras sin evaluar la densidad de cada dato.",
        correct: true,
      },
      {
        id: "b",
        text: "Representa de forma directa una función de probabilidad sobre los datos, como un VAE.",
        correct: false,
      },
      {
        id: "c",
        text: "Factoriza la probabilidad conjunta en probabilidades condicionadas de píxeles.",
        correct: false,
      },
      {
        id: "d",
        text: "Optimiza una cota variacional que combina reconstrucción y regularización del espacio latente.",
        correct: false,
      },
    ],
    explanation:
      "Una GAN no calcula la densidad de un dato: el generador transforma ruido en muestras y el discriminador las juzga. Eso es estimación implícita. La densidad explícita incluye modelos autoregresivos, como PixelCNN, y a los VAE, cuya cota variacional sí combina reconstrucción y regularización latente.",
  },
  {
    id: "q47",
    section: "11. Modelos generativos y metaaprendizaje",
    kind: "boolean",
    prompt:
      "En el juego minimax de una GAN, el generador busca minimizar el objetivo que el discriminador busca maximizar.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "El discriminador maximiza la clasificación correcta de reales y generados; el generador intenta que sus muestras se acepten como reales. El objetivo se escribe min_G max_D. Si una de las dos redes domina demasiado pronto, la otra recibe una señal poco útil.",
  },
  {
    id: "q48",
    section: "11. Modelos generativos y metaaprendizaje",
    kind: "multi",
    prompt:
      "¿Cuáles de estas afirmaciones separan bien el metaaprendizaje de técnicas vecinas? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Ajustar hiperparámetros para una tarea concreta no implica aprender una estrategia transferible entre tareas.",
        correct: true,
      },
      {
        id: "b",
        text: "El meta-learner modifica cómo se inicializa, actualiza o diseña al learner que resuelve cada tarea.",
        correct: true,
      },
      {
        id: "c",
        text: "En la búsqueda de arquitecturas, el controlador propone redes hijas y usa su rendimiento como señal.",
        correct: true,
      },
      {
        id: "d",
        text: "La metaprueba reutiliza las mismas tareas del metaentrenamiento, solo que con más ejemplos etiquetados.",
        correct: false,
      },
    ],
    explanation:
      "Elegir hiperparámetros no es metaaprendizaje. El meta-learner actúa sobre el proceso de adaptación, y en NAS el controlador propone arquitecturas que la red hija evalúa. La metaprueba mide ese mecanismo en tareas separadas, no en las mismas del metaentrenamiento ni con más datos.",
  },
];
