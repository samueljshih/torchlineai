"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Pinned scene: the camera photo opens from a rounded card to full-bleed as the visitor
 * scrolls, then dims into the dark section that follows.
 * Card insets come from CSS variables so they can differ per breakpoint.
 */
export function CameraScene() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // 1 = card, 0 = full-bleed. Reduced motion stays a static card (value at 0 is the same either way).
  const card = useTransform(scrollYProgress, [0, 0.6], [1, reduce ? 1 : 0]);
  const clipPath = useMotionTemplate`inset(calc(${card} * var(--card-y)) calc(${card} * var(--card-x)) round calc(${card} * 28px))`;
  const photoScale = useTransform(scrollYProgress, [0, 0.6], [1.15, reduce ? 1.15 : 1]);
  const dim = useTransform(scrollYProgress, [0.7, 1], [0, reduce ? 0 : 1]);

  return (
    <div
      ref={ref}
      className="tone-light relative h-[220vh] [--card-x:4%] [--card-y:22%] motion-reduce:h-auto sm:[--card-x:6%] sm:[--card-y:14%] lg:[--card-x:10.5%] lg:[--card-y:9%]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden motion-reduce:static motion-reduce:aspect-[16/9] motion-reduce:h-auto">
        <motion.div className="absolute inset-0" style={{ clipPath }}>
          <motion.div className="absolute inset-0" style={{ scale: photoScale }}>
            <Image
              src="/security_camera.webp"
              alt="Security camera mounted on wall"
              fill
              unoptimized
              sizes="100vw"
              className="object-cover object-[55%_45%]"
            />
          </motion.div>
          <motion.div aria-hidden className="absolute inset-0 bg-ink" style={{ opacity: dim }} />
        </motion.div>
      </div>
    </div>
  );
}
