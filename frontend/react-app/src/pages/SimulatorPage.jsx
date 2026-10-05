import React, { useRef } from 'react';
import { RefreshCw, Maximize2, ArrowLeft, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SimulatorPage() {
  const iframeRef = useRef(null);

  const handleRefresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = `/simulator.html?t=${Date.now()}`;
    }
  };

  return (
    <div className="h-[calc(100vh-64px)] w-full flex flex-col overflow-hidden bg-[#121214]">
      {/* Sleek Minimal Studio Bar */}
      <div className="h-10 px-4 sm:px-6 flex items-center justify-between border-b border-white/10 bg-[#18191D]/90 backdrop-blur-xl shrink-0 text-xs z-20">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            title="กลับสู่หน้า Overview"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Overview</span>
          </Link>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold text-white tracking-tight">K PLUS Simulator Studio</span>
            <span className="text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded">
              LIVE RUNTIME
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
            title="รีเฟรชหน้าจำลอง"
          >
            <RefreshCw className="w-3 h-3 text-slate-400" />
            <span>รีเฟรช</span>
          </button>
          <a
            href="/simulator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-kplus inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold"
            title="เปิดในแท็บใหม่แบบเต็มหน้าต่าง"
          >
            <Maximize2 className="w-3 h-3" />
            <span className="hidden sm:inline">เปิดแท็บใหม่</span>
          </a>
        </div>
      </div>

      {/* Simulator Viewport Container fills 100% of the remaining height */}
      <div className="flex-1 w-full h-full overflow-hidden relative">
        <iframe
          ref={iframeRef}
          src="/simulator.html?v=3.6"
          title="FlowSense & TrustGraph Simulator"
          className="w-full h-full border-0 block"
        />
      </div>
    </div>
  );
}
