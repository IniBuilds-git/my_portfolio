export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  tags: string[]
  additionalTags?: string[]
  status?: 'Active' | 'Completed'
  githubUrl?: string
  liveUrl?: string
}

export interface Tool {
  name: string
  category: string
  icon: string
}

export interface Experience {
  id: number
  role: string
  company: string
  period: string
  year: string
  description: string
  technologies: string[]
  achievements?: string[]
}