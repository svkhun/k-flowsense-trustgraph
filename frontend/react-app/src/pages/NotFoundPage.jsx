import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="bento-card rounded-xl p-8 sm:p-12 max-w-md text-center space-y-5 border-white/10">
        <div className="w-12 h-12 rounded-lg bg-white/[0.04] text-zinc-400 flex items-center justify-center mx-auto border border-white/10">
          <AlertCircle className="w-6 h-6" />
        </div>
        
        <div className="space-y-1.5">
          <h1 className="text-3xl font-extrabold text-white">404</h1>
          <h2 className="text-base font-bold text-zinc-200">ไม่พบหน้าที่คุณต้องการ</h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            เส้นทาง URL นี้ไม่มีอยู่ในระบบ FlowSense &amp; TrustGraph กรุณาตรวจสอบลิงก์หรือกลับสู่หน้า Overview
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#00A950] hover:bg-[#008F43] text-white px-4 py-2 rounded-lg font-medium text-xs border border-emerald-400/20 transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>กลับสู่หน้า Overview</span>
        </Link>
      </div>
    </div>
  );
}
