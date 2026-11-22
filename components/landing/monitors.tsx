import Image from "next/image";
import { BadgeCheck, Clock, ShieldAlert, ShieldCheck } from "lucide-react";
import { MONITOR_GROUPS } from "./content";
import { Reveal } from "./motion";
import { Accent, Section, SectionHead } from "./ui";

const GROUP_ICONS = [Clock, BadgeCheck, ShieldAlert, ShieldCheck];

export function Monitors() {
  return (
    <Section tone="dark">
      <SectionHead
        title={<>What Torchline <Accent>Monitors</Accent></>}
        description="From labor and compliance to safety and loss prevention, Torchline surfaces the operational events that affect margins, accountability, and operational consistency."
      />
      <Reveal delay={80} className="relative mt-14 sm:mt-16">
        <div
          aria-hidden
          className="absolute -inset-8 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(242,106,27,0.18),transparent_65%)] blur-2xl"
        />
        <div className="relative overflow-hidden rounded-2xl border border-edge shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
          <Image
            src="/bounding_boxes.webp"
            alt="Torchline operational monitoring with bounding box detection"
            width={1600}
            height={1067}
            unoptimized
            sizes="(min-width: 1240px) 1176px, 100vw"
            className="block h-auto w-full"
          />
        </div>
      </Reveal>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MONITOR_GROUPS.map((group, i) => {
          const Icon = GROUP_ICONS[i];
          return (
            <Reveal key={group.label} delay={i * 70}>
              <div className="h-full rounded-2xl border border-edge bg-raised p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember/15 text-accent-fg">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.015em]">{group.label}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[15px] text-fg-muted">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-ember" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
