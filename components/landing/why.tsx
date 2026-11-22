import Image from "next/image";
import { BENEFITS } from "./content";
import { Reveal } from "./motion";
import { Accent, Section, SectionHead } from "./ui";

export function Why() {
  const [lead, ...rest] = BENEFITS;
  const LeadIcon = lead.icon;

  return (
    <Section tone="dark">
      <SectionHead
        eyebrow="Why Torchline"
        title={<>Increase Cash Flow. Strengthen Accountability. <Accent>Improve Execution.</Accent></>}
        description="Torchline helps organizations reduce operational leakage, strengthen accountability, and create more consistent execution across every location."
      />

      <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-3">
        <Reveal className="lg:col-span-2 lg:row-span-3">
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-raised">
            <div className="p-7 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember text-ink">
                <LeadIcon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">{lead.title}</h3>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-fg-muted">{lead.description}</p>
            </div>
            <div className="mt-auto pl-7 sm:pl-8">
              <div className="overflow-hidden rounded-tl-xl border-l border-t border-black/10 bg-white">
                <Image
                  src="/product/traffic-chart.webp"
                  alt="Torchline reporting: visitor traffic by hour"
                  width={2304}
                  height={992}
                  unoptimized
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {rest.map(({ icon: Icon, title, description }, i) => (
          <Reveal key={title} delay={80 + i * 70}>
            <div className="flex h-full gap-4 rounded-2xl border border-edge bg-raised p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember/15 text-accent-fg">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold tracking-[-0.015em]">{title}</h3>
                <p className="text-[15px] leading-relaxed text-fg-muted">{description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <p className="text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
          Built for businesses that can&apos;t be everywhere at once.
        </p>
      </Reveal>
    </Section>
  );
}
