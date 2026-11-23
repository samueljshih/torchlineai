import { USE_CASES } from "./content";
import { Reveal } from "./motion";
import { Accent, Section, SectionHead } from "./ui";

export function UseCases() {
  return (
    <Section tone="light">
      <SectionHead
        eyebrow="Real Scenarios"
        title={<>Operational Challenges. <Accent>Faster Answers.</Accent></>}
        description="See how operators use Torchline to investigate incidents, improve execution, and uncover opportunities for improvement."
      />
      <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        {USE_CASES.map((item, i) => (
          <Reveal key={item.scenario} delay={(i % 4) * 70}>
            <div className="group flex h-full flex-col rounded-2xl border border-edge bg-raised p-6 transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(20,17,15,0.3)]">
              <span className="text-[13px] font-semibold tabular-nums text-accent-fg">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-lg font-semibold leading-snug tracking-[-0.015em]">{item.scenario}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{item.resolution}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
