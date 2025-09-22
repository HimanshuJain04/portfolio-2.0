"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll duration (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out
      touchMultiplier: 1.5, // more movement for touch
      wheelMultiplier: 1, // default wheel sensitivity
      touchInertiaMultiplier: 35, // inertia strength
      smoothWheel: true, // enables smooth wheel scroll
      syncTouch: false, // disables syncing to touch input frame-by-frame
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
