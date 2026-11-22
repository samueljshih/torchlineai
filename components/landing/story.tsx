import { Reveal } from "./motion";
import { Eyebrow, Section, h2Class } from "./ui";

export function Story() {
  return (
    <Section tone="light">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="space-y-5 lg:col-span-5">
          <Eyebrow>Our Story</Eyebrow>
          <h2 className={h2Class}>Built By A Restaurant Operator</h2>
          <blockquote className="border-l-2 border-ember pl-5 text-xl font-semibold tracking-[-0.015em] text-accent-fg sm:text-2xl">
            Built from experience. Designed for scale.
          </blockquote>
        </Reveal>
        <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-fg-muted lg:col-span-7 lg:pt-10">
          <p>Torchline was born from firsthand experience managing the complexities of multi-unit operations.</p>
          <p>
            Labor, compliance, training, guest experience, and execution all require constant attention, but no one can be everywhere at once.
          </p>
          <p className="font-semibold text-fg">So we built the platform we wished we had.</p>
          <p>One that helps leaders make better operational decisions without needing to be everywhere at once.</p>
        </Reveal>
      </div>
    </Section>
  );
}
