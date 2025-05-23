// Set any item to undefined to remove it from the site or to use the default value

export const GLOBAL = {
  // Site metadata
  username: "Mario Rodríguez",
  rootUrl: "https://marior.dev",
  shortDescription: "Estudiante de Desarrollo web e<br />Inteligencia Artificial.",
  longDescription: "Desarrollador web frontend especializado en React y tecnologías modernas. Con experiencia en proyectos reales y formación continua en Inteligencia Artificial y desarrollo web.",
  
  // SEO metadata
  seoTitle: "Mario Rodríguez - Desarrollador Web Frontend & IA",
  seoDescription: "Portfolio de Mario Rodriguez, desarrollador web frontend especializado en React, JavaScript, Java y tecnologías modernas, con enfoque en IA y experiencia laboral en proyectos reales.",
  seoKeywords: "Mario Rodriguez, desarrollador web, frontend, React, JavaScript, Java, inteligencia artificial, portfolio, desarrollador Madrid",
  
  // Social media links
  githubProfile: "https://github.com/mariorodriguez255/",
  linkedinProfile: "https://www.linkedin.com/in/marioro255",
  
  // Common text names used throughout the site
  projectsName: "Proyectos",
  experienceTitle: "Experiencia Laboral",
  skillsTitle: "Habilidades en Desarrollo y Certificaciones",
  viewAll: "Ver todos",
  
  // Common descriptions used throughout the site
  noProjects: "No hay proyectos destacados aún.",
  skillsDisclaimer: "Tecnologías y herramientas que estoy aprendiendo y utilizando en mi formación continua como desarrollador.",

  // Project metadata
  projectTitle: "Proyectos y Código",
  projectShortDescription: "Lista de mis proyectos de desarrollo web y herramientas de programación.",
  projectLongDescription: "Todos mis proyectos, incluyendo aplicaciones frontend y full-stack.",

  // Profile image
  profileImage: "face.png",

  // Menu items
  menu: {
    Inicio: "/",
    Habilidades: "/skills",
    Experiencia: "/experience",
    Proyectos: "/projects",
  },

  // Experience section
  experiences: [
    {
      position: "FrontEnd Dev (Freelance)",
      company: "Ropema Rubio",
      period: "2025",
      description: "Desarrollo completo de la página web, configuración de dominios, SEO y posicionamiento en Google. Implementación de visualización de productos y diseño responsive con enfoque en la experiencia de usuario.",
      skills: ["React", "Next.js", "SEO", "v0.dev"]
    },
    {
      position: "FrontEnd Dev",
      company: "Ayuntamiento Villanueva la Cañada",
      period: "1 mes",
      contractType: "Contrato de prácticas",
      description: "Desarrollo y mantenimiento de aplicaciones web internas para la gestión municipal. Implementación de interfaces de usuario y mejoras de accesibilidad.",
      skills: ["JavaScript", "HTML", "CSS", "PHP"]
    },
    {
      position: "IT Support & FrontEnd Dev",
      company: "Antiun",
      period: "4 meses",
      contractType: "Contrato de prácticas",
      description: "Soporte técnico y desarrollo frontend para aplicaciones internas. Creación de paneles de administración y sistemas CRUD para gestión de inventario.",
      skills: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"]
    }
  ],

  // Skills section
  skillsTechnologies: "Tecnologías en Aprendizaje",
  skillsAI: "Inteligencia Artificial",
  skillsCertifications: "Certificaciones",
  certCompleted: "Completadas",
  certInProgress: "En Curso",
  certPlanned: "Próximamente",

  // Technologies and Skills (ordered by importance)
  technologies: [
    "React",
    "JavaScript (ES6+)",
    "Java",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Astro",
    "SQL",
    "Git"
  ],

  // AI Skills (updated list with Model Context Protocol)
  aiSkills: [
    "Model Context Protocol",
    "Prompt Engineering",
    "ChatGPT",
    "Microsoft Copilot",
    "GitHub Copilot",
    "Claude"
  ],

  // Completed Certifications (reordered as requested)
  completedCertifications: [
    {
      name: "React Essentials",
      issuer: "Mimo Academy",
      date: "2025",
      imageUrl: "/certificates/react-essentials.webp"
    },
    {
      name: "Curso de IA y Prompt Engineering",
      issuer: "Microsoft x Founderz",
      date: "2025",
      imageUrl: "/certificates/ia-prompt-eng.webp"
    },
    {
      name: "MCPs (Model Context Protocol)",
      issuer: "Academia MiduDev",
      date: "2025",
      imageUrl: "/certificates/mcps.webp"
    },
    {
      name: "Certificación Java",
      issuer: "CloudFtic",
      date: "2021",
      imageUrl: "/certificates/java-cert.webp"
    },
    {
      name: "Desarrollador en HTML5 y CSS3",
      issuer: "Universidad Pontificia Comillas",
      date: "2020",
      imageUrl: "/certificates/html-css-dev.webp"
    },
    {
      name: "Metodologías Ágiles",
      issuer: "Google",
      date: "2024",
      imageUrl: "/certificates/agile-methods.webp"
    },
    {
      name: "Data Analytics",
      issuer: "IBM",
      date: "2024",
      imageUrl: "/certificates/data-analytics.webp"
    },
    {
      name: "Git y GitHub",
      issuer: "Udemy",
      date: "2024",
      imageUrl: "/certificates/git-github.webp"
    }
  ],

  // In Progress Certifications
  inProgressCertifications: [
    {
      name: "Frontend Career Path",
      issuer: "Codecademy",
      date: "2024 - En curso"
    },
    {
      name: "Master en IA",
      issuer: "Microsoft x Founderz",
      date: "2025 - En curso"
    },
    {
      name: "Curso React",
      issuer: "Codedex",
      date: "2025 - En curso"
    }
  ],

  // Planned Certifications
  plannedCertifications: [
    {
      name: "Formación en TypeScript",
      issuer: "CodeCademy"
    },
    {
      name: "Formación ingeniero de DevOps",
      issuer: "Microsoft"
    },
    {
      name: "UX/UI Design Fundamentals",
      issuer: "Uxcel Go"
    }
  ]
};