"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { LOGO_URL, MONITOR_GROUPS } from "./content";

const CAMERA_COUNT = 5;
const OUTPUTS = MONITOR_GROUPS.map((group) => group.label);

type Point = { x: number; y: number };
type Paths = { inbound: string[]; outbound: string[] };

function curve(from: Point, to: Point) {
  const mid = (from.x + to.x) / 2;
  return `M ${from.x} ${from.y} C ${mid} ${from.y}, ${mid} ${to.y}, ${to.x} ${to.y}`;
}

/**
 * Explanatory diagram: existing cameras stream into Torchline and come out as the
 * four monitoring categories. Connector paths are measured from the rendered nodes
 * so they stay exact at every width.
 */
export function SignalFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sourceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const outputRefs = useRef<(HTMLDivElement | null)[]>([]);
  const coreRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<Paths>({ inbound: [], outbound: [] });

  const measure = useCallback(() => {
    const container = containerRef.current?.getBoundingClientRect();
    const core = coreRef.current?.getBoundingClientRect();
    if (!container || !core) return;

    const rel = (x: number, y: number): Point => ({ x: x - container.left, y: y - container.top });
    const coreLeft = rel(core.left, core.top + core.height / 2);
    const coreRight = rel(core.right, core.top + core.height / 2);

    const inbound = sourceRefs.current.flatMap((node) => {
      if (!node) return [];
      const r = node.getBoundingClientRect();
      return [curve(rel(r.right, r.top + r.height / 2), coreLeft)];
    });
    const outbound = outputRefs.current.flatMap((node) => {
      if (!node) return [];
      const r = node.getBoundingClientRect();
      return [curve(coreRight, rel(r.left, r.top + r.height / 2))];
    });
    setPaths({ inbound, outbound });
  }, []);

  useLayoutEffect(() => {
    measure();
    // Nodes can reflow (e.g. labels re-wrapping after the web font swaps in) without the container resizing.
    const observer = new ResizeObserver(measure);
    [containerRef.current, coreRef.current, ...sourceRefs.current, ...outputRefs.current].forEach(
      (node) => node && observer.observe(node),
    );
    let cancelled = false;
    document.fonts?.ready.then(() => !cancelled && measure());
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [measure]);

  return (
    <div
      ref={containerRef}
      className="relative grid grid-cols-[auto_1fr_auto_1fr_auto] items-center rounded-2xl border border-edge bg-raised px-5 py-8 sm:px-8 sm:py-10"
      role="img"
      aria-label="Existing cameras connect to Torchline, which turns their footage into labor, compliance, loss prevention, and safety insights"
    >
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" fill="none">
        {[...paths.inbound, ...paths.outbound].map((d, i) => (
          <g key={i}>
            <path d={d} stroke="currentColor" strokeOpacity={0.14} strokeWidth={1} />
            <path
              d={d}
              pathLength={100}
              stroke="#f26a1b"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeDasharray="12 88"
              className="animate-signal motion-reduce:hidden"
              style={{ animationDelay: `${(i * 0.61) % 3.6}s` }}
            />
          </g>
        ))}
      </svg>

      <div className="relative flex flex-col gap-3">
        {Array.from({ length: CAMERA_COUNT }, (_, i) => (
          <div
            key={i}
            ref={(el) => {
              sourceRefs.current[i] = el;
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-edge bg-canvas sm:h-11 sm:w-11"
          >
            <Camera className="h-4 w-4 text-fg-muted" aria-hidden />
          </div>
        ))}
      </div>

      <span />

      <div
        ref={coreRef}
        className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-ember/50 bg-canvas shadow-[0_0_60px_-6px_rgba(242,106,27,0.55)] sm:h-20 sm:w-20"
      >
        <Image src={LOGO_URL} alt="" width={48} height={48} className="h-9 w-9 object-contain sm:h-11 sm:w-11" />
      </div>

      <span />

      <div className="relative flex flex-col gap-3">
        {OUTPUTS.map((output, i) => (
          <div
            key={output}
            ref={(el) => {
              outputRefs.current[i] = el;
            }}
            className="rounded-xl border border-edge bg-canvas px-3 py-2.5 text-[13px] font-semibold leading-snug sm:px-4 sm:text-sm"
          >
            {output}
          </div>
        ))}
      </div>
    </div>
  );
}
