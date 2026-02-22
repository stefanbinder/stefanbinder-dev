export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Language {
  id: string;
  name: string;
  level: string;
  flag: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  url: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}
