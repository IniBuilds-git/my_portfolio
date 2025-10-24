export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: 'Active' | 'Completed' | 'In Progress';
  githubUrl?: string;
  liveUrl?: string;
}

export interface TechStackProps {
  tags: string[];
  className?: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}