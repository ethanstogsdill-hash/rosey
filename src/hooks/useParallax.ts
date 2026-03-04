"use client";

import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".parallax-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = (sectionCenter - viewportCenter) * 0.04;
        (section as HTMLElement).style.setProperty(
          "--parallax-y",
          `${offset}px`
        );
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
