import React, { useRef } from 'react';
import { Smartphone, RefreshCw, Maximize2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SimulatorPage() {
  const iframeRef = useRef(null);

  const handleRefresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto space-y-3">
      {/* Top Toolbar */}
      <div className="bento-card rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-white/10">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
            title="กลับสู่หน้า Overview"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                FlowSense &amp; TrustGraph Interactive Simulator (K PLUS)
              </h1>
              <span className="tech-label text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                LIVE RUNTIME
              </span>
            </div>
            <p className="text-xs text-zinc-400 hidden sm:block">
              ระบบจำลอง K PLUS: Status Horizon Bar, Micro-Sweep 1-Tap Undo, Zero-Delay Baseline, และ Micro-Auth 5s
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>รีเฟรช</span>
          </button>
          <a
            href="/simulator.html"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00A950] hover:bg-[#008F43] text-white text-xs font-medium border border-emerald-400/20 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>เปิดเต็มหน้าจอ</span>
          </a>
        </div>
      </div>

      {/* Simulator Viewport Container */}
      <div className="w-full h-[calc(100vh-140px)] min-h-[750px] rounded-xl overflow-hidden border border-white/10 bg-[#090A0F] relative">
        <iframe
          ref={iframeRef}
          src="/simulator.html"
          title="FlowSense & TrustGraph Simulator"
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}
