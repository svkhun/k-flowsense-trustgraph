import React from 'react';
import { Cpu, Server, Database, Zap, ShieldCheck } from 'lucide-react';

export default function ArchitecturePipeline() {
  const steps = [
    {
      num: "01",
      title: "Kafka Event Stream",
      subtitle: "Inbound Pre-Transaction Stream",
      desc: "รับคำสั่งโอนเงินทุก Transaction แบบ Event-driven Streaming Throughput สูงจาก K PLUS Core Banking",
      tag: "< 2ms Latency"
    },
    {
      num: "02",
      title: "Feast Feature Store",
      subtitle: "Low-Latency State Lookup",
      desc: "ดึง Node Embeddings และ Rolling-window lag features ย้อนหลังในระดับ Sub-millisecond จาก Redis Cache",
      tag: "O(1) Redis Lookup"
    },
    {
      num: "03",
      title: "R-GCN & LightGBM",
      subtitle: "Topology & Seasonality AI",
      desc: "ตรวจจับเครือข่ายบัญชีม้าด้วย Topology & Velocity แม้ไม่เคยถูก Blacklist มาก่อน พร้อมคาดการณ์สภาพคล่อง 30 วัน",
      tag: "Graph Neural Net"
    },
    {
      num: "04",
      title: "Triton Inference Server",
      subtitle: "Zero-Delay / Micro-Auth",
      desc: "ส่งผลลัพธ์คัดกรอง Zero-Delay Baseline (ปกติ) หรือกระตุ้น Micro-Auth 5s (วิกฤต) จบสมบูรณ์ภายใน 80ms",
      tag: "P99 < 11.62ms"
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-[#0E1524]/40 border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>สถาปัตยกรรมข้อมูลระดับอุตสาหกรรมธนาคาร (Production ML Architecture)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Pipeline ประมวลผลแบบเรียลไทม์ความเร็วสูง (&lt; 80ms)
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            ผสาน Kafka Event Stream, Feast Feature Store, และ Triton Inference Server เพื่อส่งมอบ Zero-Delay Baseline และ Micro-Auth ตามมาตรฐาน Core Banking
          </p>
        </div>

        {/* 4 Pipeline Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-6 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-[#00A950] opacity-80">{step.num}</span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-emerald-500/20">
                    {step.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-xs font-semibold text-emerald-400 mb-2">{step.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 5 Table from Pitch Verbatim */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-5 border-blue-500/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-400" />
                <span>5. Data Science &amp; Implementation (ตารางสถาปัตยกรรมโมเดล)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">สรุป Domain, Method &amp; Architecture และ Operational Objective</p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
              SLA &lt; 80ms Benchmark
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="uppercase text-[11px] text-slate-400 bg-slate-900/80 border-b border-white/10 font-bold">
                <tr>
                  <th className="py-3 px-4 w-1/4">Domain</th>
                  <th className="py-3 px-4 w-5/12">Method &amp; Architecture</th>
                  <th className="py-3 px-4 w-1/3">Operational Objective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3.5 px-4 font-bold text-white">Cashflow Forecasting</td>
                  <td className="py-3.5 px-4 text-emerald-300 font-mono text-xs">
                    LightGBM with rolling-window lag features &amp; transaction seasonality
                  </td>
                  <td className="py-3.5 px-4 text-slate-200">
                    Forecasts safe liquidity margins 30 days ahead; suppresses alerts during normal dips.
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3.5 px-4 font-bold text-white">Mule Account Graph</td>
                  <td className="py-3.5 px-4 text-purple-300 font-mono text-xs">
                    Relational Graph Convolutional Networks (R-GCN)
                  </td>
                  <td className="py-3.5 px-4 text-slate-200">
                    Detects mule accounts through topology and transaction velocity, even without prior blacklisting.
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3.5 px-4 font-bold text-white">Serving &amp; Latency</td>
                  <td className="py-3.5 px-4 text-cyan-300 font-mono text-xs">
                    Kafka event stream, Feast Feature Store, Triton Inference Server
                  </td>
                  <td className="py-3.5 px-4 text-slate-200">
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
