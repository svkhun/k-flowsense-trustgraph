import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, RotateCcw, ScanFace, Terminal } from 'lucide-react';

export default function Hero({ onOpenScamModal }) {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Monospace Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A950]"></span>
              <span>KBTG Kampus Hackathon 2026 • Track 2: Data Science</span>
            </div>

            {/* Controlled, Disciplined Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Autonomous Cashflow &amp; Graph-Based Fraud Defense for K PLUS
            </h1>

            {/* Concise Domain-Specific Thai Subtitle */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              สถาปัตยกรรมบริการทางการเงินที่ขจัด <strong>Budget Burnout</strong> และ <strong>Security Friction</strong> สำหรับคนเริ่มทำงาน (First Jobbers):
              คาดการณ์สภาพคล่องสิ้นเดือนด้วย <strong>Status Horizon Bar</strong>, กวาดเงินออมอัตโนมัติด้วย <strong>Micro-Sweep พร้อม 1-Tap Undo</strong> คืนเงิน 100% ทันทีไร้ค่าปรับ, 
              และปกป้องธุรกรรมด้วย <strong>TrustGraph Zero-Delay Baseline</strong> (ประมวลผลเร็ว &lt; 80ms) ไร้การหน่วงเวลา 15 นาทีตามอำเภอใจ
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/flowsense"
                className="inline-flex items-center justify-center gap-2 bg-[#00A950] hover:bg-[#008F43] text-white px-5 py-2.5 rounded-lg font-medium text-xs sm:text-sm border border-emerald-400/20 transition-colors duration-150 shadow-sm"
              >
                <span>สำรวจระบบ FlowSense</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenScamModal}
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-500 px-5 py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-colors duration-150"
              >
                <ScanFace className="w-4 h-4 text-zinc-400" />
                <span>จำลอง Micro-Auth (5s)</span>
              </button>

              <Link
                to="/app"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/10 px-5 py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-colors duration-150"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>เปิดแอปจำลอง (Simulator)</span>
              </Link>
            </div>

            {/* Technical Telemetry Strip */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="tech-label text-[10px] text-zinc-400">Baseline Inference</div>
                <div className="font-mono text-xs sm:text-sm font-semibold text-white mt-0.5">&lt; 80ms <span className="text-zinc-400 font-normal">(P99: 11.6ms)</span></div>
              </div>
              <div>
                <div className="tech-label text-[10px] text-zinc-400">Recall Guarantee</div>
                <div className="font-mono text-xs sm:text-sm font-semibold text-[#00A950] mt-0.5">1-Tap Undo <span className="text-zinc-400 font-normal">(100%)</span></div>
              </div>
              <div>
                <div className="tech-label text-[10px] text-zinc-400">Critical Anomaly</div>
                <div className="font-mono text-xs sm:text-sm font-semibold text-amber-400 mt-0.5">5.0s <span className="text-zinc-400 font-normal">Face Liveness</span></div>
              </div>
              <div>
                <div className="tech-label text-[10px] text-zinc-400">Arbitrary Delays</div>
                <div className="font-mono text-xs sm:text-sm font-semibold text-white mt-0.5">0 min <span className="text-zinc-400 font-normal">(No 15m Lock)</span></div>
              </div>
            </div>

          </div>

          {/* Right Column: Handcrafted Terminal Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="bento-card rounded-xl p-5 space-y-4 border-white/10">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                  <span className="tech-label text-zinc-400 ml-2">CORE-INFERENCE-TELEMETRY</span>
                </div>
                <span className="tech-label text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  ONLINE • K PLUS
                </span>
              </div>

              {/* Real-Time Telemetry Feed */}
              <div className="space-y-2.5 font-mono text-xs">
                
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                  <div className="flex justify-between text-zinc-400 text-[11px]">
                    <span>[INGESTION] Kafka Stream</span>
                    <span className="text-emerald-400">1.42ms</span>
                  </div>
                  <div className="text-zinc-200">TX_8921 // Amount: ฿450.00 // PromptPay QR</div>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                  <div className="flex justify-between text-zinc-400 text-[11px]">
                    <span>[FEATURE-STORE] Feast Redis Lookup</span>
                    <span className="text-emerald-400">0.38ms</span>
                  </div>
                  <div className="text-zinc-200">Node Embedding Vector: 16-dim // Cache Hit: O(1)</div>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                  <div className="flex justify-between text-zinc-400 text-[11px]">
                    <span>[MODEL] Triton ONNX (R-GCN + LightGBM)</span>
                    <span className="text-emerald-400">2.05ms</span>
                  </div>
                  <div className="text-zinc-300">
                    Mule Prob: <span className="text-emerald-400 font-bold">0.012 (Clean)</span> • Horizon Runway: <span className="text-emerald-400 font-bold">78%</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-zinc-200 font-bold">DECISION: ZERO-DELAY BASELINE</span>
                  </div>
                  <span className="text-emerald-400 font-bold">3.85ms Total</span>
                </div>

              </div>

              {/* Status Footer */}
              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
                <span>Core Banking Target: &lt; 80.00ms</span>
                <span className="text-zinc-300 font-mono">Headroom: +76.15ms (95.2%)</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
