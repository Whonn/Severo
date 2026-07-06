"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Anchor, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-navy-100"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 transition-transform duration-300 group-hover:scale-105">
            <Anchor className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-navy-900">
            Severo{" "}
            <span className="font-normal text-navy-600">Marines</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-navy-700 transition-colors hover:text-navy-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-navy-700 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/admin"
            className="btn-primary rounded-full bg-navy-900 px-5 py-2 text-sm font-medium text-white"
          >
            Admin
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-navy-900"
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
            className="overflow-hidden border-t border-navy-100 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-navy-900 px-5 py-2.5 text-center text-sm font-medium text-white"
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
