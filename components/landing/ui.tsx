import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-4 sm:px-8", className)}>{children}</div>;
}

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

/** Page section separated from the previous one by a hairline rule. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-16 border-t border-line", className)}>
      <Container className="py-24 sm:py-32 lg:py-36">{children}</Container>
    </section>
  );
}

/** Small monospace label, e.g. "03 / Our Story". */
export function Kicker({ index, children, className }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500", className)}>
      {index && (
        <>
          <span className="text-torch">{index}</span>
          <span className="mx-2 text-zinc-700">/</span>
        </>
      )}
      {children}
    </p>
  );
}

/** Headline with a white lead and a muted continuation. */
export function TwoTone({ lead, rest }: { lead: ReactNode; rest?: ReactNode }) {
  return (
    <>
      {lead}
      {rest && (
        <>
          {" "}
          <span className="text-zinc-500">{rest}</span>
        </>
      )}
    </>
  );
}

export const headingClass =
  "text-balance text-[34px] leading-[1.04] font-medium tracking-[-0.03em] sm:text-5xl lg:text-[64px]";

type SectionHeadProps = {
  index: string;
  kicker: ReactNode;
  title: ReactNode;
  description?: ReactNode;
};

/** Two-column section header: label on the left, headline on the right. */
export function SectionHead({ index, kicker, title, description }: SectionHeadProps) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-4 lg:pt-3">
        <Kicker index={index}>{kicker}</Kicker>
      </div>
      <div className="space-y-6 lg:col-span-8">
        <h2 className={headingClass}>{title}</h2>
        {description && <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>}
      </div>
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

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-[-0.01em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-torch";

const buttonVariants = {
  primary: "bg-torch text-black hover:bg-torch-hover",
  secondary: "border border-white/15 text-white hover:border-white/30 hover:bg-white/[0.04]",
};

const buttonSizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
};

export function buttonClass({ variant = "primary", size = "md" }: Pick<ButtonLinkProps, "variant" | "size"> = {}) {
  return cn(buttonBase, buttonVariants[variant], buttonSizes[size]);
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
