import React from 'react';
import PersonaComparison from '../components/PersonaComparison';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PersonasPage() {
  return (
    <div className="py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="bento-card-active rounded-2xl p-6 sm:p-8 space-y-4 border border-emerald-500/40 bg-[#0B132B]/85 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>Target Personas &amp; Business Value</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.42] sm:leading-[1.38] pb-1">
              Target Users &amp; <span className="text-gradient-kplus">Business Impact</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-[1.85] font-normal pt-1">
              วิเคราะห์พฤติกรรมกลุ่ม First Jobbers (อายุ 22–30 ปี) บน K PLUS เพื่อสร้างผลิตภัณฑ์ทางการเงินที่เข้าใจชีวิตจริง ยกเลิกคำเตือนแบบผู้ปกครอง และขจัดแรงเสียดทานด้านความปลอดภัยที่ผลักดันลูกค้าไปใช้แอปคู่แข่ง
            </p>
          </div>
        </div>
      </section>

      {/* Main Comparison Component */}
      <PersonaComparison />

      {/* Navigation CTA */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-2">
        <div className="bento-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 bg-[#0B132B]/75">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white leading-[1.4]">กลับไปยังหน้า Overview เพื่อดูภาพรวมทั้งระบบ</h3>
            <p className="text-xs text-slate-400 leading-[1.7]">สัมผัสประสบการณ์ FlowSense และ TrustGraph ที่ออกแบบมาเพื่อคนรุ่นใหม่อย่างแท้จริง</p>
          </div>
          <Link
            to="/"
            className="btn-kplus px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shrink-0"
          >
            <span>กลับสู่หน้า Overview</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
