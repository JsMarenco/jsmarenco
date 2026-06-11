const siteData = {
  name: "Angel Marenco",
  username: "JsMarenco",
  title: "Full-Stack Developer",
  description:
    "Full-stack developer focused on AI workflows, automation, web apps, bots, and scalable systems.",
  heroHeadlines: ["Design.", "Automate.", "Scale."],
  heroTagline:
    "Creating bugs since 2020, automating everything and building things for the internet.",
  contactHeading: "Want me to join your team?",
  contactDescription:
    "I'm currently looking for new job opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
  aboutMe:
    "I love to learn, but even more, I love turning what I learn into systems that work for me. I don't compete with AI. I use it as a lever to think bigger, build faster, and solve more complex problems. While others avoid it, I make it part of my workflow. I believe in development as real engineering, with less manual work, more architecture, more automation, and more impact. I'm not here to be average. I'm here to redefine how work is done.",
  email: "hello@jsmarenco.dev",
  stats: [
    { label: "Years of Experience", value: "4+" },
    { label: "Projects", value: "20+" },
  ],
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
};

export default siteData;
