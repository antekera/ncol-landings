"use client";

import { useEffect, useRef, useState } from "react";

const numberFormatter = new Intl.NumberFormat("es-VE");

type StatCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
};

export function StatCounter({ value, prefix = "", suffix = "" }: StatCounterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let frame = 0;
    let started = false;
    const complete = () => window.cancelAnimationFrame(frame);

    const start = () => {
      if (started) return;
      started = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        frame = window.requestAnimationFrame(() => setCurrentValue(value));
        return;
      }

      const startedAt = performance.now();
      const duration = 1250;

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - (1 - progress) ** 4;
        setCurrentValue(Math.round(value * eased));

        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };

      frame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      complete();
    };
  }, [value]);

  return (
    <span ref={elementRef} aria-label={`${prefix}${numberFormatter.format(value)}${suffix}`}>
      {prefix}
      {numberFormatter.format(currentValue)}
      {suffix}
    </span>
  );
}
