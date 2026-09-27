import React from 'react';
import { X, Check, Users, Target, TrendingUp, ShieldCheck, DollarSign } from 'lucide-react';

export default function PersonaComparison() {
  return (
    <section className="py-16 border-t border-white/10 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-14">
        
        {/* Section 1: Problem Statement & Transformation */}
        <div>
          <div className="max-w-3xl space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span>1. Problem Statement &amp; Solution Impact</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-[1.4] pb-1">
              เมื่อแอปเลิกทำตัวเป็นผู้ปกครอง (Parenting App) และกลายเป็นตัวช่วยที่แท้จริง
            </h2>
            <p className="text-sm text-slate-300 leading-[1.85] font-normal pt-1">
              คนเริ่มทำงาน (First Jobbers อายุ 22–30 ปี) เบื่อหน่ายแอปการเงินที่ออกคำสั่งจุกจิก และหนีไปใช้แอปอื่นเมื่อถูกหน่วงเวลาโอนเงินอย่างไม่สมเหตุสมผล
            </p>
          </div>

          {/* Comparative Matrix: Anti-patterns vs Modern Enabler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Left: Anti-Patterns / Conventional App */}
            <div className="bento-card rounded-2xl p-6 sm:p-7 space-y-5 border border-rose-500/30 bg-rose-950/10 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3 border-b border-rose-500/20">
                <div className="flex items-center gap-2 text-rose-400">
                  <X className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">ปัญหาเดิม (Conventional Anti-Patterns)</h3>
                </div>
                <span className="text-[10px] font-mono tracking-wider text-rose-300 bg-rose-950/60 border border-rose-500/40 px-2 py-0.5 rounded font-bold">
                  DRIVES CHURN
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-rose-200">Budget Burnout (ความเหนื่อยล้าจากการคุมงบ):</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    การบังคับบันทึกรายจ่ายเองและกำหนดวงเงินรายวันตายตัว ไม่สอดคล้องชีวิตจริง ผู้ใช้เกิด Alert Fatigue และเลือกที่จะลบแอปทิ้ง
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-rose-200">Scam Vulnerability (เป้าหมายหลักของมิจฉาชีพ):</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    คนเริ่มทำงานถูกล่อลวงด้วยงานเสริม (Task Scams) และการหลอกลงทุน มิจฉาชีพสร้างแรงกดดันทางเวลาเร่งให้โอนเงินเร็วเพื่อไม่ให้ทันคิด
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-rose-200">Security Friction Drives Churn (การล็อคที่ผลักลูกค้าหนี):</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    การสั่งระงับโอนเงินแบบตายตัว หรือการหน่วงเวลา 15 นาทีตามอำเภอใจ สร้างความหงุดหงิดเมื่อจำเป็นต้องจ่ายเงินด่วนจริง จนผลักดันให้ลูกค้าหนีไปใช้แอปคู่แข่ง
                  </p>
                </div>
              </div>
            </div>

            {/* Right: FlowSense & TrustGraph */}
            <div className="bento-card-active rounded-2xl p-6 sm:p-7 space-y-5 border border-emerald-500/40 bg-emerald-950/15 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">แนวทางใหม่ (FlowSense &amp; TrustGraph)</h3>
                </div>
                <span className="text-[10px] font-mono tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded font-bold">
                  AUTONOMOUS
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-emerald-200">Status Horizon Bar &amp; Commitment Warnings:</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    ตัวชี้วัดเดียวที่มองเห็นสภาพคล่องถึงสิ้นเดือน ตัดระบบแจ้งเตือนช่วงเงินลดปกติเพื่อป้องกัน Alert Fatigue เตือนเฉพาะเมื่อภาระคงที่ (ค่าเช่า/บิล) เสี่ยงจริง
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-emerald-200">Micro-Sweep with 1-Tap Undo:</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    ออมเศษเงินอัตโนมัติเฉพาะเมื่อกระแสเงินสดเอื้ออำนวย พร้อมปุ่ม 1-Tap Undo เรียกเงินคืนเข้าบัญชีหลักได้ 100% ทันที ไร้ค่าปรับ ไร้การหน่วงเวลา
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-emerald-200">Zero-Delay Baseline &amp; Micro-Auth 5s:</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    รายการปกติโอนผ่านทันทีใน 3.8ms ไร้ Pop-up หากพบม้าวิกฤตจะใช้ Micro-Auth สแกนหน้า 5 วินาที พร้อมชี้แจงเหตุผลตรงจุด และให้ผู้ใช้ตัดสินใจเอง
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Target Users (2 Strategic Personas) */}
        <div>
          <div className="max-w-3xl space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 tech-label text-xs">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>2. Target Users (กลุ่มเป้าหมายเชิงพฤติกรรม)</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-[1.4] pb-1">ผู้ใช้งานเป้าหมาย 2 กลุ่มหลัก</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bento-card rounded-2xl p-6 space-y-3.5 border border-white/10 bg-[#18191D]/75 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-bold uppercase">PRIMARY TARGET</span>
                <span className="font-mono text-xs text-slate-400 tabular-nums">18k–35k THB Income</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white leading-[1.4]">มนุษย์เงินเดือนชนเดือน (Living Month-to-Month)</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] font-normal">
                ต้องการระบบออมเงินแบบ Autopilot โดยไม่ต้องจดบันทึกรายรับรายจ่ายด้วยตนเอง แต่ต้องการสิทธิ์การเข้าถึงเงินทุกบาททุกสตางค์ทันที (Instant Access) เมื่อถึงกำหนดจ่ายค่าเช่าห้องหรือบิลหนี้
              </p>
              <div className="pt-2 text-xs text-emerald-400 font-mono font-medium">
                → รองรับด้วย FlowSense: Status Horizon Bar + 1-Tap Undo
              </div>
            </div>

            <div className="bento-card rounded-2xl p-6 space-y-3.5 border border-white/10 bg-[#18191D]/75 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[10px] font-mono tracking-wider text-cyan-400 font-bold uppercase">SECONDARY TARGET</span>
                <span className="font-mono text-xs text-slate-400">High Frequency Transactor</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white leading-[1.4]">ผู้ทำธุรกรรมดิจิทัลความถี่สูง (Active Mobile Transactors)</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-[1.8] font-normal">
                โอนเงินดิจิทัลบ่อยครั้งต่อวัน ต้องการระบบตรวจจับมิจฉาชีพที่ทำงานเบื้องหลังอย่างเงียบเชียบและแม่นยำ โดยไม่มี Pop-up เตือนไร้สาระมาขัดจังหวะการจ่ายเงินซื้อของหรือโอนให้เพื่อนในชีวิตประจำวัน
              </p>
              <div className="pt-2 text-xs text-cyan-400 font-mono font-medium">
                → รองรับด้วย TrustGraph: Zero-Delay Baseline (&lt; 80ms)
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Business & User Impact */}
        <div>
          <div className="max-w-3xl space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tech-label text-xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>4. Business &amp; User Impact (ผลกระทบต่อธุรกิจและผู้ใช้)</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-[1.4] pb-1">คุณค่าทางยุทธศาสตร์ต่อ K PLUS &amp; KBank</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bento-card rounded-2xl p-6 space-y-2.5 border border-white/10 bg-[#18191D]/75 backdrop-blur-xl">
              <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">PILLAR 01</div>
              <h4 className="text-base font-bold text-white leading-[1.4]">User Retention (-88% Churn)</h4>
              <p className="text-xs text-slate-300 leading-[1.8] font-normal">
                ยกเลิกคำเตือนแบบผู้ปกครองที่สร้างความรำคาญ และตัดกระบวนการเช็กเอาต์ที่ชักช้า ลดอัตราการทิ้งแอป (App Abandonment) และรักษาปริมาณธุรกรรมไว้ใน K PLUS
              </p>
            </div>

            <div className="bento-card rounded-2xl p-6 space-y-2.5 border border-emerald-500/30 bg-emerald-950/15 backdrop-blur-xl">
              <div className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-bold">PILLAR 02</div>
              <h4 className="text-base font-bold text-white leading-[1.4]">Stable Deposit Base (+฿1.4B CASA)</h4>
              <p className="text-xs text-slate-300 leading-[1.8] font-normal">
                การกวาดเงินออมอัตโนมัติ (Micro-Sweeps) ช่วยระดมเงินฝากต้นทุนต่ำเข้าสู่ธนาคารอย่างต่อเนื่องและมั่นคง โดยไม่สร้างความตระหนกด้านสภาพคล่องให้ลูกค้า
              </p>
            </div>

            <div className="bento-card rounded-2xl p-6 space-y-2.5 border border-white/10 bg-[#18191D]/75 backdrop-blur-xl">
              <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">PILLAR 03</div>
              <h4 className="text-base font-bold text-white leading-[1.4]">Precision Fraud Defense (&lt;80ms)</h4>
              <p className="text-xs text-slate-300 leading-[1.8] font-normal">
                การตัดคะแนนความเสี่ยงด้วยโครงข่ายกราฟ (R-GCN) ช่วยคัดแยกเครือข่ายบัญชีม้าความเสี่ยงสูงได้เด็ดขาด ในขณะที่รักษาอัตราการขัดจังหวะที่ผิดพลาด (False Positive) ใกล้ศูนย์
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
