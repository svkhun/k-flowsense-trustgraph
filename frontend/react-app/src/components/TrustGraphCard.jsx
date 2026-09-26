import React, { useState } from 'react';
import { User, AlertTriangle, CheckCircle2, ScanFace, Zap, ShieldCheck, ArrowRight, Network, ArrowUpRight } from 'lucide-react';

export default function TrustGraphCard({ onOpenScamModal, showHeader = true }) {
  const [selectedRecipient, setSelectedRecipient] = useState('routine'); // 'routine' | 'mule'

  return (
    <div className="space-y-8">
      {showHeader && (
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 tech-label text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
            <span>Target-Specific Fraud Defense</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            TrustGraph: สกัดบัญชีม้าตรงจุด ไร้ขั้นตอนซ้ำซ้อน
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            แยกแยะรายการปกติด้วย <strong>Zero-Delay Baseline</strong> ผ่านทันทีใน 3.8ms ไร้ Pop-up รบกวน และใช้ <strong>Micro-Auth 5 วินาที</strong> พร้อมระบุเหตุผลตรงจุดเฉพาะเมื่อพบความผิดปกติวิกฤต
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Card 1: Relational Graph Inspector */}
        <div className="lg:col-span-6 bento-card rounded-2xl p-5 sm:p-7 space-y-4 border border-white/10 bg-[#0B132B]/75 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Title & Badge */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Relational Graph Detection</h3>
                  <span className="tech-label text-[10px] bg-white/5 text-slate-300 border border-white/10 px-1.5 py-0.5 rounded font-mono">
                    R-GCN
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5 font-normal">
                  วิเคราะห์โครงสร้างเครือข่ายและความเร็วการหมุนเงิน &lt; 80ms
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded tabular-nums">
                SLA: 3.85ms
              </span>
            </div>

            {/* Toggle: Routine Transfer vs Critical Mule Anomaly */}
            <div className="p-1 rounded-xl bg-black/50 border border-white/10 grid grid-cols-2 gap-1 text-xs font-mono">
              <button
                onClick={() => setSelectedRecipient('routine')}
                className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 ${
                  selectedRecipient === 'routine'
                    ? "bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/30 border border-emerald-400/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>1. รายการปกติ (เพื่อน)</span>
              </button>
              <button
                onClick={() => setSelectedRecipient('mule')}
                className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 ${
                  selectedRecipient === 'mule'
                    ? "bg-rose-600 text-white font-bold shadow-lg shadow-rose-500/30 border border-rose-400/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>2. ม้าต้องสงสัย (Scam)</span>
              </button>
            </div>

            {/* Precision Network Topology Visualizer */}
            <div className="h-48 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
              
              {/* Routine Scenario Visual */}
              {selectedRecipient === 'routine' ? (
                <div className="flex items-center justify-between w-full max-w-sm relative z-10 animate-fadeIn">
                  {/* Source User */}
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 shadow-md">
                      <User className="w-5 h-5 text-slate-300" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 mt-1.5 font-semibold">USER ACCOUNT</span>
                  </div>

                  {/* Connecting Line */}
                  <div className="flex-1 mx-3 relative">
                    <div className="h-1 w-full rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></div>
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40 whitespace-nowrap shadow-md">
                      ZERO-DELAY (3.85ms)
                    </div>
                  </div>

                  {/* Target Peer */}
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-xl border border-emerald-500 bg-emerald-950/70 text-emerald-400 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 mt-1.5 font-bold">ROUTINE PEER</span>
                  </div>
                </div>
              ) : (
                /* Mule Scenario Visual with Multi-Hop Pass-Through Trace */
                <div className="flex items-center justify-between w-full max-w-md relative z-10 animate-fadeIn">
                  {/* Source User */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                      <User className="w-4 h-4 text-slate-300" />
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 mt-1">USER</span>
                  </div>

                  {/* Hop 1 */}
                  <div className="flex-1 mx-2 relative">
                    <div className="h-1 w-full rounded-full bg-rose-500 shadow-lg shadow-rose-500/50 animate-pulse"></div>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded text-[8px] font-mono font-bold bg-rose-950 text-rose-300 border border-rose-500/40 whitespace-nowrap">
                      INFLOW
                    </div>
                  </div>

                  {/* Mule Tier 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl border border-rose-500 bg-rose-950/90 text-rose-400 flex items-center justify-center shadow-lg animate-pulse">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono text-rose-400 mt-1 font-bold">MULE (48H)</span>
                  </div>

                  {/* Hop 2: Rapid Pass-Through Velocity */}
                  <div className="flex-1 mx-2 relative">
                    <div className="h-1 w-full rounded-full bg-red-600 animate-pulse"></div>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded text-[8px] font-mono font-bold bg-red-950 text-red-300 border border-red-500/40 whitespace-nowrap">
                      &lt;24s OUTFLOW
                    </div>
                  </div>

                  {/* Mule Tier 2 Ring */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl border border-red-500/70 bg-red-950/60 text-red-400 flex items-center justify-center">
                      <Network className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono text-red-400 mt-1">RING TIER-2</span>
                  </div>
                </div>
              )}

            </div>

            {/* Explanation box */}
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 leading-relaxed font-mono">
              {selectedRecipient === 'routine' ? (
                <div>
                  <span className="text-emerald-400 font-bold">[Zero-Delay Baseline] </span>
                  รายการปกติประมวลผลผ่านทันทีใน 3.8ms โดยไม่มี Pop-up หรือขั้นตอนยืนยันใดๆ มาขัดจังหวะ
                </div>
              ) : (
                <div>
                  <span className="text-rose-400 font-bold">[Micro-Auth for Critical Anomaly] </span>
                  ตรวจจับความเร็วการหมุนเงินออกภายใน 24 วินาที กระตุ้นสแกนหน้า 5 วินาที พร้อมชี้แจงเหตุผลตรงจุด
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Card 2: Direct Risk Reasoning & Autonomy */}
        <div className="lg:col-span-6 bento-card rounded-2xl p-5 sm:p-7 space-y-4 border border-white/10 bg-[#0B132B]/75 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-rose-400" />
                  <h3 className="text-base font-bold text-white">Direct Risk Reasoning</h3>
                  <span className="tech-label text-[10px] bg-white/5 text-slate-300 border border-white/10 px-1.5 py-0.5 rounded font-mono">
                    EXPLAINABLE AI
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5 font-normal">ชี้แจงเหตุผลภาษาคนตรงไปตรงมา และให้ผู้ใช้ตัดสินใจเอง</p>
              </div>
              <span className="tech-label text-xs font-mono text-emerald-400">NO 15-MIN LOCK</span>
            </div>

            {/* Risk Reasoning Callout */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <div className="font-semibold text-rose-300 text-xs flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>ตัวอย่างการชี้แจงเหตุผลความเสี่ยง (Direct Risk Reasoning):</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-mono bg-black/60 p-3 rounded-lg border border-white/10">
                &ldquo;Recipient account opened 48 hours ago with rapid pass-through fund patterns (บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันทีภายใน 24 วินาที)&rdquo;
              </p>
              <div className="text-[11px] text-slate-400 font-mono pt-0.5">
                ไม่กีดกันการโอนเงินเร่งด่วนที่แท้จริงของผู้ใช้ แต่ให้ข้อมูลประกอบการตัดสินใจอย่างตรงไปตรงมา
              </div>
            </div>

            {/* 2 Pillars Summary */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-0.5">
                <span className="text-slate-400 block text-[10px]">ZERO ARBITRARY LOCKS:</span>
                <span className="font-bold text-emerald-400">ไร้การหน่วงเวลา 15 นาที</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-0.5">
                <span className="text-slate-400 block text-[10px]">DECISION AUTONOMY:</span>
                <span className="font-bold text-white">ผู้ใช้เป็นผู้ตัดสินใจ</span>
              </div>
            </div>

          </div>

          <button
            onClick={onOpenScamModal}
            className="w-full py-3 px-4 rounded-xl bg-rose-950/50 hover:bg-rose-900/60 text-rose-200 font-bold text-xs sm:text-sm border border-rose-500/40 hover:border-rose-400 transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-rose-950/30"
          >
            <ScanFace className="w-4 h-4 text-rose-400" />
            <span>ทดลองเปิดหน้าต่าง TrustGraph Micro-Auth (5s)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
