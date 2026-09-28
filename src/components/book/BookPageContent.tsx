"use client";

import Image from "next/image";
import {
  Calendar,
  Clock,
  ShieldCheck,
  Phone,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import BookingForm from "@/components/BookingForm";
import { FadeIn, FloatingOrb } from "@/components/ui/motion";
import { CLINIC_INFO } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const STEPS = [
  { icon: Calendar, title: "Pick a Date", desc: "Choose your preferred appointment slot" },
  { icon: Clock, title: "Quick Confirm", desc: "We confirm within 2 hours via call or email" },
  { icon: ShieldCheck, title: "Visit Us", desc: "Relax and receive world-class dental care" },
];

export default function BookPageContent({
  defaultService,
}: {
  defaultService?: string;
}) {
  return (
    <div className="w-full overflow-x-clip">
      <PageHero
        badge="Easy Booking"
        title="Book an Appointment"
        subtitle="Fill in the form below and our team will confirm your visit shortly. It only takes a minute."
        image={IMAGES.hero}
      />

      <section className="py-24 bg-gradient-to-b from-teal-50/30 to-white relative overflow-hidden">
        <FloatingOrb className="w-64 sm:w-96 h-64 sm:h-96 bg-teal-400/10 -top-32 left-0 sm:-top-40 sm:-left-40" delay={0} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <FadeIn direction="left" className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  How Booking Works
                </h2>
                <div className="space-y-6">
                  {STEPS.map(({ icon: Icon, title, desc }, i) => (
                    <div key={title} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-teal-500/25">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          <span className="text-teal-600 mr-2">0{i + 1}.</span>
                          {title}
                        </p>
                        <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-xl h-48">
                <Image
                  src={IMAGES.heroAlt}
                  alt="Book your appointment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent" />
              </div>

              <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100">
                <h3 className="font-semibold text-gray-900 mb-4">Why Book With Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Free cancellation up to 24 hours",
                    "Reminder via SMS & email",
                    "No hidden fees or surprises",
                    "Insurance accepted",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Prefer to call?</p>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="font-semibold text-teal-600 hover:text-teal-700"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15} className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl shadow-teal-900/5 relative overflow-hidden">
                <FloatingOrb className="w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400/10 -bottom-16 right-0 sm:-bottom-20 sm:-right-20" delay={1} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Appointment Details
                      </h2>
                      <p className="text-gray-500 text-sm">
                        All fields marked * are required
                      </p>
                    </div>
                  </div>
                  <BookingForm defaultService={defaultService} />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
