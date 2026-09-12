import React from 'react';
import { Bot, User, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export const CopilotPreview: React.FC = () => {
  return (
    <div className="w-full rounded-xl bg-[#0d0f17] border border-white/10 p-4 font-sans text-xs text-zinc-300 shadow-inner overflow-hidden">
      {/* Window Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="ml-1 text-zinc-400 font-mono">SentinelAI Enterprise Copilot</span>
        </div>
        <a
          href="https://sentinel-ai-kq5i.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono hover:bg-emerald-500/20 transition-colors cursor-pointer"
          title="Open Live Deployment"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>sentinel-ai.onrender.com ↗</span>
        </a>
      </div>

      {/* Query message */}
      <div className="flex items-start gap-2.5 mb-3">
        <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
          <User className="w-3.5 h-3.5" />
        </div>
        <div className="rounded-lg rounded-tl-none bg-white/5 border border-white/10 p-2.5 text-zinc-200">
          <p className="font-medium">What are the escalation protocols for tier-1 service interruptions?</p>
        </div>
      </div>

      {/* RAG Context Retrieval Banner */}
      <div className="ml-8 mb-3 p-2 rounded-lg bg-sky-950/40 border border-sky-500/30 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5 text-sky-300">
          <FileText className="w-3 h-3" />
          <span>Retrieved 2 context chunks from <strong>Ops_Protocol_2024.pdf</strong></span>
        </div>
        <span className="text-zinc-400 font-mono">Sim: 0.942</span>
      </div>

      {/* Copilot Response */}
      <div className="flex items-start gap-2.5">
        <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0 mt-0.5">
          <Bot className="w-3.5 h-3.5" />
        </div>
        <div className="rounded-lg rounded-tl-none bg-white/5 border border-white/10 p-2.5 text-zinc-300 space-y-1.5">
          <div className="flex items-center gap-1 text-sky-400 font-semibold text-[11px]">
            <Sparkles className="w-3 h-3" />
            <span>SentinelAI Grounded Synthesis</span>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Per standard operational handbook guidelines:
          </p>
          <ul className="space-y-1 pl-1">
            <li className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
              <span><strong>Notify On-Call Lead:</strong> Dispatch alert within 5 minutes.</span>
            </li>
            <li className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
              <span><strong>Status Page Update:</strong> Post incident identifier to internal stakeholders.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
