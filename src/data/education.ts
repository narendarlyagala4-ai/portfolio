import type { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
    institution: 'JNTUH University College Of Engineering Manthani',
    period: '2023 – 2027',
    score: '7.65 / 10',
    scoreType: 'CGPA',
    current: true,
    highlights: [
      'Specializing in Artificial Intelligence and Machine Learning',
      'Core coursework in Data Structures, Algorithms, DBMS, ML & Deep Learning fundamentals',
      'Active focus on Generative AI systems, RAG architecture, and applied data analytics'
    ]
  },
  {
    degree: 'Intermediate (Higher Secondary Education)',
    institution: 'Alphores Junior College',
    period: '2021 – 2023',
    score: '97.9%',
    scoreType: 'Score',
    highlights: [
      'Strong mathematical foundation and analytical problem solving',
      'Distinction score in Mathematics, Physics, and Chemistry'
    ]
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Telangana State Model School',
    period: '2020 – 2021',
    score: '10.0',
    scoreType: 'GPA',
    highlights: [
      'Perfect 10.0 Cumulative Grade Point Average',
      'Excellence in science, mathematics, and foundational computing'
    ]
  }
];
