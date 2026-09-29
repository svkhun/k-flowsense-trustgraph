import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  RotateCcw, 
  ScanFace, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Smartphone, 
  Terminal,
  ChevronDown
} from 'lucide-react';
import Velaris from './ui/velaris';
import ScrollReveal from './ScrollReveal';

export default function Hero({ onOpenScamModal }) {
  const [activeScenario, setActiveScenario] = useState('routine'); // 'routine' | 'commitment' | 'mule' | 'recall'
  const [simFeedback, setSimFeedback] = useState(null);

  const scenarios = [
    {
      id: 'routine',
      label: '1. โอนปกติ (฿65 กาแฟ)',
      badge: 'ZERO-DELAY (3.85ms)',
      badgeColor: 'bg-emerald-500/10 text-emerald-400',
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
      badgeColor: 'bg-cyan-500/10 text-cyan-400',
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
      badgeColor: 'bg-rose-500/10 text-rose-400',
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
      badgeColor: 'bg-amber-500/10 text-amber-400',
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

  const scrollToConsole = () => {
    document.getElementById('interactive-console')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      
      {/* ========================================================================= */}
      {/* 1. FULLSCREEN IMMERSIVE HERO VIEWPORT (Living Gradient in Motion)         */}
      {/* ========================================================================= */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        
        {/* Full Viewport Velaris WebGL Canvas Background */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <Velaris
            bg="#070B12"
            colors={["#00F59B", "#00A950", "#059669", "#070B12"]}
            speed={1.0}
            grain={0.22}
            height="100%"
            className="w-full h-full"
          />
        </div>

        {/* Subtle Vignette Ambient Blur */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none -z-10"></div>

        {/* Hero Pitch Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center py-12">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md shadow-lg shadow-emerald-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="tracking-wide">KBTG HACKATHON 2026 • DATA SCIENCE TRACK</span>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.2] sm:leading-[1.15] mb-6">
            <span className="block">Autonomous Cashflow</span>
            <span className="block mt-2 text-gradient-kplus">&amp; Graph-Based Fraud Defense</span>
          </h1>

          {/* Clean Subtitle */}
          <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-normal mb-8">
            สถาปัตยกรรม AI จัดการสภาพคล่อง (<strong className="text-white font-semibold">FlowSense</strong>) และสกัดบัญชีม้าแบบเรียลไทม์ (<strong className="text-emerald-400 font-semibold">TrustGraph</strong>) บน K PLUS ตัดปัญหา Alert Fatigue และการล็อคบัญชี 15 นาที ด้วย SLA &lt; 80ms
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <Link
              to="/flowsense"
              className="btn-kplus px-6 py-3 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xl shadow-emerald-600/25 transition-transform hover:scale-105"
            >
              <span>เจาะลึก FlowSense</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={onOpenScamModal}
              className="px-5 py-3 rounded-full bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 hover:border-rose-400 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shadow-lg backdrop-blur-md hover:scale-105"
            >
              <ScanFace className="w-4 h-4 text-rose-400" />
              <span>ทดลอง Micro-Auth (5s)</span>
            </button>

            <Link
              to="/app"
              className="px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 hover:border-white/30 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-md hover:scale-105"
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>เปิด K PLUS Simulator</span>
            </Link>
          </div>

        </div>

        {/* Scroll Cue Indicator */}
        <button
          onClick={scrollToConsole}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400/80 hover:text-emerald-400 transition-colors cursor-pointer group"
          title="เลื่อนลงเพื่อดูระบบจำลองสถานการณ์"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to explore live engine</span>
          <ChevronDown className="w-4 h-4 text-emerald-400/80 group-hover:translate-y-1 transition-transform animate-bounce" />
        </button>

      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE SCENARIO CONSOLE (Revealed on Scroll, Reduced Borders)     */}
      {/* ========================================================================= */}
      <section 
        id="interactive-console" 
        className="pt-12 pb-16 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
      >
        <ScrollReveal>
          <div className="rounded-3xl p-6 sm:p-8 space-y-6 bg-[#16181D]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl relative overflow-hidden">
            
            {/* Console Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Interactive Scenario Console
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  ทดสอบการตอบสนองของระบบ Triton, R-GCN และ LightGBM ตามสถานการณ์จำลอง
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-emerald-300">CORE SERVER ONLINE (TH-BKK-01)</span>
              </div>
            </div>

            {/* 4 Interactive Scenario Buttons - Clean & Border-Reduced */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {scenarios.map((sc) => {
                const isSelected = activeScenario === sc.id;
                return (
                  <button
                    key={sc.id}
                    onClick={() => handleScenarioSelect(sc.id)}
                    className={`p-4 rounded-2xl text-left transition-all duration-200 relative ${
                      isSelected
                        ? 'bg-emerald-500/15 text-white ring-1 ring-emerald-400/50 shadow-lg shadow-emerald-500/10'
                        : 'bg-white/[0.02] hover:bg-white/[0.05] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-white">{sc.label}</span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      )}
                    </div>
                    <span className={`text-[10px] font-mono font-medium ${sc.statusColor}`}>
                      {sc.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Scenario Live Display & Telemetry Stream */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
              
              {/* Live Pipeline Flow Card (Col 7) */}
              <div className="lg:col-span-7 bg-black/30 rounded-2xl p-5 border border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="tech-label text-slate-400 text-xs">TRANSACTION TRACE</span>
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    LATENCY: {currentScenario.latency} &lt; 80ms SLA
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {currentScenario.description}
                </p>

                {/* Graphical Flow Trace Rows (Clean, No Box-in-Box Nesting) */}
                <div className="py-2 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400">Pipeline Stage:</span>
                    <span className="text-white font-semibold">{currentScenario.telemetry.stage}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-slate-400">Assessment:</span>
                    <span className="text-emerald-300 font-semibold">{currentScenario.telemetry.riskScore}</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Velocity:</span>
                    <span className="text-slate-300">{currentScenario.telemetry.velocity}</span>
                  </div>
                </div>

                {/* Status Outcome Banner */}
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className={`text-xs font-mono font-bold ${currentScenario.statusColor}`}>
                      {currentScenario.status}
                    </span>
                  </div>
                  {activeScenario === 'mule' && (
                    <button
                      onClick={onOpenScamModal}
                      className="px-3 py-1 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs transition-colors shadow-sm"
                    >
                      เปิดสแกนหน้า 5s
                    </button>
                  )}
                </div>
              </div>

              {/* Live Core Telemetry Strip (Col 5) */}
              <div className="lg:col-span-5 bg-black/30 rounded-2xl p-5 border border-white/[0.06] flex flex-col justify-between space-y-4">
                <div className="space-y-3 font-mono text-xs">
                  <span className="tech-label text-slate-400 text-xs block pb-2 border-b border-white/[0.06]">
                    REAL-TIME BENCHMARKS
                  </span>

                  <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                    <span className="text-slate-400">P99 Latency:</span>
                    <span className="text-emerald-400 font-bold">11.62 ms (7x faster)</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                    <span className="text-slate-400">Arbitrary Lockout:</span>
                    <span className="text-white font-bold">0 Min (No 15m Freeze)</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                    <span className="text-slate-400">1-Tap Recall SLA:</span>
                    <span className="text-emerald-400 font-bold">100% Instant Rollback</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-400">Annual CASA Growth:</span>
                    <span className="text-emerald-400 font-bold">+฿1.42 Billion THB</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>BOT &amp; PDPA Compliant</span>
                  <span className="text-emerald-400 font-semibold">SLA &lt; 80ms</span>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
