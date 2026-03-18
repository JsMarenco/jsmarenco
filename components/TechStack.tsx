"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { SectionTitle } from "./SectionTitle";

export const TechStack = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  const categories = [
    { title: "Frontend", data: siteData.techStack.frontend },
    { title: "Backend", data: siteData.techStack.backend },
    { title: "Tools", data: siteData.techStack.tools },
  ];

  return (
    <section id="stack" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle title="Tech Stack" />
      <div className="pt-8 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {categories.map((category) => (
          <div
            key={category.title}
            className="break-inside-avoid space-y-6 mb-8"
          >
            <h3 className="text-xl font-bold border-l-2 border-accent-blue pl-4">
              {category.title}
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {category.data.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={item}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass border-border hover:border-white/20 transition-colors"
                >
                  <tech.icon className="w-4 h-4 text-accent-blue" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
