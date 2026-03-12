"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { SectionTitle } from "./SectionTitle";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto space-y-12">
      <SectionTitle title="About Me" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
            {siteData.description}
          </p>
          <p className="text-lg text-secondary-text leading-relaxed">
            {siteData.aboutMe}
          </p>
          <div className="flex gap-12 pt-4">
            {siteData.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-secondary-text uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden glass border-border"
        >
          <div className="absolute inset-0 bg-linear-to-br from-accent-blue/10 via-accent-purple/10 to-accent-pink/10" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-sm font-mono text-secondary-text">
              <span className="text-accent-blue">const</span> developer = {"{"}
              <br />
              &nbsp;&nbsp;name:{" "}
              <span className="text-accent-pink">"{siteData.name}"</span>,<br />
              &nbsp;&nbsp;focus:{" "}
              <span className="text-accent-pink">"Automation & IA"</span>,<br />
              &nbsp;&nbsp;aesthetic:{" "}
              <span className="text-accent-pink">"Engineering Impact"</span>
              <br />
              {"}"}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
