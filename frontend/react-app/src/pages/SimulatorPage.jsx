import React, { useRef } from 'react';
import { RefreshCw, Maximize2, ArrowLeft } from 'lucide-react';
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
      <div className="bento-card rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-slate-200/90 shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
            title="กลับสู่หน้า Overview"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
                FlowSense &amp; TrustGraph Interactive Simulator (K PLUS)
              </h1>
              <span className="text-[10px] font-mono tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                LIVE RUNTIME
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block font-normal">
              ระบบจำลอง K PLUS: Status Horizon Bar, Micro-Sweep 1-Tap Undo, Zero-Delay Baseline, และ Micro-Auth 5s
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-medium border border-slate-200/80 shadow-sm transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
            <span>รีเฟรช</span>
          </button>
          <a
            href="/simulator.html"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#064E3B] hover:bg-[#022C22] text-white text-xs font-medium border border-emerald-900/30 shadow-sm transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>เปิดเต็มหน้าจอ</span>
          </a>
        </div>
      </div>

      {/* Simulator Viewport Container */}
      <div className="w-full h-[calc(100vh-140px)] min-h-[750px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white relative">
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
