import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return <section className="not-found"><span className="section-kicker">404</span><h1>ไม่พบหน้านี้</h1><p>ลองเลือกหัวข้อจากเมนู หรือกลับไปดูภาพรวมโครงการ</p><Link to="/" className="primary-button">กลับหน้าภาพรวม</Link></section>;
}
