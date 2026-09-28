"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Sparkles,
  Star,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import {
  FadeIn,
  ParallaxSection,
  staggerContainer,
  fadeUp,
} from "@/components/ui/motion";
import { SERVICES } from "@/lib/constants";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { IMAGES } from "@/lib/images";
import { motion } from "framer-motion";

const SERVICE_DETAILS: Record<string, string[]> = {
  "general-checkup": ["Oral exam", "X-rays if needed", "Treatment plan", "Cleaning advice"],
  "teeth-cleaning": ["Plaque removal", "Polishing", "Fluoride treatment", "Gum assessment"],
  "root-canal": ["Pain relief", "Infection removal", "Canal sealing", "Crown prep"],
  "dental-implant": ["3D planning", "Implant placement", "Healing period", "Crown fitting"],
  "teeth-whitening": ["Shade assessment", "Professional gel", "LED activation", "Take-home kit"],
  braces: ["Digital scan", "Custom aligners", "Progress tracking", "Retainer included"],
  emergency: ["Same-day slot", "Pain management", "Immediate repair", "Follow-up care"],
};

export default function ServicesPageContent() {
  return (
    <div className="w-full overflow-x-clip">
      <PageHero
        badge="What We Offer"
        title="Our Services"
        subtitle="Complete dental care for the whole family — from preventive checkups to advanced cosmetic and surgical procedures."
        image={IMAGES.gallery[1]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
              Treatments
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Everything Your Smile Needs
            </h2>
          </FadeIn>

          <div className="space-y-12">
            {SERVICES.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.05}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl group h-72 lg:h-80">
                      <Image
                        src={IMAGES.gallery[i % IMAGES.gallery.length]}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4">
                        <ServiceIcon serviceId={service.id} size="md" variant="glass" />
                      </div>
                      <div className="absolute bottom-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                      {(SERVICE_DETAILS[service.id] || []).map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/book?service=${service.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-teal-500/25"
                    >
                      Book {service.title} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {i < SERVICES.length - 1 && (
                  <div className="mt-12 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="text-teal-400 font-semibold text-sm tracking-widest uppercase">
              All Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">Quick Overview</h2>
          </FadeIn>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                custom={i}
                className="glass rounded-2xl p-5 card-glow group w-full min-w-0"
              >
                <ServiceIcon serviceId={service.id} size="lg" className="mb-3" />
                <h3 className="font-semibold text-white mb-1">{service.title}</h3>
                <p className="text-teal-400 font-bold text-lg mb-3">{service.price}</p>
                <Link
                  href={`/book?service=${service.id}`}
                  className="text-sm text-teal-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Book Now <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ParallaxSection image={IMAGES.parallax} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Safe & Certified", desc: "All procedures follow strict safety protocols" },
              { icon: Clock, title: "Flexible Scheduling", desc: "Evening and weekend slots available" },
              { icon: Sparkles, title: "Premium Quality", desc: "Top-grade materials and latest techniques" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 text-center card-glow">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-teal-200 text-sm">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Trusted by 5000+ Patients
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Join thousands who have transformed their smiles with SmileCare.
            </p>
          </FadeIn>
          <FadeIn className="text-center">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl"
            >
              Schedule Your Visit <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
