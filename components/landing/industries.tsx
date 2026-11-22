import Image from "next/image";
import { INDUSTRIES } from "./content";
import { RevealGroup, RevealItem } from "./motion";
import { Section, SectionHead, TwoTone } from "./ui";

export function Industries() {
  return (
    <Section id="industries">
      <div className="space-y-14 sm:space-y-20">
        <SectionHead
          index="05"
          kicker="Industries We Serve"
          title={<TwoTone lead="Purpose-Built For" rest="Frontline Operations" />}
        />
        <RevealGroup className="grid gap-4 md:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <RevealItem key={industry.title}>
              <article className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[6px] border border-line bg-surface md:aspect-[3/4]">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover brightness-[0.8] saturate-[0.8] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/0" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
                <span className="absolute left-4 top-4 rounded-[3px] bg-black/60 px-1.5 py-1 font-mono text-[11px] leading-none tracking-[0.16em] text-white/80 backdrop-blur-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative space-y-3 p-5 sm:p-6">
                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-white sm:text-[28px]">{industry.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-zinc-300">{industry.subtypes}</p>
                  <p className="text-sm leading-relaxed text-zinc-400">{industry.description}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
