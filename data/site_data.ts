const shared = {
  name: "Angel Marenco",
  username: "JsMarenco",
  email: "hello@jsmarenco.dev",
  socials: [
    { name: "GitHub", url: "https://github.com/jsmarenco", label: "GH" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jsmarenco",
      label: "IN",
    },
    { name: "X", url: "https://x.com/jsmarenco", label: "X" },
  ],
  techStack: {
    frontend: [
      { name: "Next.js", label: "Nx" },
      { name: "React", label: "Re" },
      { name: "Vite", label: "Vi" },
      { name: "Tailwind CSS", label: "Tw" },
      { name: "TypeScript", label: "Ts" },
      { name: "Framer Motion", label: "Fm" },
    ],
    backend: [
      { name: "Node.js", label: "Nd" },
      { name: "Python", label: "Py" },
      { name: "Bun", label: "Bun" },
      { name: "PostgreSQL", label: "Pg" },
      { name: "MongoDB", label: "Mg" },
      { name: "Railway", label: "Rw" },
    ],
    tools: [
      { name: "Docker", label: "Dk" },
      { name: "Figma", label: "Fg" },
      { name: "Canva", label: "Cv" },
      { name: "VS Code", label: "VS" },
      { name: "Antigravity", label: "Ag" },
      { name: "Linux", label: "Ln" },
      { name: "Vercel", label: "Vc" },
      { name: "GitHub", label: "GH" },
      { name: "Biome", label: "Bm" },
    ],
  },
};

