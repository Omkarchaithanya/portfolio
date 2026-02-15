export type Persona = 'ai' | 'fullstack' | 'research';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  link?: string;
  abstract?: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
}

export interface Hackathon {
  id: string;
  name: string;
  date: string;
  achievement: string;
  description: string;
  link?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'ml' | 'tools' | 'other';
  level: number; // 1-100
}
