"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { COMMAND_CENTER_URL, PILLARS } from "./content";
import { HudFrame } from "./hud";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { Container, Kicker } from "./ui";

function Word({ progress, range, children }: { progress: MotionValue<number>; range: [number, number]; children: string }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  // Reduced motion is handled in CSS (not useReducedMotion) so server and client markup always match.
  return (
    <motion.span style={{ opacity }} className="motion-reduce:!opacity-100">
      {children}{" "}
    </motion.span>
  );
}

/** Statement whose words brighten one by one as the reader scrolls through it. */
function ScrollStatement({ lines }: { lines: string[] }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 50%"] });

  const words = lines.flatMap((line, lineIndex) => line.split(" ").map((word) => ({ word, lineIndex })));
  const total = words.length;

  return (
    <h2
      ref={ref}
      className="relative text-balance text-[38px] font-medium leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[88px]"
    >
      {lines.map((line, lineIndex) => (
        <span key={line} className={lineIndex > 0 ? "block text-zinc-500" : "block"}>
          {words.map(({ word, lineIndex: li }, i) =>
            li === lineIndex ? (
              <Word key={i} progress={scrollYProgress} range={[i / total, (i + 1) / total]}>
                {word}
              </Word>
            ) : null,
          )}
        </span>
      ))}
    </h2>
  );
}

function CommandCenterShot() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // The source's left third is empty backdrop, so zoom toward the bottom-right where the product sits.
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.45, 1.35]);

  return (
    <Reveal>
      <div ref={ref} className="relative">
        <HudFrame className="aspect-[4/3] sm:aspect-[16/9]">
          <motion.div className="absolute inset-0 origin-bottom-right" style={{ scale }}>
            <Image
              src={COMMAND_CENTER_URL}
              alt="Torchline Operations Command Center"
              fill
              sizes="(min-width: 1440px) 2064px, 150vw"
              className="object-cover object-right-bottom"
            />
          </motion.div>
        </HudFrame>
      </div>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
        Fig. 01 <span className="mx-2 text-zinc-700">/</span> Operations Command Center
      </p>
    </Reveal>
  );
}

export function BigIdea() {
  return (
    <section id="platform" className="relative scroll-mt-16 border-t border-line">
      <Container className="space-y-16 py-24 sm:space-y-24 sm:py-32 lg:py-40">
        <div className="space-y-10">
          <Kicker index="01">Platform</Kicker>
          <ScrollStatement
            lines={["Most Restaurants Already Have Cameras.", "Very Few Have Operational Intelligence."]}
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-3 text-lg leading-relaxed text-zinc-400 sm:text-xl lg:col-span-5 lg:col-start-1">
            <p className="text-white">Cameras record what happened.</p>
            <p>Torchline helps organizations uncover the operational moments that impact cash flow, accountability, and execution.</p>
          </Reveal>
          <RevealGroup className="grid border-t border-line sm:grid-cols-3 lg:col-span-7">
            {PILLARS.map((pillar, i) => (
              <RevealItem
                key={pillar}
                className="flex items-baseline gap-4 border-b border-line py-5 sm:flex-col sm:gap-6 sm:border-b-0 sm:py-6 sm:pr-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-6"
              >
                <span className="font-mono text-[11px] text-torch">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg font-medium tracking-[-0.01em] text-white">{pillar}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <CommandCenterShot />
      </Container>
    </section>
  );
}
