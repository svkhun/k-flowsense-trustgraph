import React from 'react';
import TrustGraphCard from '../components/TrustGraphCard';
import { ArrowRight, Zap, ScanFace, AlertTriangle, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrustGraphPage({ onOpenScamModal }) {
  return (
    <div className="py-8 sm:py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card-active rounded-2xl p-6 sm:p-8 space-y-4 border border-rose-500/40 bg-[#0B132B]/85 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 tech-label text-xs">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span>Module B: Targeted Anti-Scam Verification</span>
            </div>
            
            {/* Fixed Thai Word Wrap: prevents 'ไร้ขั้น' / 'ตอนซ้ำซ้อน' breaking */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25]">
              TrustGraph: สกัดบัญชีม้าตรงจุด <br className="hidden sm:block" />
              <span className="text-gradient-kplus whitespace-nowrap">ไร้ขั้นตอนซ้ำซ้อน</span>{' '}
              <span className="text-slate-400 text-lg sm:text-2xl font-normal font-mono">(&lt; 80ms SLA)</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              สกัดขบวนการหลอกลวง (Task Scams &amp; Investment Scams) ด้วยสถาปัตยกรรม R-GCN ระดับ Sub-millisecond: รายการปกติผ่านฉลุยใน 3.8ms และใช้ Micro-Auth สแกนหน้า 5 วินาทีเฉพาะเมื่อพบม้าวิกฤต โดยไม่ต้องหน่วงเวลา 15 นาทีตามอำเภอใจ
            </p>

            {/* Live Telemetry & Core Benchmarks Pill Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
              <div className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>P99 Inference: <strong className="text-emerald-400">11.62ms</strong></span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-slate-300">
                Core SLA: <strong className="text-white">&lt; 80.0ms</strong>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300">
                Arbitrary Lock: <strong className="text-rose-200">0s (None)</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustGraphCard onOpenScamModal={onOpenScamModal} showHeader={false} />
      </section>

      {/* 3 Pillars of TrustGraph Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>3 Pillars of Security Architecture</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            สถาปัตยกรรมความปลอดภัยที่รักษาประสบการณ์ผู้ใช้งาน
          </h2>
          <p className="text-sm text-slate-400">
            แก้ปัญหาการล็อคบัญชี 15 นาทีตามอำเภอใจ ด้วยการตรวจจับความเสี่ยงเฉพาะเจาะจง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pillar 1 */}
          <div className="bento-card rounded-2xl p-6 space-y-3 border border-white/10 bg-[#0B132B]/75">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">PILLAR 01</span>
              <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-base font-bold text-white">Zero-Delay Baseline</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              การโอนเงินในชีวิตประจำวันไปยังบัญชีที่รู้จักหรือบัญชีความเสี่ยงต่ำ จะดำเนินการทันทีในเวลาเฉลี่ย 3.8ms โดยไม่มีขั้นตอนเพิ่มเติมแม้แต่ขั้นตอนเดียว (Zero Added Steps)
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bento-card rounded-2xl p-6 space-y-3 border border-rose-500/30 bg-rose-950/15">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-wider text-rose-300 font-bold uppercase">PILLAR 02</span>
              <ScanFace className="w-5 h-5 text-rose-400" />
            </div>
            <h3 className="text-base font-bold text-white">Micro-Auth for Critical Anomaly</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              ยกเลิกการหน่วงเวลา 15 นาทีหรือการล็อคบัญชีที่น่าหงุดหงิด หากตรวจพบความผิดปกติวิกฤต ระบบจะกระตุ้นการสแกนใบหน้าเพียง 5 วินาทีเพื่อดึงสติและยืนยันผู้ใช้งานจริง พร้อมแสดงหน้าต่างยืนยันเพียงครั้งเดียว
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bento-card rounded-2xl p-6 space-y-3 border border-white/10 bg-[#0B132B]/75">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">PILLAR 03</span>
              <AlertTriangle className="w-5 h-5 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-white">Direct Risk Reasoning</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              บอกเหตุผลภาษาคนอย่างตรงไปตรงมาว่าทำไมบัญชีปลายทางถึงน่าสงสัย เช่น &ldquo;บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันที&rdquo; และปล่อยให้ผู้ใช้เป็นผู้ตัดสินใจขั้นสุดท้าย
            </p>
          </div>
        </div>
      </section>

      {/* Latency Benchmark SLA Table with Visual Bars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card rounded-2xl p-5 sm:p-7 space-y-5 border border-white/10 bg-[#0B132B]/75 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label mb-1">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>Benchmark 200 Iterations</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">ประสิทธิภาพความเร็วเทียบ SLA ธนาคาร (&lt; 80ms)</h2>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded tracking-wider">
              TARGET SLA: &lt; 80.0 MS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] font-mono tracking-wider text-slate-400 uppercase bg-black/40 border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">ขั้นตอนการประมวลผล (Pipeline Stage)</th>
                  <th className="py-3 px-4 text-center">เกณฑ์ SLA</th>
                  <th className="py-3 px-4 text-center">เวลาที่วัดได้จริง</th>
                  <th className="py-3 px-4">เปรียบเทียบเชิงภาพ</th>
                  <th className="py-3 px-4 text-right">ความเร็วสัมพัทธ์</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300 font-mono">
                <tr className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3.5 px-4 font-sans font-bold text-white">TrustGraph Pre-Transaction (P50 Median)</td>
                  <td className="py-3.5 px-4 text-center text-slate-400">&lt; 80.0 ms</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-400 tabular-nums">3.85 ms</td>
                  <td className="py-3.5 px-4">
                    <div className="w-28 bg-black/50 h-2 rounded-full overflow-hidden border border-white/10">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '4.8%' }}></div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-right text-emerald-300 font-sans font-semibold">เร็วกว่าเกณฑ์ 20x</td>
                </tr>
                <tr className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3.5 px-4 font-sans font-bold text-white">TrustGraph Pre-Transaction (P95)</td>
                  <td className="py-3.5 px-4 text-center text-slate-400">&lt; 80.0 ms</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-400 tabular-nums">5.11 ms</td>
                  <td className="py-3.5 px-4">
                    <div className="w-28 bg-black/50 h-2 rounded-full overflow-hidden border border-white/10">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '6.3%' }}></div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-right text-emerald-300 font-sans font-semibold">เร็วกว่าเกณฑ์ 15x</td>
                </tr>
                <tr className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3.5 px-4 font-sans font-bold text-white">TrustGraph Pre-Transaction (P99 Tail Latency)</td>
                  <td className="py-3.5 px-4 text-center text-slate-400">&lt; 80.0 ms</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-400 tabular-nums">11.62 ms</td>
                  <td className="py-3.5 px-4">
                    <div className="w-28 bg-black/50 h-2 rounded-full overflow-hidden border border-white/10">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '14.5%' }}></div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-right text-emerald-300 font-sans font-semibold">เร็วกว่าเกณฑ์ 7x</td>
                </tr>
                <tr className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3.5 px-4 font-sans font-bold text-white">Core Triton ONNX Inference (P99)</td>
                  <td className="py-3.5 px-4 text-center text-slate-400">&lt; 80.0 ms</td>
                  <td className="py-3.5 px-4 text-center font-bold text-slate-200 tabular-nums">0.27 ms</td>
                  <td className="py-3.5 px-4">
                    <div className="w-28 bg-black/50 h-2 rounded-full overflow-hidden border border-white/10">
                      <div className="bg-cyan-400 h-full rounded-full" style={{ width: '1%' }}></div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-right text-slate-300 font-sans font-semibold">Sub-millisecond</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="bento-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 bg-[#0B132B]/75">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">สนใจศึกษาสถาปัตยกรรมระดับ Production ของระบบ?</h3>
            <p className="text-xs text-slate-400">ดูแผนภาพสถาปัตยกรรม Kafka, Feast Feature Store, Triton Inference Server, และ R-GCN</p>
          </div>
          <Link
            to="/architecture"
            className="btn-kplus px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shrink-0"
          >
            <span>ไปที่หน้า AI Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
