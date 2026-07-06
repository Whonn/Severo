"use client";

import { useState } from "react";
import Link from "next/link";
import { Anchor, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#03111d] to-[#0a1d31] shadow-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/20 border border-cyan-300/30 transition-transform duration-300 group-hover:scale-105">
            <Anchor className="h-5 w-5 text-cyan-300" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            Severo{" "}
            <span className="font-normal text-cyan-200/80">Marines</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white transition-colors hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-300 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/admin"
            className="btn-primary rounded-full bg-cyan-400/20 border border-cyan-300/40 px-5 py-2 text-sm font-medium text-white hover:bg-cyan-400/30 transition-colors"
          >
            Admin
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-cyan-300/20 bg-gradient-to-r from-[#03111d] to-[#0a1d31] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-cyan-400/20 border border-cyan-300/40 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-400/30 transition-colors"
              >
                Admin Dashboard
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
