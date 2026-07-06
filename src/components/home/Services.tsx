"use client";

import { Anchor, Compass, Fuel, Wrench } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/data";

const iconMap = {
  anchor: Anchor,
  wrench: Wrench,
  fuel: Fuel,
  compass: Compass,
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[linear-gradient(140deg,_#f7fbff_0%,_#eef6fb_100%)] py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(78,195,247,0.16),_transparent_34%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-cyan-200/70 bg-cyan-50 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Signature services
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Complete marine solutions with calm precision
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            From secure mooring to full vessel care, every detail is arranged
            with subtle luxury and dependable expertise.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <FadeIn key={service.id} delay={i * 0.08}>
                <div className="marine-card group h-full rounded-[24px] border border-slate-200/80 bg-white/85 p-7 shadow-[0_20px_70px_-35px_rgba(2,8,23,0.35)] backdrop-blur">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-200 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-6 h-[2px] w-10 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 transition-all duration-500 group-hover:w-16" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
