import { Check } from "lucide-react";
import { CAMERA_FEATURES } from "./content";
import { Reveal } from "./motion";
import { SignalFlow } from "./signal-flow";
import { Accent, Section, h2Class, leadClass } from "./ui";

const NO_LIST = ["No rip-and-replace.", "No expensive hardware upgrades.", "No disruption to daily operations."];

export function Cameras() {
  return (
    <Section tone="dark">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-8 lg:col-span-5">
          <Reveal className="space-y-5">
            <h2 className={h2Class}>
              Works With The Cameras <Accent>You Already Have</Accent>
            </h2>
            <div className={`space-y-1 ${leadClass}`}>
              <p className="font-medium text-fg">Most businesses already have cameras.</p>
              <p>Torchline helps them do more.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul className="space-y-3">
              {NO_LIST.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[17px] font-medium">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember/15 text-accent-fg">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <p className={leadClass}>
              Simply connect your existing camera systems and start uncovering opportunities to improve accountability, execution, and performance.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4 lg:col-span-7">
          <Reveal delay={100}>
            <SignalFlow />
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            {CAMERA_FEATURES.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={160 + i * 60}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-edge bg-raised px-4 py-3.5">
                  <Icon className="h-[18px] w-[18px] shrink-0 text-accent-fg" aria-hidden />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
