import React from 'react';
import { XCircle, CheckCircle2, Users, Target, ShieldCheck, TrendingUp, UserCheck } from 'lucide-react';

export default function PersonaComparison() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Problem Statement & Transformation */}
        <div>
          <div className="text-center max-w-5xl mx-auto mb-14 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              <span>1. Problem Statement &amp; Solution Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              เมื่อแอปเลิกทำตัวเป็นพ่อแม่ (Parenting App) และกลายเป็นตัวช่วยที่แท้จริง
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
              First jobbers (อายุ 22–30 ปี) เลิกใช้แอปการเงินเมื่อระบบออกคำสั่งจุกจิก และหนีไปใช้แอปคู่แข่งเมื่อถูกหน่วงเวลาโอนเงินอย่างไม่สมเหตุสมผล
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Before: Problem Statement from Pitch */}
            <div className="p-8 rounded-3xl bg-rose-950/20 border border-rose-500/20 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-rose-400">ปัญหาเดิม (Problem Statement)</h3>
                  <p className="text-xs text-rose-300/80">ทำไมคนรุ่นใหม่ถึงกดลบแอปการเงินทิ้ง</p>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">•</span>
                  <div>
                    <strong className="text-white block">Budget Burnout (ความเหนื่อยล้าจากการคุมงบ):</strong>
                    การต้องคอยบันทึกรายจ่ายเองและข้อจำกัดวงเงินรายวันแบบตายตัว ไม่สะท้อนชีวิตจริง ผู้ใช้เกิด Alert Fatigue จึงเมินเฉยหรือลบแอปทิ้ง
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">•</span>
                  <div>
                    <strong className="text-white block">Scam Vulnerability (เป้าหมายหลักของมิจฉาชีพ):</strong>
                    คนเริ่มทำงานถูกล่อลวงด้วยงานเสริมกดไลก์ (Task Scam) และการลงทุนผลตอบแทนสูง มิจฉาชีพกดดันให้โอนเงินเร็วเพื่อไม่ให้ทันคิด
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">•</span>
                  <div>
                    <strong className="text-white block">Security Friction Drives Churn (การล็อคที่ผลักลูกค้าหนี):</strong>
                    การสั่งระงับโอนเงินแบบตายตัว หรือการหน่วงเวลา 15 นาทีตามอำเภอใจ สร้างความหงุดหงิดเมื่อจำเป็นต้องโอนเงินด่วนจริง จนผลักดันให้ผู้ใช้หนีไปใช้แอปคู่แข่ง
                  </div>
                </li>
              </ul>
            </div>

            {/* After: Solution Impact from FlowSense & TrustGraph */}
            <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400">แนวทางแก้ไขใหม่ (FlowSense &amp; TrustGraph)</h3>
                  <p className="text-xs text-emerald-300/80">อิสระทางการเงิน ปลอดภัย และไร้แรงเสียดทาน</p>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <div>
                    <strong className="text-white block">Status Horizon Bar &amp; Commitment Warnings:</strong>
                    ตัวชี้วัดเดียวที่มองเห็นภาพรวมสภาพคล่องถึงสิ้นเดือน ตัดระบบแจ้งเตือนช่วงเงินลดปกติเพื่อป้องกัน Alert Fatigue เตือนเฉพาะเมื่อภาระคงที่ (ค่าเช่า/บิล) เสี่ยงจริง
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <div>
                    <strong className="text-white block">Micro-Sweep with 1-Tap Undo:</strong>
                    ออมเศษเงินอัตโนมัติเฉพาะเมื่อกระแสเงินสดเอื้ออำนวย และสามารถกด 1-Tap Undo เรียกเงินคืนเข้าบัญชีหลักได้ 100% ทันที ไร้ค่าปรับ ไร้การหน่วงเวลา
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <div>
                    <strong className="text-white block">Zero-Delay Baseline &amp; Micro-Auth 5s:</strong>
                    รายการปกติโอนผ่านทันที Sub-4ms ไร้ Pop-up รบกวน หากพบม้าวิกฤตจะใช้ Micro-Auth สแกนหน้า 5 วินาที พร้อมชี้แจงเหตุผลตรงจุด และให้ผู้ใช้ตัดสินใจเอง
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Section 2: Target Users (Section 2 from Pitch) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span>2. Target Users (กลุ่มเป้าหมายเชิงพฤติกรรม)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">ผู้ใช้งานเป้าหมาย 2 กลุ่มหลัก</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 space-y-3 border-emerald-500/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Primary Target</span>
                <span className="text-xs font-mono bg-emerald-500/15 text-emerald-300 px-2 py-0.5 rounded-full">18k–35k THB Income</span>
              </div>
              <h4 className="text-lg font-bold text-white">มนุษย์เงินเดือนชนเดือน (Living Month-to-Month)</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ต้องการระบบออมเงินบน Autopilot โดยไม่ต้องจดบันทึก Spreadsheets ด้วยตนเอง แต่เรียกร้องสิทธิ์การเข้าถึงเงินทุกบาททุกสตางค์ทันที (Instant Access) เมื่อถึงกำหนดจ่ายค่าเช่าห้องหรือบิลหนี้
              </p>
              <div className="pt-2 text-xs text-emerald-400 font-medium">
                FlowSense รองรับด้วย Status Horizon Bar + 1-Tap Undo
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3 border-purple-500/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Secondary Target</span>
                <span className="text-xs font-mono bg-purple-500/15 text-purple-300 px-2 py-0.5 rounded-full">Active Mobile Transactors</span>
              </div>
              <h4 className="text-lg font-bold text-white">ผู้ทำธุรกรรมดิจิทัลความถี่สูง (High Digital Transfer Frequency)</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                โอนเงินดิจิทัลบ่อยครั้งต่อวัน ต้องการระบบตรวจจับมิจฉาชีพที่ทำงานเบื้องหลังอย่างเงียบเชียบและแม่นยำ โดยไม่มี Pop-up เตือนไร้สาระมาขัดจังหวะการจ่ายเงินซื้อของหรือโอนให้เพื่อนในชีวิตประจำวัน
              </p>
              <div className="pt-2 text-xs text-purple-400 font-medium">
                TrustGraph รองรับด้วย Zero-Delay Baseline (&lt;80ms)
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Business & User Impact (Section 4 from Pitch) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold">
              <Target className="w-3.5 h-3.5 text-amber-400" />
              <span>4. Business &amp; User Impact (ผลกระทบต่อธุรกิจและผู้ใช้)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">คุณค่าทางยุทธศาสตร์ต่อ K PLUS &amp; KBank</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">User Retention</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ยกเลิกคำเตือนแบบผู้ปกครองที่สร้างความรำคาญ และตัดกระบวนการเช็กเอาต์ที่ชักช้า ลดอัตราการทิ้งแอป (App Abandonment) และรักษาปริมาณธุรกรรมไว้ใน K PLUS
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Stable Deposit Base (CASA)</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                การกวาดเงินออมอัตโนมัติ (Micro-Sweeps) ช่วยระดมเงินฝากต้นทุนต่ำเข้าสู่ธนาคารอย่างต่อเนื่องและมั่นคง โดยไม่สร้างความตระหนกด้านสภาพคล่องให้ลูกค้า
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">High-Precision Fraud Interruption</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                การตัดคะแนนความเสี่ยงด้วยโครงข่ายกราฟ (R-GCN) ช่วยคัดแยกเครือข่ายบัญชีม้าความเสี่ยงสูงได้เด็ดขาด ในขณะที่รักษาอัตราการขัดจังหวะที่ผิดพลาด (False Positive) ใกล้ศูนย์
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
