import type { MouseEvent } from "react";

/** Los enlaces internos (`#seccion`) se desplazan con suavidad en lugar de saltar. Se usa como onClick del contenedor. */
export const scrollToHashLink = (event: MouseEvent<HTMLElement>) => {
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
  const target = link && document.getElementById(link.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
