import React from 'react';
import StatusHorizonBar from '../components/StatusHorizonBar';
import MicroSweepVault from '../components/MicroSweepVault';
import { ArrowRight, Compass, RotateCcw, BellOff, Sparkles, TrendingUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Velaris from '../components/ui/velaris';
import ScrollReveal from '../components/ScrollReveal';

export default function FlowSensePage() {
  const scrollToContent = () => {
    document.getElementById('flowsense-workspace')?.scrollIntoView({ behavior: 'smooth' });
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
            colors={["#00F59B", "#00A950", "#059669", "#070B12"]}
            speed={0.9}
            grain={0.22}
            height="100%"
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center py-12">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md shadow-lg shadow-emerald-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Module A: Flexible Liquidity &amp; Autonomous Saving</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
            FlowSense: <span className="text-gradient-kplus">สภาพคล่องยืดหยุ่นและระบบออมเงินอัตโนมัติ</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-normal mb-8">
            ตอบโจทย์คนเริ่มทำงาน (First Jobbers รายได้ 18k–35k บาท) ที่ใช้ชีวิตเดือนชนเดือนและต้องการออมเงินแบบ Autopilot โดยไม่ต้องจดบัญชีรายรับรายจ่าย พร้อมคืนความอิสระด้วยฟังก์ชัน <strong className="text-emerald-400 font-semibold">1-Tap Undo</strong> เรียกเงินคืนเข้าบัญชีหลักได้ 100% ทันทีไร้ค่าปรับเมื่อถึงกำหนดจ่ายบิล
          </p>

          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors group cursor-pointer"
          >
            <span>สำรวจแถบสถานะและกลไก Micro-Sweep</span>
            <ChevronDown className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN INTERACTIVE COMPONENTS (Revealed on Scroll, Reduced Borders)     */}
      {/* ========================================================================= */}
      <section 
        id="flowsense-workspace" 
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8"
      >
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7">
              <StatusHorizonBar />
            </div>
            <div className="lg:col-span-5">
              <MicroSweepVault />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 3. 3 CORE PILLARS (Clean Cards, Reduced Borders)                         */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <ScrollReveal>
          <div className="space-y-6">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 tech-label text-xs">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>3 Core FlowSense Innovations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-[1.4]">
                สถาปัตยกรรมจัดการสภาพคล่องที่ไม่ทำตัวเป็นผู้ปกครอง
              </h2>
              <p className="text-sm text-slate-300/90 leading-relaxed">
                ออกแบบบนพฤติกรรมจริงของ First Jobbers เพื่อแก้ปัญหา Budget Burnout และรักษาเงินฝาก CASA ให้กับธนาคาร
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Pillar 1 */}
              <div className="rounded-3xl p-6 sm:p-7 space-y-4 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                  <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">PILLAR 01</span>
                  <Compass className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">Status Horizon Bar</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  แถบแสดงสถานะเส้นขอบฟ้าตัวเดียวบนหน้าจอหลักของบัญชี คาดการณ์สภาพคล่องสิ้นเดือนโดยคำนวณจากภาระผูกพันประจำ (ค่าเช่า, บัตรเครดิต, ค่าน้ำไฟ) ช่วยตัดความจำเป็นในการจดงบประมาณรายวันแบบเดิมๆ
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-3xl p-6 sm:p-7 space-y-4 border border-emerald-500/25 bg-emerald-950/20 backdrop-blur-xl shadow-xl hover:border-emerald-500/40 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                  <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">PILLAR 02</span>
                  <RotateCcw className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">Micro-Sweep with 1-Tap Undo</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  กวาดเงินส่วนเกินขนาดเล็กเข้าบัญชีย่อยดอกเบี้ยสูงเฉพาะเมื่อกระแสเงินสดเอื้ออำนวย หากยอดเงินในบัญชีหลักเหลือน้อย ระบบ 1-Tap Recall จะดึงเงินคืนเข้าบัญชีหลัก 100% ทันทีโดยไม่มีค่าธรรมเนียมหรือการรอคอย
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-3xl p-6 sm:p-7 space-y-4 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">PILLAR 03</span>
                  <BellOff className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">Commitment Warnings</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  ระงับการแจ้งเตือนช่วงยอดเงินลดลงตามวงจรปกติ (Normal Dips) เพื่อป้องกัน Alert Fatigue และจะส่งสัญญาณเตือนเฉพาะเมื่อภาระผูกพันคงที่ตกอยู่ในความเสี่ยงโดยตรงจากอัตราการใช้จ่ายปัจจุบัน
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 4. DATA SCIENCE ARCHITECTURE & CTA (Revealed on Scroll)                  */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
        <ScrollReveal>
          <div className="rounded-3xl p-6 sm:p-7 space-y-3.5 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">DATA SCIENCE ARCHITECTURE</span>
              <span className="font-mono text-xs text-slate-400 tabular-nums">30-Day Liquidity Margin</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">LightGBM with Rolling-Window Lag Features &amp; Transaction Seasonality</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              แบบจำลอง Time-Series LightGBM เรียนรู้แบบแผนการรับเงินเดือน การจับจ่ายช่วงวันหยุดสุดสัปดาห์ (Weekend Spikes) และคำนวณ Safe Liquidity Margin ล่วงหน้า 30 วัน เพื่อให้ระบบระงับการแจ้งเตือนพร่ำเพรื่อได้อย่างแม่นยำ
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-white">ต้องการทดสอบการตรวจจับมิจฉาชีพด้วย TrustGraph?</h3>
              <p className="text-xs text-slate-400">สัมผัสเกราะสกัดบัญชีม้าความเร็วสูงระดับ &lt; 80ms SLA ด้วย R-GCN</p>
            </div>
            <Link
              to="/trustgraph"
              className="btn-kplus px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 shrink-0 transition-transform hover:scale-105"
            >
              <span>ไปที่หน้า TrustGraph</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
