export default function getJsonLd(base: string): Record<string, unknown>[] {
  return [
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#termset`,
      name: "Glosario de sistemas cognitivos artificiales",
      description:
        "Glosario de aprendizaje profundo, redes neuronales, aprendizaje por refuerzo y puesta en producción de sistemas cognitivos artificiales.",
      url: base,
      inLanguage: "es",
      hasPart: [
        { "@id": `${base}#section-introduccion-al-aprendizaje-profundo` },
        { "@id": `${base}#section-entrenamiento-de-redes-neuronales` },
        { "@id": `${base}#section-frameworks-de-aprendizaje-profundo` },
        { "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion` },
        { "@id": `${base}#section-redes-neuronales-convolucionales-cnn` },
        { "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec` },
        { "@id": `${base}#section-redes-neuronales-recurrentes-rnn` },
        { "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo` },
        { "@id": `${base}#section-gpu-y-entrenamiento-distribuido` },
        { "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos` },
        { "@id": `${base}#section-modelos-generativos-y-metaaprendizaje` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      name: "1. Introducción al aprendizaje profundo",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-inteligencia-artificial-ia` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-aprendizaje-automatico-machine-learning` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-caracteristica-feature` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-ingenieria-de-caracteristicas-feature-engineering` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-aprendizaje-de-representaciones-representation-learning` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-aprendizaje-profundo-deep-learning` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-neurona-artificial-o-unidad` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-peso-weight` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-sesgo-bias` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-funcion-de-activacion-o-no-linealidad` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-funcion-sigmoide` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-perceptron-multicapa-mlp` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-capa-de-entrada-capa-oculta-y-capa-de-salida` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-red-totalmente-conectada-fully-connected-network` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-red-prealimentada-feed-forward-network` },
        { "@id": `${base}#term-introduccion-al-aprendizaje-profundo-inspiracion-biologica` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      name: "2. Entrenamiento de redes neuronales",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-mnist` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-benchmark` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-hiperparametro` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-funcion-de-coste-o-perdida-loss` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-error-cuadratico-medio-mse` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-optimizacion` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-derivada-y-derivada-parcial` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-gradiente` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-descenso-de-gradiente-gradient-descent` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-tasa-de-aprendizaje-learning-rate` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-descenso-de-gradiente-estocastico-sgd` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-lote-y-minilote-batch-y-mini-batch` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-pase-hacia-delante-forward-pass` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-regla-de-la-cadena` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-retropropagacion-backpropagation` },
        { "@id": `${base}#term-entrenamiento-de-redes-neuronales-pase-hacia-atras-backward-pass` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      name: "3. Frameworks de aprendizaje profundo",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-framework-de-aprendizaje-profundo` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-tensor` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-grafo-de-computacion` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-diferenciacion-automatica` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-grafo-estatico` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-grafo-dinamico` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-tensorflow` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-sesion-de-tensorflow` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-ejecucion-inmediata-eager-execution` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-tensorboard` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-theano` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-torch-lua` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-pytorch` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-caffe-y-caffe2` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-microsoft-cognitive-toolkit-cntk` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-apache-mxnet` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-keras` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-api-secuencial` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-api-funcional` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-capa-densa-dense` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-compilacion-del-modelo` },
        { "@id": `${base}#term-frameworks-de-aprendizaje-profundo-entropia-cruzada-categorica` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      name: "4. Entrenamiento práctico: activación, inicialización, optimización y regularización",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-saturacion` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-tangente-hiperbolica-tanh` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-unidad-lineal-rectificada-relu` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-relu-muerta` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-leaky-relu-y-prelu` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-elu` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-maxout` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-ruptura-de-simetria` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-inicializacion-aleatoria` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-inicializacion-xavier-o-glorot` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-inicializacion-he` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-normalizacion-por-lotes-batch-normalization` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-momento-momentum` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-momento-de-nesterov` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-adagrad` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-rmsprop` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-adam` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-decaimiento-de-la-tasa-de-aprendizaje` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-sobreajuste-overfitting` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-generalizacion` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-regularizacion` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-regularizacion-l2` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-regularizacion-l1` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-regularizacion-por-norma-maxima-max-norm` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-dropout` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-parada-temprana-early-stopping` },
        { "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-conjunto-de-validacion` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      name: "5. Redes neuronales convolucionales (CNN)",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-red-neuronal-convolucional-cnn` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-clasificacion-de-imagenes` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-recuperacion-de-imagenes-image-retrieval` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-deteccion-de-objetos` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-segmentacion` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-filtro-o-kernel-convolucional` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-capa-convolucional` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-mapa-de-activacion` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-profundidad-o-canales` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-paso-stride` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-relleno-con-ceros-zero-padding` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-pooling` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-max-pooling` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-imagenet-e-ilsvrc` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-lenet-5` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-alexnet` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-vggnet` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-aumento-de-datos-data-augmentation` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-aprendizaje-por-transferencia-transfer-learning` },
        { "@id": `${base}#term-redes-neuronales-convolucionales-cnn-congelacion-de-capas` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      name: "6. Representaciones del lenguaje y Word2Vec",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-procesamiento-del-lenguaje-natural-pln` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-wordnet` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-vocabulario` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-frecuencia-de-termino-term-frequency` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-bolsa-de-palabras-bag-of-words` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-representacion-discreta` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-representacion-distribuida` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-vector-de-palabra-o-embedding` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-corpus` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-contexto-y-ventana` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-word2vec` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-verosimilitud-likelihood` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-similitud-coseno` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-softmax` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-muestreo-negativo-negative-sampling` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-skip-gram` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-continuous-bag-of-words-cbow` },
        { "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-vectores-preentrenados` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      name: "7. Redes neuronales recurrentes (RNN)",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-secuencia` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-red-neuronal-recurrente-rnn` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-estado-oculto-hidden-state` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-paso-temporal-time-step` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-rnn-basica-vanilla-rnn` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-desenrollado-de-una-rnn` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-retropropagacion-a-traves-del-tiempo-bptt` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-bptt-truncada-tbptt` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-modelo-del-lenguaje` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-muestreo-autoregresivo` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-gradiente-explosivo` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-recorte-de-gradiente-gradient-clipping` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-gradiente-desvanecido` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-lstm-long-short-term-memory` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-estado-de-celda-cell-state` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-puertas-de-una-lstm` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-gru-gated-recurrent-unit` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-rnn-apilada` },
        { "@id": `${base}#term-redes-neuronales-recurrentes-rnn-rnn-bidireccional` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      name: "8. Agentes inteligentes y aprendizaje profundo por refuerzo",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-aprendizaje-por-refuerzo-rl` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-agente` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-entorno` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-estado` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-accion` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-recompensa-reward` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-proceso-de-decision-de-markov-mdp` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-propiedad-de-markov` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-politica` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-factor-de-descuento` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-politica-optima` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-funcion-de-valor-de-estado` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-funcion-de-valor-de-accion-q` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-ecuacion-de-optimalidad-de-bellman` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-iteracion-de-valores` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-q-learning` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-red-q-profunda-dqn` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-memoria-de-repeticion-de-experiencias` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-red-objetivo-target-network` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-episodio` },
        { "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-compromiso-exploracion-explotacion` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      name: "9. GPU y entrenamiento distribuido",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-unidad-de-procesamiento-grafico-gpu` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-unidad-central-de-procesamiento-cpu` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-ancho-de-banda-de-memoria` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-cuda` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-cudnn` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-opencl` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-cuello-de-botella-de-entrada` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-paralelismo-de-modelo` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-paralelismo-de-datos` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-trabajador-worker` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-servidor-de-parametros` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-promedio-de-parametros` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-sgd-asincrono` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-downpour-sgd` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-gradiente-obsoleto-stale-gradient` },
        { "@id": `${base}#term-gpu-y-entrenamiento-distribuido-benchmark-de-rendimiento` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      name: "10. Nube y puesta en producción de modelos",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-inferencia` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-tiempo-de-servicio-serving-time` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-servidor-de-modelos` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-concurrencia` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-latencia-y-tiempo-de-ida-y-vuelta` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-batching-de-inferencia` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-buffer` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-balanceador-de-carga` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-versionado-y-rollback-de-modelos` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-rest-y-grpc` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-computacion-en-la-nube` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-tpu-tensor-processing-unit` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-api-de-ia-gestionada` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-monitorizacion` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-metricas-offline-y-online` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-desviacion-entre-entrenamiento-y-servicio-training-serving-skew` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-comportamiento-por-subpoblaciones` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-pipeline-de-entrenamiento-continuo` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-validacion-de-datos` },
        { "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-validacion-del-modelo` },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      name: "11. Modelos generativos y metaaprendizaje",
      isPartOf: { "@id": `${base}#termset` },
      hasDefinedTerm: [
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-modelo-generativo` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-muestreo` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-estimacion-explicita-de-densidad` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-estimacion-implicita-de-densidad` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-pixelrnn-y-pixelcnn` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-autoencoder-variacional-vae` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-red-generativa-adversarial-gan` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-generador` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-discriminador` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-objetivo-minimax-de-una-gan` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-metaaprendizaje-meta-learning` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-ajuste-de-hiperparametros` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-learner-y-meta-learner` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-aprendizaje-de-optimizadores` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-busqueda-de-arquitecturas-neuronales-nas` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-controlador-y-red-hija` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-aprendizaje-con-pocos-ejemplos-few-shot-learning` },
        { "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-metaentrenamiento-y-metaprueba` },
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-inteligencia-artificial-ia`,
      name: "Inteligencia artificial (IA)",
      description:
        "Disciplina que construye sistemas capaces de resolver tareas asociadas con la percepción, el lenguaje, la decisión o el razonamiento. Abarca tanto sistemas basados en reglas explícitas como métodos que adquieren regularidades a partir de datos.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-aprendizaje-automatico-machine-learning`,
      name: "Aprendizaje automático (machine learning)",
      description:
        "Área de la IA en la que un algoritmo obtiene patrones desde ejemplos o experiencia y los utiliza para predecir, clasificar o estructurar datos nuevos. A diferencia de un sistema de reglas escrito a mano, el conocimiento operativo queda codificado en parámetros aprendidos.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-caracteristica-feature`,
      name: "Característica (feature)",
      description:
        "Variable utilizada para representar un aspecto relevante de un ejemplo. En una imagen podría ser un píxel, una forma o una textura; en un problema clínico, una medición seleccionada por especialistas. La utilidad del modelo depende en gran medida de que la representación exponga información pertinente.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-ingenieria-de-caracteristicas-feature-engineering`,
      name: "Ingeniería de características (feature engineering)",
      description:
        "Proceso humano de seleccionar, transformar o construir características que faciliten el aprendizaje. Puede ser eficaz, pero exige conocimiento del dominio y resulta difícil cuando los patrones útiles son numerosos, variables o demasiado complejos para describirlos manualmente.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-aprendizaje-de-representaciones-representation-learning`,
      name: "Aprendizaje de representaciones (representation learning)",
      description:
        "Enfoque en el que el sistema aprende también la forma de representar los datos, en vez de recibir únicamente características diseñadas por personas. Su objetivo es producir variables internas que hagan más sencilla la tarea final.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-aprendizaje-profundo-deep-learning`,
      name: "Aprendizaje profundo (deep learning)",
      description:
        "Subcampo del aprendizaje automático que construye representaciones jerárquicas: las capas iniciales detectan regularidades simples y las posteriores las combinan en conceptos más abstractos. La profundidad suele asociarse con el número de transformaciones o capas, no con un umbral universal.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-neurona-artificial-o-unidad`,
      name: "Neurona artificial o unidad",
      description:
        "Unidad de cómputo que combina entradas ponderadas, añade un término independiente y aplica una función de activación.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-peso-weight`,
      name: "Peso (weight)",
      description:
        "Parámetro que regula cuánto influye una entrada en la salida de una neurona. Entrenar la red consiste, en gran parte, en ajustar sus pesos para reducir el error observado en los ejemplos.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-sesgo-bias`,
      name: "Sesgo (bias)",
      description:
        "Parámetro aditivo que permite desplazar la respuesta de la neurona con independencia de sus entradas. Gracias a él, la transformación no queda obligada a pasar por el origen.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-funcion-de-activacion-o-no-linealidad`,
      name: "Función de activación o no linealidad",
      description:
        "Transformación aplicada a la combinación lineal de una unidad. Sin activaciones no lineales, encadenar capas seguiría siendo equivalente a una sola transformación lineal y la red no podría modelar relaciones complejas.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-funcion-sigmoide`,
      name: "Función sigmoide",
      description:
        "Activación que comprime cualquier número real al intervalo (0,1), por lo que puede interpretarse como una probabilidad en ciertos modelos.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-perceptron-multicapa-mlp`,
      name: "Perceptrón multicapa (MLP)",
      description:
        "Red formada por múltiples capas de unidades. Cada capa utiliza la salida de la anterior, lo que permite combinar rasgos simples en representaciones progresivamente más complejas.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-capa-de-entrada-capa-oculta-y-capa-de-salida`,
      name: "Capa de entrada, capa oculta y capa de salida",
      description:
        "La capa de entrada recibe la representación del ejemplo; las capas ocultas realizan transformaciones intermedias; y la capa de salida produce la predicción requerida por la tarea.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-red-totalmente-conectada-fully-connected-network`,
      name: "Red totalmente conectada (fully connected network)",
      description:
        "Arquitectura en la que cada unidad de una capa recibe la salida de todas las unidades de la capa precedente. Esta conectividad ofrece flexibilidad, pero puede generar muchos parámetros.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-red-prealimentada-feed-forward-network`,
      name: "Red prealimentada (feed-forward network)",
      description:
        "Red cuyo flujo de información avanza desde la entrada hasta la salida sin ciclos. Se distingue de las redes recurrentes, que realimentan un estado interno para procesar secuencias.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-introduccion-al-aprendizaje-profundo-inspiracion-biologica`,
      name: "Inspiración biológica",
      description:
        "Analogía histórica entre las unidades artificiales y las neuronas biológicas: ambas reciben señales, las integran y producen una salida. El parecido es limitado; las arquitecturas y activaciones del aprendizaje profundo son modelos matemáticos, no reproducciones fieles del cerebro.",
      inDefinedTermSet: {
        "@id": `${base}#section-introduccion-al-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-mnist`,
      name: "MNIST",
      description:
        "Conjunto de imágenes pequeñas de dígitos manuscritos utilizado como problema introductorio y benchmark de clasificación.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-benchmark`,
      name: "Benchmark",
      description:
        "Problema, conjunto de datos y protocolo de evaluación que permiten comparar métodos bajo condiciones comunes. Un resultado de benchmark solo es comparable cuando se mantienen las mismas particiones, métricas y reglas de evaluación.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-hiperparametro`,
      name: "Hiperparámetro",
      description:
        "Valor elegido antes o durante el proceso de entrenamiento que no se aprende como un peso ordinario. Son hiperparámetros, por ejemplo, el número de unidades ocultas, el tamaño del lote y la tasa de aprendizaje.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-funcion-de-coste-o-perdida-loss`,
      name: "Función de coste o pérdida (loss)",
      description:
        "Función diferenciable que cuantifica la discrepancia entre la salida del modelo y el valor esperado.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-error-cuadratico-medio-mse`,
      name: "Error cuadrático medio (MSE)",
      description:
        "Pérdida que promedia el cuadrado de la diferencia entre predicción y objetivo.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-optimizacion`,
      name: "Optimización",
      description:
        "Proceso de buscar parámetros que reduzcan una función objetivo. En redes neuronales, el espacio suele tener muchas dimensiones y no se obtiene una solución cerrada, por lo que se emplean métodos iterativos.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-derivada-y-derivada-parcial`,
      name: "Derivada y derivada parcial",
      description:
        "La derivada mide la variación local de una función respecto de una variable. Cuando la función depende de varias variables, una derivada parcial cambia una de ellas y mantiene fijas las demás.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-gradiente`,
      name: "Gradiente",
      description:
        "Vector que reúne las derivadas parciales de una función y apunta hacia su mayor incremento local.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-descenso-de-gradiente-gradient-descent`,
      name: "Descenso de gradiente (gradient descent)",
      description:
        "Algoritmo que actualiza los parámetros en la dirección opuesta al gradiente para reducir el coste.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-tasa-de-aprendizaje-learning-rate`,
      name: "Tasa de aprendizaje (learning rate)",
      description:
        "Un valor excesivo puede rebasar regiones útiles o hacer divergir el coste; uno demasiado pequeño vuelve lento el aprendizaje.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-descenso-de-gradiente-estocastico-sgd`,
      name: "Descenso de gradiente estocástico (SGD)",
      description:
        "Variante que estima el gradiente con un ejemplo o con un subconjunto aleatorio del conjunto de entrenamiento, en vez de usar todos los datos en cada actualización. Reduce el coste por paso e introduce ruido que puede ayudar a explorar el espacio de parámetros.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-lote-y-minilote-batch-y-mini-batch`,
      name: "Lote y minilote (batch y mini-batch)",
      description:
        "Grupo de ejemplos procesados conjuntamente para calcular una actualización. Los minilotes equilibran la estabilidad de una estimación basada en varios ejemplos con la eficiencia de las operaciones vectorizadas.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-pase-hacia-delante-forward-pass`,
      name: "Pase hacia delante (forward pass)",
      description:
        "Evaluación del grafo desde las entradas hasta la salida. Durante el entrenamiento se conservan resultados intermedios que después permiten calcular derivadas.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-regla-de-la-cadena`,
      name: "Regla de la cadena",
      description:
        "Regla que permite derivar una composición de funciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-retropropagacion-backpropagation`,
      name: "Retropropagación (backpropagation)",
      description:
        "Algoritmo que recorre el grafo en sentido inverso y aplica repetidamente la regla de la cadena para obtener el gradiente de la pérdida respecto de cada parámetro. Hace viable entrenar redes con grandes cantidades de pesos sin derivar manualmente cada expresión completa.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-de-redes-neuronales-pase-hacia-atras-backward-pass`,
      name: "Pase hacia atrás (backward pass)",
      description:
        "Fase en la que los gradientes fluyen desde la pérdida hacia las operaciones anteriores. Cada nodo combina el gradiente recibido con su derivada local y lo entrega a sus entradas.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-de-redes-neuronales`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-framework-de-aprendizaje-profundo`,
      name: "Framework de aprendizaje profundo",
      description:
        "Biblioteca o conjunto de bibliotecas que proporciona operaciones, capas, optimizadores y herramientas para definir y entrenar redes neuronales. Reduce la necesidad de programar a mano el cálculo vectorial y las derivadas.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-tensor`,
      name: "Tensor",
      description:
        "Arreglo numérico de dimensión arbitraria: un escalar es un tensor de orden cero, un vector de orden uno y una matriz de orden dos. Los frameworks expresan datos, parámetros y resultados intermedios como tensores.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-grafo-de-computacion`,
      name: "Grafo de computación",
      description:
        "Representación dirigida de un cálculo: los nodos son operaciones y las aristas transportan tensores. Permite conocer dependencias, ordenar la ejecución, calcular gradientes y distribuir operaciones entre dispositivos.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-diferenciacion-automatica`,
      name: "Diferenciación automática",
      description:
        "Mecanismo que construye derivadas a partir de las operaciones registradas en el grafo. Aplica reglas locales y la regla de la cadena, evitando implementar manualmente el backward pass de cada modelo completo.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-grafo-estatico`,
      name: "Grafo estático",
      description:
        "Grafo definido antes de ejecutar los datos. Conocer toda la estructura por adelantado facilita validaciones y optimizaciones globales, aunque puede volver menos natural el código con control dinámico.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-grafo-dinamico`,
      name: "Grafo dinámico",
      description:
        "Grafo construido a medida que se ejecutan las operaciones. Hace que la definición se parezca al flujo ordinario del programa y permite variar la estructura entre ejemplos o iteraciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-tensorflow`,
      name: "TensorFlow",
      description:
        "Framework de computación numérica orientado especialmente al aprendizaje automático. Su modelo original utilizaba grafos estáticos y sesiones; las versiones modernas adoptaron la ejecución inmediata como comportamiento habitual.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-sesion-de-tensorflow`,
      name: "Sesión de TensorFlow",
      description:
        "En la API histórica de TensorFlow 1.x, entorno que reservaba recursos y evaluaba las operaciones de un grafo mediante llamadas a run(). Es un concepto relevante para mantener o migrar código antiguo, pero no describe la interfaz principal actual.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-ejecucion-inmediata-eager-execution`,
      name: "Ejecución inmediata (eager execution)",
      description:
        "Modo en el que cada operación se evalúa al invocarse, sin requerir una sesión explícita. Facilita la inspección de valores y la depuración interactiva.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-tensorboard`,
      name: "TensorBoard",
      description:
        "Herramienta de visualización para inspeccionar grafos, métricas, distribuciones y otros datos de un experimento. Ayuda a diagnosticar el entrenamiento y comparar ejecuciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-theano`,
      name: "Theano",
      description:
        "Biblioteca pionera de computación numérica con grafos y aceleración por GPU. Influyó en frameworks posteriores; su desarrollo oficial terminó y actualmente tiene un valor principalmente histórico.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-torch-lua`,
      name: "Torch (Lua)",
      description:
        "Framework de cálculo científico y aprendizaje profundo cuyo lenguaje principal era Lua. Aportó tensores, módulos neuronales y aceleración mediante CPU o GPU, y constituye el antecedente directo de PyTorch.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-pytorch`,
      name: "PyTorch",
      description:
        "Framework que popularizó un estilo imperativo con grafos dinámicos y diferenciación automática. Este enfoque simplifica el código de investigación y la definición de estructuras que dependen de los datos.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-caffe-y-caffe2`,
      name: "Caffe y Caffe2",
      description:
        "Caffe fue un framework centrado en visión y despliegue que describía las redes mediante archivos prototxt. Caffe2 amplió esa idea con grafos estáticos, una interfaz de Python y mayor atención a escenarios de producción.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-microsoft-cognitive-toolkit-cntk`,
      name: "Microsoft Cognitive Toolkit (CNTK)",
      description:
        "Framework de Microsoft orientado al entrenamiento distribuido de redes profundas. Permitía expresar modelos como grafos de cómputo y ejecutarlos sobre CPU o GPU.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-apache-mxnet`,
      name: "Apache MXNet",
      description:
        "Framework de aprendizaje profundo concebido para ofrecer eficiencia, flexibilidad y escalado distribuido. Mantuvo una asociación histórica con los servicios de AWS.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-keras`,
      name: "Keras",
      description:
        "API de alto nivel para componer capas, configurar el entrenamiento y ejecutar modelos con menos código. Abstrae operaciones de bajo nivel sin impedir definir arquitecturas más complejas cuando se necesita.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-api-secuencial`,
      name: "API secuencial",
      description:
        "Estilo de Keras que encadena capas en un único recorrido lineal. Es adecuado cuando cada capa tiene exactamente una entrada y una salida dentro de una pila simple.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-api-funcional`,
      name: "API funcional",
      description:
        "Estilo que conecta explícitamente tensores y capas. Permite ramas, múltiples entradas o salidas, reutilización de capas y topologías que no caben en una secuencia lineal.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-capa-densa-dense`,
      name: "Capa densa (Dense)",
      description:
        "Capa totalmente conectada que calcula una transformación afín seguida, opcionalmente, de una activación.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-compilacion-del-modelo`,
      name: "Compilación del modelo",
      description:
        "Configuración que asocia al modelo una pérdida, un optimizador y métricas. En APIs de alto nivel también verifica compatibilidad de formas y prepara el procedimiento de entrenamiento.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-frameworks-de-aprendizaje-profundo-entropia-cruzada-categorica`,
      name: "Entropía cruzada categórica",
      description:
        "Pérdida habitual para clasificación multiclase.",
      inDefinedTermSet: {
        "@id": `${base}#section-frameworks-de-aprendizaje-profundo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-saturacion`,
      name: "Saturación",
      description:
        "Región de una activación donde cambios grandes en la entrada producen variaciones mínimas en la salida. Allí la derivada se acerca a cero y el gradiente que atraviesa la unidad puede debilitarse.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-tangente-hiperbolica-tanh`,
      name: "Tangente hiperbólica (tanh)",
      description:
        "Activación acotada entre -1 y 1 y centrada en cero.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-unidad-lineal-rectificada-relu`,
      name: "Unidad lineal rectificada (ReLU)",
      description:
        "Activación que conserva los valores positivos y anula los negativos.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-relu-muerta`,
      name: "ReLU muerta",
      description:
        "Unidad ReLU que queda siempre en el tramo negativo y, por tanto, produce salida y gradiente iguales a cero. Actualizaciones demasiado grandes pueden provocar este estado.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-leaky-relu-y-prelu`,
      name: "Leaky ReLU y PReLU",
      description:
        "Variantes que conservan una pendiente pequeña cuando z<0 para evitar unidades completamente inactivas.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-elu`,
      name: "ELU",
      description:
        "Activación lineal para valores positivos y exponencial para negativos. Su rama negativa permite salidas por debajo de cero y suaviza la transición respecto de una ReLU básica.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-maxout`,
      name: "Maxout",
      description:
        "Unidad que devuelve el máximo entre varias transformaciones afines. Puede representar funciones lineales por tramos flexibles, a cambio de incrementar el número de parámetros.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-ruptura-de-simetria`,
      name: "Ruptura de simetría",
      description:
        "Necesidad de iniciar unidades equivalentes con pesos diferentes. Si todos los pesos comienzan en cero, unidades de una misma capa reciben gradientes idénticos y aprenden la misma función.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-inicializacion-aleatoria`,
      name: "Inicialización aleatoria",
      description:
        "Asignación de valores pequeños y distintos a los pesos para romper la simetría. La escala importa: valores extremos pueden saturar activaciones y valores demasiado pequeños pueden debilitar señales en redes profundas.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-inicializacion-xavier-o-glorot`,
      name: "Inicialización Xavier o Glorot",
      description:
        "Estrategia que escala los pesos según el número de entradas y salidas para conservar aproximadamente la varianza entre capas.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-inicializacion-he`,
      name: "Inicialización He",
      description:
        "Escalado pensado para activaciones ReLU, cuya varianza típica es.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-normalizacion-por-lotes-batch-normalization`,
      name: "Normalización por lotes (batch normalization)",
      description:
        "Normaliza activaciones con la media y la varianza del minilote, y después aplica escala y desplazamiento aprendibles.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-momento-momentum`,
      name: "Momento (momentum)",
      description:
        "Extensión de SGD que acumula una velocidad basada en gradientes anteriores.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-momento-de-nesterov`,
      name: "Momento de Nesterov",
      description:
        "Variante que calcula el gradiente después de anticipar el desplazamiento asociado con la velocidad. Esta \"mirada hacia delante\" puede mejorar la corrección del paso.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-adagrad`,
      name: "AdaGrad",
      description:
        "Optimizador que adapta una tasa distinta a cada parámetro al dividir el gradiente por la raíz de los cuadrados acumulados. Favorece parámetros con gradientes infrecuentes, pero su tasa efectiva puede disminuir demasiado.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-rmsprop`,
      name: "RMSProp",
      description:
        "Evita la acumulación ilimitada de AdaGrad usando una media móvil exponencial de los gradientes cuadrados. Así mantiene tasas adaptativas sin detener prematuramente el aprendizaje.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-adam`,
      name: "Adam",
      description:
        "Optimizador adaptativo que combina una media móvil del gradiente con otra de su cuadrado, junto con correcciones de sesgo.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-decaimiento-de-la-tasa-de-aprendizaje`,
      name: "Decaimiento de la tasa de aprendizaje",
      description:
        "Permite pasos grandes al principio y ajustes más finos cerca de una solución; puede seguir escalones, una curva exponencial u otra agenda.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-sobreajuste-overfitting`,
      name: "Sobreajuste (overfitting)",
      description:
        "Situación en la que el modelo se adapta demasiado a particularidades del conjunto de entrenamiento y pierde rendimiento en datos no vistos. Se observa cuando el error de entrenamiento sigue bajando mientras el de validación comienza a subir.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-generalizacion`,
      name: "Generalización",
      description:
        "Capacidad del modelo para conservar un buen desempeño en ejemplos que no participaron en su ajuste. Es el objetivo real del aprendizaje, no la memorización del conjunto de entrenamiento.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-regularizacion`,
      name: "Regularización",
      description:
        "Conjunto de técnicas que limitan la capacidad efectiva del modelo o introducen restricciones para reducir el sobreajuste.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-regularizacion-l2`,
      name: "Regularización L2",
      description:
        "Añade a la pérdida una penalización por el cuadrado de los pesos.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-regularizacion-l1`,
      name: "Regularización L1",
      description:
        "Penaliza el valor absoluto de los pesos.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-regularizacion-por-norma-maxima-max-norm`,
      name: "Regularización por norma máxima (max-norm)",
      description:
        "Restringe la norma de los vectores de pesos para que no supere un límite. Tras una actualización, los pesos que exceden ese radio se proyectan de nuevo al conjunto permitido.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-dropout`,
      name: "Dropout",
      description:
        "Durante el entrenamiento desactiva aleatoriamente una fracción de las unidades. Impide dependencias excesivas entre activaciones y puede interpretarse como el entrenamiento de muchas subredes compartiendo parámetros. En inferencia se usa la red completa con el escalado correspondiente.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-parada-temprana-early-stopping`,
      name: "Parada temprana (early stopping)",
      description:
        "Interrumpe el entrenamiento cuando la métrica de validación deja de mejorar. Evita continuar hacia una región que reduce el error de entrenamiento pero empeora la generalización.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion-conjunto-de-validacion`,
      name: "Conjunto de validación",
      description:
        "Subconjunto separado del entrenamiento que sirve para elegir hiperparámetros, decidir cuándo detener el ajuste y comparar configuraciones. No debe reemplazar al conjunto de prueba final.",
      inDefinedTermSet: {
        "@id": `${base}#section-entrenamiento-practico-activacion-inicializacion-optimizacion-y-regularizacion`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-red-neuronal-convolucional-cnn`,
      name: "Red neuronal convolucional (CNN)",
      description:
        "Arquitectura que explota la estructura espacial de imágenes u otros datos en rejilla. Usa filtros locales con pesos compartidos, por lo que necesita muchos menos parámetros que una capa totalmente conectada aplicada directamente a todos los píxeles.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-clasificacion-de-imagenes`,
      name: "Clasificación de imágenes",
      description:
        "Tarea de asignar una o varias categorías a una imagen completa. La salida suele ser una distribución de probabilidad sobre las clases.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-recuperacion-de-imagenes-image-retrieval`,
      name: "Recuperación de imágenes (image retrieval)",
      description:
        "Búsqueda de imágenes visualmente o semánticamente similares. Puede comparar representaciones internas extraídas por una CNN, en vez de los píxeles sin procesar.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-deteccion-de-objetos`,
      name: "Detección de objetos",
      description:
        "Problema que combina clasificación y localización: identifica qué objetos aparecen y estima sus regiones o cajas delimitadoras.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-segmentacion`,
      name: "Segmentación",
      description:
        "Asignación de una clase a cada píxel o región de la imagen. A diferencia de la clasificación global, conserva explícitamente la distribución espacial de los elementos.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-filtro-o-kernel-convolucional`,
      name: "Filtro o kernel convolucional",
      description:
        "Pequeño tensor de pesos que recorre el volumen de entrada. En cada posición calcula un producto local y aprende a responder ante patrones como bordes, texturas o formas.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-capa-convolucional`,
      name: "Capa convolucional",
      description:
        "Capa que aplica varios filtros compartidos a distintas posiciones del dato.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-mapa-de-activacion`,
      name: "Mapa de activación",
      description:
        "Matriz producida al desplazar un filtro sobre la entrada. Indica dónde y con qué intensidad se detectó el patrón asociado con ese filtro.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-profundidad-o-canales`,
      name: "Profundidad o canales",
      description:
        "Tercera dimensión de una imagen o volumen de activaciones. Una imagen RGB tiene tres canales; una capa convolucional produce tantos canales de salida como filtros tenga.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-paso-stride`,
      name: "Paso (stride)",
      description:
        "Cantidad de posiciones que avanza el filtro en cada desplazamiento. Un paso mayor reduce las dimensiones espaciales de la salida.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-relleno-con-ceros-zero-padding`,
      name: "Relleno con ceros (zero-padding)",
      description:
        "Adición de ceros alrededor de la entrada para controlar el tamaño de salida y permitir que el filtro procese los bordes.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-pooling`,
      name: "Pooling",
      description:
        "Operación fija que resume regiones vecinas para reducir dimensiones espaciales. No añade pesos y aporta cierta tolerancia a pequeños desplazamientos.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-max-pooling`,
      name: "Max pooling",
      description:
        "Forma de pooling que conserva el máximo de cada ventana. Puede interpretarse como seleccionar la activación más fuerte de una región.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-imagenet-e-ilsvrc`,
      name: "ImageNet e ILSVRC",
      description:
        "ImageNet es un gran conjunto de imágenes etiquetadas; ILSVRC fue una competición de reconocimiento visual construida sobre parte de esos datos. Su uso impulsó comparaciones estandarizadas entre arquitecturas profundas.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-lenet-5`,
      name: "LeNet-5",
      description:
        "Arquitectura convolucional temprana aplicada al reconocimiento de caracteres y dígitos. Demostró que convolución, reducción espacial y entrenamiento por gradiente podían formar un sistema práctico de visión.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-alexnet`,
      name: "AlexNet",
      description:
        "CNN profunda que obtuvo una mejora decisiva en ILSVRC 2012. Combinó convoluciones, ReLU, dropout, aumento de datos y entrenamiento acelerado con GPU.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-vggnet`,
      name: "VGGNet",
      description:
        "VGG16 y VGG19 muestran cómo filtros pequeños apilados pueden construir campos receptivos mayores, aunque con muchos parámetros.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-aumento-de-datos-data-augmentation`,
      name: "Aumento de datos (data augmentation)",
      description:
        "Generación de ejemplos de entrenamiento mediante transformaciones que preservan la etiqueta, como recortes, reflejos o cambios moderados de brillo. Aumenta la variabilidad observada y actúa como regularizador.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-aprendizaje-por-transferencia-transfer-learning`,
      name: "Aprendizaje por transferencia (transfer learning)",
      description:
        "Reutilización de un modelo entrenado en una tarea amplia como punto de partida para otra relacionada. Las capas iniciales aportan representaciones generales y las finales se sustituyen o reajustan.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-convolucionales-cnn-congelacion-de-capas`,
      name: "Congelación de capas",
      description:
        "Decisión de mantener fijos ciertos pesos durante la transferencia. Reduce el número de parámetros que deben ajustarse y es útil cuando el nuevo conjunto de datos es pequeño.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-convolucionales-cnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-procesamiento-del-lenguaje-natural-pln`,
      name: "Procesamiento del lenguaje natural (PLN)",
      description:
        "Área que desarrolla métodos computacionales para analizar o generar lenguaje humano. Su dificultad procede, entre otros factores, de la ambigüedad, el contexto y el cambio continuo de significados.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-wordnet`,
      name: "WordNet",
      description:
        "Recurso léxico que agrupa palabras por significado y registra relaciones como sinonimia o antonimia. Representa conocimiento semántico explícito, pero exige mantenimiento manual y no proporciona por sí solo una geometría continua del significado.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-vocabulario`,
      name: "Vocabulario",
      description:
        "Conjunto finito de unidades lingüísticas reconocidas por un modelo. En las representaciones discretas, cada posición del vector suele corresponder a una palabra del vocabulario.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-frecuencia-de-termino-term-frequency`,
      name: "Frecuencia de término (term frequency)",
      description:
        "Número de veces que una palabra aparece en un texto. Produce una representación simple, pero no conserva el orden ni distingue por sí misma la relevancia semántica.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-bolsa-de-palabras-bag-of-words`,
      name: "Bolsa de palabras (bag-of-words)",
      description:
        "Representación que registra presencia o frecuencia de términos e ignora su orden. Es compacta conceptualmente, aunque pierde información sintáctica y relaciones entre palabras.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-representacion-discreta`,
      name: "Representación discreta",
      description:
        "Codificación en la que cada palabra ocupa una dimensión independiente. Dos términos distintos resultan ortogonales aun cuando sus significados sean cercanos.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-representacion-distribuida`,
      name: "Representación distribuida",
      description:
        "Vector denso en el que el significado se reparte entre múltiples dimensiones aprendidas. Palabras usadas en contextos parecidos tienden a ocupar regiones próximas.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-vector-de-palabra-o-embedding`,
      name: "Vector de palabra o embedding",
      description:
        "Representación numérica densa de una palabra. Su geometría permite usar similitudes y relaciones semánticas como entrada de otros modelos.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-corpus`,
      name: "Corpus",
      description:
        "Colección de textos usada para obtener estadísticas lingüísticas o entrenar representaciones. La cobertura, calidad y sesgos del corpus afectan directamente a los vectores aprendidos.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-contexto-y-ventana`,
      name: "Contexto y ventana",
      description:
        "El contexto es el conjunto de palabras próximas a un término central; la ventana define cuántas posiciones a cada lado se consideran. Word2Vec aprende a partir de estas coapariciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-word2vec`,
      name: "Word2Vec",
      description:
        "Familia de modelos que aprende vectores prediciendo palabras relacionadas por contexto. Su supuesto distributivo es que términos usados en entornos lingüísticos semejantes suelen guardar una relación semántica.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-verosimilitud-likelihood`,
      name: "Verosimilitud (likelihood)",
      description:
        "Medida de qué tan probables son los contextos observados bajo los vectores actuales.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-similitud-coseno`,
      name: "Similitud coseno",
      description:
        "Mide la orientación compartida por dos vectores, independientemente de su escala.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-softmax`,
      name: "Softmax",
      description:
        "Función que convierte una colección de puntuaciones en una distribución de probabilidad.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-muestreo-negativo-negative-sampling`,
      name: "Muestreo negativo (negative sampling)",
      description:
        "Aproximación que contrasta pares de palabras observados con unos pocos pares elegidos como negativos. Evita normalizar sobre todo el vocabulario en cada paso y acelera el entrenamiento.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-skip-gram`,
      name: "Skip-gram",
      description:
        "Variante de Word2Vec que predice las palabras del contexto a partir de una palabra central.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-continuous-bag-of-words-cbow`,
      name: "Continuous bag-of-words (CBOW)",
      description:
        "Variante que combina las palabras del contexto para predecir la palabra central. Invierte la dirección predictiva de skip-gram.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-representaciones-del-lenguaje-y-word2vec-vectores-preentrenados`,
      name: "Vectores preentrenados",
      description:
        "Embeddings aprendidos previamente con corpus extensos y reutilizados como entrada de otra tarea. Constituyen una forma de transferencia de conocimiento lingüístico.",
      inDefinedTermSet: {
        "@id": `${base}#section-representaciones-del-lenguaje-y-word2vec`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-secuencia`,
      name: "Secuencia",
      description:
        "Colección ordenada de elementos cuya posición o dependencia temporal es relevante. Texto, audio, vídeo y series de sensores son ejemplos de datos secuenciales.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-red-neuronal-recurrente-rnn`,
      name: "Red neuronal recurrente (RNN)",
      description:
        "Red que procesa una secuencia manteniendo un estado interno. En cada paso combina el elemento actual con la memoria acumulada, lo que permite entradas y salidas de longitud variable.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-estado-oculto-hidden-state`,
      name: "Estado oculto (hidden state)",
      description:
        "Vector que resume la información procesada hasta un punto de la secuencia.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-paso-temporal-time-step`,
      name: "Paso temporal (time step)",
      description:
        "El término no implica necesariamente tiempo físico: también puede ser la posición de una palabra.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-rnn-basica-vanilla-rnn`,
      name: "RNN básica (vanilla RNN)",
      description:
        "Forma elemental de red recurrente que usa una sola transformación, normalmente tanh, para actualizar el estado. Comparte las mismas matrices de pesos en todos los pasos.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-desenrollado-de-una-rnn`,
      name: "Desenrollado de una RNN",
      description:
        "Representación del ciclo recurrente como una cadena de copias a lo largo de la secuencia. Las copias comparten parámetros, pero mantienen estados intermedios distintos.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-retropropagacion-a-traves-del-tiempo-bptt`,
      name: "Retropropagación a través del tiempo (BPTT)",
      description:
        "Aplicación de backpropagation sobre la red desenrollada. La pérdida puede recibir aportaciones de varios pasos y el gradiente recorre las dependencias temporales hacia atrás.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-bptt-truncada-tbptt`,
      name: "BPTT truncada (TBPTT)",
      description:
        "Variante que divide secuencias largas y limita cuántos pasos atraviesa el gradiente. Conserva el estado entre fragmentos, pero reduce memoria y coste computacional.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-modelo-del-lenguaje`,
      name: "Modelo del lenguaje",
      description:
        "Modelo que asigna probabilidad a una secuencia.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-muestreo-autoregresivo`,
      name: "Muestreo autoregresivo",
      description:
        "Procedimiento de generar un elemento desde la distribución predicha y utilizarlo como entrada del paso siguiente. Muestrear, en vez de elegir siempre el máximo, produce secuencias diversas.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-gradiente-explosivo`,
      name: "Gradiente explosivo",
      description:
        "Gradiente cuya magnitud crece de forma descontrolada al multiplicarse repetidamente durante BPTT. Puede producir actualizaciones inestables y valores numéricos inválidos.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-recorte-de-gradiente-gradient-clipping`,
      name: "Recorte de gradiente (gradient clipping)",
      description:
        "Control que reescala el gradiente cuando su norma supera un umbral c.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-gradiente-desvanecido`,
      name: "Gradiente desvanecido",
      description:
        "Gradiente que se aproxima a cero al atravesar muchas operaciones. Impide que los pasos lejanos influyan de forma efectiva en los parámetros iniciales de la secuencia.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-lstm-long-short-term-memory`,
      name: "LSTM (long short-term memory)",
      description:
        "Unidad recurrente con un estado de celda y puertas que regulan qué información olvidar, incorporar y exponer. Su ruta aditiva facilita conservar dependencias más largas que una RNN básica.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-estado-de-celda-cell-state`,
      name: "Estado de celda (cell state)",
      description:
        "Memoria interna mathbf{c}_t de una LSTM.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-puertas-de-una-lstm`,
      name: "Puertas de una LSTM",
      description:
        "Vectores con valores entre cero y uno que funcionan como controles. La puerta de olvido mathbf{f}_t conserva o descarta memoria; la de entrada mathbf{i}_t escribe información; y la de salida mathbf{o}_t regula el estado visible.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-gru-gated-recurrent-unit`,
      name: "GRU (gated recurrent unit)",
      description:
        "Unidad recurrente con puertas que combina estado oculto y memoria en un solo vector. Es más simple que una LSTM y también busca preservar dependencias largas.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-rnn-apilada`,
      name: "RNN apilada",
      description:
        "Arquitectura profunda donde la secuencia de salidas de una RNN alimenta a otra. Las capas superiores pueden aprender patrones temporales más abstractos.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-redes-neuronales-recurrentes-rnn-rnn-bidireccional`,
      name: "RNN bidireccional",
      description:
        "Arquitectura que procesa la secuencia en ambos sentidos y combina las representaciones. Es útil cuando la predicción puede usar contexto anterior y posterior.",
      inDefinedTermSet: {
        "@id": `${base}#section-redes-neuronales-recurrentes-rnn`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-aprendizaje-por-refuerzo-rl`,
      name: "Aprendizaje por refuerzo (RL)",
      description:
        "Paradigma en el que un agente aprende a elegir acciones mediante su interacción con un entorno. No recibe la respuesta correcta para cada estado; recibe recompensas y busca maximizar su acumulación a largo plazo.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-agente`,
      name: "Agente",
      description:
        "Entidad que observa un estado, selecciona una acción y actualiza su comportamiento según la experiencia.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-entorno`,
      name: "Entorno",
      description:
        "Sistema externo sobre el que actúa el agente. Determina el estado siguiente y la recompensa producida por una acción.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-estado`,
      name: "Estado",
      description:
        "Representación de la situación relevante para decidir. Puede ser compacta, como posición y velocidad, o de alta dimensión, como varios fotogramas de un videojuego.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-accion`,
      name: "Acción",
      description:
        "Decisión disponible para el agente en un estado. El conjunto puede ser discreto, continuo o depender del estado.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-recompensa-reward`,
      name: "Recompensa (reward)",
      description:
        "Señal escalar inmediata que expresa el resultado local de una transición. Diseñar recompensas adecuadas es crucial, pues el agente optimiza esa señal y no una intención no formalizada.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-proceso-de-decision-de-markov-mdp`,
      name: "Proceso de decisión de Markov (MDP)",
      description:
        "Modelo matemático definido, en una notación común, por la tupla: estados, acciones, probabilidades de transición, recompensas y factor de descuento.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-propiedad-de-markov`,
      name: "Propiedad de Markov",
      description:
        "Supuesto de que el estado actual contiene toda la información necesaria para modelar la transición siguiente; dado s_t y a_t, el pasado no añade información relevante.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-politica`,
      name: "Política",
      description:
        "Regla de comportamiento que asigna acciones, o probabilidades sobre acciones, a cada estado.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-factor-de-descuento`,
      name: "Factor de descuento",
      description:
        "Valor que reduce el peso de recompensas futuras. El retorno desde t es.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-politica-optima`,
      name: "Política óptima",
      description:
        "Puede no ser única si varias acciones obtienen el mismo valor.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-funcion-de-valor-de-estado`,
      name: "Función de valor de estado",
      description:
        "Retorno esperado al comenzar en s y seguir una política.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-funcion-de-valor-de-accion-q`,
      name: "Función de valor de acción (Q)",
      description:
        "Retorno esperado después de ejecutar a en s y continuar según.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-ecuacion-de-optimalidad-de-bellman`,
      name: "Ecuación de optimalidad de Bellman",
      description:
        "Relaciona el valor óptimo de una acción con la recompensa inmediata y el mejor valor futuro.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-iteracion-de-valores`,
      name: "Iteración de valores",
      description:
        "Método que aplica repetidamente una actualización de Bellman hasta aproximar el valor óptimo. Una tabla explícita deja de ser práctica cuando el espacio de estados es enorme.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-q-learning`,
      name: "Q-learning",
      description:
        "Algoritmo que aprende valores de acción a partir de transiciones sin exigir que la política seguida sea la misma que se evalúa como óptima.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-red-q-profunda-dqn`,
      name: "Red Q profunda (DQN)",
      description:
        "Puede recibir el estado y producir un valor por cada acción discreta.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-memoria-de-repeticion-de-experiencias`,
      name: "Memoria de repetición de experiencias",
      description:
        "Buffer de transiciones (s,a,r,s') del que se extraen minilotes aleatorios. Reduce la correlación entre ejemplos consecutivos y permite reutilizar experiencia.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-red-objetivo-target-network`,
      name: "Red objetivo (target network)",
      description:
        "Copia de la Q-network cuyos parámetros se actualizan con menor frecuencia. Estabiliza el objetivo de Bellman evitando que cambie al mismo ritmo que la red entrenada.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-episodio`,
      name: "Episodio",
      description:
        "Trayectoria desde un estado inicial hasta una condición terminal, como una partida completa.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo-compromiso-exploracion-explotacion`,
      name: "Compromiso exploración-explotación",
      description:
        "Equilibrio entre elegir acciones conocidas por su buen rendimiento y probar otras que podrían revelar mejores resultados.",
      inDefinedTermSet: {
        "@id": `${base}#section-agentes-inteligentes-y-aprendizaje-profundo-por-refuerzo`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-unidad-de-procesamiento-grafico-gpu`,
      name: "Unidad de procesamiento gráfico (GPU)",
      description:
        "Coprocesador con muchos núcleos relativamente simples, diseñado para ejecutar gran cantidad de operaciones numéricas en paralelo. Resulta eficaz para productos de matrices y convoluciones de redes neuronales.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-unidad-central-de-procesamiento-cpu`,
      name: "Unidad central de procesamiento (CPU)",
      description:
        "Procesador de propósito general con menos núcleos, pero más complejos y rápidos en tareas secuenciales. Suele coordinar la ejecución y preparar datos para el acelerador.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-ancho-de-banda-de-memoria`,
      name: "Ancho de banda de memoria",
      description:
        "Cantidad de datos transferible por unidad de tiempo entre memoria y procesador. El entrenamiento puede quedar limitado por esta transferencia aunque exista capacidad aritmética disponible.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-cuda`,
      name: "CUDA",
      description:
        "Plataforma de NVIDIA para programación paralela sobre sus GPU. Proporciona el entorno sobre el que funcionan bibliotecas numéricas optimizadas.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-cudnn`,
      name: "cuDNN",
      description:
        "Biblioteca de primitivas para redes profundas aceleradas en GPU NVIDIA, como convoluciones, pooling, normalización y operaciones recurrentes. Los frameworks la utilizan sin exponer normalmente su implementación de bajo nivel.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-opencl`,
      name: "OpenCL",
      description:
        "Estándar abierto para cómputo paralelo en diferentes clases de dispositivos. Ofrece una alternativa más general a tecnologías ligadas a un fabricante.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-cuello-de-botella-de-entrada`,
      name: "Cuello de botella de entrada",
      description:
        "Situación en la que lectura, decodificación o transformación de datos es más lenta que el entrenamiento. Se mitiga con almacenamiento rápido, procesamiento paralelo, buffers y carga anticipada.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-paralelismo-de-modelo`,
      name: "Paralelismo de modelo",
      description:
        "División de una red entre varios dispositivos o máquinas. Permite ejecutar modelos que no caben en un solo acelerador, pero introduce comunicación entre sus partes.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-paralelismo-de-datos`,
      name: "Paralelismo de datos",
      description:
        "Replicación del modelo en varios trabajadores, cada uno con un subconjunto de ejemplos. Los gradientes o parámetros se combinan para mantener un modelo compartido.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-trabajador-worker`,
      name: "Trabajador (worker)",
      description:
        "Proceso o máquina que ejecuta una parte del entrenamiento distribuido, normalmente el cálculo de predicciones y gradientes sobre un lote local.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-servidor-de-parametros`,
      name: "Servidor de parámetros",
      description:
        "Componente que almacena los parámetros globales, recibe actualizaciones de los trabajadores y distribuye nuevas versiones del modelo.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-promedio-de-parametros`,
      name: "Promedio de parámetros",
      description:
        "Esquema síncrono en el que cada trabajador entrena una copia y el servidor promedia los parámetros recibidos. La espera al trabajador más lento limita el rendimiento y la tolerancia a fallos.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-sgd-asincrono`,
      name: "SGD asíncrono",
      description:
        "Entrenamiento en el que los trabajadores envían gradientes sin esperar a los demás. Aumenta utilización y tolerancia a retrasos, pero cada gradiente puede haberse calculado con una versión anterior del modelo.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-downpour-sgd`,
      name: "Downpour SGD",
      description:
        "Diseño asíncrono basado en paralelismo de datos y servidores de parámetros. Cada trabajador obtiene parámetros, calcula gradientes y los entrega independientemente para que el servidor actualice el modelo.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-gradiente-obsoleto-stale-gradient`,
      name: "Gradiente obsoleto (stale gradient)",
      description:
        "Gradiente calculado con parámetros que ya fueron modificados por otros trabajadores. Un retraso excesivo puede deteriorar la convergencia.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-gpu-y-entrenamiento-distribuido-benchmark-de-rendimiento`,
      name: "Benchmark de rendimiento",
      description:
        "Medición controlada del tiempo, rendimiento o uso de recursos de una configuración. Debe especificar hardware, software, modelo, tamaño de lote y precisión numérica para ser interpretable.",
      inDefinedTermSet: {
        "@id": `${base}#section-gpu-y-entrenamiento-distribuido`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-inferencia`,
      name: "Inferencia",
      description:
        "Uso de un modelo entrenado para producir una salida a partir de datos nuevos. Normalmente requiere solo un pase hacia delante, sin retropropagación ni actualización de parámetros.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-tiempo-de-servicio-serving-time`,
      name: "Tiempo de servicio (serving time)",
      description:
        "Etapa operativa en la que el modelo responde solicitudes reales. También se denomina tiempo de predicción o de inferencia y se contrapone al entrenamiento.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-servidor-de-modelos`,
      name: "Servidor de modelos",
      description:
        "Servicio que carga artefactos entrenados y expone una interfaz de predicción. Puede incorporar concurrencia, lotes dinámicos, control de versiones y métricas operativas.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-concurrencia`,
      name: "Concurrencia",
      description:
        "Capacidad para atender varias solicitudes durante el mismo intervalo. Evita que una predicción lenta bloquee por completo las siguientes.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-latencia-y-tiempo-de-ida-y-vuelta`,
      name: "Latencia y tiempo de ida y vuelta",
      description:
        "La latencia es el tiempo hasta obtener una respuesta; el round-trip time incluye el recorrido completo de la solicitud y su respuesta. Un modelo puede ser rápido aisladamente y aun así sufrir latencia por red, colas o preprocesamiento.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-batching-de-inferencia`,
      name: "Batching de inferencia",
      description:
        "Agrupación de solicitudes en un tensor para aprovechar operaciones vectorizadas. Aumenta el rendimiento total, aunque esperar a formar el lote puede elevar la latencia individual.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-buffer`,
      name: "Buffer",
      description:
        "Almacenamiento temporal donde se acumulan solicitudes o datos antes de procesarlos. En serving permite crear lotes, siempre con límites de tiempo y tamaño.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-balanceador-de-carga`,
      name: "Balanceador de carga",
      description:
        "Componente que reparte solicitudes entre réplicas del servicio según disponibilidad o carga. Facilita el escalado horizontal y la tolerancia a fallos.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-versionado-y-rollback-de-modelos`,
      name: "Versionado y rollback de modelos",
      description:
        "Identificación explícita de cada artefacto desplegado y capacidad de volver a una versión anterior. Permite rastrear predicciones y recuperarse si el modelo nuevo empeora el servicio.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-rest-y-grpc`,
      name: "REST y gRPC",
      description:
        "Formas comunes de exponer predicciones por red. REST suele intercambiar recursos mediante HTTP; gRPC define contratos y llamadas remotas eficientes. La elección depende del ecosistema y los requisitos de interoperabilidad y rendimiento.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-computacion-en-la-nube`,
      name: "Computación en la nube",
      description:
        "Provisión bajo demanda de cómputo, almacenamiento y servicios gestionados. Permite ampliar o reducir recursos sin mantener toda la infraestructura física propia.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-tpu-tensor-processing-unit`,
      name: "TPU (tensor processing unit)",
      description:
        "Acelerador especializado para operaciones tensoriales de aprendizaje automático. Es un ejemplo de hardware ofrecido mediante ecosistemas de nube para entrenamiento e inferencia.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-api-de-ia-gestionada`,
      name: "API de IA gestionada",
      description:
        "Servicio listo para tareas como visión, voz, traducción o análisis de texto. Reduce la infraestructura propia, pero introduce dependencia del proveedor y limita el control sobre datos y modelo.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-monitorizacion`,
      name: "Monitorización",
      description:
        "Recopilación de métricas técnicas y del comportamiento del modelo: tráfico, errores, latencia, distribuciones de entrada y calidad de predicción. Debe permitir alertar antes de que la degradación sea grave.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-metricas-offline-y-online`,
      name: "Métricas offline y online",
      description:
        "Las métricas offline se calculan con datos retenidos antes del despliegue; las online miden el efecto real del sistema en producción. Un buen resultado offline no garantiza impacto positivo para todos los usuarios.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-desviacion-entre-entrenamiento-y-servicio-training-serving-skew`,
      name: "Desviación entre entrenamiento y servicio (training-serving skew)",
      description:
        "Degradación causada por diferencias entre los datos o transformaciones usados al entrenar y al predecir. También aparece cuando cambia la distribución real con el tiempo o entre poblaciones.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-comportamiento-por-subpoblaciones`,
      name: "Comportamiento por subpoblaciones",
      description:
        "Evaluación separada de grupos relevantes. Una métrica agregada puede mejorar mientras un grupo pequeño empeora de forma importante, por lo que conviene definir segmentos y umbrales explícitos.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-pipeline-de-entrenamiento-continuo`,
      name: "Pipeline de entrenamiento continuo",
      description:
        "Flujo automatizado que ingiere y valida datos, entrena, evalúa y despliega nuevas versiones cuando el dominio exige actualización frecuente.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-validacion-de-datos`,
      name: "Validación de datos",
      description:
        "Comprobaciones de esquema, valores ausentes, rangos y distribuciones antes de entrenar o servir. Debe detener el pipeline si una anomalía amenaza la validez del modelo.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-nube-y-puesta-en-produccion-de-modelos-validacion-del-modelo`,
      name: "Validación del modelo",
      description:
        "Puerta previa al despliegue que verifica compatibilidad, métricas globales, desempeño por segmentos y ausencia de regresiones frente a la versión vigente.",
      inDefinedTermSet: {
        "@id": `${base}#section-nube-y-puesta-en-produccion-de-modelos`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-modelo-generativo`,
      name: "Modelo generativo",
      description:
        "Modelo que aprende regularidades de la distribución de los datos para producir ejemplos nuevos con propiedades similares a los observados.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-muestreo`,
      name: "Muestreo",
      description:
        "Obtención de una realización concreta desde una distribución. En generación, variar la muestra latente permite producir salidas distintas.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-estimacion-explicita-de-densidad`,
      name: "Estimación explícita de densidad",
      description:
        "Enfoque que representa o aproxima directamente una función de probabilidad sobre los datos. Los modelos autoregresivos y los autoencoders variacionales pertenecen a esta familia.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-estimacion-implicita-de-densidad`,
      name: "Estimación implícita de densidad",
      description:
        "Enfoque que aprende un procedimiento para generar muestras sin evaluar de forma explícita la densidad de cada dato. Las GAN pertenecen a esta categoría.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-pixelrnn-y-pixelcnn`,
      name: "PixelRNN y PixelCNN",
      description:
        "Modelos autoregresivos de imagen que factorizan la probabilidad conjunta en probabilidades condicionadas de píxeles. PixelRNN emplea recurrencia; PixelCNN usa convoluciones enmascaradas.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-autoencoder-variacional-vae`,
      name: "Autoencoder variacional (VAE)",
      description:
        "Modelo generativo latente que aprende una distribución aproximada para codificar datos y un decodificador para reconstruir o generar ejemplos. Optimiza una cota variacional que combina reconstrucción y regularización del espacio latente.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-red-generativa-adversarial-gan`,
      name: "Red generativa adversarial (GAN)",
      description:
        "Sistema con dos redes entrenadas en oposición: el generador produce muestras y el discriminador intenta distinguirlas de los datos reales.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-generador`,
      name: "Generador",
      description:
        "Aprende a producir resultados que el discriminador considere reales.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-discriminador`,
      name: "Discriminador",
      description:
        "Red D que estima la probabilidad de que una muestra proceda de los datos y no del generador. Su señal de error guía indirectamente el aprendizaje de G.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-objetivo-minimax-de-una-gan`,
      name: "Objetivo minimax de una GAN",
      description:
        "Juego de dos participantes en el que el discriminador maximiza la clasificación correcta y el generador intenta engañarlo.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-metaaprendizaje-meta-learning`,
      name: "Metaaprendizaje (meta-learning)",
      description:
        "Familia de métodos que optimiza la capacidad de aprender tareas nuevas usando experiencia obtenida en tareas anteriores. Su meta no es solo ajustar un modelo, sino mejorar el propio proceso de adaptación.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-ajuste-de-hiperparametros`,
      name: "Ajuste de hiperparámetros",
      description:
        "Búsqueda de configuraciones para un modelo y una tarea concretos. Se relaciona con metaaprendizaje, pero no es equivalente: elegir una configuración no implica aprender una estrategia transferible entre tareas.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-learner-y-meta-learner`,
      name: "Learner y meta-learner",
      description:
        "El learner resuelve una tarea particular; el meta-learner modifica cómo se inicializa, actualiza o diseña el primero para que aprenda nuevas tareas con mayor rapidez.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-aprendizaje-de-optimizadores`,
      name: "Aprendizaje de optimizadores",
      description:
        "Enfoque donde un modelo auxiliar aprende una regla de actualización de parámetros. Puede usar una RNN para aprovechar la historia de gradientes y proponer pasos adaptados a una familia de problemas.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-busqueda-de-arquitecturas-neuronales-nas`,
      name: "Búsqueda de arquitecturas neuronales (NAS)",
      description:
        "Automatización del diseño de redes. Un controlador propone arquitecturas hijas, recibe su rendimiento como señal y mejora sus propuestas sucesivas.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-controlador-y-red-hija`,
      name: "Controlador y red hija",
      description:
        "En NAS, el controlador genera descripciones de arquitectura y la red hija se entrena y evalúa. La métrica de la hija proporciona realimentación al controlador.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-aprendizaje-con-pocos-ejemplos-few-shot-learning`,
      name: "Aprendizaje con pocos ejemplos (few-shot learning)",
      description:
        "Capacidad de adaptarse a una tarea con una cantidad reducida de ejemplos etiquetados. En metaaprendizaje se entrena sobre muchas tareas y se evalúa la adaptación a tareas no vistas.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": `${base}#term-modelos-generativos-y-metaaprendizaje-metaentrenamiento-y-metaprueba`,
      name: "Metaentrenamiento y metaprueba",
      description:
        "El metaentrenamiento usa una distribución de tareas para aprender el mecanismo de adaptación; la metaprueba mide ese mecanismo en tareas separadas, cada una con pocos datos propios.",
      inDefinedTermSet: {
        "@id": `${base}#section-modelos-generativos-y-metaaprendizaje`,
      },
    },
  ];
}
