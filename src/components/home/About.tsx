"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_30%_40%,_rgba(78,195,247,0.32)_0%,_transparent_58%),linear-gradient(135deg,_#081827_0%,_#15334f_100%)] p-6 shadow-[0_24px_90px_-35px_rgba(2,8,23,0.92)]">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.1),_transparent_40%,_rgba(255,255,255,0.08))]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-semibold tracking-[0.25em] text-white/10">
                    SM
                  </div>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-white/30">
                    Marina Bay
                  </p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-[20px] border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-sm font-medium text-white">
                  120+ berths across four premium dock zones
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              About us
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              A legacy of maritime excellence, reimagined.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              For more than two decades, Severo Marines has been the trusted
              partner for captains and vessel owners seeking calm, capable, and
              beautifully managed harbor experiences.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Every berth is monitored around the clock, every service is
              delivered with care, and every guest is welcomed as part of our
              growing maritime family.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "Dock zones", value: "4" },
                { label: "Certified staff", value: "45+" },
                { label: "Max vessel length", value: "85 ft" },
                { label: "Security", value: "24/7" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-2xl font-semibold text-white">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
