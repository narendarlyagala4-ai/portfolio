import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'sentinel-ai',
    title: 'SentinelAI – Enterprise Operations Copilot',
    subtitle: 'Unified Enterprise Operations & Knowledge Access Platform',
    category: 'GenAI & RAG',
    type: 'rag',
    liveUrl: 'https://sentinel-ai-kq5i.onrender.com/',
    description: 'An AI-powered enterprise platform for unified enterprise operations and knowledge access.',
    details: [
      'Built using React, FastAPI, PostgreSQL and TypeScript',
      'Integrated OpenAI and LangChain',
      'Implemented Retrieval-Augmented Generation (RAG)',
      'Used FAISS vector search',
      'Enabled contextual conversational querying across enterprise documents and data',
      'Built REST APIs',
      'Implemented authentication workflows',
      'Integrated database systems using SQLAlchemy and PostgreSQL',
      'Docker-based deployment'
    ],
    techBadges: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'LangChain',
      'OpenAI',
      'RAG',
      'FAISS',
      'Docker'
    ],
    features: [
      'Contextual Conversational Querying across enterprise documents and internal data',
      'FAISS Dense Vector Indexing for low-latency similarity retrieval',
      'Retrieval-Augmented Generation (RAG) pipeline to ground LLM answers with enterprise facts',
      'Secure User Authentication workflows for role-based access control',
      'High-performance asynchronous REST endpoints developed with FastAPI',
      'Relational data persistence and schema management using SQLAlchemy ORM and PostgreSQL',
      'Containerized runtime environment with Docker for reproducible deployment'
    ],
    overview: 'SentinelAI is an intelligent enterprise platform designed to eliminate organizational knowledge silos. By bridging enterprise knowledge bases with advanced Retrieval-Augmented Generation (RAG) and conversational AI, it empowers teams to access internal documentation, policies, and operational data through natural language inquiries with cited context.',
    problem: 'Enterprises deal with fragmented documentation across disconnected departments, making it slow and tedious for teams to locate authoritative operational guidelines, policies, and internal knowledge.',
    solution: 'Designed and implemented an end-to-end RAG copilot architecture. Ingested internal documents into FAISS vector spaces, engineered a LangChain context retrieval chain, and connected FastAPI backend endpoints with a responsive React & TypeScript frontend.',
    implementation: [
      'Engineered vector ingestion pipeline parsing enterprise documentation into semantic chunks and generating embeddings.',
      'Configured FAISS vector store for fast similarity search and integrated LangChain context-building prompt templates.',
      'Constructed asynchronous REST API services with FastAPI, managing session state and streaming completions.',
      'Modeled relational user and audit data using SQLAlchemy with a structured PostgreSQL database.',
      'Implemented token-based authentication workflows to secure enterprise endpoints.',
      'Packaged all frontend, backend, and vector index services using Docker for containerized deployment.'
    ],
    resultsOrMetrics: [
      'Enabled real-time conversational retrieval across multi-page enterprise documents',
      'Significantly reduced manual lookup time by providing contextual answers with source references',
      'Achieved responsive query execution through FAISS dense vector search and asynchronous FastAPI endpoints'
    ],
    futureImprovements: [
      'Hybrid search combining BM25 keyword matching with dense FAISS vectors',
      'Automated recurring sync with enterprise drives and knowledge repositories',
      'Multi-modal document parsing for tables, charts, and scanned diagrams'
    ]
  },
  {
    id: 'ecommerce-bi-dashboard',
    title: 'E-Commerce Business Intelligence Dashboard',
    subtitle: 'End-to-End Analytics & Decision Support Platform',
    category: 'Business Intelligence',
    type: 'bi',
    liveUrl: 'https://dashboard-j38p.vercel.app/',
    description: 'An end-to-end business intelligence platform that transforms raw e-commerce data into actionable business insights.',
    details: [
      'Python ETL pipeline',
      'SQL data warehousing',
      'Data transformation',
      'Power BI data modeling',
      'DAX measures',
      'Sales analysis',
      'Revenue analysis',
      'Customer behavior analysis',
      'Product performance analysis',
      'Business KPI analysis',
      'Six-page interactive dashboard',
      'Dynamic visualizations'
    ],
    techBadges: [
      'Python',
      'SQL',
      'Power BI',
      'DAX',
      'ETL',
      'Data Analytics',
      'Data Visualization'
    ],
    features: [
      'Custom Python ETL pipeline extracting and standardizing disparate e-commerce transaction data',
      'Structured SQL warehousing with star-schema relational modeling',
      'Advanced DAX measures calculating dynamic YoY growth, moving averages, and margins',
      'Six-page interactive executive Power BI dashboard with cross-filtering',
      'In-depth sales & revenue trajectory tracking across geographic regions and channels',
      'Customer segmentation and purchasing behavior analysis',
      'Product category performance, margin contributions, and inventory turnover metrics'
    ],
    overview: 'This project delivers a comprehensive business intelligence solution bridging raw transactional data and strategic decision-making. Through automated Python ETL pipelines, SQL warehousing, and an interactive six-page Power BI dashboard, leadership gains continuous visibility into revenues, margins, consumer habits, and product viability.',
    problem: 'Unprocessed e-commerce transactions and siloed records prevented stakeholders from tracking key performance indicators, identifying revenue bottlenecks, and understanding customer retention trends.',
    solution: 'Engineered an end-to-end analytics workflow: extracted and transformed transactional logs with Python, loaded curated dimensions and facts into a SQL database, and constructed an interactive 6-page Power BI report powered by complex DAX measures.',
    implementation: [
      'Developed modular Python scripts to clean missing records, validate transaction schemas, and format timestamps.',
      'Designed a relational star-schema data warehouse in SQL with fact tables for sales and dimension tables for customers, products, and dates.',
      'Built a semantic data model in Power BI, authoring specialized DAX measures for compound metrics, time-intelligence, and profitability ratios.',
      'Designed a cohesive 6-page interactive report layout focusing on Executive Summary, Sales Trends, Customer Analysis, Product Performance, Regional Distribution, and KPI Deep-Dives.',
      'Configured interactive drill-throughs, dynamic slicers, and cross-highlighting for self-service exploration.'
    ],
    resultsOrMetrics: [
      'Successfully consolidated raw transactional streams into a single source of truth',
      'Delivered a 6-page interactive dashboard providing real-time visibility across sales, customers, and product lines',
      'Automated manual data aggregation routines into a repeatable Python and SQL pipeline'
    ],
    futureImprovements: [
      'Automating direct scheduled data refreshes via cloud-hosted database connections',
      'Integrating predictive demand forecasting models directly into dashboard views',
      'Adding automated anomaly alerts for sudden drops in conversion or surges in refunds'
    ]
  },
  {
    id: 'churn-prediction-system',
    title: 'AI-Powered Customer Churn Prediction System',
    subtitle: 'Machine Learning Classification & Risk Identification Pipeline',
    category: 'Machine Learning',
    type: 'ml',
    description: 'A machine learning system designed to predict customer churn using demographic, behavioral, and transaction data.',
    details: [
      'Data preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Feature engineering',
      'Class imbalance handling',
      'Machine learning classification',
      'Model evaluation with Accuracy, Precision, Recall, F1-Score, and ROC-AUC'
    ],
    techBadges: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Machine Learning',
      'Data Science'
    ],
    features: [
      'Rigorous Exploratory Data Analysis identifying primary drivers of customer attrition',
      'Comprehensive data preprocessing: missing value imputation, outlier detection, and scaling',
      'Advanced feature engineering extracting usage tenure, contract duration, and payment patterns',
      'Class imbalance mitigation techniques to prevent skewed classification bias',
      'Supervised ML classification pipeline trained and fine-tuned with Scikit-learn',
      'Multi-metric model evaluation assessing real-world trade-offs between precision and recall',
      'Clear end-to-end pipeline architecture from raw data ingestion to churn risk predictions'
    ],
    overview: 'A data science and machine learning initiative that analyzes multi-dimensional customer profiles to anticipate churn before it occurs. By systematically evaluating behavioral, demographic, and financial patterns, the system equips retention teams with actionable early warnings.',
    problem: 'Customer churn directly erodes recurring revenue, yet organizations struggle to detect subtle precursor signals across transaction frequency, support interactions, and contract characteristics.',
    solution: 'Constructed an end-to-end machine learning pipeline using Python and Scikit-learn. Performed detailed EDA, engineered predictive behavioral indicators, handled class distribution skew, and trained classification models evaluated against balanced metrics.',
    implementation: [
      'Conducted extensive exploratory data analysis to isolate correlations between customer tenure, billing methods, and churn events.',
      'Applied robust preprocessing transformations, encoding categorical variables and normalizing numerical features.',
      'Engineered behavioral features capturing interaction frequency and transaction velocity.',
      'Addressed class imbalance using appropriate sampling strategies to ensure high sensitivity to minority churn instances.',
      'Trained classification algorithms with cross-validation and hyperparameter tuning in Scikit-learn.',
      'Evaluated predictions comprehensively using Accuracy, Precision, Recall, F1-Score, and ROC-AUC curves.'
    ],
    resultsOrMetrics: [
      'Successfully identified key churn indicators across customer tenure and billing behaviors',
      'Balanced precision and recall trade-offs to reliably detect at-risk customers without excessive false alerts',
      'Established a modular, reproducible ML pipeline from raw data ingestion to inference'
    ],
    futureImprovements: [
      'Deploying an inference endpoint via FastAPI for real-time customer risk scoring',
      'Integrating SHAP and LIME model explainability dashboards for customer-facing teams',
      'Automating model retraining workflows when data drift is detected'
    ]
  }
];
