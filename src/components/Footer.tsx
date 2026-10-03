"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Clock, Smile, ArrowUpRight } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin") || pathname === "/login") return null;

  return (
    <footer className="bg-gray-950 text-gray-300 mt-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/50 to-gray-950 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-white text-lg">Dental Clinic</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Providing professional dental care with modern treatments and expert surgeons Dr. Ashutosh Sinha & Dr. Abhilasha Sinha dedicated to your oral health.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors group"
            >
              Book an Appointment
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/book", label: "Book Appointment" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-teal-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-5">Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                "General Checkup",
                "Teeth Cleaning",
                "Dental Implants",
                "Teeth Whitening",
                "Emergency Care",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-5">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-teal-500" />
                <span className="text-gray-400">{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-teal-500" />
                <a href="tel:8809917680" className="text-gray-400 hover:text-teal-400 transition-colors">
                  8809917680
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-teal-500" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-gray-400 hover:text-teal-400 transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 shrink-0 text-teal-500" />
                <span className="text-gray-400">{CLINIC_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/login" className="hover:text-teal-400 transition-colors">
              Admin
            </Link>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}