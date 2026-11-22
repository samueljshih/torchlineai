import { Reveal } from "./motion";
import { SearchDemo } from "./search-demo";
import { Section, SectionHead, TwoTone } from "./ui";

export function SearchSection() {
  return (
    <Section id="search">
      <div className="space-y-14 sm:space-y-20">
        <SectionHead index="07" kicker="Search" title={<TwoTone lead="Find Any Moment" rest="In Seconds" />} />
        <Reveal>
          <SearchDemo />
        </Reveal>
        <Reveal>
          <p className="text-2xl font-medium tracking-[-0.02em] text-white sm:text-3xl">
            Search Less. Know More. <span className="text-zinc-500">Act Faster.</span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
