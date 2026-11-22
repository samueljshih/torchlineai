"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, DetectionBox, HudFrame, LiveDot } from "./hud";
import { EASE } from "./motion";
import { ButtonLink, Container } from "./ui";

const intro = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

/** Simulated live camera feed with detection overlays. Coordinates are tuned to the 3:2 source image. */
function LiveFeed() {
  return (
    <HudFrame className="aspect-[3/2] w-full">
      <Image
        src="/restaurant_image.webp"
        alt="Torchline detecting staff activity on a restaurant camera feed"
        fill
        preload
        loading="eager"
        fetchPriority="high"
        unoptimized
        sizes="(min-width: 1024px) 58vw, 100vw"
        className="object-cover brightness-[0.72] contrast-[1.08] saturate-[0.55]"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/50" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-torch/[0.06] to-transparent" />

      <DetectionBox x={27.5} y={38.5} w={11.5} h={29} label="Employee" confidence="0.97" delay={0.9} />
      <DetectionBox x={59.5} y={36.5} w={12} h={26} label="Employee" confidence="0.95" delay={1.2} />
      <DetectionBox x={65} y={57.5} w={6.5} h={5.5} label="PPE · Gloves" delay={1.6} tone="white" className="hidden sm:block" />
      <DetectionBox x={15.5} y={54} w={10} h={14} label="Register" confidence="Active" delay={1.9} tone="white" className="hidden sm:block" />

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/80 sm:text-[11px]">
        <span className="flex items-center gap-2">
          <LiveDot />
          Rec <span className="text-white/40">·</span> Cam-04 Front Counter
        </span>
        <span className="hidden items-center gap-2 sm:flex">
          Store #12 <span className="text-white/40">·</span> <Clock />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-6 pb-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60 sm:text-[11px]">
        <span>Vision AI · Active</span>
        <span>4 Detections</span>
      </div>
    </HudFrame>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="space-y-8 lg:col-span-5">
          <motion.h1
            {...intro(0)}
            className="text-[44px] font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[72px] xl:text-[80px]"
          >
            Operational Advantage
            <br />
            <span className="text-zinc-500">Powered by Vision&nbsp;AI</span>
          </motion.h1>

          <motion.div {...intro(0.12)} className="space-y-4">
            <p className="text-lg font-medium tracking-[-0.01em] text-white sm:text-xl">
              Increase Cash Flow. Grow Revenue. Improve Margins.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-[17px]">
              Torchline transforms existing camera systems into an operational intelligence platform that helps organizations uncover opportunities to increase cash flow, grow revenue, and improve margins.
            </p>
          </motion.div>

          <motion.div {...intro(0.24)} className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#demo-video">See Torchline In Action</ButtonLink>
            <ButtonLink href="#book-demo" variant="secondary">
              Book A Demo
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        >
          <LiveFeed />
        </motion.div>
      </Container>
    </section>
  );
}
