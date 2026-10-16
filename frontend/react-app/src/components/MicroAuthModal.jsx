import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
export default function MicroAuthModal({ isOpen, onClose, onConfirmTransfer }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    if (isOpen && !element.open) element.showModal();
    if (!isOpen && element.open) element.close();
  }, [isOpen]);
  const decide = choice => { onConfirmTransfer?.(choice); onClose(); };
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="review-title" onCancel={onClose} onClose={onClose}>
    <div className="dialog-content"><div className="dialog-title"><div><span className="section-kicker">ตัวอย่างหน้าทบทวนรายการ</span><h2 id="review-title">ก่อนตัดสินใจโอนต่อ</h2></div><button className="icon-button" onClick={onClose} aria-label="ปิดหน้าทบทวน"><X size={20} /></button></div>
      <p>บัญชีผู้รับในสถานการณ์นี้เปิดใหม่และมีเงินเข้าแล้วโอนออกเร็ว ควรตรวจชื่อผู้รับและติดต่อผ่านช่องทางที่เชื่อถือได้ก่อน</p>
      <div className="context-note warm"><p>ในเว็บแอป รายการเสี่ยงมีช่วงทบทวนตามการตั้งค่าและการยืนยันตัวตนจำลอง การรอครบเวลาไม่ได้ทำให้รายการปลอดภัยและไม่ส่งเงินให้อัตโนมัติ</p></div>
      <p className="small-note">หน้านี้แสดงขั้นตอนการตัดสินใจเท่านั้น ไม่มีการเปิดกล้อง สแกนใบหน้า หรือส่งคำสั่งโอนเงิน</p>
      <div className="button-row"><button className="primary-button" onClick={() => decide('CANCEL')}>ยกเลิกตัวอย่างรายการ</button><button className="secondary-button" onClick={() => decide('PROCEED')}>จบการดูตัวอย่าง</button></div>
    </div>
  </dialog>;
}
