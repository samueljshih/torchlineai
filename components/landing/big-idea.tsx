import Image from "next/image";
import { CheckCircle2, ClipboardList, TrendingUp } from "lucide-react";
import { PILLARS } from "./content";
import { Reveal } from "./motion";
import { Accent, Section, h2Class, leadClass } from "./ui";

const PILLAR_ICONS = [TrendingUp, ClipboardList, CheckCircle2];

export function BigIdea() {
  return (
    <Section tone="light">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <Reveal className="space-y-5">
            <h2 className={h2Class}>Most Restaurants Already Have Cameras.</h2>
            <p className="text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
              <Accent>Very Few Have Operational Intelligence.</Accent>
            </p>
          </Reveal>
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

        <Reveal delay={100} className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-0 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(242,106,27,0.16),transparent_70%)] blur-2xl"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_40px_80px_-30px_rgba(20,17,15,0.45),0_12px_24px_-12px_rgba(20,17,15,0.2)]">
            <Image
              src="/security_camera.webp"
              alt="Security camera mounted on wall"
              fill
              unoptimized
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover object-[55%_50%]"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
