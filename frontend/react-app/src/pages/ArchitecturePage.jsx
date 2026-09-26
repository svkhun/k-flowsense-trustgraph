import React from 'react';
import ArchitecturePipeline from '../components/ArchitecturePipeline';
import { ArrowRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArchitecturePage() {
  return (
    <div className="py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card rounded-xl p-6 sm:p-8 space-y-4 border-white/10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>5. Data Science &amp; Implementation</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Enterprise AI Architecture: Kafka, Feast &amp; Triton (&lt; 80ms)
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
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
          
          <div className="bento-card rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="tech-label text-zinc-300">TIER 1</span>
              <span className="tech-label text-xs text-zinc-400">FEAST STORE</span>
            </div>
            <h3 className="text-sm font-bold text-white">Feast Feature Store (Redis O(1))</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              โครงข่ายธุรกรรมทั่วประเทศประมวลผลผ่าน Relational GCN สกัดออกมาเป็น 16-Dimensional Node Embeddings และจัดเก็บไว้ใน Feast Feature Store (Redis-backed) ทำให้ดึงข้อมูลเครือข่ายบัญชีม้าได้ในเวลา <span className="font-mono text-emerald-400">O(1) (&lt; 0.5ms)</span>
            </p>
          </div>

          <div className="bento-card rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="tech-label text-emerald-400">TIER 2</span>
              <span className="tech-label text-xs text-zinc-400">TRITON SERVING</span>
            </div>
            <h3 className="text-sm font-bold text-white">Triton Inference Serving</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              เมื่อมี Pre-transaction event เข้ามาจาก K PLUS ข้อมูลจะวิ่งผ่าน Triton Inference Server รันโมเดล ONNX LightGBM รวมเวลาทั้งสิ้นเพียง <span className="font-mono text-emerald-400">P99 = 11.62ms</span> (เร็วกว่าเกณฑ์ SLA &lt; 80ms ถึง 7 เท่า) พร้อมตัดสินใจส่งต่อ Zero-Delay Baseline ทันที
            </p>
          </div>

          <div className="bento-card rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="tech-label text-zinc-300">TIER 3</span>
              <span className="tech-label text-xs text-zinc-400">CLIENT RUNTIME</span>
            </div>
            <h3 className="text-sm font-bold text-white">FlowSense &amp; TrustGraph Viewport</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              หน้าจอสำหรับผู้ใช้ K PLUS แสดงผล <strong>Status Horizon Bar</strong> และปุ่ม <strong>1-Tap Undo</strong> ส่วนด้านความปลอดภัยรองรับ <strong>Micro-Auth 5s</strong> และระบบ SecOps Command Center สำหรับวิเคราะห์เครือข่ายบัญชีม้า
            </p>
          </div>

        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="bento-card rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-white">ศึกษาผลกระทบที่มีต่อกลุ่มเป้าหมาย First Jobber</h3>
            <p className="text-xs text-zinc-400">สำรวจกลุ่มผู้ใช้งานเป้าหมาย 2 กลุ่มหลักและความคุ้มค่าทางธุรกิจ (Business Impact)</p>
          </div>
          <Link
            to="/personas"
            className="inline-flex items-center gap-1.5 bg-[#00A950] hover:bg-[#008F43] text-white px-4 py-2 rounded-lg font-medium text-xs border border-emerald-400/20 transition-colors shrink-0"
          >
            <span>ดูข้อมูล Personas &amp; Impact</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
