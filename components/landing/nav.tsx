"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BrandMark } from "./brand-mark";
import { ButtonLink, Container } from "./ui";

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  return (
    <header
      className={cn(
        "tone-dark fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500",
        scrolled ? "border-edge bg-ink/[0.94] backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Torchline AI home">
          <BrandMark className="h-11" />
          <span className="text-[17px] font-semibold tracking-[-0.02em]">Torchline AI</span>
        </a>
        <ButtonLink href="#book-demo" size="sm">
          Book A Demo
        </ButtonLink>
      </Container>
      <motion.div
        aria-hidden
        className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-ember"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}
