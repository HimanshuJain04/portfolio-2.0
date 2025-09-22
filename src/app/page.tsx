import { FloatingDockSection } from "@/components/common/FloatingDockSection";
import { Footer } from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { AboutMe } from "@/components/home/about-me";
import { Activity } from "@/components/home/activity";
import { Experience } from "@/components/home/experience";
import { Skills } from "@/components/home/skills";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <div className="relative pt-32 pb-24 bg-white dark:bg-black w-full">
      <StarsBackground />

      <div className="max-w-2xl relative z-10 w-full min-h-screen mx-auto flex flex-col gap-10">
        <Navbar />
        <AboutMe />
        <Skills />
        <Activity />
        <Experience />
        {/* <Projects /> */}
        <Footer />
        <FloatingDockSection />
      </div>
    </div>
  );
}
