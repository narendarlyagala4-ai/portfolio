import type { JourneyMilestone } from '../types';

export const journeyData: JourneyMilestone[] = [
  {
    step: '01',
    title: 'Programming Foundations',
    focus: 'Python & SQL Mastery',
    description: 'Mastered fundamental algorithmic thinking, data structures, and relational querying with Python and SQL. Built the bedrock for computational problem-solving.',
    technologies: ['Python', 'SQL', 'Algorithms', 'OOP']
  },
  {
    step: '02',
    title: 'Data Science & Analytics',
    focus: 'Data Pipelines & Visualization',
    description: 'Ventured into data wrangling, exploratory data analysis, ETL pipelines, and business intelligence with Pandas and Power BI, translating raw numbers into actionable stories.',
    technologies: ['Pandas', 'ETL', 'Power BI', 'DAX', 'Data Analysis']
  },
  {
    step: '03',
    title: 'Machine Learning Engineering',
    focus: 'Predictive Modeling & Scikit-learn',
    description: 'Engineered predictive models, classification algorithms, feature pipelines, and rigorous metric evaluation (Accuracy, Precision, Recall, F1, ROC-AUC).',
    technologies: ['Scikit-learn', 'Classification', 'Feature Engineering', 'EDA']
  },
  {
    step: '04',
    title: 'Generative AI & LLMs',
    focus: 'Prompt Engineering & Foundation Models',
    description: 'Explored prompt engineering, large language model capabilities, semantic representations, and context engineering with OpenAI APIs and LangChain.',
    technologies: ['LLMs', 'Generative AI', 'Prompt Engineering', 'LangChain']
  },
  {
    step: '05',
    title: 'Retrieval-Augmented Generation (RAG)',
    focus: 'Dense Vector Search & Context Retrieval',
    description: 'Engineered grounded enterprise knowledge systems using FAISS vector search, document indexing, chunking strategies, and semantic relevance matching.',
    technologies: ['RAG', 'FAISS', 'Vector Embeddings', 'Document Ingestion']
  },
  {
    step: '06',
    title: 'Full-Stack AI Applications',
    focus: 'Production Systems & Modern Architecture',
    description: 'Synthesizing all disciplines into end-to-end applications: linking asynchronous FastAPI backend microservices, PostgreSQL databases, Docker, and reactive TypeScript/React frontends.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker']
  }
];
