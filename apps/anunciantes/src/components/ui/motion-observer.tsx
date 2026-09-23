"use client";

import { useEffect } from "react";

export function MotionObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    const observedElements = new WeakSet<HTMLElement>();
    const observeElement = (element: HTMLElement) => {
      if (observedElements.has(element)) return;
      observedElements.add(element);
      observer.observe(element);
    };
    const observeReveals = (node: ParentNode) => {
      if (node instanceof HTMLElement && node.matches("[data-reveal]")) {
        observeElement(node);
      }
      node.querySelectorAll<HTMLElement>("[data-reveal]").forEach(observeElement);
    };

    observeReveals(document);
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) observeReveals(node);
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
