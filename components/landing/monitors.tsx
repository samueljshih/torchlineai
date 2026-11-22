import Image from "next/image";
import { MONITOR_GROUPS } from "./content";
import { EventFeed } from "./event-feed";
import { HudFrame } from "./hud";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { Section, SectionHead, TwoTone } from "./ui";

export function Monitors() {
  return (
    <Section id="monitoring">
      <div className="space-y-14 sm:space-y-20">
        <SectionHead
          index="06"
          kicker="Monitoring"
          title={<TwoTone lead="What Torchline" rest="Monitors" />}
          description="From labor and compliance to safety and loss prevention, Torchline surfaces the operational events that affect margins, accountability, and operational consistency."
        />

        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <HudFrame className="aspect-[3/2]">
              <Image
                src="/bounding_boxes.webp"
                alt="Torchline operational monitoring with bounding box detection"
                fill
                unoptimized
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </HudFrame>
          </Reveal>
          <Reveal className="h-[360px] lg:col-span-4 lg:h-auto" delay={0.1}>
            <EventFeed />
          </Reveal>
        </div>

        <RevealGroup className="grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {MONITOR_GROUPS.map((group, i) => (
            <RevealItem key={group.label} className="bg-black p-6 sm:p-7">
              <p className="font-mono text-[11px] text-torch">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 text-lg font-medium tracking-[-0.01em] text-white">{group.label}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="h-px w-2.5 shrink-0 bg-zinc-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
