import React, { useState } from 'react';
import { RotateCcw, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

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
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white tracking-tight">FlowSense Sub-Account</h3>
              <span className="tech-label text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                1.50% P.A.
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              บัญชีย่อยดอกเบี้ยสูง แยกเงินออมอัตโนมัติเมื่อกระแสเงินสดเอื้ออำนวย
            </p>
          </div>
          <span className="tech-label text-[10px] text-zinc-400">CASA ENGINE</span>
        </div>

        {/* Balance & Instant Recall Action */}
        <div className="p-4 rounded-lg bg-black/40 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="tech-label text-[10px] text-zinc-400 block">ยอดเงินออมสะสมในบัญชีย่อย</span>
            <div className="text-2xl sm:text-3xl font-bold text-white font-num mt-1">
              ฿{subAccountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 mt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ถอนคืนเข้าบัญชีหลักได้ทันที 100% ไร้บทลงโทษ</span>
            </div>
          </div>

          {/* 1-Tap Undo / Recall Button (Pitch Core Feature) */}
          <button
            onClick={handleOneTapRecall}
            disabled={subAccountBalance <= 0}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors duration-150 border shrink-0 ${
              subAccountBalance > 0
                ? "bg-[#00A950] hover:bg-[#008F43] text-white border-emerald-400/20 shadow-sm"
                : "bg-zinc-800 text-zinc-500 border-white/5 cursor-not-allowed"
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>1-Tap Undo (ดึงเงินคืน 100%)</span>
          </button>
        </div>

        {recentActionMsg && (
          <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            {recentActionMsg}
          </div>
        )}
      </div>

      {/* Micro-Sweep Status Card */}
      <div className="bento-card rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white">Micro-Sweep with 1-Tap Undo</h4>
              <span className="tech-label text-[9px] bg-white/[0.04] text-zinc-400 border border-white/10 px-1.5 py-0.5 rounded">
                AUTOPILOT
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              กวาดเงินส่วนเกินขนาดเล็กอัตโนมัติเฉพาะเมื่อสภาพคล่องเพียงพอ
            </p>
          </div>

          {/* Clean Minimal Toggle */}
          <button
            onClick={() => setIsSweepingActive(!isSweepingActive)}
            className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-150 focus:outline-none ${
              isSweepingActive ? "bg-[#00A950]" : "bg-zinc-700"
            }`}
            title="เปิด/ปิดระบบกวาดเงินออมอัตโนมัติ"
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform duration-150 ${
                isSweepingActive ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between text-xs">
          <div>
            <span className="text-zinc-300 font-medium block">สถานะระบบกวาดเงินออม:</span>
            <span className="text-zinc-400 text-[11px]">คำนวณจาก Cashflow Margin</span>
          </div>
          <div className="text-right">
            <span className="font-mono font-bold text-emerald-400 text-xs block">
              {isSweepingActive ? "+฿150.00 / วัน (เมื่อเงินเหลือ)" : "ปิดการทำงานชั่วคราว"}
            </span>
            <span className="tech-label text-[9px] text-zinc-400">สะสม CASA ดอกเบี้ย 1.50%</span>
          </div>
        </div>

        <button
          onClick={handleManualSweep}
          className="w-full py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium border border-zinc-700/80 flex items-center justify-center gap-2 transition-colors duration-150"
        >
          <Zap className="w-3.5 h-3.5 text-zinc-400" />
          <span>ทดสอบจำลองคำสั่ง Micro-Sweep (+฿150 เข้า Sub-account)</span>
        </button>
      </div>

    </div>
  );
}
