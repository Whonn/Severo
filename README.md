# Severo Marines

A modern, minimalist Next.js web application for **Severo Marines** — a premium mooring and marine services company.

## Features

- **Landing page** — Hero, services, stats, about, and contact sections
- **Navy & white theme** — Clean marine aesthetic with custom color palette
- **Animations** — Scroll-reveal effects (Framer Motion), hover transitions, and wave animations
- **Admin dashboard** — KPI metrics, revenue charts, berth occupancy, service breakdown, and bookings table
- **Fully responsive** — Mobile-first layout with adaptive navigation

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Recharts](https://recharts.org/)
- [Lucide React](https://lucide.dev/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site.

Open [http://localhost:3000/admin](http://localhost:3000/admin) for the admin dashboard.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── admin/page.tsx    # Admin dashboard
│   └── layout.tsx
├── components/
│   ├── home/             # Landing page sections
│   ├── admin/            # Dashboard components
│   ├── layout/           # Navbar, Footer
│   └── ui/               # Shared UI (FadeIn, etc.)
└── lib/
    ├── data.ts           # Mock business data
    └── utils.ts          # Formatting helpers
```

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm start`   | Run production server    |
| `npm run lint` | Run ESLint              |
# Severo
