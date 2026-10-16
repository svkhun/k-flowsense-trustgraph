import React, { useState } from 'react';
import { Target, Wallet } from 'lucide-react';
import MicroSweepVault from '../components/MicroSweepVault';
import { PageIntro, Note, SectionHeading, AppLink, TextLink, money } from '../components/ProjectUI';

export default function FlowSensePage() {
  const [balance, setBalance] = useState(24500);
  const [bills, setBills] = useState(5650);
  const [savings, setSavings] = useState(15240);
  const [dailyBudget, setDailyBudget] = useState(600);
  const days = 14;
  const reserve = 5000;
  const available = Math.max(0, balance - bills - reserve);
  const dailyAllowance = available / days;
  const endBalance = balance - bills - dailyBudget * days;
  const shortfall = Math.max(0, reserve - endBalance);
  const changeAmount = setter => event => {
    const value = Number(event.target.value);
    if (Number.isFinite(value)) setter(Math.max(0, Math.min(1000000, value)));
  };
  return <div className="page-stack">
    <PageIntro eyebrow="FlowSense · แผนใช้เงินและออมเงิน" title="ยอดในบัญชี ไม่ใช่เงินที่ใช้ได้ทั้งหมด">ลองกันบิลและเงินสำรองออกก่อน แล้วเปลี่ยนงบรายวันเพื่อดูว่าเงินจะเหลือเท่าไร จากนั้นจึงเลือกแยกเงินออมด้วยตัวเอง</PageIntro>
    <Note>ตัวอย่างนี้คำนวณในเบราว์เซอร์ ใช้ช่วงสมมติ 14 วันก่อนเงินเดือนออกและเงินสำรอง ฿5,000 ไม่ได้เรียกโมเดลพยากรณ์หรือเปลี่ยนยอดในเว็บแอป</Note>
    <div className="two-columns">
      <section className="surface panel" aria-labelledby="budget-title">
        <div className="surface-title"><div><h2 id="budget-title">ลองวางแผนใช้เงิน</h2><p>อีก 14 วันถึงเงินเดือน · สถานการณ์สมมติ</p></div><span className="icon-box mint"><Target size={21} /></span></div>
        <label className="field-label" htmlFor="main-balance">เงินในบัญชีหลัก (บาท)</label>
        <div className="amount-input"><span>฿</span><input id="main-balance" type="number" min="0" max="1000000" step="0.01" value={balance} onChange={changeAmount(setBalance)} inputMode="decimal" /></div>
        <div className="preset-row">{[[32000, 'เงินเดือนเข้า'], [24500, 'ระหว่างเดือน'], [13000, 'บิลใกล้ถึง']].map(([amount, label]) => <button key={amount} aria-pressed={balance === amount} onClick={() => setBalance(amount)}>{label}</button>)}</div>
        <div className="field-group"><label className="field-label" htmlFor="fixed-bills">บิลที่ต้องจ่ายก่อนเงินเดือนออก (บาท)</label><div className="amount-input"><span>฿</span><input id="fixed-bills" type="number" min="0" max="1000000" step="0.01" value={bills} onChange={changeAmount(setBills)} inputMode="decimal" /></div></div>
        <dl className="calculation-list"><div><dt>กันเงินสำรองไว้</dt><dd>฿{money(reserve)}</dd></div><div><dt>เหลือหลังกันบิลและเงินสำรอง</dt><dd>฿{money(available, 2)}</dd></div><div><dt>เฉลี่ยต่อวันสำหรับ 14 วัน</dt><dd>฿{money(dailyAllowance, 2)}</dd></div></dl>
        <div className="field-group"><label className="field-label" htmlFor="daily-budget">ลองใช้วันละ ฿{money(dailyBudget)}</label><input id="daily-budget" type="range" min="0" max="2000" step="50" value={dailyBudget} onChange={e => setDailyBudget(Number(e.target.value))} /></div>
        <div className={'budget-result ' + (shortfall > 0 ? 'needs-attention' : '')} aria-live="polite"><span>คาดว่าจะเหลือก่อนเงินเดือนออก</span><strong>฿{money(endBalance, 2)}</strong><p>{shortfall > 0 ? 'ต่ำกว่าเงินสำรองที่ตั้งไว้ ฿' + money(shortfall, 2) + ' ลองลดงบรายวันหรือพักการออมเพิ่ม' : 'ตามสมมติฐานนี้ เงินยังเหลือถึงระดับเงินสำรองที่ตั้งไว้'}</p></div>
        <p className="small-note">สูตรตัวอย่าง: เงินในบัญชี − บิล − (งบรายวัน × 14) ตัวอย่างนี้ยังไม่รวมรายรับหรือรายจ่ายอื่นที่อาจเกิดขึ้น</p>
      </section>
      <MicroSweepVault mainBalance={balance} setMainBalance={setBalance} fixedCommitments={bills} projectedLivingCost={dailyBudget * days} emergencyBuffer={reserve} subAccountBalance={savings} setSubAccountBalance={setSavings} />
    </div>
    <section><SectionHeading kicker="จากตัวอย่างคำนวณ ไปสู่เว็บแอป" title="แต่ละส่วนทำหน้าที่ต่างกัน" /><dl className="explanation-list"><div><dt>แผนใช้เงิน</dt><dd>แสดงงบที่ใช้เพิ่มได้วันนี้และให้ลองตั้งงบ ก่อนตัดสินใจจริง การคำนวณงบเป็นกติกาที่อ่านสูตรได้ แยกจากผลคาดการณ์รายจ่ายของโมเดล</dd></div><div><dt>แนวโน้มเงินเข้า–ออก</dt><dd>ในเว็บแอปมีกราฟเงินคงเหลือและบิลล่วงหน้า โดยใช้ผลพยากรณ์จากโมเดลร่วมกับข้อมูลบัญชีสมมติ ผลลัพธ์เป็นค่าประมาณของต้นแบบ</dd></div><div><dt>ออมเงินและถอนเงิน</dt><dd>การเปิดออมอย่างเดียวไม่ย้ายเงิน แต่ละรายการต้องสั่งเองและต้องเหลือเงินตามกติกาที่กำหนด ส่วนการถอนเลือกบางส่วนหรือทั้งหมดได้ เป็นการถอนเงินออม ไม่ใช่การย้อนคืนธุรกรรมโอน</dd></div></dl></section>
    <div className="button-row"><AppLink>ลองแผนใช้เงินในเว็บแอป</AppLink><TextLink to="/architecture">ดูการคำนวณและโมเดล</TextLink></div>
  </div>;
}
