"use client";

import { FloatingDockSection } from "@/components/common/floating-dock-section";
import { About } from "@/components/home/about";
import { AboutMe } from "@/components/home/about-me";
import { Activity } from "@/components/home/activity";
import { Contact } from "@/components/home/contact-us";
import { Experience } from "@/components/home/experience";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { SelectedWork } from "@/components/home/selected-work";
import { Skills } from "@/components/home/skills";
import { StarsBackground } from "@/components/ui/stars-background";
import { useLenis } from "@/hooks/useLenis";
import Script from "next/script";

export default function Home() {
  useLenis();

  return (
    <div className="relative pt-32 pb-24 scroll-smooth bg-neutral-50 dark:bg-neutral-950 w-full">
      <Script id="ld-person" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Himanshu Jain",
          url: "https://www.himanshu.works",
          image: "https://www.himanshu.works/images/profile.png",
          sameAs: [
            "https://github.com/HimanshuJain04",
            "https://www.linkedin.com/in/himanxhujain/",
            "https://x.com/himanxhujain",
          ],
          jobTitle: "Software Engineer",
          worksFor: {
            "@type": "Organization",
            name: "GastroSmart",
          },
        })}
      </Script>
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Himanshu Jain — Portfolio",
          url: "https://www.himanshu.works",
          description:
            "Portfolio of Himanshu Jain, Software Engineer and Founding Engineer",
        })}
      </Script>
      <StarsBackground />
      <Navbar />

      <div className="max-w-2xl relative px-6 md:px-0 z-10 w-full min-h-screen mx-auto flex flex-col gap-16">
        <AboutMe />
        <SelectedWork />
        <Experience />
        <Activity />
        <Skills />
        <About />
        <Contact />
        <Footer />
        <FloatingDockSection />
      </div>
    </div>
  );
}
