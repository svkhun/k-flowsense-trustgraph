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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-slate-200 shadow-2xl text-slate-800">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-slate-900 tracking-tight">TrustGraph: Micro-Auth</h3>
                <span className="text-[10px] font-mono tracking-wider bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200 font-medium">
                  CRITICAL ANOMALY
                </span>
              </div>
              <p className="text-xs text-slate-500 font-normal">ตรวจพบลักษณะผิดปกติวิกฤตบน Relational GCN (&lt;80ms)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Direct Risk Reasoning (Pitch Core Feature) */}
        <div className="p-3.5 rounded-lg bg-rose-50/70 border border-rose-200 space-y-2">
          <div className="flex items-center gap-1.5 text-rose-800 text-xs font-medium">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span>Direct Risk Reasoning (เหตุผลความเสี่ยงตรงจุด):</span>
          </div>
          <p className="text-xs text-slate-800 leading-relaxed font-mono bg-white p-3 rounded border border-rose-200/60 shadow-sm">
            &ldquo;Recipient account opened 48 hours ago with rapid pass-through fund patterns (บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันทีภายใน 24 วินาที)&rdquo;
          </p>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-500 pt-0.5">
            <div>Topology: <span className="text-rose-700 font-semibold">Mule Net Tier-2</span></div>
            <div>Inflow Window: <span className="text-rose-700 font-semibold">24s Pass-Through</span></div>
          </div>
        </div>

        {/* 5-Second Micro-Auth Face Liveness Banner */}
        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center border shadow-sm ${
              scanStep === 'passed'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-white text-slate-700 border-slate-200'
            }`}>
              {scanStep === 'passed' ? <ShieldCheck className="w-4 h-4 text-emerald-700" /> : <ScanFace className="w-4 h-4 text-slate-600" />}
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                <span>{scanStep === 'passed' ? 'Micro-Auth ตรวจสอบผ่านแล้ว' : 'Micro-Auth Face Liveness'}</span>
                {scanStep === 'passed' && (
                  <span className="text-[9px] font-mono tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-medium">
                    PASSED
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 font-normal">
                {scanStep === 'passed'
                  ? 'ยืนยันตัวตนสำเร็จ ไร้การหน่วงเวลา 15 นาทีตามอำเภอใจ'
                  : 'สแกนใบหน้า 5 วินาทีเพื่อดึงสติและยืนยันผู้ใช้งานจริง'}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            {scanStep === 'scanning' ? (
              <span className="font-mono text-xl font-semibold text-slate-900 bg-white px-3 py-1 rounded border border-slate-200 shadow-sm tabular-nums">
                {countdown}s
              </span>
            ) : (
              <span className="text-[10px] font-mono tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-medium">
                100% OK
              </span>
            )}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="space-y-2 pt-1">
          <div className="text-center text-xs text-slate-500 font-normal">
            ระบบชี้แจงความเสี่ยงแล้ว <strong className="text-slate-900 font-semibold">การตัดสินใจขั้นสุดท้ายขึ้นอยู่กับคุณ</strong>
          </div>

          {decisionMade === 'PROCEED' ? (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs text-center font-mono font-medium">
              กำลังดำเนินการโอนเงินตามการตัดสินใจของคุณ (บันทึก Audit Log)
            </div>
          ) : decisionMade === 'CANCEL' ? (
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center font-mono font-medium">
              ยกเลิกรายการสำเร็จ เงินของคุณยังคงปลอดภัย 100% ในบัญชี
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={handleCancel}
                className="w-full py-2.5 px-3 rounded-lg bg-[#064E3B] hover:bg-[#022C22] text-white font-medium text-xs border border-emerald-900/30 shadow-sm flex items-center justify-center gap-1.5 transition-colors duration-150"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ยกเลิกการโอน (แนะนำ)</span>
              </button>

              <button
                onClick={handleProceed}
                disabled={scanStep === 'scanning'}
                className={`w-full py-2.5 px-3 rounded-lg text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors duration-150 ${
                  scanStep === 'scanning'
                    ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                    : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-sm'
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
