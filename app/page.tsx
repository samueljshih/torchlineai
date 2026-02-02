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
              className="text-lg sm:text-xl md:text-2xl text-zinc-200 max-w-3xl text-balance px-6 sm:px-4"
            >
              Torchline AI adds operational intelligence to the cameras you
              already have. Teams stay safe, consistent, and compliant without
              new hardware or extra busywork.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-3xl text-balance px-6 sm:px-4 italic"
            >
              Torchline AI surfaces exceptions, organizes evidence, and delivers
              coaching clips from the video you already capture.
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
              className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-3 lg:gap-6 text-sm lg:text-[15px] text-zinc-300/90 px-4"
            >
              <div className="flex items-start sm:items-center gap-2 justify-center">
                <ShieldCheck className="h-4 w-4 lg:h-5 lg:w-5 text-orange-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-center lg:text-left lg:whitespace-nowrap leading-tight">
                  Operator-built. Role-based access and retention controls
                  included.
                </span>
              </div>
              <div className="flex items-start sm:items-center gap-2 justify-center text-zinc-400">
                <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-orange-300 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-center lg:text-left lg:whitespace-nowrap leading-tight">
                  Designed for restaurants, retail, and hospitality teams
                </span>
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
              Inside the Torchline AI Command Center
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl text-base sm:text-lg text-zinc-300 text-balance px-6 sm:px-4"
            >
              See how Torchline AI turns everyday camera feeds into clear
              operational signals for coaching, compliance, and multi-site
              oversight.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl text-sm sm:text-base text-zinc-400 text-balance px-6 sm:px-4"
            >
              Most teams start with a few high-priority standards, then add more
              over time.
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
                <p className="text-balance px-6 sm:px-0">
                  Even strong operators lose margin to what can't be verified
                  mid-shift. Missed steps. Skipped breaks. Hygiene lapses.
                  Preventable loss.
                </p>
              </div>
              <div className="grid gap-3 sm:gap-4 text-left">
                {[
                  {
                    icon: Users2,
                    title: "High Turnover",
                    description: (
                      <>
                        U.S. restaurant turnover hit{" "}
                        <strong>65.8% in 2024</strong>. Consistency breaks when
                        teams rotate this fast.
                      </>
                    ),
                  },
                  {
                    icon: TrendingDown,
                    title: "Operational Shrink",
                    description: (
                      <>
                        Shrink averages <strong>1.6% of sales</strong>. That is{" "}
                        <strong>$112B</strong> in one year across retail.
                        Similar leakage shows up anywhere volume is high and
                        oversight is thin.
                      </>
                    ),
                  },
                  {
                    icon: Gavel,
                    title: "Compliance Exposure",
                    description: (
                      <>
                        Back wages recovered by the U.S. Department of Labor
                        topped <strong>$259M in FY2025</strong>. Wage-hour
                        mistakes get enforced.
                      </>
                    ),
                  },
                  {
                    icon: Camera,
                    title: "Fragmented Oversight",
                    description: (
                      <>
                        <strong>71%</strong> report cameras are already on-site.
                        But most systems still produce footage, not answers.
                      </>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_18px_32px_-20px_rgba(15,15,15,0.45)]"
                  >
                    <div className="mt-1 flex h-10 w-10 min-h-[2.5rem] min-w-[2.5rem] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white">
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                    </div>
                    <div className="space-y-1 flex-1">
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
              <div className="pt-6 space-y-2 px-6 sm:px-0">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900">
                  Operators think cameras protect them.
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  They don't until video becomes operational proof.
                </p>
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
                AI That Works Like a{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  Manager,
                </span>{" "}
                Not a Monitor
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto px-6 sm:px-4 text-balance">
                Torchline AI turns your existing cameras into an intelligence
                layer that surfaces exceptions, speeds up coaching, and
                strengthens compliance. It does this without adding screens to
                watch.
              </p>
              <p className="text-sm sm:text-base text-zinc-500 max-w-2xl mx-auto px-6 sm:px-4 text-balance">
                Examples include break adherence, handwashing frequency,
                restricted-area access, opening and closing routines, and
                register exceptions.
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
                  tagline: "Exceptions Captured",
                  description:
                    "Automatic detection flags safety, hygiene, and labor-risk moments. Key events are time-stamped and organized for review.",
                },
                {
                  title: "Coach",
                  tagline: "Coaching in Seconds",
                  description:
                    "Auto-tagged clips make feedback fast. Onboarding becomes smoother. Standards are easier to reinforce.",
                },
                {
                  title: "Elevate",
                  tagline: "Patterns Across Locations",
                  description:
                    "Trend views show where execution drifts and where it wins. Leaders can standardize what works.",
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
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed text-balance px-6 sm:px-0">
                Torchline AI detects and documents key safety, hygiene, and
                labor-compliance events. It creates a time-stamped audit trail
                for incident review and internal accountability.
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
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance px-6 sm:px-0">
                Torchline AI turns real shift moments into ready-to-share
                coaching clips. Managers reinforce SOPs with less effort and
                more consistency.
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
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed text-balance px-6 sm:px-0">
                Torchline AI surfaces patterns across shifts and stores. Leaders
                spot drift early, replicate best practices, and improve
                execution at scale.
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
              <p className="text-lg sm:text-xl px-6 sm:px-4 text-balance">
                The hardware is already there. The gap is turning video into
                something teams can use.
              </p>
              <div className="grid gap-4 px-2 sm:grid-cols-2 sm:px-4 md:grid-cols-4">
                {[
                  {
                    icon: Sparkles,
                    stat: "280×",
                    description: (
                      <>
                        AI inference costs dropped <strong>280-fold</strong>{" "}
                        from Nov 2022 to Oct 2024. Real-time analysis is now far
                        more practical.
                      </>
                    ),
                  },
                  {
                    icon: Camera,
                    stat: "71%",
                    description: (
                      <>
                        <strong>71%</strong> of operators have cameras already
                        in place.
                      </>
                    ),
                  },
                  {
                    icon: Gavel,
                    stat: "+20.9%",
                    description: (
                      <>
                        Labor class actions are up <strong>+20.9%</strong> since
                        2020. Documentation and timelines matter more than ever.
                      </>
                    ),
                  },
                  {
                    icon: ShieldCheck,
                    stat: "Claims",
                    description:
                      "Better documentation speeds investigations and reduces ambiguity when incidents happen.",
                  },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="group h-full rounded-2xl border border-white/10 bg-zinc-900/55 p-5 transition-all hover:border-orange-400/60 hover:shadow-[0_20px_55px_-30px_rgba(249,115,22,0.85)]"
                  >
                    <div className="flex items-center gap-3 text-orange-300">
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="text-3xl font-semibold text-white">
                        {item.stat}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-zinc-300/90 text-left">
                      {item.description}
                    </p>
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
                    "24/7 visibility with early signals for loss and operational gaps.",
                },
                {
                  icon: Coffee,
                  title: "Coffee Chains",
                  description:
                    "Queue flow, beverage standards, and service consistency.",
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
                    "Loss control, standards verification, and guest experience.",
                },
                {
                  icon: Users,
                  title: "Corporate Offices & HQ",
                  description:
                    "Multi-site visibility for ops leaders, training teams, and audits.",
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
                The Torchline AI System
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 text-balance px-6 sm:px-4">
                Torchline AI turns video into daily oversight. Exceptions,
                evidence, and coaching stay organized for every shift.
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
                    "Users, training clips, and audit logs. Centralized and audit-ready.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="h-full"
                >
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-zinc-800/60 p-6 backdrop-blur-xl transition-all hover:border-orange-400/60 hover:shadow-[0_22px_55px_-32px_rgba(249,115,22,0.7)]">
                    <div className="flex items-center text-orange-300">
                      <item.icon className="h-6 w-6" />
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

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mt-12 sm:mt-16"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
                How It Works
              </h3>
              <div className="max-w-3xl mx-auto space-y-3">
                {[
                  {
                    text: (
                      <>
                        <strong>Connect</strong> your existing cameras
                      </>
                    ),
                  },
                  {
                    text: (
                      <>
                        Torchline AI <strong>detects</strong> exceptions and key
                        events
                      </>
                    ),
                  },
                  {
                    text: (
                      <>
                        Managers <strong>review</strong> clips and timelines
                      </>
                    ),
                  },
                  {
                    text: (
                      <>
                        <strong>Coaching</strong> happens in minutes, not
                        meetings
                      </>
                    ),
                  },
                  {
                    text: (
                      <>
                        <strong>Trends</strong> roll up across shifts and
                        locations
                      </>
                    ),
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-800/40 p-5 backdrop-blur-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-base text-zinc-300 text-left flex-1 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
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
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto px-6 sm:px-4 text-balance">
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
                    "Torchline AI builds a reference library of real workflows and exceptions. Performance improves as coverage expands.",
                },
                {
                  icon: ShieldCheck,
                  title: "Audit Trail Foundation",
                  description:
                    "Time-stamped logs and supporting clips for incident review and compliance questions.",
                },
                {
                  icon: LineChart,
                  title: "Capital-Efficient Deployment",
                  description:
                    "Software-first rollout using existing cameras for faster onboarding.",
                },
                {
                  icon: Users,
                  title: "Operator-Built Insight",
                  description:
                    "Designed around real shift pressure and multi-unit consistency.",
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
                Torchline AI Beta
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 px-6 sm:px-4 text-balance">
              Be first to access beta availability, product updates, and new
              capabilities.
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
                  <span>No spam. Just product updates.</span>
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
