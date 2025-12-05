"use client";

import type React from "react";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Play,
  UtensilsCrossed,
  Coffee,
  Store,
  Building2,
  ShoppingBag,
  Database,
  ShieldCheck,
  LineChart,
  Users,
  CheckCircle2,
  AlertTriangle,
  TrendingDown,
  Gavel,
  Camera,
  Sparkles,
  Video,
  BellRing,
  FileText,
  Settings,
  Users2,
} from "lucide-react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TorchlineLanding() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      setIsSubmitted(false);

      const response = await fetch("https://formspree.io/f/xnnezzqb", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setEmail("");
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json().catch(() => null);
        setErrorMessage(
          data?.error || "We couldn’t submit your email. Please try again."
        );
      }
    } catch (error) {
      console.error("Waitlist submission failed", error);
      setErrorMessage("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-600/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torchline_logo_transparent-beKRLoQoS2NVALqh9y3cZruq4BEO0c.png"
                alt="Torchline Logo"
                width={48}
                height={48}
                className="w-8 h-8 sm:w-12 sm:h-12 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.5)] transition-all duration-300"
              />
            </div>
            <span
              className={`text-lg sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:via-white group-hover:to-red-400 transition-all duration-300 ${montserrat.className}`}
            >
              Torchline AI
            </span>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 text-sm sm:text-base px-4 sm:px-6"
          >
            <a href="#join-waitlist">Join Waitlist</a>
          </Button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-13%20at%2010.06.57%20PM-oZm3C0EK3qGau9X8GvLZdDyCS6YBxx.png"
            alt="Torchline Operations Command Center"
            fill
            priority
            className="w-full h-full transform object-cover object-[center_40%] sm:object-center scale-[1.05]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center space-y-6 sm:space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            >
              Vision AI That
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Protects,
                <br className="hidden sm:block" />
                Coaches,
              </span>
              <br />
              And Elevates
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl text-zinc-200 max-w-3xl"
            >
              Torchline keeps every shift safe, consistent, and compliant by
              layering intelligence onto the cameras you already have no extra
              hardware, no extra busywork.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center pt-2"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 shadow-[0_8px_30px_rgba(249,115,22,0.35)] transition-all"
              >
                <a href="#join-waitlist">Join Waitlist</a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm sm:text-base text-zinc-300/90"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-orange-400" />
                <span>Operator-built. Privacy-first. Audit-ready.</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <CheckCircle2 className="h-5 w-5 text-orange-300" />
                <span>Trusted across restaurants, retail, and hospitality</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.22),_transparent_60%)]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center space-y-6 sm:space-y-8">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-orange-300"
            >
              Watch Torchline in Action
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
            >
              Inside the Torchline Command Center
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl text-base sm:text-lg text-zinc-300"
            >
              See how the platform transforms everyday camera feeds into
              real-time coaching, compliance, and operational intelligence.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_32px_85px_-40px_rgba(249,115,22,0.8)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              <video
                className="w-full aspect-video"
                src="https://pub-e824d08276a445f3a03a35b7112dff8e.r2.dev/torchline_updated.mp4"
                controls
                preload="metadata"
                poster="https://dkx9dfh6k5q2jmwm.public.blob.vercel-storage.com/torchline_placeholder.jpg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-zinc-100">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-4 sm:space-y-6 text-center md:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-zinc-900">
                Invisible Risks Are{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Eating Margins
                </span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-zinc-700">
                <p>
                  Even the best operators lose money every day to things they
                  can't see. Missed procedures, skipped breaks, hygiene lapses,
                  and preventable losses that slip through the cracks of busy
                  shifts.
                </p>
              </div>
              <div className="grid gap-3 sm:gap-4 text-left">
                {[
                  {
                    icon: Users2,
                    title: "High Turnover",
                    description: "Hospitality averages 70–80% annual churn.",
                  },
                  {
                    icon: TrendingDown,
                    title: "Operational Shrink",
                    description:
                      "Retail & food operators lose 1.6% of sales—over $100B industry-wide.",
                  },
                  {
                    icon: Gavel,
                    title: "Compliance Exposure",
                    description:
                      "Labor, safety, and wage-hour issues remain top legal and insurance risks.",
                  },
                  {
                    icon: Camera,
                    title: "Fragmented Oversight",
                    description:
                      "80% have cameras but lack insight—systems miss early warning signals.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_18px_32px_-20px_rgba(15,15,15,0.45)]"
                  >
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">
                        {item.title}
                      </p>
                      <p className="text-sm sm:text-base text-zinc-700/90">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6 space-y-1 text-base sm:text-lg text-zinc-800">
                <p>Operators think cameras protect them.</p>
                <p>They don't. Not until they become intelligent.</p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-300 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-13%20at%209.01.31%20PM-aAAlzc6H8XbyAiPKrqusKxPSZD6XW4.png"
                  alt="Food preparation line"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center space-y-3 sm:space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-4">
                AI That Works Like A{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  Manager,
                </span>{" "}
                Not A Monitor
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
                Torchline AI turns the cameras you already have into an
                intelligent layer that helps teams stay safe, consistent, and
                compliant without adding extra work.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-4 sm:gap-6 sm:grid-cols-3"
            >
              {[
                {
                  title: "Protect",
                  tagline: "Every action accounted for",
                  description:
                    "Automatic detection keeps safety, hygiene, and labor playbooks buttoned up.",
                },
                {
                  title: "Coach",
                  tagline: "Every moment teachable",
                  description:
                    "Feedback-ready clips help teams course-correct and celebrate wins in seconds.",
                },
                {
                  title: "Elevate",
                  tagline: "Every standard elevated",
                  description:
                    "Shift intelligence surfaces patterns leaders can scale across locations.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="flex h-full"
                >
                  <div className="group relative flex min-h-full flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/70 via-zinc-900/40 to-zinc-900/80 p-6 sm:p-8 transition-all hover:border-orange-400/60 hover:shadow-[0_22px_55px_-28px_rgba(249,115,22,0.75)]">
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-base font-semibold text-white sm:h-12 sm:w-12">
                        {index + 1}
                      </div>
                      <p className="text-base font-semibold uppercase tracking-[0.3em] text-zinc-200 sm:text-lg">
                        {item.title}
                      </p>
                    </div>
                    <div className="mt-5 space-y-3">
                      <p className="text-2xl font-semibold text-white sm:text-3xl">
                        {item.tagline}
                      </p>
                      <p className="text-sm text-zinc-400/90 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative mt-8 sm:mt-12"
            >
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-13%20at%209.02.49%20PM-LqRDKIvKBE2n4gMiFuY3wl6BEmTk8m.png"
                  alt="Frontline worker using Torchline AI on tablet"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 75vw, 100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="order-2 md:order-1 relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c-restaurant-o4hfSLsa4tVbhVVduVunZuOaXszOUJ.png"
                  alt="Restaurant protection"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="order-1 md:order-2 space-y-4 sm:space-y-6 text-center md:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Protect
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                Torchline AI automatically detects and documents safety,
                hygiene, and labor-compliance events. From handwashing to breaks
                to food handling, every action is timestamped and archived
                creating a digital record that protects operators from lawsuits,
                claims, and brand risk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-4 sm:space-y-6 text-center md:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  Coach
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Torchline AI transforms live operations into teachable moments.
                Our AI auto-tags clips of both misses and wins, helping managers
                deliver quick, visual feedback that reinforces SOPs and culture.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c-coach-aShvOlyFioCFyPDhtOCOV48hEw8hSG.png"
                  alt="Professional chefs working together in kitchen"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-zinc-100">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="order-2 md:order-1 relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-300 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c-elevate-yz094Wu3Yh4qNvlf8cKa8cYxrMBbWj.png"
                  alt="Performance analytics"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="order-1 md:order-2 space-y-4 sm:space-y-6 text-center md:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Elevate
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
                Torchline AI analyzes patterns across shifts to reveal what
                drives better service, faster throughput, and cleaner execution.
                It connects behavior to performance so leaders can reward and
                replicate what works.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/server-FO7O3vJaIVama2HNnYnYZ4kQfVIJEG.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-4"
            >
              The Market is{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Ready
              </span>
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-6 text-base sm:text-lg text-zinc-400"
            >
              <p className="text-lg sm:text-xl px-4">
                The hardware is already there. The need has never been greater.
              </p>
              <div className="grid gap-4 px-2 sm:grid-cols-2 sm:px-4 md:grid-cols-4">
                {[
                  {
                    icon: Sparkles,
                    stat: "70%",
                    description: "AI vision costs down since 2019",
                  },
                  {
                    icon: Camera,
                    stat: "80%",
                    description: "Operators already camera equipped",
                  },
                  {
                    icon: Gavel,
                    stat: "62%",
                    description: "Labor lawsuits up in five years",
                  },
                  {
                    icon: ShieldCheck,
                    stat: "Premiums",
                    description: "Insurers reward AI-verified compliance",
                  },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="group h-full rounded-2xl border border-white/10 bg-zinc-900/55 p-5 transition-all hover:border-orange-400/60 hover:shadow-[0_20px_55px_-30px_rgba(249,115,22,0.85)]"
                  >
                    <div className="flex items-center gap-3 text-orange-300">
                      <item.icon className="h-5 w-5" />
                      <span className="text-3xl font-semibold text-white">
                        {item.stat}
                      </span>
                    </div>
                    {item.stat === "Premiums" ? (
                      <p className="mt-3 text-sm text-zinc-300/90">
                        <span className="mr-1 text-lg font-semibold text-white">
                          ↓
                        </span>
                        {item.description}
                      </p>
                    ) : (
                      <p className="mt-3 text-sm text-zinc-300/90">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center space-y-3 sm:space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-zinc-900 px-4">
                Built For{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  The Frontline
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {[
                {
                  icon: UtensilsCrossed,
                  title: "Quick Service & Fast Casual",
                  description:
                    "SOP consistency and safety at scale across busy kitchens.",
                },
                {
                  icon: Store,
                  title: "Convenience Stores",
                  description:
                    "24/7 visibility and proactive shrink prevention.",
                },
                {
                  icon: Coffee,
                  title: "Coffee Chains",
                  description:
                    "Queue timing, beverage standards, and service quality.",
                },
                {
                  icon: Building2,
                  title: "Hotels & Grocery",
                  description:
                    "Food safety compliance and brand protection across back-of-house.",
                },
                {
                  icon: ShoppingBag,
                  title: "Retail Stores & Malls",
                  description:
                    "Planogram adherence, loss control, and guest experience.",
                },
                {
                  icon: Users,
                  title: "Corporate Offices & HQ",
                  description:
                    "Executive war-rooms, training centers, and multi-site oversight.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="h-full"
                >
                  <div className="flex h-full items-start gap-4 rounded-3xl border border-zinc-200/80 bg-white p-5 shadow-[0_20px_44px_-32px_rgba(15,15,15,0.55)] transition-all hover:-translate-y-1 hover:border-orange-400/60 hover:shadow-[0_28px_60px_-35px_rgba(249,115,22,0.55)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1 text-left">
                      <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-600/90 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative mt-8 sm:mt-12"
            >
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-lg overflow-hidden border border-zinc-200 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grocery-vvGsS5lqXDg4KFjam0EdQxreXYwk7k.png"
                  alt="Frontline operations"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 75vw, 100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-3 sm:space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                The Torchline System
              </h2>
              <p className="text-base sm:text-lg text-zinc-300">
                Torchline AI is a manager's assistant, a compliance officer, and
                a training coach all in one.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-4 text-left sm:grid-cols-2"
            >
              {[
                {
                  icon: Video,
                  title: "Live Video + Smart Overlays",
                  description:
                    "Real-time context layered on top of the feeds you already trust.",
                },
                {
                  icon: BellRing,
                  title: "AI Alerts",
                  description:
                    "Compliance, safety, and performance signals before incidents escalate.",
                },
                {
                  icon: FileText,
                  title: "Shift Scorecards",
                  description:
                    "Daily summaries ready for coaching and cross-shift handoffs.",
                },
                {
                  icon: Settings,
                  title: "Admin Panel",
                  description:
                    "Users, training clips, audit logs—centralized and audit-ready.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="h-full"
                >
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-zinc-800/60 p-6 backdrop-blur-xl transition-all hover:border-orange-400/60 hover:shadow-[0_22px_55px_-32px_rgba(249,115,22,0.7)]">
                    <div className="flex items-center gap-3 text-orange-300">
                      <item.icon className="h-6 w-6" />
                      <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-300">
                        Platform
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-300/90 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/last-GUG5TRbJeDQbA38zYRs7pfy2S3OtIz.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center space-y-3 sm:space-y-4"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-5 sm:w-5 sm:h-6 border-2 border-white rounded-sm" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-4">
                Our Edge{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  Compounds Over Time
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
                Every shift makes Torchline smarter and harder to replace.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2"
            >
              {[
                {
                  icon: Database,
                  title: "Proprietary Dataset",
                  description:
                    "Every shift trains our system and builds a moat no one else can match.",
                },
                {
                  icon: ShieldCheck,
                  title: "Legal AI Engine",
                  description:
                    "Designed to protect operators with defensible, audit-ready data.",
                },
                {
                  icon: LineChart,
                  title: "Capital Efficient Model",
                  description:
                    "Torchline scales like software, leveraging existing camera infrastructure for instant deployment.",
                },
                {
                  icon: Users,
                  title: "Operator-Built Insight",
                  description: "Created by real operators, for the frontline.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="h-full"
                >
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8 transition-all hover:border-orange-400/60 hover:shadow-[0_24px_60px_-35px_rgba(249,115,22,0.75)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white sm:h-14 sm:w-14">
                        <item.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-[0.3em] text-orange-200/80">
                        Advantage
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-400/95 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="join-waitlist"
        className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-orange-950/20"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-t from-orange-500/30 to-transparent blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-4">
              Join the{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Torchline Beta
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 px-4">
              Be the first to access Torchline AI insights, beta launches, and
              vision tech updates.
            </p>

            <div className="mx-auto max-w-md px-4">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_24px_65px_-40px_rgba(249,115,22,0.8)] backdrop-blur-xl"
              >
                <input type="hidden" name="form" value="torchline-waitlist" />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="flex-1 border-white/20 bg-black/40 py-4 text-lg text-white placeholder:text-zinc-500 focus:border-orange-500"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 text-lg text-white border-0 whitespace-nowrap shadow-[0_10px_30px_rgba(249,115,22,0.45)]"
                  >
                    {isSubmitting ? "Submitting..." : "Join Waitlist"}
                  </Button>
                </div>
                {errorMessage && (
                  <p className="text-sm text-red-400 animate-in fade-in">
                    {errorMessage}
                  </p>
                )}
                {isSubmitted && (
                  <p className="text-sm text-green-500 animate-in fade-in">
                    Thanks! We'll be in touch soon.
                  </p>
                )}
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <ShieldCheck className="h-4 w-4 text-orange-300" />
                  <span>No spam. Just frontline innovation.</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 sm:py-8 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-zinc-500">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torchline_logo_transparent-beKRLoQoS2NVALqh9y3cZruq4BEO0c.png"
                alt="Torchline Logo"
                width={28}
                height={28}
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain drop-shadow-[0_0_6px_rgba(249,115,22,0.2)]"
              />
              <span
                className={`font-semibold tracking-tight ${montserrat.className}`}
              >
                © 2025 Torchline AI
              </span>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
