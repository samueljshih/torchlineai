"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EASE } from "./motion";

/** Bordered media frame with camera-style corner brackets. */
export function HudFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[6px] border border-line bg-surface", className)}>
      {children}
      <span aria-hidden className="pointer-events-none absolute inset-3 z-20">
        <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white/50" />
        <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white/50" />
        <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white/50" />
        <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white/50" />
      </span>
    </div>
  );
}

/** Pulsing status dot. */
export function LiveDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative flex h-1.5 w-1.5", className)} aria-hidden>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-torch opacity-60" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-torch" />
    </span>
  );
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", { hour12: false });
}

/** Ticking HH:MM:SS clock. Renders a placeholder until mounted to avoid hydration mismatch. */
export function Clock({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={cn("tabular-nums", className)} suppressHydrationWarning>
      {time ?? "--:--:--"}
    </span>
  );
}

type DetectionBoxProps = {
  /** Position and size as percentages of the parent frame. */
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  confidence?: string;
  delay?: number;
  tone?: "torch" | "white";
  className?: string;
};

/** Animated object-detection box that locks on and then drifts slightly. */
export function DetectionBox({ x, y, w, h, label, confidence, delay = 0, tone = "torch", className }: DetectionBoxProps) {
  const color = tone === "torch" ? "border-torch" : "border-white/80";
  const tagColor = tone === "torch" ? "bg-torch text-black" : "bg-white text-black";

  return (
    <motion.div
      aria-hidden
      className={cn("absolute z-10", className)}
      style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` }}
      initial={{ opacity: 0, scale: 1.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ x: [0, 3, -2, 0], y: [0, -2, 2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: delay + 0.7 }}
      >
        <span className={cn("absolute inset-0 border bg-torch/[0.04]", color, "opacity-70")} />
        <span className={cn("absolute -left-px -top-px h-2.5 w-2.5 border-l-2 border-t-2", color)} />
        <span className={cn("absolute -right-px -top-px h-2.5 w-2.5 border-r-2 border-t-2", color)} />
        <span className={cn("absolute -bottom-px -left-px h-2.5 w-2.5 border-b-2 border-l-2", color)} />
        <span className={cn("absolute -bottom-px -right-px h-2.5 w-2.5 border-b-2 border-r-2", color)} />
        <span
          className={cn(
            "absolute -top-[18px] left-[-1px] whitespace-nowrap px-1.5 py-[2px] font-mono text-[9px] font-medium uppercase leading-none tracking-[0.08em] sm:text-[10px]",
            tagColor,
          )}
        >
          {label}
          {confidence && <span className="ml-1.5 opacity-60">{confidence}</span>}
        </span>
      </motion.div>
    </motion.div>
  );
}
