"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { siteData } from "@/data/siteData";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 sm:p-8 pointer-events-none">
        <AnimatePresence>
          {scrolled && (
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="backdrop-blur-md bg-black/40 rounded-full px-4 sm:px-8 py-3 flex items-center justify-between gap-8 border border-white/10 shadow-2xl shadow-black/50 w-full max-w-2xl pointer-events-auto"
            >
              <a href="/" className="flex items-center gap-2 group">
                <div className="relative w-8 h-8 transition-transform duration-500 group-hover:rotate-[360deg]">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-lg tracking-tighter">
                  {siteData.username}
                </span>
              </a>

              <div className="hidden md:flex items-center gap-8">
                {siteData.navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xs font-semibold uppercase tracking-widest text-secondary-text hover:text-foreground transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/60 md:hidden flex flex-col items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-xs space-y-6"
            >
              {siteData.navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="block text-3xl font-bold hover:text-accent-blue transition-colors text-center"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
