import { USE_CASES } from "./content";
import { FeatureGrid } from "./feature-grid";
import { Section, SectionHead, TwoTone } from "./ui";

const CASES = USE_CASES.map(({ scenario, resolution }) => ({ title: scenario, description: resolution }));

export function UseCases() {
  return (
    <Section>
      <div className="space-y-14 sm:space-y-20">
        <SectionHead
          index="09"
          kicker="Real Scenarios"
          title={<TwoTone lead="Operational Challenges." rest="Faster Answers." />}
          description="See how operators use Torchline to investigate incidents, improve execution, and uncover opportunities for improvement."
        />
        <FeatureGrid
          items={CASES}
          label={(i) => `Case ${String(i + 1).padStart(3, "0")}`}
          className="sm:grid-cols-2 lg:grid-cols-4"
        />
      </div>
    </Section>
  );
}
