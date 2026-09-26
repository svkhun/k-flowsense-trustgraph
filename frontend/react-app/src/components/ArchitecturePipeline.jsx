import React, { useState } from 'react';
import { Server, ArrowRight, Layers, Database, Cpu, Activity, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ArchitecturePipeline({ showHeader = true }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Kafka Event Stream",
      sub: "Inbound Pre-Transaction Stream",
      latency: "< 2.0ms",
      desc: "รับคำสั่งโอนเงินทุก Transaction แบบ Event-driven Streaming ผ่าน Core Banking Gateway ด้วย Throughput ระดับหมื่น TPS",
      specs: ["High Throughput", "Zero Buffer Drop", "Event-Driven Stream"],
      icon: Activity,
      details: {
        engine: "Apache Kafka Distributed Broker",
        throughput: "18,500 TPS Peak Capacity",
        guarantee: "At-Least-Once Ingestion with Zero Data Drop",
        flow: "K PLUS Inbound Event ➔ Partition by Account Hash ➔ Sub-2ms Stream Handoff"
      }
    },
    {
      num: "02",
      title: "Feast Feature Store",
      sub: "Low-Latency State Lookup",
      latency: "< 0.5ms",
      desc: "ดึง Node Embeddings (16-dim) และ Rolling-window lag features ย้อนหลังในระดับ Sub-millisecond จาก Redis Cache",
      specs: ["Redis O(1) Lookup", "16-dim Vectors", "Nearline Sync"],
      icon: Database,
      details: {
        engine: "Feast on Managed Redis In-Memory Cluster",
        throughput: "< 0.38ms Median Query Latency",
        guarantee: "O(1) Constant Time Retrieval for 40M+ Accounts",
        flow: "16-dim Graph Embeddings + 30-Day Velocity Features Loaded in Parallel"
      }
    },
    {
      num: "03",
      title: "R-GCN & LightGBM",
      sub: "Topology & Seasonality AI",
      latency: "2.1ms",
      desc: "R-GCN ตรวจจับโครงสร้างเครือข่ายบัญชีม้าและความเร็วหมุนเวียนเงิน แม้ไม่เคยถูก Blacklist ควบคู่กับ LightGBM คาดการณ์สภาพคล่อง 30 วัน",
      specs: ["Graph Neural Net", "Transaction Velocity", "Time-Series Seasonality"],
      icon: Cpu,
      details: {
        engine: "Dual AI: PyTorch Geometric R-GCN + LightGBM C++",
        throughput: "2.05ms Combined Dual Inference",
        guarantee: "Graph Ring Detection (<24s velocity) + 30D Cashflow Margin",
        flow: "Graph Embeddings Scoring ➔ Time-Series Liquidity Projection ➔ Anomaly Evaluation"
      }
    },
    {
      num: "04",
      title: "Triton Serving",
      sub: "Zero-Delay / Micro-Auth Gate",
      latency: "P99 11.6ms",
      desc: "ประมวลผลคำสั่งส่งต่อไปยัง Zero-Delay Baseline (ปกติ) หรือเปิด Micro-Auth 5s (วิกฤต) จบสมบูรณ์ภายใน 80ms SLA",
      specs: ["ONNX Runtime", "Core Banking SLA", "P99 < 11.62ms"],
      icon: Server,
      details: {
        engine: "NVIDIA Triton Inference Server (ONNX Engine)",
        throughput: "P50: 3.85ms • P95: 5.11ms • P99: 11.62ms",
        guarantee: "7x Faster than 80ms Core Banking SLA Target",
        flow: "Decision Gate ➔ Route to Zero-Delay Baseline (99.2%) or 5s Micro-Auth (0.8%)"
      }
    }
  ];

  const currentStep = steps[activeStep];
  const CurrentIcon = currentStep.icon;

  return (
    <section className="space-y-8 relative">
      
      {/* Optional Header (hidden when ArchitecturePage provides its own unified header) */}
      {showHeader && (
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>5. Data Science &amp; Implementation Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-[1.4] pb-1">
            Pipeline ประมวลผลแบบเรียลไทม์ความเร็วสูง (&lt; 80ms SLA)
          </h2>
          <p className="text-sm text-slate-300 leading-[1.85] font-normal pt-1">
            สถาปัตยกรรมระดับ Core Banking ที่ผสาน Kafka Event Stream, Feast Feature Store, R-GCN, LightGBM, และ Triton Serving
          </p>
        </div>
      )}

      {/* 4 Pipeline Stages in High-Density Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`bento-card rounded-2xl p-5 flex flex-col justify-between space-y-4 cursor-pointer relative transition-all duration-200 ${
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
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold'
                      : 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{step.title}</h3>
                    <div className="text-[11px] text-slate-400 font-mono">{step.sub}</div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-[1.8] font-normal">{step.desc}</p>
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

      {/* Interactive Active Stage Deep-Dive Inspector */}
      <div className="bento-card rounded-2xl p-5 sm:p-6 border border-emerald-500/30 bg-[#070B17]/90 space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <CurrentIcon className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm sm:text-base font-bold text-white">
              Stage {currentStep.num} Deep-Dive Inspector: <span className="text-emerald-400">{currentStep.title}</span>
            </h4>
          </div>
          <span className="text-[10px] font-mono text-slate-400">คลิกการ์ด Stage ด้านบนเพื่อสลับดูรายละเอียดเชิงลึก</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-slate-400 text-[10px] block uppercase">ENGINE / COMPONENT</span>
            <div className="text-slate-200 font-semibold">{currentStep.details.engine}</div>
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-slate-400 text-[10px] block uppercase">THROUGHPUT &amp; LATENCY</span>
            <div className="text-emerald-300 font-semibold">{currentStep.details.throughput}</div>
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-slate-400 text-[10px] block uppercase">PRODUCTION GUARANTEE</span>
            <div className="text-slate-200 font-semibold">{currentStep.details.guarantee}</div>
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-slate-400 text-[10px] block uppercase">DATA FLOW TRACE</span>
            <div className="text-cyan-300 font-semibold text-[11px]">{currentStep.details.flow}</div>
          </div>
        </div>
      </div>

      {/* Section 5 Table from Pitch Verbatim */}
      <div className="bento-card rounded-2xl p-5 sm:p-7 space-y-5 border border-white/10 bg-[#0B132B]/75 backdrop-blur-xl shadow-xl">
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
                <td className="py-3.5 px-4 text-slate-300 leading-[1.8] font-normal">
                  Forecasts safe liquidity margins 30 days ahead; suppresses alerts during normal dips.
                </td>
              </tr>
              <tr className="hover:bg-white/[0.03] transition-colors">
                <td className="py-3.5 px-4 font-bold text-white">Mule Account Graph</td>
                <td className="py-3.5 px-4 text-cyan-300 font-mono text-xs">
                  Relational Graph Convolutional Networks (R-GCN)
                </td>
                <td className="py-3.5 px-4 text-slate-300 leading-[1.8] font-normal">
                  Detects mule accounts through topology and transaction velocity, even without prior blacklisting.
                </td>
              </tr>
              <tr className="hover:bg-white/[0.03] transition-colors">
                <td className="py-3.5 px-4 font-bold text-white">Serving &amp; Latency</td>
                <td className="py-3.5 px-4 text-emerald-400 font-mono text-xs">
                  Kafka event stream, Feast Feature Store, Triton Inference Server
                </td>
                <td className="py-3.5 px-4 text-slate-300 leading-[1.8] font-normal">
                  Delivers complete inference and scoring in under 80ms to match core banking requirements.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
