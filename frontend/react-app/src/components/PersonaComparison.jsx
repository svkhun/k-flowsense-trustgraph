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
              จากเพียงแอปทำธุรกรรมเชิงรับ สู่คู่หูทางการเงินอัจฉริยะ (From Reactive Utility to Intelligent Partner)
            </h2>
            <p className="text-sm text-slate-300 leading-[1.85] font-normal pt-1">
              คนเริ่มทำงาน (First Jobbers อายุ 20–30 ปี) เผชิญกับดักค่าใช้จ่ายตามอารมณ์ ขาดเงินสำรอง และตกเป็นเป้าหมายหลักของภัยไซเบอร์ ขณะที่โมบายแบงก์กิ้งปัจจุบันยังเป็นเพียงช่องทางทำธุรกรรมตั้งรับ
            </p>
          </div>

          {/* Comparative Matrix: Current Pain Points vs Modern Enabler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Left: Empirical Problems / Conventional App Limitations */}
            <div className="bento-card rounded-2xl p-6 sm:p-7 space-y-5 border border-rose-500/30 bg-rose-950/10 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3 border-b border-rose-500/20">
                <div className="flex items-center gap-2 text-rose-400">
                  <X className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">ข้อจำกัดและวิกฤตปัจจุบัน (Empirical Pain Points)</h3>
                </div>
                <span className="text-[10px] font-mono tracking-wider text-rose-300 bg-rose-950/60 border border-rose-500/40 px-2 py-0.5 rounded font-bold">
                  HIGH VULNERABILITY
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-rose-200">1. Discretionary Spending Trap &amp; Lack of Emergency Reserves:</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    ข้อมูลเชิงประจักษ์จาก <strong>PIER</strong> และ <strong>SET</strong> ชี้ว่ากว่า <strong>60–68%</strong> ของคนทำงานรุ่นใหม่มีเงินสำรองฉุกเฉินไม่ถึง 3 เดือน และใช้ชีวิตเดือนชนเดือนจากการใช้จ่ายตามอารมณ์ ขาดเครื่องมืออัตโนมัติในการบริหารสภาพคล่องรายวัน
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-rose-200">2. Prime Targets for Modern Financial Scams:</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    สถิติจาก <strong>AOC 1441</strong> และ <strong>ตำรวจไซเบอร์</strong> พบว่ากว่า <strong>45% ของเหยื่ออายุ 20–30 ปี</strong> ตกเป็นเป้าหมายหลักของกลโกงหลอกทำงานเสริม (Task Scams) และหลอกลงทุนผลตอบแทนสูง สูญเสียเงินรวมกว่า <strong>2.0 พันล้านบาทต่อปี</strong>
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-rose-200">3. Reactive Limitations of Mobile Banking:</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    K PLUS ในปัจจุบันยังทำหน้าที่เป็นเพียง <strong>Transactional Utility</strong> (เครื่องมือโอน-จ่ายเชิงรับ) ขาดระบบสะกิดพฤติกรรมเชิงรุก (Proactive Nudges) และขาดระบบคัดกรองก่อนโอน (Pre-Transaction Screening) เพื่อสกัดกั้นบัญชีม้าก่อนเกิดความเสียหายจริง
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
                  INTELLIGENT PARTNER
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-emerald-200">Status Horizon Bar &amp; Commitment Warnings:</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    ฉายภาพสภาพคล่องถึงวันเงินเดือนออกอัตโนมัติ ตัดภาระคงที่จริง (ค่าเช่า/หนี้) สะกิดเตือนเชิงรุกเฉพาะเมื่อภาระเสี่ยง พร้อมระงับการเตือนช่วงเงินลดปกติเพื่อป้องกันความรำคาญ
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-emerald-200">Micro-Sweep with 1-Tap Undo (สร้างเงินสำรองไร้แรงต้าน):</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    กวาดเศษเงินส่วนเกินสะสมเป็น Emergency Reserves ดอกเบี้ยสูงอัตโนมัติ โดยไม่สูญเสียสภาพคล่อง ด้วยปุ่ม 1-Tap Undo ดึงเงินคืนเข้าบัญชีหลักได้ 100% ทันที ไร้ค่าปรับ
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-emerald-200">Pre-Transaction Screening &amp; Micro-Auth 5s:</div>
                  <p className="text-slate-300 leading-[1.8] font-normal">
                    ยกระดับ K PLUS สู่ Intelligent Partner: คัดกรองบัญชีม้าด้วย R-GCN ใน &lt;12ms รายการปกติผ่านทันที (Zero-Delay 3.8ms) หากพบม้าวิกฤตจะใช้ Micro-Auth สแกนหน้า 5s ตัดวงจรเร่งเร้าพร้อมชี้แจงเหตุผลชัดเจน
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
