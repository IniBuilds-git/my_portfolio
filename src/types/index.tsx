export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  additionalTags?: string[];
  status?: 'Active' | 'Completed' | 'In Progress';
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  badge?: string;
}

export interface TechStackProps {
  tags: string[];
  className?: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}