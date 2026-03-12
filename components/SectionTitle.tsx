"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="relative flex items-center justify-center py-10 my-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[1px] bg-linear-to-r from-transparent via-border to-transparent" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 px-6 text-3xl md:text-4xl font-bold bg-background"
      >
        {title}
      </motion.h2>
    </div>
  );
};
