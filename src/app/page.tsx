"use client";

import { FloatingDockSection } from "@/components/common/floating-dock-section";
import { AboutMe } from "@/components/home/about-me";
import { Activity } from "@/components/home/activity";
import { Experience } from "@/components/home/experience";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { Projects } from "@/components/home/projects-section";
import { Skills } from "@/components/home/skills";
import { StarsBackground } from "@/components/ui/stars-background";
import { useLenis } from "@/hooks/useLenis";

export default function Home() {
  useLenis();

  return (
    <div className="relative pt-32 pb-24 scroll-smooth bg-white dark:bg-black w-full">
      <StarsBackground />

      <div className="max-w-2xl relative px-6 md:px-0 z-10 w-full min-h-screen mx-auto flex flex-col gap-10">
        <Navbar />
        <AboutMe />
        <Skills />
        <Activity />
        <Experience />
        <Projects />
        <Footer />
        <FloatingDockSection />
      </div>
    </div>
  );
}
