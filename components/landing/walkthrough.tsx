import { VIDEO_POSTER_URL, VIDEO_URL } from "./content";
import { Reveal } from "./motion";
import { LiveDot, Section, h2Class } from "./ui";

export function Walkthrough() {
  return (
    <Section id="demo-video" tone="dark">
      <Reveal className="mx-auto max-w-3xl space-y-5 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-edge bg-raised px-3.5 py-1.5 text-sm font-semibold text-fg-muted">
          <LiveDot />
          Product Walkthrough
        </p>
        <h2 className={h2Class}>Inside the Torchline Command Center</h2>
      </Reveal>
      <Reveal delay={100} className="relative mx-auto mt-12 max-w-[1080px] sm:mt-16">
        <div
          aria-hidden
          className="absolute -inset-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(242,106,27,0.22),transparent_65%)] blur-2xl"
        />
        <div className="relative overflow-hidden rounded-2xl border border-edge bg-black shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
          <video className="block aspect-video w-full" src={VIDEO_URL} controls preload="metadata" poster={VIDEO_POSTER_URL} />
        </div>
      </Reveal>
    </Section>
  );
}
