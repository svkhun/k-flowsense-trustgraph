import React, { useState, useEffect, useRef } from 'react';
import MinimalLogo from './MinimalLogo';
import { CheckCircle2, Cpu, Zap, ShieldCheck } from 'lucide-react';

/**
 * LaunchScreen (Intro Loading Animation)
 * Smooth, high-end opening launch screen with Minimal Logo,
 * real-time ONNX/FinTech telemetry initialization sequence, and elegant curtain exit.
 */
export default function LaunchScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const hasFinishedRef = useRef(false);

  // Technical boot sequence messages
  const bootSteps = [
    {
      pct: 22,
      label: 'INITIALIZING ONNX INFERENCE ENGINE',
      detail: 'Loading trustgraph.onnx & flowsense.onnx into memory...',
      code: 'SYS::INIT_T1'
    },
    {
      pct: 52,
      label: 'CALIBRATING FLOWSENSE LIQUIDITY RUNWAY',
      detail: 'Running LightGBM 30-Day cashflow horizon forecasting...',
      code: 'CASA::HORIZON_30D'
    },
    {
      pct: 82,
      label: 'SYNCHRONIZING TRUSTGRAPH NEURAL DEFENSE',
      detail: 'Streaming 10K+ transaction graph embeddings via R-GCN...',
      code: 'GRAPH::ANTI_MULE'
    },
    {
      pct: 100,
      label: 'CORE BANKING TELEMETRY VERIFIED',
      detail: 'Sub-second latency SLA met: P99 3.85ms < 80ms baseline',
      code: 'SLA::PASSED_P99'
    }
  ];

  // Fast-forward skip handler
  const handleSkip = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setProgress(100);
    setCurrentStepIndex(bootSteps.length - 1);
    setIsReady(true);

    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 550);
    }, 200);
  };

  // Keyboard shortcut listener (ESC to skip)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.code === 'Space') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Smooth loading progression
  useEffect(() => {
    const totalDuration = 1600; // Snappy 1.6s total runtime
    const intervalTime = 25;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          if (!hasFinishedRef.current) {
            hasFinishedRef.current = true;
            setIsReady(true);
            setTimeout(() => {
              setIsExiting(true);
              setTimeout(() => {
                if (onComplete) onComplete();
              }, 550);
            }, 350);
          }
          return 100;
        }

        const next = Math.min(prev + increment, 100);
        
        // Update boot step based on current progress
        if (next >= 82) setCurrentStepIndex(3);
        else if (next >= 52) setCurrentStepIndex(2);
        else if (next >= 22) setCurrentStepIndex(1);
        else setCurrentStepIndex(0);

        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  const currentStep = bootSteps[currentStepIndex] || bootSteps[0];

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121214] select-none transition-all duration-500 ease-out ${
        isExiting 
          ? 'opacity-0 scale-[1.02] filter blur-[2px] pointer-events-none' 
          : 'opacity-100 scale-100'
      }`}
      onClick={handleSkip}
      title="คลิกที่ใดก็ได้เพื่อข้ามการโหลด (Click anywhere to skip)"
    >
      {/* 1. Ambient Background Lighting Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(0,169,80,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />

      {/* 2. Top Bar: Telemetry Status & Skip Action */}
      <div className="absolute top-6 left-0 right-0 px-6 sm:px-10 flex items-center justify-between text-xs text-slate-400 font-mono z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 font-semibold tracking-wider">TRUSTGRAPH CORE v3.0</span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">KBTG HACKATHON 2026</span>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleSkip();
          }}
          className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-xs"
        >
          <span className="text-[10px] text-slate-500 font-mono group-hover:text-emerald-400">[ESC]</span>
          <span>ข้ามการเปิดตัว</span>
        </button>
      </div>

      {/* 3. Center Hero Stage */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg w-full">
        
        {/* Minimal Emblem with Dynamic Pulsing Aura */}
        <div className="relative mb-6">
          {/* Subtle Outer Radar Halo */}
          <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-xl animate-pulse" />
          
          {/* Minimalist Logo Mark */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#1E2025]/90 border border-emerald-500/30 p-3 sm:p-4 shadow-2xl shadow-emerald-950/60 flex items-center justify-center">
            <svg 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="intro-k-emerald" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00F59B" />
                  <stop offset="0.55" stopColor="#00A950" />
                  <stop offset="1" stopColor="#004D25" />
                </linearGradient>
                <linearGradient id="intro-k-mint" x1="12" y1="6" x2="28" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6EE7B7" />
                  <stop offset="1" stopColor="#10B981" />
                </linearGradient>
                <linearGradient id="intro-shield-wire" x1="6" y1="3" x2="26" y2="29" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00F59B" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#00A950" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Minimal Shield Silhouette Frame */}
              <path 
                d="M16 3.5 L26 8 V14.5 C26 21 21.6 26.4 16 28.2 C10.4 26.4 6 21 6 14.5 V8 L16 3.5 Z" 
                stroke="url(#intro-shield-wire)" 
                strokeWidth="1.2" 
                strokeLinejoin="round" 
                fill="rgba(0, 169, 80, 0.04)"
              />

              {/* Vertical Banking Backbone Ledger */}
              <rect 
                x="8.5" 
                y="7.5" 
                width="2.8" 
                height="17" 
                rx="1.4" 
                fill="url(#intro-k-emerald)" 
              />

              {/* FlowSense Fluid Arc */}
              <path 
                d="M13.5 16 C15.2 13.8 17.5 10.8 22 7.8 C22.8 7.2 24.1 7.6 24.4 8.7 C24.7 9.8 24 10.9 23 11.6 C19.8 14 17.8 16.2 15.8 17.6" 
                stroke="url(#intro-k-mint)" 
                strokeWidth="2.4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />

              {/* TrustGraph Defense Vector */}
              <path 
                d="M13.8 15.2 L23.5 24.5" 
                stroke="url(#intro-k-emerald)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
              />

              {/* Sub-80ms Real-time AI Node */}
              <circle cx="13.8" cy="15.8" r="1.6" fill="#FFFFFF" />
              <circle cx="13.8" cy="15.8" r="0.9" fill="#00F59B" />
            </svg>
          </div>
        </div>

        {/* Minimalist Brand Typography */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              FlowSense <span className="text-emerald-400 font-normal">·</span> TrustGraph
            </h1>
            <span className="text-[10px] font-mono tracking-wider font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-md">
              K+ 2026
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono tracking-wider uppercase">
            Autonomous Banking Intelligence • K PLUS Flagship
          </p>
        </div>

        {/* Telemetry Progress Module */}
        <div className="w-full mt-8 space-y-3">
          {/* Top Status Line */}
          <div className="flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              {isReady ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              )}
              <span className="truncate">{currentStep.label}</span>
            </div>
            <div className="font-semibold text-emerald-400 font-num">
              {Math.round(progress)}%
            </div>
          </div>

          {/* Precision Neon Progress Bar */}
          <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-white/5 relative p-0">
            <div 
              className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-[#00F59B] transition-all duration-75 ease-out rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              {/* Glowing Head */}
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/90 shadow-[0_0_10px_#00F59B] rounded-full" />
            </div>
          </div>

          {/* Sub-status Technical Note */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span className="truncate">{currentStep.detail}</span>
            <span className="text-emerald-500/80 ml-2 shrink-0">{currentStep.code}</span>
          </div>
        </div>

      </div>

      {/* 4. Bottom Footer Telemetry */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-[11px] font-mono text-slate-600 z-20">
        Kasikorn Business-Technology Group (KBTG) • Production Ready
      </div>
    </div>
  );
}
