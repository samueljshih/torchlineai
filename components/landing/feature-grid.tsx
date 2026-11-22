import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealGroup, RevealItem } from "./motion";

type Feature = { icon?: LucideIcon; title: string; description: string };

type FeatureGridProps = {
  items: Feature[];
  className?: string;
  /** Monospace label in each card's corner. Defaults to "01", "02", ... */
  label?: (index: number) => string;
};

const defaultLabel = (i: number) => String(i + 1).padStart(2, "0");

/** Hairline-divided grid of numbered cards with an accent line on hover. */
export function FeatureGrid({ items, className, label = defaultLabel }: FeatureGridProps) {
  return (
    <RevealGroup className={cn("grid gap-px overflow-hidden rounded-[6px] border border-line bg-line", className)}>
      {items.map(({ icon: Icon, title, description }, i) => (
        <RevealItem
          key={title}
          className="group relative flex flex-col bg-black p-6 transition-colors duration-500 hover:bg-surface sm:p-7"
        >
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-torch transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          />
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">{label(i)}</span>
            {Icon ? (
              <Icon className="h-5 w-5 text-torch" strokeWidth={1.5} aria-hidden />
            ) : (
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-zinc-700 transition-colors duration-500 group-hover:bg-torch" />
            )}
          </div>
          <h3 className="pt-12 text-lg sm:pt-16 font-medium tracking-[-0.01em] text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
