import {
  SiBiome,
  SiBun,
  SiCanva,
  SiDocker,
  SiFigma,
  SiFramer,
  SiGithub,
  SiGoogle,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import mariposaImg from "../assets/projects/mariposa.png";
import solanextImg from "../assets/projects/solanext.png";
import sweepImg from "../assets/projects/sweep.png";
import whatsappImg from "../assets/projects/whatsapp.png";
import glucosaImg from "../assets/projects/glucosa.png";
import menuImg from "../assets/projects/menu.png";

export const siteData = {
  name: "Angel Marenco",
  username: "JsMarenco",
  title: "Full-Stack Developer",
  description: "Yep, another full stack developer",
  heroHeadlines: ["Design.", "Automate.", "Scale."],
  heroTagline:
    "Creating bugs since 2020, automating everything and building things for the internet..",
  contactHeading: "Want me to join your team?",
  contactDescription:
    "I'm currently looking for new job opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
  aboutMe:
    "I love to learn, but even more, I love turning what I learn into systems that work for me. I don't compete with artificial intelligence—I use it as a lever. While others fear it, I integrate it into my workflow to think bigger, build faster, and solve more complex problems. I believe in development as real engineering: less manual tasks, more architecture, more automation, and more impact. I'm not here to be average; I'm here to redefine how work is done.",
  email: "hello@jsmarenco.dev",
  stats: [
    { label: "Years of Experience", value: "4+" },
    { label: "Projects", value: "20+" },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/jsmarenco", icon: "SiGithub" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jsmarenco",
      icon: "FaLinkedinIn",
    },
    { name: "X", url: "https://x.com/jsmarenco", icon: "SiX" },
  ],
  techStack: {
    frontend: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Framer Motion", icon: SiFramer },
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "Bun", icon: SiBun },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Railway", icon: SiRailway },
    ],
    tools: [
      { name: "Docker", icon: SiDocker },
      { name: "Figma", icon: SiFigma },
      { name: "Canva", icon: SiCanva },
      { name: "VS Code", icon: VscCode },
      { name: "Antigravity", icon: SiGoogle },
      { name: "Linux", icon: SiLinux },
      { name: "Vercel", icon: SiVercel },
      { name: "GitHub", icon: SiGithub },
      { name: "Biome", icon: SiBiome },
    ],
  },
  experience: [
    {
      year: "2025 - Present",
      role: "Independent Developer",
      company: "Self-Employed",
      description:
        "Building bots, automation tools, and small crypto-related projects.",
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
      tech: [
        "Node.js",
        "TypeScript",
        "Prisma",
        "Vitejs",
        "Tailwind CSS"
      ],
      github: null,
      live: null,
      image: glucosaImg,
      color: "from-emerald-500 to-teal-600",
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
      image: sweepImg,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "WhatsApp Presence",
      description:
        "App that automatically updates WhatsApp profile pictures with styled images based on the song currently playing on Spotify.",
      tech: ["TypeScript", "Express", "Spotify API", "Tailwind CSS"],
      github: null,
      live: null,
      image: whatsappImg,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Solanext",
      description:
        "Crypto tracking bots for Telegram and Discord built using reverse-engineered data sources to monitor Solana tokens in real time.",
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
      image: solanextImg,
      color: "from-indigo-500 to-cyan-600",
    },
    {
      name: "Mariposa",
      description:
        "LinkedIn job scraping tool that improves job search by collecting and organizing listings with automated browsing.",
      tech: ["TypeScript", "Playwright", "Vite", "Tailwind CSS"],
      github: null,
      live: null,
      image: mariposaImg,
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Sweep",
      description:
        "Tool that aggregates tiny leftover balances from multiple user wallets into a single address using RPC calls, allowing funds that normally can't be transferred due to dust limits to be collected and reused.",
      tech: ["TypeScript", "Vite", "Tailwind CSS"],
      github: null,
      live: null,
      image: sweepImg,
      color: "from-purple-500 to-indigo-600",
    },
    {
      "name": "Menu",
      "description": "Interactive menu with admin panel, video generation, dark/light mode, and multi-language support (i18n).",
      "tech": ["TypeScript", "Vite", "Tailwind CSS", "Remotion", "Playwright"],
      "github": null,
      "live": null,
      "image": menuImg,
      "color": "from-purple-500 to-indigo-600"
    }
  ],
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
};
