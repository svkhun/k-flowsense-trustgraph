import React, { useState } from 'react';
import { Server, ArrowRight, Layers, Database, Cpu, Activity, Zap, CheckCircle2 } from 'lucide-react';

export default function ArchitecturePipeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Kafka Event Stream",
      sub: "Inbound Pre-Transaction Stream",
      latency: "< 2.0ms",
      desc: "รับคำสั่งโอนเงินทุก Transaction แบบ Event-driven Streaming ผ่าน Core Banking Gateway ด้วย Throughput ระดับหมื่น TPS",
      specs: ["High Throughput", "Zero Buffer Drop", "Event-Driven Stream"],
      icon: Activity
    },
    {
      num: "02",
      title: "Feast Feature Store",
      sub: "Low-Latency State Lookup",
      latency: "< 0.5ms",
      desc: "ดึง Node Embeddings (16-dim) และ Rolling-window lag features ย้อนหลังในระดับ Sub-millisecond จาก Redis Cache",
      specs: ["Redis O(1) Lookup", "16-dim Vectors", "Nearline Sync"],
      icon: Database
    },
    {
      num: "03",
      title: "R-GCN & LightGBM",
      sub: "Topology & Seasonality AI",
      latency: "2.1ms",
      desc: "R-GCN ตรวจจับโครงสร้างเครือข่ายบัญชีม้าและความเร็วหมุนเวียนเงิน แม้ไม่เคยถูก Blacklist ควบคู่กับ LightGBM คาดการณ์สภาพคล่อง 30 วัน",
      specs: ["Graph Neural Net", "Transaction Velocity", "Time-Series Seasonality"],
      icon: Cpu
    },
    {
      num: "04",
      title: "Triton Serving",
      sub: "Zero-Delay / Micro-Auth Gate",
      latency: "P99 11.6ms",
      desc: "ประมวลผลคำสั่งส่งต่อไปยัง Zero-Delay Baseline (ปกติ) หรือเปิด Micro-Auth 5s (วิกฤต) จบสมบูรณ์ภายใน 80ms SLA",
      specs: ["ONNX Runtime", "Core Banking SLA", "P99 < 11.62ms"],
      icon: Server
    }
  ];

  return (
    <section id="architecture" className="py-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>5. Data Science &amp; Implementation Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pipeline ประมวลผลแบบเรียลไทม์ความเร็วสูง (&lt; 80ms SLA)
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            สถาปัตยกรรมระดับ Core Banking ที่ผสาน Kafka Event Stream, Feast Feature Store, R-GCN, LightGBM, และ Triton Serving
          </p>
        </div>

        {/* 4 Pipeline Stages in High-Density Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`bento-card rounded-2xl p-5 flex flex-col justify-between space-y-4 cursor-pointer relative ${
                  isSelected ? 'bento-card-active' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-mono text-xs font-bold text-slate-400">STAGE {step.num}</span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded tabular-nums">
                      {step.latency}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">{step.title}</h3>
                      <div className="text-xs text-slate-400 font-mono">{step.sub}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{step.desc}</p>
                </div>

                {/* Spec Pills */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {step.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="text-[9px] font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 5 Table from Pitch Verbatim */}
        <div className="bento-card rounded-2xl p-6 sm:p-7 space-y-5 border border-white/10 bg-[#0B132B]/75 backdrop-blur-xl shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-emerald-400" />
                <span>Data Science Architecture &amp; Operational Objectives</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">โครงสร้างโมเดลและวัตถุประสงค์เชิงปฏิบัติการตามข้อกำหนด KBTG</p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded tracking-wider">
              BENCHMARK SLA &lt; 80MS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] font-mono tracking-wider text-slate-400 uppercase bg-black/40 border-b border-white/10">
                <tr>
                  <th className="py-3 px-4 w-1/4">Domain</th>
                  <th className="py-3 px-4 w-5/12">Method &amp; Architecture</th>
                  <th className="py-3 px-4 w-1/3">Operational Objective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">Cashflow Forecasting</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-mono text-xs">
                    LightGBM with rolling-window lag features &amp; transaction seasonality
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 leading-relaxed font-normal">
                    Forecasts safe liquidity margins 30 days ahead; suppresses alerts during normal dips.
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">Mule Account Graph</td>
                  <td className="py-3.5 px-4 text-cyan-300 font-mono text-xs">
                    Relational Graph Convolutional Networks (R-GCN)
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 leading-relaxed font-normal">
                    Detects mule accounts through topology and transaction velocity, even without prior blacklisting.
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">Serving &amp; Latency</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-mono text-xs">
                    Kafka event stream, Feast Feature Store, Triton Inference Server
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 leading-relaxed font-normal">
                    Delivers complete inference and scoring in under 80ms to match core banking requirements.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
