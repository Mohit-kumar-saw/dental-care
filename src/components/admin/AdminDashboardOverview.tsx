"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  Calendar,
  Users,
  Clock,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";
import { SERVICE_LABELS, STATUS_LABELS, STATUS_COLORS } from "@/lib/constants";
import type { BookingStatus, ServiceType } from "@/types/booking";
import type { BookingData } from "./BookingModal";

interface Stats {
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
  total: number;
}

export default function AdminDashboardOverview() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [todayBookings, setTodayBookings] = useState<BookingData[]>([]);
  const [recent, setRecent] = useState<BookingData[]>([]);
  const [clientCount, setClientCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = format(new Date(), "yyyy-MM-dd");

    async function load() {
      try {
        const [allRes, todayRes, recentRes, clientsRes] = await Promise.all([
          fetch("/api/bookings?page=1&limit=1"),
          fetch(`/api/bookings?page=1&limit=8&dateFrom=${today}&dateTo=${today}`),
          fetch("/api/bookings?page=1&limit=6"),
          fetch("/api/clients"),
        ]);

        const allData = await allRes.json();
        const todayData = await todayRes.json();
        const recentData = await recentRes.json();
        const clientsData = await clientsRes.json();

        if (allRes.ok) setStats(allData.stats);
        if (todayRes.ok) {
          const list = (todayData.bookings || []) as BookingData[];
          setTodayBookings(
            [...list]
              .sort((a, b) => a.appointmentTime.localeCompare(b.appointmentTime))
              .slice(0, 6)
          );
        }
        if (recentRes.ok) setRecent(recentData.bookings || []);
        if (clientsRes.ok) setClientCount(clientsData.clients?.length ?? 0);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const statCards = [
    {
      label: "Total bookings",
      value: stats?.total ?? "—",
      icon: CalendarDays,
      href: "/admin/bookings",
      accent: "from-teal-500 to-cyan-600",
    },
    {
      label: "Pending review",
      value: stats?.pending ?? "—",
      icon: AlertCircle,
      href: "/admin/bookings?status=pending",
      accent: "from-amber-500 to-orange-500",
    },
    {
      label: "Confirmed",
      value: stats?.confirmed ?? "—",
      icon: CheckCircle2,
      href: "/admin/bookings?status=confirmed",
      accent: "from-blue-500 to-indigo-600",
    },
    {
      label: "Clients",
      value: clientCount,
      icon: Users,
      href: "/admin/clients",
      accent: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-800 text-white p-6 sm:p-8 shadow-xl shadow-teal-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative">
          <p className="text-teal-100 text-sm font-medium mb-1">Clinic overview</p>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Manage appointments & patients in one place
          </h2>
          <p className="text-teal-100/90 text-sm max-w-xl mb-5">
            Review new requests, confirm today&apos;s schedule, and keep client records up to date.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/bookings?status=pending"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 px-4 py-2 rounded-xl text-sm font-semibold backdrop-blur-sm transition-colors"
            >
              Review pending
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/admin/clients"
              className="inline-flex items-center gap-2 bg-white text-teal-800 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-teal-50 transition-colors"
            >
              View clients
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {statCards.map(({ label, value, icon: Icon, href, accent }) => (
          <Link
            key={label}
            href={href}
            className="group rounded-2xl bg-white border border-slate-200/80 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
          >
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-3 shadow-lg shadow-teal-900/10 group-hover:scale-105 transition-transform`}
            >
              <Icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">
              {loading ? "…" : value}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">{label}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <section className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-600" />
              <h3 className="font-bold text-slate-900">Today&apos;s schedule</h3>
            </div>
            <Link
              href="/admin/bookings"
              className="text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              All bookings
            </Link>
          </div>
          <div className="p-4 sm:p-5">
            {loading ? (
              <p className="text-sm text-slate-500 py-6 text-center">Loading…</p>
            ) : todayBookings.length === 0 ? (
              <p className="text-sm text-slate-500 py-6 text-center">
                No appointments scheduled for today.
              </p>
            ) : (
              <ul className="space-y-3">
                {todayBookings.map((b) => (
                  <li
                    key={b._id}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="shrink-0 w-14 text-center">
                      <p className="text-xs font-bold text-teal-700">{b.appointmentTime}</p>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-900 truncate">{b.clientName}</p>
                      <p className="text-xs text-slate-500 truncate">
                        {SERVICE_LABELS[b.service as ServiceType]}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        STATUS_COLORS[b.status as BookingStatus]
                      }`}
                    >
                      {STATUS_LABELS[b.status as BookingStatus]}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-600" />
              <h3 className="font-bold text-slate-900">Recent bookings</h3>
            </div>
            <Link
              href="/admin/bookings?create=1"
              className="text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              + New
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {loading ? (
              <p className="text-sm text-slate-500 py-8 text-center">Loading…</p>
            ) : recent.length === 0 ? (
              <p className="text-sm text-slate-500 py-8 text-center">No bookings yet.</p>
            ) : (
              recent.map((b) => (
                <div
                  key={b._id}
                  className="px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-slate-50/80"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-slate-900 truncate">{b.clientName}</p>
                    <p className="text-xs text-slate-500">
                      {format(new Date(b.appointmentDate), "MMM d")} · {b.appointmentTime}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      STATUS_COLORS[b.status as BookingStatus]
                    }`}
                  >
                    {STATUS_LABELS[b.status as BookingStatus]}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
