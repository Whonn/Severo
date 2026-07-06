export const services = [
  {
    id: "mooring",
    title: "Premium Mooring",
    description:
      "Secure berths for vessels of all sizes with 24/7 monitoring and dedicated dock staff.",
    icon: "anchor",
  },
  {
    id: "maintenance",
    title: "Vessel Maintenance",
    description:
      "Full-service hull cleaning, engine checks, and seasonal preparation by certified technicians.",
    icon: "wrench",
  },
  {
    id: "fuel",
    title: "Fuel & Provisioning",
    description:
      "On-dock fuel delivery and provisioning services to keep your vessel ready for departure.",
    icon: "fuel",
  },
  {
    id: "concierge",
    title: "Marine Concierge",
    description:
      "Custom itineraries, crew arrangements, and port logistics handled with precision.",
    icon: "compass",
  },
];

export const stats = [
  { label: "Berths Available", value: "120+" },
  { label: "Years of Service", value: "25" },
  { label: "Vessels Served", value: "3,400+" },
  { label: "Client Satisfaction", value: "98%" },
];

export const dashboardMetrics = {
  totalRevenue: 2847500,
  revenueChange: 12.4,
  occupancyRate: 87.3,
  occupancyChange: 3.2,
  activeVessels: 104,
  vesselsChange: 8,
  totalBerths: 120,
  availableBerths: 15,
  avgStayDuration: 4.2,
  stayChange: -0.3,
};

export const monthlyRevenue = [
  { month: "Jan", revenue: 185000, occupancy: 72 },
  { month: "Feb", revenue: 198000, occupancy: 75 },
  { month: "Mar", revenue: 215000, occupancy: 78 },
  { month: "Apr", revenue: 242000, occupancy: 82 },
  { month: "May", revenue: 268000, occupancy: 85 },
  { month: "Jun", revenue: 295000, occupancy: 88 },
  { month: "Jul", revenue: 312000, occupancy: 91 },
  { month: "Aug", revenue: 305000, occupancy: 89 },
  { month: "Sep", revenue: 278000, occupancy: 84 },
  { month: "Oct", revenue: 245000, occupancy: 80 },
  { month: "Nov", revenue: 210000, occupancy: 76 },
  { month: "Dec", revenue: 199500, occupancy: 74 },
];

export const berthOccupancy = [
  { zone: "North Dock", occupied: 28, total: 32 },
  { zone: "South Pier", occupied: 22, total: 28 },
  { zone: "East Marina", occupied: 35, total: 40 },
  { zone: "West Basin", occupied: 19, total: 20 },
];

export const recentBookings = [
  {
    id: "BK-2847",
    vessel: "Sea Voyager",
    berth: "N-12",
    checkIn: "2026-07-04",
    checkOut: "2026-07-12",
    status: "Active",
    amount: 4200,
  },
  {
    id: "BK-2846",
    vessel: "Atlantic Spirit",
    berth: "S-08",
    checkIn: "2026-07-03",
    checkOut: "2026-07-18",
    status: "Active",
    amount: 8750,
  },
  {
    id: "BK-2845",
    vessel: "Horizon Dawn",
    berth: "E-22",
    checkIn: "2026-07-02",
    checkOut: "2026-07-06",
    status: "Completed",
    amount: 2100,
  },
  {
    id: "BK-2844",
    vessel: "Pacific Star",
    berth: "W-04",
    checkIn: "2026-07-01",
    checkOut: "2026-07-10",
    status: "Active",
    amount: 5400,
  },
  {
    id: "BK-2843",
    vessel: "Northern Light",
    berth: "N-05",
    checkIn: "2026-06-28",
    checkOut: "2026-07-05",
    status: "Completed",
    amount: 3850,
  },
  {
    id: "BK-2842",
    vessel: "Blue Meridian",
    berth: "E-15",
    checkIn: "2026-06-27",
    checkOut: "2026-07-15",
    status: "Active",
    amount: 9200,
  },
];

export const serviceBreakdown = [
  { name: "Mooring", value: 58 },
  { name: "Maintenance", value: 22 },
  { name: "Fuel", value: 12 },
  { name: "Concierge", value: 8 },
];
