"use client";

import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Menu, Bell, CalendarPlus } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

interface AdminShellProps {
  children: React.ReactNode;
  session: { name: string; email: string } | null;
}

export default function AdminShell({ children, session }: AdminShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const today = format(new Date(), "EEEE, MMMM d, yyyy");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 via-teal-50/40 to-slate-100">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <AdminSidebar
        mobileOpen={sidebarOpen}
        onNavigate={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 lg:pl-0">
        <header className="sticky top-0 z-30 border-b border-teal-100/80 bg-white/80 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl text-teal-800 hover:bg-teal-50 border border-teal-100"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="min-w-0">
                <p className="text-xs font-medium text-teal-600 uppercase tracking-wide hidden sm:block">
                  {today}
                </p>
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 truncate">
                  {session ? `Hi, ${session.name}` : "Admin Panel"}
                </h1>
                {session && (
                  <p className="text-xs sm:text-sm text-slate-500 truncate">
                    {session.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/admin/bookings?status=pending"
                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 border border-slate-200"
              >
                <Bell className="w-4 h-4 text-amber-500" />
                Pending
              </Link>
              <Link
                href="/admin/bookings?create=1"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold shadow-md shadow-teal-600/20 hover:shadow-teal-600/35 transition-shadow"
              >
                <CalendarPlus className="w-4 h-4" />
                <span className="hidden xs:inline">New booking</span>
                <span className="xs:hidden">New</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
