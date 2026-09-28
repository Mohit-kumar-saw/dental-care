import AdminDashboardOverview from "@/components/admin/AdminDashboardOverview";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

export default function AdminDashboard() {
  return (
    <div>
      <AdminPageHeader
        title="Dashboard"
        description="Snapshot of clinic activity, today's schedule, and recent bookings."
      />
      <AdminDashboardOverview />
    </div>
  );
}
