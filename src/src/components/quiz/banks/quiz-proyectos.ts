import type { QuizQuestion } from "../types";

/**
 * Banco del examen de entrenamiento sobre el glosario de diseño y gestión de
 * proyectos. Las respuestas incorrectas son definiciones o ejemplos del propio
 * glosario aplicados al concepto equivocado, no distractores obvios.
 */
export const questions: QuizQuestion[] = [
  {
    id: "q001",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Esfuerzo temporal para crear un producto, servicio o resultado singular\"?",
    options: [
      {
        id: "a",
        text: "Programa",
        correct: false,
      },
      {
        id: "b",
        text: "Entregable",
        correct: false,
      },
      {
        id: "c",
        text: "Operación",
        correct: false,
      },
      {
        id: "d",
        text: "Proyecto",
        correct: true,
      },
    ],
    explanation:
      "El proyecto es un esfuerzo temporal para crear un producto, servicio o resultado singular. La operación es trabajo recurrente, el programa coordina proyectos relacionados y el entregable es un resultado verificable producido durante el proyecto.",
  },
  {
    id: "q136",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt:
      "La universidad integra un sistema de pagos con su plataforma de matrícula y valida el servicio antes de entregarlo. ¿Qué describe ese trabajo?",
    options: [
      {
        id: "a",
        text: "Operación recurrente de la plataforma",
        correct: false,
      },
      {
        id: "b",
        text: "Proyecto tecnológico",
        correct: true,
      },
      {
        id: "c",
        text: "Programa de proyectos",
        correct: false,
      },
      {
        id: "d",
        text: "Control de calidad del servicio en operación",
        correct: false,
      },
    ],
    explanation:
      "Es un proyecto tecnológico porque incorpora tecnología para resolver una necesidad concreta y termina con la entrega del servicio validado.",
  },
  {
    id: "q002",
    section: "1. Fundamentos del proyecto",
    kind: "boolean",
    prompt:
      "La operación es el trabajo recurrente que mantiene funcionando un servicio o proceso.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. La operación tiene procedimientos y resultados relativamente estables. Por ejemplo, el equipo de soporte opera la plataforma después de que termina su implantación.",
  },
  {
    id: "q003",
    section: "1. Fundamentos del proyecto",
    kind: "boolean",
    prompt:
      "En la definición de proyecto, \"temporal\" describe la vida útil de su resultado.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. El glosario aclara que \"temporal\" describe el esfuerzo, no la vida útil de su resultado. La plataforma de matrícula sigue en uso cuando el proyecto ya terminó.",
  },
  {
    id: "q004",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt: "¿Qué es la dirección o gestión de proyectos?",
    options: [
      {
        id: "a",
        text: "Persona responsable de coordinar al equipo y las decisiones necesarias para alcanzar los objetivos",
        correct: false,
      },
      {
        id: "b",
        text: "Documento que integra cómo se ejecutará, supervisará, modificará y cerrará el proyecto",
        correct: false,
      },
      {
        id: "c",
        text: "Comparación periódica entre desempeño real, plan aprobado y objetivos",
        correct: false,
      },
      {
        id: "d",
        text: "Aplicación coordinada de conocimientos, personas, herramientas y decisiones para cumplir los objetivos acordados",
        correct: true,
      },
    ],
    explanation:
      "La dirección o gestión de proyectos es la aplicación coordinada de conocimientos, personas, herramientas y decisiones. Las otras opciones definen al director de proyecto, al plan de gestión del proyecto y al seguimiento y control. Gestionar no equivale solo a confeccionar un cronograma.",
  },
  {
    id: "q005",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Secuencia de etapas desde la idea hasta el cierre\"?",
    options: [
      {
        id: "a",
        text: "Cronograma",
        correct: false,
      },
      {
        id: "b",
        text: "Ciclo de vida del proyecto",
        correct: true,
      },
      {
        id: "c",
        text: "Plan de gestión del proyecto",
        correct: false,
      },
      {
        id: "d",
        text: "Enfoque predictivo",
        correct: false,
      },
    ],
    explanation:
      "El ciclo de vida del proyecto es la secuencia de etapas desde la idea hasta el cierre. Puede incluir inicio, diseño, planificación, ejecución y cierre. El cronograma representa actividades y fechas, no etapas de decisión.",
  },
  {
    id: "q006",
    section: "1. Fundamentos del proyecto",
    kind: "boolean",
    prompt:
      "El ciclo de vida describe cuándo se toman decisiones, mientras que un método indica cómo se trabaja.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Es la distinción que hace el glosario entre ciclo de vida y método.",
  },
  {
    id: "q137",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt:
      "Tras el piloto, el comité revisa la viabilidad de la solución y decide si autoriza el despliegue, solicita ajustes o detiene el proyecto. ¿Qué práctica aplica?",
    options: [
      {
        id: "a",
        text: "Reunión de lanzamiento",
        correct: false,
      },
      {
        id: "b",
        text: "Retrospectiva del Sprint",
        correct: false,
      },
      {
        id: "c",
        text: "Revisión de fase",
        correct: true,
      },
      {
        id: "d",
        text: "Aceptación formal al cierre",
        correct: false,
      },
    ],
    explanation:
      "En una revisión de fase, quienes tienen autoridad evalúan la evidencia y deciden si el proyecto continúa, cambia o se detiene.",
  },
  {
    id: "q007",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Resultado que el proyecto busca alcanzar\"?",
    options: [
      {
        id: "a",
        text: "Entregable",
        correct: false,
      },
      {
        id: "b",
        text: "Objetivo",
        correct: true,
      },
      {
        id: "c",
        text: "Beneficio",
        correct: false,
      },
      {
        id: "d",
        text: "Criterio de éxito",
        correct: false,
      },
    ],
    explanation:
      "El objetivo es el resultado que el proyecto busca alcanzar y guía el alcance y los criterios de aceptación. El entregable es un resultado verificable producido; el criterio de éxito es la condición con la que se juzga el logro; el beneficio es una mejora observable posterior.",
  },
  {
    id: "q008",
    section: "1. Fundamentos del proyecto",
    kind: "boolean",
    prompt:
      "El criterio de éxito es la condición pactada para que un entregable sea recibido por quien corresponde.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Esa es la definición de criterio de aceptación. El criterio de éxito es la condición con la que se juzga si el proyecto logró lo que se esperaba, por ejemplo un plazo, un coste o la adopción por los usuarios.",
  },
  {
    id: "q009",
    section: "1. Fundamentos del proyecto",
    kind: "multi",
    prompt:
      "¿Cuáles de estos ejemplos menciona el glosario como entregables? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Reducir el tiempo de inscripción",
        correct: false,
      },
      {
        id: "b",
        text: "Una aplicación",
        correct: true,
      },
      {
        id: "c",
        text: "Un manual",
        correct: true,
      },
      {
        id: "d",
        text: "La aprobación del diseño",
        correct: false,
      },
      {
        id: "e",
        text: "Una prueba de seguridad",
        correct: true,
      },
      {
        id: "f",
        text: "Una formación",
        correct: true,
      },
    ],
    explanation:
      "El glosario dice que un entregable puede ser una aplicación, un manual, una prueba de seguridad o una formación. Reducir el tiempo de inscripción es un beneficio y la aprobación del diseño es un ejemplo de hito.",
  },
  {
    id: "q010",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt: "Según el glosario, ¿qué es reducir el tiempo de inscripción?",
    options: [
      {
        id: "a",
        text: "Un criterio de aceptación",
        correct: false,
      },
      {
        id: "b",
        text: "Un entregable",
        correct: false,
      },
      {
        id: "c",
        text: "Un requisito",
        correct: false,
      },
      {
        id: "d",
        text: "Un beneficio",
        correct: true,
      },
    ],
    explanation:
      "El glosario lo usa como ejemplo de beneficio, una mejora observable que puede aparecer después de la entrega. La plataforma operativa, en cambio, es el entregable.",
  },
  {
    id: "q011",
    section: "1. Fundamentos del proyecto",
    kind: "boolean",
    prompt:
      "El valor es una mejora observable que puede aparecer después de la entrega.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Esa es la definición de beneficio. El valor es la utilidad que los resultados aportan a quienes los reciben.",
  },
  {
    id: "q012",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Persona, grupo u organización que puede afectar al proyecto o resultar afectada por él\"?",
    options: [
      {
        id: "a",
        text: "Cliente",
        correct: false,
      },
      {
        id: "b",
        text: "Director de proyecto",
        correct: false,
      },
      {
        id: "c",
        text: "Patrocinador",
        correct: false,
      },
      {
        id: "d",
        text: "Parte interesada (stakeholder)",
        correct: true,
      },
    ],
    explanation:
      "Es la definición de parte interesada. El cliente solicita o recibe el resultado, el patrocinador respalda el proyecto y el director de proyecto lo coordina. En la plataforma participan estudiantes, administración, soporte y autoridades.",
  },
  {
    id: "q138",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt:
      "Quieres documentar quién aprueba el calendario escolar, qué espera del proyecto y en qué decisiones puede influir. ¿Dónde registras esos datos?",
    options: [
      {
        id: "a",
        text: "Registro de interesados",
        correct: true,
      },
      {
        id: "b",
        text: "Matriz de probabilidad e impacto",
        correct: false,
      },
      {
        id: "c",
        text: "Matriz de involucramiento de interesados",
        correct: false,
      },
      {
        id: "d",
        text: "Plan de comunicación",
        correct: false,
      },
    ],
    explanation:
      "El registro de interesados reúne las personas y los grupos relevantes, sus funciones, expectativas y capacidad de influir.",
  },
  {
    id: "q139",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt:
      "En la matriz de poder e interés, ¿cómo debes tratar a un grupo con mucho interés en el resultado y poca capacidad de influir en las decisiones?",
    options: [
      {
        id: "a",
        text: "Mantenerlo satisfecho",
        correct: false,
      },
      {
        id: "b",
        text: "Monitorearlo con atención mínima",
        correct: false,
      },
      {
        id: "c",
        text: "Coordinar de cerca con él",
        correct: false,
      },
      {
        id: "d",
        text: "Mantenerlo informado",
        correct: true,
      },
    ],
    explanation:
      "El interés alto y poder bajo indican que conviene mantener informado al grupo. Coordina de cerca con quienes tienen poder e interés altos.",
  },
  {
    id: "q140",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt:
      "El personal de control escolar se muestra neutral ante la nueva plataforma y necesitas que la apoye. ¿Qué herramienta registra el nivel actual y el deseado?",
    options: [
      {
        id: "a",
        text: "Plan de comunicación",
        correct: false,
      },
      {
        id: "b",
        text: "Matriz de poder e interés",
        correct: false,
      },
      {
        id: "c",
        text: "Matriz de involucramiento de interesados",
        correct: true,
      },
      {
        id: "d",
        text: "Registro de riesgos",
        correct: false,
      },
    ],
    explanation:
      "La matriz de involucramiento compara la disposición actual con la que necesita el proyecto. El equipo puede usar esa diferencia para decidir cómo involucrar al personal.",
  },
  {
    id: "q013",
    section: "1. Fundamentos del proyecto",
    kind: "multi",
    prompt:
      "Selecciona los pares que coinciden con el glosario. Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Patrocinador: solicita o recibe el resultado",
        correct: false,
      },
      {
        id: "b",
        text: "Patrocinador: respalda el proyecto y facilita recursos o decisiones",
        correct: true,
      },
      {
        id: "c",
        text: "Usuario: respalda el proyecto y facilita recursos o decisiones",
        correct: false,
      },
      {
        id: "d",
        text: "Cliente: solicita o recibe el resultado",
        correct: true,
      },
      {
        id: "e",
        text: "Usuario: utiliza el resultado en la práctica",
        correct: true,
      },
    ],
    explanation:
      "El cliente solicita o recibe el resultado, el usuario lo utiliza y el patrocinador respalda el proyecto y facilita recursos o decisiones. Pueden coincidir, pero no siempre.",
  },
  {
    id: "q014",
    section: "1. Fundamentos del proyecto",
    kind: "boolean",
    prompt:
      "La autoridad del director de proyecto sobre cada especialista depende de la estructura de la organización.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. El director de proyecto coordina al equipo y las decisiones, gestiona expectativas, dependencias, recursos y desviaciones, pero su autoridad sobre cada especialista depende de la estructura organizativa.",
  },
  {
    id: "q015",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt: "¿Qué hace una cartera de proyectos?",
    options: [
      {
        id: "a",
        text: "Crea un producto, servicio o resultado singular mediante un esfuerzo temporal",
        correct: false,
      },
      {
        id: "b",
        text: "Justifica por qué conviene invertir en el proyecto",
        correct: false,
      },
      {
        id: "c",
        text: "Agrupa proyectos y programas para decidir cuáles conviene financiar según la estrategia y los recursos disponibles",
        correct: true,
      },
      {
        id: "d",
        text: "Coordina proyectos relacionados para obtener beneficios que sería difícil lograr por separado",
        correct: false,
      },
    ],
    explanation:
      "La cartera agrupa proyectos y programas para decidir cuáles financiar. La primera opción incorrecta define el programa, la segunda el caso de negocio y la tercera el proyecto.",
  },
  {
    id: "q016",
    section: "1. Fundamentos del proyecto",
    kind: "boolean",
    prompt:
      "Un programa agrupa proyectos y programas para decidir cuáles conviene financiar según la estrategia.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Esa es la cartera. Un programa coordina proyectos relacionados para obtener beneficios que sería difícil lograr por separado.",
  },
  {
    id: "q017",
    section: "1. Fundamentos del proyecto",
    kind: "multi",
    prompt:
      "¿Qué elementos relaciona la restricción triple? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Riesgo",
        correct: false,
      },
      {
        id: "b",
        text: "Coste",
        correct: true,
      },
      {
        id: "c",
        text: "Tiempo",
        correct: true,
      },
      {
        id: "d",
        text: "Alcance",
        correct: true,
      },
      {
        id: "e",
        text: "Calidad",
        correct: false,
      },
    ],
    explanation:
      "La restricción triple relaciona alcance, tiempo y coste. El glosario aclara que la calidad, el riesgo y los recursos también importan, por eso el triángulo es un recordatorio y no un modelo completo del éxito.",
  },
  {
    id: "q018",
    section: "1. Fundamentos del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Aparece cuando muchas partes interactúan y un cambio tiene efectos difíciles de prever\"?",
    options: [
      {
        id: "a",
        text: "Riesgo",
        correct: false,
      },
      {
        id: "b",
        text: "Incertidumbre",
        correct: false,
      },
      {
        id: "c",
        text: "Complejidad",
        correct: true,
      },
      {
        id: "d",
        text: "Dependencia",
        correct: false,
      },
    ],
    explanation:
      "Es la definición de complejidad. La incertidumbre expresa lo que aún no sabes; el riesgo es un evento o condición incierta que afecta a los objetivos; la dependencia condiciona cuándo empieza o termina una actividad.",
  },
  {
    id: "q019",
    section: "1. Fundamentos del proyecto",
    kind: "boolean",
    prompt:
      "La incertidumbre expresa lo que aún no sabes, como la demanda real del servicio.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Incertidumbre y complejidad influyen en cuánto debes planificar por adelantado y cuánto conviene aprender durante la ejecución.",
  },
  {
    id: "q020",
    section: "2. Métodos y marcos de trabajo",
    kind: "multi",
    prompt:
      "Selecciona los pares que coinciden con el glosario. Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Estándar: reúne principios o prácticas de referencia",
        correct: true,
      },
      {
        id: "b",
        text: "Metodología: prescribe procedimientos que una organización adopta",
        correct: true,
      },
      {
        id: "c",
        text: "Estándar: prescribe procedimientos que una organización adopta",
        correct: false,
      },
      {
        id: "d",
        text: "Marco de trabajo: reúne principios o prácticas de referencia",
        correct: false,
      },
      {
        id: "e",
        text: "Marco de trabajo: fija elementos y reglas con margen para concretar su aplicación",
        correct: true,
      },
    ],
    explanation:
      "Según el glosario, el estándar reúne principios o prácticas de referencia, la metodología prescribe procedimientos y el marco de trabajo fija elementos y reglas con margen de aplicación. Las opciones incorrectas intercambian esas definiciones.",
  },
  {
    id: "q021",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt: "¿Qué es la Guía del PMBOK?",
    options: [
      {
        id: "a",
        text: "Una metodología que prescribe procedimientos que una organización adopta",
        correct: false,
      },
      {
        id: "b",
        text: "Una guía que organiza conocimientos y prácticas de referencia para la dirección de proyectos",
        correct: true,
      },
      {
        id: "c",
        text: "Un método para gestionar el flujo de trabajo haciendo visible cómo avanzan las tareas",
        correct: false,
      },
      {
        id: "d",
        text: "Un marco de trabajo para abordar problemas complejos mediante ciclos breves de entrega e inspección",
        correct: false,
      },
    ],
    explanation:
      "La Guía del PMBOK, publicada por el PMI, organiza conocimientos y prácticas de referencia. Las otras opciones describen una metodología, Scrum y Kanban.",
  },
  {
    id: "q022",
    section: "2. Métodos y marcos de trabajo",
    kind: "boolean",
    prompt:
      "La séptima edición de la Guía del PMBOK presenta doce principios y ocho dominios de desempeño.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Además, no obliga a ejecutar todos los proyectos con una secuencia fija de procesos.",
  },
  {
    id: "q023",
    section: "2. Métodos y marcos de trabajo",
    kind: "boolean",
    prompt:
      "La séptima edición del PMBOK obliga a ejecutar todos los proyectos con una secuencia fija de procesos.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. El glosario indica expresamente que no obliga a seguir una secuencia fija de procesos. Organiza conocimientos y prácticas de referencia.",
  },
  {
    id: "q024",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Orientación que ayuda a decidir en situaciones distintas\"?",
    options: [
      {
        id: "a",
        text: "Estándar",
        correct: false,
      },
      {
        id: "b",
        text: "Adaptación (tailoring)",
        correct: false,
      },
      {
        id: "c",
        text: "Principio de dirección de proyectos",
        correct: true,
      },
      {
        id: "d",
        text: "Dominio de desempeño",
        correct: false,
      },
    ],
    explanation:
      "Un principio orienta decisiones en situaciones distintas y se aplica al decidir cómo trabajar. El dominio de desempeño es un conjunto de actividades relacionadas y la adaptación es el ajuste de prácticas a un proyecto concreto.",
  },
  {
    id: "q025",
    section: "2. Métodos y marcos de trabajo",
    kind: "multi",
    prompt:
      "¿Cuáles de estos son dominios de desempeño de la séptima edición del PMBOK? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Entrega",
        correct: true,
      },
      {
        id: "b",
        text: "Colaborar",
        correct: false,
      },
      {
        id: "c",
        text: "Crear valor",
        correct: false,
      },
      {
        id: "d",
        text: "Incertidumbre",
        correct: true,
      },
      {
        id: "e",
        text: "Planificación",
        correct: true,
      },
      {
        id: "f",
        text: "Interesados",
        correct: true,
      },
    ],
    explanation:
      "El glosario lista como dominios interesados, equipo, enfoque de desarrollo y ciclo de vida, planificación, trabajo, entrega, medición e incertidumbre. Crear valor y colaborar son temas de los principios.",
  },
  {
    id: "q026",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Selección y ajuste de prácticas para un proyecto concreto\"?",
    options: [
      {
        id: "a",
        text: "Metodología",
        correct: false,
      },
      {
        id: "b",
        text: "Adaptación (tailoring)",
        correct: true,
      },
      {
        id: "c",
        text: "Principio de dirección de proyectos",
        correct: false,
      },
      {
        id: "d",
        text: "Enfoque híbrido",
        correct: false,
      },
    ],
    explanation:
      "La adaptación selecciona y ajusta prácticas para un proyecto concreto y exige justificar las decisiones. El enfoque híbrido es una combinación deliberada de prácticas predictivas y adaptativas.",
  },
  {
    id: "q027",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Forma de trabajo que define gran parte del alcance y la planificación antes de ejecutar\"?",
    options: [
      {
        id: "a",
        text: "Enfoque predictivo",
        correct: true,
      },
      {
        id: "b",
        text: "Enfoque ágil",
        correct: false,
      },
      {
        id: "c",
        text: "Enfoque híbrido",
        correct: false,
      },
      {
        id: "d",
        text: "Enfoque iterativo e incremental",
        correct: false,
      },
    ],
    explanation:
      "Es el enfoque predictivo. Conviene cuando los requisitos son suficientemente estables y la secuencia de entregas se conoce, aunque requiere un mecanismo para evaluar cambios.",
  },
  {
    id: "q028",
    section: "2. Métodos y marcos de trabajo",
    kind: "boolean",
    prompt:
      "El enfoque predictivo conviene cuando los requisitos son suficientemente estables y la secuencia de entregas se conoce.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. El glosario añade que predecir no elimina cambios; requiere un mecanismo para evaluarlos y actualizar el plan.",
  },
  {
    id: "q029",
    section: "2. Métodos y marcos de trabajo",
    kind: "boolean",
    prompt:
      "En un trabajo incremental se revisa una solución varias veces para mejorarla.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Esa es la definición de trabajo iterativo. En uno incremental se entregan partes funcionales que amplían el producto.",
  },
  {
    id: "q030",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt: "¿Qué es el enfoque ágil?",
    options: [
      {
        id: "a",
        text: "Forma de trabajo que define gran parte del alcance y la planificación antes de ejecutar",
        correct: false,
      },
      {
        id: "b",
        text: "Forma de organizar el trabajo que favorece la colaboración, la entrega frecuente y la respuesta a la información nueva",
        correct: true,
      },
      {
        id: "c",
        text: "Método para gestionar el flujo de trabajo haciendo visible cómo avanzan las tareas y estableciendo políticas explícitas",
        correct: false,
      },
      {
        id: "d",
        text: "Combinación deliberada de prácticas predictivas y adaptativas",
        correct: false,
      },
    ],
    explanation:
      "El enfoque ágil favorece la colaboración, la entrega frecuente y la respuesta a la información nueva. Las otras opciones definen el enfoque predictivo, el híbrido y Kanban. Ágil no significa trabajar sin objetivos, planificación ni control de calidad.",
  },
  {
    id: "q031",
    section: "2. Métodos y marcos de trabajo",
    kind: "boolean",
    prompt:
      "El enfoque híbrido es una combinación deliberada de prácticas predictivas y adaptativas.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Por ejemplo, puedes fijar por adelantado la fecha de cumplimiento normativo y desarrollar la interfaz en incrementos.",
  },
  {
    id: "q032",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Marco de trabajo para abordar problemas complejos mediante ciclos breves de entrega e inspección\"?",
    options: [
      {
        id: "a",
        text: "Sprint",
        correct: false,
      },
      {
        id: "b",
        text: "Scrum",
        correct: true,
      },
      {
        id: "c",
        text: "Enfoque iterativo e incremental",
        correct: false,
      },
      {
        id: "d",
        text: "Kanban",
        correct: false,
      },
    ],
    explanation:
      "Es Scrum, que define responsabilidades, eventos y artefactos. Kanban es un método para gestionar el flujo de trabajo y el Sprint es un periodo dentro de Scrum.",
  },
  {
    id: "q033",
    section: "2. Métodos y marcos de trabajo",
    kind: "multi",
    prompt:
      "Selecciona los pares que coinciden con el glosario. Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Developers: ordenan el trabajo para maximizar el valor",
        correct: false,
      },
      {
        id: "b",
        text: "Developers: crean el incremento",
        correct: true,
      },
      {
        id: "c",
        text: "Product Owner: ordena el trabajo para maximizar el valor",
        correct: true,
      },
      {
        id: "d",
        text: "Scrum Master: crea el incremento",
        correct: false,
      },
      {
        id: "e",
        text: "Scrum Master: ayuda a que Scrum se comprenda y funcione",
        correct: true,
      },
    ],
    explanation:
      "En el Equipo Scrum, el Product Owner ordena el trabajo para maximizar el valor, el Scrum Master ayuda a que Scrum se comprenda y funcione, y los Developers crean el incremento.",
  },
  {
    id: "q034",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Lista ordenada y cambiante del trabajo necesario para mejorar el producto\"?",
    options: [
      {
        id: "a",
        text: "Sprint Backlog",
        correct: false,
      },
      {
        id: "b",
        text: "Estructura de desglose del trabajo (EDT)",
        correct: false,
      },
      {
        id: "c",
        text: "Product Backlog",
        correct: true,
      },
      {
        id: "d",
        text: "Registro de riesgos",
        correct: false,
      },
    ],
    explanation:
      "Es el Product Backlog. El Sprint Backlog solo reúne el objetivo del Sprint, los elementos seleccionados y el plan para realizarlos.",
  },
  {
    id: "q141",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt:
      "¿Cuál de estas opciones formula una historia de usuario con una persona, una necesidad y el beneficio esperado?",
    options: [
      {
        id: "a",
        text:
          "Como estudiante, quiero descargar mi comprobante para acreditar mi inscripción.",
        correct: true,
      },
      {
        id: "b",
        text: "El comprobante se entregará en PDF en menos de dos segundos.",
        correct: false,
      },
      {
        id: "c",
        text:
          "El equipo debe integrar el generador de comprobantes antes del piloto.",
        correct: false,
      },
      {
        id: "d",
        text:
          "Se acepta la entrega cuando se puedan descargar diez comprobantes de prueba.",
        correct: false,
      },
    ],
    explanation:
      "La historia expresa quién necesita algo, qué quiere hacer y para qué. Las demás opciones describen condiciones de producto, ejecución o aceptación.",
  },
  {
    id: "q035",
    section: "2. Métodos y marcos de trabajo",
    kind: "multi",
    prompt: "¿Qué reúne el Sprint Backlog? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "El trabajo completado que puede utilizarse",
        correct: false,
      },
      {
        id: "b",
        text: "Las condiciones de calidad que debe cumplir el incremento",
        correct: false,
      },
      {
        id: "c",
        text: "El objetivo del Sprint",
        correct: true,
      },
      {
        id: "d",
        text: "El plan para realizarlos",
        correct: true,
      },
      {
        id: "e",
        text: "Los elementos seleccionados del Product Backlog",
        correct: true,
      },
    ],
    explanation:
      "El Sprint Backlog reúne el objetivo, los elementos seleccionados del Product Backlog y el plan para realizarlos. Las condiciones de calidad son la definición de terminado y el trabajo completado utilizable es el incremento.",
  },
  {
    id: "q036",
    section: "2. Métodos y marcos de trabajo",
    kind: "boolean",
    prompt:
      "El Sprint es un periodo de hasta un mes en el que el equipo busca un objetivo y produce un incremento utilizable.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Al terminar, se inspecciona el resultado y se ajusta el trabajo siguiente.",
  },
  {
    id: "q142",
    section: "2. Métodos y marcos de trabajo",
    kind: "multi",
    prompt:
      "¿Qué pares relacionan correctamente un evento de Scrum con su propósito? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text:
          "Daily Scrum y adaptar el plan de los Developers según el progreso hacia el objetivo del Sprint.",
        correct: true,
      },
      {
        id: "b",
        text:
          "Sprint Planning e inspeccionar el resultado del Sprint con los interesados.",
        correct: false,
      },
      {
        id: "c",
        text:
          "Sprint Review e inspeccionar el resultado del Sprint con los interesados.",
        correct: true,
      },
      {
        id: "d",
        text:
          "Sprint Retrospective y acordar por qué es valioso el Sprint que inicia.",
        correct: false,
      },
      {
        id: "e",
        text:
          "Sprint Retrospective e identificar mejoras en la calidad y efectividad del equipo.",
        correct: true,
      },
    ],
    explanation:
      "El Daily Scrum adapta el plan, el Sprint Review inspecciona el resultado con interesados y la retrospectiva busca mejoras. El Sprint Planning acuerda el propósito y plan del Sprint.",
  },
  {
    id: "q037",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Establece las condiciones de calidad que debe cumplir el incremento\"?",
    options: [
      {
        id: "a",
        text: "Requisito",
        correct: false,
      },
      {
        id: "b",
        text: "Definición de terminado",
        correct: true,
      },
      {
        id: "c",
        text: "Calidad",
        correct: false,
      },
      {
        id: "d",
        text: "Criterio de aceptación",
        correct: false,
      },
    ],
    explanation:
      "Es la definición de terminado, por ejemplo pruebas, revisión y documentación operativa. El glosario la distingue del criterio de aceptación, que es la condición pactada para que el cliente reciba un entregable.",
  },
  {
    id: "q143",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt:
      "¿Qué decisión corresponde a un producto mínimo viable para comprobar si los estudiantes pueden inscribirse sin asistencia?",
    options: [
      {
        id: "a",
        text:
          "Registrar la hipótesis y sus criterios de éxito en el caso de negocio.",
        correct: false,
      },
      {
        id: "b",
        text: "Mostrar el diseño de las pantallas al equipo técnico.",
        correct: false,
      },
      {
        id: "c",
        text:
          "Completar la integración de pagos para cumplir la definición de terminado.",
        correct: false,
      },
      {
        id: "d",
        text:
          "Abrir la inscripción a una facultad y medir cuántos estudiantes completan el trámite sin ayuda.",
        correct: true,
      },
    ],
    explanation:
      "El MVP reúne lo necesario para probar la hipótesis con usuarios reales. La apertura a una facultad permite medir el resultado del trámite en condiciones de uso.",
  },
  {
    id: "q038",
    section: "2. Métodos y marcos de trabajo",
    kind: "boolean",
    prompt:
      "Kanban es un marco de trabajo para abordar problemas complejos mediante ciclos breves de entrega e inspección.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Esa es la definición de Scrum. Kanban es un método para gestionar el flujo de trabajo haciendo visible cómo avanzan las tareas y estableciendo políticas explícitas.",
  },
  {
    id: "q039",
    section: "2. Métodos y marcos de trabajo",
    kind: "boolean",
    prompt: "En Kanban, el tablero por sí solo constituye todo el método.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. El glosario indica que debes observar los bloqueos y ajustar el sistema a partir de datos del flujo; el tablero por sí solo no constituye todo el método.",
  },
  {
    id: "q040",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Máximo de elementos que un equipo permite simultáneamente en una etapa\"?",
    options: [
      {
        id: "a",
        text: "Recurso",
        correct: false,
      },
      {
        id: "b",
        text: "Tiempo de ciclo",
        correct: false,
      },
      {
        id: "c",
        text: "Límite de trabajo en curso (WIP)",
        correct: true,
      },
      {
        id: "d",
        text: "Holgura libre",
        correct: false,
      },
    ],
    explanation:
      "Es el límite de trabajo en curso (WIP). Reduce la dispersión y hace visibles los cuellos de botella.",
  },
  {
    id: "q041",
    section: "2. Métodos y marcos de trabajo",
    kind: "boolean",
    prompt:
      "Si la columna \"en curso\" tiene límite de tres y está llena, termina o desbloquea una tarea antes de iniciar otra.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Así funciona el límite de trabajo en curso (WIP) según el ejemplo del glosario.",
  },
  {
    id: "q042",
    section: "2. Métodos y marcos de trabajo",
    kind: "single",
    prompt: "¿Qué es el tiempo de ciclo?",
    options: [
      {
        id: "a",
        text: "Tiempo que una actividad puede retrasarse sin mover la fecha prevista de finalización del proyecto",
        correct: false,
      },
      {
        id: "b",
        text: "Tiempo transcurrido desde que una tarea empieza a trabajarse hasta que termina",
        correct: true,
      },
      {
        id: "c",
        text: "Periodo de hasta un mes en el que el equipo busca un objetivo y produce un incremento utilizable",
        correct: false,
      },
      {
        id: "d",
        text: "Tiempo que una actividad puede retrasarse sin mover el inicio temprano de sus sucesoras",
        correct: false,
      },
    ],
    explanation:
      "El tiempo de ciclo va desde que una tarea empieza a trabajarse hasta que termina. Las otras opciones definen la holgura total, la holgura libre y el Sprint. Para interpretarlo, define siempre los puntos de inicio y fin.",
  },
  {
    id: "q043",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt: "\"Las inscripciones tardan tres días\" es un ejemplo de...",
    options: [
      {
        id: "a",
        text: "Una restricción",
        correct: false,
      },
      {
        id: "b",
        text: "Un supuesto",
        correct: false,
      },
      {
        id: "c",
        text: "Un problema",
        correct: true,
      },
      {
        id: "d",
        text: "Una necesidad",
        correct: false,
      },
    ],
    explanation:
      "El problema describe la situación actual que impide una mejora. La necesidad expresa la mejora deseada. El glosario usa esta frase como ejemplo útil para diseñar, frente a \"necesitamos una aplicación nueva\".",
  },
  {
    id: "q044",
    section: "3. Diseño y definición del proyecto",
    kind: "boolean",
    prompt: "La necesidad describe la situación actual que impide una mejora.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Esa es la definición de problema. La necesidad expresa una mejora deseada.",
  },
  {
    id: "q144",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "El padrón escolar existente satisface los requisitos de acceso y seguridad de la plataforma. ¿Qué decisión aplica el principio de simplicidad?",
    options: [
      {
        id: "a",
        text:
          "Crear un segundo padrón para separar los entregables del proyecto.",
        correct: false,
      },
      {
        id: "b",
        text:
          "Reutilizar el padrón existente y verificar que su operación se pueda mantener.",
        correct: true,
      },
      {
        id: "c",
        text: "Diseñar dos padrones y elegir uno después de terminar ambos.",
        correct: false,
      },
      {
        id: "d",
        text:
          "Crear un padrón nuevo con funciones adicionales para futuros proyectos.",
        correct: false,
      },
    ],
    explanation:
      "KISS busca la solución más sencilla que satisfaga los requisitos y las restricciones. Reutilizar una fuente adecuada evita duplicar datos y mantenimiento.",
  },
  {
    id: "q045",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Justificación de por qué conviene invertir en el proyecto\"?",
    options: [
      {
        id: "a",
        text: "Estudio de viabilidad",
        correct: false,
      },
      {
        id: "b",
        text: "Caso de negocio",
        correct: true,
      },
      {
        id: "c",
        text: "Análisis DAFO",
        correct: false,
      },
      {
        id: "d",
        text: "Acta de constitución",
        correct: false,
      },
    ],
    explanation:
      "El caso de negocio compara costes, beneficios, alternativas y riesgos para decidir si se autoriza o se detiene el proyecto. El estudio de viabilidad evalúa si la solución puede realizarse.",
  },
  {
    id: "q145",
    section: "3. Diseño y definición del proyecto",
    kind: "multi",
    prompt:
      "¿Qué afirmaciones sobre ROI, VAN y TIR son correctas? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text:
          "Una inversión de 100,000 con un beneficio neto de 20,000 tiene un ROI de 20%.",
        correct: true,
      },
      {
        id: "b",
        text:
          "El VAN suma el valor presente de los flujos netos, incluida la inversión inicial.",
        correct: true,
      },
      {
        id: "c",
        text: "La TIR es la tasa con la que el VAN alcanza su valor máximo.",
        correct: false,
      },
      {
        id: "d",
        text: "La TIR es la tasa que hace que el VAN sea cero.",
        correct: true,
      },
    ],
    explanation:
      "El ROI relaciona el beneficio neto con la inversión, el VAN descuenta los flujos y la TIR es la tasa que iguala el VAN a cero.",
  },
  {
    id: "q046",
    section: "3. Diseño y definición del proyecto",
    kind: "multi",
    prompt:
      "¿Qué considera un estudio de viabilidad? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Normativa",
        correct: true,
      },
      {
        id: "b",
        text: "Capacidad operativa",
        correct: true,
      },
      {
        id: "c",
        text: "Calendario",
        correct: true,
      },
      {
        id: "d",
        text: "Alternativas",
        correct: false,
      },
      {
        id: "e",
        text: "Beneficios",
        correct: false,
      },
      {
        id: "f",
        text: "Tecnología",
        correct: true,
      },
    ],
    explanation:
      "El estudio de viabilidad considera tecnología, recursos, calendario, presupuesto, normativa y capacidad operativa. Beneficios y alternativas son elementos que compara el caso de negocio.",
  },
  {
    id: "q047",
    section: "3. Diseño y definición del proyecto",
    kind: "boolean",
    prompt:
      "Una idea técnicamente posible puede, aun así, no ser viable para una fecha obligatoria o un presupuesto dado.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. El estudio de viabilidad evalúa si la solución puede realizarse en las condiciones disponibles, no solo si es técnicamente posible.",
  },
  {
    id: "q048",
    section: "3. Diseño y definición del proyecto",
    kind: "multi",
    prompt:
      "¿Qué elementos internos ordena el análisis DAFO? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Amenazas",
        correct: false,
      },
      {
        id: "b",
        text: "Fortalezas",
        correct: true,
      },
      {
        id: "c",
        text: "Debilidades",
        correct: true,
      },
      {
        id: "d",
        text: "Oportunidades",
        correct: false,
      },
    ],
    explanation:
      "En el DAFO, debilidades y fortalezas son internas; amenazas y oportunidades son externas.",
  },
  {
    id: "q049",
    section: "3. Diseño y definición del proyecto",
    kind: "boolean",
    prompt:
      "Una dependencia de un proveedor externo puede aparecer en un análisis DAFO como amenaza si compromete la fecha de entrega.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Es el ejemplo del glosario. Las amenazas son condiciones externas.",
  },
  {
    id: "q050",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "Disponer de una API de pagos, condición que se considera cierta mientras no se confirme, es un ejemplo de...",
    options: [
      {
        id: "a",
        text: "Supuesto",
        correct: true,
      },
      {
        id: "b",
        text: "Restricción",
        correct: false,
      },
      {
        id: "c",
        text: "Requisito",
        correct: false,
      },
      {
        id: "d",
        text: "Riesgo",
        correct: false,
      },
    ],
    explanation:
      "Un supuesto es una condición considerada cierta mientras no se confirme. La restricción limita las opciones.",
  },
  {
    id: "q051",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt: "Una fecha legal o un presupuesto máximo son ejemplos de...",
    options: [
      {
        id: "a",
        text: "Exclusión del alcance",
        correct: false,
      },
      {
        id: "b",
        text: "Restricción",
        correct: true,
      },
      {
        id: "c",
        text: "Supuesto",
        correct: false,
      },
      {
        id: "d",
        text: "Criterio de éxito",
        correct: false,
      },
    ],
    explanation:
      "Una restricción limita las opciones, como una fecha legal o un presupuesto máximo. Registra supuestos y restricciones para revisar el plan cuando cambien.",
  },
  {
    id: "q052",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Documento que autoriza formalmente el proyecto y fija su propósito, objetivos, responsable y condiciones principales\"?",
    options: [
      {
        id: "a",
        text: "Plan de gestión del proyecto",
        correct: false,
      },
      {
        id: "b",
        text: "Caso de negocio",
        correct: false,
      },
      {
        id: "c",
        text: "Acta de constitución",
        correct: true,
      },
      {
        id: "d",
        text: "Línea base del alcance",
        correct: false,
      },
    ],
    explanation:
      "Es el acta de constitución. Da al director de proyecto un punto de partida para negociar recursos, pero no sustituye el plan detallado.",
  },
  {
    id: "q053",
    section: "3. Diseño y definición del proyecto",
    kind: "boolean",
    prompt: "El acta de constitución sustituye el plan detallado del proyecto.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. El glosario indica que el acta de constitución no sustituye el plan detallado; es un punto de partida para negociar recursos y definir el trabajo posterior.",
  },
  {
    id: "q054",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "Responder en menos de dos segundos bajo una carga acordada es un ejemplo de...",
    options: [
      {
        id: "a",
        text: "Exclusión del alcance",
        correct: false,
      },
      {
        id: "b",
        text: "Requisito no funcional",
        correct: true,
      },
      {
        id: "c",
        text: "Requisito funcional",
        correct: false,
      },
      {
        id: "d",
        text: "Supuesto",
        correct: false,
      },
    ],
    explanation:
      "El glosario lo usa como ejemplo de requisito no funcional. Emitir un comprobante de inscripción es su ejemplo de requisito funcional.",
  },
  {
    id: "q055",
    section: "3. Diseño y definición del proyecto",
    kind: "boolean",
    prompt:
      "Emitir un comprobante de inscripción es un ejemplo de requisito funcional.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Un requisito es una condición que el producto o el proyecto debe cumplir y conviene verificarlo con un criterio observable.",
  },
  {
    id: "q146",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "El proveedor debe capacitar al personal antes de entregar la plataforma. ¿Qué tipo de requisito describe esa condición de ejecución?",
    options: [
      {
        id: "a",
        text: "De producto",
        correct: false,
      },
      {
        id: "b",
        text: "De negocio",
        correct: false,
      },
      {
        id: "c",
        text: "De proyecto",
        correct: true,
      },
      {
        id: "d",
        text: "De calidad",
        correct: false,
      },
    ],
    explanation:
      "Es un requisito de proyecto porque establece una condición sobre cómo se ejecuta o entrega el trabajo.",
  },
  {
    id: "q147",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "Cada interesado recibe 100 puntos para repartirlos entre los requisitos candidatos. ¿Para qué sirve ese límite?",
    options: [
      {
        id: "a",
        text: "Estimar cuántas horas requiere cada requisito.",
        correct: false,
      },
      {
        id: "b",
        text: "Decidir cuáles serán los criterios de aceptación.",
        correct: false,
      },
      {
        id: "c",
        text: "Calcular el porcentaje del presupuesto asignado al producto.",
        correct: false,
      },
      {
        id: "d",
        text:
          "Expresar preferencias relativas para discutir qué requisitos implementar primero.",
        correct: true,
      },
    ],
    explanation:
      "Un presupuesto ficticio limitado obliga a elegir prioridades. Antes de decidir el alcance, considera también el coste, las dependencias y los requisitos obligatorios.",
  },
  {
    id: "q056",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt: "¿Qué describe el alcance del producto?",
    options: [
      {
        id: "a",
        text: "El trabajo necesario para producirlo y aceptarlo",
        correct: false,
      },
      {
        id: "b",
        text: "La versión aprobada de lo que se entregará y del trabajo necesario",
        correct: false,
      },
      {
        id: "c",
        text: "Las características y funciones de lo que se entrega",
        correct: true,
      },
      {
        id: "d",
        text: "El trabajo o función que se declara fuera del acuerdo",
        correct: false,
      },
    ],
    explanation:
      "El alcance del producto describe características y funciones. El trabajo para producirlo y aceptarlo es el alcance del proyecto; lo declarado fuera del acuerdo es una exclusión; la versión aprobada es la línea base del alcance.",
  },
  {
    id: "q057",
    section: "3. Diseño y definición del proyecto",
    kind: "boolean",
    prompt:
      "La formación al personal puede ser trabajo del alcance del proyecto aunque no sea una función de la plataforma.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. El alcance del proyecto comprende el trabajo necesario para producir y aceptar el resultado, no solo sus funciones.",
  },
  {
    id: "q058",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Trabajo o función que se declara fuera del acuerdo\"?",
    options: [
      {
        id: "a",
        text: "Exclusión del alcance",
        correct: true,
      },
      {
        id: "b",
        text: "Restricción",
        correct: false,
      },
      {
        id: "c",
        text: "Ampliación gradual del alcance (scope creep)",
        correct: false,
      },
      {
        id: "d",
        text: "Gold plating",
        correct: false,
      },
    ],
    explanation:
      "Es la exclusión del alcance. Por ejemplo, declarar que la primera versión no incluye una aplicación móvil reduce interpretaciones distintas.",
  },
  {
    id: "q059",
    section: "3. Diseño y definición del proyecto",
    kind: "multi",
    prompt:
      "¿Qué características tiene un objetivo SMART? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Específico",
        correct: true,
      },
      {
        id: "b",
        text: "Alcanzable",
        correct: true,
      },
      {
        id: "c",
        text: "Pactado",
        correct: false,
      },
      {
        id: "d",
        text: "Aprobado",
        correct: false,
      },
      {
        id: "e",
        text: "Limitado en el tiempo",
        correct: true,
      },
      {
        id: "f",
        text: "Medible",
        correct: true,
      },
    ],
    explanation:
      "Un objetivo SMART es específico, medible, alcanzable, relevante y limitado en el tiempo. \"Pactado\" corresponde al criterio de aceptación y \"aprobado\" a las líneas base.",
  },
  {
    id: "q060",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Condición pactada para que un entregable sea recibido por quien corresponde\"?",
    options: [
      {
        id: "a",
        text: "Criterio de éxito",
        correct: false,
      },
      {
        id: "b",
        text: "Definición de terminado",
        correct: false,
      },
      {
        id: "c",
        text: "Requisito",
        correct: false,
      },
      {
        id: "d",
        text: "Criterio de aceptación",
        correct: true,
      },
    ],
    explanation:
      "Es el criterio de aceptación. El criterio de éxito juzga el proyecto completo y la definición de terminado es interna del equipo.",
  },
  {
    id: "q061",
    section: "3. Diseño y definición del proyecto",
    kind: "boolean",
    prompt:
      "El criterio de aceptación equivale a la definición interna de terminado que usa el equipo.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. El glosario pide distinguir la aceptación del cliente de la definición interna de terminado que usa el equipo.",
  },
  {
    id: "q062",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Versión aprobada de lo que se entregará y del trabajo necesario\"?",
    options: [
      {
        id: "a",
        text: "Línea base del alcance",
        correct: true,
      },
      {
        id: "b",
        text: "Línea base del cronograma y de costes",
        correct: false,
      },
      {
        id: "c",
        text: "Alcance del proyecto",
        correct: false,
      },
      {
        id: "d",
        text: "Acta de constitución",
        correct: false,
      },
    ],
    explanation:
      "Es la línea base del alcance. Permite comparar solicitudes nuevas con el acuerdo inicial; la línea base del cronograma y de costes aprueba fechas y presupuesto.",
  },
  {
    id: "q063",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Crecimiento del trabajo por peticiones sucesivas que no se evalúan en conjunto\"?",
    options: [
      {
        id: "a",
        text: "Solicitud de cambio",
        correct: false,
      },
      {
        id: "b",
        text: "Ampliación gradual del alcance (scope creep)",
        correct: true,
      },
      {
        id: "c",
        text: "Gold plating",
        correct: false,
      },
      {
        id: "d",
        text: "Exclusión del alcance",
        correct: false,
      },
    ],
    explanation:
      "Es la ampliación gradual del alcance. Cada cambio parece pequeño, pero su suma consume plazo y presupuesto. El gold plating añade características no solicitadas por iniciativa propia.",
  },
  {
    id: "q064",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Adición de características no solicitadas ni aprobadas con la intención de \"mejorar\" el resultado\"?",
    options: [
      {
        id: "a",
        text: "Gold plating",
        correct: true,
      },
      {
        id: "b",
        text: "Incremento",
        correct: false,
      },
      {
        id: "c",
        text: "Ampliación gradual del alcance (scope creep)",
        correct: false,
      },
      {
        id: "d",
        text: "Solicitud de cambio",
        correct: false,
      },
    ],
    explanation:
      "Es el gold plating. Puede distraer recursos de lo acordado y complicar la aceptación.",
  },
  {
    id: "q065",
    section: "3. Diseño y definición del proyecto",
    kind: "boolean",
    prompt:
      "El gold plating es el crecimiento del trabajo por peticiones sucesivas que no se evalúan en conjunto.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Esa es la ampliación gradual del alcance (scope creep). El gold plating es la adición de características no solicitadas ni aprobadas.",
  },
  {
    id: "q066",
    section: "3. Diseño y definición del proyecto",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Encuentro en el que patrocinador, equipo e interesados principales comparten objetivos, límites, responsabilidades y forma de colaboración\"?",
    options: [
      {
        id: "a",
        text: "Acta de constitución",
        correct: false,
      },
      {
        id: "b",
        text: "Reunión de lanzamiento (kickoff)",
        correct: true,
      },
      {
        id: "c",
        text: "Comunicación del proyecto",
        correct: false,
      },
      {
        id: "d",
        text: "Negociación",
        correct: false,
      },
    ],
    explanation:
      "Es la reunión de lanzamiento. Un buen lanzamiento termina con acuerdos y próximos pasos claros, no solo con una presentación del calendario.",
  },
  {
    id: "q067",
    section: "4. Planificación del trabajo",
    kind: "boolean",
    prompt:
      "El plan de gestión del proyecto es la referencia de gestión, mientras que el cronograma solo representa una parte.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. El plan integra cómo se ejecutará, supervisará, modificará y cerrará el proyecto, y puede reunir planes de alcance, cronograma, costes, comunicaciones, calidad y riesgos.",
  },
  {
    id: "q068",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Documento que integra cómo se ejecutará, supervisará, modificará y cerrará el proyecto\"?",
    options: [
      {
        id: "a",
        text: "Caso de negocio",
        correct: false,
      },
      {
        id: "b",
        text: "Cronograma",
        correct: false,
      },
      {
        id: "c",
        text: "Acta de constitución",
        correct: false,
      },
      {
        id: "d",
        text: "Plan de gestión del proyecto",
        correct: true,
      },
    ],
    explanation:
      "Es el plan de gestión del proyecto. El acta autoriza el proyecto, el caso de negocio justifica la inversión y el cronograma es solo una parte del plan.",
  },
  {
    id: "q069",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Descomposición jerárquica del alcance en entregables y componentes gestionables\"?",
    options: [
      {
        id: "a",
        text: "Estructura de desglose del trabajo (EDT)",
        correct: true,
      },
      {
        id: "b",
        text: "Diagrama de red",
        correct: false,
      },
      {
        id: "c",
        text: "Cronograma",
        correct: false,
      },
      {
        id: "d",
        text: "Paquete de trabajo",
        correct: false,
      },
    ],
    explanation:
      "Es la EDT. Permite comprobar que el trabajo necesario está incluido antes de estimar actividades. El paquete de trabajo es un componente de la EDT.",
  },
  {
    id: "q070",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "¿Cuál de estos elementos es un paquete de trabajo bien delimitado, según el ejemplo del glosario?",
    options: [
      {
        id: "a",
        text: "Pruebas de carga de la inscripción",
        correct: true,
      },
      {
        id: "b",
        text: "Preparar datos",
        correct: false,
      },
      {
        id: "c",
        text: "Aprobación del diseño",
        correct: false,
      },
      {
        id: "d",
        text: "Hacer la plataforma",
        correct: false,
      },
    ],
    explanation:
      "\"Pruebas de carga de la inscripción\" es lo bastante concreto para estimar coste, esfuerzo, duración y responsable. \"Hacer la plataforma\" es demasiado amplio, \"preparar datos\" es una actividad y la aprobación del diseño es un hito.",
  },
  {
    id: "q071",
    section: "4. Planificación del trabajo",
    kind: "boolean",
    prompt:
      "La actividad es un componente de la EDT lo bastante concreto como para estimar coste, esfuerzo, duración y responsable.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Esa es la definición de paquete de trabajo. La actividad es una acción necesaria para completar un paquete de trabajo y se secuencia en el cronograma.",
  },
  {
    id: "q072",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Punto de control sin duración que marca un acontecimiento importante\"?",
    options: [
      {
        id: "a",
        text: "Paquete de trabajo",
        correct: false,
      },
      {
        id: "b",
        text: "Hito",
        correct: true,
      },
      {
        id: "c",
        text: "Actividad",
        correct: false,
      },
      {
        id: "d",
        text: "Entregable",
        correct: false,
      },
    ],
    explanation:
      "Es el hito, como la aprobación del diseño. Ayuda a revisar avance, pero no representa por sí mismo el trabajo que lo hace posible.",
  },
  {
    id: "q073",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Relación que condiciona cuándo puede empezar o terminar una actividad\"?",
    options: [
      {
        id: "a",
        text: "Holgura libre",
        correct: false,
      },
      {
        id: "b",
        text: "Restricción",
        correct: false,
      },
      {
        id: "c",
        text: "Diagrama de red",
        correct: false,
      },
      {
        id: "d",
        text: "Dependencia",
        correct: true,
      },
    ],
    explanation:
      "Es la dependencia. Por ejemplo, la prueba de pagos depende de contar con una integración funcional. El diagrama de red representa actividades y dependencias, pero no es la relación misma.",
  },
  {
    id: "q148",
    section: "4. Planificación del trabajo",
    kind: "multi",
    prompt:
      "¿Qué relaciones de dependencia coinciden con las condiciones indicadas? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Fin a inicio: B puede empezar cuando termina A.",
        correct: true,
      },
      {
        id: "b",
        text: "Inicio a inicio: B puede terminar cuando inicia A.",
        correct: false,
      },
      {
        id: "c",
        text: "Fin a fin: B puede terminar cuando termina A.",
        correct: true,
      },
      {
        id: "d",
        text: "Inicio a fin: B puede terminar cuando inicia A.",
        correct: true,
      },
    ],
    explanation:
      "El primer término indica el evento de la actividad predecesora A y el segundo, el de la sucesora B. Inicio a inicio vincula el inicio de ambas.",
  },
  {
    id: "q074",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "Una tarea requiere 40 horas de trabajo de una persona. ¿Qué mide esa cifra?",
    options: [
      {
        id: "a",
        text: "La holgura total",
        correct: false,
      },
      {
        id: "b",
        text: "El tiempo de ciclo",
        correct: false,
      },
      {
        id: "c",
        text: "El esfuerzo",
        correct: true,
      },
      {
        id: "d",
        text: "La duración",
        correct: false,
      },
    ],
    explanation:
      "El esfuerzo mide trabajo requerido. La duración mide tiempo de calendario entre inicio y fin: esa tarea puede durar cinco días, o más si espera una aprobación externa.",
  },
  {
    id: "q075",
    section: "4. Planificación del trabajo",
    kind: "boolean",
    prompt:
      "La duración mide el trabajo requerido, por ejemplo 40 horas de una persona.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Eso es el esfuerzo. La duración mide tiempo de calendario entre inicio y fin.",
  },
  {
    id: "q076",
    section: "4. Planificación del trabajo",
    kind: "multi",
    prompt:
      "¿Cuáles de estos cuentan como recurso, según el glosario? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Un material",
        correct: true,
      },
      {
        id: "b",
        text: "Un equipo",
        correct: true,
      },
      {
        id: "c",
        text: "Un hito",
        correct: false,
      },
      {
        id: "d",
        text: "Un supuesto",
        correct: false,
      },
      {
        id: "e",
        text: "Un servicio",
        correct: true,
      },
      {
        id: "f",
        text: "Una persona",
        correct: true,
      },
    ],
    explanation:
      "Un recurso es una persona, equipo, material o servicio necesario para realizar una actividad. El hito es un punto de control y el supuesto una condición considerada cierta.",
  },
  {
    id: "q077",
    section: "4. Planificación del trabajo",
    kind: "boolean",
    prompt:
      "Asignar dos personas a una actividad siempre reduce su tiempo a la mitad.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. El glosario advierte que no siempre ocurre, especialmente si deben coordinarse o esperar el mismo sistema externo.",
  },
  {
    id: "q149",
    section: "4. Planificación del trabajo",
    kind: "multi",
    prompt:
      "¿Qué pares describen correctamente las leyes de Brooks y de Parkinson? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Brooks: el trabajo tiende a ocupar todo el tiempo disponible.",
        correct: false,
      },
      {
        id: "b",
        text:
          "Parkinson: el trabajo tiende a ocupar todo el tiempo disponible.",
        correct: true,
      },
      {
        id: "c",
        text:
          "Brooks: incorporar personas a un proyecto de software atrasado puede retrasarlo más.",
        correct: true,
      },
      {
        id: "d",
        text:
          "Parkinson: incorporar personas a un proyecto de software atrasado puede retrasarlo más.",
        correct: false,
      },
    ],
    explanation:
      "Brooks advierte del coste de aprendizaje y coordinación al incorporar personas. Parkinson describe cómo el trabajo tiende a ocupar el plazo que le asignas.",
  },
  {
    id: "q078",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Predicción razonada del esfuerzo, duración o coste basada en información disponible\"?",
    options: [
      {
        id: "a",
        text: "Supuesto",
        correct: false,
      },
      {
        id: "b",
        text: "Presupuesto",
        correct: false,
      },
      {
        id: "c",
        text: "Línea base del cronograma y de costes",
        correct: false,
      },
      {
        id: "d",
        text: "Estimación",
        correct: true,
      },
    ],
    explanation:
      "Es la estimación. Mejora cuando descompones el trabajo y revisas datos de proyectos comparables, y debe exponer supuestos y un margen de incertidumbre.",
  },
  {
    id: "q150",
    section: "4. Planificación del trabajo",
    kind: "multi",
    prompt:
      "Selecciona las correspondencias correctas entre técnica de estimación y procedimiento.",
    options: [
      {
        id: "a",
        text:
          "Análoga: ajustar el esfuerzo de una migración previa comparable.",
        correct: true,
      },
      {
        id: "b",
        text:
          "Paramétrica: multiplicar los registros por el tiempo medio de validación por registro.",
        correct: true,
      },
      {
        id: "c",
        text:
          "Ascendente: tomar como total el esfuerzo de un proyecto anterior parecido.",
        correct: false,
      },
      {
        id: "d",
        text:
          "Ascendente: estimar por separado la preparación de datos, las pruebas y el análisis, y sumar los esfuerzos.",
        correct: true,
      },
    ],
    explanation:
      "La estimación análoga parte de un caso comparable, la paramétrica usa una relación medible y la ascendente agrega estimaciones de componentes.",
  },
  {
    id: "q079",
    section: "4. Planificación del trabajo",
    kind: "multi",
    prompt:
      "Selecciona los pares que coinciden con el glosario. Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Reserva: cubre incertidumbres identificadas o decisiones de gestión",
        correct: true,
      },
      {
        id: "b",
        text: "Reserva: autoriza el gasto previsto para el proyecto",
        correct: false,
      },
      {
        id: "c",
        text: "Presupuesto: gasto incurrido para realizar el trabajo hasta la fecha de corte",
        correct: false,
      },
      {
        id: "d",
        text: "Presupuesto: autoriza el gasto previsto para el proyecto",
        correct: true,
      },
    ],
    explanation:
      "El presupuesto autoriza el gasto previsto y la reserva cubre incertidumbres o decisiones de gestión. El gasto incurrido hasta la fecha de corte es el coste real (AC).",
  },
  {
    id: "q080",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Representación de actividades, secuencia, fechas e hitos\"?",
    options: [
      {
        id: "a",
        text: "Plan de gestión del proyecto",
        correct: false,
      },
      {
        id: "b",
        text: "Estructura de desglose del trabajo (EDT)",
        correct: false,
      },
      {
        id: "c",
        text: "Cronograma",
        correct: true,
      },
      {
        id: "d",
        text: "Diagrama de Gantt",
        correct: false,
      },
    ],
    explanation:
      "Es el cronograma. El diagrama de Gantt es una vista del cronograma en barras y la EDT descompone el alcance en entregables.",
  },
  {
    id: "q081",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt: "¿Qué es un diagrama de Gantt?",
    options: [
      {
        id: "a",
        text: "Una representación de actividades y sus dependencias",
        correct: false,
      },
      {
        id: "b",
        text: "Una vista del cronograma en barras sobre una escala temporal",
        correct: true,
      },
      {
        id: "c",
        text: "Un gráfico de cantidades acumuladas, como PV, EV y AC, a lo largo del tiempo",
        correct: false,
      },
      {
        id: "d",
        text: "Una descomposición jerárquica del alcance en entregables y componentes gestionables",
        correct: false,
      },
    ],
    explanation:
      "El diagrama de Gantt muestra el cronograma en barras. Las otras opciones definen el diagrama de red, la curva S y la EDT. Conviene apoyarlo en dependencias reales.",
  },
  {
    id: "q082",
    section: "4. Planificación del trabajo",
    kind: "boolean",
    prompt:
      "El diagrama de Gantt es la representación de actividades y dependencias que permite calcular el camino crítico.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Ese es el diagrama de red. El diagrama de Gantt es una vista del cronograma en barras sobre una escala temporal.",
  },
  {
    id: "q083",
    section: "4. Planificación del trabajo",
    kind: "multi",
    prompt:
      "¿Qué permite calcular el diagrama de red? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Fechas tempranas y tardías",
        correct: true,
      },
      {
        id: "b",
        text: "Secuencias",
        correct: true,
      },
      {
        id: "c",
        text: "El tiempo de ciclo",
        correct: false,
      },
      {
        id: "d",
        text: "El camino crítico",
        correct: true,
      },
      {
        id: "e",
        text: "El valor ganado",
        correct: false,
      },
    ],
    explanation:
      "El diagrama de red permite calcular secuencias, fechas tempranas y tardías, y el camino crítico. El valor ganado pertenece a la EVM y el tiempo de ciclo a la medición del flujo en Kanban.",
  },
  {
    id: "q084",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Técnica que identifica la secuencia de actividades que determina la duración mínima calculada del proyecto\"?",
    options: [
      {
        id: "a",
        text: "Gestión del valor ganado (EVM)",
        correct: false,
      },
      {
        id: "b",
        text: "Diagrama de Gantt",
        correct: false,
      },
      {
        id: "c",
        text: "Método del camino crítico (CPM)",
        correct: true,
      },
      {
        id: "d",
        text: "Holgura total",
        correct: false,
      },
    ],
    explanation:
      "Es el método del camino crítico. Vigila esas actividades porque su demora puede mover la fecha final.",
  },
  {
    id: "q085",
    section: "4. Planificación del trabajo",
    kind: "boolean",
    prompt: "El camino crítico puede cambiar al actualizar el cronograma.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. El CPM calcula la secuencia bajo las dependencias y duraciones previstas; si estas cambian, el camino también puede cambiar.",
  },
  {
    id: "q151",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "Una actividad puede durar 2 días en el escenario optimista, 4 en el más probable y 10 en el pesimista. ¿Cuál es la duración esperada con PERT clásico?",
    options: [
      {
        id: "a",
        text: "4.00 días",
        correct: false,
      },
      {
        id: "b",
        text: "5.33 días",
        correct: false,
      },
      {
        id: "c",
        text: "4.67 días",
        correct: true,
      },
      {
        id: "d",
        text: "5.00 días",
        correct: false,
      },
    ],
    explanation:
      "PERT clásico pondera cuatro veces la duración más probable. El cálculo es (2 + 4 × 4 + 10) / 6 ≈ 4.67 días.",
  },
  {
    id: "q086",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt: "¿Qué es la holgura total?",
    options: [
      {
        id: "a",
        text: "Tiempo que una actividad puede retrasarse sin mover el inicio temprano de sus sucesoras",
        correct: false,
      },
      {
        id: "b",
        text: "Tiempo de calendario entre inicio y fin",
        correct: false,
      },
      {
        id: "c",
        text: "Tiempo que una actividad puede retrasarse sin mover la fecha prevista de finalización del proyecto",
        correct: true,
      },
      {
        id: "d",
        text: "Tiempo transcurrido desde que una tarea empieza a trabajarse hasta que termina",
        correct: false,
      },
    ],
    explanation:
      "La holgura total se mide respecto de la finalización del proyecto. Las otras opciones definen la holgura libre, el tiempo de ciclo y la duración. Una holgura nula suele indicar una actividad crítica.",
  },
  {
    id: "q087",
    section: "4. Planificación del trabajo",
    kind: "single",
    prompt:
      "Una prueba puede posponerse dos días sin retrasar la siguiente tarea. ¿Qué representan esos dos días, según el glosario?",
    options: [
      {
        id: "a",
        text: "Su holgura total",
        correct: false,
      },
      {
        id: "b",
        text: "Su holgura libre",
        correct: true,
      },
      {
        id: "c",
        text: "Su tiempo de ciclo",
        correct: false,
      },
      {
        id: "d",
        text: "Su duración",
        correct: false,
      },
    ],
    explanation:
      "Es el ejemplo de holgura libre del glosario: el tiempo que una actividad puede retrasarse sin mover el inicio temprano de sus sucesoras.",
  },
  {
    id: "q088",
    section: "4. Planificación del trabajo",
    kind: "boolean",
    prompt: "La holgura libre es más estricta que la holgura total.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. La holgura libre protege el inicio temprano de las sucesoras; la total, solo la fecha de finalización del proyecto.",
  },
  {
    id: "q089",
    section: "4. Planificación del trabajo",
    kind: "boolean",
    prompt:
      "La línea base del cronograma y de costes es la versión aprobada de lo que se entregará y del trabajo necesario.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Esa es la línea base del alcance. La línea base del cronograma y de costes son las versiones aprobadas de las fechas y del presupuesto distribuido en el tiempo.",
  },
  {
    id: "q090",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Intercambio de información para que cada interesado pueda decidir o actuar\"?",
    options: [
      {
        id: "a",
        text: "Comunicación del proyecto",
        correct: true,
      },
      {
        id: "b",
        text: "Negociación",
        correct: false,
      },
      {
        id: "c",
        text: "Rendición de cuentas",
        correct: false,
      },
      {
        id: "d",
        text: "Reunión de lanzamiento (kickoff)",
        correct: false,
      },
    ],
    explanation:
      "Es la comunicación del proyecto. Define quién recibe qué dato, cuándo y por qué canal.",
  },
  {
    id: "q152",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "El equipo acuerda quién envía el reporte semanal al patrocinador y cómo escalar una caída del servicio. ¿En qué documento debe quedar el acuerdo?",
    options: [
      {
        id: "a",
        text: "Acta de constitución",
        correct: false,
      },
      {
        id: "b",
        text: "Plan de comunicación",
        correct: true,
      },
      {
        id: "c",
        text: "Registro de interesados",
        correct: false,
      },
      {
        id: "d",
        text: "Registro de riesgos",
        correct: false,
      },
    ],
    explanation:
      "El plan de comunicación especifica qué información se comparte, quién la envía, quién la recibe, por qué canal y con qué frecuencia. También puede incluir cómo escalar una incidencia urgente.",
  },
  {
    id: "q091",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "boolean",
    prompt:
      "Subcontratar una prueba de seguridad transfiere al proveedor la responsabilidad de integrar su resultado en el proyecto.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. El glosario indica que la subcontratación no transfiere esa responsabilidad. Requiere acordar entregables, criterios de aceptación, plazos, dependencias y responsabilidades.",
  },
  {
    id: "q092",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "multi",
    prompt:
      "¿Qué requiere acordar la subcontratación? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Dependencias",
        correct: true,
      },
      {
        id: "b",
        text: "Límites de trabajo en curso",
        correct: false,
      },
      {
        id: "c",
        text: "Entregables",
        correct: true,
      },
      {
        id: "d",
        text: "Holgura libre",
        correct: false,
      },
      {
        id: "e",
        text: "Criterios de aceptación",
        correct: true,
      },
      {
        id: "f",
        text: "Plazos",
        correct: true,
      },
    ],
    explanation:
      "La subcontratación requiere acordar entregables, criterios de aceptación, plazos, dependencias y responsabilidades. Los límites WIP pertenecen a Kanban y la holgura libre al cálculo del cronograma.",
  },
  {
    id: "q153",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "Dos proveedores ofrecen el mismo servicio. Uno cobra horas y materiales a tarifas acordadas. El otro cotiza un importe por un alcance definido. ¿Qué modalidades ofrecen, respectivamente?",
    options: [
      {
        id: "a",
        text: "Ambos ofrecen precio fijo.",
        correct: false,
      },
      {
        id: "b",
        text: "Precio fijo y tiempo y materiales.",
        correct: false,
      },
      {
        id: "c",
        text: "Ambos ofrecen tiempo y materiales.",
        correct: false,
      },
      {
        id: "d",
        text: "Tiempo y materiales y precio fijo.",
        correct: true,
      },
    ],
    explanation:
      "Tiempo y materiales factura las horas y materiales según las tarifas acordadas. El precio fijo establece un importe por el alcance pactado.",
  },
  {
    id: "q093",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Grado en que los entregables cumplen requisitos y son aptos para su uso previsto\"?",
    options: [
      {
        id: "a",
        text: "Requisito",
        correct: false,
      },
      {
        id: "b",
        text: "Calidad",
        correct: true,
      },
      {
        id: "c",
        text: "Control de calidad",
        correct: false,
      },
      {
        id: "d",
        text: "Criterio de aceptación",
        correct: false,
      },
    ],
    explanation:
      "Es la calidad. El control de calidad inspecciona entregables concretos y el criterio de aceptación es una condición pactada para recibirlos.",
  },
  {
    id: "q094",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "multi",
    prompt:
      "Selecciona los pares que coinciden con el glosario. Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Aseguramiento de calidad: examina y mejora el proceso usado para producir el resultado",
        correct: true,
      },
      {
        id: "b",
        text: "Control de calidad: inspecciona entregables concretos mediante pruebas o revisiones",
        correct: true,
      },
      {
        id: "c",
        text: "Aseguramiento de calidad: inspecciona entregables concretos mediante pruebas o revisiones",
        correct: false,
      },
      {
        id: "d",
        text: "Control de calidad: examina y mejora el proceso usado para producir el resultado",
        correct: false,
      },
    ],
    explanation:
      "El aseguramiento trabaja sobre el proceso; el control, sobre entregables concretos. Las opciones incorrectas los intercambian.",
  },
  {
    id: "q095",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "Probar si una inscripción produce el comprobante correcto es un ejemplo de...",
    options: [
      {
        id: "a",
        text: "Aseguramiento de calidad",
        correct: false,
      },
      {
        id: "b",
        text: "Seguimiento y control",
        correct: false,
      },
      {
        id: "c",
        text: "Criterio de aceptación",
        correct: false,
      },
      {
        id: "d",
        text: "Control de calidad",
        correct: true,
      },
    ],
    explanation:
      "El control de calidad inspecciona entregables concretos mediante pruebas. Revisar el procedimiento de desarrollo sería aseguramiento.",
  },
  {
    id: "q096",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt: "\"El proveedor podría retrasar la API de pagos\" es...",
    options: [
      {
        id: "a",
        text: "Un riesgo",
        correct: true,
      },
      {
        id: "b",
        text: "Una incidencia o problema",
        correct: false,
      },
      {
        id: "c",
        text: "Un supuesto",
        correct: false,
      },
      {
        id: "d",
        text: "Una restricción",
        correct: false,
      },
    ],
    explanation:
      "Es un riesgo: un evento incierto que, si ocurre, afecta a los objetivos. \"La API se retrasó\" ya sería un problema.",
  },
  {
    id: "q097",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "boolean",
    prompt: "Un riesgo puede representar una amenaza o una oportunidad.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. El riesgo es un evento o condición incierta que, si ocurre, afecta a los objetivos, para bien o para mal.",
  },
  {
    id: "q098",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "boolean",
    prompt: "El impacto estima qué tan posible es que ocurra un riesgo.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Eso es la probabilidad. El impacto describe el efecto del riesgo sobre objetivos como plazo, coste o calidad.",
  },
  {
    id: "q154",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "Ya tienes un registro de riesgos y quieres distinguir cuáles atender primero según la posibilidad de que ocurran y sus consecuencias. ¿Qué herramienta usas?",
    options: [
      {
        id: "a",
        text: "La matriz de probabilidad e impacto",
        correct: true,
      },
      {
        id: "b",
        text: "La matriz de poder e interés",
        correct: false,
      },
      {
        id: "c",
        text: "El control de cambios",
        correct: false,
      },
      {
        id: "d",
        text: "La curva S",
        correct: false,
      },
    ],
    explanation:
      "La matriz de probabilidad e impacto usa escalas acordadas para priorizar los riesgos según su probabilidad y el efecto que tendrían.",
  },
  {
    id: "q099",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "multi",
    prompt: "¿Qué reúne el registro de riesgos? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Hitos",
        correct: false,
      },
      {
        id: "b",
        text: "Respuestas",
        correct: true,
      },
      {
        id: "c",
        text: "Probabilidad",
        correct: true,
      },
      {
        id: "d",
        text: "Responsables",
        correct: true,
      },
      {
        id: "e",
        text: "Criterios de aceptación",
        correct: false,
      },
      {
        id: "f",
        text: "Causas",
        correct: true,
      },
    ],
    explanation:
      "El registro de riesgos reúne riesgos identificados, causas, probabilidad, impacto, responsables y respuestas. Un riesgo sin responsable ni respuesta difícilmente se gestiona.",
  },
  {
    id: "q100",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Decisión sobre cómo tratar un riesgo\"?",
    options: [
      {
        id: "a",
        text: "Respuesta al riesgo",
        correct: true,
      },
      {
        id: "b",
        text: "Acción correctiva",
        correct: false,
      },
      {
        id: "c",
        text: "Registro de riesgos",
        correct: false,
      },
      {
        id: "d",
        text: "Solicitud de cambio",
        correct: false,
      },
    ],
    explanation:
      "Es la respuesta al riesgo, por ejemplo preparar una integración simulada ante un posible retraso de la API. Debe tener responsable y momento de activación. La acción correctiva actúa sobre una desviación ya ocurrida.",
  },
  {
    id: "q155",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "multi",
    prompt:
      "¿Qué acciones están asociadas con la estrategia correcta ante una amenaza? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text:
          "Evitar: cambiar el plan para prescindir de una API que será retirada.",
        correct: true,
      },
      {
        id: "b",
        text:
          "Transferir: contratar un seguro que cubra una pérdida específica.",
        correct: true,
      },
      {
        id: "c",
        text: "Mitigar: registrar la amenaza y asumir sus efectos si ocurre.",
        correct: false,
      },
      {
        id: "d",
        text:
          "Mitigar: preparar una integración simulada para reducir el efecto de un posible retraso.",
        correct: true,
      },
    ],
    explanation:
      "Evitar elimina la amenaza, transferir desplaza parte de su impacto a un tercero y mitigar reduce probabilidad o impacto. Asumir el efecto si ocurre corresponde a aceptar.",
  },
  {
    id: "q101",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "boolean",
    prompt: "La incidencia o problema se diferencia del riesgo por su certeza.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. La incidencia es una situación que ya ocurrió y requiere resolución; el riesgo todavía es incierto.",
  },
  {
    id: "q102",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "El proveedor comunica que la API no estará disponible esta semana. ¿Qué tienes ahora, según el glosario?",
    options: [
      {
        id: "a",
        text: "Un riesgo",
        correct: false,
      },
      {
        id: "b",
        text: "Una lección aprendida",
        correct: false,
      },
      {
        id: "c",
        text: "Una solicitud de cambio",
        correct: false,
      },
      {
        id: "d",
        text: "Una incidencia o problema",
        correct: true,
      },
    ],
    explanation:
      "La situación ya ocurrió, así que es una incidencia o problema. Registra el problema, evalúa el efecto y ejecuta la respuesta correspondiente.",
  },
  {
    id: "q103",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "multi",
    prompt:
      "Selecciona los pares que coinciden con el glosario. Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Solicitud de cambio: analiza el impacto, decide si se aprueba y actualiza las líneas base",
        correct: false,
      },
      {
        id: "b",
        text: "Control de cambios: crecimiento del trabajo por peticiones sucesivas que no se evalúan en conjunto",
        correct: false,
      },
      {
        id: "c",
        text: "Solicitud de cambio: propone modificar alcance, fechas, costes u otra referencia acordada",
        correct: true,
      },
      {
        id: "d",
        text: "Control de cambios: analiza el impacto, decide si se aprueba y actualiza las líneas base",
        correct: true,
      },
    ],
    explanation:
      "La solicitud propone el cambio y el control de cambios lo analiza, decide y actualiza las líneas base. El crecimiento por peticiones no evaluadas es la ampliación gradual del alcance.",
  },
  {
    id: "q156",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "En ADKAR, el personal comprende el cambio, lo apoya y puede explicar los pasos, pero aún necesita ayuda para completar una inscripción. ¿Qué resultado falta desarrollar?",
    options: [
      {
        id: "a",
        text: "Conciencia (Awareness)",
        correct: false,
      },
      {
        id: "b",
        text: "Conocimiento (Knowledge)",
        correct: false,
      },
      {
        id: "c",
        text: "Habilidad (Ability)",
        correct: true,
      },
      {
        id: "d",
        text: "Refuerzo (Reinforcement)",
        correct: false,
      },
    ],
    explanation:
      "La habilidad consiste en aplicar el conocimiento en la práctica. En este caso, conviene ensayar inscripciones hasta que el personal pueda realizarlas por sí mismo.",
  },
  {
    id: "q104",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Comparación periódica entre desempeño real, plan aprobado y objetivos\"?",
    options: [
      {
        id: "a",
        text: "Seguimiento y control",
        correct: true,
      },
      {
        id: "b",
        text: "Control de calidad",
        correct: false,
      },
      {
        id: "c",
        text: "Gestión del valor ganado (EVM)",
        correct: false,
      },
      {
        id: "d",
        text: "Lecciones aprendidas",
        correct: false,
      },
    ],
    explanation:
      "Es el seguimiento y control. Sirve para detectar tendencias y decidir medidas correctivas; revisar solo hitos puede ocultar un sobrecoste.",
  },
  {
    id: "q105",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Método que relaciona trabajo planificado, trabajo completado y gasto real\"?",
    options: [
      {
        id: "a",
        text: "Curva S",
        correct: false,
      },
      {
        id: "b",
        text: "Método del camino crítico (CPM)",
        correct: false,
      },
      {
        id: "c",
        text: "Seguimiento y control",
        correct: false,
      },
      {
        id: "d",
        text: "Gestión del valor ganado (EVM)",
        correct: true,
      },
    ],
    explanation:
      "Es la gestión del valor ganado, que utiliza una línea base de costes distribuida en el tiempo.",
  },
  {
    id: "q106",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt: "¿Qué es el valor planificado (PV)?",
    options: [
      {
        id: "a",
        text: "Valor presupuestado del trabajo realizado hasta la fecha de corte",
        correct: false,
      },
      {
        id: "b",
        text: "Presupuesto del trabajo programado hasta la fecha de corte",
        correct: true,
      },
      {
        id: "c",
        text: "Importe total aprobado en la línea base de costes para completar el proyecto",
        correct: false,
      },
      {
        id: "d",
        text: "Gasto incurrido para realizar el trabajo hasta la fecha de corte",
        correct: false,
      },
    ],
    explanation:
      "El PV es el presupuesto del trabajo programado hasta el corte. Las otras opciones corresponden al EV, el BAC y el AC.",
  },
  {
    id: "q107",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "Una tarea tiene un presupuesto de 5,000. Al corte ha costado 3,000 y la regla de medición reconoce un avance verificado de 40%. ¿Cuánto aporta la tarea al EV?",
    options: [
      {
        id: "a",
        text: "1,200",
        correct: false,
      },
      {
        id: "b",
        text: "3,000",
        correct: false,
      },
      {
        id: "c",
        text: "5,000",
        correct: false,
      },
      {
        id: "d",
        text: "2,000",
        correct: true,
      },
    ],
    explanation:
      "El EV reconoce el valor presupuestado del avance verificado. El 40% de 5,000 es 2,000. Los 3,000 corresponden al coste real.",
  },
  {
    id: "q108",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "boolean",
    prompt: "En el valor ganado, \"ganado\" se refiere a ingresos comerciales.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. En EVM, el valor ganado es el valor presupuestado del trabajo realizado hasta la fecha de corte.",
  },
  {
    id: "q109",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "Por el trabajo realizado hasta el corte ya pagaste 8,000 y adeudas 1,000 de una factura pendiente. ¿Cuánto vale el AC?",
    options: [
      {
        id: "a",
        text: "9,000",
        correct: true,
      },
      {
        id: "b",
        text: "1,000",
        correct: false,
      },
      {
        id: "c",
        text: "8,000",
        correct: false,
      },
      {
        id: "d",
        text: "7,000",
        correct: false,
      },
    ],
    explanation:
      "El AC incluye tanto lo que ya pagaste como los costes incurridos pendientes de pago. El total es 8,000 + 1,000 = 9,000.",
  },
  {
    id: "q110",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "boolean",
    prompt:
      "Para interpretar costes, compara el AC con el EV; compararlo solo con el PV mezcla gasto y avance.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Es la recomendación del glosario en la entrada de coste real (AC).",
  },
  {
    id: "q111",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "multi",
    prompt:
      "¿Cuáles de estas fórmulas son correctas? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "SPI = EV / PV",
        correct: true,
      },
      {
        id: "b",
        text: "CPI = EV / PV",
        correct: false,
      },
      {
        id: "c",
        text: "CPI = EV / AC",
        correct: true,
      },
      {
        id: "d",
        text: "SV = EV − AC",
        correct: false,
      },
      {
        id: "e",
        text: "SV = EV − PV",
        correct: true,
      },
      {
        id: "f",
        text: "CV = EV − AC",
        correct: true,
      },
    ],
    explanation:
      "Según el glosario, CV = EV − AC, SV = EV − PV, CPI = EV / AC y SPI = EV / PV. Las opciones incorrectas usan el denominador o el sustraendo de la otra fórmula.",
  },
  {
    id: "q112",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "Con EV = 8,000, AC = 9,000 y PV = 10,000, ¿cuánto vale la variación de cronograma (SV)?",
    options: [
      {
        id: "a",
        text: "≈0.89",
        correct: false,
      },
      {
        id: "b",
        text: "0.80",
        correct: false,
      },
      {
        id: "c",
        text: "−2,000",
        correct: true,
      },
      {
        id: "d",
        text: "−1,000",
        correct: false,
      },
    ],
    explanation:
      "SV = EV − PV = 8,000 − 10,000 = −2,000. La CV es −1,000, el SPI es 0.80 y el CPI es aproximadamente 0.89.",
  },
  {
    id: "q113",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "boolean",
    prompt: "La variación de cronograma (SV) se expresa en días de retraso.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. El glosario indica que SV se expresa en unidades monetarias, no en días de retraso.",
  },
  {
    id: "q114",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt: "Con EV = 8,000, AC = 9,000 y PV = 10,000, ¿cuánto vale el CPI?",
    options: [
      {
        id: "a",
        text: "≈0.89",
        correct: true,
      },
      {
        id: "b",
        text: "−2,000",
        correct: false,
      },
      {
        id: "c",
        text: "0.80",
        correct: false,
      },
      {
        id: "d",
        text: "−1,000",
        correct: false,
      },
    ],
    explanation:
      "CPI = EV / AC = 8,000 / 9,000 ≈ 0.89. El SPI es 0.80, la CV es −1,000 y la SV es −2,000.",
  },
  {
    id: "q115",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "boolean",
    prompt:
      "Si SPI es mayor que 1 y CPI es igual a 1, al corte se completó más trabajo que el previsto y el coste del trabajo realizado coincide con su presupuesto.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. SPI > 1 indica que EV supera PV. CPI = 1 indica que EV coincide con AC. Ambos índices requieren un denominador distinto de cero.",
  },
  {
    id: "q116",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Importe total aprobado en la línea base de costes para completar el proyecto\"?",
    options: [
      {
        id: "a",
        text: "Valor planificado (PV)",
        correct: false,
      },
      {
        id: "b",
        text: "Presupuesto al finalizar (BAC)",
        correct: true,
      },
      {
        id: "c",
        text: "Coste real (AC)",
        correct: false,
      },
      {
        id: "d",
        text: "Reserva",
        correct: false,
      },
    ],
    explanation:
      "Es el BAC. Distínguelo del gasto acumulado hasta hoy, que es el coste real.",
  },
  {
    id: "q157",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "Al corte del proyecto de robótica, BAC = 20,000, EV = 12,000 y AC = 14,500. Si se mantiene la eficiencia de coste observada, ¿cuál es el EAC? Redondea al final.",
    options: [
      {
        id: "a",
        text: "24,096.39",
        correct: false,
      },
      {
        id: "b",
        text: "24,166.67",
        correct: true,
      },
      {
        id: "c",
        text: "22,500.00",
        correct: false,
      },
      {
        id: "d",
        text: "9,666.67",
        correct: false,
      },
    ],
    explanation:
      "EAC = BAC / CPI = 20,000 / (12,000 / 14,500) ≈ 24,166.67. Usa el CPI sin redondear. 22,500.00 corresponde al supuesto de completar el trabajo pendiente al coste presupuestado.",
  },
  {
    id: "q158",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "En el mismo proyecto, BAC = 20,000, EV = 12,000 y AC = 14,500. Si el trabajo pendiente se realizará al coste presupuestado, ¿cuál es el EAC?",
    options: [
      {
        id: "a",
        text: "8,000.00",
        correct: false,
      },
      {
        id: "b",
        text: "24,166.67",
        correct: false,
      },
      {
        id: "c",
        text: "20,000.00",
        correct: false,
      },
      {
        id: "d",
        text: "22,500.00",
        correct: true,
      },
    ],
    explanation:
      "Con este supuesto, EAC = AC + (BAC − EV) = 14,500 + (20,000 − 12,000) = 22,500.00. El coste acumulado se suma al presupuesto del trabajo pendiente.",
  },
  {
    id: "q159",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "Si el coste final estimado de los laboratorios es 24,166.67 y al corte ya se incurrió en 14,500, ¿cuánto se estima que costará completar el trabajo pendiente?",
    options: [
      {
        id: "a",
        text: "9,666.67",
        correct: true,
      },
      {
        id: "b",
        text: "4,166.67",
        correct: false,
      },
      {
        id: "c",
        text: "8,000.00",
        correct: false,
      },
      {
        id: "d",
        text: "24,166.67",
        correct: false,
      },
    ],
    explanation:
      "ETC = EAC − AC = 24,166.67 − 14,500 = 9,666.67. Es el coste estimado desde el corte hasta terminar.",
  },
  {
    id: "q160",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "El BAC de los laboratorios es 20,000 y su EAC es 24,166.67. ¿Qué VAC resulta y qué significa?",
    options: [
      {
        id: "a",
        text: "4,166.67 de ahorro previsto.",
        correct: false,
      },
      {
        id: "b",
        text: "−9,666.67 de sobrecoste previsto.",
        correct: false,
      },
      {
        id: "c",
        text: "−4,166.67 de variación, que indica un sobrecoste previsto.",
        correct: true,
      },
      {
        id: "d",
        text: "0.00 de variación, porque el BAC permanece en 20,000.",
        correct: false,
      },
    ],
    explanation:
      "VAC = BAC − EAC = 20,000 − 24,166.67 = −4,166.67. El signo negativo indica que el coste final estimado supera el presupuesto.",
  },
  {
    id: "q161",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "multi",
    prompt:
      "Al cierre de la semana 3 de los laboratorios, PV = 15,000, EV = 12,000 y AC = 14,500. ¿Qué interpretaciones son correctas? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text:
          "Como AC es menor que PV, el trabajo realizado quedó por debajo de su propio presupuesto.",
        correct: false,
      },
      {
        id: "b",
        text:
          "Como EV es menor que PV, se completó menos trabajo que el programado a la fecha de corte.",
        correct: true,
      },
      {
        id: "c",
        text:
          "Como AC es mayor que EV, hubo un sobrecoste para el trabajo realizado.",
        correct: true,
      },
      {
        id: "d",
        text:
          "Un SPI de 0.80 indica que se completó el 80% del trabajo total del proyecto.",
        correct: false,
      },
    ],
    explanation:
      "EV frente a PV mide el avance al corte. AC frente a EV mide el coste frente al presupuesto del trabajo realizado. SPI = 0.80 compara el avance con lo programado al corte.",
  },
  {
    id: "q117",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Gráfico de cantidades acumuladas, como PV, EV y AC, a lo largo del tiempo\"?",
    options: [
      {
        id: "a",
        text: "Gestión del valor ganado (EVM)",
        correct: false,
      },
      {
        id: "b",
        text: "Diagrama de Gantt",
        correct: false,
      },
      {
        id: "c",
        text: "Diagrama de red",
        correct: false,
      },
      {
        id: "d",
        text: "Curva S",
        correct: true,
      },
    ],
    explanation:
      "Es la curva S. Permite ver tendencias y comparar el avance con la línea base.",
  },
  {
    id: "q118",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "boolean",
    prompt:
      "Puedes inferir el cumplimiento de un proyecto solo por la apariencia de la curva S.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. El glosario indica que su forma frecuente de \"S\" depende del ritmo de trabajo y que no debes inferir cumplimiento solo por su apariencia.",
  },
  {
    id: "q119",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "multi",
    prompt:
      "¿En qué puede consistir una acción correctiva? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Reasignar recursos",
        correct: true,
      },
      {
        id: "b",
        text: "Cambiar la secuencia de trabajo",
        correct: true,
      },
      {
        id: "c",
        text: "Preparar una integración simulada ante un posible retraso",
        correct: false,
      },
      {
        id: "d",
        text: "Resolver un bloqueo",
        correct: true,
      },
      {
        id: "e",
        text: "Registrar causas y acciones útiles para futuros proyectos",
        correct: false,
      },
    ],
    explanation:
      "La acción correctiva reconduce el desempeño cuando hay una desviación. Preparar una integración simulada es el ejemplo de respuesta al riesgo y registrar causas para el futuro corresponde a las lecciones aprendidas.",
  },
  {
    id: "q120",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "multi",
    prompt:
      "¿Qué incluye el cierre de un proyecto? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Descomponer el alcance en entregables y componentes gestionables",
        correct: false,
      },
      {
        id: "b",
        text: "Archivar documentación",
        correct: true,
      },
      {
        id: "c",
        text: "Transferir la operación",
        correct: true,
      },
      {
        id: "d",
        text: "Liberar recursos",
        correct: true,
      },
      {
        id: "e",
        text: "Resolver compromisos pendientes",
        correct: true,
      },
      {
        id: "f",
        text: "Autorizar formalmente el proyecto",
        correct: false,
      },
    ],
    explanation:
      "El cierre confirma la entrega, obtiene la aceptación, resuelve compromisos pendientes, libera recursos, transfiere la operación y archiva documentación. Autorizar el proyecto corresponde al acta de constitución y descomponer el alcance a la EDT.",
  },
  {
    id: "q121",
    section: "5. Ejecución, seguimiento y cierre",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Conocimiento obtenido al comparar lo planeado con lo que ocurrió\"?",
    options: [
      {
        id: "a",
        text: "Registro de riesgos",
        correct: false,
      },
      {
        id: "b",
        text: "Seguimiento y control",
        correct: false,
      },
      {
        id: "c",
        text: "Lecciones aprendidas",
        correct: true,
      },
      {
        id: "d",
        text: "Rendición de cuentas",
        correct: false,
      },
    ],
    explanation:
      "Son las lecciones aprendidas. Registran causas y acciones útiles para futuros proyectos; una lista de errores sin contexto ayuda poco.",
  },
  {
    id: "q122",
    section: "6. Organización, liderazgo y ética",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Estructura en la que especialistas se agrupan por departamentos\"?",
    options: [
      {
        id: "a",
        text: "Equipo Scrum",
        correct: false,
      },
      {
        id: "b",
        text: "Organización matricial",
        correct: false,
      },
      {
        id: "c",
        text: "Organización funcional",
        correct: true,
      },
      {
        id: "d",
        text: "Organización orientada a proyectos",
        correct: false,
      },
    ],
    explanation:
      "Es la organización funcional. Facilita compartir conocimientos, pero un proyecto transversal puede depender de varios jefes.",
  },
  {
    id: "q123",
    section: "6. Organización, liderazgo y ética",
    kind: "boolean",
    prompt:
      "La organización orientada a proyectos combina departamentos funcionales y coordinación por proyectos.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. Esa es la organización matricial. La orientada a proyectos reúne un equipo dedicado bajo una dirección de proyecto.",
  },
  {
    id: "q124",
    section: "6. Organización, liderazgo y ética",
    kind: "single",
    prompt:
      "Una persona responde a la vez a su responsable técnico y al director del proyecto. ¿Qué estructura describe el glosario?",
    options: [
      {
        id: "a",
        text: "Organización orientada a proyectos",
        correct: false,
      },
      {
        id: "b",
        text: "Organización matricial",
        correct: true,
      },
      {
        id: "c",
        text: "Organización funcional",
        correct: false,
      },
    ],
    explanation:
      "En la organización matricial se combinan departamentos funcionales y coordinación por proyectos. Acuerda autoridad, dedicación y prioridades para evitar instrucciones contradictorias.",
  },
  {
    id: "q125",
    section: "6. Organización, liderazgo y ética",
    kind: "boolean",
    prompt:
      "La organización orientada a proyectos puede duplicar especialistas entre proyectos y elevar costes cuando baja la carga.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. A cambio, da claridad a las prioridades y al control del trabajo.",
  },
  {
    id: "q126",
    section: "6. Organización, liderazgo y ética",
    kind: "multi",
    prompt:
      "Selecciona los pares que coinciden con el glosario. Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Autoridad: obliga a responder por un resultado",
        correct: false,
      },
      {
        id: "b",
        text: "Autoridad: permite tomar decisiones o asignar recursos",
        correct: true,
      },
      {
        id: "c",
        text: "Responsabilidad: permite tomar decisiones o asignar recursos",
        correct: false,
      },
      {
        id: "d",
        text: "Responsabilidad: obliga a responder por un resultado",
        correct: true,
      },
    ],
    explanation:
      "La autoridad permite decidir o asignar recursos; la responsabilidad obliga a responder por un resultado. Si el director tiene la segunda sin la primera, necesita mecanismos de negociación y escalado.",
  },
  {
    id: "q162",
    section: "6. Organización, liderazgo y ética",
    kind: "single",
    prompt:
      "Una especialista orienta las decisiones técnicas por su experiencia. La aprobación del gasto corresponde a la directora por las facultades del cargo. ¿Qué tipos de autoridad ejercen, respectivamente?",
    options: [
      {
        id: "a",
        text: "Informal y formal.",
        correct: true,
      },
      {
        id: "b",
        text: "Formal e informal.",
        correct: false,
      },
      {
        id: "c",
        text: "Formal en ambos casos.",
        correct: false,
      },
      {
        id: "d",
        text: "Informal en ambos casos.",
        correct: false,
      },
    ],
    explanation:
      "La autoridad informal surge de la experiencia, confianza e influencia. La formal proviene del cargo o de facultades delegadas, como aprobar gastos.",
  },
  {
    id: "q127",
    section: "6. Organización, liderazgo y ética",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Capacidad de orientar a un grupo hacia un objetivo compartido\"?",
    options: [
      {
        id: "a",
        text: "Liderazgo",
        correct: true,
      },
      {
        id: "b",
        text: "Director de proyecto",
        correct: false,
      },
      {
        id: "c",
        text: "Gestión de conflictos",
        correct: false,
      },
      {
        id: "d",
        text: "Delegación",
        correct: false,
      },
    ],
    explanation:
      "Es el liderazgo. Implica comunicar el propósito, escuchar, resolver obstáculos y crear condiciones para colaborar.",
  },
  {
    id: "q128",
    section: "6. Organización, liderazgo y ética",
    kind: "boolean",
    prompt: "El liderazgo depende únicamente del cargo formal.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: false,
      },
      {
        id: "f",
        text: "Falso",
        correct: true,
      },
    ],
    explanation:
      "Falso. El glosario indica que no depende únicamente del cargo formal ni se mide por el número de instrucciones dadas.",
  },
  {
    id: "q163",
    section: "6. Organización, liderazgo y ética",
    kind: "multi",
    prompt:
      "¿Qué pares vinculan correctamente funciones directivas y acciones en el arranque de la plataforma? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Organizar: asignar responsabilidades.",
        correct: true,
      },
      {
        id: "b",
        text: "Controlar: definir los recursos que se usarán.",
        correct: false,
      },
      {
        id: "c",
        text: "Coordinar: sincronizar a soporte y control escolar.",
        correct: true,
      },
      {
        id: "d",
        text: "Controlar: verificar que se cumplan los criterios de salida.",
        correct: true,
      },
      {
        id: "e",
        text: "Planificar: comprobar el avance contra el plan aprobado.",
        correct: false,
      },
    ],
    explanation:
      "Organizar estructura responsabilidades, coordinar integra el trabajo de las áreas y controlar comprueba el avance y los criterios acordados. Planificar establece objetivos y recursos.",
  },
  {
    id: "q129",
    section: "6. Organización, liderazgo y ética",
    kind: "multi",
    prompt:
      "Además de la motivación, ¿de qué depende el rendimiento del equipo? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Claridad",
        correct: true,
      },
      {
        id: "b",
        text: "Imparcialidad",
        correct: false,
      },
      {
        id: "c",
        text: "Recursos",
        correct: true,
      },
      {
        id: "d",
        text: "Capacidad",
        correct: true,
      },
      {
        id: "e",
        text: "Honestidad",
        correct: false,
      },
      {
        id: "f",
        text: "Coordinación",
        correct: true,
      },
    ],
    explanation:
      "El rendimiento depende de capacidad, recursos, claridad y coordinación. La honestidad y la imparcialidad son criterios de la ética profesional.",
  },
  {
    id: "q164",
    section: "6. Organización, liderazgo y ética",
    kind: "single",
    prompt:
      "El arranque es el próximo mes. Ensayar ahora la recuperación ante fallas es importante, aunque todavía hay tiempo. Según la matriz de urgencia e importancia, ¿cómo atiendes el ensayo?",
    options: [
      {
        id: "a",
        text: "Lo clasificas como urgente y lo ejecutas de inmediato.",
        correct: false,
      },
      {
        id: "b",
        text:
          "Reservas tiempo en el plan para llevarlo a cabo antes del arranque.",
        correct: true,
      },
      {
        id: "c",
        text: "Lo canalizas como solicitud urgente de menor impacto.",
        correct: false,
      },
      {
        id: "d",
        text: "Lo pospones como actividad de escasa importancia.",
        correct: false,
      },
    ],
    explanation:
      "Una tarea importante que aún puede planearse requiere tiempo reservado. El ensayo prepara al equipo para responder a una falla durante la inscripción.",
  },
  {
    id: "q130",
    section: "6. Organización, liderazgo y ética",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Asignación de una decisión o tarea a quien cuenta con la información y la capacidad adecuadas\"?",
    options: [
      {
        id: "a",
        text: "Liderazgo",
        correct: false,
      },
      {
        id: "b",
        text: "Delegación",
        correct: true,
      },
      {
        id: "c",
        text: "Negociación",
        correct: false,
      },
      {
        id: "d",
        text: "Subcontratación",
        correct: false,
      },
    ],
    explanation:
      "Es la delegación. La subcontratación encarga parte del trabajo a un proveedor externo.",
  },
  {
    id: "q131",
    section: "6. Organización, liderazgo y ética",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Proceso para reconocer y resolver desacuerdos sobre prioridades, recursos o criterios técnicos\"?",
    options: [
      {
        id: "a",
        text: "Control de cambios",
        correct: false,
      },
      {
        id: "b",
        text: "Negociación",
        correct: false,
      },
      {
        id: "c",
        text: "Acción correctiva",
        correct: false,
      },
      {
        id: "d",
        text: "Gestión de conflictos",
        correct: true,
      },
    ],
    explanation:
      "Es la gestión de conflictos. Escucha las posiciones, identifica el interés detrás de cada una y acuerda una decisión verificable.",
  },
  {
    id: "q132",
    section: "6. Organización, liderazgo y ética",
    kind: "boolean",
    prompt:
      "Ignorar un conflicto de responsabilidades suele trasladarlo al cronograma.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Es la advertencia del glosario en la entrada de gestión de conflictos.",
  },
  {
    id: "q133",
    section: "6. Organización, liderazgo y ética",
    kind: "boolean",
    prompt:
      "La negociación es el intercambio de propuestas para acordar compromisos entre partes con intereses distintos.",
    options: [
      {
        id: "v",
        text: "Verdadero",
        correct: true,
      },
      {
        id: "f",
        text: "Falso",
        correct: false,
      },
    ],
    explanation:
      "Verdadero. Por ejemplo, un director puede negociar una fecha con el patrocinador y una dedicación con un responsable funcional.",
  },
  {
    id: "q134",
    section: "6. Organización, liderazgo y ética",
    kind: "multi",
    prompt:
      "¿Qué criterios aplica la ética profesional al tomar decisiones? Marca todas las que apliquen.",
    options: [
      {
        id: "a",
        text: "Imparcialidad",
        correct: true,
      },
      {
        id: "b",
        text: "Respeto",
        correct: true,
      },
      {
        id: "c",
        text: "Capacidad",
        correct: false,
      },
      {
        id: "d",
        text: "Coordinación",
        correct: false,
      },
      {
        id: "e",
        text: "Honestidad",
        correct: true,
      },
      {
        id: "f",
        text: "Responsabilidad",
        correct: true,
      },
    ],
    explanation:
      "La ética profesional aplica honestidad, responsabilidad, respeto e imparcialidad. Capacidad y coordinación son factores del rendimiento del equipo.",
  },
  {
    id: "q135",
    section: "6. Organización, liderazgo y ética",
    kind: "single",
    prompt:
      "¿Qué término corresponde a esta definición: \"Compromiso de explicar decisiones, resultados y uso de recursos ante las personas responsables\"?",
    options: [
      {
        id: "a",
        text: "Comunicación del proyecto",
        correct: false,
      },
      {
        id: "b",
        text: "Rendición de cuentas",
        correct: true,
      },
      {
        id: "c",
        text: "Seguimiento y control",
        correct: false,
      },
      {
        id: "d",
        text: "Ética profesional",
        correct: false,
      },
    ],
    explanation:
      "Es la rendición de cuentas. Requiere datos trazables y reconocer desviaciones a tiempo.",
  },
];
