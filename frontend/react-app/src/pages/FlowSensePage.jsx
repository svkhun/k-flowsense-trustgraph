import React from 'react';
import StatusHorizonBar from '../components/StatusHorizonBar';
import MicroSweepVault from '../components/MicroSweepVault';
import { Compass, TrendingUp, Sparkles, ArrowRight, RotateCcw, Calendar, BellOff, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FlowSensePage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border-emerald-500/30">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              <span>Module A: Flexible Liquidity &amp; Autonomous Saving</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              FlowSense: สภาพคล่องยืดหยุ่น <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                ออมเงินอัตโนมัติ ไร้ Budget Burnout
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              ตอบโจทย์กลุ่มคนเริ่มทำงาน (First Jobbers รายได้ 18k–35k บาท) ที่ใช้ชีวิตเดือนชนเดือนและต้องการออมเงินแบบ Autopilot โดยไม่ต้องจดบัญชีรายรับรายจ่าย พร้อมคืนความอิสระด้วยฟังก์ชัน 1-Tap Undo เรียกเงินคืนเข้าบัญชีหลักได้ 100% ทันทีไร้ค่าปรับเมื่อถึงกำหนดจ่ายบิล
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Components (Status Horizon Bar & Micro-Sweep) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <StatusHorizonBar />
          </div>
          <div className="lg:col-span-5">
            <MicroSweepVault />
          </div>
        </div>
      </section>

      {/* 3 Core Architecture Pillars of FlowSense (from Pitch) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>3 นวัตกรรมหลักของ FlowSense</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            สถาปัตยกรรมจัดการสภาพคล่องที่ไม่ทำตัวเป็นผู้ปกครอง
          </h2>
          <p className="text-sm text-slate-400">
            ออกแบบบนพฤติกรรมจริงของ First Jobbers เพื่อแก้ปัญหา Budget Burnout และรักษาเงินฝาก CASA ให้กับธนาคาร
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Status Horizon Bar */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">1. Status Horizon Bar</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              แถบแสดงสถานะเส้นขอบฟ้าตัวเดียวบนหน้าจอหลักของบัญชี คาดการณ์สภาพคล่องสิ้นเดือนโดยคำนวณจากภาระผูกพันประจำ (ค่าเช่า, บัตรเครดิต, ค่าน้ำไฟ) ช่วยตัดความจำเป็นในการจดงบประมาณรายวันแบบเดิมๆ
            </p>
          </div>

          {/* Pillar 2: Micro-Sweep with 1-Tap Undo */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">2. Micro-Sweep with 1-Tap Undo</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              กวาดเงินส่วนเกินขนาดเล็กเข้าบัญชีย่อยดอกเบี้ยสูงเฉพาะเมื่อกระแสเงินสดเอื้ออำนวย หากยอดเงินในบัญชีหลักเหลือน้อย ระบบ 1-Tap Recall จะดึงเงินคืนเข้าบัญชีหลัก 100% ทันทีโดยไม่มีบทลงโทษหรือการรอคอย
            </p>
          </div>

          {/* Pillar 3: Commitment Warnings & Alert Suppression */}
          <div className="glass-card rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <BellOff className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">3. Commitment Warnings</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ระงับการแจ้งเตือนช่วงยอดเงินลดลงตามวงจรปกติ (Normal Dips) เพื่อป้องกัน Alert Fatigue และจะส่งสัญญาณเตือนเฉพาะเมื่อภาระผูกพันคงที่ (เช่น บิลบัตรเครดิตหรือค่าเช่าห้อง) ตกอยู่ในความเสี่ยงโดยตรงจากอัตราการใช้จ่ายปัจจุบัน
            </p>
          </div>

        </div>
      </section>

      {/* Data Science Table Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-[#09111E] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Data Science Method</span>
            <span className="text-xs font-mono text-slate-400">30-Day Liquidity Margin</span>
          </div>
          <h4 className="text-base font-bold text-white">LightGBM with Rolling-Window Lag Features &amp; Transaction Seasonality</h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            แบบจำลอง Time-Series LightGBM เรียนรู้แบบแผนการรับเงินเดือน การจับจ่ายช่วงวันหยุดสุดสัปดาห์ (Weekend Spikes) และคำนวณ Safe Liquidity Margin ล่วงหน้า 30 วัน เพื่อให้ระบบระงับการแจ้งเตือนพร่ำเพรื่อได้อย่างแม่นยำ
          </p>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-bold text-white">ต้องการทดสอบการตรวจจับมิจฉาชีพด้วย TrustGraph?</h3>
            <p className="text-xs sm:text-sm text-slate-300">สัมผัสเกราะสกัดบัญชีม้าความเร็วสูงระดับ sub-80ms ด้วย R-GCN</p>
          </div>
          <Link
            to="/trustgraph"
            className="inline-flex items-center gap-2 bg-[#00A950] hover:bg-[#008F43] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <span>ไปที่หน้า TrustGraph</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
