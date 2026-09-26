import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StatusHorizonBar from '../components/StatusHorizonBar';
import MicroSweepVault from '../components/MicroSweepVault';
import TrustGraphCard from '../components/TrustGraphCard';
import { ArrowRight, Compass, ShieldAlert, Cpu, Users, Smartphone, Sparkles, CheckCircle2, Server, TrendingUp, Zap } from 'lucide-react';

export default function HomePage({ onOpenScamModal }) {
  const [activeEngineTab, setActiveEngineTab] = useState('flowsense'); // 'flowsense' | 'trustgraph' | 'simulator'

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Hero Section with Live Scenario Console */}
      <Hero onOpenScamModal={onOpenScamModal} />

      {/* 2. Interactive Dual-Engine Sandbox (Judge Playground) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interactive Sandbox</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-[1.4] pb-1">
              ทดลองใช้งานระบบจริง (Live Playground)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] font-normal">
              ทดสอบการทำงานของ FlowSense, TrustGraph หรือเปิดมุมมองแอปจำลอง K PLUS
            </p>
          </div>

          {/* Interactive Engine Tabs */}
          <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveEngineTab('flowsense')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                activeEngineTab === 'flowsense'
                  ? 'btn-kplus text-white shadow-md shadow-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>FlowSense</span>
            </button>

            <button
              onClick={() => setActiveEngineTab('trustgraph')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                activeEngineTab === 'trustgraph'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-500/30 border border-rose-400/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>TrustGraph</span>
            </button>

            <button
              onClick={() => setActiveEngineTab('simulator')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                activeEngineTab === 'simulator'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-500/30 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>K PLUS App</span>
            </button>
          </div>
        </div>

        {/* Tab 1: FlowSense Live View */}
        {activeEngineTab === 'flowsense' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
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
          <div>
            <TrustGraphCard onOpenScamModal={onOpenScamModal} showHeader={false} />
          </div>
        )}

        {/* Tab 3: Embedded K PLUS Simulator */}
        {activeEngineTab === 'simulator' && (
          <div className="bento-card rounded-2xl overflow-hidden border border-white/10 p-4 space-y-3 bg-[#0B132B]/80">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-white">LIVE EMBEDDED PHONE RUNTIME</span>
              </div>
              <Link
                to="/app"
                className="btn-kplus px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <span>เปิดเต็มจอ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="w-full h-[650px] rounded-xl overflow-hidden border border-white/10 bg-[#070B14]">
              <iframe
                src="/simulator.html"
                title="Embedded K PLUS Simulator"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}

      </section>

      {/* 3. Streamlined Bento Grid Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 tech-label text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>SYSTEM OVERVIEW</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-[1.4] pb-1">
            โครงสร้างโมดูลหลักของระบบ
          </h2>
        </div>

        {/* 4 Clean Asymmetric Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Card 1: FlowSense */}
          <Link
            to="/flowsense"
            className="md:col-span-7 bento-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group border border-white/10 bg-[#0B132B]/75"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="tech-label text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">MODULE A</span>
                <span className="font-mono text-xs text-slate-400">LightGBM 30-Day</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-[1.4] pb-0.5">
                FlowSense: Liquidity &amp; Autonomous Saving
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] font-normal">
                Status Horizon Bar คาดการณ์สภาพคล่องสิ้นเดือน หักภาระคงที่ล่วงหน้า พร้อมระบบ Micro-Sweep และ 1-Tap Undo คืนเงินเข้าบัญชีหลัก 100% ทันที
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mt-4 pt-3 border-t border-white/10">
              <span>เจาะลึก FlowSense Specification</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: TrustGraph */}
          <Link
            to="/trustgraph"
            className="md:col-span-5 bento-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group border border-white/10 bg-[#0B132B]/75"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="tech-label text-rose-300 bg-rose-500/15 px-2 py-0.5 rounded border border-rose-500/30">MODULE B</span>
                <span className="font-mono text-xs text-emerald-400">SLA &lt; 80ms</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-rose-300 transition-colors leading-[1.4] pb-0.5">
                TrustGraph: Real-Time Fraud Defense
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] font-normal">
                Zero-Delay Baseline ปล่อยผ่านรายการปกติใน 3.8ms และใช้ Micro-Auth สแกนหน้า 5 วินาทีเมื่อพบม้าวิกฤต โดยไม่ต้องหน่วงเวลา 15 นาที
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 group-hover:text-rose-300 mt-4 pt-3 border-t border-white/10">
              <span>เจาะลึก TrustGraph Verification</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: AI Architecture */}
          <Link
            to="/architecture"
            className="md:col-span-6 bento-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group border border-white/10 bg-[#0B132B]/75"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="tech-label text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">DATA SCIENCE</span>
                <span className="font-mono text-xs text-emerald-400">P99: 11.6ms</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-[1.4] pb-0.5">
                Production ML Pipeline (Kafka, Feast, Triton)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] font-normal">
                Kafka Inbound Stream -&gt; Feast Redis O(1) Embeddings -&gt; R-GCN &amp; LightGBM -&gt; Triton Serving ผ่านเกณฑ์ Core Banking
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-emerald-300 mt-4 pt-3 border-t border-white/10">
              <span>ดูสถาปัตยกรรมข้อมูลระดับธนาคาร</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Target Personas */}
          <Link
            to="/personas"
            className="md:col-span-6 bento-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group border border-white/10 bg-[#0B132B]/75"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="tech-label text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">STRATEGIC VALUE</span>
                <span className="font-mono text-xs text-slate-400">First Jobbers 18k–35k</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-[1.4] pb-0.5">
                Strategic Impact &amp; User Retention
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] font-normal">
                แก้ปัญหา Budget Burnout ลดการทิ้งแอป 88% ขยายฐานเงินฝาก CASA สู่ธนาคาร +฿1.42B และขจัดข้อจำกัดแบบ Parenting App
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-emerald-300 mt-4 pt-3 border-t border-white/10">
              <span>ดูผลกระทบต่อธุรกิจและผู้ใช้</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* 4. Executive Scorecard Summary (Replaces redundant wall of text) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card rounded-2xl p-6 sm:p-7 border border-white/10 bg-[#0B132B]/85 backdrop-blur-xl shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Executive Summary</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white leading-[1.4] pb-0.5">
                คุณค่าเชิงยุทธศาสตร์ต่อ K PLUS และธนาคารกสิกรไทย
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/architecture"
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                ดูสถาปัตยกรรม &rarr;
              </Link>
              <Link
                to="/personas"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                ดูข้อมูล Personas &rarr;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 text-[10px] block uppercase">P99 LATENCY SLA</span>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 tabular-nums">
                11.62 ms
              </div>
              <p className="text-[11px] text-slate-300 font-sans leading-[1.7]">เร็วกว่าเกณฑ์ SLA 80ms ถึง 7 เท่า</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 text-[10px] block uppercase">ANNUAL CASA GROWTH</span>
              <div className="text-xl sm:text-2xl font-extrabold text-white tabular-nums">
                +฿1.42B
              </div>
              <p className="text-[11px] text-slate-300 font-sans leading-[1.7]">เงินฝากต้นทุนต่ำจากการกวาดเงินออม</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 text-[10px] block uppercase">CHURN REDUCTION</span>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 tabular-nums">
                -88%
              </div>
              <p className="text-[11px] text-slate-300 font-sans leading-[1.7]">ลดการทิ้งแอปจากการหน่วงเวลา 15 นาที</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-slate-400 text-[10px] block uppercase">MULE INTERCEPTION</span>
              <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 tabular-nums">
                99.4%
              </div>
              <p className="text-[11px] text-slate-300 font-sans leading-[1.7]">คัดแยกบัญชีม้าด้วย Relational GCN</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
