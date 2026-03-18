"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { siteData } from "@/data/siteData";
import { FaLinkedinIn } from "react-icons/fa6";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] opacity-60" />
      </div>

      {/* Large Background Image/Logo */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square z-0 opacity-[0.07] pointer-events-none hidden lg:block">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/logo.png"
            alt=""
            fill
            className="object-contain grayscale contrast-150 rotate-12 scale-125"
          />
          {/* Subtle overlay to fade the image */}
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-background/50 to-background" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-10 text-center lg:text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/5 border border-accent-blue/20 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-xs font-semibold text-accent-blue tracking-wide uppercase">
              Available for new projects
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-balance">
              Building digital <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-blue to-accent-cyan">
                experiences
              </span>{" "}
              <br />
              that scale.
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-xl text-secondary-text leading-relaxed font-medium">
              {siteData.aboutMe.split(".")[0]}. I build high-performance systems
              with a focus on automation and architectural excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-foreground text-background rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 text-base flex items-center gap-2"
            >
              View Projects
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all text-base flex items-center gap-2"
            >
              <span className="opacity-70">{"</>"}</span>
              Reach out
            </a>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-6"
          >
            <span className="text-sm font-bold text-secondary-text tracking-widest uppercase">
              Connect:
            </span>
            <div className="flex items-center gap-6">
              {[
                { icon: SiGithub, href: "https://github.com/jsmarenco" },
                { icon: FaLinkedinIn, href: "https://linkedin.com/in/jsmarenco" },
                { icon: HiOutlineMail, href: `mailto:${siteData.email}` },
              ].map((social, i) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-text hover:text-foreground transition-colors"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* The visual harshness/overlap part on the right side if not using hidden on logo */}
        <div className="relative hidden lg:block" />
      </div>
    </section>
  );
};
