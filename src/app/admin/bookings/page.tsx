import { Suspense } from "react";
import BookingsManager from "@/components/admin/BookingsManager";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

export default function AdminBookingsPage() {
  return (
    <div>
      <AdminPageHeader
        title="Bookings"
        description="Search, filter, and manage every appointment request."
      />
      <Suspense fallback={<div className="text-slate-500 py-12 text-center">Loading…</div>}>
        <BookingsManager showStats />
      </Suspense>
    </div>
  );
}
