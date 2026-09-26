import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, ShieldAlert, Zap, RotateCcw, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenScamModal }) {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              <span>KBTG Kampus Hackathon 2026 — Track 2: Data Science &amp; Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              FlowSense <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A950] via-emerald-400 to-teal-300">
                &amp; TrustGraph
              </span>
            </h1>

            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-emerald-400">
                Frictionless Cashflow &amp; Target-Specific Fraud Defense for K PLUS
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                บอกลา <strong>Budget Burnout</strong> และ <strong>Security Friction</strong> ที่ทำให้คนรุ่นใหม่รำคาญจนลบแอป! 
                ด้วย <strong>Status Horizon Bar</strong> ตัวชี้วัดเดียวที่มองเห็นสภาพคล่องสิ้นเดือน, <strong>Micro-Sweep พร้อม 1-Tap Undo</strong> คืนเงิน 100% ทันทีไร้ค่าปรับ 
                และเกราะ <strong>TrustGraph</strong> ที่โอนเงินปกติเร็วกว่า 80ms ไร้การหน่วงเวลา 15 นาทีตามอำเภอใจ
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/flowsense"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00A950] to-[#059669] hover:from-[#008F43] hover:to-[#047857] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-xl shadow-emerald-500/30 transition-all hover:scale-105"
              >
                <Compass className="w-5 h-5" />
                <span>สำรวจฟีเจอร์ FlowSense</span>
              </Link>

              <button
                onClick={onOpenScamModal}
                className="inline-flex items-center justify-center gap-2.5 bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-white/10 hover:border-rose-500/40 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-105"
              >
                <ShieldAlert className="w-5 h-5 text-rose-400" />
                <span>ทดสอบ TrustGraph Micro-Auth</span>
              </button>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Zero-Delay Baseline (SLA <strong>&lt; 80ms</strong>)</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-teal-400" />
                <span>Micro-Sweep <strong>1-Tap Undo 100%</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Micro-Auth <strong>5s</strong> (No 15-min lock)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#00A950]/30 to-emerald-500/20 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900/90">
                <img
                  src="/static/img/hero_fintech_phones.jpg"
                  alt="FlowSense & TrustGraph for K PLUS"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 bg-slate-900/95 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-semibold text-white">TrustGraph &amp; FlowSense Live</span>
                  </div>
                  <span className="font-mono text-emerald-400">Inference &lt; 80ms</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
