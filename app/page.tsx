import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  FaArrowUpRightFromSquare,
  FaBug,
  FaCode,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

type Item = {
  title: string;
  description: string;
  stack: string;
  status: string;
};

type Study = {
  title: string;
  place: string;
  period: string;
  note: string;
};

type WorkingItem = {
  title: string;
  description: string;
};

type SocialItem = {
  label: string;
  href: string;
  handle: string;
  icon: ReactNode;
};

/**
 * Main portfolio page.
 */
const Home = () => {
  const projects: Item[] = [
    {
      title: "Issue Radar",
      description:
        "Groups repeated bug reports and suggests fixes before the sprint catches fire.",
      stack: "Next.js, PostgreSQL, Redis",
      status: "Stable",
    },
    {
      title: "Deploy Notes",
      description:
        "Release tracker for teams that deploy fast and forget what changed ten minutes later.",
      stack: "React, Node.js, Docker",
      status: "Shipping weekly",
    },
    {
      title: "Ops Buddy",
      description:
        "Turns logs into plain language so the whole team can understand incidents.",
      stack: "TypeScript, Express, OpenTelemetry",
      status: "In progress",
    },
  ];

  const studies: Study[] = [
    {
      title: "Software Engineering",
      place: "University Program",
      period: "2019 — 2023",
      note: "Algorithms, architecture, databases, and debugging under pressure.",
    },
    {
      title: "Cloud & DevOps Specialization",
      place: "Technical Institute",
      period: "2023 — 2024",
      note: "CI/CD pipelines, observability, and resilient infrastructure.",
    },
  ];

  const workingOn: WorkingItem[] = [
    {
      title: "Refactoring old APIs",
      description: "Turning legacy endpoints into maintainable services.",
    },
    {
      title: "Improving DX",
      description: "Automating setup so teams code faster with less friction.",
    },
    {
      title: "Fixing weird production bugs",
      description: "Probably chasing that issue that only appears on Fridays.",
    },
  ];

  const socials: SocialItem[] = [
    {
      label: "GitHub",
      href: "https://github.com",
      handle: "@yourhandle",
      icon: <FaGithub />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      handle: "/in/yourhandle",
      icon: <FaLinkedin />,
    },
    {
      label: "X",
      href: "https://x.com",
      handle: "@yourhandle",
      icon: <FaXTwitter />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      handle: "@yourhandle",
      icon: <FaInstagram />,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-neutral-950 text-neutral-100">
      <div className="pointer-events-none fixed -top-28 left-8 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="pointer-events-none fixed top-40 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-16">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.03] to-white/[0.02] p-8 sm:p-12"
        >
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-xs tracking-[0.28em] text-neutral-400 uppercase">
                Full Stack Developer
              </p>
              <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">
                Yep, another full stack developer.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-neutral-300 sm:text-lg">
                I build web products that solve actual workflow pain. Most days
                I ship features, remove complexity, or fix bugs before users
                notice.
              </p>
              <p className="mt-3 max-w-2xl text-sm text-neutral-400">
                Not a polished superhero website. More like a live status page
                of what I am building and fixing.
              </p>
            </div>

            <div className="relative lg:mt-2">
              <div className="absolute -top-5 -left-4 -z-10 h-20 w-24 rotate-[-8deg] rounded-2xl bg-gradient-to-br from-fuchsia-500/35 to-indigo-500/25 blur-xl" />
              <div className="absolute -right-4 -bottom-5 -z-10 h-20 w-24 rotate-[10deg] rounded-2xl bg-gradient-to-br from-cyan-500/35 to-blue-500/25 blur-xl" />
              <article className="rounded-3xl border border-white/15 bg-black/40 p-4 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/profile-photo.svg"
                    alt="Developer profile photo"
                    width={640}
                    height={640}
                    className="h-auto w-full"
                    priority
                  />
                </div>
                <p className="mt-3 text-sm text-neutral-300">
                  This is where my face goes, so yes, now there is a photo.
                </p>
              </article>
            </div>
          </div>
        </motion.section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="-rotate-1 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-6"
          >
            <h2 className="text-2xl font-semibold tracking-tight">Socials</h2>
            <p className="mt-2 text-sm text-neutral-300">
              You asked where my social links are. Here they are, visible and
              not hidden in a tiny footer.
            </p>
            <ul className="mt-5 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm transition hover:border-white/35 hover:bg-white/[0.08]"
                  >
                    <span className="flex items-center gap-2">
                      {social.icon}
                      {social.label}
                    </span>
                    <span className="text-neutral-400">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.aside>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rotate-[0.7deg] rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <FaCode className="text-neutral-300" />
              <h2 className="text-2xl font-semibold tracking-tight">
                Projects
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`rounded-2xl border border-white/10 p-5 ${
                    index % 2 === 0
                      ? "-rotate-[0.8deg] bg-gradient-to-br from-white/[0.08] to-white/[0.03]"
                      : "rotate-[0.8deg] bg-gradient-to-br from-white/[0.05] to-white/[0.02]"
                  }`}
                >
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    {project.description}
                  </p>
                  <p className="mt-4 text-xs text-neutral-400">
                    {project.stack}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    {project.status}
                  </p>
                </article>
              ))}
            </div>
          </motion.section>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight">About me</h2>
            <p className="mt-4 text-neutral-300">
              I design and build products end to end: frontend, backend,
              databases, infra, and all the glue in between.
            </p>
            <p className="mt-4 text-neutral-300">
              Probably right now I am debugging something random in production,
              then rewriting it cleaner right after.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <FaGraduationCap className="text-neutral-300" />
              <h2 className="text-2xl font-semibold tracking-tight">Studies</h2>
            </div>
            <ul className="space-y-4">
              {studies.map((study) => (
                <li
                  key={study.title}
                  className="rounded-2xl bg-white/[0.03] p-4"
                >
                  <h3 className="font-medium">{study.title}</h3>
                  <p className="text-sm text-neutral-400">
                    {study.place} · {study.period}
                  </p>
                  <p className="mt-2 text-sm text-neutral-300">{study.note}</p>
                </li>
              ))}
            </ul>
          </motion.article>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="-rotate-[0.6deg] rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 sm:p-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <FaBug className="text-neutral-300" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Currently working on
            </h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {workingOn.map((item) => (
              <li key={item.title} className="rounded-2xl bg-black/25 p-5">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rotate-[0.4deg] rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-violet-500/10 to-cyan-500/15 p-8 sm:p-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-3xl text-neutral-200">
            I am not actively looking for a new role. If you really want me to
            work with you, message me through my social channels and tell me
            what you are building.
          </p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm transition hover:border-white/45 hover:bg-white/20"
          >
            Let&apos;s talk
            <FaArrowUpRightFromSquare />
          </a>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
