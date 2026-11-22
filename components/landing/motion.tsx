"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** One easing curve for every JS-driven transition on the page. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Wraps the page. After hydration it adds html.reveal-ready, which is what arms the
 * scroll-reveal CSS. Until then (or if JS never runs) all content is simply visible.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
  }, []);
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  as?: "div" | "li" | "article";
};

/** Fades content up the first time it scrolls into view (styles in globals.css, .reveal). */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  // Anything already on screen at hydration shows immediately, before reveals are armed,
  // so nothing the visitor is looking at blinks out and back in.
  useLayoutEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight && rect.bottom > 0) setShown(true);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      data-shown={shown}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
