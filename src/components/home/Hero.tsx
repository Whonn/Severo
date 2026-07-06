"use client";

import { ArrowRight, ChevronDown, Compass, Waves } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        labelRef.current,
        titleRef.current,
        textRef.current,
        ctaRef.current,
        panelRef.current,
      ].filter(Boolean) as HTMLElement[];

      gsap.set(elements, { opacity: 0, y: 24 });
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.to(".hero-orb", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 3.2,
        ease: "sine.inOut",
        stagger: 0.25,
      });

      gsap.to(".hero-wave", {
        xPercent: -20,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });

      gsap.to(scrollRef.current, {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(78,195,247,0.28),_transparent_30%),linear-gradient(135deg,_#03111d_0%,_#0a1d31_45%,_#173554_100%)]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-orb absolute left-[8%] top-[16%] h-40 w-40 rounded-full bg-cyan-300/20 blur-[120px]" />
        <div className="hero-orb absolute bottom-[10%] right-[8%] h-56 w-56 rounded-full bg-sky-400/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.12),_transparent_28%)]" />
        <svg
          className="hero-wave absolute bottom-0 left-0 h-24 w-[220%] opacity-25"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 70C240 100 480 40 720 70C960 100 1200 40 1440 70V120H0V70Z"
            fill="white"
          />
        </svg>
        <svg
          className="hero-wave absolute bottom-5 left-0 h-20 w-[220%] opacity-15"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80C360 45 720 110 1080 80C1260 65 1380 95 1440 85V120H0V80Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <span
            ref={labelRef}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/90 backdrop-blur-sm"
          >
            <Waves className="h-3.5 w-3.5" />
            Sail • Serene • Sophisticated
          </span>

          <h1
            ref={titleRef}
            className="mt-8 text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
          >
            Where calm waters
            <span className="mt-2 block text-cyan-300">meet polished harbor luxury</span>
          </h1>

          <p
            ref={textRef}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-200/85"
          >
            Severo Marines elevates every arrival with refined mooring, expert
            care, and concierge-level service designed for captains who expect
            elegance at every dock.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950"
            >
              Reserve a berth
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10"
            >
              Discover services
            </a>
          </div>
        </div>

        <div
          ref={panelRef}
          className="marine-panel relative mx-auto w-full max-w-md rounded-[32px] border border-white/15 bg-white/10 p-6 shadow-[0_30px_90px_-35px_rgba(2,8,23,0.9)] backdrop-blur-xl"
        >
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-100/70">
                  Marina spotlight
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">Harbor 03</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                <Compass className="h-5 w-5" />
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-slate-950/35 p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-300">Docked today</p>
                  <p className="mt-1 text-3xl font-semibold text-white">24</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-300">Ocean view</p>
                  <p className="mt-1 text-sm font-medium text-cyan-200">
                    Sunset to dawn
                  </p>
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Premium berths", value: "120+" },
                { label: "Security", value: "24/7" },
                { label: "Max length", value: "85 ft" },
                { label: "Crew ready", value: "45+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-300/80">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        ref={scrollRef}
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 transition-colors duration-300 hover:text-white/80"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
