import React, { useState } from 'react';
import { User, AlertTriangle, ShieldCheck, Zap, ScanFace, CheckCircle2 } from 'lucide-react';

export default function TrustGraphCard({ onOpenScamModal, showHeader = true }) {
  const [selectedRecipient, setSelectedRecipient] = useState('routine'); // 'routine' | 'mule'

  return (
    <div className="space-y-8">
      {showHeader && (
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span>Target-Specific Fraud Defense</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            TrustGraph: ตรวจจับบัญชีม้าตรงจุด ไร้ขั้นตอนซ้ำซ้อน
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            แยกแยะรายการปกติด้วย <strong>Zero-Delay Baseline</strong> ผ่านทันทีใน 3.8ms ไร้ Pop-up รบกวน และใช้ <strong>Micro-Auth 5 วินาที</strong> พร้อมระบุเหตุผลตรงจุดเฉพาะเมื่อพบความผิดปกติวิกฤต
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Card 1: Relational Graph Inspector */}
        <div className="lg:col-span-6 bento-card rounded-xl p-6 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">Relational Graph Detection</h3>
                  <span className="tech-label text-[10px] bg-white/[0.04] text-zinc-400 border border-white/10 px-1.5 py-0.5 rounded">
                    R-GCN
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">ตรวจจับเครือข่ายบัญชีม้าและความเร็วการหมุนเงิน &lt;80ms</p>
              </div>
              <span className="tech-label text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                SLA: 3.85ms
              </span>
            </div>

            {/* Selector: Routine Transfer vs Critical Mule Anomaly */}
            <div className="p-1 rounded-lg bg-black/40 border border-white/10 grid grid-cols-2 gap-1 text-xs font-medium">
              <button
                onClick={() => setSelectedRecipient('routine')}
                className={`py-1.5 px-3 rounded-md flex items-center justify-center gap-1.5 transition-colors duration-150 ${
                  selectedRecipient === 'routine'
                    ? "bg-[#00A950] text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>1. รายการปกติ (เพื่อน)</span>
              </button>
              <button
                onClick={() => setSelectedRecipient('mule')}
                className={`py-1.5 px-3 rounded-md flex items-center justify-center gap-1.5 transition-colors duration-150 ${
                  selectedRecipient === 'mule'
                    ? "bg-rose-700 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>2. ม้าต้องสงสัย (Scam)</span>
              </button>
            </div>

            {/* Precision Network Topology Visual */}
            <div className="h-40 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center px-6">
              <div className="flex items-center justify-between w-full max-w-sm">
                
                {/* Source User */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-200">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="tech-label text-[10px] text-zinc-400 mt-2">USER ACCOUNT</span>
                </div>

                {/* Arrow & State Tag */}
                <div className="flex-1 mx-4 relative">
                  <div className={`h-0.5 w-full ${
                    selectedRecipient === 'routine' ? "bg-emerald-500" : "bg-rose-500"
                  }`}></div>
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[9px] tech-label border whitespace-nowrap ${
                    selectedRecipient === 'routine'
                      ? "bg-zinc-900 text-emerald-300 border-emerald-500/40"
                      : "bg-rose-950 text-rose-300 border-rose-500/40"
                  }`}>
                    {selectedRecipient === 'routine' ? "ZERO-DELAY (3.8ms)" : "MICRO-AUTH (5s)"}
                  </div>
                </div>

                {/* Target Recipient */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center text-white transition-colors duration-150 ${
                    selectedRecipient === 'routine'
                      ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-400"
                      : "bg-rose-950/60 border-rose-500/60 text-rose-400"
                  }`}>
                    {selectedRecipient === 'routine' ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`tech-label text-[10px] mt-2 ${
                    selectedRecipient === 'routine' ? "text-emerald-400" : "text-rose-400"
                  }`}>
                    {selectedRecipient === 'routine' ? "ROUTINE PEER" : "SUSPECT MULE (48H)"}
                  </span>
                </div>

              </div>
            </div>

            {/* Explanation box */}
            <div className="p-3 rounded-lg bg-black/30 border border-white/5 text-xs text-zinc-300 leading-relaxed font-mono">
              {selectedRecipient === 'routine' ? (
                <div>
                  <span className="text-emerald-400 font-bold">[Zero-Delay Baseline] </span>
                  รายการโอนเงินในชีวิตประจำวันจะประมวลผลผ่านทันทีใน 3.8ms โดยไม่มี Pop-up หรือขั้นตอนยืนยันใดๆ มาขัดจังหวะ
                </div>
              ) : (
                <div>
                  <span className="text-rose-400 font-bold">[Micro-Auth for Critical Anomaly] </span>
                  ตัดการล็อคบัญชี 15 นาทีตามอำเภอใจออก แทนที่ด้วยการสแกนใบหน้า 5 วินาที พร้อมชี้แจงเหตุผลภาษาคนตรงจุด
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card 2: Direct Risk Reasoning & Autonomy */}
        <div className="lg:col-span-6 bento-card rounded-xl p-6 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">Direct Risk Reasoning</h3>
                  <span className="tech-label text-[10px] bg-white/[0.04] text-zinc-400 border border-white/10 px-1.5 py-0.5 rounded">
                    EXPLAINABLE AI
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">ชี้แจงเหตุผลภาษาคนตรงไปตรงมา และให้ผู้ใช้ตัดสินใจเอง</p>
              </div>
              <span className="tech-label text-xs text-zinc-400">NO 15-MIN LOCK</span>
            </div>

            {/* Risk Reasoning Callout */}
            <div className="p-4 rounded-lg bg-rose-950/20 border border-rose-500/30 space-y-2">
              <div className="font-semibold text-rose-300 text-xs flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>ตัวอย่างการชี้แจงเหตุผลความเสี่ยง (Direct Risk Reasoning):</span>
              </div>
              <p className="text-xs text-zinc-200 leading-relaxed font-mono bg-black/50 p-2.5 rounded border border-white/5">
                &ldquo;Recipient account opened 48 hours ago with rapid pass-through fund patterns (บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันทีภายใน 24 วินาที)&rdquo;
              </p>
              <div className="text-[11px] text-zinc-400 pt-0.5">
                ไม่กีดกันการโอนเงินเร่งด่วนที่แท้จริงของผู้ใช้ แต่ให้ข้อมูลประกอบการตัดสินใจอย่างตรงไปตรงมา
              </div>
            </div>

            {/* 2 Pillars Summary */}
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="p-2.5 rounded bg-black/30 border border-white/5">
                <span className="text-zinc-400 block text-[10px]">Zero Arbitrary Locks:</span>
                <span className="font-bold text-emerald-400">ไร้การหน่วงเวลา 15 นาที</span>
              </div>
              <div className="p-2.5 rounded bg-black/30 border border-white/5">
                <span className="text-zinc-400 block text-[10px]">Decision Autonomy:</span>
                <span className="font-bold text-white">ผู้ใช้เป็นผู้ตัดสินใจ</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenScamModal}
            className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm border border-rose-500/40 hover:border-rose-500/70 transition-colors duration-150 flex items-center justify-center gap-2"
          >
            <ScanFace className="w-4 h-4 text-rose-400" />
            <span>ทดลองเปิดหน้าต่าง TrustGraph Micro-Auth (5s)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
