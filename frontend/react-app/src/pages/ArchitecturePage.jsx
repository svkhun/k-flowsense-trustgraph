import React, { useState } from 'react';
import ArchitecturePipeline from '../components/ArchitecturePipeline';
import { ArrowRight, Cpu, Layers, Database, Server, Zap, CheckCircle2, Activity, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Velaris from '../components/ui/velaris';
import ScrollReveal from '../components/ScrollReveal';

export default function ArchitecturePage() {
  const [loadScenario, setLoadScenario] = useState('normal'); // 'normal' | 'peak' | 'cluster'

  const loadMetrics = {
    normal: {
      tps: '3,200 TPS',
      latency: '3.85 ms',
      memory: '4.2 GB / 64 GB',
      bufferDrop: '0.00%',
      headroom: '95.2% Headroom',
      status: 'Optimal Baseline'
    },
    peak: {
      tps: '18,500 TPS',
      latency: '8.42 ms',
      memory: '12.8 GB / 64 GB',
      bufferDrop: '0.00%',
      headroom: '89.5% Headroom',
      status: 'Payday Surge Verified'
    },
    cluster: {
      tps: '11,200 TPS',
      latency: '11.62 ms (P99)',
      memory: '16.4 GB / 64 GB',
      bufferDrop: '0.00%',
      headroom: '85.5% Headroom',
      status: 'Mule Cluster Handled'
    }
  };

  const currentMetrics = loadMetrics[loadScenario];

  const scrollToContent = () => {
    document.getElementById('architecture-workspace')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* ========================================================================= */}
      {/* 1. EXPANSIVE HERO HEADER (Living WebGL Atmosphere)                        */}
      {/* ========================================================================= */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        
        {/* Full Viewport Velaris WebGL Canvas Background */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <Velaris
            bg="#070B12"
            colors={["#38BDF8", "#10B981", "#059669", "#070B12"]}
            speed={0.9}
            grain={0.22}
            height="100%"
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center py-12">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md shadow-lg shadow-cyan-500/10 mb-6">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>5. Data Science &amp; Core Banking Architecture</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
            <span className="block">Enterprise AI Architecture:</span>
            <span className="block mt-2">
              <span className="text-gradient-kplus">Kafka, Feast &amp; Triton</span>{' '}
              <span className="text-slate-400 text-lg sm:text-2xl font-normal font-mono">(&lt; 80ms SLA)</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-normal mb-8">
            สถาปัตยกรรมระดับ Core Banking: ผสาน <strong>Relational Graph Convolutional Networks (R-GCN)</strong> สกัดบัญชีม้าผ่าน Topology และความเร็วการโอน ควบคู่ <strong>LightGBM</strong> คาดการณ์กระแสเงินสด 30 วัน ส่งมอบผลลัพธ์ผ่าน <strong>Triton ONNX</strong> ภายใน SLA &lt; 80ms (P99: 11.62ms)
          </p>

          {/* Live Technical Metrics Pill Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs mb-8">
            <div className="px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-slate-300 flex items-center gap-2 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Peak Throughput: <strong className="text-emerald-400">18,500 TPS</strong></span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-slate-300 backdrop-blur-md">
              Feast Lookup: <strong className="text-white">0.38ms (O(1))</strong>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 backdrop-blur-md">
              P99 Latency: <strong className="text-emerald-200">11.62ms (&lt; 80ms SLA)</strong>
            </div>
          </div>

          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer"
          >
            <span>สำรวจ ML Pipeline และการทดสอบ Scalability</span>
            <ChevronDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. 4-STAGE CORE BANKING ML PIPELINE (Revealed on Scroll)                  */}
      {/* ========================================================================= */}
      <section 
        id="architecture-workspace" 
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
      >
        <ScrollReveal>
          <ArchitecturePipeline showHeader={false} />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 3. SCALABILITY & STRESS TEST RADAR (Revealed on Scroll, Reduced Borders)  */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <ScrollReveal>
          <div className="rounded-3xl p-6 sm:p-8 space-y-6 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.05]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 tech-label text-xs mb-2">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Production Scalability Benchmark</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white leading-[1.4]">
                  ทดสอบความทนทานต่อโหลด (Scalability &amp; Stress Test)
                </h3>
              </div>

              {/* Scenario Toggles - Clean & Border-Reduced */}
              <div className="flex items-center gap-1.5 bg-black/40 p-1.5 rounded-2xl border border-white/[0.06] text-xs font-mono">
                <button
                  onClick={() => setLoadScenario('normal')}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    loadScenario === 'normal'
                      ? 'bg-emerald-600 text-white font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Normal Traffic
                </button>
                <button
                  onClick={() => setLoadScenario('peak')}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    loadScenario === 'peak'
                      ? 'bg-cyan-600 text-white font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Payday Surge (18k)
                </button>
                <button
                  onClick={() => setLoadScenario('cluster')}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    loadScenario === 'cluster'
                      ? 'bg-rose-600 text-white font-bold shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Mule Ring Attack
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-black/25 border border-white/[0.04] space-y-1.5">
                <span className="text-slate-400 text-[10px] block uppercase">INBOUND THROUGHPUT</span>
                <div className="text-base sm:text-lg font-bold text-white tabular-nums">
                  {currentMetrics.tps}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/25 border border-white/[0.04] space-y-1.5">
                <span className="text-slate-400 text-[10px] block uppercase">MEASURED LATENCY</span>
                <div className="text-base sm:text-lg font-bold text-emerald-400 tabular-nums">
                  {currentMetrics.latency}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/25 border border-white/[0.04] space-y-1.5">
                <span className="text-slate-400 text-[10px] block uppercase">CLUSTER MEMORY</span>
                <div className="text-base sm:text-lg font-bold text-slate-300 tabular-nums">
                  {currentMetrics.memory}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/25 border border-white/[0.04] space-y-1.5">
                <span className="text-slate-400 text-[10px] block uppercase">BUFFER DROP RATE</span>
                <div className="text-base sm:text-lg font-bold text-emerald-300 tabular-nums">
                  {currentMetrics.bufferDrop}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-500/20 space-y-1.5 col-span-2 lg:col-span-1">
                <span className="text-emerald-400 text-[10px] block uppercase">SLA HEADROOM</span>
                <div className="text-base sm:text-lg font-bold text-emerald-300 tabular-nums">
                  {currentMetrics.headroom}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 4. NAVIGATION CTA (Revealed on Scroll)                                   */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <ScrollReveal delay={100}>
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl">
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-white leading-[1.4]">ศึกษาผลกระทบที่มีต่อกลุ่มเป้าหมาย First Jobber</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-[1.7]">สำรวจกลุ่มผู้ใช้งานเป้าหมาย 2 กลุ่มหลักและความคุ้มค่าทางธุรกิจ (Business Value)</p>
            </div>
            <Link
              to="/personas"
              className="btn-kplus px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 shrink-0 transition-transform hover:scale-105"
            >
              <span>ดูข้อมูล Personas &amp; Impact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
