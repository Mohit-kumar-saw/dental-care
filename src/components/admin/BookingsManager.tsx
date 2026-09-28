"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Filter,
  CalendarDays,
  AlertCircle,
  CheckCircle2,
  CircleCheck,
  Ban,
} from "lucide-react";
import { format } from "date-fns";
import BookingModal, { BookingData } from "./BookingModal";
import { SERVICE_LABELS, STATUS_LABELS, STATUS_COLORS } from "@/lib/constants";
import type { BookingStatus, ServiceType } from "@/types/booking";

interface Stats {
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
  total: number;
}

interface Filters {
  search: string;
  status: string;
  service: string;
  dateFrom: string;
  dateTo: string;
}

export default function BookingsManager({ showStats = true }: { showStats?: boolean }) {
  const searchParams = useSearchParams();
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [stats, setStats] = useState<Stats>({
    pending: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    status: "",
    service: "",
    dateFrom: "",
    dateTo: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [modal, setModal] = useState<{
    booking: BookingData | null;
    mode: "view" | "edit" | "create";
  } | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        ...(filters.search && { search: filters.search }),
        ...(filters.status && { status: filters.status }),
        ...(filters.service && { service: filters.service }),
        ...(filters.dateFrom && { dateFrom: filters.dateFrom }),
        ...(filters.dateTo && { dateTo: filters.dateTo }),
      });

      const res = await fetch(`/api/bookings?${params}`);
      const data = await res.json();

      if (res.ok) {
        setBookings(data.bookings);
        setTotalPages(data.pagination.totalPages);
        setStats(data.stats);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, filters]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  useEffect(() => {
    const status = searchParams.get("status");
    if (status) {
      setFilters((f) => ({ ...f, status }));
      setPage(1);
    }
    if (searchParams.get("create") === "1") {
      setModal({ booking: null, mode: "create" });
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchBookings();
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      if (res.ok) {
        setDeleteConfirm(null);
        fetchBookings();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const statCards = [
    {
      label: "Total",
      value: stats.total,
      icon: CalendarDays,
      className: "border-slate-200 bg-white",
      iconBg: "from-slate-600 to-slate-700",
    },
    {
      label: "Pending",
      value: stats.pending,
      icon: AlertCircle,
      className: "border-amber-200/80 bg-amber-50/50",
      iconBg: "from-amber-500 to-orange-500",
    },
    {
      label: "Confirmed",
      value: stats.confirmed,
      icon: CheckCircle2,
      className: "border-blue-200/80 bg-blue-50/50",
      iconBg: "from-blue-500 to-indigo-600",
    },
    {
      label: "Completed",
      value: stats.completed,
      icon: CircleCheck,
      className: "border-emerald-200/80 bg-emerald-50/50",
      iconBg: "from-emerald-500 to-teal-600",
    },
    {
      label: "Cancelled",
      value: stats.cancelled,
      icon: Ban,
      className: "border-red-200/80 bg-red-50/40",
      iconBg: "from-red-500 to-rose-600",
    },
  ];

  return (
    <div>
      {showStats && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {statCards.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`rounded-2xl border p-4 shadow-sm ${s.className}`}
              >
                <div
                  className={`w-9 h-9 rounded-lg bg-gradient-to-br ${s.iconBg} flex items-center justify-center mb-2`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                <p className="text-xs sm:text-sm font-medium text-slate-600">{s.label}</p>
              </div>
            );
          })}
        </div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-gray-900">All Bookings</h2>
            <button
              onClick={() => setModal({ booking: null, mode: "create" })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-teal-600/20 hover:shadow-teal-600/30"
            >
              <Plus className="w-4 h-4" />
              Add Booking
            </button>
          </div>

          <form onSubmit={handleSearch} className="mt-4 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700"
            >
              Search
            </button>
          </form>

          {showFilters && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 bg-gray-50 rounded-xl">
              <select
                value={filters.status}
                onChange={(e) => {
                  setFilters({ ...filters, status: e.target.value });
                  setPage(1);
                }}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white outline-none"
              >
                <option value="">All Statuses</option>
                {Object.entries(STATUS_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v}
                  </option>
                ))}
              </select>
              <select
                value={filters.service}
                onChange={(e) => {
                  setFilters({ ...filters, service: e.target.value });
                  setPage(1);
                }}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white outline-none"
              >
                <option value="">All Services</option>
                {Object.entries(SERVICE_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v}
                  </option>
                ))}
              </select>
              <input
                type="date"
                value={filters.dateFrom}
                onChange={(e) => {
                  setFilters({ ...filters, dateFrom: e.target.value });
                  setPage(1);
                }}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none"
                placeholder="From date"
              />
              <input
                type="date"
                value={filters.dateTo}
                onChange={(e) => {
                  setFilters({ ...filters, dateTo: e.target.value });
                  setPage(1);
                }}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none"
                placeholder="To date"
              />
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-teal-50/60 text-left border-b border-teal-100/80">
                <th className="px-4 py-3 font-medium text-gray-600">Client</th>
                <th className="px-4 py-3 font-medium text-gray-600">Service</th>
                <th className="px-4 py-3 font-medium text-gray-600">Date & Time</th>
                <th className="px-4 py-3 font-medium text-gray-600">Status</th>
                <th className="px-4 py-3 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-gray-500">
                    Loading bookings...
                  </td>
                </tr>
              ) : bookings.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-gray-500">
                    No bookings found
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-900">{booking.clientName}</p>
                      <p className="text-xs text-gray-500">{booking.clientEmail}</p>
                      <p className="text-xs text-gray-400">{booking.clientPhone}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      {SERVICE_LABELS[booking.service as ServiceType]}
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      <p>{format(new Date(booking.appointmentDate), "MMM dd, yyyy")}</p>
                      <p className="text-xs text-gray-500">{booking.appointmentTime}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          STATUS_COLORS[booking.status as BookingStatus]
                        }`}
                      >
                        {STATUS_LABELS[booking.status as BookingStatus]}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setModal({ booking, mode: "view" })}
                          className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-teal-600"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setModal({ booking, mode: "edit" })}
                          className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(booking._id)}
                          className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-red-600"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Page {page} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-2 rounded-lg border border-gray-300 disabled:opacity-40 hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-2 rounded-lg border border-gray-300 disabled:opacity-40 hover:bg-gray-50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {modal && (
        <BookingModal
          booking={modal.booking}
          mode={modal.mode}
          onClose={() => setModal(null)}
          onSave={fetchBookings}
        />
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Delete Booking?</h3>
            <p className="text-gray-600 text-sm mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
