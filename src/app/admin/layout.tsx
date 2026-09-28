import AdminShell from "@/components/admin/AdminShell";
import { getSession } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <AdminShell
      session={
        session ? { name: session.name, email: session.email } : null
      }
    >
      {children}
    </AdminShell>
  );
}
