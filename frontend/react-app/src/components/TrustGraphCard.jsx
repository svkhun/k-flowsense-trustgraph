import React, { useState } from 'react';
import { User, AlertTriangle, CheckCircle2, ScanFace } from 'lucide-react';

export default function TrustGraphCard({ onOpenScamModal, showHeader = true }) {
  const [selectedRecipient, setSelectedRecipient] = useState('routine'); // 'routine' | 'mule'

  return (
    <div className="space-y-8">
      {showHeader && (
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span>Target-Specific Fraud Defense</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            TrustGraph: ตรวจจับบัญชีม้าตรงจุด ไร้ขั้นตอนซ้ำซ้อน
          </h2>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            แยกแยะรายการปกติด้วย <strong>Zero-Delay Baseline</strong> ผ่านทันทีใน 3.8ms ไร้ Pop-up รบกวน และใช้ <strong>Micro-Auth 5 วินาที</strong> พร้อมระบุเหตุผลตรงจุดเฉพาะเมื่อพบความผิดปกติวิกฤต
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Card 1: Relational Graph Inspector */}
        <div className="lg:col-span-6 bento-card rounded-xl p-6 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-slate-900">Relational Graph Detection</h3>
                  <span className="text-[10px] font-mono tracking-wider bg-slate-100 text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded font-medium">
                    R-GCN
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">ตรวจจับเครือข่ายบัญชีม้าและความเร็วการหมุนเงิน &lt;80ms</p>
              </div>
              <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded tabular-nums">
                SLA: 3.85ms
              </span>
            </div>

            {/* Selector: Routine Transfer vs Critical Mule Anomaly */}
            <div className="p-1 rounded-lg bg-slate-100 border border-slate-200 grid grid-cols-2 gap-1 text-xs font-medium">
              <button
                onClick={() => setSelectedRecipient('routine')}
                className={`py-1.5 px-3 rounded-md flex items-center justify-center gap-1.5 transition-all duration-150 ${
                  selectedRecipient === 'routine'
                    ? "bg-white text-emerald-800 font-medium shadow-sm border border-slate-200/60"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>1. รายการปกติ (เพื่อน)</span>
              </button>
              <button
                onClick={() => setSelectedRecipient('mule')}
                className={`py-1.5 px-3 rounded-md flex items-center justify-center gap-1.5 transition-all duration-150 ${
                  selectedRecipient === 'mule'
                    ? "bg-white text-rose-700 font-medium shadow-sm border border-rose-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                <span>2. ม้าต้องสงสัย (Scam)</span>
              </button>
            </div>

            {/* Precision Network Topology Visual */}
            <div className="h-40 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center px-6">
              <div className="flex items-center justify-between w-full max-w-sm">
                {/* Source User */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700">
                    <User className="w-5 h-5 text-slate-600" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500 mt-2 font-medium">USER ACCOUNT</span>
                </div>

                {/* Arrow & State Tag */}
                <div className="flex-1 mx-4 relative">
                  <div className={`h-0.5 w-full ${
                    selectedRecipient === 'routine' ? "bg-emerald-500" : "bg-rose-500"
                  }`}></div>
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[9px] font-mono tracking-wider border whitespace-nowrap shadow-sm font-medium ${
                    selectedRecipient === 'routine'
                      ? "bg-white text-emerald-800 border-emerald-200"
                      : "bg-white text-rose-700 border-rose-200"
                  }`}>
                    {selectedRecipient === 'routine' ? "ZERO-DELAY (3.8ms)" : "MICRO-AUTH (5s)"}
                  </div>
                </div>

                {/* Target Recipient */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shadow-sm transition-colors duration-150 ${
                    selectedRecipient === 'routine'
                      ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                      : "bg-rose-50 border-rose-300 text-rose-600"
                  }`}>
                    {selectedRecipient === 'routine' ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`text-[10px] font-mono tracking-wider mt-2 font-medium ${
                    selectedRecipient === 'routine' ? "text-emerald-700" : "text-rose-600"
                  }`}>
                    {selectedRecipient === 'routine' ? "ROUTINE PEER" : "SUSPECT MULE (48H)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Explanation box */}
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed font-mono">
              {selectedRecipient === 'routine' ? (
                <div>
                  <span className="text-emerald-700 font-semibold">[Zero-Delay Baseline] </span>
                  รายการโอนเงินในชีวิตประจำวันจะประมวลผลผ่านทันทีใน 3.8ms โดยไม่มี Pop-up หรือขั้นตอนยืนยันใดๆ มาขัดจังหวะ
                </div>
              ) : (
                <div>
                  <span className="text-rose-600 font-semibold">[Micro-Auth for Critical Anomaly] </span>
                  ตัดการล็อคบัญชี 15 นาทีตามอำเภอใจออก แทนที่ด้วยการสแกนใบหน้า 5 วินาที พร้อมชี้แจงเหตุผลภาษาคนตรงจุด
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card 2: Direct Risk Reasoning & Autonomy */}
        <div className="lg:col-span-6 bento-card rounded-xl p-6 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-slate-900">Direct Risk Reasoning</h3>
                  <span className="text-[10px] font-mono tracking-wider bg-slate-100 text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded font-medium">
                    EXPLAINABLE AI
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">ชี้แจงเหตุผลภาษาคนตรงไปตรงมา และให้ผู้ใช้ตัดสินใจเอง</p>
              </div>
              <span className="text-xs font-mono tracking-wider text-slate-500 font-medium">NO 15-MIN LOCK</span>
            </div>

            {/* Risk Reasoning Callout */}
            <div className="p-4 rounded-lg bg-rose-50/70 border border-rose-200 space-y-2">
              <div className="font-medium text-rose-800 text-xs flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>ตัวอย่างการชี้แจงเหตุผลความเสี่ยง (Direct Risk Reasoning):</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-mono bg-white p-3 rounded border border-rose-200/60 shadow-sm">
                &ldquo;Recipient account opened 48 hours ago with rapid pass-through fund patterns (บัญชีปลายทางเพิ่งเปิดได้เพียง 48 ชม. พร้อมพฤติกรรมเงินเข้าแล้วหมุนเวียนโอนออกทันทีภายใน 24 วินาที)&rdquo;
              </p>
              <div className="text-[11px] text-slate-500 pt-0.5 font-normal">
                ไม่กีดกันการโอนเงินเร่งด่วนที่แท้จริงของผู้ใช้ แต่ให้ข้อมูลประกอบการตัดสินใจอย่างตรงไปตรงมา
              </div>
            </div>

            {/* 2 Pillars Summary */}
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200/80">
                <span className="text-slate-500 block text-[10px] font-medium tracking-wider">ZERO ARBITRARY LOCKS:</span>
                <span className="font-semibold text-emerald-700">ไร้การหน่วงเวลา 15 นาที</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200/80">
                <span className="text-slate-500 block text-[10px] font-medium tracking-wider">DECISION AUTONOMY:</span>
                <span className="font-semibold text-slate-900">ผู้ใช้เป็นผู้ตัดสินใจ</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenScamModal}
            className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-medium text-xs sm:text-sm border border-rose-300 hover:border-rose-400 shadow-sm transition-all duration-150 flex items-center justify-center gap-2"
          >
            <ScanFace className="w-4 h-4 text-rose-600" />
            <span>ทดลองเปิดหน้าต่าง TrustGraph Micro-Auth (5s)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
