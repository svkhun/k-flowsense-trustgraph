import { useLanguage } from "../i18n/LanguageContext";
import React from 'react';
import { PageIntro, Note, TextLink, AppLink } from '../components/ProjectUI';
const personas = [{
  initial: 'ม',
  name: 'เมย์',
  role: 'วัยเริ่มทำงาน',
  tone: 'mint',
  title: 'มีเงินเดือนประจำ แต่อยากรู้ว่าวันนี้ใช้เพิ่มได้เท่าไร',
  context: 'เริ่มที่หน้าหลักเพื่อดูงบคงเหลือวันนี้ จากนั้นเข้าแผนใช้เงิน ลองเปลี่ยนงบรายวันและดูเงินที่คาดว่าจะเหลือก่อนเงินเดือนออก',
  task: 'ลองเพิ่มงบรายวัน แล้วสังเกตว่าเงินสำรองเริ่มไม่พอตรงไหน',
  link: '/flowsense',
  label: 'ดูตัวอย่างแผนใช้เงิน'
}, {
  initial: 'น',
  name: 'นนท์',
  role: 'ค่าใช้จ่ายหลายทาง',
  tone: 'peach',
  title: 'เงินในบัญชีดูพอ แต่ยังมีบิลที่ต้องจ่าย',
  context: 'ตรวจภาระที่ต้องกันไว้ก่อนคิดเรื่องออม หากแยกออมไปแล้วเกิดค่าใช้จ่าย ก็เลือกถอนเงินออมบางส่วนกลับบัญชีหลักได้',
  task: 'ลองสถานการณ์บิลใกล้ถึง แล้วเปรียบเทียบเงินส่วนที่พร้อมออม',
  link: '/flowsense',
  label: 'ลองออมและถอนเงิน'
}, {
  initial: 'พ',
  name: 'แพรว',
  role: 'เน้นสร้างเงินสำรอง',
  tone: 'lilac',
  title: 'อยากออมต่อเนื่อง และตรวจให้รอบคอบก่อนโอน',
  context: 'ดูเงินส่วนที่พร้อมออมโดยเผื่อบิลและเงินสำรอง เมื่อโอนไปยังผู้รับใหม่ ให้ดูเหตุผลความเสี่ยงและเลือกทบทวนรายการก่อนตัดสินใจ',
  task: 'เปรียบเทียบผู้รับที่คุ้นเคย ผู้รับน่าสงสัย และผู้รับที่ถูกบล็อก',
  link: '/trustgraph',
  label: 'ดูตัวอย่างก่อนโอน'
}];
export default function PersonasPage() {
  const {
    t
  } = useLanguage();
  return <div className="page-stack">
    <PageIntro eyebrow={t("ตัวอย่างการใช้งาน")} title={t("สามบัญชีทดลอง สามเรื่องที่อยากให้ลอง")}>{t("ใช้ตัวละครเดียวกับเว็บแอปเพื่อเดินผ่านการตัดสินใจเรื่องเงิน แต่ละตัวอย่างช่วยทดสอบหน้าจอและกติกา ไม่ใช่ผลวิจัยจากผู้ใช้จริง")}</PageIntro>
    <Note>{t("เมย์ นนท์ และแพรวเป็นบุคคลสมมติ ชื่อและบทบาทใช้เล่าสถานการณ์สาธิต ไม่ใช่ผู้ตอบแบบสอบถามหรือคำรับรองจากลูกค้า")}</Note>
    <div className="persona-list">{personas.map(persona => <article key={persona.name} className="persona-story"><div className="persona-identity"><span className={'persona-avatar ' + persona.tone}>{t(persona.initial)}</span><div><h2>{t(persona.name)}</h2><p>{t(persona.role)}</p></div></div><div className="story-body"><h3>{t(persona.title)}</h3><p>{t(persona.context)}</p><p className="small-note"><strong>{t("สิ่งที่ชวนลอง:")}</strong> {t(persona.task)}</p><TextLink to={persona.link}>{t(persona.label)}</TextLink></div></article>)}</div>
    <section className="reading-strip"><div><h2>{t("สิ่งที่ต้องวัดกับผู้ใช้จริงในขั้นต่อไป")}</h2><p>{t("ผู้ใช้เข้าใจงบที่แสดงหรือไม่ เหตุผลของคำเตือนช่วยตัดสินใจหรือไม่ และขั้นตอนทบทวนเพิ่มภาระแค่ไหน ขณะนี้ยังไม่มีผลทดสอบภาคสนามมายืนยัน")}</p></div><AppLink secondary>{t("เลือกบัญชีทดลองในเว็บแอป")}</AppLink></section>
  </div>;
}
