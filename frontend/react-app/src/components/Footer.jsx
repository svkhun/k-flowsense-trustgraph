import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-50 border-t border-slate-200/80 text-center text-xs text-slate-500 transition-colors">
      <div className="max-w-7xl mx-auto px-4 space-y-3">
        <div className="flex items-center justify-center gap-2 text-slate-900 font-semibold text-sm tracking-tight">
          <span>FlowSense</span>
          <span className="text-slate-400 font-light">&amp;</span>
          <span className="text-[#064E3B]">TrustGraph</span>
          <span className="tech-label text-[10px] bg-white text-slate-600 border border-slate-200 px-2 py-0.5 rounded tracking-wider">
            K PLUS
          </span>
        </div>
        <p className="text-slate-600 font-normal">
          นวัตกรรมบริการทางการเงินและการสกัดกั้นบัญชีม้าสำหรับงาน KBTG Kampus Hackathon 2026 • Track 2: Data Science &amp; Intelligence
        </p>
        <p className="tech-label text-[10px] text-slate-400">
          Built with React 18 • Vite • Tailwind CSS • Triton &amp; Feast Architecture
        </p>
      </div>
    </footer>
  );
}
