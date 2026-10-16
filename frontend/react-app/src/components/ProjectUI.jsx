import React from 'react';
import { ArrowRight, ArrowUpRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
export const WEB_APP_URL = 'https://k-web-application.onrender.com/';
export const money = (value, digits = 0) => new Intl.NumberFormat('th-TH', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
export function PageIntro({ eyebrow, title, children }) {
  return <div className="page-intro"><span className="section-kicker">{eyebrow}</span><h1>{title}</h1>{children && <p>{children}</p>}</div>;
}
export function AppLink({ children = 'เปิดเว็บแอป', secondary = false }) {
  return <a className={secondary ? 'secondary-button' : 'primary-button'} href={WEB_APP_URL} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={17} /></a>;
}
export function TextLink({ to, children }) {
  return <Link className="text-link" to={to}>{children}<ArrowRight size={16} /></Link>;
}
export function Note({ children, warm = false }) {
  return <div className={'context-note ' + (warm ? 'warm' : '')}><Info size={17} /><p>{children}</p></div>;
}
export function SectionHeading({ kicker, title, children }) {
  return <div className="section-heading"><div>{kicker && <span className="section-kicker">{kicker}</span>}<h2>{title}</h2></div>{children}</div>;
}
