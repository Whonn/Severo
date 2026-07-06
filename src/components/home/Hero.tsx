"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(74,144,196,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(27,54,93,0.4)_0%,_transparent_50%)]" />
        <svg
          className="absolute bottom-0 left-0 w-[200%] animate-wave opacity-[0.07]"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60C240 90 480 30 720 60C960 90 1200 30 1440 60V120H0V60Z"
            fill="white"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[200%] animate-wave opacity-[0.04]"
          style={{ animationDelay: "-4s" }}
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80C360 50 720 100 1080 70C1260 55 1380 85 1440 75V120H0V80Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm">
              Est. 2001 · Marina Bay
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Where Every Vessel
            <span className="block text-accent">Finds Its Harbor</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Severo Marines delivers premium mooring, maintenance, and marine
            concierge services — crafted for captains who expect excellence at
            every dock.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy-900"
            >
              Reserve a Berth
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-white/70"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-6 w-6 animate-float" />
      </motion.a>
    </section>
  );
}
