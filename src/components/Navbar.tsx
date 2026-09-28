"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Smile,
  Phone,
  Home,
  Info,
  Layers,
  Mail,
  CalendarPlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC_INFO } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Layers },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/book", label: "Book", icon: CalendarPlus },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (pathname.startsWith("/admin") || pathname === "/login") return null;

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  const linkClass = (active: boolean) => {
    if (solid) {
      return active
        ? "text-teal-800 bg-white shadow-sm"
        : "text-slate-500 hover:text-teal-700 hover:bg-white/60";
    }
    return active
      ? "text-white bg-white/20 backdrop-blur-sm"
      : "text-white/75 hover:text-white hover:bg-white/10";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-500 ${
        solid
          ? "bg-teal-50/95 backdrop-blur-md shadow-sm border-b border-teal-100/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30 shrink-0"
            >
              <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
            <div className="min-w-0">
              <span
                className={`font-bold text-sm sm:text-lg leading-tight block truncate transition-colors ${
                  solid ? "text-teal-900" : "text-white"
                }`}
              >
                <span className="sm:hidden">SmileCare</span>
                <span className="hidden sm:inline">{CLINIC_INFO.name}</span>
              </span>
              <span
                className={`text-[10px] sm:text-xs hidden sm:block truncate transition-colors ${
                  solid ? "text-teal-600" : "text-teal-200"
                }`}
              >
                {CLINIC_INFO.tagline}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${linkClass(active)}`}
                >
                  <Icon className="w-4 h-4 shrink-0" strokeWidth={active ? 2.25 : 2} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                solid
                  ? "text-teal-700 hover:bg-white/80"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span className="hidden xl:inline">Call Us</span>
            </a>
            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 xl:px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300"
            >
              <CalendarPlus className="w-4 h-4 shrink-0" />
              Book Now
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 rounded-xl transition-colors shrink-0 ${
              solid ? "text-teal-700 hover:bg-white/80" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-14 sm:top-16 bg-black/40 lg:hidden z-40"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden relative z-50 bg-teal-50/98 backdrop-blur-md border-t border-teal-100/80 shadow-lg"
            >
              <div className="px-3 sm:px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-medium transition-colors ${
                          active
                            ? "bg-white text-teal-800 shadow-sm"
                            : "text-slate-600 hover:bg-white/70 hover:text-teal-700"
                        }`}
                      >
                        <Icon className="w-5 h-5 shrink-0" strokeWidth={active ? 2.25 : 2} />
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium text-teal-700 bg-white border border-teal-100"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <Link
                    href="/book"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                  >
                    <CalendarPlus className="w-4 h-4" />
                    Book
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
