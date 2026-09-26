import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertTriangle, ShieldCheck, Calendar, BellOff } from 'lucide-react';

export default function StatusHorizonBar() {
  const [spentFactor, setSpentFactor] = useState(380); // interactive slider for spending simulation
  const monthlySalary = 28000;
  const mainBalance = 24500 - spentFactor;
  
  // Recurring commitments (rent, credit card/debt emi, utilities)
  const rentCommitment = 7000;
  const debtCommitment = 3360;
  const utilCommitment = 1400;
  const totalCommitments = rentCommitment + debtCommitment + utilCommitment; // 11,760

  // Horizon month-end projection
  const projectedMonthEnd = Math.max(0, mainBalance - totalCommitments - (spentFactor * 0.8));
  const isCommitmentAtRisk = (mainBalance - totalCommitments) < 1500;
  const isNormalDip = mainBalance < 20000 && !isCommitmentAtRisk;

  // Horizon bar percentage
  const horizonPct = Math.min(100, Math.max(10, Math.round(((mainBalance - totalCommitments) / (monthlySalary * 0.5)) * 100)));

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">Status Horizon Bar</h3>
              <span className="text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                FlowSense
              </span>
            </div>
            <p className="text-xs text-slate-400">
              ตัวบ่งชี้เดียวที่คาดการณ์สภาพคล่องสิ้นเดือนจากภาระผูกพันประจำ ไม่ต้องจดงบรายวัน (No Budget Burnout)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isCommitmentAtRisk ? (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5 animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Commitment Warning</span>
            </span>
          ) : isNormalDip ? (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
              <BellOff className="w-3.5 h-3.5" />
              <span>Normal Dip (Alert Suppressed)</span>
            </span>
          ) : (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Healthy Horizon Runway</span>
            </span>
          )}
        </div>
      </div>

      {/* Main Single Clean Indicator: Status Horizon Bar */}
      <div className="p-5 rounded-2xl bg-[#09111E] border border-white/[0.08] space-y-3">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">คาดการณ์สภาพคล่องคงเหลือ ณ วันเงินเดือนออก (28 ก.ย.)</span>
            <div className="text-2xl sm:text-3xl font-black text-white font-num mt-0.5 flex items-baseline gap-2">
              <span className={isCommitmentAtRisk ? "text-rose-400" : "text-emerald-400"}>
                ฿ {projectedMonthEnd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="text-xs font-normal text-slate-400">สุทธิหลังหักภาระผูกพันทุกรายการ</span>
            </div>
          </div>
          <span className="text-sm font-mono font-bold text-slate-300">{horizonPct}% Runway</span>
        </div>

        {/* Clean Horizon Bar */}
        <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden relative">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isCommitmentAtRisk 
                ? "bg-gradient-to-r from-rose-500 to-amber-500"
                : isNormalDip
                ? "bg-gradient-to-r from-emerald-500 to-cyan-400"
                : "bg-gradient-to-r from-[#00A950] via-emerald-400 to-teal-300"
            }`}
            style={{ width: `${horizonPct}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-[11px] text-slate-400 pt-1">
          <span>ยอดเงินในบัญชีปัจจุบัน: <b className="text-white font-mono">฿{mainBalance.toLocaleString()}</b></span>
          <span>ภาระผูกพันคงที่รอหัก: <b className="text-amber-300 font-mono">฿{totalCommitments.toLocaleString()}</b></span>
        </div>
      </div>

      {/* Commitment Warnings Logic (Pitch Core Feature) */}
      <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed transition-all ${
        isCommitmentAtRisk
          ? "bg-rose-950/40 border-rose-500/40 text-rose-200"
          : isNormalDip
          ? "bg-cyan-950/30 border-cyan-500/30 text-cyan-200"
          : "bg-emerald-950/30 border-emerald-500/30 text-emerald-200"
      }`}>
        <div className="flex items-start gap-2.5">
          {isCommitmentAtRisk ? (
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          ) : isNormalDip ? (
            <BellOff className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          ) : (
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          )}
          <div>
            <span className="font-bold">
              {isCommitmentAtRisk
                ? "🚨 Commitment Warning (เตือนเฉพาะเมื่อภาระผูกพันเสี่ยงจริง): "
                : isNormalDip
                ? "🔕 Alert Suppressed (ระงับการแจ้งเตือนช่วงเงินลดตามปกติ): "
                : "✅ สภาพคล่องแข็งแรง: "}
            </span>
            <span>
              {isCommitmentAtRisk
                ? `อัตราการใช้จ่ายปัจจุบันเริ่มกระทบต่อค่าเช่าห้องที่จะถึงกำหนดในอีก 5 วัน แนะนำใช้ฟังก์ชัน 1-Tap Undo เพื่อดึงเงินออมกลับมาล่วงหน้า`
                : isNormalDip
                ? `ยอดเงินลดลงตามวงจรการใช้ชีวิตปกติ แต่แบบจำลอง LightGBM คำนวณแล้วว่ายังครอบคลุมภาระคงที่สิ้นเดือน ระบบจึงไม่ส่งเสียงรบกวนเพื่อป้องกัน Alert Fatigue`
                : `กระแสเงินสดรองรับค่าเช่า บิลบัตรเครดิต และค่าน้ำไฟครบถ้วน มีส่วนเกินพร้อมสำหรับ Micro-Sweeping`}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Spending Simulation Slider */}
      <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <label className="text-slate-300 font-medium">
            จำลองพฤติกรรมการใช้จ่ายเพื่อทดสอบการทำงานของ Horizon Bar &amp; Alert Suppression:
          </label>
          <span className="font-mono text-emerald-400 font-bold">ใช้จ่ายสะสม +฿{spentFactor.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="100"
          max="12000"
          step="200"
          value={spentFactor}
          onChange={(e) => setSpentFactor(Number(e.target.value))}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#00A950]"
        />
        <div className="flex justify-between text-[10px] text-slate-500">
          <span>ใช้จ่ายต่ำ (Healthy)</span>
          <span>ใช้จ่ายปานกลาง (Normal Dip - Alert Suppressed)</span>
          <span>ใช้จ่ายสูงมาก (Commitment At Risk)</span>
        </div>
      </div>

      {/* 3 Recurring Commitments Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs border-t border-white/[0.08]">
        <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
          <div className="text-slate-400 flex items-center justify-between text-[11px]">
            <span>ค่าเช่าห้อง/คอนโด (25%)</span>
            <span className="text-emerald-400 font-bold">มีเงินพอ</span>
          </div>
          <div className="text-sm font-bold text-white font-mono">฿ {rentCommitment.toLocaleString()}</div>
          <span className="text-[10px] text-slate-500 block">หักอัตโนมัติรอบวันที่ 1</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
          <div className="text-slate-400 flex items-center justify-between text-[11px]">
            <span>หนี้ผ่อนชำระ/บัตร (12%)</span>
            <span className="text-emerald-400 font-bold">มีเงินพอ</span>
          </div>
          <div className="text-sm font-bold text-white font-mono">฿ {debtCommitment.toLocaleString()}</div>
          <span className="text-[10px] text-slate-500 block">หักอัตโนมัติรอบวันที่ 25</span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
          <div className="text-slate-400 flex items-center justify-between text-[11px]">
            <span>ค่าน้ำ-ไฟ-เน็ต (5%)</span>
            <span className="text-emerald-400 font-bold">มีเงินพอ</span>
          </div>
          <div className="text-sm font-bold text-white font-mono">฿ {utilCommitment.toLocaleString()}</div>
          <span className="text-[10px] text-slate-500 block">หักอัตโนมัติรอบวันที่ 28</span>
        </div>
      </div>

    </div>
  );
}
