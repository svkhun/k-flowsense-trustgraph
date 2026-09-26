import React from 'react';
import ArchitecturePipeline from '../components/ArchitecturePipeline';
import { ArrowRight, Cpu, Layers, Database, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArchitecturePage() {
  return (
    <div className="py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card-active rounded-2xl p-6 sm:p-8 space-y-4 border border-emerald-500/40 bg-[#0B132B]/85 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>5. Data Science &amp; Implementation</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Enterprise AI Architecture: <br className="hidden sm:block" />
              <span className="text-gradient-kplus">Kafka, Feast &amp; Triton (&lt; 80ms)</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              สถาปัตยกรรมระดับ Core Banking ที่ผสาน <strong>Relational Graph Convolutional Networks (R-GCN)</strong> สำหรับตรวจจับบัญชีม้าผ่าน Topology และความเร็วการโอน, <strong>LightGBM with Rolling-Window Lag Features</strong> สำหรับคาดการณ์กระแสเงินสด 30 วันล่วงหน้า, และส่งมอบผลลัพธ์ผ่าน <strong>Triton Inference Server</strong> ภายใน 80ms SLA
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Visual Pipeline & Section 5 Table */}
      <ArchitecturePipeline />

      {/* Technical Tier Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="bento-card rounded-2xl p-6 space-y-3.5 border border-white/10 bg-[#0B132B]/75">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">TIER 1</span>
              <span className="tech-label text-xs text-slate-400 font-mono">FEAST STORE</span>
            </div>
            <h3 className="text-base font-bold text-white">Feast Feature Store (Redis O(1))</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              โครงข่ายธุรกรรมทั่วประเทศประมวลผลผ่าน Relational GCN สกัดออกมาเป็น 16-Dimensional Node Embeddings และจัดเก็บไว้ใน Feast Feature Store (Redis-backed) ทำให้ดึงข้อมูลเครือข่ายบัญชีม้าได้ในเวลา <span className="font-mono text-emerald-400 font-bold">O(1) (&lt; 0.5ms)</span>
            </p>
          </div>

          <div className="bento-card rounded-2xl p-6 space-y-3.5 border border-emerald-500/30 bg-emerald-950/15">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">TIER 2</span>
              <span className="tech-label text-xs text-slate-400 font-mono">TRITON SERVING</span>
            </div>
            <h3 className="text-base font-bold text-white">Triton Inference Serving</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              เมื่อมี Pre-transaction event เข้ามาจาก K PLUS ข้อมูลจะวิ่งผ่าน Triton Inference Server รันโมเดล ONNX LightGBM รวมเวลาทั้งสิ้นเพียง <span className="font-mono text-emerald-400 font-bold">P99 = 11.62ms</span> (เร็วกว่าเกณฑ์ SLA &lt; 80ms ถึง 7 เท่า) พร้อมตัดสินใจส่งต่อ Zero-Delay Baseline ทันที
            </p>
          </div>

          <div className="bento-card rounded-2xl p-6 space-y-3.5 border border-white/10 bg-[#0B132B]/75">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">TIER 3</span>
              <span className="tech-label text-xs text-slate-400 font-mono">CLIENT RUNTIME</span>
            </div>
            <h3 className="text-base font-bold text-white">FlowSense &amp; TrustGraph Viewport</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              หน้าจอสำหรับผู้ใช้ K PLUS แสดงผล <strong>Status Horizon Bar</strong> และปุ่ม <strong>1-Tap Undo</strong> ส่วนด้านความปลอดภัยรองรับ <strong>Micro-Auth 5s</strong> และระบบ SecOps Command Center สำหรับวิเคราะห์เครือข่ายบัญชีม้า
            </p>
          </div>

        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="bento-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 bg-[#0B132B]/75">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">ศึกษาผลกระทบที่มีต่อกลุ่มเป้าหมาย First Jobber</h3>
            <p className="text-xs text-slate-400">สำรวจกลุ่มผู้ใช้งานเป้าหมาย 2 กลุ่มหลักและความคุ้มค่าทางธุรกิจ (Business Impact)</p>
          </div>
          <Link
            to="/personas"
            className="btn-kplus px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shrink-0"
          >
            <span>ดูข้อมูล Personas &amp; Impact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
