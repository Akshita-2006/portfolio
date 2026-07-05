export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string[]
  tech: string[]
  category?: string
  status?: string
  metrics?: { label: string; value: string }[]
  features?: string[]
  githubUrl?: string
  demoUrl?: string
  image?: string
  featured?: boolean
}

export interface ExperienceEntry {
  role: string
  organization: string
  period: string
  current?: boolean
  location?: string
  points: string[]
}

export interface LeadershipEntry {
  role: string
  organization: string
  period: string
  description?: string
}

export interface CertificationEntry {
  title: string
  issuer: string
  date?: string
  image: string
  credentialUrl?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface AchievementEntry {
  title: string
  description?: string
}
