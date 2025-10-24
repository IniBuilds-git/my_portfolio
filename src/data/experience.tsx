import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Freelance Backend Engineer",
    company: "Self-Employed",
    period: "2025 – Present",
    year: "Present",
    description:
      "Building scalable APIs, integrations, and cloud-native backend systems for startups. Currently delivering production-grade SaaS, payment integrations, and real-time infrastructure using Laravel and NestJS.",
    technologies: [
      "Laravel",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "CI/CD"
    ]
  },
  {
    id: 2,
    role: "Volunteer Software Engineer",
    company: "Cadware",
    period: "2025 – Present",
    year: "Ongoing",
    description:
      "Contributing to backend engineering using Laravel and NestJS. Supporting development of internal tools, API design, and performance optimization for data-driven systems.",
    technologies: [
      "NestJS",
      "Laravel",
      "MySQL",
      "TypeScript",
      "Docker",
      "GitHub Actions"
    ]
  },
  {
    id: 3,
    role: "Backend Engineer",
    company: "Zojatech",
    period: "2023 – 2025",
    year: "2 years",
    description:
      "Led backend development across approval workflows, CRM sync, real-time notifications, subscription monetisation, and automation pipelines. Improved system reliability and DevOps automation.",
    technologies: [
      "Laravel",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Zoho API",
      "AWS",
      "Docker"
    ]
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "Shippack",
    period: "2020 – 2022",
    year: "2 years",
    description:
      "Built logistics backend including Stripe payments, live driver tracking, performance caching, and interactive API documentation. Deployed microservices on AWS with cloud monitoring and CI/CD pipelines.",
    technologies: [
      "Laravel",
      "Socket.io",
      "Stripe",
      "AWS EC2/S3",
      "Redis",
      "Docker",
      "OpenAPI"
    ]
  }
]
