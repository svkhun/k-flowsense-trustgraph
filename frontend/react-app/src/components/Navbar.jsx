import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Home, Wallet, ShieldCheck, Layers, Users, Database, ArrowUpRight, Menu, X, ArrowRight } from 'lucide-react';
import { WEB_APP_URL } from './ProjectUI';
const links = [
  ['/', 'ภาพรวมโครงการ', Home], ['/flowsense', 'ใช้เงินและออมเงิน', Wallet],
  ['/trustgraph', 'ความเสี่ยงก่อนโอน', ShieldCheck], ['/personas', 'ตัวอย่างการใช้งาน', Users],
  ['/architecture', 'การทำงานของระบบ', Layers], ['/dataset', 'ข้อมูลและการประเมิน', Database],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  return <>
    <div className="mobile-header"><Link to="/" className="mobile-brand">K<span>FlowSense × TrustGraph</span></Link><button className="icon-button" aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'} aria-expanded={open} aria-controls="project-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button></div>
    <aside className={'project-sidebar ' + (open ? 'is-open' : '')}>
      <Link className="project-brand" to="/" aria-label="FlowSense × TrustGraph ภาพรวมโครงการ"><span className="brand-mark">K</span><span className="brand-caption">PROJECT NOTES</span></Link>
      <nav id="project-navigation" aria-label="เมนูโครงการ">{links.map(([path, label, Icon]) => <NavLink key={path} to={path} end={path === '/'} className={({ isActive }) => 'sidebar-link ' + (isActive ? 'active' : '')}><Icon size={19} /><span>{label}</span><ArrowRight className="nav-arrow" size={14} /></NavLink>)}</nav>
      <div className="sidebar-bottom"><p>ลองดูจากหน้าจอจริง</p><a href={WEB_APP_URL} target="_blank" rel="noreferrer" className="sidebar-app-link">เปิดเว็บแอป <ArrowUpRight size={17} /></a><div className="sidebar-note"><strong>FlowSense × TrustGraph</strong><span>โครงการต้นแบบสำหรับ KBTG<br />ข้อมูลสมมติ · ไม่มีการโอนเงินจริง</span></div></div>
    </aside>
  </>;
}
