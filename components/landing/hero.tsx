"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Accent, ButtonLink, Container } from "./ui";

/**
 * Full-bleed photo hero with a cinematic scroll-out: the photo slowly zooms and darkens
 * while the copy drifts up and fades. At scroll 0 every value is at rest, so the server
 * render, the CSS-only entrance and the LCP paint are unaffected.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Ranges collapse to identity for reduced motion (values at 0 match, so hydration is stable).
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.18]);
  const shade = useTransform(scrollYProgress, [0, 0.9], [0, reduce ? 0 : 0.7]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, reduce ? 1 : 0]);

  return (
    <section ref={ref} id="top" className="tone-dark relative isolate flex min-h-[92svh] items-center overflow-hidden pt-16">
      <motion.div className="absolute inset-0 -z-20" style={{ scale: photoScale }}>
        {/* Art-directed sizes: phones get a 44KB file. Light blur + compression is invisible under the overlay. */}
        <picture>
          <source media="(max-width: 640px)" srcSet="/hero/dining-828.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element -- <picture> art direction isn't supported by next/image */}
          <img
            src="/hero/dining-1600.webp"
            alt=""
            fetchPriority="high"
            className="h-full w-full object-cover object-[center_40%]"
          />
        </picture>
      </motion.div>
      {/* Warm ink overlay keeps text at AA contrast; ember light rises from below */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[radial-gradient(ellipse_at_50%_100%,rgba(242,106,27,0.30),transparent_65%)]"
      />
      <motion.div aria-hidden className="absolute inset-0 -z-10 bg-ink" style={{ opacity: shade }} />

      <motion.div style={{ y: copyY, opacity: copyOpacity }} className="w-full">
        <Container className="py-24 text-center sm:py-32">
          <div className="mx-auto max-w-4xl animate-in space-y-6 duration-700 slide-in-from-bottom-4 motion-reduce:animate-none">
            <h1 className="text-balance text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[80px]">
              Operational Advantage
              <br />
              <Accent>Powered by Vision&nbsp;AI</Accent>
            </h1>
            <p className="text-lg font-semibold tracking-[-0.01em] sm:text-2xl">
              Increase Cash Flow. Grow Revenue. Improve Margins.
            </p>
            <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
              Torchline transforms existing camera systems into an operational intelligence platform that helps organizations uncover opportunities to increase cash flow, grow revenue, and improve margins.
            </p>
          </div>
          <div className="mt-10 flex animate-in flex-col justify-center gap-3 delay-150 duration-700 fill-mode-backwards slide-in-from-bottom-4 motion-reduce:animate-none sm:flex-row">
            <ButtonLink href="#demo-video">See Torchline In Action</ButtonLink>
            <ButtonLink href="#book-demo" variant="secondary" className="bg-ink/40 backdrop-blur-sm hover:bg-ink/60">
              Book A Demo
            </ButtonLink>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
