import React from 'react';
import PersonaComparison from '../components/PersonaComparison';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PersonasPage() {
  return (
    <div className="py-10 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-card rounded-xl p-6 sm:p-8 space-y-4 border-white/10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>Target Personas &amp; Business Value</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Target Users &amp; Business Impact
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              วิเคราะห์พฤติกรรมกลุ่ม First Jobbers (อายุ 22–30 ปี) บน K PLUS เพื่อสร้างผลิตภัณฑ์ทางการเงินที่เข้าใจชีวิตจริง ยกเลิกคำเตือนแบบผู้ปกครอง และขจัดแรงเสียดทานด้านความปลอดภัยที่ผลักดันลูกค้าไปใช้แอปคู่แข่ง
            </p>
          </div>
        </div>
      </section>

      {/* Main Comparison Component */}
      <PersonaComparison />

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="bento-card rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-white">กลับไปยังหน้า Overview เพื่อดูภาพรวมทั้งระบบ</h3>
            <p className="text-xs text-zinc-400">สัมผัสประสบการณ์ FlowSense และ TrustGraph ที่ออกแบบมาเพื่อคนรุ่นใหม่อย่างแท้จริง</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 bg-[#00A950] hover:bg-[#008F43] text-white px-4 py-2 rounded-lg font-medium text-xs border border-emerald-400/20 transition-colors shrink-0"
          >
            <span>กลับสู่หน้า Overview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
