import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: "SpinRequest — Live DJ Song-Request Marketplace",
    description:
      "A two-sided marketplace connecting audiences with DJs at live events. Features real-time song requests, dynamic pricing, automated payouts, and a comprehensive FilamentPHP admin panel with role-based access control.",
    tech: ["Laravel", "FilamentPHP", "MySQL", "NuxtJS", "Queue Workers"],
    tags: ["SaaS", "Marketplace", "Payments"],
    status: "Active",
    liveUrl: "https://spinrequest.com",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fspinrequest.com?w=1200&h=750",
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
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flaundryroom.com.ng%2Fclient%2Flanding-page?w=1200&h=750",
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
    image: "https://s.wordpress.com/mshots/v1/http%3A%2F%2Fevents.vibezsup.com%2F?w=1200&h=750",
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
    // Demo is a Google Drive video (not an embeddable live site), so it's not
    // set as liveUrl — that would try to iframe-embed and render blank.
  },
]
