"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { LOGO_URL, MONITOR_GROUPS } from "./content";
import { LiveDot } from "./hud";

const SOURCES = ["Front Counter", "Kitchen", "Drive-Thru", "Back Door", "Register"];
const OUTPUTS = MONITOR_GROUPS.map((group) => group.label);

type Point = { x: number; y: number };
type Paths = { inbound: string[]; outbound: string[] };

function curve(from: Point, to: Point) {
  const mid = (from.x + to.x) / 2;
  return `M ${from.x} ${from.y} C ${mid} ${from.y}, ${mid} ${to.y}, ${to.x} ${to.y}`;
}

/**
 * Diagram of existing cameras streaming into Torchline and out as operational insight.
 * Connector paths are measured from the rendered nodes so they stay exact at every width.
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
    <div className="relative overflow-hidden rounded-[6px] border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 sm:text-[11px]">
        <span className="flex items-center gap-2">
          <LiveDot />
          Signal Flow
        </span>
        <span>{SOURCES.length} Sources Connected</span>
      </div>

      <div ref={containerRef} className="bg-grid relative grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-4 py-8 sm:gap-14 sm:px-6 sm:py-10">
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" fill="none">
          {[...paths.inbound, ...paths.outbound].map((d, i) => (
            <g key={i}>
              <path d={d} stroke="rgb(255 255 255 / 0.12)" strokeWidth={1} />
              <path
                d={d}
                pathLength={100}
                stroke="#f97316"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeDasharray="10 90"
                className="animate-signal"
                style={{ animationDelay: `${(i * 0.53) % 3.2}s` }}
              />
            </g>
          ))}
        </svg>

        <div className="relative flex flex-col gap-3">
          {SOURCES.map((source, i) => (
            <div
              key={source}
              ref={(el) => {
                sourceRefs.current[i] = el;
              }}
              className="flex items-center gap-2.5 rounded-[4px] border border-line bg-black/80 px-2.5 py-2 backdrop-blur sm:px-3"
            >
              <Camera className="h-3.5 w-3.5 shrink-0 text-zinc-500" aria-hidden />
              <div className="min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-500 sm:text-[10px]">
                  Cam-{String(i + 1).padStart(2, "0")}
                </p>
                <p className="truncate text-[12px] text-zinc-200 sm:text-[13px]">{source}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={coreRef} className="relative flex h-20 w-20 items-center justify-center sm:h-28 sm:w-28">
          <span className="absolute inset-0 animate-ping rounded-full border border-torch/30 [animation-duration:3s]" />
          <span className="absolute inset-0 rounded-full border border-line" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-torch/70 bg-black shadow-[0_0_48px_rgba(249,115,22,0.3)] sm:h-[72px] sm:w-[72px]">
            <Image src={LOGO_URL} alt="Torchline" width={40} height={40} className="h-7 w-7 object-contain sm:h-9 sm:w-9" />
          </div>
          <span className="absolute -bottom-6 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500 sm:-bottom-7 sm:text-[10px]">
            Vision AI
          </span>
        </div>

        <div className="relative flex flex-col gap-3">
          {OUTPUTS.map((output, i) => (
            <div
              key={output}
              ref={(el) => {
                outputRefs.current[i] = el;
              }}
              className="rounded-[4px] border border-line bg-black/80 px-2.5 py-2 backdrop-blur sm:px-3"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-torch sm:text-[10px]">
                Insight {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-[12px] leading-snug text-zinc-200 sm:text-[13px]">{output}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
