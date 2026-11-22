"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { BadgeCheck, Clock, ShieldAlert, ShieldCheck } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MONITOR_GROUPS } from "./content";
import { EASE } from "./motion";
import { useIsDesktop } from "./scroll-fx";
import { Accent, Section, SectionHead } from "./ui";

const GROUP_ICONS = [Clock, BadgeCheck, ShieldAlert, ShieldCheck];

/**
 * Where the kitchen image zooms for each category (fractions of the image), in MONITOR_GROUPS order.
 * y stays >= 0.5 so the image's built-in title (top ~15%) is never cropped mid-word at ZOOM.
 */
const FOCUS = [
  { x: 0.22, y: 0.52 },
  { x: 0.47, y: 0.64 },
  { x: 0.42, y: 0.5 },
  { x: 0.75, y: 0.62 },
];
const ZOOM = 1.5;

/** Translate (fraction of the frame) that centers a focus point at ZOOM without exposing edges. */
function panTo(f: number) {
  const max = (ZOOM - 1) / 2;
  return `${Math.max(-max, Math.min(max, -(f - 0.5) * ZOOM)) * 100}%`;
}

/**
 * Pinned on desktop: the image stays in place while the four categories light up one at
 * a time as the visitor scrolls, and the image glides to the matching part of the kitchen.
 * On smaller screens it is a normal stacked layout with every category expanded.
 */
export function Monitors() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 64px", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(MONITOR_GROUPS.length - 1, Math.max(0, Math.floor(v * MONITOR_GROUPS.length))));
  });

  const focus = FOCUS[active];

  return (
    <Section tone="dark" containerClassName="lg:pb-12">
      <SectionHead
        title={<>What Torchline <Accent>Monitors</Accent></>}
        description="From labor and compliance to safety and loss prevention, Torchline surfaces the operational events that affect margins, accountability, and operational consistency."
      />

      <div ref={trackRef} className="relative mt-14 sm:mt-16 lg:h-[320vh]">
        <div className="lg:sticky lg:top-16 lg:flex lg:h-[calc(100svh-4rem)] lg:items-center">
          <div className="grid w-full gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="relative lg:order-2 lg:col-span-7">
              <div
                aria-hidden
                className="absolute -inset-8 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(242,106,27,0.18),transparent_65%)] blur-2xl"
              />
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-edge shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                <motion.div
                  className="absolute inset-0"
                  animate={
                    isDesktop
                      ? { scale: ZOOM, x: panTo(focus.x), y: panTo(focus.y) }
                      : { scale: 1, x: "0%", y: "0%" }
                  }
                  transition={{ duration: 1.1, ease: EASE }}
                >
                  <Image
                    src="/bounding_boxes.webp"
                    alt="Torchline operational monitoring with bounding box detection"
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 700px, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <ol className="space-y-3 lg:order-1 lg:col-span-5">
              {MONITOR_GROUPS.map((group, i) => {
                const Icon = GROUP_ICONS[i];
                const isActive = i === active;
                return (
                  <li
                    key={group.label}
                    className={cn(
                      "relative overflow-hidden rounded-2xl border bg-raised p-5 transition-[opacity,border-color,background-color] duration-500 sm:p-6",
                      isActive ? "border-edge lg:border-ember/50" : "border-edge lg:bg-transparent lg:opacity-50",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-y-0 left-0 hidden w-[3px] bg-ember transition-transform duration-500 lg:block",
                        isActive ? "scale-y-100" : "scale-y-0",
                      )}
                    />
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember/15 text-accent-fg">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-lg font-semibold tracking-[-0.015em]">{group.label}</h3>
                    </div>
                    {/* On desktop only the active category is expanded; the grid-rows trick animates height */}
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[1fr] lg:grid-rows-[0fr]",
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <ul className="pt-4">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-center gap-2.5 py-1 pl-14 text-[15px] text-fg-muted">
                              <span className="h-1 w-1 shrink-0 rounded-full bg-ember" aria-hidden />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
