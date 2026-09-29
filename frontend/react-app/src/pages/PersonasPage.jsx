import React from 'react';
import PersonaComparison from '../components/PersonaComparison';
import { ArrowRight, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Velaris from '../components/ui/velaris';
import ScrollReveal from '../components/ScrollReveal';

export default function PersonasPage() {
  const scrollToContent = () => {
    document.getElementById('personas-workspace')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* ========================================================================= */}
      {/* 1. EXPANSIVE HERO HEADER (Living WebGL Atmosphere)                        */}
      {/* ========================================================================= */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        
        {/* Full Viewport Velaris WebGL Canvas Background */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <Velaris
            bg="#070B12"
            colors={["#F59E0B", "#10B981", "#00A950", "#070B12"]}
            speed={0.9}
            grain={0.22}
            height="100%"
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center py-12">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md shadow-lg shadow-amber-500/10 mb-6">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Target Personas &amp; Business Value</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
            Target Users &amp; <span className="text-gradient-kplus">Business Impact</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-normal mb-8">
            วิเคราะห์พฤติกรรมกลุ่ม First Jobbers (อายุ 22–30 ปี) บน K PLUS เพื่อสร้างผลิตภัณฑ์ทางการเงินที่เข้าใจชีวิตจริง ยกเลิกคำเตือนแบบผู้ปกครอง และขจัดแรงเสียดทานด้านความปลอดภัยที่ผลักดันลูกค้าไปใช้แอปคู่แข่ง
          </p>

          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors group cursor-pointer"
          >
            <span>สำรวจการเปรียบเทียบ Personas และคุณค่าทางธุรกิจ</span>
            <ChevronDown className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN COMPARISON COMPONENT (Revealed on Scroll, Reduced Borders)        */}
      {/* ========================================================================= */}
      <section 
        id="personas-workspace" 
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10"
      >
        <ScrollReveal>
          <PersonaComparison />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 3. NAVIGATION CTA (Revealed on Scroll)                                   */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <ScrollReveal delay={100}>
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/[0.06] bg-[#16181D]/75 backdrop-blur-xl shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-white leading-[1.4]">กลับไปยังหน้า Overview เพื่อดูภาพรวมทั้งระบบ</h3>
              <p className="text-xs text-slate-400 leading-[1.7]">สัมผัสประสบการณ์ FlowSense และ TrustGraph ที่ออกแบบมาเพื่อคนรุ่นใหม่อย่างแท้จริง</p>
            </div>
            <Link
              to="/"
              className="btn-kplus px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 shrink-0 transition-transform hover:scale-105"
            >
              <span>กลับสู่หน้า Overview</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
