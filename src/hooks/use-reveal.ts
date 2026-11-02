import { RefObject, useEffect } from "react";

/** Adds `is-visible` to every `selector` match inside `root` once it scrolls into view. */
export const useReveal = (root: RefObject<HTMLElement>, selector: string) => {
  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const elements = page.querySelectorAll<HTMLElement>(selector);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [root, selector]);
};
