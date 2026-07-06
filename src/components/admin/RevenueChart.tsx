"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import FadeIn from "@/components/ui/FadeIn";
import { monthlyRevenue } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function RevenueChart() {
  return (
    <FadeIn delay={0.2}>
      <div
        id="revenue"
        className="rounded-xl border border-navy-100 bg-white p-6"
      >
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-navy-900">
            Revenue Overview
          </h3>
          <p className="mt-1 text-sm text-navy-500">
            Monthly revenue for the current fiscal year
          </p>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1b365d" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#1b365d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eef5" />
              <XAxis
                dataKey="month"
                tick={{ fill: "#2a4a7a", fontSize: 12 }}
                axisLine={{ stroke: "#e8eef5" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#2a4a7a", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #e8eef5",
                  boxShadow: "0 4px 12px rgba(10,22,40,0.08)",
                }}
                formatter={(value) => [
                  formatCurrency(Number(value)),
                  "Revenue",
                ]}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#1b365d"
                strokeWidth={2}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </FadeIn>
  );
}
