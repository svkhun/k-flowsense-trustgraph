import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StatusHorizonBar from '../components/StatusHorizonBar';
import MicroSweepVault from '../components/MicroSweepVault';
import TrustGraphCard from '../components/TrustGraphCard';
import ArchitecturePipeline from '../components/ArchitecturePipeline';
import PersonaComparison from '../components/PersonaComparison';
import { ArrowRight, Compass, ShieldAlert, Cpu, Users } from 'lucide-react';

export default function HomePage({ onOpenScamModal }) {
  return (
    <div className="space-y-12">
      
      {/* Hero Section */}
      <Hero onOpenScamModal={onOpenScamModal} />

      {/* Module Overview Bento Grid (Clean FinTech Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 tech-label text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>Product Architecture Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            โครงสร้างผลิตภัณฑ์ 2 โมดูลหลักสำหรับ K PLUS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            เลือกเจาะลึกฟังก์ชัน FlowSense สภาพคล่องยืดหยุ่น หรือเกราะ TrustGraph ตรวจจับบัญชีม้าตรงจุด
          </p>
        </div>

        {/* Bento Grid with Asymmetric Proportions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Card 1: FlowSense (Spans 7 cols) */}
          <Link
            to="/flowsense"
            className="md:col-span-7 bento-card rounded-xl p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="tech-label text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80">MODULE A</span>
                <span className="font-mono text-xs text-slate-500">Time-Series LightGBM</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                FlowSense: Flexible Liquidity &amp; Autonomous Saving
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl font-normal">
                Status Horizon Bar คาดการณ์สภาพคล่องสิ้นเดือนโดยหักภาระผูกพันประจำ, ระงับเตือนช่วงเงินลดปกติเพื่อป้องกัน Alert Fatigue, และ Micro-Sweep พร้อมปุ่ม 1-Tap Undo คืนเงิน 100% ทันทีไร้ค่าปรับ
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-800 mt-6 pt-3.5 border-t border-slate-100">
              <span>เจาะลึก FlowSense Specification</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 2: TrustGraph (Spans 5 cols) */}
          <Link
            to="/trustgraph"
            className="md:col-span-5 bento-card rounded-xl p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="tech-label text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">MODULE B</span>
                <span className="font-mono text-xs text-emerald-800">Inference &lt; 80ms</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                TrustGraph: Target-Specific Fraud Defense
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Zero-Delay Baseline โอนปกติผ่านทันที ไร้การหน่วงเวลา 15 นาทีตามอำเภอใจ พร้อม Micro-Auth สแกนหน้า 5 วินาทีเมื่อพบม้าวิกฤต
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-800 group-hover:text-emerald-800 mt-6 pt-3.5 border-t border-slate-100">
              <span>เจาะลึก TrustGraph Verification</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 3: AI Architecture (Spans 6 cols) */}
          <Link
            to="/architecture"
            className="md:col-span-6 bento-card rounded-xl p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="tech-label text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">SYSTEM ARCHITECTURE</span>
                <span className="font-mono text-xs text-slate-500">Feast + Triton</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Production ML Pipeline &amp; Data Architecture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Kafka event stream -&gt; Feast Feature Store (Redis O(1)) -&gt; R-GCN &amp; LightGBM -&gt; Triton Inference Server (P99: 11.62ms)
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700 group-hover:text-emerald-800 mt-5 pt-3.5 border-t border-slate-100">
              <span>ดูสถาปัตยกรรมข้อมูลระดับธนาคาร</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Target Personas & Business Impact (Spans 6 cols) */}
          <Link
            to="/personas"
            className="md:col-span-6 bento-card rounded-xl p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="tech-label text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">BUSINESS &amp; USERS</span>
                <span className="font-mono text-xs text-slate-500">First Jobbers 18k–35k</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-emerald-800 transition-colors">
                Strategic Personas &amp; Business Value
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                แก้ปัญหา Budget Burnout และ Security Friction ขยายฐานเงินฝาก CASA และตัดการขัดจังหวะที่ผิดพลาด (False Positive)
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700 group-hover:text-emerald-800 mt-5 pt-3.5 border-t border-slate-100">
              <span>ดูผลกระทบต่อธุรกิจและผู้ใช้</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* Featured FlowSense Section */}
      <section className="py-12 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200/80">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 tech-label text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Module A: Flexible Liquidity &amp; Autonomous Saving</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
                FlowSense: บริหารสภาพคล่องและเงินออมอัตโนมัติ
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed font-normal">
                Status Horizon Bar คาดการณ์สภาพคล่องสิ้นเดือน, ระงับการแจ้งเตือนช่วงเงินลดปกติเพื่อป้องกัน Alert Fatigue, และ Micro-Sweep พร้อม 1-Tap Undo เรียกเงินคืน 100% ทันที
              </p>
            </div>
            <Link
              to="/flowsense"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-medium border border-slate-200 shadow-xs transition-colors"
            >
              <span>ดูข้อมูล FlowSense ทั้งหมด</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
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
      <section className="py-12 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200/80">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 tech-label text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                <span>Module B: Targeted Anti-Scam Verification</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
                TrustGraph: เกราะสกัดกั้นบัญชีม้าตรงจุด (&lt; 80ms SLA)
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed font-normal">
                Zero-Delay Baseline โอนปกติฉลุยไร้ Pop-up และหากพบม้าวิกฤตจะใช้ Micro-Auth สแกนหน้า 5 วินาที พร้อมชี้แจง Direct Risk Reasoning ภาษาคน
              </p>
            </div>
            <Link
              to="/trustgraph"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-medium border border-slate-200 shadow-xs transition-colors"
            >
              <span>ดูข้อมูล TrustGraph ทั้งหมด</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
