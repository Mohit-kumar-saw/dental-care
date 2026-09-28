"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, Mail, Phone, Calendar } from "lucide-react";
import { format } from "date-fns";

interface Client {
  _id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  totalBookings: number;
  lastBooking: string;
}

export default function ClientsManager() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchClients = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);

      const res = await fetch(`/api/clients?${params}`);
      const data = await res.json();
      if (res.ok) setClients(data.clients);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-2xl font-bold text-slate-900">
            {loading ? "…" : clients.length}
          </p>
          <p className="text-sm text-slate-500 font-medium">Total clients</p>
        </div>
        <div className="rounded-2xl border border-teal-200/80 bg-teal-50/40 p-4 shadow-sm sm:col-span-2">
          <p className="text-sm text-teal-900 font-medium">
            Search by name, email, or phone to find a patient record quickly.
          </p>
        </div>
      </div>

    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-slate-100">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Directory</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchClients();
          }}
          className="relative max-w-md"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-500"
          />
        </form>
      </div>

      {loading ? (
        <div className="p-12 text-center text-gray-500">Loading clients...</div>
      ) : clients.length === 0 ? (
        <div className="p-12 text-center text-gray-500">No clients found</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6">
          {clients.map((client) => (
            <div
              key={client._id}
              className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-white to-slate-50/80 hover:border-teal-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md shadow-teal-600/20">
                  {client.clientName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{client.clientName}</p>
                  <p className="text-xs text-gray-500">
                    {client.totalBookings} booking
                    {client.totalBookings !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  {client.clientEmail}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  {client.clientPhone}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  Last visit:{" "}
                  {format(new Date(client.lastBooking), "MMM dd, yyyy")}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}
