import React, { useState, useEffect } from 'react';
import { AlertTriangle, ScanFace, X, ArrowRight, ShieldCheck } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0B0D13] rounded-xl max-w-lg w-full p-6 space-y-4 border border-rose-500/40 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">TrustGraph: Micro-Auth</h3>
                <span className="tech-label text-[9px] bg-rose-950/60 text-rose-300 px-1.5 py-0.5 rounded border border-rose-500/40">
                  CRITICAL ANOMALY
                </span>
              </div>
              <p className="text-xs text-zinc-400">ตรวจพบลักษณะผิดปกติวิกฤตบน Relational GCN (&lt;80ms)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Direct Risk Reasoning (Pitch Core Feature) */}
        <div className="p-3.5 rounded-lg bg-black/40 border border-rose-500/30 space-y-2">
          <div className="flex items-center gap-1.5 text-rose-300 text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>Direct Risk Reasoning (เหตุผลความเสี่ยงตรงจุด):</span>
          </div>
          <p className="text-xs text-zinc-200 leading-relaxed font-mono bg-zinc-900/80 p-2.5 rounded border border-white/5">
            &ldquo;Recipient account opened 48 hours ago with rapid pass-through fund patterns (บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันทีภายใน 24 วินาที)&rdquo;
          </p>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-zinc-400 pt-0.5">
            <div>Topology: <span className="text-rose-400 font-semibold">Mule Net Tier-2</span></div>
            <div>Inflow Window: <span className="text-rose-400 font-semibold">24s Pass-Through</span></div>
          </div>
        </div>

        {/* 5-Second Micro-Auth Face Liveness Banner */}
        <div className="p-3.5 rounded-lg bg-black/30 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
              scanStep === 'passed'
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40'
                : 'bg-zinc-800 text-zinc-200 border-zinc-700'
            }`}>
              {scanStep === 'passed' ? <ShieldCheck className="w-4 h-4 text-emerald-400" /> : <ScanFace className="w-4 h-4 text-zinc-300" />}
            </div>
            <div>
              <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                <span>{scanStep === 'passed' ? 'Micro-Auth ตรวจสอบผ่านแล้ว' : 'Micro-Auth Face Liveness'}</span>
                {scanStep === 'passed' && <span className="tech-label text-[9px] text-emerald-400">PASSED</span>}
              </div>
              <p className="text-[11px] text-zinc-400">
                {scanStep === 'passed'
                  ? 'ยืนยันตัวตนสำเร็จ ไร้การหน่วงเวลา 15 นาทีตามอำเภอใจ'
                  : 'สแกนใบหน้า 5 วินาทีเพื่อดึงสติและยืนยันผู้ใช้งานจริง'}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            {scanStep === 'scanning' ? (
              <span className="font-mono text-xl font-bold text-white bg-white/5 px-2.5 py-1 rounded border border-white/10">
                {countdown}s
              </span>
            ) : (
              <span className="tech-label text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                100% OK
              </span>
            )}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="space-y-2 pt-1">
          <div className="text-center text-xs text-zinc-400">
            ระบบชี้แจงความเสี่ยงแล้ว <strong className="text-white">การตัดสินใจขั้นสุดท้ายขึ้นอยู่กับคุณ</strong>
          </div>

          {decisionMade === 'PROCEED' ? (
            <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/40 text-amber-300 text-xs text-center font-mono font-medium">
              กำลังดำเนินการโอนเงินตามการตัดสินใจของคุณ (บันทึก Audit Log)
            </div>
          ) : decisionMade === 'CANCEL' ? (
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs text-center font-mono font-medium">
              ยกเลิกรายการสำเร็จ เงินของคุณยังคงปลอดภัย 100% ในบัญชี
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={handleCancel}
                className="w-full py-2.5 px-3 rounded-lg bg-[#00A950] hover:bg-[#008F43] text-white font-medium text-xs border border-emerald-400/20 flex items-center justify-center gap-1.5 transition-colors duration-150"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ยกเลิกการโอน (แนะนำ)</span>
              </button>

              <button
                onClick={handleProceed}
                disabled={scanStep === 'scanning'}
                className={`w-full py-2.5 px-3 rounded-lg text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors duration-150 ${
                  scanStep === 'scanning'
                    ? 'bg-zinc-800 text-zinc-500 border-white/5 cursor-not-allowed'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border-zinc-700'
                }`}
              >
                <span>ยืนยันต้องการโอน</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
