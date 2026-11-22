"use client";

import { ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { FORMSPREE_URL } from "./content";
import { Reveal } from "./motion";
import { Accent, Container, buttonClass } from "./ui";

type Status = "idle" | "submitting" | "success" | "error";

function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Capture fields before the input is disabled; disabled controls are excluded from FormData.
    const formData = new FormData(form);

    try {
      setStatus("submitting");
      setErrorMessage(null);

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
        setTimeout(() => setStatus((s) => (s === "success" ? "idle" : s)), 5000);
      } else {
        const data = await response.json().catch(() => null);
        setErrorMessage(data?.error || "We couldn't submit your email. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Demo request submission failed", error);
      setErrorMessage("Something went wrong. Please try again in a moment.");
      setStatus("error");
    }
  };

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl space-y-5 rounded-3xl border border-edge bg-raised/80 p-6 text-left shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-8"
    >
      <input type="hidden" name="form" value="torchline-demo" />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="demo-email" className="sr-only">
          Work email
        </label>
        <input
          id="demo-email"
          type="email"
          name="email"
          placeholder="Enter your work email"
          autoComplete="email"
          required
          disabled={submitting}
          className="h-12 min-w-0 flex-1 rounded-full border border-edge bg-canvas px-5 text-base text-fg placeholder:text-fg-subtle transition-colors duration-300 focus:border-ember focus:outline-none disabled:opacity-60"
        />
        <button type="submit" disabled={submitting} className={cn(buttonClass(), "disabled:opacity-60")}>
          {submitting ? "Submitting..." : "Schedule A Demo"}
        </button>
      </div>
      <div aria-live="polite">
        {status === "error" && errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}
        {status === "success" && <p className="text-sm text-emerald-400">Thanks! We&apos;ll be in touch soon.</p>}
      </div>
      <div className="space-y-1.5">
        <p className="flex items-center gap-2 text-sm font-medium text-fg-muted">
          <ShieldCheck className="h-4 w-4 shrink-0 text-accent-fg" aria-hidden />
          No spam. Just product updates.
        </p>
        <p className="pl-6 text-sm text-fg-subtle">
          We&apos;ll reach out within 1 business day to schedule a personalized walkthrough.
        </p>
      </div>
    </form>
  );
}

export function DemoCta() {
  return (
    <section id="book-demo" className="tone-dark relative scroll-mt-16 overflow-hidden">
      {/* torchlight rising from below */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(242,106,27,0.32),transparent_65%)]"
      />
      <Container className="relative py-28 text-center sm:py-36">
        <Reveal className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-balance text-[38px] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[68px]">
            Operational Advantage <Accent>Starts Here.</Accent>
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-lg leading-relaxed text-fg-muted">
            Turn existing cameras into operational intelligence that helps your business run more efficiently and profitably.
          </p>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <DemoForm />
        </Reveal>
        <p className="mt-10 text-sm text-fg-subtle">Built by operators. Powered by Vision AI.</p>
      </Container>
    </section>
  );
}
