import {
  Shield,
  Clock,
  Award,
  Users,
  Sparkles,
  HeartPulse,
  Microscope,
  CalendarCheck,
  Scan,
  Zap,
  Moon,
  Crown,
  CreditCard,
  CalendarDays,
  Siren,
} from "lucide-react";

export const FEATURES = [
  {
    icon: Shield,
    label: "Safe & Sterile",
    desc: "Hospital-grade sterilization protocols",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: Clock,
    label: "Flexible Hours",
    desc: "Evening & weekend appointments",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Award,
    label: "Expert Team",
    desc: "15+ years of combined experience",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Users,
    label: "5000+ Patients",
    desc: "Trusted by families citywide",
    color: "from-teal-600 to-cyan-700",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Book Online",
    desc: "Choose your service and pick a convenient time slot in seconds.",
    icon: CalendarCheck,
  },
  {
    step: "02",
    title: "Consultation",
    desc: "Meet our expert dentists for a thorough examination and personalized plan.",
    icon: HeartPulse,
  },
  {
    step: "03",
    title: "Treatment",
    desc: "Relax in our modern clinic while we deliver painless, precision care.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Follow-up",
    desc: "We stay with you through recovery and long-term oral health maintenance.",
    icon: Microscope,
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    text: "The most comfortable dental experience I've ever had. The team is incredibly gentle and the clinic feels like a spa!",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    text: "Got my dental implants here — flawless work. Dr. Mitchell explained everything clearly. Highly recommend SmileCare.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    text: "My kids actually look forward to their dental visits now! The staff is warm, patient, and truly cares.",
    rating: 5,
    avatar: "ER",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Do you accept insurance?",
    a: "Yes! We accept most major dental insurance plans. Our team will help verify your coverage before your visit.",
    icon: CreditCard,
  },
  {
    q: "Is teeth whitening safe?",
    a: "Absolutely. Our professional whitening treatments are clinically proven and performed under expert supervision for safe, lasting results.",
    icon: Sparkles,
  },
  {
    q: "What should I expect on my first visit?",
    a: "Your first visit includes a comprehensive exam, digital X-rays if needed, and a personalized treatment plan — all in a relaxed, welcoming environment.",
    icon: CalendarDays,
  },
  {
    q: "Do you offer emergency dental care?",
    a: "Yes, we provide same-day emergency appointments for toothaches, broken teeth, and other urgent dental issues.",
    icon: Siren,
  },
];

export const TECH_FEATURES = [
  { title: "3D Digital Imaging", desc: "Precision diagnostics with zero guesswork", icon: Scan },
  { title: "Laser Dentistry", desc: "Minimally invasive, faster healing", icon: Zap },
  { title: "Sedation Options", desc: "Anxiety-free visits for every patient", icon: Moon },
  { title: "Same-Day Crowns", desc: "Restore your smile in a single visit", icon: Crown },
];

export const TEAM_PREVIEW = [
  { name: "Dr. Sarah Mitchell", role: "Chief Dentist", specialty: "Cosmetic Dentistry" },
  { name: "Dr. James Chen", role: "Orthodontist", specialty: "Braces & Invisalign" },
  { name: "Dr. Emily Rodriguez", role: "Endodontist", specialty: "Root Canal Expert" },
];
