import React from 'react';
import { ShieldCheck, Cpu, Database, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#03060E] border-t border-white/10 text-slate-400 text-xs py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm text-white tracking-tight">
                FlowSense &amp; TrustGraph Enterprise
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                KBTG 2026
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              ระบบสถาปัตยกรรมจัดการสภาพคล่องและสกัดกั้นบัญชีม้าความเร็วสูงระดับ Core Banking ออกแบบเฉพาะสำหรับ K PLUS
            </p>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-slate-300">Kafka Stream</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-slate-300">Feast Redis</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-slate-300">R-GCN</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-slate-300">LightGBM</span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">Triton ONNX</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 K-FlowSense &amp; TrustGraph. Designed for KBTG Hackathon Innovation Showcase.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/" className="hover:text-emerald-400 transition-colors">Overview</Link>
            <Link to="/flowsense" className="hover:text-emerald-400 transition-colors">FlowSense</Link>
            <Link to="/trustgraph" className="hover:text-emerald-400 transition-colors">TrustGraph</Link>
            <Link to="/architecture" className="hover:text-emerald-400 transition-colors">Architecture</Link>
            <Link to="/app" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">Launch Simulator</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
