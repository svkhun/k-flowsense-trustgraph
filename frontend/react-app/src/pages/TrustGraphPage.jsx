import React from 'react';
import TrustGraphCard from '../components/TrustGraphCard';
import { ShieldAlert, Zap, Network, ScanFace, ArrowRight, CheckCircle2, ShieldCheck, Share2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrustGraphPage({ onOpenScamModal }) {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border-rose-500/30">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs font-semibold shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185] animate-pulse"></span>
              <span>Module B: Targeted Anti-Scam Verification</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              TrustGraph: สกัดบัญชีม้าตรงจุด <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400">
                Zero-Delay Baseline &amp; Micro-Auth 5s
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              ปกป้อง First Jobbers จากขบวนการหลอกลวงงานเสริม (Task Scams) และแอปหลอกลงทุน โดยไม่สร้างแรงเสียดทานจนทำให้ลูกค้าหนีไปใช้คู่แข่ง (Security Friction Drives Churn) รายการปกติผ่านทันที ไร้ขั้นตอนซ้ำซ้อน และหากพบม้าวิกฤตจะใช้การสแกนหน้า 5 วินาที พร้อมชี้แจงเหตุผลภาษาคนให้ผู้ใช้เป็นผู้ตัดสินใจขั้นสุดท้าย
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenScamModal}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-rose-600/30 transition-all hover:scale-105"
              >
                <ScanFace className="w-4 h-4" />
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
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold shadow-sm">
            <Share2 className="w-3.5 h-3.5 text-purple-400" />
            <span>3 กลไกหลักของ TrustGraph</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            สถาปัตยกรรมความปลอดภัยที่รักษาประสบการณ์ผู้ใช้งาน
          </h2>
          <p className="text-sm text-slate-400">
            แก้ปัญหาการล็อคบัญชี 15 นาทีตามอำเภอใจ ด้วยการตรวจจับความเสี่ยงเฉพาะเจาะจง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="glass-card rounded-2xl p-6 space-y-3 border-emerald-500/30">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">1. Zero-Delay Baseline</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              การโอนเงินในชีวิตประจำวันไปยังบัญชีที่รู้จักหรือบัญชีความเสี่ยงต่ำ จะดำเนินการทันทีในเวลาเฉลี่ย 3.8ms โดยไม่มีขั้นตอนเพิ่มเติมแม้แต่ขั้นตอนเดียว (Zero Added Steps)
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card rounded-2xl p-6 space-y-3 border-rose-500/30">
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
              <ScanFace className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">2. Micro-Auth for Critical Anomaly</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ยกเลิกการหน่วงเวลา 15 นาทีหรือการล็อคบัญชีที่น่าหงุดหงิด หากตรวจพบความผิดปกติวิกฤต ระบบจะกระตุ้นการสแกนใบหน้าเพียง 5 วินาทีเพื่อดึงสติและยืนยันผู้ใช้งานจริง พร้อมแสดงหน้าต่างยืนยันเพียงครั้งเดียว
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card rounded-2xl p-6 space-y-3 border-amber-500/30">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">3. Direct Risk Reasoning</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              บอกเหตุผลภาษาคนอย่างตรงไปตรงมาว่าทำไมบัญชีปลายทางถึงน่าสงสัย เช่น &ldquo;บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันที&rdquo; และปล่อยให้ผู้ใช้เป็นผู้ตัดสินใจโอนเงินขั้นสุดท้าย
            </p>
          </div>

        </div>
      </section>

      {/* Latency Benchmark SLA Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold mb-2">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>ผลการทดสอบ SLA ประสิทธิภาพ (200 Iterations Benchmark)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">ประสิทธิภาพความเร็วเทียบ SLA ธนาคาร (&lt; 80ms)</h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
              Target SLA: &lt; 80.0 ms
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase text-slate-400 bg-slate-900/60 border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">ขั้นตอนการประมวลผล (Pipeline Stage)</th>
                  <th className="py-3 px-4 text-center">เกณฑ์ SLA</th>
                  <th className="py-3 px-4 text-center">เวลาที่วัดได้จริง</th>
                  <th className="py-3 px-4 text-right">ความเร็วสัมพัทธ์</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3.5 px-4 font-semibold text-white">TrustGraph Pre-Transaction (P50 Median)</td>
                  <td className="py-3.5 px-4 text-center text-slate-400">&lt; 80.0 ms</td>
                  <td className="py-3.5 px-4 text-center font-mono font-bold text-emerald-400">3.85 ms</td>
                  <td className="py-3.5 px-4 text-right text-emerald-400 font-bold">เร็วกว่าเกณฑ์ 20x</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3.5 px-4 font-semibold text-white">TrustGraph Pre-Transaction (P95)</td>
                  <td className="py-3.5 px-4 text-center text-slate-400">&lt; 80.0 ms</td>
                  <td className="py-3.5 px-4 text-center font-mono font-bold text-emerald-400">5.11 ms</td>
                  <td className="py-3.5 px-4 text-right text-emerald-400 font-bold">เร็วกว่าเกณฑ์ 15x</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3.5 px-4 font-semibold text-white">TrustGraph Pre-Transaction (P99 Tail Latency)</td>
                  <td className="py-3.5 px-4 text-center text-slate-400">&lt; 80.0 ms</td>
                  <td className="py-3.5 px-4 text-center font-mono font-bold text-emerald-400">11.62 ms</td>
                  <td className="py-3.5 px-4 text-right text-emerald-400 font-bold">เร็วกว่าเกณฑ์ 7x</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-3.5 px-4 font-semibold text-white">Core Triton ONNX Inference (P99)</td>
                  <td className="py-3.5 px-4 text-center text-slate-400">&lt; 80.0 ms</td>
                  <td className="py-3.5 px-4 text-center font-mono font-bold text-cyan-400">0.27 ms</td>
                  <td className="py-3.5 px-4 text-right text-cyan-400 font-bold">Sub-millisecond</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-bold text-white">สนใจศึกษาสถาปัตยกรรมระดับ Production ของระบบ?</h3>
            <p className="text-xs sm:text-sm text-slate-300">ดูแผนภาพสถาปัตยกรรม Kafka, Feast Feature Store, Triton Inference Server, และ R-GCN</p>
          </div>
          <Link
            to="/architecture"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            <span>ไปที่หน้า AI Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