const localized = {
  es: {
    locale: "es",
    lang: "es",
    ogLocale: "es_ES",
    localeLabel: "ES",
    title: "Desarrollador Full-Stack",
    description:
      "Desarrollador full-stack enfocado en flujos con IA, automatizacion, apps web, bots y sistemas escalables.",
    keywords: [
      "desarrollador full-stack",
      "flujos con IA",
      "automatizacion",
      "apps web",
      "bots",
      "TypeScript",
      "Astro",
      "Nicaragua",
    ],
    heroHeadlines: ["Diseno.", "Automatizo.", "Escalo."],
    heroTagline:
      "Creando bugs desde 2020, automatizando todo y construyendo cosas para internet.",
    contactHeading: "Queres que me una a tu equipo?",
    contactDescription:
      "Ahora mismo estoy buscando nuevas oportunidades. Si tenes una pregunta, un proyecto o solo queres saludar, mi inbox esta abierto.",
    aboutMe:
      "Me encanta aprender, pero mas que eso, me gusta convertir lo que aprendo en sistemas que trabajan conmigo. No compito contra la IA: la uso como palanca para pensar mas grande, construir mas rapido y resolver problemas mas complejos. Mientras otros la evitan, yo la vuelvo parte de mi flujo. Creo en el desarrollo como ingenieria real: menos trabajo manual, mas arquitectura, mas automatizacion y mas impacto. No estoy aqui para ser promedio. Estoy aqui para cambiar como se hace el trabajo.",
    stats: [
      { label: "Anos de experiencia", value: "4+" },
      { label: "Proyectos", value: "20+" },
    ],
    experience: [
      {
        year: "2025 - Presente",
        role: "Desarrollador independiente",
        company: "Self-Employed",
        description:
          "Construyo bots, herramientas de automatizacion y aplicaciones full-stack para clientes y proyectos personales.",
      },
      {
        year: "2024 - 2025",
        role: "Desarrollador Full-Stack",
        company: "Empresa privada (Contrato)",
        description:
          "Construyendo soluciones de software a medida y herramientas internas para negocios.",
      },
      {
        year: "2023 - 2024",
        role: "Desarrollador freelance",
        company: "Self-Employed",
        description:
          "Trabaje en proyectos personales, aprendiendo y construyendo aplicaciones web y herramientas de automatizacion.",
      },
      {
        year: "2021 - 2022",
        role: "Desarrollador Blockchain",
        company: "Fasttract",
        description:
          "Desarrolle smart contracts y contribui a proyectos de marketplaces NFT.",
      },
      {
        year: "2020 - 2021",
        role: "Pasante de desarrollo de software",
        company: "Fasttract",
        description:
          "Apoye en desarrollo blockchain y gane experiencia trabajando con smart contracts.",
      },
    ],
    projects: [
      {
        name: "Glucosa",
        description:
          "Bot de WhatsApp que registra niveles de glucosa y permite ver el historial desde un dashboard web.",
        tech: ["Node.js", "TypeScript", "Prisma", "Vitejs", "Tailwind CSS"],
        github: null,
        live: null,
        image: "glucosa",
      },
      {
        name: "Korvix",
        description:
          "Sistema que genera automaticamente videos tipo audiograma de Reddit usando IA y automatizacion de navegador. Lo hice como experimento divertido.",
        tech: [
          "Next.js",
          "TypeScript",
          "Prisma",
          "Playwright",
          "Tailwind CSS",
          "OpenAI",
        ],
        github: null,
        live: null,
        image: "sweep",
      },
      {
        name: "WhatsApp Presence",
        description:
          "App que actualiza automaticamente la foto de perfil de WhatsApp con imagenes estilizadas segun la cancion que suena en Spotify.",
        tech: ["TypeScript", "Express", "Spotify API", "Tailwind CSS"],
        github: null,
        live: null,
        image: "whatsapp",
      },
      {
        name: "Solanext",
        description:
          "Bots de tracking para Telegram y Discord creados con fuentes de datos reverse-engineered para monitorear tokens en tiempo real.",
        tech: [
          "Vite",
          "TypeScript",
          "Tailwind CSS",
          "WebSockets",
          "Docker",
          "Railway",
          "Discord API",
          "Telegram API",
        ],
        github: null,
        live: null,
        image: "solanext",
      },
      {
        name: "Mariposa",
        description:
          "Herramienta de scraping para LinkedIn Jobs que mejora la busqueda laboral recopilando y organizando vacantes con navegacion automatizada.",
        tech: ["TypeScript", "Playwright", "Vite", "Tailwind CSS"],
        github: null,
        live: null,
        image: "mariposa",
      },
      {
        name: "Sweep",
        description:
          "Herramienta que junta pequenos saldos sobrantes de varias wallets en una sola direccion usando llamadas RPC, para reutilizar fondos que normalmente quedan atrapados por limites de dust.",
        tech: ["TypeScript", "Vite", "Tailwind CSS"],
        github: null,
        live: null,
        image: "sweep",
      },
      {
        name: "Menu",
        description:
          "Menu interactivo con panel admin, generacion de video, modo claro/oscuro y soporte multi-idioma (i18n).",
        tech: ["TypeScript", "Vite", "Tailwind CSS", "Remotion", "Playwright"],
        github: null,
        live: null,
        image: "menu",
      },
    ],
    navLinks: [
      { name: "Sobre mi", href: "#about" },
      { name: "Stack", href: "#stack" },
      { name: "Experiencia", href: "#experience" },
      { name: "Proyectos", href: "#projects" },
      { name: "Contacto", href: "#contact" },
    ],
    ui: {
      aboutEyebrow: "Sobre mi",
      profileSpecs: "Perfil",
      role: "Rol",
      experience: "Experiencia",
      projects: "Proyectos",
      availability: "Disponibilidad",
      availabilityValue: "Abierto a oportunidades",
      stackEyebrow: "Stack",
      stackHeading: "Lo que uso",
      tools: "Herramientas",
      experienceEyebrow: "Experiencia",
      experienceHeading: "Donde he trabajado",
      projectsEyebrow: "Proyectos",
      projectsHeading: "Lo que he construido",
      contactEyebrow: "Contacto",
      getInTouch: "Hablemos",
      viewProjects: "Ver proyectos",
      code: "Codigo",
      live: "Live",
      email: "Email",
      emailIcon: "Icono de email",
      mainNav: "Principal",
      mobileNav: "Navegacion movil",
      openMenu: "Abrir menu",
      closeMenu: "Cerrar menu",
      language: "Idioma",
      footerLine: "De Nicaragua para el mundo.",
      notFoundTitle: "No encontrado | Angel Marenco",
      notFoundDescription: "La pagina que pediste no se pudo encontrar.",
      notFoundHeading: "Pagina no encontrada",
      notFoundCopy: "La pagina que estas buscando no existe o se movio.",
      backHome: "Volver al inicio",
      languageSelectorTitle: "Elige idioma",
      languageSelectorDescription:
        "Selecciona la version del portfolio que queres visitar.",
      spanish: "Espanol",
      english: "Ingles",
    },
  },
  en: {
    locale: "en",
    lang: "en",
    ogLocale: "en_US",
    localeLabel: "EN",
    title: "Full-Stack Developer",
    description:
      "Full-stack developer focused on AI workflows, automation, web apps, bots, and scalable systems.",
    keywords: [
      "full-stack developer",
      "AI workflows",
      "automation",
      "web apps",
      "bots",
      "TypeScript",
      "Astro",
      "Nicaragua",
    ],
    heroHeadlines: ["Design.", "Automate.", "Scale."],
    heroTagline:
      "Creating bugs since 2020, automating everything and building things for the internet.",
    contactHeading: "Want me to join your team?",
    contactDescription:
      "I'm currently looking for new job opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
    aboutMe:
      "I love to learn, but even more, I love turning what I learn into systems that work for me. I don't compete with AI. I use it as a lever to think bigger, build faster, and solve more complex problems. While others avoid it, I make it part of my workflow. I believe in development as real engineering, with less manual work, more architecture, more automation, and more impact. I'm not here to be average. I'm here to redefine how work is done.",
    stats: [
      { label: "Years of Experience", value: "4+" },
      { label: "Projects", value: "20+" },
    ],
    experience: [
      {
        year: "2025 - Present",
        role: "Independent Developer",
        company: "Self-Employed",
        description:
          "Building bots, automation tools, and full-stack applications for clients and personal projects.",
      },
      {
        year: "2024 - 2025",
        role: "Full Stack Developer",
        company: "Private Company (Contract)",
        description:
          "Built custom software solutions and internal tools for businesses.",
      },
      {
        year: "2023 - 2024",
        role: "Freelance Developer",
        company: "Self-Employed",
        description:
          "Worked on personal projects, learning and building web applications and automation tools.",
      },
      {
        year: "2021 - 2022",
        role: "Blockchain Developer",
        company: "Fasttract",
        description:
          "Developed smart contracts and contributed to NFT marketplace projects.",
      },
      {
        year: "2020 - 2021",
        role: "Software Developer Intern",
        company: "Fasttract",
        description:
          "Assisted in blockchain development and gained experience working with smart contracts.",
      },
    ],
    projects: [
      {
        name: "Glucosa",
        description:
          "A WhatsApp bot that logs blood glucose levels and lets users view their records through a web dashboard.",
        tech: ["Node.js", "TypeScript", "Prisma", "Vitejs", "Tailwind CSS"],
        github: null,
        live: null,
        image: "glucosa",
      },
      {
        name: "Korvix",
        description:
          "A system that generates Reddit-style audiogram videos automatically using AI and browser automation. Built as a fun experimental project.",
        tech: [
          "Next.js",
          "TypeScript",
          "Prisma",
          "Playwright",
          "Tailwind CSS",
          "OpenAI",
        ],
        github: null,
        live: null,
        image: "sweep",
      },
      {
        name: "WhatsApp Presence",
        description:
          "App that automatically updates WhatsApp profile pictures with styled images based on the song currently playing on Spotify.",
        tech: ["TypeScript", "Express", "Spotify API", "Tailwind CSS"],
        github: null,
        live: null,
        image: "whatsapp",
      },
      {
        name: "Solanext",
        description:
          "Tracking bots for Telegram and Discord built using reverse-engineered data sources to monitor tokens in real time.",
        tech: [
          "Vite",
          "TypeScript",
          "Tailwind CSS",
          "WebSockets",
          "Docker",
          "Railway",
          "Discord API",
          "Telegram API",
        ],
        github: null,
        live: null,
        image: "solanext",
      },
      {
        name: "Mariposa",
        description:
          "LinkedIn job scraping tool that improves job search by collecting and organizing listings with automated browsing.",
        tech: ["TypeScript", "Playwright", "Vite", "Tailwind CSS"],
        github: null,
        live: null,
        image: "mariposa",
      },
      {
        name: "Sweep",
        description:
          "Tool that aggregates tiny leftover balances from multiple user wallets into a single address using RPC calls, allowing funds that normally can't be transferred due to dust limits to be collected and reused.",
        tech: ["TypeScript", "Vite", "Tailwind CSS"],
        github: null,
        live: null,
        image: "sweep",
      },
      {
        name: "Menu",
        description:
          "Interactive menu with admin panel, video generation, dark/light mode, and multi-language support (i18n).",
        tech: ["TypeScript", "Vite", "Tailwind CSS", "Remotion", "Playwright"],
        github: null,
        live: null,
        image: "menu",
      },
    ],
    navLinks: [
      { name: "About", href: "#about" },
      { name: "Stack", href: "#stack" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    ui: {
      aboutEyebrow: "About",
      profileSpecs: "Profile specs",
      role: "Role",
      experience: "Experience",
      projects: "Projects",
      availability: "Availability",
      availabilityValue: "Open to opportunities",
      stackEyebrow: "Stack",
      stackHeading: "What I use",
      tools: "Tools",
      experienceEyebrow: "Experience",
      experienceHeading: "Where I've worked",
      projectsEyebrow: "Projects",
      projectsHeading: "What I've built",
      contactEyebrow: "Contact",
      getInTouch: "Get in touch",
      viewProjects: "View projects",
      code: "Code",
      live: "Live",
      email: "Email",
      emailIcon: "Email icon",
      mainNav: "Main",
      mobileNav: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      footerLine: "From Nicaragua to the world.",
      notFoundTitle: "Not found | Angel Marenco",
      notFoundDescription: "The page you requested could not be found.",
      notFoundHeading: "Page not found",
      notFoundCopy: "The page you are looking for does not exist or has moved.",
      backHome: "Back home",
      languageSelectorTitle: "Choose language",
      languageSelectorDescription:
        "Select the version of the portfolio you want to visit.",
      spanish: "Spanish",
      english: "English",
    },
  },
} as const;

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const siteData = {
  es: { ...shared, ...localized.es },
  en: { ...shared, ...localized.en },
} as const;

export const getSiteData = (locale: Locale = defaultLocale) => siteData[locale];

export const getLocalePath = (locale: Locale, hash = "") =>
  `/${locale}/${hash}`;

export default siteData;
