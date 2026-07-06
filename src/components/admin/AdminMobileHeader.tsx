"use client";

import Link from "next/link";
import { useState } from "react";
import { Anchor, ArrowLeft, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin#bookings", label: "Bookings" },
  { href: "/admin#occupancy", label: "Occupancy" },
  { href: "/admin#revenue", label: "Revenue" },
];

export default function AdminMobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-navy-100 bg-white lg:hidden">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-navy-900">
            <Anchor className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-navy-900">Admin</span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-navy-900"
          aria-label="Toggle admin menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-navy-100 bg-white"
          >
            <div className="flex flex-col gap-1 p-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-navy-700 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-navy-600 hover:bg-navy-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Site
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
