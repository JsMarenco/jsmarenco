"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
      >
        <h1 className="text-[12rem] font-bold tracking-tighter leading-none text-white/5 select-none">
          404
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
          <h2 className="text-4xl font-bold">Lost in Space?</h2>
          <p className="text-secondary-text text-lg max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved to
            another dimension.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link
          href="/"
          className="px-8 py-4 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-opacity"
        >
          Take Me Home
        </Link>
      </motion.div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/10 rounded-full blur-[128px]" />
      </div>
    </main>
  );
}
