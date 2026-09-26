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
    <div className="bento-card rounded-xl p-6 sm:p-7 space-y-6">
      
      {/* Title & Engine Mode */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight">Status Horizon Bar</h3>
            <span className="tech-label text-[10px] bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded">
              FLOWSENSE
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-normal">
            ตัวชี้วัดสภาพคล่องสุทธิถึงวันเงินเดือนออก โดยคำนวณจากภาระผูกพันประจำ ขจัด Budget Burnout
          </p>
        </div>

        <div>
          {isCommitmentAtRisk ? (
            <span className="tech-label text-xs px-2.5 py-1 rounded-md bg-rose-50 text-rose-800 border border-rose-200 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>COMMITMENT WARNING</span>
            </span>
          ) : isNormalDip ? (
            <span className="tech-label text-xs px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5">
              <BellOff className="w-3.5 h-3.5 text-amber-600" />
              <span>ALERT SUPPRESSED (NORMAL DIP)</span>
            </span>
          ) : (
            <span className="tech-label text-xs px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>RUNWAY HEALTHY</span>
            </span>
          )}
        </div>
      </div>

      {/* Main Single Clean Indicator: Status Horizon Bar */}
      <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
        <div className="flex justify-between items-baseline">
          <div>
            <span className="tech-label text-[10px] text-slate-500">
              สุทธิคาดการณ์ ณ วันเงินเดือนออก (28 ก.ย.)
            </span>
            <div className="text-2xl sm:text-3xl font-semibold font-num tracking-tight mt-1">
              <span className={isCommitmentAtRisk ? "text-rose-700" : "text-emerald-800"}>
                ฿{projectedMonthEnd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-mono text-sm font-semibold text-slate-800">{horizonPct}%</span>
            <span className="tech-label text-[10px] text-slate-500 block">Runway Ratio</span>
          </div>
        </div>

        {/* Precision Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden relative">
          <div
            className={`h-full transition-all duration-200 rounded-full ${
              isCommitmentAtRisk
                ? "bg-rose-600"
                : isNormalDip
                ? "bg-amber-500"
                : "bg-[#064E3B]"
            }`}
            style={{ width: `${horizonPct}%` }}
          ></div>
        </div>

        {/* Ledger Balance vs Obligations */}
        <div className="grid grid-cols-2 text-xs pt-1.5 text-slate-500 border-t border-slate-200/80 font-mono">
          <div>
            ยอดบัญชีปัจจุบัน: <span className="text-slate-800 font-semibold">฿{mainBalance.toLocaleString()}</span>
          </div>
          <div className="text-right">
            ภาระผูกพันคงที่รอหัก: <span className="text-slate-800 font-semibold">฿{totalCommitments.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Commitment Warning & Suppression Telemetry */}
      <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
        isCommitmentAtRisk
          ? "bg-rose-50 border-rose-200 text-rose-900"
          : isNormalDip
          ? "bg-amber-50 border-amber-200 text-amber-900"
          : "bg-emerald-50 border-emerald-200 text-emerald-900"
      }`}>
        <div className="flex items-start gap-2.5">
          {isCommitmentAtRisk ? (
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          ) : isNormalDip ? (
            <BellOff className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          ) : (
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          )}
          <div>
            <strong className="block font-semibold mb-0.5">
              {isCommitmentAtRisk
                ? "Commitment Warning (ตรวจพบความเสี่ยงต่อภาระคงที่):"
                : isNormalDip
                ? "Alert Suppressed (ระงับการแจ้งเตือนช่วงยอดเงินลดปกติ):"
                : "Safe Liquidity Margin (สภาพคล่องปลอดภัย):"}
            </strong>
            <p className="text-[12px] opacity-90 font-normal">
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
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <label className="text-slate-700 font-medium">
            จำลองอัตราการใช้จ่าย (ทดสอบ Horizon Bar &amp; Alert Suppression):
          </label>
          <span className="font-mono text-emerald-800 font-semibold">+฿{spentFactor.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="100"
          max="12000"
          step="200"
          value={spentFactor}
          onChange={(e) => setSpentFactor(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 rounded appearance-none cursor-pointer accent-[#064E3B]"
        />
        <div className="flex justify-between tech-label text-[10px] text-slate-500">
          <span>ปกติ (Healthy)</span>
          <span>ปานกลาง (Suppressed)</span>
          <span>สูง (Risk Warning)</span>
        </div>
      </div>

      {/* Structured Obligations Ledger */}
      <div className="pt-2 border-t border-slate-200/80 space-y-2">
        <div className="tech-label text-[10px] text-slate-500">
          ภาระผูกพันประจำเดือน (Recurring Commitments Breakdown)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex justify-between text-slate-500 text-[11px]">
              <span>ค่าเช่าห้อง</span>
              <span className="text-emerald-700 font-medium">Covered</span>
            </div>
            <div className="text-sm font-semibold text-slate-900 mt-1">฿{rentCommitment.toLocaleString()}</div>
            <span className="text-[10px] text-slate-400 block mt-0.5">หักวันที่ 1</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex justify-between text-slate-500 text-[11px]">
              <span>ผ่อนชำระ/บัตร</span>
              <span className="text-emerald-700 font-medium">Covered</span>
            </div>
            <div className="text-sm font-semibold text-slate-900 mt-1">฿{debtCommitment.toLocaleString()}</div>
            <span className="text-[10px] text-slate-400 block mt-0.5">หักวันที่ 25</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex justify-between text-slate-500 text-[11px]">
              <span>ค่าน้ำ-ไฟ-เน็ต</span>
              <span className="text-emerald-700 font-medium">Covered</span>
            </div>
            <div className="text-sm font-semibold text-slate-900 mt-1">฿{utilCommitment.toLocaleString()}</div>
            <span className="text-[10px] text-slate-400 block mt-0.5">หักวันที่ 28</span>
          </div>

        </div>
      </div>

    </div>
  );
}
