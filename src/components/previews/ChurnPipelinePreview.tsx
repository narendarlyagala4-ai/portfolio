import React from 'react';
import { Database, Filter, Search, Wrench, Cpu, CheckCircle, AlertTriangle } from 'lucide-react';

const pipelineSteps = [
  { name: 'Raw Data', icon: Database },
  { name: 'Preprocessing', icon: Filter },
  { name: 'EDA', icon: Search },
  { name: 'Feature Eng.', icon: Wrench },
  { name: 'Model Training', icon: Cpu },
  { name: 'Evaluation', icon: CheckCircle },
  { name: 'Churn Prediction', icon: AlertTriangle }
];

const evaluationMetrics = [
  { label: 'Accuracy', tag: 'High Baseline' },
  { label: 'Precision', tag: 'Minimized False Positives' },
  { label: 'Recall', tag: 'Maximized Churn Capture' },
  { label: 'F1-Score', tag: 'Harmonic Balance' },
  { label: 'ROC-AUC', tag: 'Discriminative Power' }
];

export const ChurnPipelinePreview: React.FC = () => {
  return (
    <div className="w-full rounded-xl bg-[#0d1117] border border-white/10 p-4 font-sans text-xs text-zinc-300 shadow-inner overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[11px]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
          <span className="font-semibold text-zinc-200">End-to-End Scikit-learn Pipeline</span>
        </div>
        <span className="font-mono text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
          Supervised Classification
        </span>
      </div>

      {/* Visual Pipeline Stepper */}
      <div className="mb-4">
        <span className="text-[10px] font-mono text-zinc-400 block mb-2 uppercase tracking-wider">
          ML Architecture Pipeline
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            const isTarget = idx === pipelineSteps.length - 1;
            return (
              <div
                key={step.name}
                className={`p-2 rounded-lg border flex flex-col items-center text-center transition-all ${
                  isTarget
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                    : 'bg-white/5 border-white/5 text-zinc-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 mb-1 ${isTarget ? 'text-rose-400' : 'text-sky-400'}`} />
                <span className="text-[10px] font-medium leading-tight">{step.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Evaluation Metrics Chips */}
      <div className="mb-3 p-2.5 rounded-lg bg-white/5 border border-white/5">
        <span className="text-[10px] font-mono text-zinc-400 block mb-2 uppercase tracking-wider">
          Model Evaluation Metrics
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {evaluationMetrics.map((m) => (
            <div key={m.label} className="p-2 rounded bg-black/40 border border-white/5">
              <span className="text-[10px] font-bold text-white block">{m.label}</span>
              <span className="text-[9px] text-emerald-400">{m.tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Output Simulation Pill */}
      <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/50 border border-white/10 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-zinc-300">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          <span>Customer ID: #48291 — Risk Classification:</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold">
          High Attrition Risk
        </span>
      </div>
    </div>
  );
};
