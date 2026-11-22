import { VIDEO_POSTER_URL, VIDEO_URL } from "./content";
import { HudFrame, LiveDot } from "./hud";
import { Reveal } from "./motion";
import { Kicker, Section, headingClass } from "./ui";

export function Walkthrough() {
  return (
    <Section id="demo-video">
      <div className="space-y-12 sm:space-y-16">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="flex items-center gap-3 lg:col-span-4 lg:h-fit lg:pt-3">
            <Kicker index="02">Product Walkthrough</Kicker>
            <LiveDot />
          </div>
          <h2 className={`${headingClass} lg:col-span-8`}>Inside the Torchline Command Center</h2>
        </Reveal>
        <Reveal>
          <HudFrame className="aspect-video">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={VIDEO_URL}
              controls
              preload="metadata"
              poster={VIDEO_POSTER_URL}
            />
          </HudFrame>
        </Reveal>
      </div>
    </Section>
  );
}
