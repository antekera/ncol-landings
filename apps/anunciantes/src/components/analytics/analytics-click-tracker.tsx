"use client";

import { useEffect } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

export function AnalyticsClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest<HTMLElement>("[data-ga-event]");
      const eventName = element?.dataset.gaEvent;
      if (!element || !eventName) return;

      const parameters: Record<string, string> = {};
      for (const [key, value] of Object.entries(element.dataset)) {
        if (key.startsWith("gaParam") && value) {
          const parameterName = key
            .slice("gaParam".length)
            .replace(/^[A-Z]/, (letter) => letter.toLowerCase());
          parameters[parameterName] = value;
        }
      }

      trackAnalyticsEvent(eventName, parameters);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
