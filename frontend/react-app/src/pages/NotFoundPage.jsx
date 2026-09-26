import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="bento-card rounded-2xl p-8 sm:p-12 max-w-md text-center space-y-5 border-slate-200/90 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center mx-auto border border-slate-200">
          <AlertCircle className="w-6 h-6 text-slate-400" />
        </div>
        
        <div className="space-y-1.5">
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">404</h1>
          <h2 className="text-base font-semibold text-slate-800">ไม่พบหน้าที่คุณต้องการ</h2>
          <p className="text-xs text-slate-500 font-normal leading-relaxed">
            เส้นทาง URL นี้ไม่มีอยู่ในระบบ FlowSense &amp; TrustGraph กรุณาตรวจสอบลิงก์หรือกลับสู่หน้า Overview
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#064E3B] hover:bg-[#022C22] text-white px-5 py-2.5 rounded-lg font-medium text-xs border border-emerald-900/30 shadow-sm transition-all"
        >
          <Home className="w-3.5 h-3.5" />
          <span>กลับสู่หน้า Overview</span>
        </Link>
      </div>
    </div>
  );
}
