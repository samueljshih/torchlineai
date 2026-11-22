"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { CornerDownLeft, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { EXAMPLE_SEARCHES } from "./content";
import { EASE } from "./motion";

type Result = {
  camera: string;
  store: string;
  time: string;
  image: string;
  /** CSS object-position and zoom used to frame the thumbnail. */
  focus: string;
  zoom: number;
};

/** Position of a "h:mm AM/PM" time on a 24-hour timeline, 0-1. */
function dayFraction(time: string) {
  const [, h, m, period] = time.match(/(\d+):(\d+) (AM|PM)/)!;
  const hours = (Number(h) % 12) + (period === "PM" ? 12 : 0);
  return (hours * 60 + Number(m)) / (24 * 60);
}

/** One illustrative result per example search, in EXAMPLE_SEARCHES order. */
const RESULTS: Result[] = [
  { camera: "Sales Floor", store: "Store #08", time: "2:14 PM", image: "/retail.webp", focus: "50% 45%", zoom: 1.15 },
  { camera: "Back Entrance", store: "Store #102", time: "11:06 PM", image: "/hospitality.webp", focus: "70% 50%", zoom: 1.3 },
  { camera: "Front Counter", store: "Store #12", time: "1:47 PM", image: "/restaurant_image.webp", focus: "50% 70%", zoom: 1.1 },
  { camera: "Register 2", store: "Store #12", time: "11:42 PM", image: "/restaurant_image.webp", focus: "20% 62%", zoom: 1.8 },
  { camera: "Front Entrance", store: "Store #102", time: "4:30 PM", image: "/hospitality.webp", focus: "30% 50%", zoom: 1.2 },
  { camera: "Manager Office", store: "Store #31", time: "9:18 PM", image: "/retail.webp", focus: "85% 40%", zoom: 1.6 },
];

const TYPE_MS = 45;
const SEARCH_MS = 650;
const HOLD_MS = 3600;

/** Deterministic timeline activity ticks (position 0-1, height 0-1). */
const TICKS = Array.from({ length: 56 }, (_, i) => ({
  at: ((i * 37) % 101) / 101,
  height: 0.25 + (((i * 53) % 17) / 17) * 0.75,
}));

type Phase = "typing" | "searching" | "result";

