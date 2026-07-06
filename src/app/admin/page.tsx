import MetricsCards from "@/components/admin/MetricsCards";
import RevenueChart from "@/components/admin/RevenueChart";
import MooringOccupancy from "@/components/admin/MooringOccupancy";
import ServiceBreakdown from "@/components/admin/ServiceBreakdown";
import RecentBookings from "@/components/admin/RecentBookings";

export default function AdminDashboard() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
          Performance Dashboard
        </h1>
        <p className="mt-1 text-sm text-navy-500">
          Overview of mooring operations, revenue, and bookings — updated July
          2026
        </p>
      </div>

      <MetricsCards />

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <ServiceBreakdown />
      </div>

      <div className="mt-6">
        <MooringOccupancy />
      </div>

      <div className="mt-6">
        <RecentBookings />
      </div>
    </div>
  );
}
