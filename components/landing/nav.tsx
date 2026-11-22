"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LOGO_URL, NAV_LINKS } from "./content";
import { ButtonLink, Container } from "./ui";

export function Wordmark({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Torchline AI home">
      <Image
        src={LOGO_URL}
        alt=""
        width={32}
        height={32}
        className={cn("object-contain", size === "md" ? "h-7 w-7" : "h-6 w-6")}
      />
      <span className={cn("font-medium tracking-[-0.02em] text-white", size === "md" ? "text-[17px]" : "text-[15px]")}>
        Torchline AI
      </span>
    </a>
  );
}

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
        scrolled ? "border-line bg-black/75 backdrop-blur-xl" : "border-transparent bg-black",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Wordmark />
        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ButtonLink href="#book-demo" size="sm">
          Book A Demo
        </ButtonLink>
      </Container>
      <motion.div
        aria-hidden
        className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-torch"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}
