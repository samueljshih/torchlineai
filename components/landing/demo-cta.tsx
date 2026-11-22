"use client";

import { ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { FORMSPREE_URL } from "./content";
import { Reveal } from "./motion";
import { Container, buttonClass } from "./ui";

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
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[6px] border border-line bg-black/60 p-6 backdrop-blur-xl sm:p-8">
      <input type="hidden" name="form" value="torchline-demo" />
      <label htmlFor="demo-email" className="block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
        Work Email
      </label>
      <div className="flex flex-col gap-3">
        <input
          id="demo-email"
          type="email"
          name="email"
          placeholder="Enter your work email"
          autoComplete="email"
          required
          disabled={submitting}
          className="h-12 w-full rounded-md border border-white/15 bg-white/[0.03] px-4 text-base text-white placeholder:text-zinc-600 transition-colors duration-300 focus:border-torch focus:outline-none disabled:opacity-60"
        />
        <button type="submit" disabled={submitting} className={cn(buttonClass(), "w-full disabled:opacity-60")}>
          {submitting ? "Submitting..." : "Schedule A Demo"}
        </button>
      </div>
      <div aria-live="polite">
        {status === "error" && errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}
        {status === "success" && <p className="text-sm text-emerald-400">Thanks! We&apos;ll be in touch soon.</p>}
      </div>
      <div className="space-y-1.5 border-t border-line pt-5">
        <p className="flex items-center gap-2 text-sm text-zinc-400">
          <ShieldCheck className="h-4 w-4 shrink-0 text-torch" strokeWidth={1.5} aria-hidden />
          No spam. Just product updates.
        </p>
        <p className="pl-6 text-sm text-zinc-500">
          We&apos;ll reach out within 1 business day to schedule a personalized walkthrough.
        </p>
      </div>
    </form>
  );
}

export function DemoCta() {
  return (
    <section id="book-demo" className="relative scroll-mt-16 overflow-hidden border-t border-line">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_100%,black,transparent_75%)]" />
      <div aria-hidden className="absolute bottom-0 left-1/2 h-[360px] w-[900px] -translate-x-1/2 translate-y-1/2 rounded-full bg-torch/15 blur-[140px]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-1/3 animate-scan motion-reduce:hidden bg-gradient-to-b from-transparent via-white/[0.025] to-transparent" />
      <Container className="relative grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-40">
        <Reveal className="space-y-6 lg:col-span-7">
          <h2 className="text-balance text-[40px] font-medium leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-[88px]">
            Operational Advantage <span className="text-zinc-500">Starts Here.</span>
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Turn existing cameras into operational intelligence that helps your business run more efficiently and profitably.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={0.1}>
          <DemoForm />
        </Reveal>
      </Container>
      <Container className="relative pb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">Built by operators. Powered by Vision AI.</p>
      </Container>
    </section>
  );
}
