"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { FadeIn, FloatingOrb } from "@/components/ui/motion";
import { CLINIC_INFO } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { motion } from "framer-motion";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: CLINIC_INFO.address,
    href: undefined,
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: CLINIC_INFO.phone,
    href: `tel:${CLINIC_INFO.phone}`,
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: CLINIC_INFO.email,
    href: `mailto:${CLINIC_INFO.email}`,
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: CLINIC_INFO.hours,
    href: undefined,
    color: "from-teal-600 to-cyan-700",
  },
];

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full overflow-x-clip">
      <PageHero
        badge="Get In Touch"
        title="Contact Us"
        subtitle="Have a question or need to schedule a visit? We're here to help — reach out anytime."
        image={IMAGES.clinic}
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, color }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div className="group p-6 rounded-3xl bg-gray-50 border border-gray-100 card-glow h-full">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-gray-600 text-sm hover:text-teal-600 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{value}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 h-64">
                <Image
                  src={IMAGES.about}
                  alt="Contact SmileCare"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">{CLINIC_INFO.name}</p>
                  <p className="text-teal-200 text-sm">{CLINIC_INFO.tagline}</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you need to book an appointment, ask about a treatment, or
                have an emergency — our friendly team is ready to assist you.
              </p>

              <div className="space-y-3">
                {[
                  "Response within 24 hours",
                  "Emergency same-day appointments",
                  "Free initial consultation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/book"
                className="inline-flex items-center gap-2 mt-8 text-teal-600 font-semibold hover:gap-3 transition-all"
              >
                Book Online Instead <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn direction="right" delay={0.15} className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl shadow-teal-900/5 relative overflow-hidden">
                <FloatingOrb className="w-40 sm:w-48 h-40 sm:h-48 bg-teal-400/10 -top-16 right-0 sm:-top-20 sm:-right-20" delay={0} />

                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Send a Message</h2>
                    <p className="text-gray-500 text-sm">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 relative z-10"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-500">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-gray-50/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-gray-50/50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-gray-50/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us more about your inquiry..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none bg-gray-50/50 transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-teal-500/25"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white relative overflow-hidden">
        <FloatingOrb className="w-80 h-80 bg-white/10 top-0 right-0" delay={0} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Need Urgent Dental Care?</h2>
            <p className="text-teal-100 mb-8 text-lg">
              We offer same-day emergency appointments. Call us now.
            </p>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="inline-flex items-center gap-3 bg-white text-teal-700 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              <Phone className="w-6 h-6" />
              {CLINIC_INFO.phone}
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
