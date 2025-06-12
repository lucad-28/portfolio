import { Project } from "./project";
import { Certificate } from "./certificate";

export const PROJECTS: Record<string, Project> = {
  spam_or_ham: {
    title: "Modelo Clasificador de Correo Spam o Ham",
    description:
      "Modelo de ML para clasificar correos electrónicos como spam utilizando técnicas de procesamiento de lenguaje natural.",
    fullDescription:
      "Desarrollé un modelo de clasificación de correos electrónicos que utiliza técnicas avanzadas de procesamiento de lenguaje natural (NLP) para identificar y clasificar correos como spam o ham. El modelo fue entrenado con un dataset de +5,000 correos etiquetados.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NLTK (Natural Language Toolkit)",
      "Matplotlib",
      "Seaborn",
    ],
    image: "/thumbnails/soh.png",
    category: "Machine Learning",
    duration: "1 semana",
    team: "Proyecto individual",
    challenges: [
      "Palabras irrelevantes y ruido en los datos",
      "Desbalanceo de clases entre spam (60%) y ham (40%)",
      "Interpretabilidad del modelo",
    ],
    solutions: [
      "Usar ntlk para limpieza y tokenización de texto",
      "Usar SMOTE con oversampling para balancear clases",
      "Vectorizacion con sklearn.CountVectorizer",
    ],
    results: [
      "98% accuracy en el conjunto de prueba",
      "Prioridad en la detección de ham",
      "Modelo balanceado y robusto",
    ],
    demoUrl: "https://lupredict-web.vercel.app/",
    videoUrl:
      "https://github.com/user-attachments/assets/c7049885-d591-4a51-aa2f-79f5ee34d362",
    githubUrl: "https://github.com/lucad-28/soh",
  },
  "extintor-sys": {
    title: "Sistema de Registro de Ventas de Extintores en Excel",
    description:
      "Automatización en Excel con interfaz VBA para registrar, validar y gestionar ventas de extintores con múltiples capacidades.",
    fullDescription:
      "Desarrollé un sistema automatizado en Excel con VBA para el registro y control de ventas de extintores. Incluye una interfaz intuitiva con validación de campos, listas dinámicas y gestión de múltiples productos por venta. Los registros se almacenan en hojas específicas y pueden ser editados o eliminados desde un panel interactivo. El sistema permite mantener control detallado de cada venta individual y de los productos vendidos, mejorando la trazabilidad y el orden operativo.",
    technologies: [
      "Excel VBA",
      "Macros",
      "Formularios Dinámicos",
      "Validación de Datos",
      "Automatización con VBA",
    ],
    image: "/thumbnails/extintor-sys.png",
    category: "Process Automation",
    duration: "1 mes",
    team: "Proyecto Individual",
    challenges: [
      "Ventas con múltiples productos distintos",
      "Validación y control de formatos de campos",
      "Gestión de datos separados por hoja",
    ],
    solutions: [
      "Formulario VBA con validación de entradas",
      "Botones dinámicos para agregar/eliminar extintores",
      "Separación lógica de hojas de ventas y productos",
    ],
    results: [
      "Automatización completa del flujo de venta",
      "Reducción de errores manuales",
      "Mayor trazabilidad y control operativo",
    ],
    demoUrl: "",
    videoUrl:
      "https://github.com/user-attachments/assets/043803b1-0041-432e-9f98-0c25cb18fc5a",
    githubUrl: "https://github.com/lucad-28/extintores-crud",
  },
  tractchun: {
    title: "Dashboard de Seguimiento de Ventas de Tickets",
    description:
      "Dashboard interactivo en Power BI para el monitoreo y análisis de ventas de tickets con segmentaciones avanzadas y visualizaciones dinámicas",
    fullDescription:
      "Desarrollé un dashboard completo de seguimiento de ventas de tickets que permite analizar el desempeño comercial desde múltiples perspectivas. El sistema incluye visualizaciones interactivas para el histórico de tickets (2016-2020), métricas clave de rendimiento, y un sistema de ranking de agentes basado en múltiples criterios de evaluación. Basandome en el curso 'Microsoft Power BI – Curso de Power BI Desktop' parte de 'Inteligencia Artificial y Análisis de Datos con PowerBI' de Guayerd + IBM",
    technologies: [
      "Power BI Desktop",
      "DAX",
      "Power Query",
      "Bookmarks",
      "Segmentation",
    ],
    image: "/thumbnails/tractchun.png",
    category: "Business Intelligence & Analytics",
    duration: "2 meses",
    team: "Proyecto Individual",
    challenges: [
      "+2,000 registros de ventas",
      "Ranking de agentes con múltiples criterios",
      "Rendimiento del dashboard",
    ],
    solutions: [
      "Modelado estrella",
      "Multiples medidas RANKX combinadas",
      "Optimización de consultas DAX",
    ],
    results: [
      "Dashboard con navegación intuitiva",
      "Tiempo de carga optimizado (< 3 segundos)",
      "Sistema de ranking automatizado",
      "Interfaz dual (modo claro/oscuro)",
    ],
    demoUrl: "",
    videoUrl:
      "https://github.com/user-attachments/assets/9d5c6a47-e362-470f-8908-b3b66d027b8f",
    githubUrl: "https://github.com/lucad-28/tractchun-visualization-data",
  },
  etlas: {
    title: "Etlas - Asistente ETL Inteligente con IA",
    description:
      "Plataforma web que utiliza la API de OpenAI para generar código ETL personalizado mediante prompts especializados, con gestión de usuarios y almacenamiento de esquemas de bases de datos",
    fullDescription:
      "Desarrollé una aplicación web completa que funciona como asistente ETL inteligente, permitiendo a los usuarios generar código de extracción, transformación y carga de datos mediante inteligencia artificial. El sistema integra la API de OpenAI con prompts personalizados para configurar un asistente especializado en ETL, incluye autenticación mediante Google OAuth, y permite a cada usuario almacenar y gestionar sus mensajes, conversaciones y esquemas de bases de datos. La arquitectura incluye un backend dockerizado en Python con FastAPI desplegado en Google Cloud Run, base de datos PostgreSQL en Supabase, y frontend en Next.js hosteado en Vercel.",
    technologies: [
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "OpenAI API",
      "Docker",
      "Google Cloud Run",
      "Vercel",
      "Supabase",
      "NextAuth.js",
      "Google OAuth",
    ],
    image: "/thumbnails/etlas.png",
    category: "AI & Automatization",
    duration: "2 semanas",
    team: "3 analysts",
    challenges: [
      "Integración compleja con OpenAI API",
      "Sistema de autenticación seguro multi-plataforma",
      "Gestión de estado de conversaciones por usuario",
      "Optimización de prompts para ETL especializado",
      "Arquitectura distribuida con múltiples servicios",
    ],
    solutions: [
      "Prompt especializado para tareas ETL",
      "NextAuth.js con Google OAuth para autenticación seamless",
      "Base de datos relacional optimizada para mensajes y esquemas",
      "API RESTful con FastAPI y validación Pydantic",
      "Containerización con Docker para despliegue escalable",
    ],
    results: [
      "Generación automatizada de código ETL de alta calidad",
      "Sistema de usuarios con persistencia de conversaciones",
      "API backend escalable",
      "Interfaz de usuario intuitiva y responsive",
      "Tiempo de respuesta promedio < 2 segundos",
      "Gestión eficiente de esquemas de BD por usuario",
    ],
    demoUrl: "https://etlas.vercel.app",
    videoUrl:
      "https://github.com/user-attachments/assets/dd17b77f-eb3f-41ae-bbeb-15d5da691c48",
    githubUrl: "https://github.com/lucad-28/etlas-b",
    frontendGithubUrl: "https://github.com/lucad-28/etlas-f",
  },
};

