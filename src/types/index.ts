export type SkillCategory = 'All' | 'AI/ML' | 'Data' | 'Frameworks' | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  level?: string;
  icon: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'GenAI & RAG' | 'Business Intelligence' | 'Machine Learning';
  description: string;
  details: string[];
  techBadges: string[];
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  implementation: string[];
  resultsOrMetrics: string[];
  futureImprovements: string[];
  type: 'rag' | 'bi' | 'ml';
  liveUrl?: string;
  githubUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  highlights?: string[];
  current?: boolean;
}

export interface CertificationItem {
  id?: string;
  title: string;
  issuer: string;
  skillsCovered: string[];
  badgeColor?: string;
  fileData?: string;
  fileName?: string;
  isCustom?: boolean;
}

export interface JourneyMilestone {
  step: string;
  title: string;
  description: string;
  technologies: string[];
  focus: string;
}
