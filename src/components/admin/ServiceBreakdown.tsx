"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import FadeIn from "@/components/ui/FadeIn";
import { serviceBreakdown } from "@/lib/data";

const COLORS = ["#0a1628", "#1b365d", "#3d6a9e", "#4a90c4"];

export default function ServiceBreakdown() {
  return (
    <FadeIn delay={0.3}>
      <div className="rounded-xl border border-navy-100 bg-white p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-navy-900">
            Revenue by Service
          </h3>
          <p className="mt-1 text-sm text-navy-500">
            Distribution of income streams
          </p>
        </div>

        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={serviceBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
              >
                {serviceBreakdown.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #e8eef5",
                  boxShadow: "0 4px 12px rgba(10,22,40,0.08)",
                }}
                formatter={(value) => [`${value}%`, "Share"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          {serviceBreakdown.map((item, i) => (
            <div key={item.name} className="flex items-center gap-2 text-sm">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: COLORS[i] }}
              />
              <span className="text-navy-600">{item.name}</span>
              <span className="ml-auto font-medium text-navy-900">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
