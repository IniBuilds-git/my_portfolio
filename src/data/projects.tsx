import { Project } from "@/types/index";

export const projects: Project[] = [
  {
    id: 1,
    title: "CarRecovery — AI Dispatch Platform",
    description:
      "AI-powered vehicle breakdown dispatch system with live tracking & intelligent assistance.",
    tags: ["Next.js", "NestJS", "AI", "AWS", "TypeScript"],
    status: "Active",
    liveUrl: "https://carrecovery.app",
  },
  {
    id: 2,
    title: "SME AI Support Assistant",
    description:
      "RAG-based chatbot for Shopify & WooCommerce automating sales + customer care.",
    tags: ["LangChain", "FastAPI", "RAG", "PostgreSQL", "Vercel"],
    status: "Active",
    githubUrl: "https://github.com/username/sme-ai-support",
  },
  {
    id: 3,
    title: "RetinaSight — AI Diabetic Retinopathy",
    description:
      "Deep learning system with Grad-CAM explainability for high-accuracy medical diagnostics.",
    tags: ["Python", "EfficientNet", "Flask", "Deep Learning"],
    status: "Completed",
  },
];
