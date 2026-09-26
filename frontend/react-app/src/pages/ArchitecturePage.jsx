import React from 'react';
import ArchitecturePipeline from '../components/ArchitecturePipeline';
import { ArrowRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArchitecturePage() {
  return (
    <div className="py-10 space-y-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card rounded-2xl p-6 sm:p-8 space-y-4 border-slate-200/90 shadow-sm">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-emerald-700" />
              <span>5. Data Science &amp; Implementation</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
              Enterprise AI Architecture: Kafka, Feast &amp; Triton (&lt; 80ms)
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              สถาปัตยกรรมระดับ Core Banking ที่ผสาน <strong>Relational Graph Convolutional Networks (R-GCN)</strong> สำหรับตรวจจับบัญชีม้าผ่าน Topology และความเร็วการโอน, <strong>LightGBM with Rolling-Window Lag Features</strong> สำหรับคาดการณ์กระแสเงินสด 30 วันล่วงหน้า, และส่งมอบผลลัพธ์ผ่าน <strong>Triton Inference Server</strong> ภายใน 80ms SLA
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Visual Pipeline & Section 5 Table */}
      <ArchitecturePipeline />

      {/* Technical Tier Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bento-card rounded-xl p-5 space-y-3 border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-[10px] font-mono tracking-wider text-slate-600 font-semibold uppercase">TIER 1</span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400">FEAST STORE</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-900">Feast Feature Store (Redis O(1))</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              โครงข่ายธุรกรรมทั่วประเทศประมวลผลผ่าน Relational GCN สกัดออกมาเป็น 16-Dimensional Node Embeddings และจัดเก็บไว้ใน Feast Feature Store (Redis-backed) ทำให้ดึงข้อมูลเครือข่ายบัญชีม้าได้ในเวลา <span className="font-mono text-emerald-800 font-medium">O(1) (&lt; 0.5ms)</span>
            </p>
          </div>

          <div className="bento-card rounded-xl p-5 space-y-3 border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-[10px] font-mono tracking-wider text-emerald-800 font-semibold uppercase">TIER 2</span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400">TRITON SERVING</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-900">Triton Inference Serving</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              เมื่อมี Pre-transaction event เข้ามาจาก K PLUS ข้อมูลจะวิ่งผ่าน Triton Inference Server รันโมเดล ONNX LightGBM รวมเวลาทั้งสิ้นเพียง <span className="font-mono text-emerald-800 font-medium">P99 = 11.62ms</span> (เร็วกว่าเกณฑ์ SLA &lt; 80ms ถึง 7 เท่า) พร้อมตัดสินใจส่งต่อ Zero-Delay Baseline ทันที
            </p>
          </div>

          <div className="bento-card rounded-xl p-5 space-y-3 border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-[10px] font-mono tracking-wider text-slate-600 font-semibold uppercase">TIER 3</span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400">CLIENT RUNTIME</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-900">FlowSense &amp; TrustGraph Viewport</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              หน้าจอสำหรับผู้ใช้ K PLUS แสดงผล <strong>Status Horizon Bar</strong> และปุ่ม <strong>1-Tap Undo</strong> ส่วนด้านความปลอดภัยรองรับ <strong>Micro-Auth 5s</strong> และระบบ SecOps Command Center สำหรับวิเคราะห์เครือข่ายบัญชีม้า
            </p>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="bento-card rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-slate-200/90 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">ศึกษาผลกระทบที่มีต่อกลุ่มเป้าหมาย First Jobber</h3>
            <p className="text-xs text-slate-500 font-normal">สำรวจกลุ่มผู้ใช้งานเป้าหมาย 2 กลุ่มหลักและความคุ้มค่าทางธุรกิจ (Business Impact)</p>
          </div>
          <Link
            to="/personas"
            className="inline-flex items-center gap-1.5 bg-[#064E3B] hover:bg-[#022C22] text-white px-4 py-2 rounded-lg font-medium text-xs border border-emerald-900/30 shadow-sm transition-all shrink-0"
          >
            <span>ดูข้อมูล Personas &amp; Impact</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
