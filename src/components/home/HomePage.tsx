"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Star,
  ChevronDown,
  Quote,
  CheckCircle2,
  Phone,
  Sparkles,
  ShieldCheck,
  Users,
  Calendar,
  UserCheck,
  ThumbsUp,
  Building2,
  Layers,
  Route,
  Images,
  Cpu,
  UserCircle2,
  MessageSquareQuote,
  HelpCircle,
  BadgeCheck,
} from "lucide-react";
import ServiceIcon from "@/components/ui/ServiceIcon";
import SectionBadge from "@/components/ui/SectionBadge";
import { CLINIC_INFO, SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import {
  FEATURES,
  PROCESS_STEPS,
  TESTIMONIALS,
  FAQ_ITEMS,
  TECH_FEATURES,
  TEAM_PREVIEW,
} from "@/lib/home-data";
import {
  FadeIn,
  ParallaxSection,
  Counter,
  FloatingOrb,
  staggerContainer,
  fadeUp,
} from "@/components/ui/motion";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-clip">
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <AboutPreview />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <ParallaxQuote />
      <TechnologySection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative isolate w-full min-h-[100dvh] flex items-center overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="Modern dental clinic"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/85 via-teal-900/70 to-cyan-950/80" />

      <FloatingOrb className="w-40 sm:w-96 h-40 sm:h-96 bg-teal-400/20 top-16 left-0 sm:top-20 sm:-left-20" delay={0} />
      <FloatingOrb className="w-32 sm:w-80 h-32 sm:h-80 bg-cyan-400/15 bottom-16 right-0 sm:bottom-20 sm:right-10" delay={2} />
      <FloatingOrb className="hidden sm:block w-64 h-64 bg-emerald-400/10 top-1/2 left-1/2" delay={1} />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 sm:pt-28 sm:pb-28 lg:py-32 w-full min-w-0"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-w-0">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex max-w-full flex-wrap items-center gap-2 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-teal-100 mb-4 sm:mb-6"
            >
              <BadgeCheck className="w-4 h-4 text-teal-300 shrink-0" />
              Expert Dental Surgeons: Dr. Ashutosh Sinha & Dr. Abhilasha Sinha
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 text-balance"
            >
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300">
                Dental Clinic
              </span>{" "}
              Care
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-teal-100/90 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-xl"
            >
              Get professional dental care with modern treatments, experienced specialists, and dedicated oral health services. Call us at 8809917680.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 w-full xs:w-auto"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 glass text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold hover:bg-white/15 transition-all duration-300 w-full xs:w-auto"
              >
                <Layers className="w-4 h-4 shrink-0" />
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col xs:flex-row xs:items-center gap-4 xs:gap-6 mt-8 sm:mt-10"
            >
              <div className="flex -space-x-3">
                {[IMAGES.team[0], IMAGES.team[1], IMAGES.team[2]].map((img, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-teal-800 overflow-hidden relative"
                  >
                    <Image src={img} alt="Patient" fill className="object-cover" sizes="40px" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-teal-200 text-sm mt-0.5">5000+ happy patients</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-3xl blur-2xl pulse-ring" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-[500px]">
                <Image
                  src={IMAGES.heroAlt}
                  alt="Dental treatment"
                  fill
                  className="object-cover"
                  sizes="500px"
                />
                <div className="absolute bottom-0 inset-x-0 glass p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Pain-Free Guarantee</p>
                      <p className="text-teal-200 text-sm">Advanced sedation options available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-white rounded-2xl p-4 shadow-xl"
            >
              <p className="text-3xl font-bold text-teal-600">98%</p>
              <p className="text-xs text-gray-600 font-medium">Satisfaction Rate</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-6 glass-white rounded-2xl p-4 shadow-xl"
            >
              <p className="text-3xl font-bold text-teal-600">15+</p>
              <p className="text-xs text-gray-600 font-medium">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: 5000, suffix: "+", label: "Happy Patients", icon: Users },
    { value: 15, suffix: "+", label: "Years Experience", icon: Calendar },
    { value: 12, suffix: "", label: "Expert Dentists", icon: UserCheck },
    { value: 98, suffix: "%", label: "Satisfaction Rate", icon: ThumbsUp },
  ];

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-0 sm:-mt-16">
      <FadeIn>
        <div className="max-w-5xl mx-auto glass-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-teal-900/10 p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map(({ icon: Icon, ...s }) => (
              <div key={s.label} className="text-center px-1">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Icon className="w-5 h-5 text-teal-600" strokeWidth={2} />
                </div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">
                  <Counter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-gray-500 text-[11px] sm:text-sm mt-1 font-medium leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <SectionBadge icon={ShieldCheck}>Why Choose Us</SectionBadge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 px-2">
            Excellence in Every Detail
          </h2>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map(({ icon: Icon, label, desc, color }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              custom={i}
              className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gray-50 border border-gray-100 card-glow overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-teal-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn direction="left" className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-[480px]">
                <Image
                  src={IMAGES.about}
                  alt="Expert dentist at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl"
              >
                <Image src={IMAGES.clinic} alt="Clinic interior" fill className="object-cover" sizes="128px" />
              </motion.div>
            </div>
          </FadeIn>
<FadeIn direction="right" delay={0.2}>
            <SectionBadge icon={Building2}>About Our Clinic</SectionBadge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4 sm:mb-6 leading-tight">
              Where Advanced Science Meets{" "}
              <span className="text-gradient">Compassionate Care</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Led by Dr. Ashutosh Sinha and Dr. Abhilasha Sinha, our dental clinic has been dedicated to providing exceptional oral health care. Our professional facility combines expert treatment with a warm, patient-first approach.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Expert dental surgeons: Dr. Ashutosh Sinha & Dr. Abhilasha Sinha",
                "Professional dental care and modern treatments",
                "Same-day emergency support available",
                "Call us directly at 8809917680",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-950 text-white relative overflow-hidden">
      <FloatingOrb className="w-48 sm:w-[500px] h-48 sm:h-[500px] bg-teal-500/10 -top-32 right-0 sm:-top-40 sm:-right-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <SectionBadge icon={Layers} variant="dark">Our Services</SectionBadge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 px-2">
            Complete Dental Solutions
          </h2>
          <p className="text-gray-400 mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base px-4">
            From preventive care to advanced cosmetic procedures — everything under one roof.
          </p>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              custom={i}
              className="group relative w-full min-w-0 rounded-2xl sm:rounded-3xl overflow-hidden card-glow min-h-[280px] sm:min-h-[300px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-gray-900/95 z-10" />
              <Image
                src={IMAGES.gallery[i % IMAGES.gallery.length]}
                alt={service.title}
                fill
                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="relative z-20 p-5 sm:p-6 lg:p-8 h-full flex flex-col">
                <ServiceIcon serviceId={service.id} size="lg" className="mb-4" />
                <h3 className="font-bold text-lg sm:text-xl mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm flex-1 mb-4 line-clamp-3">{service.description}</p>
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 pt-4 border-t border-white/10">
                  <span className="text-teal-400 font-bold text-lg">{service.price}</span>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="inline-flex items-center justify-center gap-1.5 text-sm text-white bg-teal-600/80 hover:bg-teal-500 px-4 py-2.5 rounded-xl transition-colors"
                  >
                    Book Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-teal-500/50 text-teal-400 px-8 py-3 rounded-2xl font-semibold hover:bg-teal-500/10 transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <SectionBadge icon={Route}>How It Works</SectionBadge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 px-2">
            Your Journey to a Perfect Smile
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200" />

          {PROCESS_STEPS.map(({ step, title, desc, icon: Icon }, i) => (
            <FadeIn key={step} delay={i * 0.1} className="relative">
              <div className="flex sm:flex-col items-start sm:items-center gap-4 sm:text-center">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-white" strokeWidth={2} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white border-2 border-teal-500 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-teal-600">
                    {step}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-teal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <SectionBadge icon={Images}>Our Clinic</SectionBadge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 px-2">
            A Space Designed for Comfort
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {IMAGES.gallery.map((img, i) => (
            <FadeIn
              key={img}
              delay={i * 0.08}
              className={`relative rounded-xl sm:rounded-2xl overflow-hidden group ${
                i === 0 ? "xs:col-span-2 md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "h-56 xs:h-72 md:h-full md:min-h-[320px]" : "h-44 xs:h-48 md:h-56"}`}>
                <Image
                  src={img}
                  alt={`Clinic gallery ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes={i === 0 ? "66vw" : "33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">SmileCare Clinic</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParallaxQuote() {
  return (
    <ParallaxSection image={IMAGES.parallax} className="py-20 sm:py-28 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-teal-400 mx-auto mb-4 sm:mb-6 opacity-60" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed italic px-2">
            &ldquo;A smile is the universal welcome. We make sure yours is unforgettable.&rdquo;
          </blockquote>
          <p className="text-teal-300 mt-6 font-medium">— Dr. Ashutosh Sinha & Dr. Abhilasha Sinha, Dental Surgeons</p>
        </FadeIn>
      </div>
    </ParallaxSection>
  );
}

function TechnologySection() {
  return (
  <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn direction="left">
            <SectionBadge icon={Cpu}>Clinic Expertise</SectionBadge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4 sm:mb-6">
              Advanced Dental{" "}
              <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Led by Dr. Ashutosh Sinha and Dr. Abhilasha Sinha, our clinic offers reliable dental care, modern treatments, and personalized oral health solutions.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              {TECH_FEATURES.map(({ title, desc, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-teal-50 border border-teal-100"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} className="relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-56 sm:h-72 lg:h-[420px]">
              <Image
                src={IMAGES.clinic}
                alt="Modern dental clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center animate-float">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Dr. Ashutosh Sinha & Dr. Abhilasha Sinha</p>
                    <p className="text-teal-200 text-sm">Professional Dental Care & Surgeons</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <SectionBadge icon={UserCircle2}>Our Team</SectionBadge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 px-2">
            Meet the Experts Behind Your Smile
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {TEAM_PREVIEW.map((doctor, i) => (
            <FadeIn key={doctor.name} delay={i * 0.15}>
              <div className="group text-center max-w-xs mx-auto">
                <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mb-4 sm:mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={IMAGES.team[i]}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{doctor.name}</h3>
                <p className="text-teal-600 text-sm font-medium">{doctor.role}</p>
                <p className="text-gray-500 text-sm mt-1">{doctor.specialty}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
          >
            Meet the Full Team <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-teal-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <SectionBadge icon={MessageSquareQuote} variant="dark">Testimonials</SectionBadge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 px-2">
            What Our Patients Say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full flex flex-col card-glow">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-teal-100 leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-teal-300 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <SectionBadge icon={HelpCircle}>FAQ</SectionBadge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 px-2">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item, i) => {
            const FaqIcon = item.icon;
            return (
            <FadeIn key={item.q} delay={i * 0.08}>
              <div className="rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left hover:bg-teal-50/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <FaqIcon className="w-4 h-4 text-teal-600" strokeWidth={2} />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base flex-1 min-w-0">{item.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-teal-600"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: open === i ? "auto" : 0,
                    opacity: open === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 pl-[3.25rem] sm:pl-[4.25rem] text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              </div>
            </FadeIn>
          );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800" />
      <FloatingOrb className="w-48 sm:w-96 h-48 sm:h-96 bg-white/10 top-0 right-0" delay={0} />
      <FloatingOrb className="w-40 sm:w-64 h-40 sm:h-64 bg-cyan-300/10 bottom-0 left-0 sm:left-20" delay={1.5} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       <FadeIn>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Ready for Your Best Smile?
          </h2>
          <p className="text-teal-100 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto px-2">
            Join hundreds of patients who trust Dr. Ashutosh Sinha and Dr. Abhilasha Sinha. Book your consultation today and take the first step toward exceptional oral health.
          </p>
          <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-2">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold shadow-xl hover:scale-[1.02] sm:hover:scale-105 transition-transform w-full xs:w-auto"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8809917680"
              className="inline-flex items-center justify-center gap-2 glass text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold hover:bg-white/15 transition-colors w-full xs:w-auto text-sm sm:text-base"
            >
              <Phone className="w-5 h-5 shrink-0" />
              <span className="truncate">8809917680</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
