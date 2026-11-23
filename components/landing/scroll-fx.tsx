"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/*
 * Scroll-linked effects. Rules shared by everything here:
 * - driven by native scroll position only (no scroll hijacking)
 * - the value at scroll progress 0 never depends on the reduced-motion flag, so SSR and
 *   hydration always match; reduced motion is handled with motion-reduce: CSS overrides
 *   or with ranges that collapse to their starting value
 */

function subscribeDesktop(onChange: () => void) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** True on lg+ screens. Always false during SSR. */
export function useIsDesktop() {
  return useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => false,
  );
}

function Word({ progress, range, children }: { progress: MotionValue<number>; range: [number, number]; children: string }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="motion-reduce:!opacity-100">
      {children}{" "}
    </motion.span>
  );
}

/** Text whose words brighten one by one as it scrolls through the viewport. */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 55%"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={cn("relative", className)}>
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </p>
  );
}

/** Tilts content back in 3D and settles it flat as it scrolls into view. */
export function TiltIn({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 30%"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);

  // The at-rest value here is tilted (not identity), so reduced motion is handled in CSS,
  // keeping server and client markup identical.
  return (
    <div ref={ref} className={cn("relative [perspective:1600px]", className)}>
      <motion.div className="origin-top motion-reduce:!transform-none" style={{ rotateX, scale, y }}>
        {children}
      </motion.div>
    </div>
  );
}
