import React from 'react';
import PersonaComparison from '../components/PersonaComparison';
import { Users, Target, TrendingUp, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PersonasPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border-amber-500/30">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse"></span>
              <span>Target Strategic Personas &amp; Business Impact</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Target Users &amp; Business Impact <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-emerald-400">
                FlowSense &amp; TrustGraph for K PLUS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              วิเคราะห์พฤติกรรมกลุ่ม First Jobbers (อายุ 22–30 ปี) บน K PLUS เพื่อสร้างผลิตภัณฑ์ทางการเงินที่เข้าใจชีวิตจริง ยกเลิกคำเตือนแบบผู้ปกครอง และขจัดแรงเสียดทานด้านความปลอดภัยที่ผลักดันลูกค้าไปใช้แอปคู่แข่ง
            </p>
          </div>
        </div>
      </section>

      {/* Main Comparison Component */}
      <PersonaComparison />

      {/* Section 4: Business & User Impact (Verbatim from Pitch) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold shadow-sm">
            <Target className="w-3.5 h-3.5 text-emerald-400" />
            <span>4. Business &amp; User Impact (ผลกระทบต่อธุรกิจและผู้ใช้)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">3 คุณค่าหลักต่อธนาคารกสิกรไทยและผู้ใช้งาน K PLUS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 space-y-3 border-blue-500/30">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">1. User Retention</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ยกเลิกคำเตือนแบบผู้ปกครอง (Paternalistic Warnings) และกระบวนการเช็กเอาต์ที่ชักช้า ลดอัตราการทิ้งแอป (App Abandonment) และรักษาปริมาณธุรกรรมดิจิทัลทั้งหมดไว้ภายใน K PLUS
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3 border-emerald-500/30">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">2. Stable Deposit Base (CASA)</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              ระบบ Automated Micro-Sweeps สะสมเงินฝากต้นทุนต่ำ (Low-Cost CASA) เข้าสู่ธนาคารอย่างสม่ำเสมอ โดยไม่สร้างความตระหนกด้านสภาพคล่อง (Liquidity Panic) ให้แก่ลูกค้า ด้วยสิทธิ์ 1-Tap Undo
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3 border-purple-500/30">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">3. High-Precision Fraud Interruption</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              การตัดคะแนนความเสี่ยงด้วยโครงข่ายกราฟ (R-GCN) ช่วยคัดแยกเครือข่ายบัญชีม้าความเสี่ยงสูงได้แม่นยำ ในขณะที่รักษาอัตราการขัดจังหวะที่ผิดพลาด (False-Positive Interruptions) ใกล้ศูนย์สำหรับการใช้งานประจำวัน
            </p>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-xl font-bold text-white">กลับไปยังหน้าแรกเพื่อดูภาพรวมทั้งหมด</h3>
            <p className="text-xs sm:text-sm text-slate-300">สัมผัสประสบการณ์ FlowSense และ TrustGraph ที่ออกแบบมาเพื่อคนรุ่นใหม่อย่างแท้จริง</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#00A950] hover:bg-[#008F43] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <span>กลับสู่หน้าแรก</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
