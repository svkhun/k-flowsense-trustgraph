import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertTriangle, ShieldCheck, BellOff, Calendar } from 'lucide-react';

export default function StatusHorizonBar() {
  const [spentFactor, setSpentFactor] = useState(450); // interactive spending slider
  const monthlySalary = 28000;
  const mainBalance = 24500 - spentFactor;
  
  // Recurring commitments (rent, debt/credit card, utilities)
  const rentCommitment = 7000;
  const debtCommitment = 3360;
  const utilCommitment = 1400;
  const totalCommitments = rentCommitment + debtCommitment + utilCommitment; // 11,760

  // Month-end projection
  const projectedMonthEnd = Math.max(0, mainBalance - totalCommitments - (spentFactor * 0.75));
  const isCommitmentAtRisk = (mainBalance - totalCommitments) < 1500;
  const isNormalDip = mainBalance < 20000 && !isCommitmentAtRisk;

  // Horizon bar percentage
  const horizonPct = Math.min(100, Math.max(8, Math.round(((mainBalance - totalCommitments) / (monthlySalary * 0.5)) * 100)));

  return (
    <div className="bento-card rounded-xl p-6 space-y-6">
      
      {/* Title & Engine Mode */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white tracking-tight">Status Horizon Bar</h3>
            <span className="tech-label text-[10px] bg-white/[0.04] text-zinc-400 border border-white/10 px-1.5 py-0.5 rounded">
              FLOWSENSE
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5">
            ตัวชี้วัดสภาพคล่องสุทธิถึงวันเงินเดือนออก โดยคำนวณจากภาระผูกพันประจำ ขจัด Budget Burnout
          </p>
        </div>

        <div>
          {isCommitmentAtRisk ? (
            <span className="tech-label text-xs px-2.5 py-1 rounded bg-rose-950/60 text-rose-300 border border-rose-500/40 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>COMMITMENT WARNING</span>
            </span>
          ) : isNormalDip ? (
            <span className="tech-label text-xs px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 flex items-center gap-1.5">
              <BellOff className="w-3.5 h-3.5 text-zinc-400" />
              <span>ALERT SUPPRESSED (NORMAL DIP)</span>
            </span>
          ) : (
            <span className="tech-label text-xs px-2.5 py-1 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>RUNWAY HEALTHY</span>
            </span>
          )}
        </div>
      </div>

      {/* Main Single Clean Indicator: Status Horizon Bar */}
      <div className="p-5 rounded-lg bg-black/40 border border-white/[0.08] space-y-3">
        <div className="flex justify-between items-baseline">
          <div>
            <span className="tech-label text-[10px] text-zinc-400">
              สุทธิคาดการณ์ ณ วันเงินเดือนออก (28 ก.ย.)
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-num tracking-tight mt-1 text-white">
              <span className={isCommitmentAtRisk ? "text-rose-400" : "text-emerald-400"}>
                ฿{projectedMonthEnd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-mono text-sm font-bold text-zinc-300">{horizonPct}%</span>
            <span className="tech-label text-[10px] text-zinc-400 block">Runway Ratio</span>
          </div>
        </div>

        {/* Precision Progress Bar */}
        <div className="w-full h-2 rounded bg-zinc-800 overflow-hidden relative">
          <div
            className={`h-full transition-all duration-200 ${
              isCommitmentAtRisk
                ? "bg-rose-500"
                : isNormalDip
                ? "bg-amber-400"
                : "bg-[#00A950]"
            }`}
            style={{ width: `${horizonPct}%` }}
          ></div>
        </div>

        {/* Ledger Balance vs Obligations */}
        <div className="grid grid-cols-2 text-xs pt-1 text-zinc-400 border-t border-white/5 font-mono">
          <div>
            ยอดบัญชีปัจจุบัน: <span className="text-white font-semibold">฿{mainBalance.toLocaleString()}</span>
          </div>
          <div className="text-right">
            ภาระผูกพันคงที่รอหัก: <span className="text-zinc-200 font-semibold">฿{totalCommitments.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Commitment Warning & Suppression Telemetry */}
      <div className={`p-4 rounded-lg border text-xs leading-relaxed ${
        isCommitmentAtRisk
          ? "bg-rose-950/20 border-rose-500/30 text-rose-200"
          : isNormalDip
          ? "bg-zinc-900 border-zinc-700/60 text-zinc-300"
          : "bg-emerald-950/20 border-emerald-500/20 text-emerald-200"
      }`}>
        <div className="flex items-start gap-2.5">
          {isCommitmentAtRisk ? (
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          ) : isNormalDip ? (
            <BellOff className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
          ) : (
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          )}
          <div>
            <strong className="block font-semibold mb-0.5">
              {isCommitmentAtRisk
                ? "Commitment Warning (ตรวจพบความเสี่ยงต่อภาระคงที่):"
                : isNormalDip
                ? "Alert Suppressed (ระงับการแจ้งเตือนช่วงยอดเงินลดปกติ):"
                : "Safe Liquidity Margin (สภาพคล่องปลอดภัย):"}
            </strong>
            <p className="text-[12px] opacity-90">
              {isCommitmentAtRisk
                ? "อัตราการใช้จ่ายสะสมเริ่มกระทบต่อยอดเงินค่าเช่าห้องที่จะถึงกำหนดใน 5 วัน ระบบแนะนำให้ใช้ปุ่ม 1-Tap Undo เพื่อดึงเงินออมกลับมาล่วงหน้า"
                : isNormalDip
                ? "ยอดเงินลดลงตามวัฏจักรใช้จ่ายปกติ โมเดล LightGBM วิเคราะห์แล้วว่ายังครอบคลุมภาระผูกพันสิ้นเดือน ระบบจึงตัดเสียงรบกวนเพื่อป้องกัน Alert Fatigue"
                : "กระแสเงินสดรองรับค่าเช่าห้อง บิลบัตรเครดิต และค่าน้ำไฟครบถ้วน มีส่วนเกินพร้อมสำหรับ Micro-Sweeping อัตโนมัติ"}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Spending Simulation Slider */}
      <div className="p-4 rounded-lg bg-black/30 border border-white/5 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <label className="text-zinc-300 font-medium">
            จำลองอัตราการใช้จ่าย (ทดสอบ Horizon Bar &amp; Alert Suppression):
          </label>
          <span className="font-mono text-emerald-400 font-bold">+฿{spentFactor.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="100"
          max="12000"
          step="200"
          value={spentFactor}
          onChange={(e) => setSpentFactor(Number(e.target.value))}
          className="w-full h-1.5 bg-zinc-700 rounded appearance-none cursor-pointer accent-[#00A950]"
        />
        <div className="flex justify-between tech-label text-[10px] text-zinc-400">
          <span>ปกติ (Healthy)</span>
          <span>ปานกลาง (Suppressed)</span>
          <span>สูง (Risk Warning)</span>
        </div>
      </div>

      {/* Structured Obligations Ledger */}
      <div className="pt-2 border-t border-white/[0.08] space-y-2">
        <div className="tech-label text-[10px] text-zinc-400">
          ภาระผูกพันประจำเดือน (Recurring Commitments Breakdown)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
          
          <div className="p-2.5 rounded bg-black/30 border border-white/5">
            <div className="flex justify-between text-zinc-400 text-[11px]">
              <span>ค่าเช่าห้อง</span>
              <span className="text-emerald-400">Covered</span>
            </div>
            <div className="text-sm font-bold text-white mt-1">฿{rentCommitment.toLocaleString()}</div>
            <span className="text-[10px] text-zinc-400 block">หักวันที่ 1</span>
          </div>

          <div className="p-2.5 rounded bg-black/30 border border-white/5">
            <div className="flex justify-between text-zinc-400 text-[11px]">
              <span>ผ่อนชำระ/บัตร</span>
              <span className="text-emerald-400">Covered</span>
            </div>
            <div className="text-sm font-bold text-white mt-1">฿{debtCommitment.toLocaleString()}</div>
            <span className="text-[10px] text-zinc-400 block">หักวันที่ 25</span>
          </div>

          <div className="p-2.5 rounded bg-black/30 border border-white/5">
            <div className="flex justify-between text-zinc-400 text-[11px]">
              <span>ค่าน้ำ-ไฟ-เน็ต</span>
              <span className="text-emerald-400">Covered</span>
            </div>
            <div className="text-sm font-bold text-white mt-1">฿{utilCommitment.toLocaleString()}</div>
            <span className="text-[10px] text-zinc-400 block">หักวันที่ 28</span>
          </div>

        </div>
      </div>

    </div>
  );
}
