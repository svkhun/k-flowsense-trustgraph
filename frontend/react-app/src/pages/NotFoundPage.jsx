import { useLanguage } from "../i18n/LanguageContext";
import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  const {
    t
  } = useLanguage();
  return <section className="not-found"><span className="section-kicker">404</span><h1>{t("ไม่พบหน้านี้")}</h1><p>{t("ลองเลือกหัวข้อจากเมนู หรือกลับไปดูภาพรวมโครงการ")}</p><Link to="/" className="primary-button">{t("กลับหน้าภาพรวม")}</Link></section>;
}
