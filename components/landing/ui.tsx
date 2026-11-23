import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-4 sm:px-8", className)}>{children}</div>;
}

type Tone = "dark" | "light";

type SectionProps = {
  id?: string;
  tone: Tone;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

/** Full-width chapter of the page. Dark and light tones alternate to give the page rhythm. */
export function Section({ id, tone, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn(`tone-${tone}`, "relative scroll-mt-16 overflow-clip", className)}>
      <Container className={cn("py-24 sm:py-28 lg:py-32", containerClassName)}>{children}</Container>
    </section>
  );
}

/** Small pulsing status dot. */
export function LiveDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative flex h-2 w-2", className)} aria-hidden>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60 [animation-duration:2s]" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
    </span>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-sm font-semibold tracking-[-0.005em] text-accent-fg", className)}>{children}</p>;
}

/** Ember-colored part of a headline (replaces the original gradient text). */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-accent-fg">{children}</span>;
}

export const h2Class =
  "text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]";

export const leadClass = "text-pretty text-base leading-relaxed text-fg-muted sm:text-lg";

type SectionHeadProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHead({ eyebrow, title, description, align = "center", className }: SectionHeadProps) {
  return (
    <Reveal
      className={cn(
        "space-y-5",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={h2Class}>{title}</h2>
      {description && (
        <p className={cn(leadClass, align === "center" && "mx-auto max-w-2xl")}>{description}</p>
      )}
    </Reveal>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
};

const buttonVariants = {
  primary: "bg-ember text-ink shadow-[0_8px_24px_-8px_rgba(242,106,27,0.55)] hover:bg-ember-hover",
  secondary: "border border-edge text-fg hover:bg-fg/[0.06]",
};

const buttonSizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
};

export function buttonClass({ variant = "primary", size = "md" }: Pick<ButtonLinkProps, "variant" | "size"> = {}) {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-[background-color,box-shadow,transform] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember active:scale-[0.98]",
    buttonVariants[variant],
    buttonSizes[size],
  );
}

export function ButtonLink({ href, children, variant = "primary", size = "md", className }: ButtonLinkProps) {
  return (
    <a href={href} className={cn(buttonClass({ variant, size }), className)}>
      {children}
      {variant === "primary" && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
      )}
    </a>
  );
}

type ProductShotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Show minimal browser chrome above the screenshot. */
  chrome?: boolean;
  className?: string;
  sizes?: string;
};

/** Real Torchline UI screenshot, framed like an app window. */
export function ProductShot({ src, alt, width, height, chrome = true, className, sizes }: ProductShotProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-black/10 bg-[#f5f1ea] shadow-[0_40px_80px_-30px_rgba(20,17,15,0.45),0_12px_24px_-12px_rgba(20,17,15,0.25)]",
        className,
      )}
    >
      {chrome && (
        <div className="flex h-8 items-center gap-1.5 border-b border-black/[0.06] bg-[#efeae2] px-3.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        sizes={sizes}
        className="block h-auto w-full"
      />
    </figure>
  );
}
