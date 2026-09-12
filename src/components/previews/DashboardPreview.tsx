import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Users, ShoppingBag, Layers } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full rounded-xl bg-[#0b0f19] border border-white/10 p-4 font-sans text-xs text-zinc-300 shadow-inner overflow-hidden">
      {/* Top Header & Page indicator */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[11px]">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-amber-500/20 text-amber-400">
            <BarChart3 className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-zinc-200">Power BI Enterprise BI Suite</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-zinc-400">
          <Layers className="w-3 h-3 text-sky-400" />
          <span>Interactive Model • 6-Page Suite</span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
            <span>Sales Revenue</span>
            <DollarSign className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="font-bold text-sm text-white font-mono">$1.42M</div>
          <span className="text-[9px] text-emerald-400 flex items-center gap-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> +18.4% YoY
          </span>
        </div>

        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
            <span>Order Volume</span>
            <ShoppingBag className="w-3 h-3 text-sky-400" />
          </div>
          <div className="font-bold text-sm text-white font-mono">28,450</div>
          <span className="text-[9px] text-sky-400">Transactions</span>
        </div>

        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
            <span>Active Customers</span>
            <Users className="w-3 h-3 text-indigo-400" />
          </div>
          <div className="font-bold text-sm text-white font-mono">14,890</div>
          <span className="text-[9px] text-indigo-400">Retention: 74%</span>
        </div>

        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
            <span>Avg Margin</span>
            <TrendingUp className="w-3 h-3 text-purple-400" />
          </div>
          <div className="font-bold text-sm text-white font-mono">32.8%</div>
          <span className="text-[9px] text-purple-400">DAX Optimized</span>
        </div>
      </div>

      {/* Visual Chart & Category Distribution */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-3">
        {/* SVG Revenue Chart */}
        <div className="sm:col-span-8 p-3 rounded-lg bg-white/5 border border-white/5">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-2">
            <span>Revenue Trajectory & Sales Trend</span>
            <span className="font-mono text-emerald-400">Monthly Run Rate</span>
          </div>
          <div className="h-20 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 300 80" fill="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 65 Q 40 50, 75 55 T 150 35 T 225 40 T 300 15 L 300 80 L 0 80 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M 0 65 Q 40 50, 75 55 T 150 35 T 225 40 T 300 15"
                stroke="#38bdf8"
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="300" cy="15" r="3.5" fill="#38bdf8" />
              <circle cx="150" cy="35" r="2.5" fill="#818cf8" />
            </svg>
          </div>
        </div>

        {/* Product Performance Breakdown */}
        <div className="sm:col-span-4 p-3 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-between">
          <span className="text-[10px] text-zinc-400 mb-1.5 block">Product Category Split</span>
          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between text-[10px] text-zinc-300 mb-0.5">
                <span>Electronics</span>
                <span>44%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-sky-400" style={{ width: '44%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-zinc-300 mb-0.5">
                <span>Apparel</span>
                <span>31%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-indigo-400" style={{ width: '31%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-zinc-300 mb-0.5">
                <span>Home Goods</span>
                <span>25%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-purple-400" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DAX Formula Snippet */}
      <div className="p-2 rounded bg-black/40 border border-white/5 font-mono text-[10px] text-zinc-400 flex items-center justify-between">
        <span className="text-amber-300/90">DAX: YoY_Growth = DIVIDE([Total_Revenue] - [Revenue_LY], [Revenue_LY])</span>
        <span className="text-zinc-500">ETL → Star Schema</span>
      </div>
    </div>
  );
};
