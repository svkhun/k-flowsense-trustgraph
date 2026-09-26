import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, RotateCcw, ScanFace, Terminal } from 'lucide-react';

export default function Hero({ onOpenScamModal }) {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Monospace Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 tech-label text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>KBTG Kampus Hackathon 2026 • Track 2: Data Science</span>
            </div>

            {/* Slender, Disciplined Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-slate-900 leading-[1.2]">
              Autonomous Cashflow &amp; Graph-Based Fraud Defense for K PLUS
            </h1>

            {/* Direct, Domain-Specific Explanation */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              สถาปัตยกรรมบริการทางการเงินสำหรับฐานผู้ใช้งาน First Jobber บน K PLUS:
              วิเคราะห์สภาพคล่องสุทธิถึงวันเงินเดือนออกด้วย <span className="text-slate-900 font-medium">Status Horizon Bar</span>, 
              กวาดเงินออมอัตโนมัติด้วย <span className="text-slate-900 font-medium">Micro-Sweep</span> พร้อมปุ่ม <span className="text-slate-900 font-medium">1-Tap Undo</span> คืนเงิน 100% ทันทีไร้ค่าปรับ, 
              และตรวจสอบความเสี่ยงธุรกรรมด้วย <span className="text-slate-900 font-medium">TrustGraph Zero-Delay Baseline</span> (Inference &lt; 80ms) ปกป้องตรงจุดโดยไม่สร้าง Security Friction
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/flowsense"
                className="inline-flex items-center justify-center gap-2 bg-[#064E3B] hover:bg-[#022C22] text-white px-5 py-2.5 rounded-lg font-medium text-sm shadow-sm transition-colors duration-150"
              >
                <span>สำรวจระบบ FlowSense</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenScamModal}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 px-5 py-2.5 rounded-lg font-medium text-sm shadow-xs transition-colors duration-150"
              >
                <ScanFace className="w-4 h-4 text-slate-500" />
                <span>จำลอง Micro-Auth (5s)</span>
              </button>

              <Link
                to="/app"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/70 text-slate-800 border border-slate-200 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors duration-150"
              >
                <Terminal className="w-4 h-4 text-emerald-700" />
                <span>เปิดแอปจำลอง (Simulator)</span>
              </Link>
            </div>

            {/* Technical Telemetry Strip */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="tech-label text-[10px] text-slate-500">Baseline Inference</div>
                <div className="font-mono text-sm sm:text-base font-semibold text-slate-900 mt-1 tabular-nums">&lt; 80ms <span className="text-slate-500 font-normal text-xs">(P99: 11.6ms)</span></div>
              </div>
              <div>
                <div className="tech-label text-[10px] text-slate-500">Recall Guarantee</div>
                <div className="font-mono text-sm sm:text-base font-semibold text-emerald-800 mt-1 tabular-nums">1-Tap Undo <span className="text-slate-500 font-normal text-xs">(100%)</span></div>
              </div>
              <div>
                <div className="tech-label text-[10px] text-slate-500">Critical Anomaly</div>
                <div className="font-mono text-sm sm:text-base font-semibold text-amber-700 mt-1 tabular-nums">5.0s <span className="text-slate-500 font-normal text-xs">Face Liveness</span></div>
              </div>
              <div>
                <div className="tech-label text-[10px] text-slate-500">Arbitrary Delays</div>
                <div className="font-mono text-sm sm:text-base font-semibold text-slate-900 mt-1 tabular-nums">0 min <span className="text-slate-500 font-normal text-xs">(No 15m Lock)</span></div>
              </div>
            </div>

          </div>

          {/* Right Column: Handcrafted Terminal Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="bento-card rounded-xl p-5 sm:p-6 space-y-4">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="tech-label text-slate-500 ml-2 text-[10px]">CORE-INFERENCE-TELEMETRY</span>
                </div>
                <span className="tech-label text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px]">
                  ONLINE • K PLUS
                </span>
              </div>

              {/* Real-Time Telemetry Feed */}
              <div className="space-y-2.5 font-mono text-xs">
                
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 space-y-1">
                  <div className="flex justify-between text-slate-500 text-[11px]">
                    <span>[INGESTION] Kafka Stream</span>
                    <span className="text-emerald-700 font-medium">1.42ms</span>
                  </div>
                  <div className="text-slate-800">TX_8921 // Amount: ฿450.00 // PromptPay QR</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 space-y-1">
                  <div className="flex justify-between text-slate-500 text-[11px]">
                    <span>[FEATURE-STORE] Feast Redis Lookup</span>
                    <span className="text-emerald-700 font-medium">0.38ms</span>
                  </div>
                  <div className="text-slate-800">Node Embedding Vector: 16-dim // Cache Hit: O(1)</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 space-y-1">
                  <div className="flex justify-between text-slate-500 text-[11px]">
                    <span>[MODEL] Triton ONNX (R-GCN + LightGBM)</span>
                    <span className="text-emerald-700 font-medium">2.05ms</span>
                  </div>
                  <div className="text-slate-700">
                    Mule Prob: <span className="text-emerald-700 font-semibold">0.012 (Clean)</span> • Horizon Runway: <span className="text-emerald-700 font-semibold">78%</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="text-emerald-950 font-semibold text-xs">DECISION: ZERO-DELAY BASELINE</span>
                  </div>
                  <span className="text-emerald-800 font-semibold font-mono text-xs">3.85ms Total</span>
                </div>

              </div>

              {/* Status Footer */}
              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>Core Banking Target: &lt; 80.00ms</span>
                <span className="text-slate-700 font-mono">Headroom: +76.15ms (95.2%)</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
