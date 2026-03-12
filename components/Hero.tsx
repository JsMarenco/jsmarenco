"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { siteData } from "@/data/siteData";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1] text-balance">
              {siteData.heroHeadlines[0]} <br />
              <span className="text-secondary-text">
                {siteData.heroHeadlines[1]}
              </span>{" "}
              <br />
              {siteData.heroHeadlines[2]}
            </h1>
            <p className="max-w-md mx-auto lg:mx-0 text-lg text-secondary-text leading-relaxed font-medium">
              {siteData.heroTagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="group px-6 py-3 bg-foreground text-background rounded-full font-bold transition-all duration-300 hover:opacity-90 text-sm"
            >
              <span className="flex items-center gap-2">
                Projects{" "}
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 glass border-white/5 rounded-full font-bold hover:bg-white/5 transition-all text-sm"
            >
              Reach out
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-40 h-40 p-8 rounded-3xl border border-white/10 glass flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain grayscale contrast-125"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
