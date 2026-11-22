import Image from "next/image";
import { INDUSTRIES } from "./content";
import { Reveal } from "./motion";
import { Accent, Section, SectionHead } from "./ui";

export function Industries() {
  return (
    <Section tone="light">
      <SectionHead eyebrow="Industries We Serve" title={<>Purpose-Built For <Accent>Frontline Operations</Accent></>} />
      <div className="mt-14 grid gap-5 md:grid-cols-3 sm:mt-16">
        {INDUSTRIES.map((industry, i) => (
          <Reveal key={industry.title} delay={i * 80} as="article">
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-raised shadow-[0_1px_2px_rgba(20,17,15,0.04)] transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(20,17,15,0.35)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{industry.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-accent-fg">{industry.subtypes}</p>
                <p className="text-[15px] leading-relaxed text-fg-muted">{industry.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
