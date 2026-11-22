import { ROLES } from "./content";
import { Reveal } from "./motion";
import { Accent, Eyebrow, Section, h2Class } from "./ui";

export function Roles() {
  return (
    <Section tone="dark">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="space-y-5 lg:col-span-4">
          <Eyebrow>Who Uses Torchline</Eyebrow>
          <h2 className={h2Class}>
            Who Uses <Accent>Torchline?</Accent>
          </h2>
        </Reveal>
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
          {ROLES.map(({ icon: Icon, title, description }, i) => (
            <Reveal as="li" key={title} delay={(i % 2) * 70} className="flex gap-4 border-t border-edge py-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember/15 text-accent-fg">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold tracking-[-0.015em]">{title}</h3>
                <p className="text-[15px] leading-relaxed text-fg-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
