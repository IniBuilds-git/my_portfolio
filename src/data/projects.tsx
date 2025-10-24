import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: "Coinlybus — Fintech Wallet Infrastructure",
    description:
      "Built a secure multi-wallet transaction system with real-time ledgering, automated reconciliation, and fault-tolerant payment processing deployed on AWS with PM2 and Docker. Designed the backend for scalability, monitoring, and continuous delivery.",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Redis", "AWS", "Docker"],
    tags: ["API", "Cloud Infrastructure"],
    status: "Active",
    githubUrl: "",
  },
  {
    id: 2,
    title: "LaundryRoom — On-Demand Laundry SaaS Platform",
    description:
      "Developed a multi-vendor laundry booking SaaS with automated order workflows, Paystack integration, pricing logic, and vendor/customer dashboards. Implemented queue-based order processing and caching for performance optimization.",
    tech: ["Laravel", "PHP", "Vuejs", "MySQL","Docker"],
    tags: ["SaaS", "Payments", "Full-Stack"],
    status: "Completed",
    liveUrl: "https://laundryroom.com.ng/client/landing-page",
  },
  {
    id: 3,
    title: "Vibesup EventHub — Ticketing & Event Management Backend",
    description:
      "Engineered a scalable ticketing system with admin panel, secure payments, attendee management, and real-time event analytics. Focused on modular API design and optimized database queries for high concurrency.",
    tech: ["Laravel", "PHP", "MySQL", "Redis", "Blade", "API Auth"],
    tags: ["Backend", "Event Systems"],
    status: "Completed",
    liveUrl: "http://events.vibezsup.com/",
  },
  {
    id: 4,
    title: "SkinScan AI — Dermatology Diagnosis",
    description:
      "Created an AI-powered diagnostic API using EfficientNet and Grad-CAM for skin-disease classification with explainable heatmaps. Deployed a Flask service exposing REST endpoints for integration into clinical tools.",
    tech: ["Flask", "Python", "EfficientNet", "Grad-CAM", "Pillow", "API"],
    tags: ["AI", "Healthcare", "Computer Vision"],
    status: "Active",
    githubUrl: "https://github.com/IniBuilds-git/SkinScan",
    liveUrl: "https://drive.google.com/file/d/1VuKBQxwMBczVSUNL6xjwMhyMYcbUH43h/view?usp=sharing",
  },
]
