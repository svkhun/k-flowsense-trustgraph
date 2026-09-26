import React, { useState, useEffect } from 'react';
import { AlertTriangle, ScanFace, X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0B1224] rounded-2xl max-w-lg w-full p-6 sm:p-7 space-y-5 border border-rose-500/50 shadow-[0_0_50px_rgba(244,63,94,0.25)] text-slate-100 relative overflow-hidden">
        
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-md">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">TrustGraph: Micro-Auth</h3>
                <span className="text-[10px] font-mono font-bold bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-500/40">
                  CRITICAL ANOMALY
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">ตรวจพบลักษณะผิดปกติวิกฤตบน Relational GCN (&lt;80ms)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Risk Reasoning (Pitch Core Feature) */}
        <div className="p-4 rounded-xl bg-black/50 border border-rose-500/30 space-y-2 relative z-10">
          <div className="flex items-center gap-1.5 text-rose-300 text-xs font-bold">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>Direct Risk Reasoning (เหตุผลความเสี่ยงตรงจุด):</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed font-mono bg-[#060A14] p-3 rounded-lg border border-white/10">
            &ldquo;Recipient account opened 48 hours ago with rapid pass-through fund patterns (บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันทีภายใน 24 วินาที)&rdquo;
          </p>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 pt-0.5">
            <div>Topology: <span className="text-rose-400 font-bold">Mule Net Tier-2</span></div>
            <div>Inflow Window: <span className="text-rose-400 font-bold">24s Pass-Through</span></div>
          </div>
        </div>

        {/* 5-Second Micro-Auth Face Liveness Banner */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-md transition-colors ${
              scanStep === 'passed'
                ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500'
                : 'bg-slate-800 text-slate-300 border-slate-700 animate-pulse'
            }`}>
              {scanStep === 'passed' ? <CheckCircle2 className="w-6 h-6 text-emerald-400" /> : <ScanFace className="w-6 h-6 text-slate-300" />}
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>{scanStep === 'passed' ? 'Micro-Auth ตรวจสอบผ่านแล้ว' : 'Micro-Auth Face Liveness'}</span>
                {scanStep === 'passed' && (
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/40">
                    PASSED
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {scanStep === 'passed'
                  ? 'ยืนยันตัวตนสำเร็จ ไร้การหน่วงเวลา 15 นาทีตามอำเภอใจ'
                  : 'สแกนใบหน้า 5 วินาทีเพื่อดึงสติและยืนยันผู้ใช้งานจริง'}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            {scanStep === 'scanning' ? (
              <span className="font-mono text-2xl font-extrabold text-white bg-white/10 px-3 py-1 rounded-lg border border-white/20 tabular-nums animate-pulse">
                {countdown}s
              </span>
            ) : (
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                100% OK
              </span>
            )}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="space-y-3 pt-1 relative z-10">
          <div className="text-center text-xs text-slate-400 font-mono">
            ระบบชี้แจงความเสี่ยงแล้ว <strong className="text-white">การตัดสินใจขั้นสุดท้ายขึ้นอยู่กับคุณ</strong>
          </div>

          {decisionMade === 'PROCEED' ? (
            <div className="p-3.5 rounded-xl bg-amber-950/50 border border-amber-500/40 text-amber-300 text-xs text-center font-mono font-bold">
              กำลังดำเนินการโอนเงินตามการตัดสินใจของคุณ (บันทึก Audit Log)
            </div>
          ) : decisionMade === 'CANCEL' ? (
            <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs text-center font-mono font-bold">
              ยกเลิกรายการสำเร็จ เงินของคุณยังคงปลอดภัย 100% ในบัญชี K PLUS
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={handleCancel}
                className="w-full py-3 px-3 rounded-xl btn-kplus font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/25"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>ยกเลิกการโอน (แนะนำ)</span>
              </button>

              <button
                onClick={handleProceed}
                disabled={scanStep === 'scanning'}
                className={`w-full py-3 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                  scanStep === 'scanning'
                    ? 'bg-slate-800 text-slate-500 border-white/5 cursor-not-allowed'
                    : 'bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border-white/20'
                }`}
              >
                <span>ยืนยันต้องการโอน</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
