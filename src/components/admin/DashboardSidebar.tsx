"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Anchor,
  ArrowLeft,
  BarChart3,
  LayoutDashboard,
  Ship,
  Users,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin#bookings", label: "Bookings", icon: Ship },
  { href: "/admin#occupancy", label: "Occupancy", icon: BarChart3 },
  { href: "/admin#revenue", label: "Revenue", icon: Users },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-navy-100 bg-white lg:flex">
      <div className="flex h-16 items-center gap-2.5 border-b border-navy-100 px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900">
          <Anchor className="h-4 w-4 text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold text-navy-900">Severo Marines</div>
          <div className="text-[10px] font-medium uppercase tracking-wider text-navy-500">
            Admin Panel
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-navy-900 text-white shadow-sm"
                  : "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-navy-100 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Site
        </Link>
      </div>
    </aside>
  );
}
