import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="bento-card rounded-2xl p-8 sm:p-12 max-w-md text-center space-y-5 border border-white/10 bg-[#18191D]/85 shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-white/5 text-slate-400 flex items-center justify-center mx-auto border border-white/10">
          <AlertCircle className="w-7 h-7 text-emerald-400" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-white">404</h1>
          <h2 className="text-lg font-bold text-slate-200">ไม่พบหน้าที่คุณต้องการ</h2>
          <p className="text-xs text-slate-400 leading-[1.8] font-normal">
            เส้นทาง URL นี้ไม่มีอยู่ในระบบ FlowSense &amp; TrustGraph กรุณาตรวจสอบลิงก์หรือกลับสู่หน้า Overview
          </p>
        </div>

        <Link
          to="/"
          className="btn-kplus inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-emerald-500/30"
        >
          <Home className="w-4 h-4" />
          <span>กลับสู่หน้า Overview</span>
        </Link>
      </div>
    </div>
  );
}
