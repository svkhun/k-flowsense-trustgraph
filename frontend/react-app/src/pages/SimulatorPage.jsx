import React, { useRef } from 'react';
import { RefreshCw, Maximize2, ArrowLeft, Smartphone } from 'lucide-react';
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
      <div className="bento-card rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 border border-white/10 bg-[#0B132B]/85 backdrop-blur-xl shadow-xl">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            title="กลับสู่หน้า Overview"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                FlowSense &amp; TrustGraph Interactive Simulator (K PLUS)
              </h1>
              <span className="text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                LIVE RUNTIME
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              ระบบจำลอง K PLUS: Status Horizon Bar, Micro-Sweep 1-Tap Undo, Zero-Delay Baseline, และ Micro-Auth 5s
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
            <span>รีเฟรช</span>
          </button>
          <a
            href="/simulator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-kplus inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>เปิดเต็มหน้าต่างใหม่</span>
          </a>
        </div>
      </div>

      {/* Simulator Viewport Container */}
      <div className="w-full h-[calc(100vh-120px)] min-h-[900px] rounded-2xl overflow-hidden border border-white/10 bg-[#070B14] relative shadow-2xl">
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
