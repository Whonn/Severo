"use client";

import { ArrowDown, ArrowUp, DollarSign, Ship, TrendingUp, Anchor } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { dashboardMetrics } from "@/lib/data";
import { formatCurrency, formatPercent } from "@/lib/utils";

const metrics = [
  {
    label: "Total Revenue",
    value: formatCurrency(dashboardMetrics.totalRevenue),
    change: dashboardMetrics.revenueChange,
    icon: DollarSign,
    positive: true,
  },
  {
    label: "Occupancy Rate",
    value: `${dashboardMetrics.occupancyRate}%`,
    change: dashboardMetrics.occupancyChange,
    icon: TrendingUp,
    positive: true,
  },
  {
    label: "Active Vessels",
    value: dashboardMetrics.activeVessels.toString(),
    change: dashboardMetrics.vesselsChange,
    icon: Ship,
    positive: true,
    isCount: true,
  },
  {
    label: "Available Berths",
    value: `${dashboardMetrics.availableBerths}/${dashboardMetrics.totalBerths}`,
    change: dashboardMetrics.stayChange,
    icon: Anchor,
    positive: false,
    suffix: " avg stay",
  },
];

export default function MetricsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric, i) => {
        const Icon = metric.icon;
        const isPositive = metric.positive
          ? metric.change >= 0
          : metric.change <= 0;

        return (
          <FadeIn key={metric.label} delay={i * 0.08}>
            <div className="card-hover rounded-xl border border-navy-100 bg-white p-5">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div
                  className={`flex items-center gap-0.5 text-xs font-medium ${
                    isPositive ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {isPositive ? (
                    <ArrowUp className="h-3 w-3" />
                  ) : (
                    <ArrowDown className="h-3 w-3" />
                  )}
                  {metric.isCount
                    ? `+${metric.change}`
                    : formatPercent(Math.abs(metric.change))}
                  {metric.suffix && (
                    <span className="text-navy-400">{metric.suffix}</span>
                  )}
                </div>
              </div>
              <div className="mt-4 text-2xl font-bold text-navy-900">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-navy-500">{metric.label}</div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