export function SearchDemo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { margin: "-120px" });
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  /** Set once the visitor picks an example; the demo then stops cycling on its own. */
  const [userControlled, setUserControlled] = useState(false);
  /** True while the pointer or keyboard focus is inside the demo. */
  const [engaged, setEngaged] = useState(false);

  const query = EXAMPLE_SEARCHES[index];
  const result = RESULTS[index];

  // Drive the type -> search -> result -> next query loop while visible.
  useEffect(() => {
    if (!inView) return;
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (reduceMotion || typed >= query.length) {
        timer = setTimeout(() => {
          setTyped(query.length);
          setPhase("searching");
        }, reduceMotion ? 0 : 250);
      } else {
        timer = setTimeout(() => setTyped((t) => t + 1), TYPE_MS);
      }
    } else if (phase === "searching") {
      timer = setTimeout(() => setPhase("result"), SEARCH_MS);
    } else {
      if (userControlled || engaged || reduceMotion) return;
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % EXAMPLE_SEARCHES.length);
        setTyped(0);
        setPhase("typing");
      }, HOLD_MS);
    }
    return () => clearTimeout(timer);
  }, [inView, phase, typed, query, reduceMotion, userControlled, engaged]);

  function select(next: number) {
    setUserControlled(true);
    setIndex(next);
    setTyped(0);
    setPhase("typing");
  }

  return (
    <div
      ref={rootRef}
      className="overflow-hidden rounded-[6px] border border-line bg-surface"
      onMouseEnter={() => setEngaged(true)}
      onMouseLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setEngaged(false);
      }}
    >
      <p className="sr-only" aria-live="polite">
        {phase === "result" ? `Top match for "${query}": ${result.store}, ${result.camera} camera, ${result.time}.` : ""}
      </p>
      <div className="flex items-center gap-3 border-b border-line px-5 py-4 sm:px-6 sm:py-5">
        <Search className="h-4 w-4 shrink-0 text-torch" aria-hidden />
        <p className="min-w-0 flex-1 truncate text-base text-white sm:text-lg" aria-hidden>
          {query.slice(0, typed)}
          <span className="ml-px inline-block h-[1.1em] w-px translate-y-[3px] animate-caret bg-torch" aria-hidden />
        </p>
        <span className="hidden items-center gap-1.5 rounded-[4px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500 sm:flex">
          <CornerDownLeft className="h-3 w-3" aria-hidden />
          Search
        </span>
      </div>

      <div className="grid md:grid-cols-12">
        <div className="border-b border-line p-5 sm:p-6 md:col-span-5 md:border-b-0 md:border-r lg:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">Example Searches</p>
          <ul className="mt-4 space-y-1">
            {EXAMPLE_SEARCHES.map((example, i) => (
              <li key={example}>
                <button
                  type="button"
                  onClick={() => select(i)}
                  className={cn(
                    "relative flex w-full items-center gap-3 rounded-[4px] px-3 py-2.5 text-left text-sm transition-colors duration-300",
                    i === index ? "bg-white/[0.05] text-white" : "text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200",
                  )}
                >
                  <span
                    className={cn(
                      "absolute inset-y-2 left-0 w-px transition-colors duration-300",
                      i === index ? "bg-torch" : "bg-transparent",
                    )}
                    aria-hidden
                  />
                  <Search className="h-3.5 w-3.5 shrink-0 text-zinc-600" aria-hidden />
                  <span className="font-mono text-[13px]">{example}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 sm:p-6 md:col-span-7 lg:col-span-8">
          {/* On md+ the frame stretches to the example list's height for a balanced row. */}
          <div className="relative aspect-video overflow-hidden rounded-[4px] border border-line bg-black md:aspect-auto md:h-full md:min-h-[300px]">
            <AnimatePresence mode="wait">
              {phase === "result" ? (
                <motion.div
                  key={`result-${index}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <Image
                    src={result.image}
                    alt=""
                    fill
                    unoptimized
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover brightness-[0.85] saturate-[0.7]"
                    style={{ objectPosition: result.focus, transform: `scale(${result.zoom})`, transformOrigin: result.focus }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/50" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {result.camera} Camera
                    </span>
                    <span>{result.time}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 space-y-2 p-4 sm:p-5">
                    <span className="inline-block bg-torch px-1.5 py-[3px] font-mono text-[10px] font-medium uppercase leading-none tracking-[0.1em] text-black">
                      Top Match
                    </span>
                    <p className="text-base font-medium capitalize tracking-[-0.01em] text-white sm:text-lg">{query}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400 sm:text-[11px]">
                      {result.store} <span className="mx-1.5 text-zinc-600">·</span> {result.camera} Camera{" "}
                      <span className="mx-1.5 text-zinc-600">·</span> {result.time}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="scanning"
                  className="bg-grid absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-y-0 left-0 w-1/3 animate-sweep motion-reduce:hidden bg-gradient-to-r from-transparent via-torch/10 to-transparent" />
                  <span className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                    {phase === "searching" ? "Searching footage…" : "Awaiting query"}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div aria-hidden className="border-t border-line px-5 pb-5 pt-6 sm:px-6">
        <div className="relative h-10 border-b border-line">
          {TICKS.map((tick, i) => (
            <span
              key={i}
              className="absolute bottom-0 w-px bg-zinc-700"
              style={{ left: `${tick.at * 100}%`, height: `${tick.height * 60}%` }}
            />
          ))}
          <motion.div
            className="absolute inset-y-0 w-px bg-torch"
            animate={{ left: `${(phase === "result" ? dayFraction(result.time) : 0) * 100}%` }}
            transition={{ duration: phase === "result" ? 1 : 0.4, ease: EASE }}
          >
            <span className="absolute -left-[3px] -top-1 h-[7px] w-[7px] rotate-45 bg-torch" />
          </motion.div>
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-600">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>
    </div>
  );
}
