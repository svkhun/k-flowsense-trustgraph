import React, { useState } from 'react';
import { Compass, Calendar, AlertCircle, ShieldCheck, Zap, Info, TrendingUp, Sliders } from 'lucide-react';

export default function StatusHorizonBar() {
  const [currentBalance, setCurrentBalance] = useState(24500);
  const [fixedObligations, setFixedObligations] = useState(15800);
  const daysUntilPayday = 14;

  // Calculate Safe-to-Spend runway
  const safeToSpend = Math.max(0, currentBalance - fixedObligations);
  const dailyBudget = (safeToSpend / daysUntilPayday).toFixed(0);
  const runwayRatio = Math.min(100, Math.round((currentBalance / (fixedObligations + 10000)) * 100));

  // Determine horizon status
  const isHealthy = currentBalance > fixedObligations * 1.25;
  const isWarning = currentBalance >= fixedObligations && !isHealthy;
  const isCritical = currentBalance < fixedObligations;

  const setPreset = (bal, obl) => {
    setCurrentBalance(bal);
    setFixedObligations(obl);
  };

  return (
    <div className="bento-card rounded-2xl p-5 sm:p-6 space-y-5 border border-white/10 bg-[#0B132B]/75 backdrop-blur-xl shadow-xl">
      
      {/* Header with Technical Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">Status Horizon Bar (LightGBM)</h3>
            <span className="text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
              30D RUNWAY
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5 font-normal">
            คาดการณ์สภาพคล่องสุทธิถึงวันเงินเดือนออก โดยหักภาระคงที่ล่วงหน้า
          </p>
        </div>

        {/* Live Preset Buttons */}
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5">
          <button
            onClick={() => setPreset(32000, 15800)}
            className="px-2.5 py-1 text-[11px] rounded-lg font-mono text-emerald-300 hover:bg-emerald-500/20 transition-colors"
          >
            เงินเดือนเข้า
          </button>
          <button
            onClick={() => setPreset(19500, 15800)}
            className="px-2.5 py-1 text-[11px] rounded-lg font-mono text-cyan-300 hover:bg-cyan-500/20 transition-colors"
          >
            กลางเดือน
          </button>
          <button
            onClick={() => setPreset(14200, 15800)}
            className="px-2.5 py-1 text-[11px] rounded-lg font-mono text-rose-300 hover:bg-rose-500/20 transition-colors"
          >
            เสี่ยงค่าเช่า
          </button>
        </div>
      </div>

      {/* Core Dynamic Horizon Visualizer */}
      <div className="space-y-3.5">
        
        {/* Metric Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
          <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-0.5">
            <span className="text-slate-400 text-[10px] block">ยอดเงินคงเหลือ</span>
            <div className="text-base font-bold text-white font-num">
              ฿{currentBalance.toLocaleString()}
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-0.5">
            <span className="text-slate-400 text-[10px] block">ภาระคงที่ (30D)</span>
            <div className="text-base font-bold text-slate-300 font-num">
              -฿{fixedObligations.toLocaleString()}
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-0.5">
            <span className="text-emerald-400 text-[10px] block">Safe-to-Spend</span>
            <div className="text-base font-bold text-emerald-300 font-num">
              ฿{safeToSpend.toLocaleString()}
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-0.5">
            <span className="text-slate-400 text-[10px] block">งบปลอดภัย / วัน</span>
            <div className="text-base font-bold text-cyan-300 font-num">
              ฿{dailyBudget} <span className="text-[10px] text-slate-400 font-normal">({daysUntilPayday} วัน)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Horizon Bar Visual */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">HORIZON GAUGE:</span>
            <span className={`font-bold ${
              isHealthy ? 'text-emerald-400' : isWarning ? 'text-amber-400' : 'text-rose-400'
            }`}>
              {isHealthy ? 'SURPLUS HEALTHY (สบายใจได้)' : isWarning ? 'TIGHT CASHFLOW' : 'CRITICAL WARNING'}
            </span>
          </div>

          {/* Bar track */}
          <div className="h-3.5 w-full bg-black/60 rounded-full overflow-hidden p-0.5 border border-white/10 relative">
            <div
              className={`h-full rounded-full transition-all duration-300 relative ${
                isHealthy
                  ? 'bg-gradient-to-r from-emerald-600 via-emerald-400 to-[#00F59B]'
                  : isWarning
                  ? 'bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300'
                  : 'bg-gradient-to-r from-rose-600 via-rose-500 to-red-400'
              }`}
              style={{ width: `${Math.max(8, runwayRatio)}%` }}
            >
              <div className="absolute right-1 top-0.5 bottom-0.5 w-1.5 rounded-full bg-white animate-pulse"></div>
            </div>
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>0% (หักภาระหมด)</span>
            <span>Runway: {runwayRatio}%</span>
            <span>100% (เงินเดือนถัดไป)</span>
          </div>
        </div>

        {/* Interactive Balance Slider */}
        <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-emerald-400" />
              <span>ปรับยอดเงินในบัญชีเพื่อทดสอบโมเดล:</span>
            </span>
            <span className="font-mono text-emerald-400 font-bold">฿{currentBalance.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="10000"
            max="45000"
            step="500"
            value={currentBalance}
            onChange={(e) => setCurrentBalance(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>

      </div>

      {/* 30-Day Fixed Obligations Breakdown List */}
      <div className="space-y-1.5 pt-1">
        <span className="tech-label text-slate-400 text-xs block">
          30-DAY COMMITMENTS (ภาระคงที่ที่ล็อกเงินไว้)
        </span>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
          <div className="p-2 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between">
            <span className="text-slate-400">1. ค่าเช่าห้อง:</span>
            <span className="text-white font-semibold">฿9,500</span>
          </div>
          <div className="p-2 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between">
            <span className="text-slate-400">2. บัตรเครดิต KBank:</span>
            <span className="text-white font-semibold">฿4,800</span>
          </div>
          <div className="p-2 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between">
            <span className="text-slate-400">3. ค่าน้ำ-ไฟ-เน็ต:</span>
            <span className="text-white font-semibold">฿1,500</span>
          </div>
        </div>
      </div>

      {/* AI Reasoning Disclosure */}
      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/25 flex items-start gap-2 text-xs text-slate-300 leading-relaxed font-mono">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-emerald-300">LightGBM Alert Suppression: </strong>
          เรียนรู้พฤติกรรมใช้จ่ายช่วงสุดสัปดาห์ และระงับการแจ้งเตือนพร่ำเพรื่อเพื่อตัด Alert Fatigue เตือนเฉพาะเมื่อเสี่ยงกระทบค่าเช่า ฿9,500
        </div>
      </div>

    </div>
  );
}
