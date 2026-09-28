"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Target,
  Eye,
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import {
  FadeIn,
  Counter,
  ParallaxSection,
  staggerContainer,
  fadeUp,
} from "@/components/ui/motion";
import { IMAGES } from "@/lib/images";
import { TEAM_PREVIEW } from "@/lib/home-data";
import { motion } from "framer-motion";

const VALUES = [
  {
    icon: Heart,
    title: "Compassionate Care",
    desc: "We treat every patient with empathy, respect, and genuine concern for their comfort.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Target,
    title: "Excellence",
    desc: "We continuously invest in training and technology to deliver the best outcomes.",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear communication about treatments, costs, and options — no surprises.",
    color: "from-cyan-500 to-teal-600",
  },
];

const MILESTONES = [
  { year: "2010", event: "SmileCare founded with a vision for patient-first dentistry" },
  { year: "2014", event: "Expanded to a full-service clinic with 5 specialists" },
  { year: "2018", event: "Introduced laser dentistry and 3D digital imaging" },
  { year: "2022", event: "Reached 5000+ happy patients milestone" },
  { year: "2025", event: "Named Top Dental Clinic in Health City" },
];

export default function AboutPageContent() {
  return (
    <div className="w-full overflow-x-clip">
      <PageHero
        badge="Our Story"
        title="About SmileCare"
        subtitle="Dedicated to creating beautiful, healthy smiles for over a decade with passion, precision, and care."
        image={IMAGES.about}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left" className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[460px]">
                <Image
                  src={IMAGES.clinic}
                  alt="SmileCare clinic interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Our Story of{" "}
                <span className="text-gradient">Smiles & Care</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SmileCare Dental Clinic was founded with a simple mission: to provide
                exceptional dental care in a warm, welcoming environment. What started
                as a small practice has grown into a full-service dental center trusted
                by thousands of families.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team uses the latest technology and techniques to ensure every patient
                receives personalized, pain-free treatment. We believe a healthy smile is
                the foundation of confidence and wellbeing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 15, suffix: "+", label: "Years" },
                  { value: 5000, suffix: "+", label: "Patients" },
                  { value: 12, suffix: "", label: "Dentists" },
                  { value: 98, suffix: "%", label: "Satisfaction" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-center"
                  >
                    <p className="text-2xl font-bold text-gradient">
                      <Counter target={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-xs text-gray-500 font-medium mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              What Drives Us Every Day
            </h2>
          </FadeIn>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {VALUES.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                className="group bg-white rounded-3xl p-8 border border-gray-100 card-glow text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ParallaxSection image={IMAGES.parallax} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-teal-400 font-semibold text-sm tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Milestones That Matter
            </h2>
          </FadeIn>

          <div className="max-w-2xl mx-auto space-y-6">
            {MILESTONES.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.1}>
                <div className="flex gap-6 items-start glass rounded-2xl p-6">
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center font-bold text-white">
                    {m.year}
                  </div>
                  <p className="text-teal-100 pt-3 leading-relaxed">{m.event}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Meet the Experts Behind Your Smile
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_PREVIEW.map((doctor, i) => (
              <FadeIn key={doctor.name} delay={i * 0.12}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 card-glow">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={IMAGES.team[i]}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bold text-white text-lg">{doctor.name}</h3>
                      <p className="text-teal-200 text-sm">{doctor.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 text-sm mb-4">{doctor.specialty}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-teal-500" />
                        Board Certified
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-teal-500" />
                        1000+ Patients
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-teal-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Patients Choose Us
              </h2>
              <ul className="space-y-4">
                {[
                  "State-of-the-art equipment and sterilization",
                  "Gentle, anxiety-free treatment approach",
                  "Transparent pricing with no hidden fees",
                  "Flexible scheduling including evenings",
                  "Comprehensive care under one roof",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[360px]">
                <Image
                  src={IMAGES.heroAlt}
                  alt="Dental care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Award-Winning Care</p>
                      <p className="text-teal-200 text-sm">Top rated clinic 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Join the SmileCare Family?
            </h2>
            <p className="text-teal-100 mb-8 text-lg">
              Book your first appointment and experience dentistry done right.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl"
            >
              Book Appointment <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
