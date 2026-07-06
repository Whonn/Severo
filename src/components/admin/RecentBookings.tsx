"use client";

import FadeIn from "@/components/ui/FadeIn";
import { recentBookings } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-700",
  Completed: "bg-navy-50 text-navy-600",
  Pending: "bg-amber-50 text-amber-700",
};

export default function RecentBookings() {
  return (
    <FadeIn delay={0.35}>
      <div
        id="bookings"
        className="rounded-xl border border-navy-100 bg-white"
      >
        <div className="border-b border-navy-100 px-6 py-5">
          <h3 className="text-lg font-semibold text-navy-900">
            Recent Bookings
          </h3>
          <p className="mt-1 text-sm text-navy-500">
            Latest mooring reservations and their status
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-navy-100 bg-navy-50/50">
                <th className="px-6 py-3 font-medium text-navy-500">ID</th>
                <th className="px-6 py-3 font-medium text-navy-500">Vessel</th>
                <th className="hidden px-6 py-3 font-medium text-navy-500 sm:table-cell">
                  Berth
                </th>
                <th className="hidden px-6 py-3 font-medium text-navy-500 md:table-cell">
                  Check In
                </th>
                <th className="hidden px-6 py-3 font-medium text-navy-500 lg:table-cell">
                  Check Out
                </th>
                <th className="px-6 py-3 font-medium text-navy-500">Status</th>
                <th className="px-6 py-3 font-medium text-navy-500">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-navy-50 transition-colors last:border-0 hover:bg-navy-50/30"
                >
                  <td className="px-6 py-4 font-mono text-xs text-navy-600">
                    {booking.id}
                  </td>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    {booking.vessel}
                  </td>
                  <td className="hidden px-6 py-4 text-navy-600 sm:table-cell">
                    {booking.berth}
                  </td>
                  <td className="hidden px-6 py-4 text-navy-600 md:table-cell">
                    {booking.checkIn}
                  </td>
                  <td className="hidden px-6 py-4 text-navy-600 lg:table-cell">
                    {booking.checkOut}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        statusStyles[booking.status] ?? statusStyles.Pending
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-navy-900">
                    {formatCurrency(booking.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FadeIn>
  );
}
