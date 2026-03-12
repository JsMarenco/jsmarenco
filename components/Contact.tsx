"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub, SiX } from "react-icons/si";
import { siteData } from "@/data/siteData";
import { SectionTitle } from "./SectionTitle";

export const Contact = () => {
  const socialIcons: Record<string, React.ElementType> = {
    GitHub: SiGithub,
    LinkedIn: FaLinkedinIn,
    X: SiX,
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionTitle title="Get in Touch" />

      <div className="flex flex-col items-center justify-center space-y-12 pt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h3 className="text-3xl md:text-5xl font-bold">
            {siteData.contactHeading}
          </h3>
          <p className="text-lg text-secondary-text max-w-xl mx-auto">
            {siteData.contactDescription}
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <motion.a
            href={`mailto:${siteData.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold transition-all shadow-xl shadow-accent-blue/10"
          >
            <HiOutlineMail className="w-6 h-6" />
            Send an Email
          </motion.a>

          {siteData.socials.map((social) => {
            const Icon = socialIcons[social.name];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-4 rounded-full glass border-border hover:border-white/20 transition-all text-secondary-text hover:text-accent-blue"
                title={social.name}
              >
                {Icon && <Icon className="w-6 h-6" />}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
