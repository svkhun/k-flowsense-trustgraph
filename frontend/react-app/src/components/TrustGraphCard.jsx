import React, { useState } from 'react';
import { User, AlertTriangle, ShieldCheck, Check, Ban, ArrowRight } from 'lucide-react';
import MicroAuthModal from './MicroAuthModal';
import { money } from './ProjectUI';
const recipients = [
  { id: 'normal', name: 'เพื่อนที่เคยโอนให้', detail: 'บัญชีเดิม · รูปแบบการโอนตามตัวอย่างปกติ', icon: User, tone: 'mint', title: 'ไปต่อได้ตามตัวอย่าง', message: 'สถานการณ์นี้ไม่มีกติกาเตือนเพิ่มเติม แต่ผู้ใช้ยังต้องตรวจสอบชื่อและจำนวนเงินก่อนยืนยัน', reasons: ['เคยโอนให้ผู้รับรายนี้', 'ไม่มีสัญญาณผิดปกติตามสถานการณ์ที่กำหนด'] },
  { id: 'review', name: 'ผู้รับใหม่ที่น่าสงสัย', detail: 'บัญชีเปิดใหม่ · เงินเข้าแล้วโอนออกเร็ว', icon: AlertTriangle, tone: 'peach', title: 'ควรทบทวนรายการนี้ก่อน', message: 'มีสัญญาณที่ควรตรวจสอบเพิ่ม จึงแสดงเหตุผลให้ผู้ใช้ตัดสินใจก่อนดำเนินการ', reasons: ['บัญชีผู้รับเพิ่งเปิดได้ 48 ชั่วโมงในตัวอย่าง', 'มีรูปแบบรับเงินแล้วโอนออกภายใน 24 วินาที', 'เว็บแอปมีช่วงทบทวนรายการเสี่ยงตามการตั้งค่า'] },
  { id: 'blocked', name: 'ผู้รับที่ถูกบล็อกในข้อมูลทดลอง', detail: 'บัญชีสมมติที่ถูกระบุไว้ในชุดข้อมูล', icon: Ban, tone: 'lilac', title: 'ไม่อนุญาตให้ทำรายการ', message: 'ในเว็บแอป ผู้รับที่ถูกบล็อกในข้อมูลทดลองจะไม่ผ่านขั้นตอนโอนเงิน', reasons: ['ผู้รับอยู่ในรายชื่อบล็อกของสถานการณ์ทดลอง', 'ต้องไม่หักยอดบัญชีสำหรับรายการที่ถูกบล็อก'] },
];
export default function TrustGraphCard() {
  const [selected, setSelected] = useState('normal');
  const [amount, setAmount] = useState('1200');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [modal, setModal] = useState(false);
  const [decision, setDecision] = useState('');
  const recipient = recipients.find(item => item.id === selected);
  const reset = () => { setResult(null); setError(''); setDecision(''); };
  const evaluate = event => {
    event.preventDefault();
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0 || value > 1000000 || Math.abs(value * 100 - Math.round(value * 100)) > 1e-7) { setError('กรอกจำนวนมากกว่า 0 ถึง 1,000,000 บาท และไม่เกินทศนิยม 2 ตำแหน่ง'); return; }
    setError(''); setResult({ ...recipient, amount: value }); setDecision('');
  };
  return <div>
    <div className="two-columns equal-columns">
      <form className="surface panel" onSubmit={evaluate}>
        <div className="surface-title"><div><h2>ลองเลือกผู้รับ</h2><p>สถานการณ์ที่กำหนดไว้เพื่ออธิบายหน้าจอ</p></div><span className="icon-box lilac"><ShieldCheck size={21} /></span></div>
        <div className="recipient-options" role="group" aria-label="เลือกผู้รับในสถานการณ์ทดลอง">{recipients.map(item => { const Icon = item.icon; return <button key={item.id} type="button" className={'recipient-option ' + (selected === item.id ? 'selected' : '')} aria-pressed={selected === item.id} onClick={() => { setSelected(item.id); reset(); }}><span className={'icon-box ' + item.tone}><Icon size={20} /></span><span><strong>{item.name}</strong><small>{item.detail}</small></span><span className="recipient-radio">{selected === item.id && <Check size={12} />}</span></button>; })}</div>
        <div className="field-group"><label className="field-label" htmlFor="transfer-amount">จำนวนเงินในตัวอย่าง (บาท)</label><div className="amount-input"><span>฿</span><input id="transfer-amount" type="number" min="0.01" step="0.01" max="1000000" value={amount} onChange={event => { setAmount(event.target.value); reset(); }} inputMode="decimal" /></div></div>
        <div className="preset-row">{[350, 1200, 3000].map(value => <button type="button" key={value} aria-pressed={Number(amount) === value} onClick={() => { setAmount(String(value)); reset(); }}>฿{money(value)}</button>)}</div>
        <button className="primary-button full-width" type="submit">ดูผลของสถานการณ์ <ArrowRight size={17} /></button>
        {error && <p role="alert" className="status-message error-message">{error}</p>}
      </form>
      <div aria-live="polite">{result ? <section className={'risk-panel ' + result.id}>
        <span className="risk-kicker"><ShieldCheck size={17} />ผลจากสถานการณ์สมมติ · ฿{money(result.amount, 2)}</span><h3>{result.title}</h3><p>{result.message}</p><ul className="risk-reasons">{result.reasons.map(reason => <li key={reason}>{reason}</li>)}</ul>
        {result.id === 'review' && <button className="secondary-button" onClick={() => setModal(true)}>ดูหน้าทบทวนรายการ <ArrowRight size={16} /></button>}
        {decision && <p role="status" className="status-message">{decision}</p>}
        <p className="small-note">ผลที่แสดงเป็นกติกาของตัวอย่างหน้านี้ ไม่ใช่คะแนนที่เรียกจากโมเดลหรือผลตรวจบัญชีจริง</p>
      </section> : <section className="review-initial"><span className="icon-box lilac"><ShieldCheck size={23} /></span><h3>เหตุผลมาก่อนคำเตือน</h3><p>เลือกผู้รับและกดดูผล เพื่อเปรียบเทียบรายการทั่วไป รายการที่ควรทบทวน และผู้รับที่ถูกบล็อก</p></section>}</div>
    </div>
    <MicroAuthModal isOpen={modal} onClose={() => setModal(false)} onConfirmTransfer={choice => setDecision(choice === 'CANCEL' ? 'ยกเลิกตัวอย่างแล้ว ไม่มีการโอนเงิน' : 'จบการดูตัวอย่าง ไม่มีการส่งคำสั่งโอนเงิน')} />
  </div>;
}
