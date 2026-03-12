"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { SectionTitle } from "./SectionTitle";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle title="Experience" />
      <div className="relative pt-10 pb-12">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-linear-to-b from-transparent via-border to-transparent" />

        <div className="space-y-16">
          {siteData.experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-blue border-4 border-background z-10" />

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div
                  className={`p-8 rounded-3xl glass border-border space-y-4 ${
                    index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="text-sm font-bold text-accent-blue tracking-tighter uppercase">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                  </div>
                  <p className="text-lg font-medium text-secondary-text">
                    {exp.company}
                  </p>
                  <p className="text-secondary-text leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
