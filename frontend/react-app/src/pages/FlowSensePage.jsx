import React from 'react';
import StatusHorizonBar from '../components/StatusHorizonBar';
import MicroSweepVault from '../components/MicroSweepVault';
import { ArrowRight, Compass, RotateCcw, BellOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FlowSensePage() {
  return (
    <div className="py-10 space-y-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card rounded-2xl p-6 sm:p-8 space-y-4 border-slate-200/90 shadow-sm">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>Module A: Flexible Liquidity &amp; Autonomous Saving</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
              FlowSense: สภาพคล่องยืดหยุ่นและระบบออมเงินอัตโนมัติ
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              ตอบโจทย์คนเริ่มทำงาน (First Jobbers รายได้ 18k–35k บาท) ที่ใช้ชีวิตเดือนชนเดือนและต้องการออมเงินแบบ Autopilot โดยไม่ต้องจดบัญชีรายรับรายจ่าย พร้อมคืนความอิสระด้วยฟังก์ชัน <strong>1-Tap Undo</strong> เรียกเงินคืนเข้าบัญชีหลักได้ 100% ทันทีไร้ค่าปรับเมื่อถึงกำหนดจ่ายบิล
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Components (Status Horizon Bar & Micro-Sweep) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>3 Core FlowSense Innovations</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
            สถาปัตยกรรมจัดการสภาพคล่องที่ไม่ทำตัวเป็นผู้ปกครอง
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
            ออกแบบบนพฤติกรรมจริงของ First Jobbers เพื่อแก้ปัญหา Budget Burnout และรักษาเงินฝาก CASA ให้กับธนาคาร
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pillar 1: Status Horizon Bar */}
          <div className="bento-card rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-[10px] font-mono tracking-wider text-emerald-800 font-semibold uppercase">PILLAR 01</span>
              <Compass className="w-4 h-4 text-emerald-700" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900">Status Horizon Bar</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              แถบแสดงสถานะเส้นขอบฟ้าตัวเดียวบนหน้าจอหลักของบัญชี คาดการณ์สภาพคล่องสิ้นเดือนโดยคำนวณจากภาระผูกพันประจำ (ค่าเช่า, บัตรเครดิต, ค่าน้ำไฟ) ช่วยตัดความจำเป็นในการจดงบประมาณรายวันแบบเดิมๆ
            </p>
          </div>

          {/* Pillar 2: Micro-Sweep with 1-Tap Undo */}
          <div className="bento-card rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-[10px] font-mono tracking-wider text-emerald-800 font-semibold uppercase">PILLAR 02</span>
              <RotateCcw className="w-4 h-4 text-emerald-700" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900">Micro-Sweep with 1-Tap Undo</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              กวาดเงินส่วนเกินขนาดเล็กเข้าบัญชีย่อยดอกเบี้ยสูงเฉพาะเมื่อกระแสเงินสดเอื้ออำนวย หากยอดเงินในบัญชีหลักเหลือน้อย ระบบ 1-Tap Recall จะดึงเงินคืนเข้าบัญชีหลัก 100% ทันทีโดยไม่มีค่าธรรมเนียมหรือการรอคอย
            </p>
          </div>

          {/* Pillar 3: Commitment Warnings & Alert Suppression */}
          <div className="bento-card rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-[10px] font-mono tracking-wider text-slate-500 font-medium uppercase">PILLAR 03</span>
              <BellOff className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900">Commitment Warnings</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              ระงับการแจ้งเตือนช่วงยอดเงินลดลงตามวงจรปกติ (Normal Dips) เพื่อป้องกัน Alert Fatigue และจะส่งสัญญาณเตือนเฉพาะเมื่อภาระผูกพันคงที่ตกอยู่ในความเสี่ยงโดยตรงจากอัตราการใช้จ่ายปัจจุบัน
            </p>
          </div>
        </div>
      </section>

      {/* Data Science Table Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card rounded-xl p-5 space-y-2 border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-[10px] font-mono tracking-wider text-emerald-800 font-semibold uppercase">DATA SCIENCE ARCHITECTURE</span>
            <span className="font-mono text-xs text-slate-500 tabular-nums">30-Day Liquidity Margin</span>
          </div>
          <h4 className="text-sm font-semibold text-slate-900">LightGBM with Rolling-Window Lag Features &amp; Transaction Seasonality</h4>
          <p className="text-xs text-slate-600 font-normal leading-relaxed">
            แบบจำลอง Time-Series LightGBM เรียนรู้แบบแผนการรับเงินเดือน การจับจ่ายช่วงวันหยุดสุดสัปดาห์ (Weekend Spikes) และคำนวณ Safe Liquidity Margin ล่วงหน้า 30 วัน เพื่อให้ระบบระงับการแจ้งเตือนพร่ำเพรื่อได้อย่างแม่นยำ
          </p>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="bento-card rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-slate-200/90 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">ต้องการทดสอบการตรวจจับมิจฉาชีพด้วย TrustGraph?</h3>
            <p className="text-xs text-slate-500 font-normal">สัมผัสเกราะสกัดบัญชีม้าความเร็วสูงระดับ &lt; 80ms SLA ด้วย R-GCN</p>
          </div>
          <Link
            to="/trustgraph"
            className="inline-flex items-center gap-1.5 bg-[#064E3B] hover:bg-[#022C22] text-white px-4 py-2 rounded-lg font-medium text-xs border border-emerald-900/30 shadow-sm transition-all shrink-0"
          >
            <span>ไปที่หน้า TrustGraph</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
