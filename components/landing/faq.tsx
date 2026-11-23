"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "./content";
import { EASE, Reveal } from "./motion";
import { Section, h2Class } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section tone="light">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <h2 className={h2Class}>Frequently Asked Questions</h2>
        </Reveal>
        <Reveal delay={80} className="space-y-3 lg:col-span-8">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={item.question}
                className={cn(
                  "rounded-2xl border bg-raised transition-[border-color,box-shadow] duration-300",
                  isOpen ? "border-ember/40 shadow-[0_16px_32px_-20px_rgba(20,17,15,0.3)]" : "border-edge",
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? panelId : undefined}
                    className="flex w-full items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                  >
                    <span className="text-base font-semibold tracking-[-0.01em] sm:text-[17px]">{item.question}</span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isOpen ? "rotate-45 bg-ember text-ink" : "bg-ember/10 text-accent-fg",
                      )}
                      aria-hidden
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-fg-muted sm:text-base">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
