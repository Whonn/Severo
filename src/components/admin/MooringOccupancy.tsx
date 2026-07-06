"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import FadeIn from "@/components/ui/FadeIn";
import { berthOccupancy } from "@/lib/data";

const COLORS = ["#1b365d", "#2a4a7a", "#3d6a9e", "#4a90c4"];

export default function MooringOccupancy() {
  const data = berthOccupancy.map((zone) => ({
    ...zone,
    rate: Math.round((zone.occupied / zone.total) * 100),
  }));

  return (
    <FadeIn delay={0.25}>
      <div
        id="occupancy"
        className="rounded-xl border border-navy-100 bg-white p-6"
      >
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-navy-900">
            Berth Occupancy by Zone
          </h3>
          <p className="mt-1 text-sm text-navy-500">
            Current occupancy rates across dock zones
          </p>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" barSize={20}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8eef5" horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{ fill: "#2a4a7a", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <YAxis
                type="category"
                dataKey="zone"
                tick={{ fill: "#2a4a7a", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={90}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #e8eef5",
                  boxShadow: "0 4px 12px rgba(10,22,40,0.08)",
                }}
                formatter={(value, _name, props) => {
                  const payload = props.payload as { occupied: number; total: number };
                  return [
                    `${payload.occupied}/${payload.total} berths (${value}%)`,
                    "Occupancy",
                  ];
                }}
              />
              <Bar dataKey="rate" radius={[0, 6, 6, 0]}>
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </FadeIn>
  );
}
