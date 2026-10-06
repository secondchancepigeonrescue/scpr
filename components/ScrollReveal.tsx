"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Scroll reveal: blocks marked with data-reveal fade in and rise slightly as
// they come into view. data-reveal="stagger" makes cards in a row come in one
// after another. Skipped for visitors whose device is set to reduce motion.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduceMotion) return;

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const block = entry.target as HTMLElement;
          observer.unobserve(block);
          block.classList.add("revealed");

          // Once it has faded in, hand the block back to its normal hover effects
          timers.push(
            window.setTimeout(() => {
              block.classList.remove("reveal", "revealed");
              block.style.transitionDelay = "";
            }, 1000),
          );
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((block) => {
      if (block.dataset.reveal === "stagger" && block.parentElement) {
        const position = Array.from(block.parentElement.children).indexOf(block);
        block.style.transitionDelay = `${position * 90}ms`;
      }
      block.classList.add("reveal");
      observer.observe(block);
    });

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
