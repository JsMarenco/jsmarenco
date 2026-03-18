import type { Metadata } from "next";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: `${siteData.name} | ${siteData.title}`,
  description: siteData.description,
  openGraph: {
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.description,
    type: "website",
    url: "https://jsmarenco.dev",
    siteName: siteData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.description,
    creator: "@jsmarenco",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <div className="space-y-32 pb-24">
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
