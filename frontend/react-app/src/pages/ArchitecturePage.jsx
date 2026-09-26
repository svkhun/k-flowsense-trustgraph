import React from 'react';
import ArchitecturePipeline from '../components/ArchitecturePipeline';
import { Cpu, Server, Database, Activity, ShieldCheck, ArrowRight, Layers, Workflow, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArchitecturePage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border-blue-500/30">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] animate-pulse"></span>
              <span>5. Data Science &amp; Implementation</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Enterprise AI Architecture <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                Kafka, Feast &amp; Triton Serving (&lt; 80ms)
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              สถาปัตยกรรมระดับ Core Banking ที่ผสาน <strong>Relational Graph Convolutional Networks (R-GCN)</strong> สำหรับตรวจจับบัญชีม้าผ่าน Topology และความเร็วการโอน, <strong>LightGBM with Rolling-Window Lag Features</strong> สำหรับคาดการณ์กระแสเงินสด 30 วันล่วงหน้า, และส่งมอบผลลัพธ์ผ่าน <strong>Triton Inference Server</strong> ภายใน 80ms
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Visual Pipeline & Section 5 Table */}
      <ArchitecturePipeline />

      {/* Technical Tier Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card rounded-2xl p-6 space-y-4 border-l-4 border-l-purple-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                T1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tier 1: Feast Feature Store</h3>
                <span className="text-xs text-purple-300 font-mono">Nearline / Offline R-GCN</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              โครงข่ายธุรกรรมทั่วประเทศประมวลผลผ่าน Relational GCN (PyG) สกัดออกมาเป็น 16-Dimensional Node Embeddings และจัดเก็บไว้ใน Feast Feature Store (Redis-backed) ทำให้ดึงข้อมูลเครือข่ายบัญชีม้าได้ในเวลา <strong className="text-purple-400">O(1) (&lt;0.5ms)</strong>
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-4 border-l-4 border-l-emerald-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                T2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tier 2: Triton Inference Serving</h3>
                <span className="text-xs text-emerald-300 font-mono">Real-Time Core Banking SLA</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              เมื่อมี Pre-transaction event เข้ามาจาก K PLUS ข้อมูลจะวิ่งผ่าน Triton Inference Server รันโมเดล ONNX LightGBM รวมเวลาทั้งสิ้นเพียง <strong className="text-emerald-400">P99 = 11.62ms</strong> (เร็วกว่าเกณฑ์ SLA &lt;80ms ถึง 7 เท่า) พร้อมตัดสินใจส่งต่อ Zero-Delay Baseline ทันที
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-4 border-l-4 border-l-blue-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                T3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tier 3: FlowSense &amp; TrustGraph UI</h3>
                <span className="text-xs text-blue-300 font-mono">React 18 + K PLUS Viewport</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              หน้าจอสำหรับผู้ใช้ K PLUS แสดงผล <strong>Status Horizon Bar</strong> และปุ่ม <strong>1-Tap Undo</strong> ส่วนด้านความปลอดภัยรองรับ <strong>Micro-Auth 5s</strong> และระบบ SecOps Command Center สำหรับวิเคราะห์เครือข่ายบัญชีม้า
            </p>
          </div>

        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-bold text-white">ศึกษาผลกระทบที่มีต่อกลุ่มเป้าหมาย First Jobber</h3>
            <p className="text-xs sm:text-sm text-slate-300">สำรวจกลุ่มผู้ใช้งานเป้าหมาย 2 กลุ่มหลักและความคุ้มค่าทางธุรกิจ (Business Impact)</p>
          </div>
          <Link
            to="/personas"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/30 transition-all hover:scale-105"
          >
            <span>ดูข้อมูล Personas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
