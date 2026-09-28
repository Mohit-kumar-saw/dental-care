import { SERVICE_ICONS } from "@/lib/service-icons";
import type { ServiceType } from "@/types/booking";

const SIZE_MAP = {
  sm: { box: "w-9 h-9", icon: "w-4 h-4", rounded: "rounded-lg" },
  md: { box: "w-12 h-12", icon: "w-6 h-6", rounded: "rounded-xl" },
  lg: { box: "w-14 h-14", icon: "w-7 h-7", rounded: "rounded-2xl" },
  xl: { box: "w-16 h-16", icon: "w-8 h-8", rounded: "rounded-2xl" },
};

interface ServiceIconProps {
  serviceId: ServiceType;
  size?: keyof typeof SIZE_MAP;
  className?: string;
  variant?: "filled" | "glass";
}

export default function ServiceIcon({
  serviceId,
  size = "md",
  className = "",
  variant = "filled",
}: ServiceIconProps) {
  const config = SERVICE_ICONS[serviceId];
  const { icon: Icon, gradient } = config;
  const s = SIZE_MAP[size];

  if (variant === "glass") {
    return (
      <div
        className={`${s.box} ${s.rounded} glass flex items-center justify-center shrink-0 ${className}`}
        aria-hidden
      >
        <Icon className={`${s.icon} text-white`} strokeWidth={2} />
      </div>
    );
  }

  return (
    <div
      className={`${s.box} ${s.rounded} bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shrink-0 ${className}`}
      aria-hidden
    >
      <Icon className={`${s.icon} text-white`} strokeWidth={2} />
    </div>
  );
}
