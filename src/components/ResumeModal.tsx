import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Printer,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle,
  Mail,
  Phone,
  Download,
  ExternalLink,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'web'>('pdf');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          className="relative w-full max-w-5xl max-h-[92vh] bg-[#0c0d12] border border-zinc-800 rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Header Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 border-b border-zinc-800 bg-[#121215] gap-3">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
              <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>RESUME</span>
              </span>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-xl border border-zinc-800">
                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'pdf'
                      ? 'bg-cyan-400 text-black shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  OFFICIAL PDF
                </button>
                <button
                  onClick={() => setActiveTab('web')}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'web'
                      ? 'bg-cyan-400 text-black shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  WEB CV
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <a
                href="/resume/Narendar_Lyagala_Resume.pdf"
                download="Narendar_Lyagala_Resume.pdf"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-mono font-bold uppercase hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD PDF</span>
              </a>

              <a
                href="/resume/Narendar_Lyagala_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-colors"
                title="Open PDF in new tab"
                aria-label="Open PDF in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-colors cursor-pointer"
                aria-label="Close resume view"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conditional Body: Official PDF Viewer or Styled Web CV */}
          {activeTab === 'pdf' ? (
            <div className="flex-1 p-3 sm:p-5 overflow-hidden bg-black/60 flex flex-col items-center justify-center">
              <div className="w-full h-[72vh] rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-900 shadow-2xl relative">
                <iframe
                  src="/resume/Narendar_Lyagala_Resume.pdf#toolbar=1&navpanes=0"
                  title="Narendar Lyagala Official Resume"
                  className="w-full h-full border-0 rounded-2xl"
                />
              </div>
            </div>
          ) : (
            /* Printable / Viewable Resume Document Body */
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-outfit text-zinc-300 text-xs sm:text-sm print:bg-white print:text-black">
            {/* Header Identity */}
            <div className="text-center pb-6 border-b border-zinc-800">
              <h1 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                NARENDAR LYAGALA
              </h1>
              <p className="text-cyan-400 font-mono text-xs mt-1.5 uppercase tracking-wider font-semibold">
                Computer Science & Engineering Student | AI & ML Engineer | Generative AI & Data Science Enthusiast
              </p>
              <div className="mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" /> +91-6302311140
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" /> narendarlyagala4@gmail.com
                </span>
                <span>•</span>
                <a href="https://github.com/narendarlyagala4-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5" /> github.com/narendarlyagala4-ai
                </a>
                <span>•</span>
                <a href="https://linkedin.com/in/narendar-lyagala" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" /> linkedin.com/in/narendar-lyagala
                </a>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold text-white uppercase tracking-widest font-mono border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                Education
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <h3 className="font-display font-bold text-white text-base">
                      B.Tech in Computer Science and Engineering (AI & ML)
                    </h3>
                    <p className="text-zinc-400">JNTUH University College Of Engineering Manthani</p>
                  </div>
                  <div className="text-left sm:text-right mt-1 sm:mt-0 font-mono text-xs">
                    <span className="text-zinc-400">2023 – 2027</span>
                    <span className="text-cyan-400 font-bold ml-3">CGPA: 7.65 / 10</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <h3 className="font-display font-bold text-white text-base">Intermediate</h3>
                    <p className="text-zinc-400">Alphores Junior College</p>
                  </div>
                  <div className="font-mono text-xs text-cyan-400 font-bold">
                    97.9%
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <h3 className="font-display font-bold text-white text-base">Secondary School Certificate (SSC)</h3>
                    <p className="text-zinc-400">Telangana State Model School</p>
                  </div>
                  <div className="font-mono text-xs text-cyan-400 font-bold">
                    10.0 GPA
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold text-white uppercase tracking-widest font-mono border-b border-zinc-800 pb-2 mb-4">
                Technical Arsenal
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <strong className="text-white font-mono uppercase">Programming:</strong> Python, SQL
                </div>
                <div>
                  <strong className="text-white font-mono uppercase">AI / ML:</strong> AI, Machine Learning, Generative AI, LLMs, RAG, NLP
                </div>
                <div>
                  <strong className="text-white font-mono uppercase">Data Science:</strong> Data Analysis, ETL, Data Preprocessing, Data Visualization, Predictive Analytics
                </div>
                <div>
                  <strong className="text-white font-mono uppercase">Frameworks:</strong> LangChain, FAISS, FastAPI, React, TypeScript
                </div>
                <div className="sm:col-span-2">
                  <strong className="text-white font-mono uppercase">Databases & Tools:</strong> PostgreSQL, SQLAlchemy, Power BI, DAX, Docker, REST APIs, Scikit-learn
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-xs font-bold text-white uppercase tracking-widest font-mono border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                Featured Projects
              </h2>
              <div className="space-y-5">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-white text-base">
                        SentinelAI – Enterprise Operations Copilot
                      </h3>
                      <a
                        href="https://sentinel-ai-kq5i.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline inline-flex items-center gap-0.5"
                      >
                        [Live App ↗]
                      </a>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400">React, FastAPI, PostgreSQL, LangChain, FAISS, Docker</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400 text-xs font-light">
                    <li>Engineered an AI platform for unified enterprise operations and document knowledge access.</li>
                    <li>Implemented Retrieval-Augmented Generation (RAG) using FAISS dense vector search for conversational queries.</li>
                    <li>Built asynchronous FastAPI REST endpoints with authentication and SQLAlchemy database integration.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-display font-bold text-white text-base">
                      E-Commerce Business Intelligence Dashboard
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400">Python, SQL, Power BI, DAX, ETL</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400 text-xs font-light">
                    <li>Developed an end-to-end Python ETL pipeline transforming raw transaction data into a star-schema SQL warehouse.</li>
                    <li>Modeled advanced DAX measures analyzing sales, revenue, customer habits, and product viability.</li>
                    <li>Designed an interactive six-page Power BI executive report for business KPI tracking.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="font-display font-bold text-white text-base">
                      AI-Powered Customer Churn Prediction System
                    </h3>
                    <span className="text-[11px] font-mono text-cyan-400">Python, Pandas, Scikit-learn, Data Science</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400 text-xs font-light">
                    <li>Constructed an ML classification pipeline evaluating demographic, behavioral, and transactional churn patterns.</li>
                    <li>Performed preprocessing, EDA, feature engineering, and class imbalance mitigation strategies.</li>
                    <li>Evaluated classification performance using Accuracy, Precision, Recall, F1-Score, and ROC-AUC.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold text-white uppercase tracking-widest font-mono border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                Certifications
              </h2>
              <ul className="space-y-2.5 text-xs">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Generative AI & Data Science Workshop</strong> — JNTUH UCE Manthani</span>
                  </div>
                  <a
                    href="/certificates/generative-ai-data-science.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline ml-6 sm:ml-0 shrink-0"
                  >
                    [View Certificate ↗]
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Data Analytics Job Simulation</strong> — Deloitte (Forage)</span>
                  </div>
                  <a
                    href="/certificates/deloitte-data-analytics.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline ml-6 sm:ml-0 shrink-0"
                  >
                    [View Certificate ↗]
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Advanced Program in Emerging Technologies</strong> — Code Unnati (SAP & Edunet)</span>
                  </div>
                  <a
                    href="/certificates/advanced-emerging-technologies.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline ml-6 sm:ml-0 shrink-0"
                  >
                    [View PDF ↗]
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Data Science Job Simulation</strong> — British Airways (Forage)</span>
                  </div>
                  <a
                    href="/certificates/british-airways-data-science.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline ml-6 sm:ml-0 shrink-0"
                  >
                    [View PDF ↗]
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>GenAI Powered Data Analytics Job Simulation</strong> — Tata (Forage)</span>
                  </div>
                  <a
                    href="/certificates/tata-genai-data-analytics.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline ml-6 sm:ml-0 shrink-0"
                  >
                    [View PDF ↗]
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Databricks Accredited Generative AI Fundamentals</strong> — Databricks Academy</span>
                  </div>
                  <a
                    href="/certificates/databricks-generative-ai-fundamentals.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline ml-6 sm:ml-0 shrink-0"
                  >
                    [View PDF ↗]
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Data Visualisation: Empowering Business with Effective Insights</strong> — Tata (Forage)</span>
                  </div>
                  <a
                    href="/certificates/tata-data-visualisation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline ml-6 sm:ml-0 shrink-0"
                  >
                    [View PDF ↗]
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 border-t border-zinc-800 bg-[#121215] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-400">Narendar Lyagala • AI & ML Engineer</span>
              <a
                href="/resume/Narendar_Lyagala_Resume.pdf"
                download="Narendar_Lyagala_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline"
              >
                <Download className="w-3 h-3" />
                <span>Download Official PDF</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              {activeTab === 'web' && (
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PRINT</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-mono font-bold uppercase rounded-full bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
