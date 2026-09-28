import type { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: "light" | "dark";
}

export default function SectionBadge({
  icon: Icon,
  children,
  variant = "light",
}: SectionBadgeProps) {
  const styles =
    variant === "dark"
      ? "text-teal-400"
      : "text-teal-600";

  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold text-xs sm:text-sm tracking-widest uppercase ${styles}`}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" strokeWidth={2} />}
      {children}
    </span>
  );
}
