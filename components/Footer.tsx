import Image from "next/image";
import { siteData } from "@/data/siteData";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 transition-transform duration-500 group-hover:rotate-[360deg]">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg tracking-tighter uppercase">
              {siteData.username}
            </span>
          </div>
          <p className="text-sm text-secondary-text">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1 text-sm text-secondary-text">
          <p>With love from Nicaragua to the world</p>
        </div>
      </div>
    </footer>
  );
};
