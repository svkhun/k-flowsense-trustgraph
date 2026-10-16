import React, { useState } from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

const projectedLivingCost = 8400;
const emergencyBuffer = 5000;
const maxPerSweep = 500;

export default function MicroSweepVault({ mainBalance, setMainBalance, fixedCommitments, subAccountBalance, setSubAccountBalance }) {
  const [savingsEnabled, setSavingsEnabled] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('1000');
  const [withdrawAll, setWithdrawAll] = useState(false);
  const [recentActionMsg, setRecentActionMsg] = useState(null);

  // Illustrative local demo; the API recalculates capacity from the account profile.
  const safeToSave = Math.max(0, mainBalance - fixedCommitments - projectedLivingCost - emergencyBuffer);
  const maxSweep = Math.min(safeToSave, maxPerSweep);

  const handleManualSweep = () => {
    if (!savingsEnabled || maxSweep <= 0) return;
    const amount = Math.min(150, maxSweep);
    setMainBalance(balance => balance - amount);
    setSubAccountBalance(balance => balance + amount);
    setRecentActionMsg(`แยกเงินออม ฿${amount.toLocaleString()} แล้ว`);
  };

  const handleWithdraw = (event) => {
    event.preventDefault();
    const amount = withdrawAll ? subAccountBalance : Number(withdrawAmount);
    if (!Number.isFinite(amount) || amount <= 0 || amount > subAccountBalance || Math.abs(amount * 100 - Math.round(amount * 100)) > 1e-7) {
      setRecentActionMsg('กรุณาระบุจำนวนเงินที่ถอนได้ ไม่เกินยอดในบัญชีออม');
      return;
    }
    setSubAccountBalance(balance => balance - amount);
    setMainBalance(balance => balance + amount);
    setRecentActionMsg(`ถอนเงินออม ฿${amount.toLocaleString()} เข้าบัญชีหลักแล้ว`);
  };

  return (
    <div className="space-y-4">
      <div className="bento-card rounded-2xl p-6 sm:p-7 space-y-5 border border-white/10 bg-[#18191D]/75 backdrop-blur-xl shadow-xl">
        <div className="pb-3 border-b border-white/10">
          <h3 className="text-base font-bold text-white">บัญชีออมที่ถอนเงินได้ตามปกติ</h3>
          <p className="text-xs text-slate-400 mt-1">เดโมเงินจำลอง ยอดบัญชีหลักเชื่อมกับแถบสภาพคล่องด้านข้าง</p>
        </div>
        <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
          <span className="text-xs text-slate-400 block">ยอดเงินออมในบัญชีย่อย</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-gradient-kplus">
            ฿{subAccountBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
          <div className="text-xs text-slate-300 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>เลือกถอนบางส่วนหรือทั้งหมดได้</span>
          </div>
        </div>
        <form onSubmit={handleWithdraw} className="space-y-3">
          <label htmlFor="withdraw-amount" className="block text-xs text-slate-300">จำนวนเงินที่ต้องการถอน (บาท)</label>
          <input
            id="withdraw-amount"
            type="number"
            min="0.01"
            max={subAccountBalance}
            step="0.01"
            value={withdrawAmount}
            disabled={withdrawAll || subAccountBalance <= 0}
            onChange={event => setWithdrawAmount(event.target.value)}
            className="w-full rounded-lg bg-black/40 border border-white/20 px-3 py-2 text-white"
          />
          <label className="flex items-center gap-2 text-xs text-slate-300">
            <input type="checkbox" checked={withdrawAll} onChange={event => setWithdrawAll(event.target.checked)} disabled={subAccountBalance <= 0} />
            ถอนทั้งหมด
          </label>
          <button type="submit" disabled={subAccountBalance <= 0} className="btn-kplus w-full rounded-xl px-4 py-2.5 text-xs font-bold text-white disabled:opacity-50">
            ถอนเงินออมเข้าบัญชีหลัก
          </button>
        </form>
        {recentActionMsg && <p role="status" className="text-xs text-emerald-300">{recentActionMsg}</p>}
      </div>

      <div className="bento-card rounded-2xl p-5 sm:p-6 space-y-4 border border-white/10 bg-[#18191D]/75 backdrop-blur-xl shadow-xl">
        <div>
          <h4 className="text-sm font-bold text-white">แยกเงินออมเมื่อยอดเพียงพอ</h4>
          <p className="text-xs text-slate-400 mt-1">คำนวณจากยอดบัญชีหลักหลังกันค่าใช้ชีวิต บิล และเงินสำรอง</p>
        </div>
        <div className="rounded-xl bg-black/40 border border-white/5 p-3 text-xs text-slate-300 space-y-1">
          <p>บัญชีหลัก ฿{mainBalance.toLocaleString()} − บิล ฿{fixedCommitments.toLocaleString()} − ค่าใช้ชีวิต ฿{projectedLivingCost.toLocaleString()} − เงินสำรอง ฿{emergencyBuffer.toLocaleString()}</p>
          <p className="font-bold text-emerald-400">แยกออมได้ในตัวอย่าง: ฿{safeToSave.toLocaleString()} (สูงสุดครั้งละ ฿{maxSweep.toLocaleString()})</p>
        </div>
        <label className="flex items-center gap-2 text-xs text-slate-300">
          <input type="checkbox" checked={savingsEnabled} onChange={event => setSavingsEnabled(event.target.checked)} />
          เปิดการแยกเงินออมด้วยตนเอง
        </label>
        <button
          type="button"
          onClick={handleManualSweep}
          disabled={!savingsEnabled || maxSweep <= 0}
          className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] text-slate-300 text-xs font-medium border border-white/10 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>ทดลองแยกเงินออม ฿{Math.min(150, maxSweep).toLocaleString()}</span>
        </button>
      </div>
    </div>
  );
}
