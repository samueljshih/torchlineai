import { Accent, ButtonLink, Container } from "./ui";

/**
 * Full-bleed photo hero. The entrance animation is CSS-only and moves without fading,
 * so the headline and copy paint immediately instead of waiting for JavaScript.
 */
export function Hero() {
  return (
    <section id="top" className="tone-dark relative isolate flex min-h-[92svh] items-center overflow-hidden pt-16">
      {/* Art-directed sizes: phones get a 40KB file. Heavy compression is invisible under the overlay. */}
      <picture>
        <source media="(max-width: 640px)" srcSet="/hero/dining-828.webp" />
        {/* eslint-disable-next-line @next/next/no-img-element -- <picture> art direction isn't supported by next/image */}
        <img
          src="/hero/dining-1600.webp"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_40%]"
        />
      </picture>
      {/* Warm ink overlay keeps text at AA contrast; ember light rises from below */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[radial-gradient(ellipse_at_50%_100%,rgba(242,106,27,0.30),transparent_65%)]"
      />

      <Container className="py-24 text-center sm:py-32">
        <div className="mx-auto max-w-4xl animate-in space-y-6 duration-700 slide-in-from-bottom-4 motion-reduce:animate-none">
          <h1 className="text-balance text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[80px]">
            Operational Advantage
            <br />
            <Accent>Powered by Vision&nbsp;AI</Accent>
          </h1>
          <p className="text-lg font-semibold tracking-[-0.01em] sm:text-2xl">
            Increase Cash Flow. Grow Revenue. Improve Margins.
          </p>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
            Torchline transforms existing camera systems into an operational intelligence platform that helps organizations uncover opportunities to increase cash flow, grow revenue, and improve margins.
          </p>
        </div>
        <div className="mt-10 flex animate-in flex-col justify-center gap-3 delay-150 duration-700 fill-mode-backwards slide-in-from-bottom-4 motion-reduce:animate-none sm:flex-row">
          <ButtonLink href="#demo-video">See Torchline In Action</ButtonLink>
          <ButtonLink href="#book-demo" variant="secondary" className="bg-ink/40 backdrop-blur-sm hover:bg-ink/60">
            Book A Demo
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
