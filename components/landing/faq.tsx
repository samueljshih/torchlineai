"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "./content";
import { EASE, Reveal } from "./motion";
import { Kicker, Section, headingClass } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="space-y-6 lg:col-span-4">
          <Kicker index="11">FAQ</Kicker>
          <h2 className={headingClass}>Frequently Asked Questions</h2>
        </Reveal>
        <Reveal className="border-t border-line lg:col-span-8">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.question} className="border-b border-line">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? panelId : undefined}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={cn(
                        "text-base font-medium tracking-[-0.01em] transition-colors duration-300 sm:text-lg",
                        isOpen ? "text-white" : "text-zinc-300 group-hover:text-white",
                      )}
                    >
                      {item.question}
                    </span>
                    <Plus
                      aria-hidden
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isOpen ? "rotate-45 text-torch" : "text-zinc-500",
                      )}
                    />
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
                      transition={{ duration: 0.5, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-base leading-relaxed text-zinc-400">{item.answer}</p>
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
