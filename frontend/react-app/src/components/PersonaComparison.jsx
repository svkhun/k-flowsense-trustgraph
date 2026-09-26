import React from 'react';
import { X, Check, Users, Target, ShieldCheck, TrendingUp, UserCheck } from 'lucide-react';

export default function PersonaComparison() {
  return (
    <section className="py-16 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section 1: Problem Statement & Transformation */}
        <div>
          <div className="max-w-3xl space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label">
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span>1. Problem Statement &amp; Solution Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              เมื่อแอปเลิกทำตัวเป็นผู้ปกครอง (Parenting App) และกลายเป็นตัวช่วยที่แท้จริง
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              คนเริ่มทำงาน (First Jobbers อายุ 22–30 ปี) เบื่อหน่ายแอปการเงินที่ออกคำสั่งจุกจิก และหนีไปใช้แอปอื่นเมื่อถูกหน่วงเวลาโอนเงินอย่างไม่สมเหตุสมผล
            </p>
          </div>

          {/* Comparative Matrix: Anti-patterns vs Modern Enabler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Left: Anti-Patterns / Conventional App */}
            <div className="bento-card rounded-xl p-6 space-y-5 border-zinc-800">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-rose-400">
                  <X className="w-4 h-4" />
                  <h3 className="text-base font-bold">ปัญหาเดิม (Conventional Anti-Patterns)</h3>
                </div>
                <span className="tech-label text-[10px] text-zinc-400">DRIVES CHURN</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-semibold text-zinc-200">Budget Burnout (ความเหนื่อยล้าจากการคุมงบ):</div>
                  <p className="text-zinc-400 leading-relaxed">
                    การบังคับบันทึกรายจ่ายเองและกำหนดวงเงินรายวันตายตัว ไม่สอดคล้องชีวิตจริง ผู้ใช้เกิด Alert Fatigue และเลือกที่จะลบแอปทิ้ง
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-200">Scam Vulnerability (เป้าหมายหลักของมิจฉาชีพ):</div>
                  <p className="text-zinc-400 leading-relaxed">
                    คนเริ่มทำงานถูกล่อลวงด้วยงานเสริม (Task Scams) และการหลอกลงทุน มิจฉาชีพสร้างแรงกดดันทางเวลาเร่งให้โอนเงินเร็วเพื่อไม่ให้ทันคิด
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-200">Security Friction Drives Churn (การล็อคที่ผลักลูกค้าหนี):</div>
                  <p className="text-zinc-400 leading-relaxed">
                    การสั่งระงับโอนเงินแบบตายตัว หรือการหน่วงเวลา 15 นาทีตามอำเภอใจ สร้างความหงุดหงิดเมื่อจำเป็นต้องจ่ายเงินด่วนจริง จนผลักดันให้ลูกค้าหนีไปใช้แอปคู่แข่ง
                  </p>
                </div>
              </div>
            </div>

            {/* Right: FlowSense & TrustGraph */}
            <div className="bento-card rounded-xl p-6 space-y-5 border-emerald-500/30">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-[#00A950]">
                  <Check className="w-4 h-4" />
                  <h3 className="text-base font-bold text-white">แนวทางใหม่ (FlowSense &amp; TrustGraph)</h3>
                </div>
                <span className="tech-label text-[10px] text-emerald-400">AUTONOMOUS</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-semibold text-zinc-200">Status Horizon Bar &amp; Commitment Warnings:</div>
                  <p className="text-zinc-400 leading-relaxed">
                    ตัวชี้วัดเดียวที่มองเห็นสภาพคล่องถึงสิ้นเดือน ตัดระบบแจ้งเตือนช่วงเงินลดปกติเพื่อป้องกัน Alert Fatigue เตือนเฉพาะเมื่อภาระคงที่ (ค่าเช่า/บิล) เสี่ยงจริง
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-200">Micro-Sweep with 1-Tap Undo:</div>
                  <p className="text-zinc-400 leading-relaxed">
                    ออมเศษเงินอัตโนมัติเฉพาะเมื่อกระแสเงินสดเอื้ออำนวย พร้อมปุ่ม 1-Tap Undo เรียกเงินคืนเข้าบัญชีหลักได้ 100% ทันที ไร้ค่าปรับ ไร้การหน่วงเวลา
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-semibold text-zinc-200">Zero-Delay Baseline &amp; Micro-Auth 5s:</div>
                  <p className="text-zinc-400 leading-relaxed">
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
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label">
              <Users className="w-3.5 h-3.5 text-zinc-400" />
              <span>2. Target Users (กลุ่มเป้าหมายเชิงพฤติกรรม)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">ผู้ใช้งานเป้าหมาย 2 กลุ่มหลัก</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bento-card rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="tech-label text-emerald-400 font-bold">PRIMARY TARGET</span>
                <span className="font-mono text-xs text-zinc-400">18k–35k THB Income</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white">มนุษย์เงินเดือนชนเดือน (Living Month-to-Month)</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                ต้องการระบบออมเงินแบบ Autopilot โดยไม่ต้องจดบันทึกรายรับรายจ่ายด้วยตนเอง แต่ต้องการสิทธิ์การเข้าถึงเงินทุกบาททุกสตางค์ทันที (Instant Access) เมื่อถึงกำหนดจ่ายค่าเช่าห้องหรือบิลหนี้
              </p>
              <div className="pt-1 text-[11px] text-emerald-400 font-mono">
                → รองรับด้วย FlowSense: Status Horizon Bar + 1-Tap Undo
              </div>
            </div>

            <div className="bento-card rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="tech-label text-zinc-300 font-bold">SECONDARY TARGET</span>
                <span className="font-mono text-xs text-zinc-400">High Frequency Transactor</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white">ผู้ทำธุรกรรมดิจิทัลความถี่สูง (Active Mobile Transactors)</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                โอนเงินดิจิทัลบ่อยครั้งต่อวัน ต้องการระบบตรวจจับมิจฉาชีพที่ทำงานเบื้องหลังอย่างเงียบเชียบและแม่นยำ โดยไม่มี Pop-up เตือนไร้สาระมาขัดจังหวะการจ่ายเงินซื้อของหรือโอนให้เพื่อนในชีวิตประจำวัน
              </p>
              <div className="pt-1 text-[11px] text-zinc-300 font-mono">
                → รองรับด้วย TrustGraph: Zero-Delay Baseline (&lt; 80ms)
              </div>
            </div>

          </div>
        </div>

        {/* Section 4: Business & User Impact */}
        <div>
          <div className="max-w-3xl space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 tech-label">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>4. Business &amp; User Impact (ผลกระทบต่อธุรกิจและผู้ใช้)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">คุณค่าทางยุทธศาสตร์ต่อ K PLUS &amp; KBank</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bento-card rounded-xl p-5 space-y-2">
              <div className="tech-label text-zinc-400 text-[10px]">PILLAR 01</div>
              <h4 className="text-sm font-bold text-white">User Retention</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                ยกเลิกคำเตือนแบบผู้ปกครองที่สร้างความรำคาญ และตัดกระบวนการเช็กเอาต์ที่ชักช้า ลดอัตราการทิ้งแอป (App Abandonment) และรักษาปริมาณธุรกรรมไว้ใน K PLUS
              </p>
            </div>

            <div className="bento-card rounded-xl p-5 space-y-2">
              <div className="tech-label text-emerald-400 text-[10px]">PILLAR 02</div>
              <h4 className="text-sm font-bold text-white">Stable Deposit Base (CASA)</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                การกวาดเงินออมอัตโนมัติ (Micro-Sweeps) ช่วยระดมเงินฝากต้นทุนต่ำเข้าสู่ธนาคารอย่างต่อเนื่องและมั่นคง โดยไม่สร้างความตระหนกด้านสภาพคล่องให้ลูกค้า
              </p>
            </div>

            <div className="bento-card rounded-xl p-5 space-y-2">
              <div className="tech-label text-zinc-400 text-[10px]">PILLAR 03</div>
              <h4 className="text-sm font-bold text-white">High-Precision Fraud Interruption</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                การตัดคะแนนความเสี่ยงด้วยโครงข่ายกราฟ (R-GCN) ช่วยคัดแยกเครือข่ายบัญชีม้าความเสี่ยงสูงได้เด็ดขาด ในขณะที่รักษาอัตราการขัดจังหวะที่ผิดพลาด (False Positive) ใกล้ศูนย์
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
