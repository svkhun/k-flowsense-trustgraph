import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StatusHorizonBar from '../components/StatusHorizonBar';
import MicroSweepVault from '../components/MicroSweepVault';
import TrustGraphCard from '../components/TrustGraphCard';
import ArchitecturePipeline from '../components/ArchitecturePipeline';
import PersonaComparison from '../components/PersonaComparison';
import { ArrowRight, Compass, ShieldAlert, Cpu, Users, Smartphone, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HomePage({ onOpenScamModal }) {
  const [activeEngineTab, setActiveEngineTab] = useState('flowsense'); // 'flowsense' | 'trustgraph' | 'simulator'

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Hero Section with Live KBTG Stress-Test Console */}
      <Hero onOpenScamModal={onOpenScamModal} />

      {/* 2. Interactive Dual-Engine Live Playground (Judge Sandbox) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interactive Live Sandbox</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              ทดลองใช้งานระบบจริง (Interactive Engine Playground)
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
              สลับแท็บเพื่อสัมผัสการทำงานของ FlowSense (บริหารสภาพคล่องและเงินออม), TrustGraph (สกัดกั้นบัญชีม้า), หรือเปิดมุมมองแอปจำลอง K PLUS
            </p>
          </div>

          {/* Interactive Engine Tabs */}
          <div className="flex items-center gap-1.5 bg-black/50 p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setActiveEngineTab('flowsense')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                activeEngineTab === 'flowsense'
                  ? 'btn-kplus text-white shadow-lg shadow-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>FlowSense Engine</span>
            </button>

            <button
              onClick={() => setActiveEngineTab('trustgraph')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                activeEngineTab === 'trustgraph'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/30 border border-rose-400/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>TrustGraph Engine</span>
            </button>

            <button
              onClick={() => setActiveEngineTab('simulator')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                activeEngineTab === 'simulator'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>K PLUS Preview</span>
            </button>
          </div>
        </div>

        {/* Tab 1: FlowSense Live View */}
        {activeEngineTab === 'flowsense' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fadeIn">
            <div className="lg:col-span-7">
              <StatusHorizonBar />
            </div>
            <div className="lg:col-span-5">
              <MicroSweepVault />
            </div>
          </div>
        )}

        {/* Tab 2: TrustGraph Live View */}
        {activeEngineTab === 'trustgraph' && (
          <div className="animate-fadeIn">
            <TrustGraphCard onOpenScamModal={onOpenScamModal} showHeader={false} />
          </div>
        )}

        {/* Tab 3: Embedded K PLUS Simulator */}
        {activeEngineTab === 'simulator' && (
          <div className="bento-card rounded-2xl overflow-hidden border border-white/10 p-4 space-y-3 bg-[#0B132B]/80 animate-fadeIn">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-white">LIVE EMBEDDED PHONE RUNTIME</span>
              </div>
              <Link
                to="/app"
                className="btn-kplus px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <span>เปิดเต็มจอ (Full Screen)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="w-full h-[680px] rounded-xl overflow-hidden border border-white/10 bg-[#070B14]">
              <iframe
                src="/simulator.html"
                title="Embedded K PLUS Simulator"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}

      </section>

      {/* 3. Product Architecture Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 tech-label text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Product Architecture Overview</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            โครงสร้างผลิตภัณฑ์ 2 โมดูลหลักสำหรับ K PLUS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            เลือกเจาะลึกฟังก์ชัน FlowSense สภาพคล่องยืดหยุ่น หรือเกราะ TrustGraph ตรวจจับบัญชีม้าตรงจุด
          </p>
        </div>

        {/* Bento Grid with Asymmetric Proportions & Hover Glow */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Card 1: FlowSense (Spans 7 cols) */}
          <Link
            to="/flowsense"
            className="md:col-span-7 bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group border border-white/10 bg-[#0B132B]/75"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="tech-label text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">MODULE A</span>
                <span className="font-mono text-xs text-slate-400">Time-Series LightGBM</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                FlowSense: Flexible Liquidity &amp; Autonomous Saving
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
                Status Horizon Bar คาดการณ์สภาพคล่องสิ้นเดือนโดยหักภาระผูกพันประจำ, ระงับเตือนช่วงเงินลดปกติเพื่อป้องกัน Alert Fatigue, และ Micro-Sweep พร้อมปุ่ม 1-Tap Undo คืนเงิน 100% ทันทีไร้ค่าปรับ
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mt-6 pt-3.5 border-t border-white/10">
              <span>เจาะลึก FlowSense Specification</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: TrustGraph (Spans 5 cols) */}
          <Link
            to="/trustgraph"
            className="md:col-span-5 bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group border border-white/10 bg-[#0B132B]/75"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="tech-label text-rose-300 bg-rose-500/15 px-2 py-0.5 rounded border border-rose-500/30">MODULE B</span>
                <span className="font-mono text-xs text-emerald-400">Inference &lt; 80ms</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-rose-300 transition-colors">
                TrustGraph: Target-Specific Fraud Defense
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Zero-Delay Baseline โอนปกติผ่านทันที ไร้การหน่วงเวลา 15 นาทีตามอำเภอใจ พร้อม Micro-Auth สแกนหน้า 5 วินาทีเมื่อพบม้าวิกฤต
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 group-hover:text-rose-300 mt-6 pt-3.5 border-t border-white/10">
              <span>เจาะลึก TrustGraph Verification</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: AI Architecture (Spans 6 cols) */}
          <Link
            to="/architecture"
            className="md:col-span-6 bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group border border-white/10 bg-[#0B132B]/75"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="tech-label text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">SYSTEM ARCHITECTURE</span>
                <span className="font-mono text-xs text-emerald-400">Feast + Triton ONNX</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Production ML Pipeline &amp; Data Architecture
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Kafka event stream -&gt; Feast Feature Store (Redis O(1)) -&gt; R-GCN &amp; LightGBM -&gt; Triton Inference Server (P99: 11.62ms)
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-emerald-300 mt-5 pt-3.5 border-t border-white/10">
              <span>ดูสถาปัตยกรรมข้อมูลระดับธนาคาร</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Target Personas & Business Impact (Spans 6 cols) */}
          <Link
            to="/personas"
            className="md:col-span-6 bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group border border-white/10 bg-[#0B132B]/75"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="tech-label text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">BUSINESS &amp; USERS</span>
                <span className="font-mono text-xs text-slate-400">First Jobbers 18k–35k</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Strategic Personas &amp; Business Value
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                แก้ปัญหา Budget Burnout และ Security Friction ขยายฐานเงินฝาก CASA และตัดการขัดจังหวะที่ผิดพลาด (False Positive)
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-emerald-300 mt-5 pt-3.5 border-t border-white/10">
              <span>ดูผลกระทบต่อธุรกิจและผู้ใช้</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* 4. Core Architecture Pipeline Overview */}
      <ArchitecturePipeline />

      {/* 5. Persona Comparison & Impact */}
      <PersonaComparison />

    </div>
  );
}
