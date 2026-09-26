import React, { useState } from 'react';
import { RotateCcw, ShieldCheck, Zap } from 'lucide-react';

export default function MicroSweepVault() {
  const [subAccountBalance, setSubAccountBalance] = useState(15240);
  const [mainBalance, setMainBalance] = useState(24500);
  const [isSweepingActive, setIsSweepingActive] = useState(true);
  const [recentActionMsg, setRecentActionMsg] = useState(null);

  // 1-Tap Undo (Recall) handler
  const handleOneTapRecall = () => {
    if (subAccountBalance <= 0) return;
    const recalledAmount = subAccountBalance;
    setMainBalance(prev => prev + recalledAmount);
    setSubAccountBalance(0);
    setRecentActionMsg(`1-Tap Undo สำเร็จ: โอนเงิน ฿${recalledAmount.toLocaleString()} คืนเข้าบัญชีหลักทันที 100% ไร้ค่าปรับ`);
    setTimeout(() => setRecentActionMsg(null), 4000);
  };

  // Test micro-sweep
  const handleManualSweep = () => {
    const sweepAmt = 150;
    if (mainBalance - sweepAmt < 500) return;
    setMainBalance(prev => prev - sweepAmt);
    setSubAccountBalance(prev => prev + sweepAmt);
    setRecentActionMsg(`Micro-Sweep สำเร็จ: กวาดเงินส่วนเกิน ฿${sweepAmt} เข้าบัญชีย่อยดอกเบี้ยสูง 1.50%`);
    setTimeout(() => setRecentActionMsg(null), 3500);
  };

  return (
    <div className="space-y-4">
      {/* High-Interest Sub-Account Card */}
      <div className="bento-card rounded-xl p-6 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-slate-900 tracking-tight">FlowSense Sub-Account</h3>
              <span className="text-[10px] font-mono font-medium tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-2 py-0.5 rounded">
                1.50% P.A.
              </span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5">
              บัญชีย่อยดอกเบี้ยสูง แยกเงินออมอัตโนมัติเมื่อกระแสเงินสดเอื้ออำนวย
            </p>
          </div>
          <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-medium">CASA ENGINE</span>
        </div>

        {/* Balance & Instant Recall Action */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-wider text-slate-500 block uppercase font-medium">ยอดเงินออมสะสมในบัญชีย่อย</span>
            <div className="text-2xl sm:text-3xl font-semibold text-slate-900 font-num tabular-nums mt-1 tracking-tight">
              ฿{subAccountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-emerald-700 flex items-center gap-1.5 mt-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>ถอนคืนเข้าบัญชีหลักได้ทันที 100% ไร้ค่าธรรมเนียม</span>
            </div>
          </div>

          {/* 1-Tap Undo / Recall Button (Pitch Core Feature) */}
          <button
            onClick={handleOneTapRecall}
            disabled={subAccountBalance <= 0}
            className={`px-4 py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-all duration-150 border shrink-0 ${
              subAccountBalance > 0
                ? "bg-[#064E3B] hover:bg-[#022C22] text-white border-emerald-900/30 shadow-sm"
                : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>1-Tap Undo (ดึงเงินคืน 100%)</span>
          </button>
        </div>

        {recentActionMsg && (
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono leading-relaxed">
            {recentActionMsg}
          </div>
        )}
      </div>

      {/* Micro-Sweep Status Card */}
      <div className="bento-card rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-slate-900">Micro-Sweep with 1-Tap Undo</h4>
              <span className="text-[9px] font-mono font-medium tracking-wider bg-slate-100 text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded uppercase">
                AUTOPILOT
              </span>
            </div>
            <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5">
              กวาดเงินส่วนเกินขนาดเล็กอัตโนมัติเฉพาะเมื่อสภาพคล่องเพียงพอ
            </p>
          </div>

          {/* Clean Minimal Toggle */}
          <button
            onClick={() => setIsSweepingActive(!isSweepingActive)}
            className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-150 focus:outline-none ${
              isSweepingActive ? "bg-[#064E3B]" : "bg-slate-300"
            }`}
            title="เปิด/ปิดระบบกวาดเงินออมอัตโนมัติ"
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-150 ${
                isSweepingActive ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-700 font-medium block">สถานะระบบกวาดเงินออม:</span>
            <span className="text-slate-400 text-[11px] font-normal">คำนวณจาก Cashflow Margin</span>
          </div>
          <div className="text-right">
            <span className="font-mono font-semibold text-emerald-700 text-xs tabular-nums block">
              {isSweepingActive ? "+฿150.00 / วัน (เมื่อเงินเหลือ)" : "ปิดการทำงานชั่วคราว"}
            </span>
            <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase">สะสม CASA ดอกเบี้ย 1.50%</span>
          </div>
        </div>

        <button
          onClick={handleManualSweep}
          className="w-full py-2.5 px-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-medium border border-slate-200/80 shadow-sm flex items-center justify-center gap-2 transition-colors duration-150"
        >
          <Zap className="w-3.5 h-3.5 text-slate-500" />
          <span>ทดสอบจำลองคำสั่ง Micro-Sweep (+฿150 เข้า Sub-account)</span>
        </button>
      </div>
    </div>
  );
}
