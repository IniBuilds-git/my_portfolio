import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 1,
    category: "Experience",
    role: "Senior Full Stack Software Engineer",
    company: "Bitville Gaming",
    period: "Oct 2025 – Present",
    year: "Remote",
    description:
      "Engineered a high-traffic multi-tenant sports betting platform across a TypeScript-first stack — a Hono API backed by Drizzle ORM and PostgreSQL with a Next.js/React frontend on Bun — alongside Laravel services.",
    technologies: [
      "TypeScript",
      "Bun",
      "Next.js / React",
      "Hono",
      "Drizzle ORM",
      "PostgreSQL",
      "Laravel"
    ],
    achievements: [
      "Engineered a high-traffic multi-tenant sports betting platform on a Hono API, integrating Sportradar, Evolution, and Pragmatic with a clean service-layer architecture.",
      "Built an event-driven voucher redemption system supporting multi-currency workflows (NGN, ZAR, AED) with zero inconsistency under concurrent load.",
      "Modelled the data layer with Drizzle ORM and managed PostgreSQL migrations, optimising queries for high-concurrency endpoints and significantly reducing response times across thousands of simultaneous users.",
      "Delivered a Next.js/React frontend and Bun-based tooling, with CI/CD deployment automation for consistent, repeatable releases."
    ]
  },
  {
    id: 2,
    category: "Experience",
    role: "Backend Engineer (Volunteer)",
    company: "Cadware Limited",
    period: "Aug 2025 – Present",
    year: "Remote (UK)",
    description:
      "Contributing to a Laravel property investment platform with a focus on testing, CI/CD, and modular data modelling.",
    technologies: [
      "Laravel",
      "PHPUnit",
      "GitHub Actions",
      "Eloquent",
      "MySQL"
    ],
    achievements: [
      "Introduced PHPUnit test suites and GitHub Actions CI/CD pipelines, cutting manual regression effort by 40% on a Laravel property investment platform.",
      "Architected a modular Eloquent data model using the Strategy pattern to support purchase, renovation, and leasing flows without branching logic."
    ]
  },
  {
    id: 3,
    category: "Experience",
    role: "Mid-Level Backend Engineer",
    company: "Zojatech",
    period: "Aug 2023 – Feb 2025",
    year: "Hybrid · Lagos, Nigeria",
    description:
      "Built approval workflow engines, async processing pipelines, CRM integrations, and real-time notification systems on Laravel.",
    technologies: [
      "Laravel",
      "Laravel Events",
      "Queues & Jobs",
      "Broadcasting",
      "WebSockets",
      "Zoho API"
    ],
    achievements: [
      "Built a configurable approval workflow engine using the Observer pattern and Laravel Events, reducing validation time by 30%.",
      "Delivered an async bulk CV processing pipeline via Laravel Queues and Jobs, handling thousands of records with no UI-blocking operations.",
      "Integrated Zoho CRM and billing APIs, automating synchronisation and cutting manual errors by 40%.",
      "Developed a real-time notification system using Laravel Broadcasting and WebSockets with pub/sub architecture."
    ]
  },
  {
    id: 4,
    category: "Experience",
    role: "Software Engineer",
    company: "Shippack",
    period: "Dec 2021 – Aug 2023",
    year: "Remote",
    description:
      "Deployed and scaled mission-critical delivery APIs on AWS, with performance caching and Stripe payment integration.",
    technologies: [
      "Laravel",
      "Laravel Forge",
      "AWS EC2/S3",
      "Redis",
      "Stripe",
      "Laravel Cashier"
    ],
    achievements: [
      "Deployed and managed scalable services on AWS (EC2, S3, CloudWatch) via Laravel Forge, ensuring high uptime for mission-critical delivery APIs.",
      "Reduced API response times by 25% through Redis caching and load balancing after profiling high-traffic endpoints.",
      "Integrated Stripe via Laravel Cashier, improving payment reconciliation accuracy by 35%."
    ]
  },

  // ── Education ──────────────────────────────────────────────
  {
    id: 5,
    category: "Education",
    role: "MSc, Computing (Software Engineering)",
    company: "University of Northampton, United Kingdom",
    period: "Jan 2025 – Jan 2026",
    year: "Distinction",
    description:
      "Postgraduate study in software engineering with a focus on advanced systems design, applied AI, and research. Graduated with Distinction.",
    technologies: []
  },
  {
    id: 6,
    category: "Education",
    role: "BSc, Software Engineering",
    company: "Babcock University, Nigeria",
    period: "Sep 2019 – Jun 2023",
    year: "Distinction",
    description:
      "Undergraduate degree in software engineering covering core computer science, software design, and full-stack development. Graduated with Distinction.",
    technologies: []
  },

  // ── Research & Publications ────────────────────────────────
  {
    id: 7,
    category: "Research",
    role: "Design and Evaluation of Retrieval-Augmented Fine-Tuning (RAFT) for Context-Aware Customer Support in Domain-Specific E-Commerce",
    company: "University of Northampton",
    period: "MSc Research",
    year: "Publication",
    description:
      "Investigates the design and evaluation of RAFT, combining retrieval-augmented generation with fine-tuning, to build context-aware, domain-specific customer support systems for e-commerce applications.",
    technologies: [],
    link: {
      url: "https://drive.google.com/file/d/1SjFwJfvy2UtnDvmfor88AaXlWjPcf_w0/view?usp=drive_link",
      label: "Read paper"
    }
  },
  {
    id: 8,
    category: "Research",
    role: "Implementation of an Automobile Breakdown Service Provider (ABSP) Model",
    company: "Babcock University",
    period: "BSc Research",
    year: "Publication",
    description:
      "Designed and implemented a model for coordinating automobile breakdown services, addressing real-world logistics challenges through a structured software architecture and service provider framework.",
    technologies: [],
    link: {
      url: "https://gjeta.com/sites/default/files/fulltext_pdf/GJETA-2023-0205.pdf",
      label: "Read paper"
    }
  }
]
