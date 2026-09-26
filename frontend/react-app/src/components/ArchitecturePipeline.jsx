import React from 'react';
import { Server, ArrowRight, Layers, Database, Cpu, Activity } from 'lucide-react';

export default function ArchitecturePipeline() {
  const steps = [
    {
      num: "01",
      title: "Kafka Event Stream",
      sub: "Inbound Pre-Transaction Stream",
      latency: "< 2.0ms",
      desc: "รับคำสั่งโอนเงินทุก Transaction แบบ Event-driven Streaming ผ่าน Core Banking Gateway ด้วย Throughput ระดับหมื่น TPS",
      specs: ["High Throughput", "Zero Buffer Drop", "Event-Driven"]
    },
    {
      num: "02",
      title: "Feast Feature Store",
      sub: "Low-Latency State Lookup",
      latency: "< 0.5ms",
      desc: "ดึง Node Embeddings (16-dim) และ Rolling-window lag features ย้อนหลังในระดับ Sub-millisecond จาก Redis Cache",
      specs: ["Redis O(1) Lookup", "16-dim Vectors", "Nearline Sync"]
    },
    {
      num: "03",
      title: "R-GCN & LightGBM",
      sub: "Topology & Seasonality AI",
      latency: "2.1ms",
      desc: "R-GCN ตรวจจับโครงสร้างเครือข่ายบัญชีม้าและความเร็วหมุนเวียนเงิน แม้ไม่เคยถูก Blacklist ควบคู่กับ LightGBM คาดการณ์สภาพคล่อง 30 วัน",
      specs: ["Graph Neural Net", "Transaction Velocity", "Time-Series"]
    },
    {
      num: "04",
      title: "Triton Serving",
      sub: "Zero-Delay / Micro-Auth Gate",
      latency: "P99 11.6ms",
      desc: "ประมวลผลคำสั่งส่งต่อไปยัง Zero-Delay Baseline (ปกติ) หรือเปิด Micro-Auth 5s (วิกฤต) จบสมบูรณ์ภายใน 80ms SLA",
      specs: ["ONNX Runtime", "Core Banking SLA", "P99 < 11.62ms"]
    }
  ];

  return (
    <section id="architecture" className="py-16 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>5. Data Science &amp; Implementation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Pipeline ประมวลผลแบบเรียลไทม์ความเร็วสูง (&lt; 80ms SLA)
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            สถาปัตยกรรมระดับ Core Banking ที่ผสาน Kafka Event Stream, Feast Feature Store, R-GCN, LightGBM, และ Triton Serving
          </p>
        </div>

        {/* 4 Pipeline Stages in High-Density Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="bento-card rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-zinc-400">STAGE {step.num}</span>
                  <span className="tech-label text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {step.latency}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">{step.title}</h3>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">{step.sub}</div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>

              {/* Spec Pills */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {step.specs.map((spec, sIdx) => (
                  <span key={sIdx} className="tech-label text-[9px] text-zinc-400 bg-white/[0.03] px-1.5 py-0.5 rounded border border-white/5">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section 5 Table from Pitch Verbatim */}
        <div className="bento-card rounded-xl p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.08]">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Server className="w-4 h-4 text-emerald-400" />
                <span>Data Science Architecture &amp; Operational Objectives</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">โครงสร้างโมเดลและวัตถุประสงค์เชิงปฏิบัติการตามข้อกำหนด KBTG</p>
            </div>
            <span className="tech-label text-xs text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
              BENCHMARK SLA &lt; 80MS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="tech-label text-[10px] text-zinc-400 bg-black/40 border-b border-white/10">
                <tr>
                  <th className="py-2.5 px-4 w-1/4">Domain</th>
                  <th className="py-2.5 px-4 w-5/12">Method &amp; Architecture</th>
                  <th className="py-2.5 px-4 w-1/3">Operational Objective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-semibold text-white">Cashflow Forecasting</td>
                  <td className="py-3 px-4 text-emerald-400 font-mono text-xs">
                    LightGBM with rolling-window lag features &amp; transaction seasonality
                  </td>
                  <td className="py-3 px-4 text-zinc-300">
                    Forecasts safe liquidity margins 30 days ahead; suppresses alerts during normal dips.
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-semibold text-white">Mule Account Graph</td>
                  <td className="py-3 px-4 text-zinc-200 font-mono text-xs">
                    Relational Graph Convolutional Networks (R-GCN)
                  </td>
                  <td className="py-3 px-4 text-zinc-300">
                    Detects mule accounts through topology and transaction velocity, even without prior blacklisting.
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-semibold text-white">Serving &amp; Latency</td>
                  <td className="py-3 px-4 text-emerald-400 font-mono text-xs">
                    Kafka event stream, Feast Feature Store, Triton Inference Server
                  </td>
                  <td className="py-3 px-4 text-zinc-300">
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
