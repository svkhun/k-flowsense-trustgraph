import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return <footer className="project-footer"><div><strong>FlowSense × TrustGraph</strong><p>Independent prototype · ไม่ใช่ผลิตภัณฑ์ทางการของ KBank</p></div><Link to="/dataset">ที่มาของข้อมูลและข้อจำกัด ↗</Link></footer>;
}
