import type { Skill } from '../types';

export const skillsData: Skill[] = [
  // Programming
  { name: 'Python', category: 'Data', icon: 'Terminal', description: 'Core language for ML pipelines, backend APIs, and data modeling' },
  { name: 'SQL', category: 'Data', icon: 'Database', description: 'Complex querying, data transformations, and relational warehousing' },

  // AI / Machine Learning
  { name: 'Artificial Intelligence', category: 'AI/ML', icon: 'Cpu', description: 'System design for heuristic and intelligent problem solving' },
  { name: 'Machine Learning', category: 'AI/ML', icon: 'Brain', description: 'Supervised & unsupervised model engineering, classification & regression' },
  { name: 'Generative AI', category: 'AI/ML', icon: 'Sparkles', description: 'LLM orchestration, prompt engineering, and semantic agents' },
  { name: 'LLMs', category: 'AI/ML', icon: 'Bot', description: 'Integration and evaluation of large language models for domain tasks' },
  { name: 'RAG', category: 'AI/ML', icon: 'FileSearch', description: 'Retrieval-Augmented Generation for grounded document querying' },
  { name: 'NLP', category: 'AI/ML', icon: 'MessageSquareText', description: 'Text processing, embeddings, semantic search, and tokenization' },

  // Data Science
  { name: 'Data Analysis', category: 'Data', icon: 'TrendingUp', description: 'Exploratory data analysis, statistical discovery, and KPI tracking' },
  { name: 'ETL', category: 'Data', icon: 'Workflow', description: 'End-to-end data extraction, cleaning, transform, and load workflows' },
  { name: 'Data Preprocessing', category: 'Data', icon: 'Filter', description: 'Feature scaling, null handling, categorical encoding, and balancing' },
  { name: 'Data Visualization', category: 'Data', icon: 'PieChart', description: 'Interactive storytelling charts, executive dashboards, and visual metrics' },
  { name: 'Predictive Analytics', category: 'Data', icon: 'LineChart', description: 'Forecasting patterns, churn probabilities, and business forecasting' },

  // Frameworks
  { name: 'LangChain', category: 'Frameworks', icon: 'Boxes', description: 'Chains, document loaders, context memory, and retriever pipelines' },
  { name: 'FAISS', category: 'Frameworks', icon: 'Search', description: 'Dense vector indexing, high-performance similarity search' },
  { name: 'FastAPI', category: 'Frameworks', icon: 'Zap', description: 'High-speed asynchronous Python REST APIs with OpenAPI specs' },
  { name: 'React', category: 'Frameworks', icon: 'Code2', description: 'Modern declarative frontend interfaces with reactive state' },
  { name: 'TypeScript', category: 'Frameworks', icon: 'FileCode', description: 'Type-safe frontend development and robust application architecture' },

  // Databases & Tools
  { name: 'PostgreSQL', category: 'Tools', icon: 'Server', description: 'Production relational database design, indexing, and querying' },
  { name: 'SQLAlchemy', category: 'Tools', icon: 'Layers', description: 'Python ORM modeling, transactions, and database integration' },
  { name: 'Power BI', category: 'Tools', icon: 'BarChart3', description: 'Enterprise reporting, multi-page data models, and executive dashboards' },
  { name: 'DAX', category: 'Tools', icon: 'Calculator', description: 'Calculated measures, time-intelligence formulas, and aggregations' },
  { name: 'Docker', category: 'Tools', icon: 'Container', description: 'Containerized environments for reproducible ML and web workloads' },
  { name: 'REST APIs', category: 'Tools', icon: 'Network', description: 'Secure endpoint architecture, authentication workflows, and JSON data transfer' },
  { name: 'Scikit-learn', category: 'Tools', icon: 'Binary', description: 'Classical ML algorithms, pipelines, cross-validation, and metrics' }
];

export const skillCategories = ['All', 'AI/ML', 'Data', 'Frameworks', 'Tools'] as const;
