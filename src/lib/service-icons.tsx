import {
  Stethoscope,
  Sparkles,
  Drill,
  Gem,
  SunMedium,
  AlignCenter,
  Siren,
  type LucideIcon,
} from "lucide-react";
import type { ServiceType } from "@/types/booking";

export interface ServiceIconConfig {
  icon: LucideIcon;
  gradient: string;
  label: string;
}

export const SERVICE_ICONS: Record<ServiceType, ServiceIconConfig> = {
  "general-checkup": {
    icon: Stethoscope,
    gradient: "from-teal-500 to-emerald-600",
    label: "General Checkup",
  },
  "teeth-cleaning": {
    icon: Sparkles,
    gradient: "from-cyan-500 to-teal-600",
    label: "Teeth Cleaning",
  },
  "root-canal": {
    icon: Drill,
    gradient: "from-emerald-500 to-teal-700",
    label: "Root Canal",
  },
  "dental-implant": {
    icon: Gem,
    gradient: "from-violet-500 to-purple-600",
    label: "Dental Implant",
  },
  "teeth-whitening": {
    icon: SunMedium,
    gradient: "from-amber-400 to-orange-500",
    label: "Teeth Whitening",
  },
  braces: {
    icon: AlignCenter,
    gradient: "from-blue-500 to-cyan-600",
    label: "Braces",
  },
  emergency: {
    icon: Siren,
    gradient: "from-red-500 to-rose-600",
    label: "Emergency",
  },
};
