import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StatusHorizonBar from '../components/StatusHorizonBar';
import MicroSweepVault from '../components/MicroSweepVault';
import TrustGraphCard from '../components/TrustGraphCard';
import ArchitecturePipeline from '../components/ArchitecturePipeline';
import PersonaComparison from '../components/PersonaComparison';
import { Compass, ShieldAlert, Cpu, Users, ArrowRight, Sparkles, CheckCircle2, Zap, ShieldCheck, RotateCcw } from 'lucide-react';

export default function HomePage({ onOpenScamModal }) {
  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <Hero onOpenScamModal={onOpenScamModal} />

      {/* Quick Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
            <span>Product Architecture Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            โครงสร้างผลิตภัณฑ์ 2 โมดูลหลักสำหรับ K PLUS
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            เลือกเจาะลึกฟังก์ชัน FlowSense สภาพคล่องยืดหยุ่น หรือเกราะ TrustGraph ตรวจจับบัญชีม้าตรงจุด
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: FlowSense */}
          <Link
            to="/flowsense"
            className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-emerald-500/50 transition-all hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                Module A: FlowSense
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Status Horizon Bar คาดการณ์สภาพคล่องสิ้นเดือน, Micro-Sweep พร้อม 1-Tap Recall คืนเงิน 100% ไร้ค่าปรับ
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mt-6 group-hover:translate-x-1 transition-transform">
              <span>เจาะลึก FlowSense</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Card 2: TrustGraph */}
          <Link
            to="/trustgraph"
            className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-rose-500/50 transition-all hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                Module B: TrustGraph
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero-Delay Baseline โอนปกติผ่านทันที ไร้การหน่วงเวลา 15 นาที พร้อม Micro-Auth สแกนหน้า 5s สำหรับม้าวิกฤต
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 mt-6 group-hover:translate-x-1 transition-transform">
              <span>เจาะลึก TrustGraph</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Card 3: Architecture */}
          <Link
            to="/architecture"
            className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-blue-500/50 transition-all hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                AI Architecture
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kafka event stream -&gt; Feast Feature Store -&gt; R-GCN &amp; LightGBM -&gt; Triton Inference Server (&lt; 80ms)
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 mt-6 group-hover:translate-x-1 transition-transform">
              <span>ดูสถาปัตยกรรมข้อมูล</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Card 4: Personas & Impact */}
          <Link
            to="/personas"
            className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-amber-500/50 transition-all hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                Target Users &amp; Impact
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Primary (18k–35k เดือนชนเดือน) &amp; Secondary (โอนถี่สูง) พร้อมผลกระทบ CASA, Retention, Fraud Interruption
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mt-6 group-hover:translate-x-1 transition-transform">
              <span>ดูข้อมูลผู้ใช้ &amp; ธุรกิจ</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

        </div>
      </section>

      {/* Featured FlowSense Section */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
                <span>Module A: Flexible Liquidity &amp; Autonomous Saving</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                FlowSense: บริหารสภาพคล่องและเงินออมอัตโนมัติ
              </h2>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Status Horizon Bar คาดการณ์สภาพคล่องสิ้นเดือนจากภาระผูกพัน, ระบบระงับการแจ้งเตือนช่วงเงินลดปกติเพื่อป้องกัน Alert Fatigue, และ Micro-Sweep พร้อมปุ่ม 1-Tap Undo เรียกเงินคืน 100% ทันที
              </p>
            </div>
            <Link
              to="/flowsense"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-bold border border-emerald-500/30 transition-all hover:scale-105"
            >
              <span>ดูรายละเอียด FlowSense ทั้งหมด</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <StatusHorizonBar />
            </div>
            <div className="lg:col-span-5">
              <MicroSweepVault />
            </div>
          </div>
        </div>
      </section>

      {/* Featured TrustGraph Section */}
      <section className="py-14 bg-[#070B12]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185] animate-pulse"></span>
                <span>Module B: Targeted Anti-Scam Verification</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                TrustGraph: เกราะสกัดกั้นบัญชีม้าตรงจุด (&lt;80ms SLA)
              </h2>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Zero-Delay Baseline โอนเงินปกติฉลุยไร้ Pop-up รบกวน และหากพบม้าวิกฤตจะใช้ Micro-Auth สแกนหน้า 5 วินาที พร้อมชี้แจง Direct Risk Reasoning ภาษาคนให้ผู้ใช้ตัดสินใจเอง
              </p>
            </div>
            <Link
              to="/trustgraph"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 text-xs sm:text-sm font-bold border border-rose-500/30 transition-all hover:scale-105"
            >
              <span>ดูข้อมูล TrustGraph แบบเต็ม</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <TrustGraphCard onOpenScamModal={onOpenScamModal} showHeader={false} />
        </div>
      </section>

      {/* Featured Architecture Pipeline Overview */}
      <ArchitecturePipeline />

      {/* Persona Comparison & Impact */}
      <PersonaComparison />

    </div>
  );
}
