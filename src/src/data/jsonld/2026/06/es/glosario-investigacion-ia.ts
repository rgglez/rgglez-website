export default function getJsonLd(base: string): Record<string, unknown>[] {
  return [
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#termset`,
      name: "Glosario de investigación en inteligencia artificial",
      description:
        "Glosario verboso y explicativo sobre investigación científica enfocada en inteligencia artificial, con mapas mentales Mermaid y referencias APA 7.",
      url: base,
      inLanguage: "es",
      hasPart: [
        {
          "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
        },
        { "@id": `${base}#section-metodologias-y-diseno-de-investigacion` },
        {
          "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
        },
        {
          "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
        },
        { "@id": `${base}#section-fundamentos-de-inteligencia-artificial` },
        {
          "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
        },
        {
          "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
        },
        {
          "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
        },
        {
          "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
        },
        { "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      name: "Fundamentos epistemológicos y método científico",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-ciencia`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-conocimiento`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-creencia`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-observacion`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-pregunta-de-investigacion`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-problema-de-investigacion`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-motivacion-o-justificacion`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-hipotesis`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-evidencia`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-metodo-cientifico`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-repetibilidad`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-reproducibilidad`,
        },
        {
          "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-revision-por-pares`,
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-ciencia`,
      name: "Ciencia",
      description:
        "La ciencia es una actividad sistemática orientada a obtener conocimiento verificable mediante observación, razonamiento, contrastación y organización de resultados. No se limita a acumular datos: transforma observaciones en explicaciones, modelos, teorías o métodos que pueden ponerse a prueba.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-conocimiento`,
      name: "Conocimiento",
      description:
        "Conocimiento es información justificada, contrastada y contextualizada. Se diferencia de la opinión o la creencia porque exige evidencia, método y posibilidad de revisión.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-creencia`,
      name: "Creencia",
      description:
        "Una creencia es una afirmación aceptada sin necesidad de demostración empírica o lógica suficiente. Puede ser razonable, intuitiva o culturalmente compartida, pero no tiene el mismo estatus que el conocimiento científico.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-observacion`,
      name: "Observación",
      description:
        "La observación es la identificación sistemática de un fenómeno, patrón, comportamiento o problema. Puede surgir de datos, literatura, comportamiento de usuarios, errores de sistemas, métricas de producción o fenómenos sociales asociados a una tecnología.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-pregunta-de-investigacion`,
      name: "Pregunta de investigación",
      description:
        "Es la formulación precisa de lo que se desea descubrir, explicar, comparar o validar. Una buena pregunta delimita objeto, población, método, variable de interés y criterio de éxito.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-problema-de-investigacion`,
      name: "Problema de investigación",
      description:
        "Es la situación concreta que motiva la investigación y que aún no está resuelta satisfactoriamente. Debe ser relevante, delimitado y susceptible de abordaje metodológico.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-motivacion-o-justificacion`,
      name: "Motivación o justificación",
      description:
        "Es la explicación de por qué vale la pena investigar un problema. Incluye relevancia científica, técnica, social, económica, ética o educativa.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-hipotesis`,
      name: "Hipótesis",
      description:
        "Una hipótesis es una respuesta tentativa y contrastable a una pregunta de investigación. Debe formular una relación esperada entre variables, condiciones o fenómenos.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-evidencia`,
      name: "Evidencia",
      description:
        "La evidencia es el conjunto de datos, resultados, argumentos y observaciones que apoyan o refutan una hipótesis. Debe ser trazable, revisable y proporcional a la afirmación realizada.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-metodo-cientifico`,
      name: "Método científico",
      description:
        "Es un proceso general para obtener conocimiento: observar, formular preguntas, proponer hipótesis, experimentar, analizar, concluir y comunicar. No es una receta rígida, sino un marco de control intelectual.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-repetibilidad`,
      name: "Repetibilidad",
      description:
        "La repetibilidad es la capacidad de obtener el mismo resultado cuando el mismo equipo repite el experimento bajo las mismas condiciones, con los mismos datos, código, configuración y entorno.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-reproducibilidad`,
      name: "Reproducibilidad",
      description:
        "La reproducibilidad es la capacidad de que un equipo independiente obtenga resultados equivalentes siguiendo la descripción del método, usando el mismo material o material comparable.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-epistemologicos-y-metodo-cientifico-revision-por-pares`,
      name: "Revisión por pares",
      description:
        "La revisión por pares es el proceso mediante el cual especialistas evalúan la calidad, originalidad, claridad y solidez metodológica de un trabajo antes de su publicación o aceptación.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-epistemologicos-y-metodo-cientifico`,
      },
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      name: "Metodologías y diseño de investigación",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metodologia`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metodo-logico-deductivo`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-deduccion`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-induccion`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-inferencia`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metodo-empirico`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-experimento`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-cuasiexperimento`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metodo-descriptivo`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metodo-correlacional`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metaanalisis`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-investigacion-cuantitativa`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-investigacion-cualitativa`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-variable-independiente`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-variable-dependiente`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-variable-de-confusion`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-muestra`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-muestreo`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-grupo-de-control`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-validez-interna`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-validez-externa`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-validez-de-constructo`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-tamano-del-efecto`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-intervalo-de-confianza`,
        },
        {
          "@id": `${base}#term-metodologias-y-diseno-de-investigacion-valor-p`,
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metodologia`,
      name: "Metodología",
      description:
        "La metodología es el conjunto de procedimientos, criterios y decisiones que orientan cómo se investigará un problema. Incluye el tipo de estudio, los datos, las variables, los instrumentos, el análisis y el criterio para aceptar o rechazar una hipótesis.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metodo-logico-deductivo`,
      name: "Método lógico-deductivo",
      description:
        "Es un método que parte de premisas, axiomas o conocimientos aceptados para derivar conclusiones mediante razonamiento lógico.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-deduccion`,
      name: "Deducción",
      description:
        "La deducción obtiene conclusiones particulares a partir de principios generales. Si las premisas son verdaderas y el razonamiento es válido, la conclusión se sostiene lógicamente.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-induccion`,
      name: "Inducción",
      description:
        "La inducción infiere regularidades generales a partir de casos particulares. Es la base de gran parte del aprendizaje automático.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-inferencia`,
      name: "Inferencia",
      description:
        "La inferencia es el proceso de obtener una conclusión a partir de premisas, evidencia o datos. Puede ser lógica, estadística, causal o computacional.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metodo-empirico`,
      name: "Método empírico",
      description:
        "Es un método que obtiene conocimiento mediante experiencia, observación y experimentación. No basta con razonar; se contrasta el fenómeno con datos.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-experimento`,
      name: "Experimento",
      description:
        "Un experimento manipula una o más variables independientes y observa sus efectos sobre variables dependientes bajo condiciones controladas.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-cuasiexperimento`,
      name: "Cuasiexperimento",
      description:
        "Es un diseño que busca inferir relaciones causales, pero no logra control experimental completo, especialmente cuando no es posible asignar sujetos o unidades de forma aleatoria.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metodo-descriptivo`,
      name: "Método descriptivo",
      description:
        "Describe características de un objeto, fenómeno, población o sistema sin manipular variables.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metodo-correlacional`,
      name: "Método correlacional",
      description:
        "Estudia relaciones entre variables tal como se presentan, sin manipulación experimental. Permite detectar asociaciones, pero no prueba causalidad por sí mismo.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-metaanalisis`,
      name: "Metaanálisis",
      description:
        "Es una síntesis cuantitativa de resultados de estudios previos. Busca integrar evidencia y estimar efectos generales.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-investigacion-cuantitativa`,
      name: "Investigación cuantitativa",
      description:
        "Es una metodología que trabaja con variables medibles, datos numéricos y análisis estadístico. Busca estimar relaciones, probar hipótesis o comparar resultados.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-investigacion-cualitativa`,
      name: "Investigación cualitativa",
      description:
        "Es una metodología orientada a comprender significados, experiencias, percepciones, prácticas y contextos. Usa entrevistas, observación, grupos focales, análisis documental o codificación temática.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-variable-independiente`,
      name: "Variable independiente",
      description:
        "Es la variable que el investigador manipula o selecciona para observar su efecto.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-variable-dependiente`,
      name: "Variable dependiente",
      description:
        "Es la variable que se mide como resultado o efecto de la variable independiente.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-variable-de-confusion`,
      name: "Variable de confusión",
      description:
        "Es una variable no controlada que influye tanto en la supuesta causa como en el efecto, produciendo una relación engañosa.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-muestra`,
      name: "Muestra",
      description:
        "Es el subconjunto de casos, sujetos, registros o documentos usado para estudiar una población mayor.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-muestreo`,
      name: "Muestreo",
      description:
        "Es el procedimiento para seleccionar una muestra. Puede ser aleatorio, estratificado, por conveniencia, intencional, temporal o basado en criterios.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-grupo-de-control`,
      name: "Grupo de control",
      description:
        "Es el grupo o condición que no recibe la intervención experimental y sirve como referencia para comparar efectos.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-validez-interna`,
      name: "Validez interna",
      description:
        "Es el grado en que un estudio permite atribuir el efecto observado a la variable estudiada, y no a factores externos.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-validez-externa`,
      name: "Validez externa",
      description:
        "Es el grado en que los resultados pueden generalizarse a otros contextos, poblaciones, datos, entornos o momentos.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-validez-de-constructo`,
      name: "Validez de constructo",
      description:
        "Es el grado en que una medición representa realmente el concepto que dice medir.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-tamano-del-efecto`,
      name: "Tamaño del efecto",
      description:
        "Es una medida de magnitud práctica de una diferencia o relación, más allá de si es estadísticamente significativa.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-intervalo-de-confianza`,
      name: "Intervalo de confianza",
      description:
        "Es un rango de valores plausibles para una estimación, bajo un nivel de confianza dado. Permite expresar incertidumbre.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-metodologias-y-diseno-de-investigacion-valor-p`,
      name: "Valor p",
      description:
        "El valor p expresa qué tan compatible es un resultado con una hipótesis nula bajo supuestos estadísticos específicos. No mide la probabilidad de que la hipótesis sea verdadera.",
      inDefinedTermSet: {
        "@id": `${base}#section-metodologias-y-diseno-de-investigacion`,
      },
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      name: "Búsqueda bibliográfica, fuentes y comunicación científica",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-estado-del-arte`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-revision-bibliografica`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-revision-sistematica`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-estrategia-de-busqueda`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-fuente-primaria`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-fuente-secundaria`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-base-de-datos-bibliografica`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-gestor-bibliografico`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-articulo-cientifico`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-congreso`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-revista-cientifica`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-ponencia`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-preprint`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-acceso-abierto`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-cita`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-referencia-bibliografica`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-apa-7`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-plagio`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-derechos-de-autor`,
        },
        {
          "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-licencia`,
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-estado-del-arte`,
      name: "Estado del arte",
      description:
        "Es la revisión organizada de lo que se sabe, se ha probado, se discute y permanece abierto en un campo de investigación.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-revision-bibliografica`,
      name: "Revisión bibliográfica",
      description:
        "Es la búsqueda, selección, lectura y síntesis de fuentes relevantes sobre un tema.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-revision-sistematica`,
      name: "Revisión sistemática",
      description:
        "Es una revisión bibliográfica con protocolo explícito: pregunta, criterios de inclusión y exclusión, bases consultadas, cadena de búsqueda, proceso de selección y síntesis.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-estrategia-de-busqueda`,
      name: "Estrategia de búsqueda",
      description:
        "Es el plan que define dónde, cómo y con qué términos se buscará información.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-fuente-primaria`,
      name: "Fuente primaria",
      description:
        "Es una fuente que reporta resultados originales: artículo científico, tesis, dataset, código de investigación o reporte técnico.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-fuente-secundaria`,
      name: "Fuente secundaria",
      description:
        "Es una fuente que analiza, sintetiza o interpreta fuentes primarias, como revisiones, libros, metaanálisis o surveys.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-base-de-datos-bibliografica`,
      name: "Base de datos bibliográfica",
      description:
        "Es una plataforma para localizar literatura académica, por ejemplo, Dialnet, Google Scholar, IEEE Xplore, ACM Digital Library, PubMed o Scopus.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-gestor-bibliografico`,
      name: "Gestor bibliográfico",
      description:
        "Es una herramienta para organizar referencias, PDFs, citas y bibliografía. Ejemplos: Zotero, Mendeley, JabRef, EndNote.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-articulo-cientifico`,
      name: "Artículo científico",
      description:
        "Es un documento académico que comunica una contribución original o una revisión de conocimiento, normalmente con introducción, método, resultados, discusión y referencias.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-congreso`,
      name: "Congreso",
      description:
        "Es un evento académico donde se presentan trabajos, ponencias, pósteres, talleres o demostraciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-revista-cientifica`,
      name: "Revista científica",
      description:
        "Es una publicación periódica que difunde trabajos académicos sometidos a revisión editorial o por pares.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-ponencia`,
      name: "Ponencia",
      description:
        "Es una presentación oral o escrita de una idea, avance, resultado o reflexión en un evento académico.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-preprint`,
      name: "Preprint",
      description:
        "Es una versión de un trabajo científico disponible públicamente antes de revisión formal por pares o antes de publicación definitiva.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-acceso-abierto`,
      name: "Acceso abierto",
      description:
        "Es un modelo de publicación que permite consultar trabajos académicos sin barreras económicas para el lector.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-cita`,
      name: "Cita",
      description:
        "Es la mención dentro del texto a una fuente usada para respaldar una afirmación, método, dato o idea.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-referencia-bibliografica`,
      name: "Referencia bibliográfica",
      description:
        "Es la entrada completa que permite identificar y localizar una fuente citada.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-apa-7`,
      name: "APA 7",
      description:
        "Es la séptima edición del estilo de citación de la American Psychological Association. Define cómo presentar citas y referencias.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-plagio`,
      name: "Plagio",
      description:
        "Es presentar ideas, texto, datos, código, figuras o resultados ajenos como propios, sin atribución adecuada.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-derechos-de-autor`,
      name: "Derechos de autor",
      description:
        "Son derechos legales sobre obras intelectuales como textos, figuras, software, bases de datos, imágenes y materiales docentes.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-busqueda-bibliografica-fuentes-y-comunicacion-cientifica-licencia`,
      name: "Licencia",
      description:
        "Es el conjunto de condiciones bajo las cuales puede usarse, modificarse o redistribuirse una obra.",
      inDefinedTermSet: {
        "@id": `${base}#section-busqueda-bibliografica-fuentes-y-comunicacion-cientifica`,
      },
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      name: "Gestión de proyectos de investigación en IA",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-proyecto-de-investigacion`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-ciencia-basada-en-proyectos`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-convocatoria-de-financiacion`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-propuesta-de-investigacion`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-objetivo-general`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-objetivos-especificos`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-paquete-de-trabajo`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-entregable`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-hito`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-cronograma`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-presupuesto`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-riesgo-de-proyecto`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-stakeholder`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-transferencia-tecnologica`,
        },
        {
          "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-trl-o-nivel-de-madurez-tecnologica`,
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-proyecto-de-investigacion`,
      name: "Proyecto de investigación",
      description:
        "Es una iniciativa planificada para responder una pregunta, resolver un problema o producir conocimiento nuevo mediante actividades coordinadas.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-ciencia-basada-en-proyectos`,
      name: "Ciencia basada en proyectos",
      description:
        "Es una forma de organizar investigación en torno a objetivos, recursos, responsables, etapas y resultados esperados.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-convocatoria-de-financiacion`,
      name: "Convocatoria de financiación",
      description:
        "Es un llamado institucional para presentar propuestas que compitan por recursos económicos o materiales.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-propuesta-de-investigacion`,
      name: "Propuesta de investigación",
      description:
        "Es el documento que plantea problema, objetivos, hipótesis, metodología, antecedentes, equipo, presupuesto, cronograma e impacto esperado.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-objetivo-general`,
      name: "Objetivo general",
      description: "Es la meta central del proyecto.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-objetivos-especificos`,
      name: "Objetivos específicos",
      description:
        "Son metas parciales que descomponen el objetivo general en actividades verificables.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-paquete-de-trabajo`,
      name: "Paquete de trabajo",
      description:
        "Es un bloque de actividades relacionadas dentro de un proyecto, con responsable, duración y entregables.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-entregable`,
      name: "Entregable",
      description:
        "Es un producto verificable del proyecto: reporte, dataset, modelo, prototipo, artículo, documentación, código o manual.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-hito`,
      name: "Hito",
      description:
        "Es un punto importante del cronograma que marca avance o decisión.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-cronograma`,
      name: "Cronograma",
      description: "Es la planificación temporal de actividades.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-presupuesto`,
      name: "Presupuesto",
      description: "Es la estimación de costos y recursos necesarios.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-riesgo-de-proyecto`,
      name: "Riesgo de proyecto",
      description:
        "Es un evento incierto que puede afectar alcance, costo, tiempo, calidad o impacto.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-stakeholder`,
      name: "Stakeholder",
      description:
        "Es una persona, grupo u organización afectada por el proyecto o capaz de influir en él.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-transferencia-tecnologica`,
      name: "Transferencia tecnológica",
      description:
        "Es el proceso de llevar conocimiento, prototipos o resultados de investigación hacia uso práctico, comercial, social o institucional.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gestion-de-proyectos-de-investigacion-en-ia-trl-o-nivel-de-madurez-tecnologica`,
      name: "TRL o nivel de madurez tecnológica",
      description:
        "TRL significa Technology Readiness Level. Es una escala usada para estimar la madurez de una tecnología, desde idea básica hasta sistema probado en entorno operativo.",
      inDefinedTermSet: {
        "@id": `${base}#section-gestion-de-proyectos-de-investigacion-en-ia`,
      },
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      name: "Fundamentos de inteligencia artificial",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-inteligencia-artificial`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-inteligencia`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-ia-simbolica`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-ia-subsimbolica`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-ia-hibrida`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-agente-inteligente`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-racionalidad`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-entorno`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-maquina-de-turing`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-test-de-turing`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-busqueda-heuristica`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-planificacion-automatica`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-logica-proposicional`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-logica-de-primer-orden`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-logica-difusa`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-ontologia`,
        },
        {
          "@id": `${base}#term-fundamentos-de-inteligencia-artificial-sistema-experto`,
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-inteligencia-artificial`,
      name: "Inteligencia artificial",
      description:
        "La inteligencia artificial es una disciplina científica y técnica orientada a construir sistemas capaces de realizar tareas que asociamos con capacidades inteligentes, como aprender, razonar, percibir, decidir, planificar, comunicarse o resolver problemas.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-inteligencia`,
      name: "Inteligencia",
      description:
        "Capacidad de comprender, resolver problemas, adaptarse al entorno y usar conocimiento para actuar. En investigación, su definición depende del marco teórico adoptado.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-ia-simbolica`,
      name: "IA simbólica",
      description:
        "Paradigma que representa conocimiento mediante símbolos, reglas, lógica, grafos, ontologías o estructuras explícitas manipulables por razonamiento.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-ia-subsimbolica`,
      name: "IA subsimbólica",
      description:
        "Paradigma que aprende representaciones distribuidas a partir de datos, normalmente sin reglas explícitas interpretables por humanos.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-ia-hibrida`,
      name: "IA híbrida",
      description:
        "Enfoque que combina componentes simbólicos y subsimbólicos.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-agente-inteligente`,
      name: "Agente inteligente",
      description:
        "Sistema que percibe un entorno mediante sensores o entradas, procesa información y actúa mediante acciones orientadas a objetivos.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-racionalidad`,
      name: "Racionalidad",
      description:
        "Capacidad de seleccionar acciones que maximizan el logro de objetivos dados, considerando información disponible y restricciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-entorno`,
      name: "Entorno",
      description:
        "Es el contexto donde opera un agente. Puede ser observable o parcialmente observable, determinista o estocástico, estático o dinámico, discreto o continuo.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-maquina-de-turing`,
      name: "Máquina de Turing",
      description:
        "Modelo abstracto de computación propuesto por Alan Turing para formalizar qué significa que un procedimiento sea computable.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-test-de-turing`,
      name: "Test de Turing",
      description:
        "Prueba conceptual propuesta por Turing para explorar si una máquina puede exhibir comportamiento conversacional indistinguible del humano ante un juez.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-busqueda-heuristica`,
      name: "Búsqueda heurística",
      description:
        "Técnica de exploración de espacios de estados guiada por una función heurística que estima qué caminos son más prometedores.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-planificacion-automatica`,
      name: "Planificación automática",
      description:
        "Área de IA que busca generar secuencias de acciones para alcanzar objetivos desde un estado inicial, considerando restricciones y efectos de acciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-logica-proposicional`,
      name: "Lógica proposicional",
      description:
        "Sistema formal que trabaja con proposiciones que pueden ser verdaderas o falsas y conectores como AND, OR y NOT.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-logica-de-primer-orden`,
      name: "Lógica de primer orden",
      description:
        "Extiende la lógica proposicional con objetos, relaciones, predicados y cuantificadores.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-logica-difusa`,
      name: "Lógica difusa",
      description:
        "Marco lógico que permite grados de pertenencia entre 0 y 1, en lugar de verdad binaria estricta.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-ontologia`,
      name: "Ontología",
      description:
        "Representación formal de conceptos, propiedades y relaciones de un dominio.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-fundamentos-de-inteligencia-artificial-sistema-experto`,
      name: "Sistema experto",
      description:
        "Sistema que captura conocimiento de expertos de un dominio y lo aplica mediante reglas o inferencias para apoyar decisiones.",
      inDefinedTermSet: {
        "@id": `${base}#section-fundamentos-de-inteligencia-artificial`,
      },
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      name: "Aprendizaje automático y evaluación experimental",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-aprendizaje-automatico`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-dataset`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-caracteristica-o-feature`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-etiqueta-o-target`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-conjunto-de-entrenamiento`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-conjunto-de-validacion`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-conjunto-de-prueba`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-aprendizaje-supervisado`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-aprendizaje-no-supervisado`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-aprendizaje-por-refuerzo`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-clasificacion`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-regresion`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-clustering-o-agrupamiento`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-baseline`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-benchmark`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-validacion-cruzada`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-fuga-de-datos-o-data-leakage`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-sobreajuste-u-overfitting`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-subajuste-o-underfitting`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-regularizacion`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-hiperparametro`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-ablation-study-o-estudio-de-ablacion`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-metrica`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-exactitud-o-accuracy`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-precision`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-exhaustividad-o-recall`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-f1`,
        },
        {
          "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-auc-roc`,
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-aprendizaje-automatico`,
      name: "Aprendizaje automático",
      description:
        "Rama de la IA que estudia algoritmos capaces de mejorar su desempeño en una tarea a partir de datos o experiencia.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-dataset`,
      name: "Dataset",
      description:
        "Conjunto organizado de datos usado para análisis, entrenamiento, validación o evaluación.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-caracteristica-o-feature`,
      name: "Característica o feature",
      description:
        "Variable de entrada usada por un modelo para aprender patrones o hacer predicciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-etiqueta-o-target`,
      name: "Etiqueta o target",
      description:
        "Valor objetivo que el modelo intenta predecir en aprendizaje supervisado.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-conjunto-de-entrenamiento`,
      name: "Conjunto de entrenamiento",
      description:
        "Parte de los datos usada para ajustar parámetros del modelo.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-conjunto-de-validacion`,
      name: "Conjunto de validación",
      description:
        "Parte de los datos usada para seleccionar hiperparámetros, arquitectura o criterios de parada.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-conjunto-de-prueba`,
      name: "Conjunto de prueba",
      description:
        "Parte de los datos reservada para estimar el desempeño final del modelo.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-aprendizaje-supervisado`,
      name: "Aprendizaje supervisado",
      description:
        "Tipo de aprendizaje donde el modelo entrena con ejemplos etiquetados.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-aprendizaje-no-supervisado`,
      name: "Aprendizaje no supervisado",
      description:
        "Tipo de aprendizaje donde el modelo busca estructura en datos sin etiquetas objetivo.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-aprendizaje-por-refuerzo`,
      name: "Aprendizaje por refuerzo",
      description:
        "Paradigma donde un agente aprende a actuar en un entorno mediante recompensas y penalizaciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-clasificacion`,
      name: "Clasificación",
      description:
        "Tarea supervisada que asigna una entrada a una clase discreta.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-regresion`,
      name: "Regresión",
      description: "Tarea supervisada que predice un valor continuo.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-clustering-o-agrupamiento`,
      name: "Clustering o agrupamiento",
      description:
        "Tarea no supervisada que organiza datos en grupos según similitud.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-baseline`,
      name: "Baseline",
      description:
        "Modelo, método o resultado de referencia contra el cual se compara una propuesta.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-benchmark`,
      name: "Benchmark",
      description:
        "Conjunto estandarizado de tareas, datos y métricas usado para comparar métodos.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-validacion-cruzada`,
      name: "Validación cruzada",
      description:
        "Técnica para estimar desempeño dividiendo los datos en varias particiones, entrenando y evaluando repetidamente.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-fuga-de-datos-o-data-leakage`,
      name: "Fuga de datos o data leakage",
      description:
        "Ocurre cuando información que no estaría disponible en el momento de predicción entra directa o indirectamente al entrenamiento o evaluación.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-sobreajuste-u-overfitting`,
      name: "Sobreajuste u overfitting",
      description:
        "Ocurre cuando un modelo aprende patrones específicos del entrenamiento que no generalizan a datos nuevos.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-subajuste-o-underfitting`,
      name: "Subajuste o underfitting",
      description:
        "Ocurre cuando el modelo es demasiado simple, está mal entrenado o no captura la estructura del problema.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-regularizacion`,
      name: "Regularización",
      description:
        "Conjunto de técnicas para reducir sobreajuste penalizando complejidad o introduciendo restricciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-hiperparametro`,
      name: "Hiperparámetro",
      description:
        "Configuración externa al aprendizaje de parámetros del modelo. No se aprende directamente con gradiente o ajuste estándar, sino que se define antes o durante el proceso de búsqueda.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-ablation-study-o-estudio-de-ablacion`,
      name: "Ablation study o estudio de ablación",
      description:
        "Experimento que elimina o modifica componentes de un sistema para estimar su contribución al resultado.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-metrica`,
      name: "Métrica",
      description:
        "Medida cuantitativa usada para evaluar un modelo o sistema.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-exactitud-o-accuracy`,
      name: "Exactitud o accuracy",
      description: "Proporción de predicciones correctas sobre el total.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-precision`,
      name: "Precisión",
      description:
        "Proporción de predicciones positivas que realmente son positivas.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-exhaustividad-o-recall`,
      name: "Exhaustividad o recall",
      description: "Proporción de positivos reales que el modelo detecta.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-f1`,
      name: "F1",
      description: "Media armónica de precisión y recall.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-aprendizaje-automatico-y-evaluacion-experimental-auc-roc`,
      name: "AUC-ROC",
      description:
        "Área bajo la curva ROC, que relaciona tasa de verdaderos positivos y falsos positivos a distintos umbrales.",
      inDefinedTermSet: {
        "@id": `${base}#section-aprendizaje-automatico-y-evaluacion-experimental`,
      },
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      name: "Deep learning, PLN, sistemas cognitivos y modelos fundacionales",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-red-neuronal-artificial`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-perceptron`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-perceptron-multicapa-o-mlp`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-deep-learning`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-cnn-o-red-neuronal-convolucional`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-rnn-o-red-neuronal-recurrente`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-transformer`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-atencion`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-embedding`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-procesamiento-del-lenguaje-natural`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-chatbot`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-computacion-cognitiva`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-big-data`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-percepcion-computacional`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-modelo-fundacional`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-llm-o-modelo-grande-de-lenguaje`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-prompt`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-prompt-engineering`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-fine-tuning`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-rag-o-generacion-aumentada-por-recuperacion`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-alucinacion`,
        },
        {
          "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-multimodalidad`,
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-red-neuronal-artificial`,
      name: "Red neuronal artificial",
      description:
        "Modelo computacional inspirado de forma abstracta en redes de neuronas, formado por unidades conectadas que transforman entradas en salidas mediante pesos y funciones de activación.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-perceptron`,
      name: "Perceptrón",
      description:
        "Modelo lineal de clasificación binaria que combina entradas ponderadas y aplica una función de decisión.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-perceptron-multicapa-o-mlp`,
      name: "Perceptrón multicapa o MLP",
      description: "Red neuronal feedforward con una o más capas ocultas.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-deep-learning`,
      name: "Deep learning",
      description:
        "Familia de métodos de aprendizaje automático basados en redes neuronales con múltiples capas que aprenden representaciones jerárquicas.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-cnn-o-red-neuronal-convolucional`,
      name: "CNN o red neuronal convolucional",
      description:
        "Arquitectura especializada en procesar datos con estructura espacial, como imágenes, mediante filtros convolucionales.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-rnn-o-red-neuronal-recurrente`,
      name: "RNN o red neuronal recurrente",
      description:
        "Arquitectura diseñada para secuencias, donde el estado interno permite procesar información temporal o contextual.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-transformer`,
      name: "Transformer",
      description:
        "Arquitectura basada en mecanismos de atención que procesa secuencias permitiendo modelar dependencias entre elementos sin recurrencia clásica.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-atencion`,
      name: "Atención",
      description:
        "Mecanismo que permite ponderar qué partes de una entrada son más relevantes para producir una salida.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-embedding`,
      name: "Embedding",
      description:
        "Representación vectorial densa de un objeto, como palabra, documento, imagen, usuario o producto, en un espacio numérico donde la cercanía suele reflejar similitud aprendida.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-procesamiento-del-lenguaje-natural`,
      name: "Procesamiento del lenguaje natural",
      description:
        "Área de IA que estudia la interacción entre computadoras y lenguaje humano, incluyendo análisis, generación, traducción, resumen, clasificación y diálogo.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-chatbot`,
      name: "Chatbot",
      description:
        "Sistema de software diseñado para interactuar con usuarios mediante lenguaje natural.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-computacion-cognitiva`,
      name: "Computación cognitiva",
      description:
        "Enfoque amplio que busca construir sistemas capaces de procesar información contextual, multimodal y no estructurada de manera similar a ciertos procesos cognitivos humanos.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-big-data`,
      name: "Big data",
      description:
        "Conjunto de prácticas y tecnologías para manejar datos caracterizados por volumen, velocidad, variedad, veracidad y valor.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-percepcion-computacional`,
      name: "Percepción computacional",
      description:
        "Área que permite a sistemas computacionales interpretar señales sensoriales como imágenes, audio, video o datos de sensores.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-modelo-fundacional`,
      name: "Modelo fundacional",
      description:
        "Modelo entrenado con datos amplios y a gran escala, adaptable a múltiples tareas posteriores mediante prompting, fine-tuning u otras técnicas.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-llm-o-modelo-grande-de-lenguaje`,
      name: "LLM o modelo grande de lenguaje",
      description:
        "Modelo de lenguaje de gran escala entrenado para predecir, generar o transformar texto, normalmente basado en transformers.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-prompt`,
      name: "Prompt",
      description:
        "Entrada o instrucción dada a un modelo generativo para condicionar su salida.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-prompt-engineering`,
      name: "Prompt engineering",
      description:
        "Diseño sistemático de instrucciones, ejemplos, formato y contexto para guiar la salida de un modelo generativo.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-fine-tuning`,
      name: "Fine-tuning",
      description:
        "Ajuste adicional de un modelo preentrenado usando datos específicos de una tarea o dominio.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-rag-o-generacion-aumentada-por-recuperacion`,
      name: "RAG o generación aumentada por recuperación",
      description:
        "Arquitectura que combina un modelo generativo con un componente de recuperación de documentos o pasajes para responder usando conocimiento externo.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-alucinacion`,
      name: "Alucinación",
      description:
        "Salida generada por un modelo que parece plausible pero es falsa, no respaldada o inventada.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales-multimodalidad`,
      name: "Multimodalidad",
      description:
        "Capacidad de procesar o generar información en varios modos: texto, imagen, audio, video, señales o acciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-deep-learning-pln-sistemas-cognitivos-y-modelos-fundacionales`,
      },
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      name: "Computación bioinspirada, robótica y sistemas emergentes",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-computacion-bioinspirada`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-algoritmo-genetico`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-poblacion`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-gen`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-cromosoma-o-individuo`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-fitness-o-funcion-de-aptitud`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-seleccion`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-cruce-o-crossover`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-mutacion`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-programacion-genetica`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-inteligencia-de-enjambre`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-optimizacion-por-colonia-de-hormigas`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-pso-u-optimizacion-por-enjambre-de-particulas`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-sistema-emergente`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-vida-artificial`,
        },
        {
          "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-robotica`,
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-computacion-bioinspirada`,
      name: "Computación bioinspirada",
      description:
        "Área que diseña métodos computacionales inspirados en fenómenos biológicos o naturales.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-algoritmo-genetico`,
      name: "Algoritmo genético",
      description:
        "Método de optimización inspirado en evolución biológica. Opera sobre una población de soluciones candidatas que se seleccionan, cruzan y mutan según una función de aptitud.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-poblacion`,
      name: "Población",
      description:
        "Conjunto de soluciones candidatas en un algoritmo evolutivo.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-gen`,
      name: "Gen",
      description: "Unidad de información que codifica parte de una solución.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-cromosoma-o-individuo`,
      name: "Cromosoma o individuo",
      description: "Representación completa de una solución candidata.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-fitness-o-funcion-de-aptitud`,
      name: "Fitness o función de aptitud",
      description:
        "Función que evalúa qué tan buena es una solución candidata respecto al objetivo.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-seleccion`,
      name: "Selección",
      description:
        "Proceso que elige individuos para reproducirse o pasar a la siguiente generación.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-cruce-o-crossover`,
      name: "Cruce o crossover",
      description:
        "Operación que combina partes de dos o más individuos para producir descendencia.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-mutacion`,
      name: "Mutación",
      description: "Cambio aleatorio en uno o más genes de un individuo.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-programacion-genetica`,
      name: "Programación genética",
      description:
        "Técnica evolutiva donde los individuos suelen representar programas, expresiones o árboles computacionales que evolucionan.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-inteligencia-de-enjambre`,
      name: "Inteligencia de enjambre",
      description:
        "Enfoque inspirado en comportamiento colectivo de agentes simples, como hormigas, abejas, peces o aves.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-optimizacion-por-colonia-de-hormigas`,
      name: "Optimización por colonia de hormigas",
      description:
        "Algoritmo inspirado en el depósito de feromonas de hormigas para encontrar caminos eficientes.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-pso-u-optimizacion-por-enjambre-de-particulas`,
      name: "PSO u optimización por enjambre de partículas",
      description:
        "Método donde partículas exploran el espacio de soluciones ajustando su movimiento según su experiencia y la del grupo.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-sistema-emergente`,
      name: "Sistema emergente",
      description:
        "Sistema cuyo comportamiento global surge de interacciones locales entre componentes, sin control central explícito.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-vida-artificial`,
      name: "Vida artificial",
      description:
        "Campo que simula o construye sistemas con propiedades asociadas a la vida, como adaptación, evolución, reproducción o autoorganización.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-computacion-bioinspirada-robotica-y-sistemas-emergentes-robotica`,
      name: "Robótica",
      description:
        "Ciencia y técnica del diseño, construcción y control de máquinas capaces de ejecutar acciones físicas, a menudo con autonomía y adaptación al entorno.",
      inDefinedTermSet: {
        "@id": `${base}#section-computacion-bioinspirada-robotica-y-sistemas-emergentes`,
      },
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      name: "Ingeniería, datos y despliegue en investigación de IA",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-ingenieria-de-software`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-ciclo-de-vida-de-un-proyecto-de-ia`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-pipeline-de-datos`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-calidad-de-datos`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-procedencia-de-datos-o-provenance`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-datos-fair`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-datasheet-for-datasets`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-model-card`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-mlops`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-versionado`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-artefacto-de-investigacion`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-contenedor`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-deuda-tecnica-en-ml`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-drift-o-deriva-de-datos`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-monitorizacion-de-modelos`,
        },
        {
          "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-auditoria-de-modelo`,
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-ingenieria-de-software`,
      name: "Ingeniería de software",
      description:
        "Disciplina que aplica principios sistemáticos para desarrollar, mantener y evolucionar software de calidad.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-ciclo-de-vida-de-un-proyecto-de-ia`,
      name: "Ciclo de vida de un proyecto de IA",
      description:
        "Secuencia de etapas desde comprensión del problema hasta despliegue, monitoreo y mejora.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-pipeline-de-datos`,
      name: "Pipeline de datos",
      description:
        "Flujo automatizado o semiautomatizado para recolectar, limpiar, transformar, validar y entregar datos.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-calidad-de-datos`,
      name: "Calidad de datos",
      description:
        "Grado en que los datos son adecuados para su propósito: completos, consistentes, exactos, actuales, representativos y trazables.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-procedencia-de-datos-o-provenance`,
      name: "Procedencia de datos o provenance",
      description:
        "Información sobre origen, transformación, agentes, versiones y procesos que produjeron un dato o artefacto.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-datos-fair`,
      name: "Datos FAIR",
      description:
        "Principios para que datos sean encontrables, accesibles, interoperables y reutilizables.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-datasheet-for-datasets`,
      name: "Datasheet for datasets",
      description:
        "Documento estructurado que describe motivación, composición, recolección, procesamiento, usos recomendados, limitaciones y distribución de un dataset.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-model-card`,
      name: "Model card",
      description:
        "Documento breve que acompaña un modelo y reporta propósito, datos, métricas, limitaciones, usos previstos, grupos evaluados y consideraciones éticas.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-mlops`,
      name: "MLOps",
      description:
        "Conjunto de prácticas para gestionar el ciclo de vida de modelos de machine learning en producción: versionado, entrenamiento, pruebas, despliegue, monitoreo y gobernanza.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-versionado`,
      name: "Versionado",
      description:
        "Registro controlado de cambios en código, datos, configuraciones, modelos y resultados.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-artefacto-de-investigacion`,
      name: "Artefacto de investigación",
      description:
        "Objeto digital que permite inspeccionar o reproducir un resultado: código, dataset, modelo, contenedor, notebook, logs, scripts o documentación.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-contenedor`,
      name: "Contenedor",
      description:
        "Paquete ejecutable que encapsula aplicación, dependencias y entorno.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-deuda-tecnica-en-ml`,
      name: "Deuda técnica en ML",
      description:
        "Costos futuros acumulados por decisiones rápidas, acoplamientos ocultos, pipelines frágiles, dependencias de datos y falta de documentación en sistemas de ML.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-drift-o-deriva-de-datos`,
      name: "Drift o deriva de datos",
      description:
        "Cambio en la distribución de datos de entrada o en la relación entre entradas y salida con el paso del tiempo.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-monitorizacion-de-modelos`,
      name: "Monitorización de modelos",
      description:
        "Seguimiento sistemático de desempeño, datos, errores, latencia, uso, deriva y alertas de un modelo desplegado.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-ingenieria-datos-y-despliegue-en-investigacion-de-ia-auditoria-de-modelo`,
      name: "Auditoría de modelo",
      description:
        "Evaluación independiente o estructurada de un modelo respecto a desempeño, riesgos, sesgos, seguridad, cumplimiento y documentación.",
      inDefinedTermSet: {
        "@id": `${base}#section-ingenieria-datos-y-despliegue-en-investigacion-de-ia`,
      },
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      name: "Ética, legalidad, seguridad y explicabilidad",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-etica-de-la-ia`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-sesgo`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-fairness-o-equidad-algoritmica`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-privacidad`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-dato-personal`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-consentimiento-informado`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-anonimizacion`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-transparencia`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-explicabilidad`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-interpretabilidad`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-xai-o-inteligencia-artificial-explicable`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-robustez`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-seguridad-adversarial`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-ataque-adversarial`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-evaluacion-de-riesgos`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-nist-ai-rmf`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-eu-ai-act`,
        },
        {
          "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-responsabilidad`,
        },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-etica-de-la-ia`,
      name: "Ética de la IA",
      description:
        "Campo que analiza impactos morales, sociales y políticos de diseñar, entrenar, desplegar y usar sistemas de IA.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-sesgo`,
      name: "Sesgo",
      description:
        "Desviación sistemática que produce resultados injustos, inexactos o no representativos. Puede surgir en datos, etiquetas, diseño, métricas, interpretación o despliegue.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-fairness-o-equidad-algoritmica`,
      name: "Fairness o equidad algorítmica",
      description:
        "Conjunto de criterios para evaluar y mitigar desigualdades de desempeño o impacto entre grupos.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-privacidad`,
      name: "Privacidad",
      description:
        "Protección de datos personales, identidad, comportamiento y contexto de las personas.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-dato-personal`,
      name: "Dato personal",
      description:
        "Información que identifica o puede identificar a una persona directa o indirectamente.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-consentimiento-informado`,
      name: "Consentimiento informado",
      description:
        "Autorización libre, específica e informada de una persona para participar en un estudio o permitir uso de sus datos.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-anonimizacion`,
      name: "Anonimización",
      description:
        "Proceso para modificar datos de modo que no pueda identificarse a personas con medios razonables.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-transparencia`,
      name: "Transparencia",
      description:
        "Capacidad de informar de manera clara cómo se usa un sistema de IA, qué datos emplea, qué limitaciones tiene y qué decisiones apoya.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-explicabilidad`,
      name: "Explicabilidad",
      description:
        "Capacidad de un sistema para proporcionar razones comprensibles sobre su comportamiento o decisiones.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-interpretabilidad`,
      name: "Interpretabilidad",
      description:
        "Grado en que un humano puede comprender el funcionamiento interno o la relación entre entradas y salidas de un modelo.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-xai-o-inteligencia-artificial-explicable`,
      name: "XAI o inteligencia artificial explicable",
      description:
        "Conjunto de métodos para hacer más comprensibles los modelos y sus decisiones.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-robustez`,
      name: "Robustez",
      description:
        "Capacidad de un modelo para mantener desempeño ante perturbaciones, ruido, cambios de distribución o condiciones adversas.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-seguridad-adversarial`,
      name: "Seguridad adversarial",
      description:
        "Área que estudia ataques y defensas contra modelos de IA, como ejemplos adversariales, extracción de modelo, inversión de datos o envenenamiento de entrenamiento.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-ataque-adversarial`,
      name: "Ataque adversarial",
      description:
        "Manipulación intencional de entradas, datos o entorno para inducir errores en un sistema de IA.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-evaluacion-de-riesgos`,
      name: "Evaluación de riesgos",
      description:
        "Proceso para identificar, estimar y priorizar riesgos de un sistema, incluyendo probabilidad, impacto y medidas de mitigación.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-nist-ai-rmf`,
      name: "NIST AI RMF",
      description:
        "Marco de gestión de riesgos de IA del National Institute of Standards and Technology. Organiza prácticas para gobernar, mapear, medir y gestionar riesgos.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-eu-ai-act`,
      name: "EU AI Act",
      description:
        "Reglamento de la Unión Europea que establece reglas armonizadas para sistemas de IA, con enfoque basado en riesgos.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-etica-legalidad-seguridad-y-explicabilidad-responsabilidad`,
      name: "Responsabilidad",
      description:
        "Obligación de responder por decisiones, daños, omisiones, documentación y controles asociados a un sistema.",
      inDefinedTermSet: {
        "@id": `${base}#section-etica-legalidad-seguridad-y-explicabilidad`,
      },
    },
  ];
}
