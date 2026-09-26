import React from 'react';
import { X, Check, Users, Target, TrendingUp } from 'lucide-react';

export default function PersonaComparison() {
  return (
    <section className="py-16 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section 1: Problem Statement & Transformation */}
        <div>
          <div className="max-w-3xl space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider">
              <Target className="w-3.5 h-3.5 text-emerald-700" />
              <span>1. Problem Statement &amp; Solution Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
              เมื่อแอปเลิกทำตัวเป็นผู้ปกครอง (Parenting App) และกลายเป็นตัวช่วยที่แท้จริง
            </h2>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              คนเริ่มทำงาน (First Jobbers อายุ 22–30 ปี) เบื่อหน่ายแอปการเงินที่ออกคำสั่งจุกจิก และหนีไปใช้แอปอื่นเมื่อถูกหน่วงเวลาโอนเงินอย่างไม่สมเหตุสมผล
            </p>
          </div>

          {/* Comparative Matrix: Anti-patterns vs Modern Enabler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left: Anti-Patterns / Conventional App */}
            <div className="bento-card rounded-xl p-6 space-y-5 border-rose-200/70">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-rose-600">
                  <X className="w-4 h-4" />
                  <h3 className="text-base font-semibold text-slate-900">ปัญหาเดิม (Conventional Anti-Patterns)</h3>
                </div>
                <span className="text-[10px] font-mono tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded font-medium">
                  DRIVES CHURN
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-medium text-slate-800">Budget Burnout (ความเหนื่อยล้าจากการคุมงบ):</div>
                  <p className="text-slate-500 font-normal leading-relaxed">
                    การบังคับบันทึกรายจ่ายเองและกำหนดวงเงินรายวันตายตัว ไม่สอดคล้องชีวิตจริง ผู้ใช้เกิด Alert Fatigue และเลือกที่จะลบแอปทิ้ง
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-medium text-slate-800">Scam Vulnerability (เป้าหมายหลักของมิจฉาชีพ):</div>
                  <p className="text-slate-500 font-normal leading-relaxed">
                    คนเริ่มทำงานถูกล่อลวงด้วยงานเสริม (Task Scams) และการหลอกลงทุน มิจฉาชีพสร้างแรงกดดันทางเวลาเร่งให้โอนเงินเร็วเพื่อไม่ให้ทันคิด
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-medium text-slate-800">Security Friction Drives Churn (การล็อคที่ผลักลูกค้าหนี):</div>
                  <p className="text-slate-500 font-normal leading-relaxed">
                    การสั่งระงับโอนเงินแบบตายตัว หรือการหน่วงเวลา 15 นาทีตามอำเภอใจ สร้างความหงุดหงิดเมื่อจำเป็นต้องจ่ายเงินด่วนจริง จนผลักดันให้ลูกค้าหนีไปใช้แอปคู่แข่ง
                  </p>
                </div>
              </div>
            </div>

            {/* Right: FlowSense & TrustGraph */}
            <div className="bento-card rounded-xl p-6 space-y-5 border-emerald-200/80">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-emerald-800">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-base font-semibold text-slate-900">แนวทางใหม่ (FlowSense &amp; TrustGraph)</h3>
                </div>
                <span className="text-[10px] font-mono tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                  AUTONOMOUS
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-medium text-slate-800">Status Horizon Bar &amp; Commitment Warnings:</div>
                  <p className="text-slate-600 font-normal leading-relaxed">
                    ตัวชี้วัดเดียวที่มองเห็นสภาพคล่องถึงสิ้นเดือน ตัดระบบแจ้งเตือนช่วงเงินลดปกติเพื่อป้องกัน Alert Fatigue เตือนเฉพาะเมื่อภาระคงที่ (ค่าเช่า/บิล) เสี่ยงจริง
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-medium text-slate-800">Micro-Sweep with 1-Tap Undo:</div>
                  <p className="text-slate-600 font-normal leading-relaxed">
                    ออมเศษเงินอัตโนมัติเฉพาะเมื่อกระแสเงินสดเอื้ออำนวย พร้อมปุ่ม 1-Tap Undo เรียกเงินคืนเข้าบัญชีหลักได้ 100% ทันที ไร้ค่าปรับ ไร้การหน่วงเวลา
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-medium text-slate-800">Zero-Delay Baseline &amp; Micro-Auth 5s:</div>
                  <p className="text-slate-600 font-normal leading-relaxed">
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
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider">
              <Users className="w-3.5 h-3.5 text-emerald-700" />
              <span>2. Target Users (กลุ่มเป้าหมายเชิงพฤติกรรม)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">ผู้ใช้งานเป้าหมาย 2 กลุ่มหลัก</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bento-card rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-[10px] font-mono tracking-wider text-emerald-800 font-semibold uppercase">PRIMARY TARGET</span>
                <span className="font-mono text-xs text-slate-500 tabular-nums">18k–35k THB Income</span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-slate-900">มนุษย์เงินเดือนชนเดือน (Living Month-to-Month)</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                ต้องการระบบออมเงินแบบ Autopilot โดยไม่ต้องจดบันทึกรายรับรายจ่ายด้วยตนเอง แต่ต้องการสิทธิ์การเข้าถึงเงินทุกบาททุกสตางค์ทันที (Instant Access) เมื่อถึงกำหนดจ่ายค่าเช่าห้องหรือบิลหนี้
              </p>
              <div className="pt-1 text-[11px] text-emerald-800 font-mono font-medium">
                → รองรับด้วย FlowSense: Status Horizon Bar + 1-Tap Undo
              </div>
            </div>

            <div className="bento-card rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-[10px] font-mono tracking-wider text-slate-600 font-semibold uppercase">SECONDARY TARGET</span>
                <span className="font-mono text-xs text-slate-500">High Frequency Transactor</span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-slate-900">ผู้ทำธุรกรรมดิจิทัลความถี่สูง (Active Mobile Transactors)</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                โอนเงินดิจิทัลบ่อยครั้งต่อวัน ต้องการระบบตรวจจับมิจฉาชีพที่ทำงานเบื้องหลังอย่างเงียบเชียบและแม่นยำ โดยไม่มี Pop-up เตือนไร้สาระมาขัดจังหวะการจ่ายเงินซื้อของหรือโอนให้เพื่อนในชีวิตประจำวัน
              </p>
              <div className="pt-1 text-[11px] text-slate-600 font-mono font-medium">
                → รองรับด้วย TrustGraph: Zero-Delay Baseline (&lt; 80ms)
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Business & User Impact */}
        <div>
          <div className="max-w-3xl space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
              <span>4. Business &amp; User Impact (ผลกระทบต่อธุรกิจและผู้ใช้)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">คุณค่าทางยุทธศาสตร์ต่อ K PLUS &amp; KBank</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bento-card rounded-xl p-5 space-y-2">
              <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-medium">PILLAR 01</div>
              <h4 className="text-sm font-semibold text-slate-900">User Retention</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                ยกเลิกคำเตือนแบบผู้ปกครองที่สร้างความรำคาญ และตัดกระบวนการเช็กเอาต์ที่ชักช้า ลดอัตราการทิ้งแอป (App Abandonment) และรักษาปริมาณธุรกรรมไว้ใน K PLUS
              </p>
            </div>

            <div className="bento-card rounded-xl p-5 space-y-2">
              <div className="text-[10px] font-mono tracking-wider text-emerald-800 uppercase font-semibold">PILLAR 02</div>
              <h4 className="text-sm font-semibold text-slate-900">Stable Deposit Base (CASA)</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                การกวาดเงินออมอัตโนมัติ (Micro-Sweeps) ช่วยระดมเงินฝากต้นทุนต่ำเข้าสู่ธนาคารอย่างต่อเนื่องและมั่นคง โดยไม่สร้างความตระหนกด้านสภาพคล่องให้ลูกค้า
              </p>
            </div>

            <div className="bento-card rounded-xl p-5 space-y-2">
              <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-medium">PILLAR 03</div>
              <h4 className="text-sm font-semibold text-slate-900">High-Precision Fraud Interruption</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                การตัดคะแนนความเสี่ยงด้วยโครงข่ายกราฟ (R-GCN) ช่วยคัดแยกเครือข่ายบัญชีม้าความเสี่ยงสูงได้เด็ดขาด ในขณะที่รักษาอัตราการขัดจังหวะที่ผิดพลาด (False Positive) ใกล้ศูนย์
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
