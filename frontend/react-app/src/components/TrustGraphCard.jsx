import React, { useState } from 'react';
import { Share2, User, AlertTriangle, ShieldCheck, Zap, ScanFace, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TrustGraphCard({ onOpenScamModal, showHeader = true }) {
  const [selectedRecipient, setSelectedRecipient] = useState('routine'); // 'routine' | 'mule'

  return (
    <div className="space-y-12">
      {showHeader && (
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185] animate-pulse"></span>
            <span>Target-Specific Fraud Defense</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            TrustGraph: เกราะตรวจจับบัญชีม้าตรงจุด ไร้ขั้นตอนซ้ำซ้อน
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            แยกแยะรายการปกติด้วย <strong>Zero-Delay Baseline</strong> ผ่านทันทีไร้ Pop-up รบกวน และเปิดระบบ <strong>Micro-Auth 5 วินาที</strong> พร้อมบอกเหตุผลตรงจุดเฉพาะเมื่อพบความผิดปกติวิกฤต
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Card 1: Interactive Recipient Flow (Zero-Delay Baseline vs Micro-Auth) */}
        <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Relational Graph Detection</h3>
                  <p className="text-xs text-slate-400">R-GCN ตรวจจับโครงสร้างบัญชีม้าและความเร็วการหมุนเงิน &lt;80ms</p>
                </div>
              </div>
              <span className="font-mono text-xs text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                SLA: 4.82ms
              </span>
            </div>

            {/* Selector: Routine Transfer vs Critical Mule Anomaly */}
            <div className="p-1.5 rounded-xl bg-slate-900 border border-white/10 grid grid-cols-2 gap-1.5 text-xs font-semibold">
              <button
                onClick={() => setSelectedRecipient('routine')}
                className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  selectedRecipient === 'routine'
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>1. รายการปกติ (เพื่อน)</span>
              </button>
              <button
                onClick={() => setSelectedRecipient('mule')}
                className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  selectedRecipient === 'mule'
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>2. ม้าต้องสงสัย (Scam)</span>
              </button>
            </div>

            {/* Visual Topology Representation */}
            <div className="relative h-44 rounded-2xl bg-[#090E1A] border border-white/10 flex items-center justify-center overflow-hidden px-4">
              <div className="relative z-10 flex items-center justify-between w-full max-w-sm">
                
                {/* Source User */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/80 border border-emerald-400 flex items-center justify-center text-white shadow-lg">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] text-slate-300 mt-1.5 font-medium">คุณ (ผู้โอน)</span>
                </div>

                {/* Arrow & Badge */}
                <div className="flex-1 mx-4 relative">
                  <div className={`h-0.5 w-full ${
                    selectedRecipient === 'routine'
                      ? "bg-emerald-500"
                      : "bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500"
                  }`}></div>
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[9px] font-mono border whitespace-nowrap ${
                    selectedRecipient === 'routine'
                      ? "bg-emerald-950 text-emerald-300 border-emerald-500/40"
                      : "bg-rose-950 text-rose-300 border-rose-500/40 animate-pulse"
                  }`}>
                    {selectedRecipient === 'routine' ? "Zero-Delay (3.8ms)" : "Micro-Auth 5s"}
                  </div>
                </div>

                {/* Target Recipient */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-white shadow-lg transition-all ${
                    selectedRecipient === 'routine'
                      ? "bg-emerald-600/80 border-emerald-400"
                      : "bg-rose-600/80 border-rose-400 animate-pulse"
                  }`}>
                    {selectedRecipient === 'routine' ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <AlertTriangle className="w-6 h-6" />
                    )}
                  </div>
                  <span className={`text-[11px] mt-1.5 font-bold ${
                    selectedRecipient === 'routine' ? "text-emerald-400" : "text-rose-400"
                  }`}>
                    {selectedRecipient === 'routine' ? "บัญชีปกติ (เพื่อน)" : "บัญชีม้า 48 ชม."}
                  </span>
                </div>

              </div>
            </div>

            {/* Explanation box */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 leading-relaxed">
              {selectedRecipient === 'routine' ? (
                <span>
                  <strong className="text-emerald-400">Zero-Delay Baseline: </strong>
                  รายการโอนเงินในชีวิตประจำวันจะประมวลผลผ่านทันทีใน 3.8ms โดยไม่มี Pop-up หรือขั้นตอนยืนยันใดๆ มาขัดจังหวะ
                </span>
              ) : (
                <span>
                  <strong className="text-rose-400">Micro-Auth for Critical Anomaly: </strong>
                  ตัดขั้นตอนการล็อคบัญชี 15 นาทีที่ไม่สะท้อนความจริงออก แทนที่ด้วยการสแกนใบหน้า 5 วินาที พร้อมชี้แจงเหตุผลชัดเจน
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card 2: Direct Risk Reasoning & User Autonomy */}
        <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Direct Risk Reasoning</h3>
                <p className="text-xs text-slate-400">บอกเหตุผลภาษาคนตรงไปตรงมา และให้ผู้ใช้ตัดสินใจเอง</p>
              </div>
            </div>

            {/* Risk Reasoning Callout */}
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-2">
              <div className="font-bold text-rose-400 text-xs sm:text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>ตัวอย่างการชี้แจงเหตุผลความเสี่ยง (Direct Risk Reasoning):</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono bg-black/40 p-3 rounded-xl border border-white/10">
                &ldquo;Recipient account opened 48 hours ago with rapid pass-through fund patterns (บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันที)&rdquo;
              </p>
              <div className="text-[11px] text-slate-400 pt-1">
                ไม่กีดกันการโอนเงินเร่งด่วนที่แท้จริงของผู้ใช้ แต่ให้ข้อมูลประกอบการตัดสินใจอย่างตรงไปตรงมา
              </div>
            </div>

            {/* 3 Pillars Summary */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-slate-400 block text-[10px]">Zero Arbitrary Locks:</span>
                <span className="font-bold text-emerald-400">ไร้การหน่วงเวลา 15 นาที</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-slate-400 block text-[10px]">Decision Autonomy:</span>
                <span className="font-bold text-white">ผู้ใช้เป็นผู้ตัดสินใจ</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenScamModal}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-600/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <ScanFace className="w-5 h-5" />
            <span>ทดลองเปิดหน้าต่าง TrustGraph Micro-Auth (5s)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
