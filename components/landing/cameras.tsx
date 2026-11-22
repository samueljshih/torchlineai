import { CAMERA_FEATURES } from "./content";
import { Reveal, RevealGroup, RevealItem } from "./motion";
import { SignalFlow } from "./signal-flow";
import { Section, SectionHead, TwoTone } from "./ui";

const NO_LIST = ["No rip-and-replace.", "No expensive hardware upgrades.", "No disruption to daily operations."];

export function Cameras() {
  return (
    <Section>
      <div className="space-y-14 sm:space-y-20">
        <SectionHead
          index="04"
          kicker="Integration"
          title={<TwoTone lead="Works With The Cameras" rest="You Already Have" />}
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="space-y-6 text-base leading-relaxed text-zinc-400 sm:text-lg lg:col-span-4">
            <div className="space-y-1">
              <p className="text-white">Most businesses already have cameras.</p>
              <p>Torchline helps them do more.</p>
            </div>
            <ul className="border-t border-line">
              {NO_LIST.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-line py-3 text-zinc-300">
                  <span className="h-px w-3 shrink-0 bg-torch" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Simply connect your existing camera systems and start uncovering opportunities to improve accountability, execution, and performance.
            </p>
          </Reveal>

          <div className="space-y-4 lg:col-span-8">
            <Reveal>
              <SignalFlow />
            </Reveal>
            <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-[6px] border border-line bg-line lg:grid-cols-4">
              {CAMERA_FEATURES.map(({ icon: Icon, label }) => (
                <RevealItem key={label} className="flex items-center gap-3 bg-black px-4 py-4">
                  <Icon className="h-4 w-4 shrink-0 text-torch" strokeWidth={1.5} aria-hidden />
                  <span className="text-sm text-zinc-200">{label}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </Section>
  );
}
