import React, { useState } from 'react';
import { Sparkles, RotateCcw, CheckCircle2, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

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
    setRecentActionMsg(`✅ 1-Tap Undo สำเร็จ! ดึงเงิน ฿${recalledAmount.toLocaleString()} คืนเข้าบัญชีหลักทันที 100% ไร้ค่าปรับ`);
    setTimeout(() => setRecentActionMsg(null), 4000);
  };

  // Test micro-sweep
  const handleManualSweep = () => {
    const sweepAmt = 150;
    if (mainBalance - sweepAmt < 500) return;
    setMainBalance(prev => prev - sweepAmt);
    setSubAccountBalance(prev => prev + sweepAmt);
    setRecentActionMsg(`✨ Micro-Sweep สำเร็จ: กวาดเงินส่วนเกิน ฿${sweepAmt} เข้าบัญชีย่อยดอกเบี้ยสูง 1.50%`);
    setTimeout(() => setRecentActionMsg(null), 3500);
  };

  return (
    <div className="space-y-6">
      
      {/* High-Interest Sub-Account Card */}
      <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30">
              <Sparkles className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">FlowSense Sub-Account</h3>
                <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full border border-teal-500/30 font-bold">
                  1.50% p.a.
                </span>
              </div>
              <p className="text-xs text-slate-400">บัญชีย่อยดอกเบี้ยสูง แยกเงินออมอัตโนมัติเมื่อกระแสเงินสดเอื้ออำนวย</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#09111E] border border-white/5">
          <div>
            <span className="text-[11px] text-slate-400 block">ยอดเงินออมสะสมในบัญชีย่อย</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-num mt-0.5">
              ฿ {subAccountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 mt-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ถอนคืนเข้าบัญชีหลักได้ทันที 100% ไร้บทลงโทษ</span>
            </div>
          </div>

          {/* 1-Tap Undo / Recall Button (Pitch Core Feature) */}
          <button
            onClick={handleOneTapRecall}
            disabled={subAccountBalance <= 0}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition-all ${
              subAccountBalance > 0
                ? "bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white hover:scale-105 shadow-emerald-600/25"
                : "bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5"
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>1-Tap Undo (ดึงเงินคืน 100%)</span>
          </button>
        </div>

        {recentActionMsg && (
          <div className="mt-3 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold animate-in fade-in">
            {recentActionMsg}
          </div>
        )}
      </div>

      {/* Micro-Sweep Status Card */}
      <div className="glass-card rounded-3xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-white">Micro-Sweep with 1-Tap Undo</h4>
              <span className="text-[10px] bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                Autonomous
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              กวาดเงินส่วนเกินขนาดเล็กอัตโนมัติเฉพาะเมื่อสภาพคล่องเพียงพอ
            </p>
          </div>

          <button
            onClick={() => setIsSweepingActive(!isSweepingActive)}
            className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
              isSweepingActive ? "bg-[#00A950]" : "bg-slate-700"
            }`}
            title="เปิด/ปิดระบบกวาดเงินออมอัตโนมัติ"
          >
            <div
              className={`w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                isSweepingActive ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-300 block font-medium">สถานะระบบกวาดเงินออม:</span>
            <span className="text-slate-500 text-[11px]">คำนวณจาก Cashflow Margin</span>
          </div>
          <div className="text-right">
            <span className="font-bold font-num text-emerald-400 text-sm block">
              {isSweepingActive ? "+฿150.00 / วัน (เมื่อเงินเหลือ)" : "ปิดการทำงานชั่วคราว"}
            </span>
            <span className="text-[10px] text-slate-400">สะสม CASA ดอกเบี้ย 1.50%</span>
          </div>
        </div>

        <button
          onClick={handleManualSweep}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 flex items-center justify-center gap-2 transition-all"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>ทดสอบจำลองคำสั่ง Micro-Sweep (+฿150 เข้า Sub-account)</span>
        </button>
      </div>

    </div>
  );
}
