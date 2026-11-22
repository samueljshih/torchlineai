"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MONITOR_GROUPS } from "./content";
import { LiveDot } from "./hud";
import { EASE } from "./motion";

type FeedEvent = { id: number; time: string; camera: string; label: string; flagged: boolean };

const FLAGGED_GROUPS = new Set(["Loss Prevention", "Safety & Security"]);

/** Interleave groups so consecutive events come from different categories. */
const EVENT_POOL = (() => {
  const longest = Math.max(...MONITOR_GROUPS.map((g) => g.items.length));
  const pool: { label: string; flagged: boolean }[] = [];
  for (let i = 0; i < longest; i++) {
    for (const group of MONITOR_GROUPS) {
      const item = group.items[i];
      if (item) pool.push({ label: item, flagged: FLAGGED_GROUPS.has(group.label) });
    }
  }
  return pool;
})();

const VISIBLE = 14;
const INTERVAL_MS = 2400;

function makeEvent(id: number, at: Date): FeedEvent {
  const entry = EVENT_POOL[id % EVENT_POOL.length];
  return {
    id,
    time: at.toLocaleTimeString("en-US", { hour12: false }),
    camera: `CAM-${String((id * 7) % 12 + 1).padStart(2, "0")}`,
    ...entry,
  };
}

/** Scrolling log of recent detections, built from the monitored categories. */
export function EventFeed() {
  const [events, setEvents] = useState<FeedEvent[]>([]);

  useEffect(() => {
    const now = Date.now();
    setEvents(
      Array.from({ length: VISIBLE }, (_, i) => makeEvent(VISIBLE - 1 - i, new Date(now - i * 37_000))),
    );
    let next = VISIBLE;
    const id = setInterval(() => {
      const event = makeEvent(next++, new Date());
      setEvents((prev) => [event, ...prev].slice(0, VISIBLE));
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[6px] border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 sm:text-[11px]">
        <span className="flex items-center gap-2">
          <LiveDot />
          Event Stream
        </span>
        <span>All Locations</span>
      </div>
      <ul className="relative flex-1 overflow-hidden" aria-hidden>
        <AnimatePresence initial={false}>
          {events.map((event) => (
            <motion.li
              key={event.id}
              layout
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-3 border-b border-line px-5 py-3.5"
            >
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${event.flagged ? "bg-torch" : "bg-zinc-600"}`} />
              <span className="font-mono text-[11px] tabular-nums text-zinc-500">{event.time}</span>
              <span className="hidden font-mono text-[11px] text-zinc-600 sm:inline">{event.camera}</span>
              <span className="truncate text-[13px] text-zinc-200">{event.label}</span>
            </motion.li>
          ))}
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </ul>
    </div>
  );
}
