import React, { useState, useEffect } from 'react';
import { ShieldAlert, AlertTriangle, ScanFace, CheckCircle2, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function MicroAuthModal({ isOpen, onClose, onConfirmTransfer }) {
  const [scanStep, setScanStep] = useState('idle'); // 'idle' | 'scanning' | 'passed'
  const [countdown, setCountdown] = useState(5);
  const [decisionMade, setDecisionMade] = useState(null); // 'PROCEED' | 'CANCEL'

  useEffect(() => {
    if (!isOpen) {
      setScanStep('idle');
      setCountdown(5);
      setDecisionMade(null);
      return;
    }
    // Auto-start 5-second Micro-Auth face scan when modal opens
    setScanStep('scanning');
    setCountdown(5);
    setDecisionMade(null);

    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setScanStep('passed');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleProceed = () => {
    setDecisionMade('PROCEED');
    if (onConfirmTransfer) onConfirmTransfer('PROCEED');
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  const handleCancel = () => {
    setDecisionMade('CANCEL');
    if (onConfirmTransfer) onConfirmTransfer('CANCEL');
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all">
      <div className="glass-card rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 border-rose-500/40 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-lg sm:text-xl font-extrabold text-white">TrustGraph: Micro-Auth</h3>
                <span className="text-[10px] bg-rose-500/20 text-rose-300 font-mono px-2 py-0.5 rounded-full border border-rose-500/30">Critical Anomaly</span>
              </div>
              <p className="text-xs text-rose-300 font-medium">ตรวจพบลักษณะผิดปกติวิกฤตบน Relational GCN</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Risk Reasoning (Pitch Core Feature) */}
        <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-2.5">
          <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>Direct Risk Reasoning (เหตุผลความเสี่ยงตรงจุด):</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium bg-black/30 p-2.5 rounded-xl border border-white/10">
            &ldquo;Recipient account opened 48 hours ago with rapid pass-through fund patterns (บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันทีภายใน 24 วินาที)&rdquo;
          </p>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
            <div className="bg-white/5 p-2 rounded-lg border border-white/5">
              <span className="text-slate-400 block text-[10px]">Topology Matching:</span>
              <span className="font-semibold text-rose-300">Mule Network Tier-2</span>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-white/5">
              <span className="text-slate-400 block text-[10px]">Inflow Velocity:</span>
              <span className="font-semibold text-rose-300">24s Pass-Through</span>
            </div>
          </div>
        </div>

        {/* 5-Second Micro-Auth Face Liveness Banner */}
        <div className="p-4 rounded-2xl bg-[#09111E] border border-cyan-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              scanStep === 'passed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
            }`}>
              {scanStep === 'passed' ? <ShieldCheck className="w-5 h-5 text-emerald-400" /> : <ScanFace className="w-5 h-5 text-cyan-400 animate-pulse" />}
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>{scanStep === 'passed' ? 'Micro-Auth ตรวจสอบผ่านแล้ว' : 'Micro-Auth Face Liveness (สแกน 5 วิ)'}</span>
                {scanStep === 'passed' && <span className="text-[10px] text-emerald-400 font-mono">Passed</span>}
              </div>
              <p className="text-[11px] text-slate-400">
                {scanStep === 'passed' 
                  ? 'ยืนยันตัวตนผู้ใช้จริงสำเร็จ ไม่มีการล็อคหน่วงเวลา 15 นาที'
                  : 'ตรวจจับการมีชีวิตและดึงสติ ไร้การหน่วงเวลาแบบ arbitrary lock'}
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            {scanStep === 'scanning' ? (
              <span className="font-mono text-2xl font-black text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-xl border border-cyan-500/30 inline-block animate-pulse">
                {countdown}s
              </span>
            ) : (
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-500/30 inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100%
              </span>
            )}
          </div>
        </div>

        {/* Confirmation Prompt: User Retains Autonomy (Pitch Feature) */}
        <div className="space-y-2.5 pt-1">
          <div className="text-center text-xs text-slate-300">
            <span className="text-slate-400">ระบบชี้แจงความเสี่ยงแล้ว </span>
            <strong className="text-white">การตัดสินใจขั้นสุดท้ายขึ้นอยู่กับคุณ</strong>
          </div>

          {decisionMade === 'PROCEED' ? (
            <div className="p-3.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs text-center font-bold">
              กำลังดำเนินการโอนเงินตามการตัดสินใจของคุณ (บันทึก Audit Log)
            </div>
          ) : decisionMade === 'CANCEL' ? (
            <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs text-center font-bold">
              ยกเลิกรายการสำเร็จ เงินของคุณยังคงปลอดภัย 100% ในบัญชี
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={handleCancel}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>ยกเลิกการโอน (แนะนำ)</span>
              </button>

              <button
                onClick={handleProceed}
                disabled={scanStep === 'scanning'}
                className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border flex items-center justify-center gap-2 transition-all ${
                  scanStep === 'scanning'
                    ? 'bg-slate-800 text-slate-500 border-white/5 cursor-not-allowed'
                    : 'bg-slate-800/90 hover:bg-rose-950/60 text-slate-200 hover:text-rose-200 border-white/10 hover:border-rose-500/40'
                }`}
              >
                <span>ยืนยันต้องการโอน</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="text-center text-[10px] text-slate-500 pt-1">
            Zero-Delay Baseline สำหรับรายการปกติ • Micro-Auth 5s สำหรับความผิดปกติวิกฤต
          </div>
        </div>

      </div>
    </div>
  );
}
