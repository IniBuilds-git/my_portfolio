import { Project } from "@/types/index";

export const projects: Project[] = [
  {
    id: 1,
    title: "SuperNote",
    description:
      "An AI-first study tool that converts YouTube, TikTok, PDFs, and voice into structured notes, quizzes, and flashcards.",
    tags: ["Flutter", "React", "TypeScript", "Supabase"],
    additionalTags: ["OpenRouter", "LangChain", "ElevenLabs"],
    githubUrl: "#",
    liveUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Instalog",
    description:
      "A real-time logging, crash reporting, and AI debugging SDK built with mobile-native integrations; serving 10K+ sessions/week across platforms.",
    tags: ["Rust", "Supabase", "Redis", "Kotlin", "Swift"],
    additionalTags: ["Dart", "React Native"],
    githubUrl: "#",
    liveUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Tikfetch",
    description:
      "A zero-login TikTok downloader with smart caption parsing and near-zero cold starts; processed over 500K fetches.",
    tags: ["TypeScript", "BetterAuth", "Redis", "PostgreSQL"],
    additionalTags: ["DigitalOcean"],
    liveUrl: "#",
  },
  {
    id: 4,
    title: "NBX Smart Battery Passport",
    description:
      "A $500K+ blockchain platform for sustainability and logistics with privacy-preserving modules using ZKPs and secure enclaves.",
    tags: ["Flutter", "Kotlin"],
    badge: "Enterprise",
  },
  {
    id: 5,
    title: "Eden Life Mobile App",
    description:
      "Re-architected household services app that cut onboarding time from 24 mins to 4 mins, resulting in a 3× increase in activation rates.",
    tags: ["Flutter", "Kotlin", "Swift", "GetStream SDK"],
    additionalTags: ["Real-time Chat"],
    badge: "100k+ MAU",
  },
];