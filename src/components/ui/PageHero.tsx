"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FloatingOrb } from "@/components/ui/motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, image, badge }: PageHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate w-full min-h-[320px] sm:min-h-[420px] flex items-end overflow-hidden pt-16"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-900/80 to-teal-900/40" />
      <FloatingOrb className="w-48 sm:w-72 h-48 sm:h-72 bg-teal-400/15 top-8 right-0 sm:top-10 sm:right-10" delay={0} />
      <FloatingOrb className="w-40 sm:w-48 h-40 sm:h-48 bg-cyan-400/10 bottom-16 left-0 sm:bottom-20 sm:left-10" delay={1.5} />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24 w-full"
      >
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block glass px-4 py-1.5 rounded-full text-sm text-teal-100 mb-4"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 text-balance"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-teal-100/90 text-lg sm:text-xl max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}
