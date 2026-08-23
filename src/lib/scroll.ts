import type { MouseEvent } from "react";

// Smoothly scroll to an in-page section via Lenis (falls back to native smooth
// scroll). If the target isn't on the current page, does nothing and lets the
// link navigate normally (e.g. "/#work" from a /work/[slug] page).
export function scrollToId(e: MouseEvent, href: string, offset = -88) {
  if (!href.includes("#")) return;
  const id = href.split("#")[1];
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return; // not on this page — let the link navigate

  e.preventDefault();
  if (window.lenis) {
    window.lenis.scrollTo(el, { offset });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
  history.replaceState(null, "", `#${id}`);
}
