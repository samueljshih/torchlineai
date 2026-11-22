import { BENEFITS } from "./content";
import { FeatureGrid } from "./feature-grid";
import { Reveal } from "./motion";
import { Section, SectionHead } from "./ui";

export function Why() {
  return (
    <Section>
      <div className="space-y-14 sm:space-y-20">
        <SectionHead
          index="08"
          kicker="Why Torchline"
          title={
            <>
              Increase Cash Flow. Strengthen Accountability. <span className="text-zinc-500">Improve Execution.</span>
            </>
          }
          description="Torchline helps organizations reduce operational leakage, strengthen accountability, and create more consistent execution across every location."
        />
        <FeatureGrid items={BENEFITS} className="sm:grid-cols-2 lg:grid-cols-4" />
        <Reveal>
          <p className="text-2xl font-medium tracking-[-0.02em] text-white sm:text-3xl">
            Built for businesses that can&apos;t be everywhere at once.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
