"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-navy-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(74,144,196,0.3)_0%,_transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white/10">SM</div>
                  <p className="mt-2 text-sm font-medium tracking-widest text-white/30 uppercase">
                    Marina Bay
                  </p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/10 p-4 backdrop-blur-md">
                <p className="text-sm font-medium text-white">
                  120+ berths across 4 premium dock zones
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              A Legacy of Marine Excellence
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy-600">
              For over two decades, Severo Marines has been the trusted partner
              for captains and vessel owners along the coast. Our marina combines
              state-of-the-art infrastructure with the warmth of a family-run
              operation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              Every berth is monitored around the clock. Every service is
              delivered by certified professionals. Every guest is treated as
              part of our maritime community.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: "Dock Zones", value: "4" },
                { label: "Certified Staff", value: "45+" },
                { label: "Max Vessel Length", value: "85 ft" },
                { label: "Security", value: "24/7" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-navy-100 bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <div className="text-2xl font-bold text-navy-900">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-navy-500">
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
