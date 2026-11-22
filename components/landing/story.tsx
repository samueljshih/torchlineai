import { Reveal } from "./motion";
import { Kicker, Section, headingClass } from "./ui";

export function Story() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4 lg:pt-3">
          <Kicker index="03">Our Story</Kicker>
        </Reveal>
        <div className="space-y-10 lg:col-span-8">
          <Reveal>
            <h2 className={headingClass}>Built By A Restaurant Operator</h2>
          </Reveal>
          <Reveal className="grid gap-8 text-lg leading-relaxed text-zinc-400 sm:text-xl md:grid-cols-2 md:gap-10">
            <div className="space-y-5">
              <p>Torchline was born from firsthand experience managing the complexities of multi-unit operations.</p>
              <p>
                Labor, compliance, training, guest experience, and execution all require constant attention, but no one can be everywhere at once.
              </p>
            </div>
            <div className="space-y-5">
              <p className="text-white">So we built the platform we wished we had.</p>
              <p>One that helps leaders make better operational decisions without needing to be everywhere at once.</p>
            </div>
          </Reveal>
          <Reveal>
            <blockquote className="border-l border-torch pl-6 text-2xl font-medium tracking-[-0.02em] text-white sm:text-3xl">
              Built from experience. Designed for scale.
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
