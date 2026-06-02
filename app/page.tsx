"use client";

import type React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  UtensilsCrossed,
  Coffee,
  Store,
  Building2,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  Camera,
  Video,
  Clock,
  ClipboardList,
  Zap,
  DollarSign,
  Lock,
  Eye,
  Search,
  ChevronDown,
  MapPin,
  X,
  AlertTriangle,
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
    transition: { staggerChildren: 0.15 },
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

const faqItems = [
  {
    question: "Do I need new cameras?",
    answer:
      "No. Torchline is designed to work with most existing camera systems. No rip-and-replace, no costly hardware overhaul, and no disruption to daily operations.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Most deployments are completed quickly with minimal disruption to daily operations. Simply connect your existing cameras and begin turning video into operational intelligence.",
  },
  {
    question: "Can Torchline work across multiple locations?",
    answer:
      "Yes. Torchline is built for multi-unit operators and provides centralized visibility across every location from a single platform.",
  },
  {
    question: "Does Torchline replace my security system?",
    answer:
      "No. Torchline is an operational intelligence platform that works alongside your existing security infrastructure.",
  },
  {
    question: "What camera systems are supported?",
    answer:
      "Torchline is designed to work with most existing commercial camera systems. Contact us to verify compatibility with your specific setup.",
  },
  {
    question: "Can Torchline monitor labor and compliance?",
    answer:
      "Yes. Torchline includes dedicated agents for labor accountability, SOP compliance, and operational standards across every shift.",
  },
  {
    question: "How is data stored and protected?",
    answer:
      "Torchline includes role-based access controls and retention management. Data security and privacy are built into the platform.",
  },
];