export const CERTIFICATES: Certificate[] = [
  {
    id: "we-data-analytics",
    title: "Especialización en Analista de Datos",
    issuer: "WE Educación Ejecutiva",
    date: "Marzo 2025",
    image: "/thumbnails/we-data-analytics.png",
    description:
      "Demuestra una gran comprensión en Python, SQL Server y Power BI orientados al analisis de datos, visualización de la información y entrenamiento de modelos predictivos para la toma de decisiones.",
    skills: [
      "Python",
      "Microsoft SQL Server",
      "Microsoft Power BI",
      "Extract, Transform, Load (ETL)",
      "Visualización de Datos",
      "Business Intelligence",
      "Transact-SQL (T-SQL)",
    ],
    validUntil: "Lifetime",
    certificateUrl:
      "https://drive.google.com/file/d/1f45q0WwW9fiJbSFbPB8QoAUU0B_lK9Ni/view?usp=drive_link",
  },
  {
    id: "excel-data-analysis",
    title: "Análisis de Datos con Excel",
    issuer: "Universidad Nacional de Ingeniería",
    date: "Febrero 2025",
    image: "/thumbnails/excel-data-analysis.png",
    description:
      "Demuestra habilidades avanzadas en el uso de Microsoft Excel para el análisis de datos, incluyendo funciones avanzadas, tablas dinámicas, visualización y publicación de datos.",
    skills: [
      "Microsoft Power Query",
      "Visualización de Datos",
      "Microsoft Excel",
    ],
    credentialId: "017-0001074",
    validUntil: "Lifetime",
    certificateUrl:
      "https://drive.google.com/file/d/1Zxv7vtGRC_KNCvRAMPY5G6GT_9QTe3tg/view?usp=drive_link",
  },
  {
    id: "ibm-ai-data-analyst",
    title:
      "Guayerd + IBM: Inteligencia Artificial y Análisis de Datos con Power BI",
    issuer: "IBM SkillsBuild",
    date: "November 2024",
    image: "/thumbnails/ibm-ai-data-analyst.png",
    description:
      "Demuestra habilidades en el uso de Power BI para el análisis de datos, incluyendo la creación de dashboards interactivos, visualización de datos, técnicas y fundamentos de inteligencia artificial.",
    skills: [
      "Microsoft Power BI",
      "Visualización de Datos",
      "Inteligencia Artificial",
      "Análisis de Datos",
      "Dashboards Interactivos",
      "Técnicas de IA",
      "Fundamentos de IA",
    ],
    validUntil: "Lifetime",
    certificateUrl:
      "https://drive.google.com/file/d/1NSKtuLNH4HVBgxFkP_RrU7GsYvVLHpnh/view?usp=drive_link",
  },
  {
    id: "ibm-agile-explorer",
    title: "IBM SkillsBuild: Agile Explorer",
    issuer: "IBM SkillsBuild",
    description:
      "Desarrolla una comprensión fundamental de los valores, principios y prácticas de Agile que ayudan a cambiar la cultura y comportamientos en la forma de trabajar. Los participantes pueden iniciar conversaciones sobre Agile con compañeros de equipo y aplicar el método Agile en operaciones y proyectos familiares, académicos o laborales.",
    skills: [
      "Valores y Principios Agile",
      "Dinámica de Equipos",
      "Fundamentos de Operaciones Agile",
      "Planificación Incremental e Iterativa",
      "Gestión del Cambio",
    ],
    image: "/thumbnails/ibm-agile-explorer.png",
    certificateUrl:
      "https://www.credly.com/badges/9abcc87b-25aa-4add-ac8d-83ec0291641c/linked_in_profile",
    date: "Septiembre 2024",
    validUntil: "Lifetime",
  },
  {
    id: "ciencia-datos-big-data",
    title: "Ciencia de Datos: Big Data",
    issuer: "Universidad Nacional de Ingeniería",
    description:
      "Curso integral de ciencia de datos enfocado en tecnologías Big Data, cubriendo desde la introducción a Big Data hasta el procesamiento distribuido con Spark, incluyendo herramientas como Hadoop, Scala, y técnicas avanzadas de análisis de datos a gran escala.",
    skills: [
      "Hadoop",
      "Apache Spark",
      "Job Tracker",
      "Transformaciones de Datos",
      "RDD (Resilient Distributed Datasets)",
      "Dataframes",
      "Procesamiento de Datos Masivos",
    ],
    image: "/thumbnails/ciencia-datos-big-data.png",
    certificateUrl:
      "https://drive.google.com/file/d/1vjEImNrUAoO8Lh8f2yjNH4-oAjTQ3HuS/view?usp=drive_link",
    date: "Agosto 2024",
    validUntil: "Lifetime",
    credentialId: "016-0014361",
  },
  {
    id: "cloud-computing-aws-azure-google",
    title: "Cloud Computing: AWS - Azure - Google Cloud",
    issuer: "Universidad Nacional de Ingeniería",
    description:
      "Curso completo de computación en la nube que abarca los principales proveedores de servicios cloud (AWS, Azure y Google Cloud). Incluye fundamentos de infraestructura, servicios, seguridad, gestión de costos y administración de recursos en entornos de nube híbrida y multi-cloud.",
    skills: [
      "Cloud Computing",
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Infraestructura en la Nube",
      "Modelo de Confianza Cero",
      "Máquinas Virtuales",
      "Contenedores y Redes Privadas Virtuales",
      "Hospedaje de Aplicaciones",
      "Almacenamiento en la Nube",
    ],
    image: "/thumbnails/cloud-computing-aws-azure-google.png",
    certificateUrl:
      "https://drive.google.com/file/d/1Zc7JYfIzeHOQdWaAsKaIdafs-ItSKKQJ/view?usp=drive_link",
    date: "Agosto 2024",
    validUntil: "Lifetime",
    credentialId: "016-0014780",
  },
  {
    id: "cs50-introduction-databases-sql",
    title: "CS50's Introduction to Databases with SQL",
    issuer: "Harvard University",
    description:
      "Introducción completa a bases de datos usando SQL. Aprende a crear, leer, actualizar y eliminar datos con bases de datos relacionales. Cubre modelado de entidades del mundo real, normalización de datos, optimización con índices y vistas, y conexión de SQL con otros lenguajes como Python y Java.",
    skills: [
      "SQL (Structured Query Language)",
      "Diseño y Modelado de Bases de Datos",
      "Bases de Datos Relacionales",
      "Normalización de Datos",
      "Optimización de Consultas",
    ],
    image: "/thumbnails/cs50-introduction-databases-sql.png",
    certificateUrl:
      "https://certificates.cs50.io/d87aa3ba-e65e-49c9-9e23-68daf6f22806.png?size=A4",
    date: "Diciembre 2023",
    validUntil: "Lifetime",
    credentialId: "1e54f1f054514ffa9b2b9beb692e5c35",
  },
  {
    id: "ibm-python-data-science",
    title: "Python for Data Science",
    issuer: "IBM",
    description:
      "Curso integral de Python enfocado en ciencia de datos que cubre desde fundamentos de programación hasta análisis de datos práctico. Incluye trabajo con estructuras de datos, librerías especializadas y desarrollo de proyectos reales usando entornos Jupyter para análisis hands-on.",
    skills: [
      "Python Programming",
      "Pandas y NumPy",
      "Análisis de Datos",
      "Jupyter Notebooks",
      "APIs",
    ],
    image: "/thumbnails/ibm-python-data-science.png",
    certificateUrl:
      "https://www.credly.com/badges/a3df2601-a383-4eda-a00b-8c1358872c98/linked_in_profile",
    date: "Diciembre 2023",
    validUntil: "Lifetime",
    credentialId: "1e54f1f054514ffa9b2b9beb692e5c35",
  },
  {
    id: "google-foundational-data-ml-ai-tasks",
    title: "Perform Foundational Data, ML, and AI Tasks in Google Cloud",
    issuer: "Google Cloud",
    description:
      "Skill badge que demuestra habilidades fundamentales en preparación de datos, pipelines de ML y APIs de IA usando servicios de Google Cloud. Incluye limpieza de datos, ejecución de pipelines, creación de clusters Spark y uso de APIs de machine learning para procesamiento eficiente de datos y análisis.",
    skills: [
      "Google Cloud Dataflow",
      "Google Cloud Dataproc",
      "Dataprep by Trifacta",
      "Machine Learning APIs",
      "BigQuery",
    ],
    image: "/thumbnails/google-foundational-data-ml-ai-tasks.png",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/2dc597fc-b0a6-4ccf-ac20-08aee18a9287/badges/5929457?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    date: "Noviembre 2023",
    validUntil: "Lifetime",
    credentialId: "5929457",
  },
];
