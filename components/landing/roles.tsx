import { ROLES } from "./content";
import { FeatureGrid } from "./feature-grid";
import { Section, SectionHead, TwoTone } from "./ui";

export function Roles() {
  return (
    <Section>
      <div className="space-y-14 sm:space-y-20">
        <SectionHead index="10" kicker="Who Uses Torchline" title={<TwoTone lead="Who Uses" rest="Torchline?" />} />
        <FeatureGrid items={ROLES} className="sm:grid-cols-2 lg:grid-cols-3" />
      </div>
    </Section>
  );
}
