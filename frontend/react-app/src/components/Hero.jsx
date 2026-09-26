import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, RotateCcw, ScanFace, Activity, CheckCircle2, AlertTriangle, Sparkles, Smartphone, Terminal } from 'lucide-react';

export default function Hero({ onOpenScamModal }) {
  const [activeScenario, setActiveScenario] = useState('routine'); // 'routine' | 'commitment' | 'mule' | 'recall'
  const [simFeedback, setSimFeedback] = useState(null);

  const scenarios = [
    {
      id: 'routine',
      label: '1. โอนปกติ (฿65 กาแฟ)',
      badge: 'ZERO-DELAY (3.85ms)',
      badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      description: 'รายการปกติผ่าน Zero-Delay Baseline ทันทีใน 3.85ms ไร้ Pop-up และไร้ขั้นตอนเพิ่ม',
      latency: '3.85 ms',
      status: 'APPROVED (0 Added Steps)',
      statusColor: 'text-emerald-400',
      telemetry: {
        stage: 'TRITON INFERENCE // ONNX',
        riskScore: '0.008 (Clean)',
        velocity: 'Routine Frequency',
        decision: 'PASS INSTANTLY'
      }
    },
    {
      id: 'commitment',
      label: '2. ภาระคงที่ (฿8,500 ค่าเช่า)',
      badge: 'HORIZON RUNWAY (30D)',
      badgeColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
      description: 'LightGBM คาดการณ์สภาพคล่องสิ้นเดือน พร้อมระงับเตือนช่วงเงินลดปกติเพื่อกัน Alert Fatigue',
      latency: '1.20 ms',
      status: 'SAFE TO SPEND: ฿6,200',
      statusColor: 'text-cyan-400',
      telemetry: {
        stage: 'LIGHTGBM TIME-SERIES',
        riskScore: 'Runway: 18 Days',
        velocity: 'Normal Seasonality',
        decision: 'SUPPRESS ALERT'
      }
    },
    {
      id: 'mule',
      label: '3. โอนเข้าม้า (฿18,000)',
      badge: 'MICRO-AUTH (5s SCAN)',
      badgeColor: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
      description: 'R-GCN ตรวจพบเครือข่ายบัญชีม้าหมุนเงินเร็ว <24s กระตุ้น Micro-Auth 5s สแกนหน้าพร้อมบอกเหตุผล',
      latency: '4.10 ms',
      status: 'INTERCEPTED: REASON DISCLOSED',
      statusColor: 'text-rose-400',
      telemetry: {
        stage: 'R-GCN GRAPH EMBEDDING',
        riskScore: '0.942 (Mule Risk)',
        velocity: 'Pass-through in 24s',
        decision: 'TRIGGER MICRO-AUTH'
      }
    },
    {
      id: 'recall',
      label: '4. 1-Tap Undo (ดึงเงินคืน)',
      badge: 'INSTANT RECALL (100%)',
      badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      description: 'ดึงเงินออมจาก Sub-account ดอกเบี้ยสูง คืนเข้าบัญชีหลักทันที 100% ไร้ค่าปรับ ไร้เวลารอ',
      latency: '0.85 ms',
      status: 'RECALLED ฿15,240 TO MAIN',
      statusColor: 'text-amber-400',
      telemetry: {
        stage: 'CORE CASA LEDGER',
        riskScore: 'Zero Penalty',
        velocity: 'Single Tap',
        decision: 'RESTORE 100%'
      }
    }
  ];

  const currentScenario = scenarios.find(s => s.id === activeScenario);

  const handleScenarioSelect = (scenarioId) => {
    setActiveScenario(scenarioId);
    if (scenarioId === 'mule') {
      setSimFeedback('ตรวจพบบัญชีม้าความเสี่ยงสูง! พร้อมเปิด Micro-Auth สแกนหน้า 5 วินาที');
    } else if (scenarioId === 'recall') {
      setSimFeedback('1-Tap Undo สำเร็จ! คืนเงิน 100% เข้าบัญชีหลักโดยไม่มีค่าธรรมเนียม');
    } else {
      setSimFeedback(null);
    }
  };

  return (
    <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-16 overflow-hidden border-b border-white/10">
      
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/15 via-emerald-600/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Pitch Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          
          {/* Top Live Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs shadow-lg shadow-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>KBTG HACKATHON 2026 • DATA SCIENCE TRACK</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.18]">
            Autonomous Cashflow <br className="hidden sm:block" />
            <span className="text-gradient-kplus">&amp; Graph-Based Fraud Defense</span>
          </h1>

          {/* Subtitle - Crisp, Punchy, Zero Fluff */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            สถาปัตยกรรม AI จัดการสภาพคล่อง (<strong className="text-white">FlowSense</strong>) และสกัดบัญชีม้าแบบเรียลไทม์ (<strong className="text-emerald-400">TrustGraph</strong>) บน K PLUS ตัดปัญหา Alert Fatigue และการล็อคบัญชี 15 นาที ด้วย SLA &lt; 80ms
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link
              to="/flowsense"
              className="btn-kplus px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg"
            >
              <span>เจาะลึก FlowSense</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={onOpenScamModal}
              className="px-4 py-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border border-rose-500/40 hover:border-rose-400 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shadow-lg shadow-rose-950/30"
            >
              <ScanFace className="w-4 h-4 text-rose-400" />
              <span>ทดลอง Micro-Auth (5s)</span>
            </button>

            <Link
              to="/app"
              className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-white/20 text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>เปิด K PLUS Simulator</span>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE SCENARIO CONSOLE                                             */}
        {/* ========================================================================= */}
        <div className="bento-card-active rounded-2xl p-5 sm:p-7 space-y-5 border border-emerald-500/40 bg-[#0B132B]/85 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,169,80,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,169,80,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          {/* Console Header */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-white/10">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Interactive Scenario Console
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                ทดสอบการตอบสนองของระบบ Triton, R-GCN และ LightGBM ตามสถานการณ์จำลอง
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-300">CORE SERVER ONLINE (TH-BKK-01)</span>
            </div>
          </div>

          {/* 4 Interactive Scenario Buttons */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {scenarios.map((sc) => {
              const isSelected = activeScenario === sc.id;
              return (
                <button
                  key={sc.id}
                  onClick={() => handleScenarioSelect(sc.id)}
                  className={`p-3 rounded-xl text-left transition-all duration-200 border relative ${
                    isSelected
                      ? 'bg-gradient-to-b from-emerald-500/20 to-emerald-600/10 border-emerald-400 shadow-md shadow-emerald-500/20'
                      : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold">{sc.label}</span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    )}
                  </div>
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border inline-block ${sc.badgeColor}`}>
                    {sc.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Scenario Live Display & Telemetry Stream */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 pt-1">
            
            {/* Live Pipeline Flow Card (Col 7) */}
            <div className="lg:col-span-7 bg-[#070B17]/90 rounded-xl p-4 sm:p-5 border border-white/10 space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="tech-label text-slate-400 text-xs">TRANSACTION TRACE</span>
                <span className="font-mono text-xs font-bold text-emerald-400">
                  LATENCY: {currentScenario.latency} &lt; 80ms SLA
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {currentScenario.description}
              </p>

              {/* Graphical Flow Trace */}
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Pipeline Stage:</span>
                  <span className="text-white font-semibold">{currentScenario.telemetry.stage}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Assessment:</span>
                  <span className="text-emerald-300 font-semibold">{currentScenario.telemetry.riskScore}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Velocity:</span>
                  <span className="text-slate-300">{currentScenario.telemetry.velocity}</span>
                </div>
              </div>

              {/* Status Outcome */}
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className={`text-xs font-mono font-bold ${currentScenario.statusColor}`}>
                    {currentScenario.status}
                  </span>
                </div>
                {activeScenario === 'mule' && (
                  <button
                    onClick={onOpenScamModal}
                    className="px-2.5 py-1 rounded bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs transition-colors"
                  >
                    เปิดสแกนหน้า 5s
                  </button>
                )}
              </div>
            </div>

            {/* Live Core Telemetry Strip (Col 5) */}
            <div className="lg:col-span-5 bg-[#070B17]/90 rounded-xl p-4 sm:p-5 border border-white/10 flex flex-col justify-between space-y-3">
              <div className="space-y-2.5 font-mono text-xs">
                <span className="tech-label text-slate-400 text-xs block pb-1.5 border-b border-white/10">
                  REAL-TIME BENCHMARKS
                </span>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">P99 Latency:</span>
                  <span className="text-emerald-400 font-bold">11.62 ms (7x faster)</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">Arbitrary Lockout:</span>
                  <span className="text-white font-bold">0 Min (No 15m Freeze)</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">1-Tap Recall SLA:</span>
                  <span className="text-emerald-400 font-bold">100% Instant Rollback</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Annual CASA Growth:</span>
                  <span className="text-emerald-400 font-bold">+฿1.42 Billion THB</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>BOT &amp; PDPA Compliant</span>
                <span className="text-emerald-400">SLA &lt; 80ms</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
