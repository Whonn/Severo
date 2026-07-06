import Link from "next/link";
import { Anchor, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Anchor className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold">Severo Marines</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Premium mooring and marine services on the coast. Where vessels
              find their home.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {["Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/admin"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                42 Harbor Drive, Marina Bay
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                +1 (555) 234-8900
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                hello@severomarines.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Hours
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Mon – Fri: 6:00 AM – 8:00 PM</li>
              <li>Saturday: 7:00 AM – 6:00 PM</li>
              <li>Sunday: 8:00 AM – 5:00 PM</li>
              <li className="pt-2 text-accent">Emergency: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12 opacity-20" />
        <p className="mt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Severo Marines. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
