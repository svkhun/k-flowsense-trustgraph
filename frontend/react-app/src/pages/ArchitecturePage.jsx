import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageIntro, SectionHeading, Note, TextLink } from '../components/ProjectUI';
const stages = [
  ['01 · หน้าจอ', 'React', 'รับงบรายวัน จำนวนเงินออม และข้อมูลการโอนจากบัญชีทดลอง'],
  ['02 · บริการ', 'FastAPI', 'อ่านข้อมูลสมมติ ตรวจเงื่อนไข และจัดการสถานะรายการในต้นแบบ'],
  ['03 · โมเดล', 'ONNX Runtime', 'ประมวลผลโมเดลที่บันทึกไว้ แล้วส่งค่ากลับไปใช้ร่วมกับกติกา'],
];
const rows = [
  ['FlowSense', 'LightGBM สำหรับคาดการณ์รายจ่าย และกติกาสำหรับงบ บิล และเงินสำรอง', 'งบรายวันไม่ใช่ผลทำนายจากโมเดลทั้งหมด ต้องประเมินความคลาดเคลื่อนกับข้อมูลอนาคตอีกครั้ง'],
  ['TrustGraph', 'R-GCN สร้าง embedding ล่วงหน้า แล้วใช้ LightGBM อ่านร่วมกับข้อมูลธุรกรรม', 'ตอนให้บริการใช้ embedding ที่บันทึกไว้ ไม่ได้สร้างกราฟธนาคารจริงแบบสด'],
  ['สถานะบัญชี', 'เก็บยอดและรายการในหน่วยความจำสำหรับสาธิต', 'ยังไม่ใช่บัญชีแยกประเภทของธนาคาร และไม่ใช่ระบบธุรกรรมถาวร'],
  ['บริการสตรีมข้อมูล', 'Kafka, Feast และ Triton เป็นแนวทางสำหรับขยายระบบ', 'ไม่ได้เป็นเส้นทางให้บริการจริงของต้นแบบปัจจุบัน'],
];
export default function ArchitecturePage() {
  return <div className="page-stack">
    <PageIntro eyebrow="การทำงานของระบบ" title="โมเดลเป็นส่วนหนึ่งของการตัดสินใจ">หน้าจอ กติกาธุรกรรม และโมเดลทำคนละหน้าที่ การอธิบายต้นแบบจึงต้องแยกว่าอะไรคำนวณด้วยสูตร อะไรผ่านโมเดล และอะไรยังเป็นแผนพัฒนาต่อ</PageIntro>
    <section><SectionHeading kicker="เส้นทางหลักของเว็บแอปต้นแบบ" title="จากข้อมูลที่ผู้ใช้กรอก ไปสู่ผลบนหน้าจอ" /><div className="pipeline">{stages.map(([label, title, detail], index) => <React.Fragment key={title}>{index > 0 && <span className="pipeline-arrow" aria-hidden="true"><ArrowRight size={20} /></span>}<article className="pipeline-stage"><small>{label}</small><h3>{title}</h3><p>{detail}</p></article></React.Fragment>)}</div><p className="small-note">ตัวอย่างคำนวณในเว็บไซต์นำเสนอใช้สถานะในเบราว์เซอร์ ส่วนขั้นตอนผ่าน API อยู่ในเว็บแอปที่แยกเปิดจากเมนู</p></section>
    <section><SectionHeading title="สิ่งที่มีอยู่ในโครงการนี้" /><div className="table-scroll" role="region" tabIndex={0} aria-label="ตารางส่วนประกอบและขอบเขต"><table className="evidence-table"><thead><tr><th scope="col">ส่วนประกอบ</th><th scope="col">การทำงานในต้นแบบ</th><th scope="col">ขอบเขตที่ต้องรู้</th></tr></thead><tbody>{rows.map(([name, behavior, limit]) => <tr key={name}><td>{name}</td><td>{behavior}</td><td>{limit}</td></tr>)}</tbody></table></div></section>
    <div className="two-columns equal-columns">
      <section className="surface panel"><SectionHeading kicker="FlowSense" title="คาดการณ์ แล้วใช้กติกาประกอบ" /><ol className="process-list"><li><h3>เตรียมข้อมูลรายรับและรายจ่าย</h3><p>ข้อมูลบัญชีและประวัติทั้งหมดเป็นข้อมูลสังเคราะห์ที่ใช้พัฒนาต้นแบบ</p></li><li><h3>ประมาณรายจ่ายด้วยโมเดล</h3><p>ใช้โมเดล LightGBM ที่ส่งออกเป็น ONNX สำหรับการให้บริการ</p></li><li><h3>กันบิลและเงินสำรองก่อนออม</h3><p>ใช้เงื่อนไขการออมแยกจากโมเดล ผู้ใช้ยังต้องเลือกเปิดและสั่งออมเอง</p></li></ol></section>
      <section className="surface panel"><SectionHeading kicker="TrustGraph" title="อ่านบริบทธุรกรรมร่วมกับกราฟ" /><ol className="process-list"><li><h3>สร้างตัวแทนของบัญชีจากกราฟ</h3><p>R-GCN สร้าง embedding ขนาด 16 มิติไว้ล่วงหน้า</p></li><li><h3>รวมกับสัญญาณธุรกรรม</h3><p>เช่น จำนวนเงิน การเปลี่ยนอุปกรณ์ ระยะเวลาใช้งาน และวิธียืนยันตัวตน</p></li><li><h3>แสดงผลผ่านกติกาของแอป</h3><p>ระบบต้องตัดสินขั้นตอนทบทวน ยืนยัน หรือบล็อกรายการบนเซิร์ฟเวอร์ การแสดงคำเตือนอย่างเดียวไม่เพียงพอ</p></li></ol></section>
    </div>
    <Note warm>ข้อจำกัดของการฝึก TrustGraph ใน repository นี้: ชนิดเส้นเชื่อมถูกสร้างจาก is_scam ก่อนแยกชุดทดสอบ ทำให้ข้อมูลคำตอบเข้าสู่กราฟ การวัดความแม่นยำจึงต้องทำใหม่ก่อนใช้ยืนยันคุณภาพโมเดล</Note>
    <details className="technical-details"><summary>ตำแหน่งโค้ดที่ใช้อธิบายระบบ</summary><p>บริการในโครงการนี้: <code>src/app_v2.py</code><br />โมเดลกราฟ: <code>src/train_trustgraph_two_tier.py</code><br />เว็บแอปอ้างอิง: <code>k-web-application/src/ui/</code> และ <code>k-web-application/src/app_v2.py</code></p><p>สอง repository มีรายละเอียดและนโยบายบางส่วนต่างกัน หน้าอธิบายนี้ไม่ถือว่าโค้ดของทั้งสองฝั่งซิงก์กันโดยอัตโนมัติ</p></details>
    <TextLink to="/dataset">ดูข้อมูลที่ใช้และแนวทางประเมินต่อ</TextLink>
  </div>;
}
