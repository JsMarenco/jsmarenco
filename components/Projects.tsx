"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { siteData } from "@/data/siteData";
import { SectionTitle } from "./SectionTitle";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle title="Featured Projects" />

      <div className="pt-8 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {siteData.projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="break-inside-avoid group relative rounded-3xl overflow-hidden glass border-border hover:border-white/20 transition-all duration-500 flex flex-col h-full"
          >
            {project.image && (
              <div className="relative pt-0 px-0 overflow-hidden scale-[1.05] transition-transform duration-500">
                <div className="relative z-10 flex justify-center">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            )}

            <div className="p-8 space-y-6 flex flex-col flex-grow">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-amber-400 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-secondary-text leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(project.github || project.live) && (
                <div className="flex items-center gap-4 pt-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-secondary-text hover:text-foreground transition-colors"
                    >
                      <SiGithub className="w-5 h-5" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-secondary-text hover:text-foreground transition-colors"
                    >
                      <HiOutlineExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
