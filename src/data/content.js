// Todo el contenido de la web en un sitio. Si mañana aprendes algo nuevo o terminas un proyecto, solo se toca aquí.
import imgProcessMiner from '../assets/process_miner.webp';
import imgSaaSPeluqueria from '../assets/saas_peluqueria.webp';
import imgHandMouse from '../assets/hand_mouse.webp';
import imgAudioAutoSwitcher from '../assets/audio_auto_switcher.webp';
import imgGestorAlimentos from '../assets/gestor_alimentos.webp';
import imgPortfolio from '../assets/portfolio.webp';
import imgPassMark from '../assets/pass_mark.webp';
import imgFoundationalCsharp from '../assets/foundational_csharp.webp';
import imgCertColumbia from '../assets/cert_columbia.webp';
import imgCertAzureSql from '../assets/cert_azure_sql.webp';
import imgCertFoundryMcp from '../assets/cert_foundry_mcp.webp';
import imgCertAgentTools from '../assets/cert_agent_tools.webp';
import imgCertDatabricks from '../assets/cert_databricks.webp';
import imgCertCambridge from '../assets/cert_cambridge.webp';

export const SITE = {
  name: 'Alejandro Lara Lara',
  degree: 'Doble Grado en Ingeniería Informática + Matemáticas',
  bio: [
    'Estudiante del Doble Grado en Ingeniería Informática y Matemáticas. Me apasiona la Inteligencia Artificial y disfruto explorando cómo la tecnología puede resolver problemas complejos y abrir nuevas oportunidades.',
    'Me considero una persona autodidacta, perseverante y comprometida con cada proyecto. Trabajo con soltura tanto en equipo como de manera independiente, siempre con la determinación de alcanzar los objetivos que me propongo.',
  ],
  tfg: {
    title: 'GraphRAG híbrido y visual para dominios especializados en español',
    short: 'GraphRAG híbrido y visual en español',
    text: 'Mi Trabajo Fin de Grado, en curso: un sistema de preguntas y respuestas que combina grafos de conocimiento con búsqueda vectorial para que un modelo de lenguaje responda sobre documentación técnica, normativa o académica, incluidas las preguntas globales en las que el RAG vectorial clásico falla.',
  },
  photo: '/foto-perfil.webp',
  cv: '/CV_Alejandro_Lara.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/alejandro-lara-lara-461841384',
    github: 'https://github.com/AlexLL8416',
    email: 'mailto:laralaraalejandro8416@gmail.com',
    emailText: 'laralaraalejandro8416@gmail.com',
  },
  skills: [
    { category: 'Lenguajes de programación', items: [['C#', 93], ['Python', 95], ['Java', 80], ['JavaScript', 75], ['C', 75], ['Haskell', 65], ['R', 70], ['Assembly', 50]] },
    { category: 'Frameworks y desarrollo', items: [['.NET 8', 92], ['FastAPI', 85], ['React', 85], ['OpenCV', 70], ['HTML', 95], ['Odoo', 70], ['SuiteCRM', 65], ['Bonita', 65]] },
    { category: 'Bases de datos', items: [['PostgreSQL', 85], ['MariaDB', 80], ['SQL', 90], ['HeidiSQL', 85]] },
    { category: 'Conceptos y herramientas', items: [['Inteligencia Artificial', 85], ['Diseño de APIs', 95], ['Lógica Difusa / Grafos', 85], ['Resolución Compleja', 95]] },
    { category: 'Software matemático y ofimática', items: [['MatLab', 85], ['Mathematica', 80], ['Maxima', 75], ['Microsoft Office', 95]] },
    { category: 'Soft skills e idiomas', items: [['Inglés (Avanzado)', 85], ['Español (Nativo)', 100], ['Liderazgo y Equipo', 90], ['Analítico y Autodidacta', 95]] },
  ],
  // Lo más fuerte primero; el propio portfolio al final.
  projects: [
    { title: 'ProcessMiner', image: imgProcessMiner,
      description: 'Motor analítico de minería de procesos industriales en streaming. Diseñado con una arquitectura híbrida (Backend .NET 8 en contenedores Docker sobre Render y Frontend SPA en Vercel), capaz de procesar archivos de eventos XES masivos mediante evaluación perezosa para optimizar recursos. Integra algoritmos de descubrimiento como Alpha Miner y Heuristic Miner, análisis de variantes y métricas de rendimiento en tiempo real.',
      tags: ['C#', '.NET 8', 'React', 'TailwindCSS', 'Process Mining', 'Docker'],
      github: 'https://github.com/AlexLL8416/ProcessMiner', live: 'https://process-miner-tau.vercel.app/' },
    { title: 'SaaS Gestión Peluquería', image: imgSaaSPeluqueria,
      description: 'Sistema integral en la nube para la gestión de reservas, clientes y control de productos especializado en peluquerías.',
      tags: ['React', 'SQL', 'Supabase', 'TailwindCSS'],
      github: 'https://github.com/AlexLL8416/peluqueria-web', live: 'https://peluqueria-web-nine.vercel.app/' },
    { title: 'Pass Mark', image: imgPassMark,
      description: 'Web para practicar los exámenes de Cambridge English, de A1 Movers a C2 Proficiency, con tu propio PDF. El examen se abre en un visor propio con pdf.js junto a la hoja de respuestas oficial de cada nivel, con cronómetro y reproductor para el Listening. Al pegar la clave corrige al momento con puntuación ponderada por partes. Sin registro: todo se guarda en el navegador.',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'pdf.js', 'IndexedDB', 'Vitest'],
      github: '', live: 'https://pass-mark-two.vercel.app/' }, // repo privado: sin enlace al código
    { title: 'Hand Mouse', image: imgHandMouse,
      description: 'Control del ratón del ordenador mediante la webcam y gestos de la mano. Incluye calibración automática de usuario, movimiento del cursor y detección de clics mediante visión artificial.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
      github: 'https://github.com/AlexLL8416/Hand_Mouse', live: '' },
    { title: 'Audio Auto Switcher', image: imgAudioAutoSwitcher,
      description: 'Herramienta de sistema que automatiza el cambio rápido y la gestión de dispositivos de entrada y salida de audio en entornos Windows. Disponible un instalador para cualquier tipo de dispositivo Windows.',
      tags: ['C#', 'Windows API', '.NET', 'WPF'],
      github: 'https://github.com/AlexLL8416/Audio-Auto-Switcher', live: '' },
    { title: 'Gestor de Alimentos', image: imgGestorAlimentos,
      description: 'Aplicación analítica para el control nutricional, cálculo de macros, gestión de inventario y trazabilidad de caducidades.',
      tags: ['Python', 'FastAPI', 'SQLite'],
      github: 'https://github.com/AlexLL8416/Gestor-Alimentos', live: '' },
    { title: 'Portfolio', image: imgPortfolio,
      description: 'El sitio web que estás visitando. Construido con una arquitectura modular y responsive en React y TailwindCSS, con la paleta y la tipografía de mi tarjeta de contacto.',
      tags: ['React', 'TailwindCSS', 'Vite'],
      github: 'https://github.com/AlexLL8416/Portfolio', live: '' },
  ],
  // De LinkedIn, la más reciente primero. url vacía = la credencial no tiene enlace público.
  certs: [
    { title: 'Prompt Engineering & Programming with OpenAI', image: imgCertColumbia, issuer: 'Columbia University', date: 'Oct. 2026', url: '' },
    { title: 'Desarrollo de aplicaciones controladas por datos con Azure SQL Database', image: imgCertAzureSql, issuer: 'Microsoft Applied Skills', date: 'Oct. 2026', url: 'https://learn.microsoft.com/api/credentials/share/es-es/AlejandroLaraLara-0633/408A878392E45F14?sharingId' },
    { title: 'Integrar herramientas MCP con agentes en Microsoft Foundry', image: imgCertFoundryMcp, issuer: 'Microsoft Applied Skills', date: 'Oct. 2026', url: 'https://learn.microsoft.com/api/credentials/share/es-es/AlejandroLaraLara-0633/585A829382A5D1EC?sharingId' },
    { title: 'Desarrollo de un agente con herramientas integradas', image: imgCertAgentTools, issuer: 'Microsoft Applied Skills', date: 'Oct. 2026', url: 'https://learn.microsoft.com/api/credentials/share/es-es/AlejandroLaraLara-0633/5C96F8D33C064CA5?sharingId' },
    { title: 'Databricks AI Agent Fundamentals', image: imgCertDatabricks, issuer: 'Databricks', date: 'Oct. 2026', url: '' },
    { title: 'B2 First, Grade A (nivel C1)', image: imgCertCambridge, issuer: 'Cambridge English', date: 'Sept. 2026', url: '' },
    { title: 'Foundational C# with Microsoft', image: imgFoundationalCsharp, issuer: 'freeCodeCamp y Microsoft', date: 'Feb. 2026',
      url: 'https://www.freecodecamp.org/certification/alejandro_lara_lara/foundational-c-sharp-with-microsoft' },
  ],
  education: {
    title: 'Doble Grado en Ingeniería Informática y Matemáticas',
    meta: '360 ECTS · 5 cursos académicos',
    years: [
      { year: 'Primer año', period: '2022 – 2023', title: 'Fundamentos y arquitectura base',
        subjects: ['Fundamentos de Programación', 'Estructura y Arquitectura de Computadores', 'Circuitos Electrónicos Digitales', 'Álgebra Lineal y Geometría I', 'Matemática Discreta'] },
      { year: 'Segundo año', period: '2023 – 2024', title: 'Algoritmia e ingeniería del software',
        subjects: ['Análisis y Diseño de Datos y Algoritmos', 'Introducción a la Ing. del Software I y II', 'Cálculo Numérico', 'Ecuaciones Diferenciales Ordinarias'] },
      { year: 'Tercer año', period: '2024 – 2025', title: 'Inteligencia artificial y redes',
        subjects: ['Inteligencia Artificial y Sistemas Inteligentes', 'Redes y Arquitectura de Computadores', 'Programación Matemática', 'Sistemas de Información Empresariales', 'Lógica Informática'] },
      { year: 'Cuarto año', period: '2025 – 2026', title: 'Sistemas avanzados y modelización',
        subjects: ['Ampliación de Inteligencia Artificial', 'Tecnologías Avanzadas de la Información', 'Inferencia Estadística', 'Modelización Matemática', 'Programación Declarativa'] },
      { year: 'Quinto año', period: '2026 – 2027', title: 'Especialización y fin de grado',
        subjects: ['Configuración e Implem. de Sist. Informáticos', 'Interacción Persona-ordenador', 'Procesadores de Lenguajes', 'Prácticas Externas', 'Trabajo Fin de Grado (TFG)'] },
    ],
    profileTitle: 'Un perfil analítico y tecnológico',
    profile: 'Esta doble titulación oficial persigue una formación académica de excelencia. Combina el rigor y la profunda capacidad de abstracción analítica que aporta el Grado en Matemáticas, sumado directamente a las avanzadas competencias en desarrollo y computación del Grado en Ingeniería Informática. El resultado es un perfil altamente especializado, listo para liderar la resolución de problemas complejos en el ámbito de las nuevas tecnologías.',
    itinerary: 'https://matematicas.us.es/sites/matematicas/files/2018-06/ITINERARIO%20DOBLE%20TITULO%20INFORMATICA-MATEMATICAS_V_WEB_1.pdf',
  },
  contact: {
    title: '¿Hablamos?',
    text: 'Actualmente estoy abierto a nuevas oportunidades laborales y colaboraciones. Si tienes alguna pregunta, un proyecto en mente, o simplemente quieres saludar, no dudes en contactarme. Intentaré responderte lo antes posible.',
    formAction: 'https://formspree.io/f/mrpzyjek',
  },
};

// Tecnologías que aparecen como nodos sobre la cinta del inicio (tienen que ser etiquetas reales de proyectos).
export const HERO_NODES = ['Python', 'C#', '.NET 8', 'React', 'Process Mining'];

// Nivel en palabras en vez de barras de porcentaje.
export const levelWord = (p) => (p >= 95 ? 'Experto' : p >= 85 ? 'Avanzado' : p >= 70 ? 'Intermedio' : 'Básico');
