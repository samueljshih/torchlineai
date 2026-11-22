import { CheckCircle2, ClipboardList, TrendingUp } from "lucide-react";
import { CameraScene } from "./camera-scene";
import { PILLARS } from "./content";
import { Reveal } from "./motion";
import { Accent, Section, h2Class, leadClass } from "./ui";

const PILLAR_ICONS = [TrendingUp, ClipboardList, CheckCircle2];

export function BigIdea() {
  return (
    <>
      <Section tone="light" containerClassName="pb-14 sm:pb-16 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-5">
            <h2 className={h2Class}>Most Restaurants Already Have Cameras.</h2>
            <p className="text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
              <Accent>Very Few Have Operational Intelligence.</Accent>
            </p>
          </Reveal>
          <div className="space-y-8 lg:pt-3">
            <Reveal delay={80} className={`space-y-2 ${leadClass}`}>
              <p className="font-medium text-fg">Cameras record what happened.</p>
              <p>Torchline helps organizations uncover the operational moments that impact cash flow, accountability, and execution.</p>
            </Reveal>
            <ul className="grid gap-3 sm:grid-cols-3">
              {PILLARS.map((pillar, i) => {
                const Icon = PILLAR_ICONS[i];
                return (
                  <Reveal as="li" key={pillar} delay={140 + i * 70}>
                    <div className="flex h-full items-center gap-3 rounded-2xl border border-edge bg-raised p-4 sm:flex-col sm:items-start">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ember/10 text-accent-fg">
                        <Icon className="h-[18px] w-[18px]" aria-hidden />
                      </span>
                      <span className="text-[15px] font-semibold leading-snug tracking-[-0.01em]">{pillar}</span>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>
      <CameraScene />
    </>
  );
}
