import { Search } from "lucide-react";
import { EXAMPLE_SEARCHES } from "./content";
import { Reveal } from "./motion";
import { TiltIn } from "./scroll-fx";
import { Accent, ProductShot, Section, h2Class } from "./ui";

export function SearchSection() {
  return (
    <Section tone="light">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-8 lg:col-span-4">
          <Reveal>
            <h2 className={h2Class}>
              Find Any Moment <Accent>In Seconds</Accent>
            </h2>
          </Reveal>
          <Reveal delay={80} className="space-y-3">
            <p className="text-sm font-semibold text-fg-subtle">Example Searches</p>
            <ul className="space-y-2">
              {EXAMPLE_SEARCHES.map((example) => (
                <li
                  key={example}
                  className="flex items-center gap-3 rounded-xl border border-edge bg-raised px-4 py-3 text-[15px] font-medium shadow-[0_1px_2px_rgba(20,17,15,0.04)]"
                >
                  <Search className="h-4 w-4 shrink-0 text-accent-fg" aria-hidden />
                  {example}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-xl font-semibold tracking-[-0.02em]">Search Less. Know More. Act Faster.</p>
          </Reveal>
        </div>
        <TiltIn className="lg:col-span-8">
          <ProductShot
            src="/product/visual-search.webp"
            alt="Torchline natural language video search"
            width={2400}
            height={1500}
            sizes="(min-width: 1240px) 780px, 100vw"
          />
        </TiltIn>
      </div>
    </Section>
  );
}
