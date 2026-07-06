import type { Metadata } from "next";
import DashboardSidebar from "@/components/admin/DashboardSidebar";
import AdminMobileHeader from "@/components/admin/AdminMobileHeader";

export const metadata: Metadata = {
  title: "Admin Dashboard | Severo Marines",
  description: "Company performance dashboard for Severo Marines mooring operations.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-navy-50">
      <DashboardSidebar />
      <AdminMobileHeader />
      <div className="lg:pl-64">
        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  );
}
