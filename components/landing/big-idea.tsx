import Image from "next/image";
import { CheckCircle2, ClipboardList, TrendingUp } from "lucide-react";
import { PILLARS } from "./content";
import { Reveal } from "./motion";
import { Accent, Section, h2Class, leadClass } from "./ui";

const PILLAR_ICONS = [TrendingUp, ClipboardList, CheckCircle2];

/**
 * Ember corner brackets around the camera, like a vision-AI detection locking on.
 * They draw in once when the parent Reveal is shown. Hidden-until-shown only applies once
 * reveals are armed (html.reveal-ready), so without JS they are simply visible.
 */
function LockOn() {
  const hidden = "[.reveal-ready_.group:not([data-shown=true])_&]:scale-110 [.reveal-ready_.group:not([data-shown=true])_&]:opacity-0";
  const corner = "absolute h-7 w-7 border-ember sm:h-9 sm:w-9";
  return (
    <div
      aria-hidden
      className={`absolute left-[14.5%] top-[20%] h-[69%] w-[70%] transition-[opacity,transform] delay-500 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${hidden}`}
    >
      <span className={`${corner} left-0 top-0 rounded-tl-lg border-l-2 border-t-2`} />
      <span className={`${corner} right-0 top-0 rounded-tr-lg border-r-2 border-t-2`} />
      <span className={`${corner} bottom-0 left-0 rounded-bl-lg border-b-2 border-l-2`} />
      <span className={`${corner} bottom-0 right-0 rounded-br-lg border-b-2 border-r-2`} />
    </div>
  );
}

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

        <Reveal delay={100} className="group relative">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(242,106,27,0.16),transparent_70%)] blur-2xl"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_40px_80px_-30px_rgba(20,17,15,0.45),0_12px_24px_-12px_rgba(20,17,15,0.2)]">
            <Image
              src="/security_camera.webp"
              alt="Security camera mounted on wall"
              fill
              unoptimized
              sizes="(min-width: 1024px) 600px, 100vw"
              className="origin-[49%_57%] scale-[1.18] object-cover object-[55%_50%] contrast-[1.06] saturate-[1.08]"
            />
            {/* soft edge vignette so the warm wall separates from the paper background */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,transparent_50%,rgba(20,17,15,0.28))]"
            />
            <LockOn />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
