import React from 'react';
import TrustGraphCard from '../components/TrustGraphCard';
import { ArrowRight, Zap, ScanFace, AlertTriangle, ShieldCheck, Activity, CheckCircle2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Velaris from '../components/ui/velaris';
import ScrollReveal from '../components/ScrollReveal';

export default function TrustGraphPage({ onOpenScamModal }) {
  const scrollToContent = () => {
    document.getElementById('trustgraph-workspace')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* ========================================================================= */}
      {/* 1. EXPANSIVE HERO HEADER (Living WebGL Atmosphere)                        */}
      {/* ========================================================================= */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        
        {/* Full Viewport Velaris WebGL Canvas Background */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <Velaris
            bg="#070B12"
            colors={["#F43F5E", "#10B981", "#059669", "#070B12"]}
            speed={0.9}
            grain={0.22}
            height="100%"
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center py-12">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md shadow-lg shadow-rose-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span>Module B: Targeted Anti-Scam Verification</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
            <span className="block">TrustGraph: สกัดบัญชีม้าตรงจุด</span>
            <span className="block mt-2">
              <span className="text-gradient-kplus whitespace-nowrap">ไร้ขั้นตอนซ้ำซ้อน</span>{' '}
              <span className="text-slate-400 text-lg sm:text-2xl font-normal font-mono">(&lt; 80ms SLA)</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-normal mb-8">
            สกัดขบวนการหลอกลวง (Task Scams &amp; Investment Scams) ด้วยสถาปัตยกรรม R-GCN ระดับ Sub-millisecond: รายการปกติผ่านฉลุยใน 3.8ms และใช้ Micro-Auth สแกนหน้า 5 วินาทีเฉพาะเมื่อพบม้าวิกฤต โดยไม่ต้องหน่วงเวลา 15 นาทีตามอำเภอใจ
          </p>

          {/* Live Telemetry Pill Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs mb-8">
            <div className="px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-slate-300 flex items-center gap-2 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>P99 Inference: <strong className="text-emerald-400">11.62ms</strong></span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-slate-300 backdrop-blur-md">
              Core SLA: <strong className="text-white">&lt; 80.0ms</strong>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-300 backdrop-blur-md">
              Arbitrary Lock: <strong className="text-rose-200">0s (None)</strong>
            </div>
          </div>

          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors group cursor-pointer"
          >
            <span>สำรวจโครงข่าย TrustGraph Card และการทำงาน</span>
            <ChevronDown className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN INTERACTIVE CARD (Revealed on Scroll, Reduced Borders)           */}
      {/* ========================================================================= */}
      <section 
        id="trustgraph-workspace" 
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
      >
        <ScrollReveal>
          <TrustGraphCard onOpenScamModal={onOpenScamModal} showHeader={false} />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 3. 3 PILLARS OF SECURITY ARCHITECTURE (Revealed on Scroll)               */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <ScrollReveal>
          <div className="space-y-6">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 tech-label text-xs">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>3 Pillars of Security Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-[1.4]">
                สถาปัตยกรรมความปลอดภัยที่รักษาประสบการณ์ผู้ใช้งาน
              </h2>
              <p className="text-sm text-slate-300/90 leading-relaxed">
                แก้ปัญหาการล็อคบัญชี 15 นาทีตามอำเภอใจ ด้วยการตรวจจับความเสี่ยงเฉพาะเจาะจง
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Pillar 1 */}
              <div className="rounded-3xl p-6 sm:p-7 space-y-4 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                  <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">PILLAR 01</span>
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">Zero-Delay Baseline</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  การโอนเงินในชีวิตประจำวันไปยังบัญชีที่รู้จักหรือบัญชีความเสี่ยงต่ำ จะดำเนินการทันทีในเวลาเฉลี่ย 3.8ms โดยไม่มีขั้นตอนเพิ่มเติมแม้แต่ขั้นตอนเดียว (Zero Added Steps)
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-3xl p-6 sm:p-7 space-y-4 border border-rose-500/25 bg-rose-950/20 backdrop-blur-xl shadow-xl hover:border-rose-500/40 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                  <span className="text-[10px] font-mono tracking-wider text-rose-300 font-bold uppercase">PILLAR 02</span>
                  <ScanFace className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">Micro-Auth for Critical Anomaly</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  ยกเลิกการหน่วงเวลา 15 นาทีหรือการล็อคบัญชีที่น่าหงุดหงิด หากตรวจพบความผิดปกติวิกฤต ระบบจะกระตุ้นการสแกนใบหน้าเพียง 5 วินาทีเพื่อดึงสติและยืนยันผู้ใช้งานจริง พร้อมแสดงหน้าต่างยืนยันเพียงครั้งเดียว
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-3xl p-6 sm:p-7 space-y-4 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">PILLAR 03</span>
                  <AlertTriangle className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">Direct Risk Reasoning</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  บอกเหตุผลภาษาคนอย่างตรงไปตรงมาว่าทำไมบัญชีปลายทางถึงน่าสงสัย เช่น &ldquo;บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันที&rdquo; และปล่อยให้ผู้ใช้เป็นผู้ตัดสินใจขั้นสุดท้าย
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 4. LATENCY BENCHMARK SLA TABLE (Revealed on Scroll, Reduced Borders)      */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <ScrollReveal>
          <div className="rounded-3xl p-6 sm:p-8 space-y-6 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.05]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 tech-label mb-2">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Benchmark 200 Iterations</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">ประสิทธิภาพความเร็วเทียบ SLA ธนาคาร (&lt; 80ms)</h2>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full tracking-wider">
                TARGET SLA: &lt; 80.0 MS
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="text-[10px] font-mono tracking-wider text-slate-400 uppercase bg-black/30 border-b border-white/[0.05]">
                  <tr>
                    <th className="py-3.5 px-4">ขั้นตอนการประมวลผล (Pipeline Stage)</th>
                    <th className="py-3.5 px-4 text-center">เกณฑ์ SLA</th>
                    <th className="py-3.5 px-4 text-center">เวลาที่วัดได้จริง</th>
                    <th className="py-3.5 px-4">เปรียบเทียบเชิงภาพ</th>
                    <th className="py-3.5 px-4 text-right">ความเร็วสัมพัทธ์</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] text-slate-300 font-mono">
                  <tr className="hover:bg-white/[0.02] transition-colors">
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
                  <tr className="hover:bg-white/[0.02] transition-colors">
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
                  <tr className="hover:bg-white/[0.02] transition-colors">
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
                  <tr className="hover:bg-white/[0.02] transition-colors">
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
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 5. NAVIGATION CTA (Revealed on Scroll)                                   */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <ScrollReveal delay={100}>
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-white">สนใจศึกษาสถาปัตยกรรมระดับ Production ของระบบ?</h3>
              <p className="text-xs text-slate-400">ดูแผนภาพสถาปัตยกรรม Kafka, Feast Feature Store, Triton Inference Server, และ R-GCN</p>
            </div>
            <Link
              to="/architecture"
              className="btn-kplus px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 shrink-0 transition-transform hover:scale-105"
            >
              <span>ไปที่หน้า AI Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
