import React from 'react';
import StatusHorizonBar from '../components/StatusHorizonBar';
import MicroSweepVault from '../components/MicroSweepVault';
import { ArrowRight, Compass, RotateCcw, BellOff, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FlowSensePage() {
  return (
    <div className="py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="bento-card-active rounded-2xl p-6 sm:p-8 space-y-4 border border-emerald-500/40 bg-[#18191D]/85 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Module A: Flexible Liquidity &amp; Autonomous Saving</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.58] sm:leading-[1.52] pb-1">
              FlowSense: <span className="text-gradient-kplus">สภาพคล่องยืดหยุ่นและระบบออมเงินอัตโนมัติ</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-[1.85] font-normal pt-1">
              ตอบโจทย์คนเริ่มทำงาน (First Jobbers รายได้ 18k–35k บาท) ที่ใช้ชีวิตเดือนชนเดือนและต้องการออมเงินแบบ Autopilot โดยไม่ต้องจดบัญชีรายรับรายจ่าย พร้อมคืนความอิสระด้วยฟังก์ชัน <strong className="text-emerald-400">1-Tap Undo</strong> เรียกเงินคืนเข้าบัญชีหลักได้ 100% ทันทีไร้ค่าปรับเมื่อถึงกำหนดจ่ายบิล
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Components (Status Horizon Bar & Micro-Sweep) */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <StatusHorizonBar />
          </div>
          <div className="lg:col-span-5">
            <MicroSweepVault />
          </div>
        </div>
      </section>

      {/* 3 Core Architecture Pillars of FlowSense (from Pitch) */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-3xl space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>3 Core FlowSense Innovations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-[1.5]">
            สถาปัตยกรรมจัดการสภาพคล่องที่ไม่ทำตัวเป็นผู้ปกครอง
          </h2>
          <p className="text-sm text-slate-300 leading-[1.75]">
            ออกแบบบนพฤติกรรมจริงของ First Jobbers เพื่อแก้ปัญหา Budget Burnout และรักษาเงินฝาก CASA ให้กับธนาคาร
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pillar 1 */}
          <div className="bento-card rounded-2xl p-6 space-y-3.5 border border-white/10 bg-[#18191D]/75">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">PILLAR 01</span>
              <Compass className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-base font-bold text-white leading-[1.5]">Status Horizon Bar</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] font-normal">
              แถบแสดงสถานะเส้นขอบฟ้าตัวเดียวบนหน้าจอหลักของบัญชี คาดการณ์สภาพคล่องสิ้นเดือนโดยคำนวณจากภาระผูกพันประจำ (ค่าเช่า, บัตรเครดิต, ค่าน้ำไฟ) ช่วยตัดความจำเป็นในการจดงบประมาณรายวันแบบเดิมๆ
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bento-card rounded-2xl p-6 space-y-3.5 border border-emerald-500/30 bg-emerald-950/15">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">PILLAR 02</span>
              <RotateCcw className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-base font-bold text-white leading-[1.5]">Micro-Sweep with 1-Tap Undo</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] font-normal">
              กวาดเงินส่วนเกินขนาดเล็กเข้าบัญชีย่อยดอกเบี้ยสูงเฉพาะเมื่อกระแสเงินสดเอื้ออำนวย หากยอดเงินในบัญชีหลักเหลือน้อย ระบบ 1-Tap Recall จะดึงเงินคืนเข้าบัญชีหลัก 100% ทันทีโดยไม่มีค่าธรรมเนียมหรือการรอคอย
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bento-card rounded-2xl p-6 space-y-3.5 border border-white/10 bg-[#18191D]/75">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">PILLAR 03</span>
              <BellOff className="w-5 h-5 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-white leading-[1.5]">Commitment Warnings</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] font-normal">
              ระงับการแจ้งเตือนช่วงยอดเงินลดลงตามวงจรปกติ (Normal Dips) เพื่อป้องกัน Alert Fatigue และจะส่งสัญญาณเตือนเฉพาะเมื่อภาระผูกพันคงที่ตกอยู่ในความเสี่ยงโดยตรงจากอัตราการใช้จ่ายปัจจุบัน
            </p>
          </div>
        </div>
      </section>

      {/* Data Science Table Preview */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="bento-card rounded-2xl p-6 space-y-3 border border-white/10 bg-[#18191D]/75">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">DATA SCIENCE ARCHITECTURE</span>
            <span className="font-mono text-xs text-slate-400 tabular-nums">30-Day Liquidity Margin</span>
          </div>
          <h4 className="text-base font-bold text-white">LightGBM with Rolling-Window Lag Features &amp; Transaction Seasonality</h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            แบบจำลอง Time-Series LightGBM เรียนรู้แบบแผนการรับเงินเดือน การจับจ่ายช่วงวันหยุดสุดสัปดาห์ (Weekend Spikes) และคำนวณ Safe Liquidity Margin ล่วงหน้า 30 วัน เพื่อให้ระบบระงับการแจ้งเตือนพร่ำเพรื่อได้อย่างแม่นยำ
          </p>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-2">
        <div className="bento-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 bg-[#18191D]/75">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">ต้องการทดสอบการตรวจจับมิจฉาชีพด้วย TrustGraph?</h3>
            <p className="text-xs text-slate-400">สัมผัสเกราะสกัดบัญชีม้าความเร็วสูงระดับ &lt; 80ms SLA ด้วย R-GCN</p>
          </div>
          <Link
            to="/trustgraph"
            className="btn-kplus px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shrink-0"
          >
            <span>ไปที่หน้า TrustGraph</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
