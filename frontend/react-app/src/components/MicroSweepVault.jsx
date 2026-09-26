import React, { useState } from 'react';
import { RotateCcw, ShieldCheck, Zap, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

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
    setRecentActionMsg(`1-Tap Undo สำเร็จ: โอนเงิน ฿${recalledAmount.toLocaleString()} คืนเข้าบัญชีหลักทันที 100% ไร้ค่าปรับ ไร้เวลารอ`);
    setTimeout(() => setRecentActionMsg(null), 4500);
  };

  // Test micro-sweep
  const handleManualSweep = () => {
    const sweepAmt = 150;
    if (mainBalance - sweepAmt < 500) return;
    setMainBalance(prev => prev - sweepAmt);
    setSubAccountBalance(prev => prev + sweepAmt);
    setRecentActionMsg(`Micro-Sweep สำเร็จ: กวาดเงินส่วนเกิน ฿${sweepAmt} เข้าบัญชีย่อยดอกเบี้ยสูง 1.50% P.A.`);
    setTimeout(() => setRecentActionMsg(null), 3500);
  };

  return (
    <div className="space-y-4">
      {/* High-Interest Sub-Account Card */}
      <div className="bento-card rounded-2xl p-6 sm:p-7 space-y-5 border border-white/10 bg-[#0B132B]/75 backdrop-blur-xl shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white tracking-tight">FlowSense Sub-Account</h3>
              <span className="text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded shadow-xs">
                1.50% P.A. CASA
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-normal leading-[1.7]">
              บัญชีย่อยดอกเบี้ยสูง แยกเงินออมอัตโนมัติเมื่อกระแสเงินสดเอื้ออำนวย
            </p>
          </div>
          <span className="tech-label text-[10px] text-slate-400 font-mono">AUTOPILOT</span>
        </div>

        {/* Balance & Instant Recall Action */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="tech-label text-[10px] text-slate-400 block font-mono">ยอดเงินออมสะสมในบัญชีย่อย</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-num mt-1 tracking-tight text-gradient-kplus">
              ฿{subAccountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 mt-1 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>ถอนคืนเข้าบัญชีหลักได้ทันที 100% ไร้ค่าธรรมเนียม</span>
            </div>
          </div>

          {/* 1-Tap Undo / Recall Button (Pitch Core Feature) */}
          <button
            onClick={handleOneTapRecall}
            disabled={subAccountBalance <= 0}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 border shrink-0 ${
              subAccountBalance > 0
                ? "btn-kplus text-white shadow-lg shadow-emerald-500/30"
                : "bg-slate-800 text-slate-500 border-white/5 cursor-not-allowed"
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>1-Tap Undo (ดึงเงินคืน 100%)</span>
          </button>
        </div>

        {recentActionMsg && (
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-sans leading-[1.8] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{recentActionMsg}</span>
          </div>
        )}
      </div>

      {/* Micro-Sweep Status Card */}
      <div className="bento-card rounded-2xl p-5 sm:p-6 space-y-4 border border-white/10 bg-[#0B132B]/75 backdrop-blur-xl shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white">Micro-Sweep with 1-Tap Undo</h4>
              <span className="text-[9px] font-mono font-semibold bg-white/5 text-slate-300 border border-white/10 px-1.5 py-0.5 rounded">
                K PLUS ENGINE
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 font-normal leading-[1.7]">
              กวาดเงินส่วนเกินขนาดเล็กอัตโนมัติเฉพาะเมื่อสภาพคล่องเพียงพอ
            </p>
          </div>

          {/* Clean Minimal Toggle */}
          <button
            onClick={() => setIsSweepingActive(!isSweepingActive)}
            className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
              isSweepingActive ? "bg-[#00A950]" : "bg-slate-700"
            }`}
            title="เปิด/ปิดระบบกวาดเงินออมอัตโนมัติ"
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                isSweepingActive ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono">
          <div>
            <span className="text-slate-300 font-medium block">สถานะระบบกวาดเงินออม:</span>
            <span className="text-slate-500 text-[11px]">คำนวณจาก Cashflow Margin</span>
          </div>
          <div className="text-right">
            <span className="font-bold text-emerald-400 text-xs tabular-nums block">
              {isSweepingActive ? "+฿150.00 / วัน (เมื่อเงินเหลือ)" : "ปิดการทำงานชั่วคราว"}
            </span>
            <span className="text-[10px] text-slate-400">สะสม CASA ดอกเบี้ย 1.50%</span>
          </div>
        </div>

        <button
          onClick={handleManualSweep}
          className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-medium border border-white/10 flex items-center justify-center gap-2 transition-colors duration-150"
        >
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>ทดสอบจำลองคำสั่ง Micro-Sweep (+฿150 เข้า Sub-account)</span>
        </button>
      </div>
    </div>
  );
}
