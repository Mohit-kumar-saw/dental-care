import ClientsManager from "@/components/admin/ClientsManager";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

export default function AdminClientsPage() {
  return (
    <div>
      <AdminPageHeader
        title="Clients"
        description="Patients who have booked with your clinic, with contact details and visit history."
      />
      <ClientsManager />
    </div>
  );
}