export default function TorchlineLanding() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          data?.error || "We couldn't submit your email. Please try again."
        );
      }
    } catch (error) {
      console.error("Demo request submission failed", error);
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
            <a href="#book-demo">Book A Demo</a>
          </Button>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
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
              className="text-xl sm:text-xl md:text-2xl text-zinc-200 max-w-3xl text-balance px-4 sm:px-4"
            >
              Torchline transforms existing camera systems into an operational
              intelligence platform that helps operators protect profits, coach
              teams, and improve execution across every location.
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
                <a href="#demo-video">See Torchline In Action</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 bg-transparent"
              >
                <a href="#book-demo">Book A Demo</a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-3 lg:gap-6 text-sm lg:text-[15px] text-zinc-300/90 px-4"
            >
              <div className="flex items-start sm:items-center gap-1.5 justify-center">
                <ShieldCheck className="h-4 w-4 lg:h-5 lg:w-5 text-orange-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-center lg:text-left lg:whitespace-nowrap leading-tight">
                  Operator built — Role-based access and retention controls
                  included
                </span>
              </div>
              <div className="flex items-start sm:items-center gap-1.5 justify-center text-zinc-400">
                <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-orange-300 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-center lg:text-left lg:whitespace-nowrap leading-tight">
                  Designed for restaurants, retail, and hospitality teams
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        <a
          href="#demo-video"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-zinc-400 hover:text-orange-400 transition-colors"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </section>

      {/* SECTION 2 — THE BIG IDEA */}
      <section className="py-14 sm:py-24 lg:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.3),_transparent_65%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
            >
              Most Restaurants Already Have Cameras.
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent"
            >
              Very Few Have Visibility.
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-3 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto"
            >
              <p>Cameras record what happened.</p>
              <p>Torchline helps operators understand what matters.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2"
            >
              {["Protect profits.", "Coach teams.", "Improve execution."].map(
                (item) => (
                  <motion.span
                    key={item}
                    variants={staggerItem}
                    className="px-5 py-2.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300 text-base sm:text-lg font-medium"
                  >
                    {item}
                  </motion.span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section
        id="demo-video"
        className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden"
      >
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
              className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
            >
              Inside the Torchline Command Center
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl text-base sm:text-lg text-zinc-300 text-balance px-6 sm:px-4"
            >
              See how Torchline turns everyday camera feeds into clear
              operational signals for coaching, compliance, and multi-site
              oversight.
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

      {/* SECTION 3 — FOUNDER STORY */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-zinc-100">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-4 sm:space-y-6 text-center"
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                Our Story
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-zinc-900">
                Built By A Restaurant Operator
              </h2>
              <div className="space-y-3 text-base sm:text-lg text-zinc-700 leading-relaxed">
                <p>Torchline wasn&apos;t created in a Silicon Valley boardroom.</p>
                <p>
                  It was built by a restaurant operator who spent years managing
                  labor, compliance, guest experience, training, and multi-unit
                  operations firsthand.
                </p>
                <p>Like many operators, we had cameras.</p>
                <p>But cameras only recorded what happened.</p>
                <p>They didn&apos;t provide visibility.</p>
                <p>Torchline was built to bridge that gap.</p>
                <p>
                  We created the platform we wished we had, one that helps
                  operators gain visibility, improve accountability, coach teams,
                  and protect profits across every location.
                </p>
                <p className="font-semibold text-zinc-900">
                  Because cameras don&apos;t solve problems.
                </p>
                <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Visibility does.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center pt-2">
                {[
                  { stat: "5", label: "Concepts" },
                  { stat: "9", label: "Locations Operated" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="px-5 py-3 rounded-xl border border-zinc-200 bg-white shadow-sm text-center"
                  >
                    <p className="text-3xl font-bold text-zinc-900">
                      {item.stat}
                    </p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wide">
                      {item.label}
                    </p>
                  </div>
                ))}
                <div className="px-5 py-3 rounded-xl border border-zinc-200 bg-white shadow-sm text-center flex flex-col justify-center">
                  <p className="text-sm font-semibold text-zinc-900">
                    Restaurant Owner
                  </p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide">
                    &amp; Operator
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — NO NEW CAMERAS REQUIRED */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(249,115,22,0.2),_transparent_65%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-4 sm:space-y-6 text-center md:text-left"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Works With The Cameras{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  You Already Have
                </span>
              </h2>
              <div className="space-y-3 text-base sm:text-lg text-zinc-300 leading-relaxed">
                <p>
                  Torchline is designed to work with most existing camera
                  systems.
                </p>
                <p>No rip-and-replace.</p>
                <p>No costly hardware overhaul.</p>
                <p>No disruption to daily operations.</p>
                <p>
                  Simply connect your existing cameras and begin turning video
                  into operational intelligence.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                {[
                  { icon: Camera, label: "Existing Camera Compatible" },
                  { icon: Zap, label: "Fast Deployment" },
                  { icon: MapPin, label: "Multi-Location Ready" },
                  { icon: CheckCircle2, label: "Minimal IT Requirements" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/50 px-3 py-3"
                  >
                    <item.icon className="h-4 w-4 text-orange-400 flex-shrink-0" />
                    <span className="text-sm text-zinc-200">{item.label}</span>
                  </div>
                ))}
              </div>
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-13%20at%209.02.49%20PM-LqRDKIvKBE2n4gMiFuY3wl6BEmTk8m.png"
                  alt="Torchline operational intelligence platform"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHO WE SERVE */}
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
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                Industries We Serve
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-zinc-900 px-4">
                Purpose Built For{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  High Volume Operations
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
                  title: "QSR",
                  description:
                    "Reduce labor leakage, improve speed of service, and maintain consistency.",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Fast Casual",
                  description:
                    "Protect execution and operational standards across every shift.",
                },
                {
                  icon: Store,
                  title: "Convenience Stores",
                  description: "Reduce shrinkage and improve accountability.",
                },
                {
                  icon: Coffee,
                  title: "Coffee & Beverage Chains",
                  description:
                    "Improve throughput during peak operating hours.",
                },
                {
                  icon: ShoppingBag,
                  title: "Food Courts",
                  description:
                    "Monitor execution in high-volume environments.",
                },
                {
                  icon: ShoppingBag,
                  title: "Grocery Stores",
                  description: "Improve operational oversight and safety.",
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
                      <p className="text-sm text-zinc-600/90">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — AI OPERATIONAL AGENTS */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center space-y-3 sm:space-y-4"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-4">
                Always-On{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  AI Operational Agents
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto px-6 sm:px-4 text-balance">
                Specialized AI agents continuously monitor operations and surface
                the moments that matter most.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: Clock,
                  title: "Labor Agent",
                  monitors: [
                    "Attendance",
                    "Punctuality",
                    "Shift execution",
                    "Labor accountability",
                  ],
                  value:
                    "Reduce time theft, buddy punching, and payroll disputes.",
                },
                {
                  icon: ClipboardList,
                  title: "Compliance Agent",
                  monitors: [
                    "SOP execution",
                    "Uniform compliance",
                    "PPE compliance",
                    "Operational procedures",
                  ],
                  value: "Improve consistency and reduce compliance risk.",
                },
                {
                  icon: Zap,
                  title: "Service Agent",
                  monitors: [
                    "Throughput",
                    "Queue conditions",
                    "Drive-thru performance",
                    "Service bottlenecks",
                  ],
                  value: "Improve guest experience and speed of service.",
                },
                {
                  icon: DollarSign,
                  title: "Shrink Agent",
                  monitors: [
                    "Refunds",
                    "Suspicious activity",
                    "Register behavior",
                    "Unauthorized access",
                  ],
                  value: "Reduce shrinkage and operational fraud.",
                },
                {
                  icon: ShieldCheck,
                  title: "Safety Agent",
                  monitors: [
                    "Slips and falls",
                    "Hazards",
                    "Smoke",
                    "Fire",
                    "Unsafe behavior",
                  ],
                  value: "Reduce incidents and liability exposure.",
                },
                {
                  icon: Lock,
                  title: "Security Agent",
                  monitors: [
                    "Loitering",
                    "Intrusion",
                    "Restricted areas",
                    "Perimeter activity",
                  ],
                  value: "Improve security awareness and prevention.",
                },
              ].map((agent) => (
                <motion.div
                  key={agent.title}
                  variants={staggerItem}
                  className="h-full"
                >
                  <div className="group relative flex min-h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/70 via-zinc-900/40 to-zinc-900/80 p-6 transition-all hover:border-orange-400/60 hover:shadow-[0_22px_55px_-28px_rgba(249,115,22,0.75)]">
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white">
                        <agent.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {agent.title}
                      </h3>
                    </div>
                    <div className="mb-4 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500 mb-2">
                        Monitors
                      </p>
                      <ul className="space-y-1">
                        {agent.monitors.map((m) => (
                          <li
                            key={m}
                            className="flex items-center gap-2 text-sm text-zinc-300"
                          >
                            <div className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-orange-300">{agent.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHAT TORCHLINE MONITORS */}
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
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                Platform Coverage
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-4">
                Operational Visibility{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  Across Every Location
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                {
                  label: "Labor & Attendance",
                  items: [
                    "Employee arrivals",
                    "Clock-in verification",
                    "Punctuality",
                    "Shift execution",
                  ],
                },
                {
                  label: "Compliance & Service",
                  items: [
                    "Uniform compliance",
                    "PPE compliance",
                    "SOP adherence",
                    "Queue conditions",
                    "Drive-thru speed",
                  ],
                },
                {
                  label: "Loss & Register",
                  items: [
                    "Register activity",
                    "Refund events",
                    "Delivery verification",
                    "Restricted area access",
                    "Unauthorized entry",
                  ],
                },
                {
                  label: "Safety & Security",
                  items: [
                    "Safety hazards",
                    "Slip and fall incidents",
                    "Loitering",
                    "Perimeter activity",
                  ],
                },
              ].map((group) => (
                <motion.div key={group.label} variants={staggerItem}>
                  <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 mb-3">
                      {group.label}
                    </p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-orange-400/70 flex-shrink-0" />
                          <span className="text-sm text-zinc-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SEARCH VIDEO LIKE GOOGLE */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-zinc-100">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-5 sm:space-y-6 text-center md:text-left"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-zinc-900">
                Find Any Moment{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  In Seconds
                </span>
              </h2>
              <div className="space-y-2 text-base sm:text-lg text-zinc-700">
                <p>Stop reviewing hours of footage.</p>
                <p>Search video using natural language.</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Example Searches
                </p>
                <div className="space-y-2">
                  {[
                    "Employee wearing red shirt",
                    "Person entered back door",
                    "Customer slipped near counter",
                    "Cash drawer opened after close",
                    "Employee arrived late",
                    "Unauthorized access to office",
                  ].map((ex) => (
                    <div
                      key={ex}
                      className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 shadow-sm"
                    >
                      <Search className="h-3.5 w-3.5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm text-zinc-700 font-mono">
                        {ex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-lg sm:text-xl font-semibold text-zinc-900 pt-1">
                The moments that matter, surfaced instantly.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-13%20at%209.01.31%20PM-aAAlzc6H8XbyAiPKrqusKxPSZD6XW4.png"
                  alt="Video search interface"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHY OPERATORS BUY TORCHLINE */}
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
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                Why Torchline
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-zinc-900 px-4">
                Built For{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Operational Results
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
                  icon: Clock,
                  title: "Labor Accountability",
                  description:
                    "Reduce payroll leakage and attendance disputes.",
                },
                {
                  icon: ClipboardList,
                  title: "SOP Compliance",
                  description:
                    "Verify operational standards across every shift.",
                },
                {
                  icon: Eye,
                  title: "Loss Prevention",
                  description:
                    "Identify suspicious behavior before losses escalate.",
                },
                {
                  icon: ShieldCheck,
                  title: "Liability Protection",
                  description:
                    "Maintain searchable audit trails and incident records.",
                },
                {
                  icon: Video,
                  title: "Faster Coaching",
                  description:
                    "Turn operational moments into teachable opportunities.",
                },
                {
                  icon: MapPin,
                  title: "Multi-Unit Visibility",
                  description:
                    "See what's happening without being everywhere.",
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
                      <p className="text-sm text-zinc-600/90">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — USE CASES */}
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
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                Real Scenarios
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-4">
                Real Operational Problems.{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  Real-Time Visibility.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  scenario: "Employee Didn't Clock In",
                  resolution: "AI verifies arrival and attendance.",
                },
                {
                  scenario: "Guest Slip & Fall",
                  resolution: "Locate footage immediately.",
                },
                {
                  scenario: "Refund Investigation",
                  resolution: "Review suspicious transactions instantly.",
                },
                {
                  scenario: "Drive-Thru Bottleneck",
                  resolution: "Identify throughput issues in real time.",
                },
                {
                  scenario: "SOP Violation",
                  resolution:
                    "Receive alerts when procedures aren't followed.",
                },
                {
                  scenario: "Unauthorized Entry",
                  resolution: "Detect access to restricted areas.",
                },
                {
                  scenario: "Delivery Verification",
                  resolution:
                    "Confirm orders and deliveries with video evidence.",
                },
              ].map((item) => (
                <motion.div
                  key={item.scenario}
                  variants={staggerItem}
                  className="h-full"
                >
                  <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-6 transition-all hover:border-orange-400/60 hover:shadow-[0_22px_55px_-28px_rgba(249,115,22,0.75)]">
                    <p className="text-base font-semibold text-white mb-2">
                      {item.scenario}
                    </p>
                    <p className="text-sm text-orange-300">{item.resolution}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — COMPETITIVE COMPARISON */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center space-y-3 sm:space-y-4"
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                How We Compare
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-4">
                Cameras Record.{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  Torchline Understands.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="rounded-3xl border border-white/10 overflow-hidden"
            >
              <div className="grid grid-cols-[1fr_auto_1fr] bg-zinc-800/80 px-3 sm:px-6 py-4 border-b border-white/10 items-center">
                <div className="text-center text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                  Traditional Cameras
                </div>
                <div className="flex items-center justify-center px-2 sm:px-4">
                  <span className="text-xs font-bold text-zinc-500 bg-zinc-700/60 border border-white/10 rounded-full px-2 sm:px-2.5 py-1 tracking-widest">
                    VS
                  </span>
                </div>
                <div className="text-center text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-wider">
                  Torchline
                </div>
              </div>
              {[
                ["Records footage", "Understands activity"],
                ["Reactive", "Proactive"],
                ["Manual review required", "Surfaces exceptions automatically"],
                ["Security focused", "Operations focused"],
                ["Hours of footage", "Actionable insights"],
                ["Limited visibility", "Operational intelligence"],
              ].map(([left, right], i) => (
                <div
                  key={left}
                  className={`grid grid-cols-[1fr_auto_1fr] px-3 sm:px-6 py-3 sm:py-4 border-t border-white/10 items-center ${
                    i % 2 === 0 ? "bg-zinc-900/30" : "bg-zinc-900/10"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-2">
                    <X className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-red-500/60 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-zinc-400 text-center">
                      {left}
                    </span>
                  </div>
                  <div className="w-px h-6 bg-white/10 mx-2 sm:mx-4" />
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-1 sm:px-2">
                    <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-white font-medium text-center">
                      {right}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — WHY NOW */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20">
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
          <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center space-y-3 sm:space-y-4"
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                The Opportunity
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-4">
                Restaurant Operations Are{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  More Complex Than Ever
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                "Rising labor costs",
                "Labor shortages",
                "Increased compliance requirements",
                "Multi-unit management challenges",
                "Shrinkage and fraud",
                "Growing guest expectations",
              ].map((challenge) => (
                <motion.div key={challenge} variants={staggerItem}>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/40 px-5 py-4">
                    <AlertTriangle className="h-4 w-4 text-orange-500/70 flex-shrink-0" />
                    <span className="text-base text-zinc-200">{challenge}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto"
            >
              Torchline helps operators gain visibility without adding management
              overhead.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 14 — FAQ */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto space-y-10 sm:space-y-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-3"
            >
              {faqItems.map((item, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <div className="rounded-2xl border border-white/10 bg-zinc-800/40 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="text-base sm:text-lg font-medium text-white pr-4">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-orange-400 flex-shrink-0 transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/10">
                        <div className="pt-4">{item.answer}</div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="book-demo"
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
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance px-4">
              See What Your Cameras{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Are Missing
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 px-6 sm:px-4 text-balance">
              Torchline helps operators protect profits, coach teams, and improve
              execution by transforming existing cameras into an always-on
              operational intelligence platform.
            </p>

            <div className="mx-auto max-w-md px-4">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_24px_65px_-40px_rgba(249,115,22,0.8)] backdrop-blur-xl"
              >
                <input type="hidden" name="form" value="torchline-demo" />
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
                    {isSubmitting ? "Submitting..." : "Schedule A Demo"}
                  </Button>
                </div>
                {errorMessage && (
                  <p className="text-sm text-red-400 animate-in fade-in">
                    {errorMessage}
                  </p>
                )}
                {isSubmitted && (
                  <p className="text-sm text-green-500 animate-in fade-in">
                    Thanks! We&apos;ll be in touch soon.
                  </p>
                )}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <ShieldCheck className="h-4 w-4 text-orange-300" />
                    <span>No spam. Just product updates.</span>
                  </div>
                  <p className="text-xs text-zinc-500 pl-6">
                    We&apos;ll reach out within 1 business day to schedule a 20-minute walkthrough.
                  </p>
                </div>
              </form>
            </div>

            <p className="text-sm text-zinc-500 pt-2">
              Built by operators. Powered by Vision AI.
            </p>
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
                © 2026 Torchline AI
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
