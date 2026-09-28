"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  Users,
  LogOut,
  Smile,
  ExternalLink,
  X,
} from "lucide-react";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/bookings", label: "Bookings", icon: Calendar },
  { href: "/admin/clients", label: "Clients", icon: Users },
];

interface AdminSidebarProps {
  mobileOpen?: boolean;
  onNavigate?: () => void;
}

export default function AdminSidebar({ mobileOpen = false, onNavigate }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  const nav = (
    <>
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-950/30 shrink-0">
              <Smile className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-white text-sm truncate">SmileCare Admin</p>
              <p className="text-xs text-teal-200/80 truncate">Management</p>
            </div>
          </div>
          {onNavigate && (
            <button
              type="button"
              onClick={onNavigate}
              className="lg:hidden p-2 rounded-lg text-teal-100 hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                active
                  ? "bg-white/15 text-white shadow-inner border border-white/10"
                  : "text-teal-100/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${active ? "text-cyan-200" : ""}`} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-1">
        <Link
          href="/"
          target="_blank"
          onClick={onNavigate}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-teal-100/90 hover:bg-white/10 hover:text-white transition-colors"
        >
          <ExternalLink className="w-4 h-4 shrink-0" />
          View website
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-200 hover:bg-red-500/15 hover:text-red-100 transition-colors"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Log out
        </button>
      </div>
    </>
  );

  return (
    <>
      <aside className="hidden lg:flex w-64 shrink-0 flex-col min-h-screen bg-gradient-to-b from-teal-950 via-teal-900 to-slate-900 text-teal-100 border-r border-teal-800/50">
        {nav}
      </aside>

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 flex flex-col bg-gradient-to-b from-teal-950 via-teal-900 to-slate-900 text-teal-100 shadow-2xl transform transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {nav}
      </aside>
    </>
  );
}
