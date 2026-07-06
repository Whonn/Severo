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
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Complete Marine Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600">
            From secure mooring to full vessel care, we provide everything your
            crew needs under one trusted roof.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <FadeIn key={service.id} delay={i * 0.1}>
                <div className="card-hover group h-full rounded-2xl border border-navy-100 bg-navy-50/50 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {service.description}
                  </p>
                  <div className="mt-5 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-12" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
