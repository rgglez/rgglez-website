import type { QuizQuestion } from "../types";

export const questions: QuizQuestion[] = [
  {
    id: "q001",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "multi",
    prompt: "¿Qué tareas ilustran capacidades que estudia la IA?",
    options: [
      {
        id: "a",
        text: "Reenviar mensajes a una dirección fija",
        correct: false,
      },
      {
        id: "b",
        text: "Elegir acciones según sus consecuencias esperadas",
        correct: true,
      },
      {
        id: "c",
        text: "Guardar archivos sin analizar su contenido",
        correct: false,
      },
      { id: "d", text: "Reconocer patrones en datos nuevos", correct: true },
    ],
    explanation:
      "La IA estudia capacidades como la inferencia, el reconocimiento y la selección de acciones. Guardar o reenviar información siguiendo un procedimiento fijo puede resolverse con operaciones convencionales.",
  },
  {
    id: "q002",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "single",
    prompt:
      "Una persona conversa por escrito con interlocutores ocultos e intenta identificar a la máquina. ¿Qué evaluación reproduce?",
    options: [
      { id: "a", text: "Evaluación de generalización", correct: false },
      { id: "b", text: "Prueba de Turing", correct: true },
      { id: "c", text: "Evaluación de robustez", correct: false },
      { id: "d", text: "Análisis de caja blanca", correct: false },
    ],
    explanation:
      "La prueba de Turing compara el comportamiento conversacional en las condiciones del juego de imitación. Su resultado depende de la interacción observada.",
  },
  {
    id: "q003",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "boolean",
    prompt:
      "La propuesta de 1955 para el proyecto de Dartmouth solo planteaba automatizar operaciones aritméticas.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "La propuesta para el encuentro de 1956 incluía el aprendizaje, el uso del lenguaje y la formación de abstracciones, entre otros problemas.",
  },
  {
    id: "q004",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "single",
    prompt:
      "Un programa infiere dónde está un libro a partir de relaciones explícitas entre libros, colecciones y estantes. ¿Qué enfoque ilustra?",
    options: [
      { id: "a", text: "IA simbólica", correct: true },
      { id: "b", text: "Aprendizaje por refuerzo", correct: false },
      { id: "c", text: "Algoritmos genéticos", correct: false },
      { id: "d", text: "Conexionismo", correct: false },
    ],
    explanation:
      "La IA simbólica manipula representaciones explícitas y usa reglas para inferir hechos a partir de ellas.",
  },
  {
    id: "q005",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "multi",
    prompt:
      "¿Qué elementos constituyen el núcleo de un sistema experto clásico?",
    options: [
      { id: "a", text: "Función de aptitud", correct: false },
      { id: "b", text: "Base de conocimiento", correct: true },
      { id: "c", text: "Agenda visuoespacial", correct: false },
      { id: "d", text: "Motor de inferencia", correct: true },
    ],
    explanation:
      "La base contiene hechos y reglas del dominio. El motor de inferencia decide qué reglas aplicar a los datos del caso.",
  },
  {
    id: "q006",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "boolean",
    prompt:
      "En el conexionismo, una representación puede distribuirse entre las activaciones de muchas unidades.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "La respuesta de la red resulta del patrón conjunto de activaciones y de la fuerza de sus conexiones.",
  },
  {
    id: "q007",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "single",
    prompt:
      "¿Qué principio relaciona el cambio de una conexión con la actividad conjunta de las unidades conectadas?",
    options: [
      { id: "a", text: "Control por retroalimentación", correct: false },
      { id: "b", text: "Regla de Hebb", correct: true },
      { id: "c", text: "Inferencia por reglas de producción", correct: false },
      { id: "d", text: "Selección por aptitud", correct: false },
    ],
    explanation:
      "La regla de Hebb describe cómo la actividad conjunta puede fortalecer asociaciones a través de cambios locales.",
  },
  {
    id: "q008",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "single",
    prompt:
      "Un modelo rinde bien con los ejemplos que vio durante el entrenamiento. ¿Qué evidencia adicional permite evaluar su generalización?",
    options: [
      {
        id: "a",
        text: "La rapidez con que atendió una primera solicitud",
        correct: false,
      },
      {
        id: "b",
        text: "Su desempeño en ejemplos nuevos del entorno de interés",
        correct: true,
      },
      {
        id: "c",
        text: "La cantidad de parámetros que se ajustaron",
        correct: false,
      },
      {
        id: "d",
        text: "Su desempeño al volver a medir con los mismos ejemplos",
        correct: false,
      },
    ],
    explanation:
      "La generalización se evalúa en datos nuevos de la población o el entorno donde se espera que funcione el modelo.",
  },
  {
    id: "q009",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos entre método de aprendizaje y ejemplo son correctos?",
    options: [
      {
        id: "a",
        text: "Supervisado → descubrir grupos sin ejemplos etiquetados",
        correct: false,
      },
      {
        id: "b",
        text: "No supervisado → agrupar observaciones sin etiquetas objetivo",
        correct: true,
      },
      {
        id: "c",
        text: "Por refuerzo → elegir acciones para mejorar recompensas acumuladas",
        correct: true,
      },
      {
        id: "d",
        text: "Supervisado → predecir una etiqueta a partir de ejemplos etiquetados",
        correct: true,
      },
    ],
    explanation:
      "El aprendizaje supervisado usa resultados conocidos, el no supervisado descubre estructura y el aprendizaje por refuerzo considera las consecuencias de las acciones.",
  },
  {
    id: "q010",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "single",
    prompt:
      "Un modelo de visión combina bordes y texturas en varias capas hasta representar rasgos de objetos. ¿Qué propiedad aprovecha?",
    options: [
      {
        id: "a",
        text: "La asignación de recompensas futuras a acciones",
        correct: false,
      },
      {
        id: "b",
        text: "La composición de representaciones en el aprendizaje profundo",
        correct: true,
      },
      {
        id: "c",
        text: "La inferencia sobre una base de hechos y reglas",
        correct: false,
      },
      {
        id: "d",
        text: "La búsqueda por mutación de un algoritmo genético",
        correct: false,
      },
    ],
    explanation:
      "Las capas sucesivas transforman la información y permiten componer representaciones a partir de patrones más simples.",
  },
  {
    id: "q011",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "boolean",
    prompt:
      "En un algoritmo genético, la recombinación y la mutación sirven para generar variantes de las soluciones candidatas.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "La función de aptitud compara soluciones. La selección favorece algunas y la recombinación y la mutación permiten explorar variantes.",
  },
  {
    id: "q012",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "single",
    prompt:
      "¿Qué describe un sistema robótico físico en una celda de producción?",
    options: [
      {
        id: "a",
        text: "Un programa que estima pedidos a partir de ventas anteriores",
        correct: false,
      },
      {
        id: "b",
        text: "Un tablero que consulta el número de piezas terminadas",
        correct: false,
      },
      {
        id: "c",
        text: "Un flujo de software que copia campos de un formulario al inventario",
        correct: false,
      },
      {
        id: "d",
        text: "Un brazo que usa una cámara para localizar piezas y motores para recogerlas",
        correct: true,
      },
    ],
    explanation:
      "El sistema robótico percibe el entorno físico con sensores y ejecuta acciones en él mediante actuadores.",
  },
  {
    id: "q013",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "multi",
    prompt: "¿Qué tareas corresponden al procesamiento del lenguaje natural?",
    options: [
      {
        id: "a",
        text: "Determinar la intención de un mensaje de soporte",
        correct: true,
      },
      {
        id: "b",
        text: "Identificar nombres de lugares en una noticia",
        correct: true,
      },
      {
        id: "c",
        text: "Calcular la distancia a un objeto con un sensor ultrasónico",
        correct: false,
      },
      {
        id: "d",
        text: "Ajustar la fuerza de una pinza que manipula un objeto",
        correct: false,
      },
    ],
    explanation:
      "El PLN analiza o genera lenguaje humano. En los ejemplos, analiza el contenido de una noticia o la intención expresada en un mensaje.",
  },
  {
    id: "q014",
    section: "1. Origen y evolución de la inteligencia artificial",
    kind: "boolean",
    prompt:
      'La expresión "invierno de la IA" se aplica a etapas de caída del financiamiento y las expectativas en el campo.',
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "Se usa para varias etapas en las que las limitaciones prácticas de los sistemas contribuyeron a reducir las expectativas y el apoyo.",
  },
  {
    id: "q015",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "single",
    prompt:
      "¿Qué propuesta define un caso de uso evaluable para el área de logística?",
    options: [
      {
        id: "a",
        text: "Reunir archivos de ventas y logística en un repositorio compartido",
        correct: false,
      },
      {
        id: "b",
        text: "Publicar un tablero sin precisar quién lo consulta ni para qué",
        correct: false,
      },
      {
        id: "c",
        text: "Contratar capacidad de cómputo para ejecutar modelos más grandes",
        correct: false,
      },
      {
        id: "d",
        text: "Usar el historial de pedidos para estimar retrasos con un día de anticipación y medir si logística logra intervenir a tiempo",
        correct: true,
      },
    ],
    explanation:
      "Un caso de uso delimita la tarea, los usuarios, los datos y el resultado a mejorar. En este ejemplo, la predicción apoya una acción y permite medir su efecto.",
  },
  {
    id: "q016",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "single",
    prompt:
      "Un comercio estima las unidades que venderá la próxima semana a partir de ventas pasadas. ¿Qué aplica al producir la estimación?",
    options: [
      { id: "a", text: "Analítica predictiva", correct: true },
      { id: "b", text: "Automatización robótica de procesos", correct: false },
      { id: "c", text: "Recomendación personalizada", correct: false },
      { id: "d", text: "Inteligencia de negocios descriptiva", correct: false },
    ],
    explanation:
      "La analítica predictiva usa datos para estimar un resultado desconocido o futuro. Aquí la salida es una proyección de ventas.",
  },
  {
    id: "q017",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "single",
    prompt:
      "Un tablero integra registros de varias sucursales y muestra los tiempos de entrega del mes anterior. ¿Qué práctica ilustra principalmente?",
    options: [
      { id: "a", text: "Inteligencia de negocios", correct: true },
      { id: "b", text: "Fusión sensorial multimodal", correct: false },
      { id: "c", text: "Automatización robótica de procesos", correct: false },
      { id: "d", text: "Analítica predictiva", correct: false },
    ],
    explanation:
      "La inteligencia de negocios integra datos para consultar indicadores. Mostrar tiempos históricos apoya decisiones con información ya observada.",
  },
  {
    id: "q018",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "multi",
    prompt:
      "¿Qué señales puede usar un recomendador de libros para ordenar opciones para una persona?",
    options: [
      {
        id: "a",
        text: "Los patrones de lectura de personas con intereses similares",
        correct: true,
      },
      { id: "b", text: "Los temas de los libros candidatos", correct: true },
      {
        id: "c",
        text: "La dirección del servidor donde se ejecuta el modelo como criterio de afinidad",
        correct: false,
      },
      {
        id: "d",
        text: "El historial de lecturas de la persona",
        correct: true,
      },
    ],
    explanation:
      "Un recomendador puede comparar atributos de los artículos, el comportamiento de la persona y los patrones de otros lectores.",
  },
  {
    id: "q019",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "single",
    prompt:
      'Un asistente recibe "quiero cambiar mi cita" y pide la nueva fecha mediante un mensaje. ¿Qué tipo de sistema es?',
    options: [
      { id: "a", text: "Biblioteca de aprendizaje automático", correct: false },
      { id: "b", text: "Agente conversacional", correct: true },
      { id: "c", text: "Red de sensores conectados", correct: false },
      { id: "d", text: "Tablero de inteligencia de negocios", correct: false },
    ],
    explanation:
      "Un agente conversacional interpreta mensajes y formula respuestas para cumplir una tarea. Puede pedir los datos que faltan.",
  },
  {
    id: "q020",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "boolean",
    prompt:
      "Un flujo que copia automáticamente campos entre dos aplicaciones puede implementar RPA aunque utilice reglas fijas.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "La automatización robótica de procesos ejecuta operaciones repetitivas en software. Puede incorporar un modelo de IA para una etapa, como extraer datos de una factura.",
  },
  {
    id: "q021",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "single",
    prompt:
      "Máquinas de una planta miden vibraciones y envían lecturas por una red. ¿Qué concepto describe la infraestructura que conecta los dispositivos?",
    options: [
      { id: "a", text: "Analítica predictiva", correct: false },
      { id: "b", text: "Servicio de inferencia", correct: false },
      { id: "c", text: "Internet de las cosas", correct: true },
      { id: "d", text: "Aprendizaje distribuido", correct: false },
    ],
    explanation:
      "IoT conecta dispositivos que comparten mediciones o reciben órdenes. Las lecturas pueden servir como entrada para un modelo predictivo.",
  },
  {
    id: "q022",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "single",
    prompt:
      "¿Para qué usarías una biblioteca como scikit-learn en un proyecto de clasificación?",
    options: [
      {
        id: "a",
        text: "Para operar sensores físicos sin una interfaz de comunicación",
        correct: false,
      },
      {
        id: "b",
        text: "Para reutilizar estimadores y herramientas de preprocesamiento y validación",
        correct: true,
      },
      {
        id: "c",
        text: "Para definir por sí sola la acción que tomará el usuario ante una predicción",
        correct: false,
      },
      {
        id: "d",
        text: "Para poner un modelo en producción con solo importar el paquete",
        correct: false,
      },
    ],
    explanation:
      "Una biblioteca reúne implementaciones para preparar datos, ajustar modelos y evaluarlos. El despliegue y el uso de las predicciones se definen en el proyecto.",
  },
  {
    id: "q023",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "multi",
    prompt:
      "¿Qué diferencias entre cómputo acelerado y distribuido son correctas?",
    options: [
      {
        id: "a",
        text: "Repartir el entrenamiento entre varios equipos es un ejemplo de cómputo distribuido",
        correct: true,
      },
      {
        id: "b",
        text: "Varios equipos pueden repartir el trabajo y usar aceleradores en cada uno",
        correct: true,
      },
      {
        id: "c",
        text: "Usar una GPU para multiplicar matrices en un solo equipo es un ejemplo de aceleración",
        correct: true,
      },
      {
        id: "d",
        text: "Usar una sola GPU implica distribuir el trabajo entre varios equipos",
        correct: false,
      },
    ],
    explanation:
      "La aceleración delega operaciones en hardware especializado. La distribución divide el trabajo entre procesos o equipos. Las técnicas pueden combinarse.",
  },
  {
    id: "q024",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "single",
    prompt:
      "Una aplicación envía un pedido a una API y recibe la estimación de retraso de un modelo entrenado. ¿Qué ofrece la API en ese paso?",
    options: [
      { id: "a", text: "Entrenamiento del modelo", correct: false },
      { id: "b", text: "Recolección de datos por sensores", correct: false },
      { id: "c", text: "Evaluación de equidad", correct: false },
      { id: "d", text: "Servicio de inferencia", correct: true },
    ],
    explanation:
      "El servicio de inferencia ejecuta un modelo ya ajustado sobre datos nuevos. La aplicación decide qué hacer con el resultado.",
  },
  {
    id: "q025",
    section: "2. Soluciones empresariales de inteligencia artificial",
    kind: "boolean",
    prompt:
      "En DeepQA, IBM Watson elegía la respuesta de Jeopardy! al encontrar la primera coincidencia textual, sin comparar candidatas.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "DeepQA generaba respuestas candidatas y las ordenaba al combinar evidencias y estimar su confianza.",
  },
  {
    id: "q026",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "single",
    prompt:
      "Una tabla omite nombres, pero permite identificar a una persona al combinarla con otros registros. ¿Cómo se clasifica la información que le concierne?",
    options: [
      {
        id: "a",
        text: "Dato sintético independiente de registros reales",
        correct: false,
      },
      {
        id: "b",
        text: "Información anonimizada de manera efectiva",
        correct: false,
      },
      { id: "c", text: "Dato personal", correct: true },
      {
        id: "d",
        text: "Estadística agregada incapaz de identificar a alguien",
        correct: false,
      },
    ],
    explanation:
      "La posibilidad de identificar a una persona mediante información complementaria basta para que los datos que le conciernen sigan siendo personales.",
  },
  {
    id: "q027",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "single",
    prompt:
      "¿Qué documento informa a una persona sobre el tratamiento de sus datos personales?",
    options: [
      { id: "a", text: "Aviso de privacidad", correct: true },
      { id: "b", text: "Registro de incidentes", correct: false },
      { id: "c", text: "Ficha técnica del modelo", correct: false },
      { id: "d", text: "Bitácora de inferencias", correct: false },
    ],
    explanation:
      "El aviso comunica a las personas cómo se tratarán sus datos. La documentación técnica y los registros operativos cumplen otras funciones.",
  },
  {
    id: "q028",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "multi",
    prompt:
      "¿Qué características describe el supuesto general del artículo 22 del RGPD para las decisiones individuales automatizadas?",
    options: [
      {
        id: "a",
        text: "La decisión debe usar una red neuronal para entrar en ese supuesto",
        correct: false,
      },
      {
        id: "b",
        text: "La disposición se activa con cualquier cálculo automatizado",
        correct: false,
      },
      {
        id: "c",
        text: "La decisión se basa únicamente en un tratamiento automatizado",
        correct: true,
      },
      {
        id: "d",
        text: "Produce efectos jurídicos o afecta a la persona de modo similar y significativo",
        correct: true,
      },
    ],
    explanation:
      "El artículo 22 combina el carácter exclusivamente automatizado con la importancia del efecto. También establece excepciones y garantías en los supuestos aplicables.",
  },
  {
    id: "q029",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "boolean",
    prompt:
      "Eliminar los nombres de un conjunto de datos basta para asegurar que sus registros son anónimos.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "Las combinaciones de atributos, como fechas y ubicaciones, pueden permitir identificar a alguien al compararlas con información auxiliar.",
  },
  {
    id: "q030",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "single",
    prompt:
      "Un hospital reemplaza los nombres por códigos y conserva por separado la tabla que permite restablecer la correspondencia. ¿Qué procedimiento aplica?",
    options: [
      { id: "a", text: "Generación de datos sintéticos", correct: false },
      { id: "b", text: "Anonimización efectiva", correct: false },
      { id: "c", text: "Seudonimización", correct: true },
      { id: "d", text: "Agregación estadística", correct: false },
    ],
    explanation:
      "En la seudonimización el vínculo puede recuperarse con información adicional, como la tabla de equivalencias.",
  },
  {
    id: "q031",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "single",
    prompt:
      "Un clasificador comete muchos más errores con un grupo poco representado, aunque su promedio general es alto. ¿Qué conviene investigar en los datos y las etiquetas?",
    options: [
      { id: "a", text: "Sesgo algorítmico", correct: true },
      { id: "b", text: "Tolerancia a fallos de hardware", correct: false },
      { id: "c", text: "Problemas de latencia en el servicio", correct: false },
      { id: "d", text: "Cambios de capacidad en el servidor", correct: false },
    ],
    explanation:
      "Un patrón sistemático de errores puede originarse en la representación de los grupos o en la forma de producir etiquetas. La métrica global puede ocultarlo.",
  },
  {
    id: "q032",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "single",
    prompt:
      "¿Qué análisis aporta evidencia directa para evaluar la equidad de un sistema de asignación de becas?",
    options: [
      {
        id: "a",
        text: "Comparar el tamaño del modelo con el de la base de datos",
        correct: false,
      },
      {
        id: "b",
        text: "Comparar los falsos rechazos entre grupos y estudiar sus consecuencias",
        correct: true,
      },
      {
        id: "c",
        text: "Evaluar si el servicio funciona al caerse un nodo",
        correct: false,
      },
      {
        id: "d",
        text: "Medir cuánto tarda el modelo en calcular el resultado",
        correct: false,
      },
    ],
    explanation:
      "El análisis de equidad depende de la decisión y del daño relevante. En la asignación de becas, un falso rechazo puede privar a una persona elegible del beneficio.",
  },
  {
    id: "q033",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "multi",
    prompt:
      "¿Qué medidas implementan supervisión humana o rendición de cuentas?",
    options: [
      {
        id: "a",
        text: "Conservar evidencia que permita reconstruir una decisión",
        correct: true,
      },
      {
        id: "b",
        text: "Mostrar la puntuación del modelo sin definir quién interviene ni conservar evidencia",
        correct: false,
      },
      {
        id: "c",
        text: "Permitir que una persona responsable revise y corrija un resultado",
        correct: true,
      },
      {
        id: "d",
        text: "Asignar responsables para investigar incidentes",
        correct: true,
      },
    ],
    explanation:
      "La supervisión define cuándo y cómo interviene una persona. Para rendir cuentas hacen falta responsabilidades asignadas y evidencia de lo ocurrido.",
  },
  {
    id: "q034",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "boolean",
    prompt:
      "Un ejemplo adversario se distingue de una perturbación accidental por la intención de inducir un error en el modelo.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "La alteración deliberada de la entrada busca provocar una respuesta errónea. Una degradación accidental también puede afectar el desempeño, por una causa distinta.",
  },
  {
    id: "q035",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos entre propiedad y comportamiento son correctos?",
    options: [
      {
        id: "a",
        text: "Tolerancia a fallos → clasificar bien una imagen ligeramente más oscura",
        correct: false,
      },
      {
        id: "b",
        text: "Tolerancia a fallos → pasar a un modo seguro si falla la cámara principal",
        correct: true,
      },
      {
        id: "c",
        text: "Robustez → seguir reconociendo piezas con cambios moderados de iluminación",
        correct: true,
      },
      {
        id: "d",
        text: "Robustez → recuperarse de la desconexión del servidor de respaldo",
        correct: false,
      },
    ],
    explanation:
      "La robustez se refiere al desempeño con entradas perturbadas. La tolerancia a fallos describe cómo sigue funcionando el sistema ante la pérdida de un componente.",
  },
  {
    id: "q036",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "single",
    prompt:
      "¿Qué modelo facilita más la inspección directa de la ruta de cálculo de una decisión individual?",
    options: [
      {
        id: "a",
        text: "Una red grande cuyo servicio solo devuelve una puntuación",
        correct: false,
      },
      {
        id: "b",
        text: "Un clasificador externo accesible solo mediante una etiqueta de salida",
        correct: false,
      },
      {
        id: "c",
        text: "Un conjunto de modelos que únicamente devuelve el promedio de sus salidas",
        correct: false,
      },
      {
        id: "d",
        text: "Un árbol pequeño con reglas y ramas visibles",
        correct: true,
      },
    ],
    explanation:
      "Cada rama del árbol expone una condición que puede seguirse hasta el resultado. En los otros casos, la información disponible dificulta reconstruir esa ruta.",
  },
  {
    id: "q037",
    section: "3. Implicaciones éticas, privacidad y confiabilidad",
    kind: "multi",
    prompt:
      "¿Qué ejemplos distinguen explicabilidad e interpretabilidad en una estimación de riesgo?",
    options: [
      {
        id: "a",
        text: "Interpretabilidad → comprobar si quedan servidores de respaldo",
        correct: false,
      },
      {
        id: "b",
        text: "Explicabilidad → comunicar qué factores contribuyeron al resultado",
        correct: true,
      },
      {
        id: "c",
        text: "Explicabilidad → medir el tiempo que tarda en responder la API",
        correct: false,
      },
      {
        id: "d",
        text: "Interpretabilidad → precisar qué significa la estimación para la decisión en ese contexto",
        correct: true,
      },
    ],
    explanation:
      "Una explicación describe cómo se produjo la salida. Interpretarla requiere entender qué representa para el problema y la decisión.",
  },
  {
    id: "q038",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "single",
    prompt:
      "¿Qué conjunto de procesos ilustra la cognición al localizar un objeto que necesitas?",
    options: [
      {
        id: "a",
        text: "Transmitir una señal sin usar su contenido",
        correct: false,
      },
      {
        id: "b",
        text: "Percibirlo, reconocerlo y recordar para qué sirve",
        correct: true,
      },
      {
        id: "c",
        text: "Repetir una trayectoria fijada sin considerar el entorno",
        correct: false,
      },
      {
        id: "d",
        text: "Captar luz y enviarla a un cable sin procesarla",
        correct: false,
      },
    ],
    explanation:
      "La cognición comprende procesos de adquisición, organización y uso de la información que pueden cooperar en una tarea.",
  },
  {
    id: "q039",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "single",
    prompt:
      "¿Qué diseño ilustra mejor la integración de capacidades en un sistema de computación cognitiva?",
    options: [
      {
        id: "a",
        text: "Un robot que interpreta una solicitud, recupera la ubicación de un objeto y cambia su ruta si detecta un obstáculo",
        correct: true,
      },
      {
        id: "b",
        text: "Un formulario que copia la solicitud a una tabla",
        correct: false,
      },
      {
        id: "c",
        text: "Una cámara que almacena imágenes para consulta posterior",
        correct: false,
      },
      {
        id: "d",
        text: "Un motor que gira siempre a la misma velocidad",
        correct: false,
      },
    ],
    explanation:
      "La computación cognitiva estudia cómo combinar capacidades como percepción, memoria y adaptación para actuar frente a cambios del entorno.",
  },
  {
    id: "q040",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos entre tipo de sistema cognitivo y ejemplo son correctos?",
    options: [
      {
        id: "a",
        text: "Híbrido → una persona y un robot que observan, deciden y actúan juntos en una tarea",
        correct: true,
      },
      {
        id: "b",
        text: "Híbrido → un robot autónomo por el solo hecho de procesar sonido e imágenes",
        correct: false,
      },
      {
        id: "c",
        text: "Artificial → un robot que identifica objetos y planifica cómo recogerlos",
        correct: true,
      },
      {
        id: "d",
        text: "Natural → una persona que identifica y recoge objetos",
        correct: true,
      },
    ],
    explanation:
      "Los organismos son sistemas naturales. Los artificiales implementan capacidades con software o dispositivos. En el híbrido cooperan personas y componentes artificiales.",
  },
  {
    id: "q041",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "boolean",
    prompt:
      "Un diseño bioinspirado puede dar prioridad a ciertos estímulos usando mecanismos distintos de los biológicos.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "La bioinspiración traslada un principio funcional. Una cámara y su software pueden priorizar regiones sin reproducir los circuitos de un organismo.",
  },
  {
    id: "q042",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "single",
    prompt:
      "Para un agente que opera en una plataforma de atención, ¿qué pertenece al entorno con el que interactúa?",
    options: [
      {
        id: "a",
        text: "Los mensajes entrantes y los servicios externos que puede consultar",
        correct: true,
      },
      { id: "b", text: "La memoria interna de sus diálogos", correct: false },
      {
        id: "c",
        text: "Los parámetros del modelo que usa para interpretar intenciones",
        correct: false,
      },
      {
        id: "d",
        text: "El mecanismo interno que selecciona respuestas",
        correct: false,
      },
    ],
    explanation:
      "El entorno incluye entidades externas, físicas o virtuales, cuyos cambios afectan la tarea del agente.",
  },
  {
    id: "q043",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "single",
    prompt: "¿Cuál función corresponde al sistema sensorial de un robot móvil?",
    options: [
      {
        id: "a",
        text: "Obtener y codificar medidas de la distancia a objetos cercanos",
        correct: true,
      },
      {
        id: "b",
        text: "Ajustar la velocidad de las ruedas según el plan",
        correct: false,
      },
      {
        id: "c",
        text: "Guardar la estrategia que funcionó en el recorrido anterior",
        correct: false,
      },
      {
        id: "d",
        text: "Seleccionar una ruta hacia el destino",
        correct: false,
      },
    ],
    explanation:
      "El sistema sensorial adquiere y codifica señales. La selección de rutas y el ajuste de las ruedas ocurren en etapas posteriores.",
  },
  {
    id: "q044",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "single",
    prompt:
      "Un robot usa un mapa y su posición estimada para elegir entre dos rutas. ¿Qué subsistema evalúa las alternativas?",
    options: [
      { id: "a", text: "Entorno físico", correct: false },
      { id: "b", text: "Sistema sensorial", correct: false },
      {
        id: "c",
        text: "Sistema de procesamiento de la información",
        correct: true,
      },
      { id: "d", text: "Sistema motor", correct: false },
    ],
    explanation:
      "El procesamiento combina información nueva y almacenada para evaluar la situación y escoger una respuesta.",
  },
  {
    id: "q045",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "multi",
    prompt:
      "¿Qué acciones corresponden a la salida de un sistema de percepción y acción?",
    options: [
      {
        id: "a",
        text: "Enviar una instrucción que cambie el estado de un servicio externo",
        correct: true,
      },
      {
        id: "b",
        text: "Mover una rueda para ejecutar un giro decidido",
        correct: true,
      },
      { id: "c", text: "Medir la distancia a una pared", correct: false },
      { id: "d", text: "Comparar rutas en un mapa interno", correct: false },
    ],
    explanation:
      "La etapa motora ejecuta acciones físicas mediante actuadores. Un agente de software puede actuar sobre su entorno al modificar otro servicio.",
  },
  {
    id: "q046",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "single",
    prompt:
      "Una cámara detecta el tipo de pieza y un sensor indica su distancia. El sistema combina ambas señales para localizarla. ¿Qué proceso realiza?",
    options: [
      { id: "a", text: "Programación motora", correct: false },
      { id: "b", text: "Recuperación episódica", correct: false },
      { id: "c", text: "Fusión sensorial multimodal", correct: true },
      { id: "d", text: "Aprendizaje no supervisado", correct: false },
    ],
    explanation:
      "La fusión combina fuentes que aportan información complementaria. En el ejemplo, aprovecha rasgos visuales y medidas de distancia.",
  },
  {
    id: "q047",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "single",
    prompt:
      "Un robot carga una caja y vuelve a medir su posición para ajustar el siguiente movimiento. ¿Qué proceso ilustra?",
    options: [
      {
        id: "a",
        text: "Extracción aislada de características",
        correct: false,
      },
      { id: "b", text: "Grabación de una trayectoria fija", correct: false },
      { id: "c", text: "Bucle de percepción y acción", correct: true },
      {
        id: "d",
        text: "Generalización de un modelo entrenado",
        correct: false,
      },
    ],
    explanation:
      "El robot observa, actúa y vuelve a observar. La nueva medición le permite comprobar el resultado y corregir la acción.",
  },
  {
    id: "q048",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "multi",
    prompt:
      "¿Qué distinción entre adaptación y aprendizaje se observa al cambiar de ruta?",
    options: [
      {
        id: "a",
        text: "Esquivar una caja que apareció en el pasillo es un ajuste a la situación actual",
        correct: true,
      },
      {
        id: "b",
        text: "Todo ajuste ante un obstáculo implica que se entrenó un modelo nuevo",
        correct: false,
      },
      {
        id: "c",
        text: "El aprendizaje solo interviene si el entorno permanece constante",
        correct: false,
      },
      {
        id: "d",
        text: "Recordar qué pasillos suelen bloquearse permite mejorar decisiones posteriores",
        correct: true,
      },
    ],
    explanation:
      "La adaptación modifica la conducta frente a las condiciones presentes. El aprendizaje aprovecha regularidades de la experiencia para decisiones futuras.",
  },
  {
    id: "q049",
    section: "4. Computación cognitiva y sistemas cognitivos",
    kind: "single",
    prompt:
      "Una API transcribe audio y la aplicación usa el texto para seleccionar acciones. ¿Qué papel cumple la API?",
    options: [
      { id: "a", text: "Servicio cognitivo especializado", correct: true },
      { id: "b", text: "Motor físico de ejecución", correct: false },
      { id: "c", text: "Arquitectura cognitiva completa", correct: false },
      { id: "d", text: "Almacén de objetivos de largo plazo", correct: false },
    ],
    explanation:
      "La transcripción aporta una capacidad concreta que la aplicación puede combinar con memoria, reglas u otros servicios.",
  },
  {
    id: "q050",
    section: "5. Ciencia cognitiva y arquitecturas",
    kind: "single",
    prompt:
      "Un equipo estudia el reconocimiento de palabras con experimentos de conducta, mediciones neuronales y simulaciones. ¿Qué disciplina reúne preguntas como esta?",
    options: [
      { id: "a", text: "Ciencia cognitiva", correct: true },
      {
        id: "b",
        text: "Psicología experimental como único enfoque",
        correct: false,
      },
      { id: "c", text: "Ingeniería de actuadores", correct: false },
      {
        id: "d",
        text: "Lingüística formal como único enfoque",
        correct: false,
      },
    ],
    explanation:
      "La ciencia cognitiva aborda la cognición desde varias disciplinas. Un mismo problema puede estudiarse en la conducta, en el sistema nervioso y en un modelo computacional.",
  },
  {
    id: "q051",
    section: "5. Ciencia cognitiva y arquitecturas",
    kind: "single",
    prompt: "¿Qué pregunta corresponde a la neurociencia cognitiva?",
    options: [
      {
        id: "a",
        text: "¿Cuántos nodos hacen falta para servir un modelo a mil usuarios?",
        correct: false,
      },
      {
        id: "b",
        text: "¿Cómo varía una recompensa en una simulación sin mediciones de organismos?",
        correct: false,
      },
      {
        id: "c",
        text: "¿Cómo cambia la actividad cerebral cuando una persona dirige la atención a un estímulo?",
        correct: true,
      },
      {
        id: "d",
        text: "¿Qué sintaxis acepta el archivo de configuración de un simulador?",
        correct: false,
      },
    ],
    explanation:
      "La neurociencia cognitiva investiga cómo la actividad del sistema nervioso se relaciona con procesos como la atención, la memoria y el lenguaje.",
  },
  {
    id: "q052",
    section: "5. Ciencia cognitiva y arquitecturas",
    kind: "boolean",
    prompt:
      "Observar que una región cerebral se activa durante una tarea demuestra por sí solo que esa región causa el desempeño observado.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "La actividad asociada con la tarea es un posible correlato neurobiológico. Establecer causalidad requiere evidencia adicional.",
  },
  {
    id: "q053",
    section: "5. Ciencia cognitiva y arquitecturas",
    kind: "multi",
    prompt:
      "¿Qué observaciones pertenecen a niveles distintos al estudiar cómo se recuerda una instrucción?",
    options: [
      {
        id: "a",
        text: "Los errores y tiempos de respuesta de las personas",
        correct: true,
      },
      {
        id: "b",
        text: "Una segunda medición de los mismos tiempos con el mismo procedimiento",
        correct: false,
      },
      {
        id: "c",
        text: "Los circuitos neuronales que pueden participar",
        correct: true,
      },
      {
        id: "d",
        text: "Las operaciones de recuperación que realiza un modelo",
        correct: true,
      },
    ],
    explanation:
      "El desempeño, las operaciones del modelo y los circuitos son perspectivas distintas sobre la tarea. Repetir una medición aporta evidencia en el mismo nivel.",
  },
  {
    id: "q054",
    section: "5. Ciencia cognitiva y arquitecturas",
    kind: "single",
    prompt:
      "Para evaluar un modelo computacional de búsqueda visual, ¿qué comparación pone a prueba su hipótesis sobre el proceso cognitivo?",
    options: [
      {
        id: "a",
        text: "Comparar los nombres de sus módulos con los de otra arquitectura",
        correct: false,
      },
      {
        id: "b",
        text: "Medir el tiempo de instalación del simulador en dos equipos",
        correct: false,
      },
      {
        id: "c",
        text: "Comparar los tiempos y tipos de errores que predice con los de personas en la misma tarea",
        correct: true,
      },
      {
        id: "d",
        text: "Comparar el tamaño de su código con el del programa del experimento",
        correct: false,
      },
    ],
    explanation:
      "El modelo explicita operaciones que producen resultados observables. El patrón de tiempos y errores indica si esos resultados coinciden con los de las personas.",
  },
  {
    id: "q055",
    section: "5. Ciencia cognitiva y arquitecturas",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos ilustran funciones cognitivas, afectivas y ejecutivas?",
    options: [
      {
        id: "a",
        text: "Afectiva → evaluar si un acontecimiento es relevante o amenazante",
        correct: true,
      },
      {
        id: "b",
        text: "Ejecutiva → mantener una meta mientras se ajusta la estrategia",
        correct: true,
      },
      {
        id: "c",
        text: "Ejecutiva → convertir la luz en una señal sensorial",
        correct: false,
      },
      { id: "d", text: "Cognitiva → reconocer un objeto", correct: true },
    ],
    explanation:
      "Reconocer es una función cognitiva, valorar lo ocurrido es afectivo y coordinar la conducta hacia una meta es ejecutivo.",
  },
  {
    id: "q056",
    section: "5. Ciencia cognitiva y arquitecturas",
    kind: "boolean",
    prompt:
      "Una neurona artificial que combina entradas ponderadas y aplica una activación es una abstracción computacional de ciertos aspectos de una neurona biológica.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "La neurona artificial es una unidad de cálculo. La biológica es una célula que integra y transmite señales con mecanismos fisiológicos.",
  },
  {
    id: "q057",
    section: "5. Ciencia cognitiva y arquitecturas",
    kind: "single",
    prompt:
      "Dos modelos resuelven tareas distintas y comparten mecanismos de recuperación y selección de acciones. ¿Qué pueden tener en común?",
    options: [
      {
        id: "a",
        text: "Las mismas reglas particulares de cada problema",
        correct: false,
      },
      {
        id: "b",
        text: "Los mismos resultados para todas las entradas",
        correct: false,
      },
      {
        id: "c",
        text: "El conocimiento específico de cada tarea",
        correct: false,
      },
      { id: "d", text: "Una arquitectura cognitiva", correct: true },
    ],
    explanation:
      "La arquitectura aporta componentes y mecanismos reutilizables. Cada modelo puede añadir conocimiento y reglas propios de su tarea.",
  },
  {
    id: "q058",
    section: "5. Ciencia cognitiva y arquitecturas",
    kind: "single",
    prompt: "¿Qué descripción identifica a ACT-R?",
    options: [
      {
        id: "a",
        text: "Un modelo de memoria formado por el bucle fonológico y la agenda visuoespacial",
        correct: false,
      },
      {
        id: "b",
        text: "Módulos que intercambian información por medio de buffers consultados por reglas de producción",
        correct: true,
      },
      {
        id: "c",
        text: "Una arquitectura descrita por estados y operadores que abre subproblemas ante un bloqueo de decisión",
        correct: false,
      },
      {
        id: "d",
        text: "Una jerarquía de bosquejos visuales y modelos de forma",
        correct: false,
      },
    ],
    explanation:
      "En ACT-R, los buffers ponen información de los módulos al alcance de las reglas de producción. Los estados, operadores y subproblemas distinguen la descripción de Soar en el glosario.",
  },
  {
    id: "q059",
    section: "5. Ciencia cognitiva y arquitecturas",
    kind: "single",
    prompt:
      "¿Qué puede hacer Soar cuando la información disponible es insuficiente para seleccionar un operador?",
    options: [
      {
        id: "a",
        text: "Abrir un subproblema y aprender a partir de su resolución",
        correct: true,
      },
      {
        id: "b",
        text: "Aumentar la capacidad de la memoria sensorial mediante repetición verbal",
        correct: false,
      },
      {
        id: "c",
        text: "Estimar una recompensa y terminar la tarea sin elegir un operador",
        correct: false,
      },
      {
        id: "d",
        text: "Convertir el estado en un bosquejo visual 2.5D",
        correct: false,
      },
    ],
    explanation:
      "Soar usa operadores para modificar estados. Un bloqueo en la elección puede generar un subproblema cuya resolución aporta conocimiento para decisiones futuras.",
  },
  {
    id: "q060",
    section: "6. Percepción, visión y sistema motor",
    kind: "single",
    prompt:
      "¿Qué distingue la sensación de la percepción al mirar una taza desde otro ángulo?",
    options: [
      {
        id: "a",
        text: "La sensación comienza al detectar la luz y la percepción organiza esa información para reconocer la taza",
        correct: true,
      },
      {
        id: "b",
        text: "La percepción convierte la luz en una señal y la sensación reconoce el objeto",
        correct: false,
      },
      {
        id: "c",
        text: "La sensación confirma cómo se usa la taza y la percepción solo registra luz",
        correct: false,
      },
      {
        id: "d",
        text: "La percepción y la sensación describen exclusivamente el recuerdo de la taza",
        correct: false,
      },
    ],
    explanation:
      "La sensación comienza con la detección del estímulo. La percepción organiza las señales y les atribuye un significado.",
  },
  {
    id: "q061",
    section: "6. Percepción, visión y sistema motor",
    kind: "single",
    prompt:
      "Los fotorreceptores convierten la energía de la luz en cambios eléctricos. ¿Cómo se llama ese proceso?",
    options: [
      { id: "a", text: "Transducción sensorial", correct: true },
      { id: "b", text: "Reconocimiento visual", correct: false },
      { id: "c", text: "Retroalimentación motora", correct: false },
      { id: "d", text: "Atención perceptiva", correct: false },
    ],
    explanation:
      "La transducción convierte la energía física de un estímulo en una señal que el sistema puede procesar.",
  },
  {
    id: "q062",
    section: "6. Percepción, visión y sistema motor",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos entre tipos de información sensorial y ejemplos son correctos?",
    options: [
      {
        id: "a",
        text: "Interocepción → percibir la distensión del estómago",
        correct: true,
      },
      {
        id: "b",
        text: "Propiocepción → saber cómo está doblado el brazo sin mirarlo",
        correct: true,
      },
      {
        id: "c",
        text: "Propiocepción → detectar el color de una pared",
        correct: false,
      },
      {
        id: "d",
        text: "Exterocepción → escuchar un ruido en el pasillo",
        correct: true,
      },
    ],
    explanation:
      "La exterocepción informa del exterior, la interocepción del estado interno y la propiocepción de la posición y el movimiento del cuerpo.",
  },
  {
    id: "q063",
    section: "6. Percepción, visión y sistema motor",
    kind: "single",
    prompt:
      "Buscas un libro de lomo rojo y concentras la mirada en zonas de ese color. ¿Qué proceso explica esa prioridad?",
    options: [
      { id: "a", text: "Programación motora de la mano", correct: false },
      { id: "b", text: "Atención perceptiva", correct: true },
      { id: "c", text: "Consolidación del recuerdo", correct: false },
      { id: "d", text: "Transducción sensorial", correct: false },
    ],
    explanation:
      "La atención perceptiva prioriza señales relevantes para la búsqueda. En el ejemplo, el color esperado orienta la exploración visual.",
  },
  {
    id: "q064",
    section: "6. Percepción, visión y sistema motor",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos corresponden a los niveles de análisis de Marr?",
    options: [
      {
        id: "a",
        text: "Computacional → qué circuitos materializan la operación",
        correct: false,
      },
      {
        id: "b",
        text: "Implementación → cómo se realiza físicamente el proceso",
        correct: true,
      },
      {
        id: "c",
        text: "Computacional → qué problema se resuelve y por qué",
        correct: true,
      },
      {
        id: "d",
        text: "Algorítmico → qué representaciones y transformaciones se usan",
        correct: true,
      },
    ],
    explanation:
      "Los niveles distinguen el propósito del cálculo, el procedimiento que lo realiza y su realización física.",
  },
  {
    id: "q065",
    section: "6. Percepción, visión y sistema motor",
    kind: "single",
    prompt:
      "¿Qué representación de Marr describe la profundidad y orientación de las superficies visibles desde el punto de vista del observador?",
    options: [
      { id: "a", text: "Nivel algorítmico de análisis", correct: false },
      { id: "b", text: "Modelo 3D centrado en el objeto", correct: false },
      { id: "c", text: "Bosquejo 2.5D", correct: true },
      { id: "d", text: "Bosquejo inicial", correct: false },
    ],
    explanation:
      "El bosquejo 2.5D organiza las superficies visibles en relación con el observador. El bosquejo inicial describe estructura local de la imagen y el modelo 3D usa una referencia centrada en el objeto.",
  },
  {
    id: "q066",
    section: "6. Percepción, visión y sistema motor",
    kind: "boolean",
    prompt:
      "Detectar un borde es suficiente para reconocer la identidad de cualquier objeto visible.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "Los bordes aportan indicios de forma. El reconocimiento requiere interpretar la información visual para identificar de qué objeto se trata.",
  },
  {
    id: "q067",
    section: "6. Percepción, visión y sistema motor",
    kind: "single",
    prompt: "¿Cuál ejemplo muestra una jerarquía en el control motor?",
    options: [
      {
        id: "a",
        text: "Un sensor registra la temperatura sin que el controlador utilice la lectura",
        correct: false,
      },
      {
        id: "b",
        text: "Un actuador realiza la misma rotación en cada ciclo de calibración",
        correct: false,
      },
      {
        id: "c",
        text: "Una cámara envía imágenes a un archivo en orden cronológico",
        correct: false,
      },
      {
        id: "d",
        text: "La meta de tomar un libro se traduce en alcanzar el estante, orientar la mano y regular el agarre",
        correct: true,
      },
    ],
    explanation:
      "La organización jerárquica vincula metas generales con operaciones y ajustes específicos del movimiento.",
  },
  {
    id: "q068",
    section: "6. Percepción, visión y sistema motor",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos entre las etapas motoras y sus funciones son correctos?",
    options: [
      {
        id: "a",
        text: "Selección → elegir qué acción realizar",
        correct: true,
      },
      {
        id: "b",
        text: "Programación motora → preparar la dirección y secuencia de los movimientos",
        correct: true,
      },
      {
        id: "c",
        text: "Planificación → detectar si el objeto se está deslizando durante el agarre",
        correct: false,
      },
      {
        id: "d",
        text: "Planificación → ordenar los pasos para cumplir la acción",
        correct: true,
      },
    ],
    explanation:
      "Primero se elige la acción, luego se organiza en pasos y se preparan parámetros para ejecutarla. Detectar el deslizamiento aporta retroalimentación.",
  },
  {
    id: "q069",
    section: "6. Percepción, visión y sistema motor",
    kind: "single",
    prompt:
      "Al sentir que un libro se desliza, aumentas la fuerza del agarre durante el movimiento. ¿Qué permite ese ajuste?",
    options: [
      {
        id: "a",
        text: "Consolidación de una habilidad a largo plazo",
        correct: false,
      },
      { id: "b", text: "Retroalimentación sensoriomotora", correct: true },
      { id: "c", text: "Formación de un modelo 3D del libro", correct: false },
      { id: "d", text: "Selección inicial de la meta", correct: false },
    ],
    explanation:
      "La señal táctil informa al control motor sobre el efecto de la acción y permite modificar la fuerza mientras la ejecutas.",
  },
  {
    id: "q070",
    section: "7. Emoción y motivación",
    kind: "single",
    prompt:
      "¿Qué descripción recoge varios componentes de una emoción ante una amenaza?",
    options: [
      {
        id: "a",
        text: "Moverse a un lado siguiendo una orden, sin evaluar lo ocurrido",
        correct: false,
      },
      {
        id: "b",
        text: "Calcular de forma explícita qué tan probable es obtener una recompensa futura",
        correct: false,
      },
      {
        id: "c",
        text: "Mantener una instrucción verbal activa durante una tarea",
        correct: false,
      },
      {
        id: "d",
        text: "Evaluar el peligro, experimentar cambios corporales y sentir una tendencia a alejarse",
        correct: true,
      },
    ],
    explanation:
      "Una emoción integra elementos como la evaluación de un evento, los cambios del cuerpo y la predisposición a actuar.",
  },
  {
    id: "q071",
    section: "7. Emoción y motivación",
    kind: "boolean",
    prompt:
      "Si un sistema detecta un cambio en la voz, ya conoce con certeza el sentimiento de la persona.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "El sentimiento es una experiencia subjetiva. La voz aporta indicios que se interpretan según la persona y la situación.",
  },
  {
    id: "q072",
    section: "7. Emoción y motivación",
    kind: "single",
    prompt:
      "Una persona describe su miedo como desagradable y muy fuerte. ¿Qué expresan esos dos rasgos, respectivamente?",
    options: [
      { id: "a", text: "Expectativa y motivación", correct: false },
      { id: "b", text: "Intensidad y valencia", correct: false },
      { id: "c", text: "Sentimiento y tendencia a la acción", correct: false },
      { id: "d", text: "Valencia e intensidad", correct: true },
    ],
    explanation:
      "La valencia indica si la experiencia resulta agradable o desagradable. La intensidad indica el grado con que se manifiesta.",
  },
  {
    id: "q073",
    section: "7. Emoción y motivación",
    kind: "boolean",
    prompt:
      "Todas las teorías usan la misma lista y el mismo criterio para distinguir las emociones básicas de las secundarias.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "Las listas dependen del modelo. Algunas teorías distinguen emociones como el miedo de la culpa o la vergüenza por el tipo de evaluación implicada.",
  },
  {
    id: "q074",
    section: "7. Emoción y motivación",
    kind: "single",
    prompt:
      "Ante un error de la aplicación, una persona decide pedir ayuda. ¿Qué parte del ejemplo describe una tendencia a la acción?",
    options: [
      {
        id: "a",
        text: "Registrar el sonido de una notificación",
        correct: false,
      },
      {
        id: "b",
        text: "Recordar la contraseña de la aplicación",
        correct: false,
      },
      {
        id: "c",
        text: "Considerar que el error impide alcanzar la meta",
        correct: false,
      },
      { id: "d", text: "La predisposición a solicitar ayuda", correct: true },
    ],
    explanation:
      "Evaluar el suceso implica atribuirle significado para la tarea. La tendencia es la predisposición que esa evaluación genera, como buscar ayuda.",
  },
  {
    id: "q075",
    section: "7. Emoción y motivación",
    kind: "single",
    prompt:
      "Un tutor digital ajusta el ritmo cuando el estudiante reporta frustración. ¿Qué área estudia ese tipo de respuesta?",
    options: [
      { id: "a", text: "Computación afectiva", correct: true },
      { id: "b", text: "Reconocimiento visual de objetos", correct: false },
      { id: "c", text: "Consolidación de la memoria", correct: false },
      { id: "d", text: "Analítica de negocios descriptiva", correct: false },
    ],
    explanation:
      "La computación afectiva estudia sistemas que reconocen, representan o responden a señales relacionadas con el estado afectivo.",
  },
  {
    id: "q076",
    section: "7. Emoción y motivación",
    kind: "single",
    prompt: "¿Qué mecanismo pertenece a un modelo computacional de la emoción?",
    options: [
      {
        id: "a",
        text: "Actualizar una variable de frustración simulada ante bloqueos y usarla para cambiar la respuesta",
        correct: true,
      },
      {
        id: "b",
        text: "Ajustar la velocidad del motor solo en función de la pendiente",
        correct: false,
      },
      {
        id: "c",
        text: "Clasificar mensajes por tema sin representar estados afectivos",
        correct: false,
      },
      {
        id: "d",
        text: "Guardar el audio de interacción para reproducirlo después",
        correct: false,
      },
    ],
    explanation:
      "Un modelo de la emoción representa componentes funcionales de un estado afectivo y especifica su efecto sobre las respuestas.",
  },
  {
    id: "q077",
    section: "7. Emoción y motivación",
    kind: "single",
    prompt:
      "¿Qué concepto ayuda a explicar que una persona inicie una tarea, le dedique esfuerzo y persista hasta lograr un objetivo?",
    options: [
      { id: "a", text: "Almacenamiento episódico", correct: false },
      { id: "b", text: "Transducción sensorial", correct: false },
      { id: "c", text: "Valencia emocional por sí sola", correct: false },
      { id: "d", text: "Motivación", correct: true },
    ],
    explanation:
      "La motivación activa, orienta y sostiene la conducta. Ayuda a explicar el esfuerzo y los cambios de estrategia en función de una meta.",
  },
  {
    id: "q078",
    section: "7. Emoción y motivación",
    kind: "multi",
    prompt: "¿Qué emparejamientos entre motivo y ejemplo son correctos?",
    options: [
      {
        id: "a",
        text: "Intrínseco → practicar únicamente para obtener una bonificación",
        correct: false,
      },
      {
        id: "b",
        text: "Extrínseco → resolver un acertijo para conseguir una calificación",
        correct: true,
      },
      {
        id: "c",
        text: "Intrínseco → resolver un acertijo por el gusto de resolverlo",
        correct: true,
      },
      {
        id: "d",
        text: "Extrínseco → leer por el disfrute de la lectura",
        correct: false,
      },
    ],
    explanation:
      "En la motivación intrínseca el valor está en la actividad. En la extrínseca, realizarla contribuye a un resultado separable. Ambos motivos pueden coexistir.",
  },
  {
    id: "q079",
    section: "7. Emoción y motivación",
    kind: "single",
    prompt:
      "Un robot comprueba su batería y decide recargarse cuando la energía baja de un umbral operativo. ¿Qué principio ilustra esa regulación?",
    options: [
      {
        id: "a",
        text: "Convergencia instrumental entre agentes",
        correct: false,
      },
      { id: "b", text: "Valencia emocional", correct: false },
      { id: "c", text: "Memoria procedimental", correct: false },
      { id: "d", text: "Homeostasis", correct: true },
    ],
    explanation:
      "La homeostasis regula una variable para mantenerla dentro de un intervalo funcional pese a cambios o perturbaciones.",
  },
  {
    id: "q080",
    section: "7. Emoción y motivación",
    kind: "single",
    prompt:
      "Una meta es muy atractiva, pero la persona considera casi imposible alcanzarla. ¿Cómo se describe el caso en el modelo sencillo de motivación del glosario?",
    options: [
      { id: "a", text: "Valencia alta y expectativa baja", correct: true },
      { id: "b", text: "Valencia alta y expectativa alta", correct: false },
      { id: "c", text: "Valencia baja y expectativa baja", correct: false },
      { id: "d", text: "Valencia baja y expectativa alta", correct: false },
    ],
    explanation:
      "La valencia expresa cuánto se valora el resultado. La expectativa es la posibilidad percibida de alcanzarlo. Si esta última es baja, el atractivo puede traducirse en poca motivación.",
  },
  {
    id: "q081",
    section: "7. Emoción y motivación",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos son correctos si la tarea de un robot es entregar un libro?",
    options: [
      {
        id: "a",
        text: "Meta instrumental → recargar la batería para completar la entrega",
        correct: true,
      },
      {
        id: "b",
        text: "Meta instrumental → considerar la entrega como un medio para necesitar recarga",
        correct: false,
      },
      { id: "c", text: "Meta final → entregar el libro", correct: true },
      {
        id: "d",
        text: "Meta final → recargar la batería aunque la tarea quede pendiente",
        correct: false,
      },
    ],
    explanation:
      "La meta final especifica el resultado buscado. Recargar la batería es un medio para mantener la capacidad de completar la tarea.",
  },
  {
    id: "q082",
    section: "7. Emoción y motivación",
    kind: "multi",
    prompt:
      "¿Qué afirmaciones resumen las tesis de ortogonalidad y convergencia instrumental?",
    options: [
      {
        id: "a",
        text: "Agentes con capacidades similares deben perseguir el mismo fin",
        correct: false,
      },
      {
        id: "b",
        text: "Agentes con fines distintos podrían adoptar una misma meta intermedia si les ayuda a cumplirlos",
        correct: true,
      },
      {
        id: "c",
        text: "Compartir una meta intermedia implica compartir la meta final",
        correct: false,
      },
      {
        id: "d",
        text: "Las capacidades de un agente y sus metas finales pueden variar de forma independiente",
        correct: true,
      },
    ],
    explanation:
      "La ortogonalidad permite separar capacidades y fines. La convergencia instrumental describe la posibilidad de que distintas metas finales favorezcan medios comunes.",
  },
  {
    id: "q083",
    section: "8. Memoria y lenguaje",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos entre procesos de memoria y sus funciones son correctos?",
    options: [
      {
        id: "a",
        text: "Recuperación → acceder a la representación conservada",
        correct: true,
      },
      {
        id: "b",
        text: "Codificación → transformar la experiencia en una representación",
        correct: true,
      },
      {
        id: "c",
        text: "Almacenamiento → conservar la representación",
        correct: true,
      },
      {
        id: "d",
        text: "Recuperación → transformar por primera vez el estímulo en un recuerdo",
        correct: false,
      },
    ],
    explanation:
      "Una falla al recordar puede deberse a problemas para codificar, conservar o recuperar la información. Cada etapa cumple una función distinta.",
  },
  {
    id: "q084",
    section: "8. Memoria y lenguaje",
    kind: "single",
    prompt:
      "¿Qué tipos de memoria sensorial corresponden a un destello breve y a un sonido que acaba de terminar, respectivamente?",
    options: [
      { id: "a", text: "Visuoespacial y procedimental", correct: false },
      { id: "b", text: "Semántica y episódica", correct: false },
      { id: "c", text: "Icónica y ecoica", correct: true },
      { id: "d", text: "Ecoica e icónica", correct: false },
    ],
    explanation:
      "La memoria icónica retiene un rastro visual breve. La ecoica retiene un rastro auditivo.",
  },
  {
    id: "q085",
    section: "8. Memoria y lenguaje",
    kind: "single",
    prompt: "¿Qué ejemplo ilustra principalmente la retención a corto plazo?",
    options: [
      {
        id: "a",
        text: "Recordar cómo se usa una bicicleta que aprendiste a manejar hace años",
        correct: false,
      },
      {
        id: "b",
        text: "Saber el significado de una palabra que aprendiste de niño",
        correct: false,
      },
      {
        id: "c",
        text: "Evocar lo que ocurrió en una visita de la semana pasada",
        correct: false,
      },
      {
        id: "d",
        text: "Mantener unos segundos un código que vas a escribir de inmediato",
        correct: true,
      },
    ],
    explanation:
      "La memoria a corto plazo retiene temporalmente una cantidad limitada de información. Las habilidades, los acontecimientos y el conocimiento duradero dependen de la memoria a largo plazo.",
  },
  {
    id: "q086",
    section: "8. Memoria y lenguaje",
    kind: "multi",
    prompt: "¿Qué ejemplos corresponden a la memoria declarativa?",
    options: [
      {
        id: "a",
        text: "Teclear con fluidez gracias a la práctica previa",
        correct: false,
      },
      {
        id: "b",
        text: "Recordar tu última visita a una biblioteca",
        correct: true,
      },
      {
        id: "c",
        text: "Mantener por un instante el rastro de un destello",
        correct: false,
      },
      { id: "d", text: "Saber para qué sirve una biblioteca", correct: true },
    ],
    explanation:
      "La memoria semántica conserva conocimiento general y la episódica permite evocar acontecimientos situados. Ambas se pueden recuperar de forma explícita.",
  },
  {
    id: "q087",
    section: "8. Memoria y lenguaje",
    kind: "boolean",
    prompt:
      "Una habilidad puede mejorar con la práctica aunque la persona no recuerde conscientemente las sesiones de entrenamiento.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "La memoria procedimental es una forma de memoria implícita. Se manifiesta en la ejecución de habilidades, como teclear con fluidez.",
  },
  {
    id: "q088",
    section: "8. Memoria y lenguaje",
    kind: "single",
    prompt:
      "Mantienes en mente dos rutas y comparas los pasos para elegir una. ¿Qué sistema permite mantener y manipular esa información?",
    options: [
      { id: "a", text: "Consolidación de largo plazo", correct: false },
      { id: "b", text: "Memoria sensorial", correct: false },
      { id: "c", text: "Memoria procedimental", correct: false },
      { id: "d", text: "Memoria de trabajo", correct: true },
    ],
    explanation:
      "La memoria de trabajo mantiene activa la información relevante y permite operar con ella durante la tarea.",
  },
  {
    id: "q089",
    section: "8. Memoria y lenguaje",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos entre componentes de la memoria de trabajo y funciones son correctos en el modelo ampliado de Baddeley?",
    options: [
      {
        id: "a",
        text: "Ejecutivo central → coordinar la atención",
        correct: true,
      },
      {
        id: "b",
        text: "Agenda visuoespacial → mantener y manipular relaciones espaciales",
        correct: true,
      },
      {
        id: "c",
        text: "Retén episódico → integrar temporalmente información de distintas fuentes",
        correct: true,
      },
      {
        id: "d",
        text: "Bucle fonológico → conservar de forma permanente recuerdos autobiográficos",
        correct: false,
      },
    ],
    explanation:
      "El bucle fonológico mantiene de forma temporal información verbal o auditiva. Baddeley añadió el retén episódico para explicar la integración de contenidos.",
  },
  {
    id: "q090",
    section: "8. Memoria y lenguaje",
    kind: "single",
    prompt:
      'Para recordar las letras U, N, I y R, una persona las agrupa en la palabra conocida "UNIR". ¿Qué estrategia usa?',
    options: [
      { id: "a", text: "Inhibición cognitiva", correct: false },
      { id: "b", text: "Fragmentación o chunking", correct: true },
      { id: "c", text: "Consolidación de largo plazo", correct: false },
      { id: "d", text: "Transducción sensorial", correct: false },
    ],
    explanation:
      "La fragmentación combina elementos en unidades significativas. Las cuatro letras pueden tratarse como una unidad gracias al conocimiento previo.",
  },
  {
    id: "q091",
    section: "8. Memoria y lenguaje",
    kind: "boolean",
    prompt:
      "La consolidación se refiere al acceso momentáneo a un recuerdo que ya está almacenado.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "La consolidación hace más estable un recuerdo. Acceder a una representación conservada corresponde a la recuperación.",
  },
  {
    id: "q092",
    section: "8. Memoria y lenguaje",
    kind: "single",
    prompt:
      'Si "¿Puedes cerrar la ventana?" se entiende como petición en ese contexto, ¿qué nivel del lenguaje estudia esa inferencia?',
    options: [
      { id: "a", text: "Pragmática", correct: true },
      { id: "b", text: "Morfología", correct: false },
      { id: "c", text: "Fonología", correct: false },
      { id: "d", text: "Sintaxis", correct: false },
    ],
    explanation:
      "La pragmática estudia cómo el contexto orienta la interpretación. La misma forma interrogativa puede funcionar como petición.",
  },
  {
    id: "q093",
    section: "8. Memoria y lenguaje",
    kind: "single",
    prompt:
      "Ves por primera vez un mueble y, al reconocerlo como silla, deduces que sirve para sentarse. ¿Qué proceso permite esa inferencia?",
    options: [
      {
        id: "a",
        text: "Codificación sensorial sin interpretación",
        correct: false,
      },
      {
        id: "b",
        text: "Consolidación del recuerdo de ese mueble particular",
        correct: false,
      },
      {
        id: "c",
        text: "Retroalimentación sensoriomotora durante el movimiento",
        correct: false,
      },
      {
        id: "d",
        text: "Categorización y generalización conceptual",
        correct: true,
      },
    ],
    explanation:
      "Asignar el objeto a la categoría de silla permite aplicar conocimiento general a un ejemplar nuevo.",
  },
  {
    id: "q094",
    section: "9. Funciones ejecutivas y supervisión de la conducta",
    kind: "multi",
    prompt:
      "¿Qué procesos contribuyen al control ejecutivo al seguir instrucciones complejas?",
    options: [
      {
        id: "a",
        text: "Mantener activa la instrucción relevante",
        correct: true,
      },
      {
        id: "b",
        text: "Convertir la luz que llega a la retina en señales eléctricas",
        correct: false,
      },
      {
        id: "c",
        text: "Cambiar de estrategia cuando cambian las condiciones",
        correct: true,
      },
      {
        id: "d",
        text: "Frenar una respuesta habitual que contradice la meta",
        correct: true,
      },
    ],
    explanation:
      "La memoria de trabajo, la inhibición y la flexibilidad ayudan a guiar la conducta hacia una meta. La conversión de luz es transducción sensorial.",
  },
  {
    id: "q095",
    section: "9. Funciones ejecutivas y supervisión de la conducta",
    kind: "multi",
    prompt:
      "¿Qué emparejamientos distinguen la inhibición conductual de la cognitiva al seguir una ruta nueva?",
    options: [
      {
        id: "a",
        text: "Cognitiva → reducir la interferencia de las indicaciones de la ruta anterior",
        correct: true,
      },
      {
        id: "b",
        text: "Cognitiva → ordenar los pasos de la ruta alternativa",
        correct: false,
      },
      {
        id: "c",
        text: "Conductual → mantener activo en memoria el nuevo destino",
        correct: false,
      },
      {
        id: "d",
        text: "Conductual → frenar antes de dar la vuelta habitual",
        correct: true,
      },
    ],
    explanation:
      "La inhibición conductual detiene una acción dominante. La inhibición cognitiva reduce la interferencia de información irrelevante.",
  },
  {
    id: "q096",
    section: "9. Funciones ejecutivas y supervisión de la conducta",
    kind: "single",
    prompt:
      "Una calle queda cerrada y cambias de estrategia para llegar al mismo destino. ¿Qué función permite adoptar la alternativa?",
    options: [
      { id: "a", text: "Consolidación de recuerdos", correct: false },
      { id: "b", text: "Inhibición conductual por sí sola", correct: false },
      { id: "c", text: "Flexibilidad cognitiva", correct: true },
      { id: "d", text: "Memoria icónica", correct: false },
    ],
    explanation:
      "La flexibilidad permite cambiar de regla o estrategia cuando varían las condiciones, incluso si la meta se mantiene.",
  },
  {
    id: "q097",
    section: "9. Funciones ejecutivas y supervisión de la conducta",
    kind: "multi",
    prompt: "¿Qué emparejamientos distinguen planificar de tomar una decisión?",
    options: [
      {
        id: "a",
        text: "Planificación → notar que la ejecución ya se desvió de la meta",
        correct: false,
      },
      {
        id: "b",
        text: "Planificación → ordenar las acciones de recoger, trasladar y entregar un libro",
        correct: true,
      },
      {
        id: "c",
        text: "Toma de decisiones → elegir una ruta entre las alternativas disponibles",
        correct: true,
      },
      {
        id: "d",
        text: "Toma de decisiones → conservar una instrucción verbal activa",
        correct: false,
      },
    ],
    explanation:
      "Decidir consiste en elegir entre opciones. Planificar consiste en organizar acciones y metas intermedias según las restricciones.",
  },
  {
    id: "q098",
    section: "9. Funciones ejecutivas y supervisión de la conducta",
    kind: "boolean",
    prompt:
      "Alternar entre dos tareas puede aumentar el tiempo de respuesta porque hay que recuperar el contexto de la tarea a la que se vuelve.",
    options: [
      { id: "v", text: "Verdadero", correct: true },
      { id: "f", text: "Falso", correct: false },
    ],
    explanation:
      "Cuando las demandas compiten por un recurso, alternarlas puede requerir recuperar sus reglas o su estado, lo que aumenta el tiempo de respuesta o los errores.",
  },
  {
    id: "q099",
    section: "9. Funciones ejecutivas y supervisión de la conducta",
    kind: "single",
    prompt:
      "Mientras acomodas libros, notas que uno quedó en un estante incorrecto y corriges el orden. ¿Qué proceso detecta la discrepancia con la meta?",
    options: [
      { id: "a", text: "Supervisión de la conducta", correct: true },
      {
        id: "b",
        text: "Categorización del libro por su formato",
        correct: false,
      },
      {
        id: "c",
        text: "Programación motora previa a la acción",
        correct: false,
      },
      { id: "d", text: "Consolidación de la memoria", correct: false },
    ],
    explanation:
      "La supervisión compara lo que ocurre durante la ejecución con lo esperado. Al detectar un desvío, puedes interrumpir o corregir la acción.",
  },
  {
    id: "q100",
    section: "9. Funciones ejecutivas y supervisión de la conducta",
    kind: "single",
    prompt: "¿En qué caso se observa metacognición?",
    options: [
      {
        id: "a",
        text: "Recuperar automáticamente el significado de una palabra familiar",
        correct: false,
      },
      {
        id: "b",
        text: "Agrupar cuatro letras conocidas en una palabra durante la lectura",
        correct: false,
      },
      {
        id: "c",
        text: "Sentir que un libro se desliza y ajustar el agarre",
        correct: false,
      },
      {
        id: "d",
        text: "Darte cuenta de que olvidaste un paso y consultar las instrucciones antes de continuar",
        correct: true,
      },
    ],
    explanation:
      "La metacognición incluye monitorear lo que sabes o recuerdas y regular cómo actúas con base en esa evaluación.",
  },
  {
    id: "q101",
    section: "9. Funciones ejecutivas y supervisión de la conducta",
    kind: "boolean",
    prompt:
      "Afirmar que un supervisor interno sabe cuándo intervenir, sin explicar cómo decide, completa una explicación del control ejecutivo.",
    options: [
      { id: "v", text: "Verdadero", correct: false },
      { id: "f", text: "Falso", correct: true },
    ],
    explanation:
      "El problema del homúnculo aparece cuando la explicación atribuye la capacidad que quiere explicar a un supervisor interno. Un mecanismo debe especificar cómo selecciona respuestas y regula su intervención.",
  },
  {
    id: "q102",
    section: "9. Funciones ejecutivas y supervisión de la conducta",
    kind: "single",
    prompt:
      "¿Qué función cumple el mecanismo de compuertas en el modelo prefrontal y de ganglios basales de Hazy y colaboradores?",
    options: [
      {
        id: "a",
        text: "Consolidar recuerdos declarativos mediante el hipocampo",
        correct: false,
      },
      {
        id: "b",
        text: "Convertir estímulos visuales en señales eléctricas",
        correct: false,
      },
      {
        id: "c",
        text: "Regular cuándo se actualizan o se usan representaciones en la memoria de trabajo",
        correct: true,
      },
      {
        id: "d",
        text: "Mantener información verbal por repetición fonológica",
        correct: false,
      },
    ],
    explanation:
      "El modelo usa compuertas para seleccionar qué información entra en la memoria de trabajo o guía la acción. En la simulación, el aprendizaje por refuerzo ajusta esa selección.",
  },
];
