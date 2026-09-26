import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 bg-[#07080C] border-t border-white/[0.08] text-center text-xs text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 space-y-3">
        <div className="flex items-center justify-center gap-2 text-white font-bold text-sm tracking-tight">
          <span>FlowSense</span>
          <span className="text-zinc-600 font-light">&amp;</span>
          <span className="text-[#00A950]">TrustGraph</span>
          <span className="tech-label text-[10px] bg-white/[0.04] text-zinc-400 border border-white/10 px-1.5 py-0.5 rounded">
            K PLUS
          </span>
        </div>
        <p className="text-zinc-400">
          นวัตกรรมบริการทางการเงินและการสกัดกั้นบัญชีม้าสำหรับงาน KBTG Kampus Hackathon 2026 • Track 2: Data Science &amp; Intelligence
        </p>
        <p className="tech-label text-[10px] text-zinc-400">
          Built with React 18 • Vite • Tailwind CSS • Triton &amp; Feast Architecture
        </p>
      </div>
    </footer>
  );
}
