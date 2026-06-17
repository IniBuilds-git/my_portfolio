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
  image?: string
}

export interface Tool {
  name: string
  category: string
  icon: string
}

export type ExperienceCategory = 'Experience' | 'Education' | 'Research'

export interface Experience {
  id: number
  category: ExperienceCategory
  role: string
  company: string
  period: string
  year: string
  description: string
  technologies: string[]
  achievements?: string[]
  link?: { url: string; label: string }
}
