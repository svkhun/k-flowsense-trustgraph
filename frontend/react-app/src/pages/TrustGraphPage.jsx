import React from 'react';
import TrustGraphCard from '../components/TrustGraphCard';
import { ArrowRight, Zap, ScanFace, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrustGraphPage({ onOpenScamModal }) {
  return (
    <div className="py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card rounded-xl p-6 sm:p-8 space-y-4 border-rose-500/30">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              <span>Module B: Targeted Anti-Scam Verification</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              TrustGraph: สกัดบัญชีม้าตรงจุด ไร้ขั้นตอนซ้ำซ้อน
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              ปกป้อง First Jobbers จากขบวนการหลอกลวงงานเสริม (Task Scams) และแอปหลอกลงทุน โดยไม่สร้างแรงเสียดทานจนทำให้ลูกค้าหนีไปใช้คู่แข่ง (Security Friction Drives Churn):
              รายการปกติผ่านทันทีด้วย <strong>Zero-Delay Baseline</strong> และหากตรวจพบม้าวิกฤตจะใช้ <strong>Micro-Auth สแกนหน้า 5 วินาที</strong> พร้อมชี้แจงเหตุผลภาษาคนให้ผู้ใช้เป็นผู้ตัดสินใจขั้นสุดท้าย
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenScamModal}
                className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg font-medium text-xs border border-rose-500/40 hover:border-rose-500/70 transition-colors"
              >
                <ScanFace className="w-3.5 h-3.5 text-rose-400" />
                <span>จำลองการทำงาน TrustGraph Micro-Auth (5s)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustGraphCard onOpenScamModal={onOpenScamModal} showHeader={false} />
      </section>

      {/* 3 Pillars of TrustGraph Architecture (from Pitch) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>3 Pillars of TrustGraph Security Architecture</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            สถาปัตยกรรมความปลอดภัยที่รักษาประสบการณ์ผู้ใช้งาน
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            แก้ปัญหาการล็อคบัญชี 15 นาทีตามอำเภอใจ ด้วยการตรวจจับความเสี่ยงเฉพาะเจาะจง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Pillar 1 */}
          <div className="bento-card rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="tech-label text-emerald-400">PILLAR 01</span>
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-sm font-bold text-white">Zero-Delay Baseline</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              การโอนเงินในชีวิตประจำวันไปยังบัญชีที่รู้จักหรือบัญชีความเสี่ยงต่ำ จะดำเนินการทันทีในเวลาเฉลี่ย 3.8ms โดยไม่มีขั้นตอนเพิ่มเติมแม้แต่ขั้นตอนเดียว (Zero Added Steps)
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bento-card rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="tech-label text-rose-400">PILLAR 02</span>
              <ScanFace className="w-4 h-4 text-rose-400" />
            </div>
            <h3 className="text-sm font-bold text-white">Micro-Auth for Critical Anomaly</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              ยกเลิกการหน่วงเวลา 15 นาทีหรือการล็อคบัญชีที่น่าหงุดหงิด หากตรวจพบความผิดปกติวิกฤต ระบบจะกระตุ้นการสแกนใบหน้าเพียง 5 วินาทีเพื่อดึงสติและยืนยันผู้ใช้งานจริง พร้อมแสดงหน้าต่างยืนยันเพียงครั้งเดียว
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bento-card rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="tech-label text-zinc-400">PILLAR 03</span>
              <AlertTriangle className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="text-sm font-bold text-white">Direct Risk Reasoning</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              บอกเหตุผลภาษาคนอย่างตรงไปตรงมาว่าทำไมบัญชีปลายทางถึงน่าสงสัย เช่น &ldquo;บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันที&rdquo; และปล่อยให้ผู้ใช้เป็นผู้ตัดสินใจขั้นสุดท้าย
            </p>
          </div>

        </div>
      </section>

      {/* Latency Benchmark SLA Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card rounded-xl p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label mb-1">
                <Zap className="w-3 h-3 text-emerald-400" />
                <span>200 Iterations Benchmark</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">ประสิทธิภาพความเร็วเทียบ SLA ธนาคาร (&lt; 80ms)</h2>
            </div>
            <span className="tech-label text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
              TARGET SLA: &lt; 80.0 MS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="tech-label text-[10px] text-zinc-400 bg-black/40 border-b border-white/10">
                <tr>
                  <th className="py-2.5 px-4">ขั้นตอนการประมวลผล (Pipeline Stage)</th>
                  <th className="py-2.5 px-4 text-center">เกณฑ์ SLA</th>
                  <th className="py-2.5 px-4 text-center">เวลาที่วัดได้จริง</th>
                  <th className="py-2.5 px-4 text-right">ความเร็วสัมพัทธ์</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300 font-mono">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-sans font-medium text-white">TrustGraph Pre-Transaction (P50 Median)</td>
                  <td className="py-3 px-4 text-center text-zinc-400">&lt; 80.0 ms</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-400">3.85 ms</td>
                  <td className="py-3 px-4 text-right text-emerald-400 font-sans font-medium">เร็วกว่าเกณฑ์ 20x</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-sans font-medium text-white">TrustGraph Pre-Transaction (P95)</td>
                  <td className="py-3 px-4 text-center text-zinc-400">&lt; 80.0 ms</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-400">5.11 ms</td>
                  <td className="py-3 px-4 text-right text-emerald-400 font-sans font-medium">เร็วกว่าเกณฑ์ 15x</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-sans font-medium text-white">TrustGraph Pre-Transaction (P99 Tail Latency)</td>
                  <td className="py-3 px-4 text-center text-zinc-400">&lt; 80.0 ms</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-400">11.62 ms</td>
                  <td className="py-3 px-4 text-right text-emerald-400 font-sans font-medium">เร็วกว่าเกณฑ์ 7x</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3 px-4 font-sans font-medium text-white">Core Triton ONNX Inference (P99)</td>
                  <td className="py-3 px-4 text-center text-zinc-400">&lt; 80.0 ms</td>
                  <td className="py-3 px-4 text-center font-bold text-zinc-200">0.27 ms</td>
                  <td className="py-3 px-4 text-right text-zinc-300 font-sans font-medium">Sub-millisecond</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="bento-card rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-white">สนใจศึกษาสถาปัตยกรรมระดับ Production ของระบบ?</h3>
            <p className="text-xs text-zinc-400">ดูแผนภาพสถาปัตยกรรม Kafka, Feast Feature Store, Triton Inference Server, และ R-GCN</p>
          </div>
          <Link
            to="/architecture"
            className="inline-flex items-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 hover:text-white px-4 py-2 rounded-lg font-medium text-xs border border-white/10 transition-colors shrink-0"
          >
            <span>ไปที่หน้า AI Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
