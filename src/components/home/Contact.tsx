"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn direction="left">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Reserve Your Berth Today
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              Tell us about your vessel and preferred dates. Our team will respond
              within 24 hours with availability and pricing.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { label: "Location", value: "42 Harbor Drive, Marina Bay" },
                { label: "Phone", value: "+1 (555) 234-8900" },
                { label: "Email", value: "hello@severomarines.com" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-navy-900">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            {submitted ? (
              <div className="flex h-full min-h-[400px] items-center justify-center rounded-2xl border border-navy-100 bg-navy-50 p-8 text-center">
                <div>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-navy-900">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-sm text-navy-600">
                    Thank you for reaching out. We&apos;ll be in touch shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-navy-100 bg-navy-50/50 p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-navy-500"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="mt-2 w-full rounded-lg border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-all focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20"
                      placeholder="Captain John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-navy-500"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-lg border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-all focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20"
                      placeholder="captain@email.com"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="vessel"
                    className="block text-xs font-semibold uppercase tracking-wider text-navy-500"
                  >
                    Vessel Name & Length
                  </label>
                  <input
                    id="vessel"
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-all focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20"
                    placeholder="Sea Voyager — 42 ft"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-navy-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-2 w-full resize-none rounded-lg border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-all focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20"
                    placeholder="Preferred dates, services needed..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 py-3 text-sm font-semibold text-white"
                >
                  Send Inquiry
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
