import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Download, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { datasetAnalyticsData } from '../data/datasetAnalyticsData';
import { PageIntro, Note, SectionHeading, money } from '../components/ProjectUI';
const sourceRoot = 'https://github.com/svkhun/k-flowsense-trustgraph/blob/main/data/';
const { accounts, transactions } = datasetAnalyticsData;
const PAGE_SIZE = 10;
const sources = [
  ['01_flowsense_user_profiles.csv', 'โปรไฟล์สำหรับ FlowSense', '1,140 แถว'],
  ['02_flowsense_cashflow_transactions.csv', 'ประวัติกระแสเงินสดสมมติ', '17,039 แถว'],
  ['03_trustgraph_users_and_mule_labels.csv', 'บัญชีและป้ายกำกับสมมติ', '1,200 แถว'],
  ['04_trustgraph_fraud_transactions.csv', 'ธุรกรรมและป้ายกำกับสมมติ', '6,400 แถว'],
  ['05_trustgraph_graph_node_embeddings.csv', 'Embedding ของบัญชีที่คำนวณไว้', '1,200 แถว'],
];
export default function DatasetAnalyticsPage() {
  const [tab, setTab] = useState('accounts');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (selected && !dialog.current.open) dialog.current.showModal();
    if (!selected && dialog.current.open) dialog.current.close();
  }, [selected]);
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (tab === 'accounts' ? accounts : transactions).filter(row => {
      const label = tab === 'accounts' ? row.isMule : row.isScam;
      if (filter !== 'all' && label !== Number(filter)) return false;
      return (tab === 'accounts' ? [row.accountId, row.accountAgeDays] : [row.txId, row.sourceId, row.targetId, row.timestamp]).some(value => String(value).toLowerCase().includes(q));
    });
  }, [tab, filter, query]);
  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const visibleRows = rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const resetPage = () => setPage(1);
  const switchTab = next => { setTab(next); setFilter('all'); setQuery(''); resetPage(); };
  const download = () => {
    const columns = tab === 'accounts'
      ? ['dataset_kind', 'account_id', 'account_age_days', 'kyc_level', 'is_promptpay_linked', 'avg_inflow_velocity_sec', 'is_mule']
      : ['dataset_kind', 'tx_id', 'source_id', 'target_id', 'amount', 'timestamp', 'is_scam'];
    const values = rows.map(row => tab === 'accounts'
      ? ['synthetic_sample', row.accountId, row.accountAgeDays, row.kycLevel, Number(row.isPromptPay), row.avgVelocitySec, row.isMule]
      : ['synthetic_sample', row.txId, row.sourceId, row.targetId, row.amount, row.timestamp, row.isScam]);
    const csv = [columns, ...values].map(row => row.map(value => '"' + String(value).replaceAll('"', '""') + '"').join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' }));
    const anchor = document.createElement('a');
    anchor.href = url; anchor.download = 'SYNTHETIC_' + tab + '_sample_filtered.csv';
    document.body.appendChild(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const tabKey = (event, next) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); switchTab(next);
      document.getElementById('tab-' + next)?.focus();
    }
  };
  return <div className="page-stack">
    <PageIntro eyebrow="ข้อมูลและการประเมิน" title="ข้อมูลสมมติ ต้องอ่านผลอย่างมีขอบเขต">ชุดข้อมูลใช้สร้างต้นแบบและทดสอบเส้นทางการทำงาน ยังไม่ใช่ข้อมูลลูกค้า ข้อมูลผู้ตอบแบบสอบถาม หรือหลักฐานว่าระบบป้องกันการหลอกโอนได้จริง</PageIntro>
    <div className="stats-strip"><div><span>บัญชี TrustGraph ในไฟล์เต็ม</span><strong>1,200</strong><small>ข้อมูลสังเคราะห์</small></div><div><span>ธุรกรรมในไฟล์เต็ม</span><strong>6,400</strong><small>ข้อมูลสังเคราะห์</small></div><div><span>ตัวอย่างในตารางด้านล่าง</span><strong>{accounts.length} / {transactions.length}</strong><small>บัญชี / ธุรกรรม · ไม่ใช่สัดส่วนสุ่มตัวแทน</small></div></div>
    <section aria-label="สำรวจข้อมูลตัวอย่าง"><SectionHeading title="สำรวจข้อมูลตัวอย่าง" kicker="อ่านป้ายกำกับจากชุดข้อมูล ไม่ใช่ผลทำนายสด" />
      <div className="tab-row" role="tablist" aria-label="ชนิดข้อมูลตัวอย่าง">{[['accounts', 'บัญชีสมมติ'], ['transactions', 'ธุรกรรมสมมติ']].map(([id, label]) => <button key={id} id={'tab-' + id} role="tab" aria-selected={tab === id} aria-controls="sample-panel" tabIndex={tab === id ? 0 : -1} onClick={() => switchTab(id)} onKeyDown={event => tabKey(event, id === 'accounts' ? 'transactions' : 'accounts')}>{label} ({id === 'accounts' ? accounts.length : transactions.length})</button>)}</div>
      <div role="tabpanel" id="sample-panel" aria-labelledby={'tab-' + tab}>
        <div className="data-toolbar"><label className="search-field"><Search size={17} /><input type="search" aria-label="ค้นหาข้อมูลตัวอย่าง" placeholder={tab === 'accounts' ? 'ค้นหารหัสบัญชี' : 'ค้นหารหัสรายการหรือบัญชี'} value={query} onChange={event => { setQuery(event.target.value); resetPage(); }} /></label><select aria-label="กรองตามป้ายกำกับสมมติ" value={filter} onChange={event => { setFilter(event.target.value); resetPage(); }}><option value="all">ทุกป้ายกำกับ</option><option value="0">ป้ายกำกับปกติ (0)</option><option value="1">{tab === 'accounts' ? 'ป้ายกำกับบัญชีม้า (1)' : 'ป้ายกำกับหลอกโอน (1)'}</option></select><button className="secondary-button" onClick={download} disabled={!rows.length}><Download size={16} />CSV ตัวอย่าง</button></div>
        <div className="table-scroll" role="region" tabIndex={0} aria-label="ตารางข้อมูลสมมติ เลื่อนแนวนอนได้">
          <table className="evidence-table data-table"><caption className="sr-only">ข้อมูลสังเคราะห์ฉบับตัวอย่าง {tab === 'accounts' ? 'บัญชี' : 'ธุรกรรม'}</caption><thead>{tab === 'accounts' ? <tr><th scope="col">รหัสบัญชี</th><th scope="col">อายุบัญชี (วัน)</th><th scope="col">KYC</th><th scope="col">เวลาหมุนเงินเฉลี่ย (วินาที)</th><th scope="col">ป้ายกำกับในข้อมูล</th></tr> : <tr><th scope="col">รหัสรายการ</th><th scope="col">ผู้โอน → ผู้รับ</th><th scope="col">จำนวน (บาท)</th><th scope="col">วันเวลาในข้อมูล</th><th scope="col">ป้ายกำกับในข้อมูล</th></tr>}</thead>
          <tbody>{visibleRows.map(row => tab === 'accounts' ? <tr key={row.accountId}><td><button onClick={() => setSelected(row)} aria-label={'ดูรายละเอียด ' + row.accountId}>{row.accountId}</button></td><td className="number">{row.accountAgeDays}</td><td>{row.kycLevel}</td><td className="number">{money(row.avgVelocitySec, 2)}</td><td><span className={'status-tag ' + (row.isMule ? 'pending' : '')}>{row.isMule ? 'บัญชีม้า (1)' : 'ปกติ (0)'}</span></td></tr> : <tr key={row.txId}><td className="code-ref">{row.txId}</td><td className="code-ref">{row.sourceId} → {row.targetId}</td><td className="number">{money(row.amount, 2)}</td><td>{row.timestamp}</td><td><span className={'status-tag ' + (row.isScam ? 'pending' : '')}>{row.isScam ? 'หลอกโอน (1)' : 'ปกติ (0)'}</span></td></tr>)}</tbody></table>
          {!visibleRows.length && <p className="empty-state">ไม่พบข้อมูลตามคำค้นและตัวกรองนี้</p>}
        </div>
        <div className="pagination"><span role="status">พบ {rows.length} จาก {tab === 'accounts' ? accounts.length : transactions.length} ตัวอย่าง</span><div><button aria-label="หน้าก่อนหน้า" disabled={page === 1} onClick={() => setPage(value => value - 1)}><ChevronLeft size={18} /></button><span>{page} / {totalPages}</span><button aria-label="หน้าถัดไป" disabled={page >= totalPages} onClick={() => setPage(value => value + 1)}><ChevronRight size={18} /></button></div></div>
        <p className="data-caption">ดาวน์โหลดเฉพาะตัวอย่างที่ตรงกับตัวกรองทุกหน้า พร้อมคอลัมน์ dataset_kind = synthetic_sample วันเวลาในตารางเป็นส่วนหนึ่งของข้อมูลสมมติ</p>
      </div>
    </section>
    <Note warm>ตัวอย่างในหน้านี้คัดบางรายการจากไฟล์เต็ม ไม่ใช่การสุ่มเพื่อแทนประชากร จึงใช้สัดส่วนบัญชีม้าหรือธุรกรรมหลอกโอนในตารางนี้อ้างอิงอัตราที่เกิดขึ้นจริงไม่ได้</Note>
    <section><SectionHeading title="ก่อนอ้างผลของโมเดล" /><dl className="explanation-list"><div><dt>FlowSense</dt><dd>ต้องวัดกับช่วงเวลาอนาคตที่โมเดลไม่เคยเห็น เทียบกับวิธีง่าย เช่น ใช้รายจ่ายวันก่อนหรือสัปดาห์ก่อน และวัดว่าการแนะนำงบยังเหลือเงินจ่ายบิลได้เพียงใด</dd></div><div><dt>TrustGraph</dt><dd>สคริปต์ฝึกในโครงการนี้ใช้ is_scam เป็นชนิดเส้นเชื่อมก่อนแยกข้อมูลทดสอบ จึงมีข้อมูลคำตอบรั่วเข้ากราฟ ต้องสร้างกราฟจากข้อมูลที่รู้ได้ ณ เวลาตรวจจริง แล้วประเมินใหม่แบบแบ่งตามเวลา</dd></div><div><dt>ความเร็วของระบบ</dt><dd>เวลาเรียกโมเดลในเครื่องไม่เท่ากับเวลาที่ผู้ใช้รอ ต้องวัดรวมเครือข่าย การเตรียมข้อมูล การตรวจเงื่อนไข และภาระงานหลายรายการพร้อมกัน ก่อนอ้าง SLA</dd></div><div><dt>ผลกับผู้ใช้และธุรกิจ</dt><dd>ยังไม่มีหลักฐานภาคสนามเรื่องลดการสูญเงิน เพิ่มเงินฝาก หรือเพิ่มการกลับมาใช้งาน จึงไม่แสดงตัวเลขคาดการณ์เป็นผลที่เกิดขึ้นแล้ว</dd></div></dl></section>
    <section><SectionHeading title="ไฟล์ต้นทางในโครงการ" kicker="จำนวนแถวนับจาก CSV ใน repository นี้" /><div className="table-scroll" role="region" tabIndex={0} aria-label="ไฟล์ต้นทางและจำนวนแถว"><table className="evidence-table"><thead><tr><th scope="col">ไฟล์ข้อมูลสมมติ</th><th scope="col">ใช้ทำอะไร</th><th scope="col">ขนาดไฟล์เต็ม</th></tr></thead><tbody>{sources.map(([file, purpose, count]) => <tr key={file}><td><a className="code-ref" href={sourceRoot + file} target="_blank" rel="noreferrer">{file} ↗</a></td><td>{purpose}</td><td>{count}</td></tr>)}</tbody></table></div></section>
    <dialog ref={dialog} className="project-dialog" aria-labelledby="account-detail-title" onCancel={() => setSelected(null)} onClose={() => setSelected(null)}><div className="dialog-content"><div className="dialog-title"><div><span className="section-kicker">รายละเอียดบัญชีสมมติ</span><h2 id="account-detail-title">{selected?.accountId}</h2></div><button className="icon-button" aria-label="ปิดรายละเอียดบัญชี" onClick={() => setSelected(null)}><X size={20} /></button></div>{selected && <><dl className="calculation-list"><div><dt>อายุบัญชี</dt><dd>{selected.accountAgeDays} วัน</dd></div><div><dt>ระดับ KYC ในข้อมูล</dt><dd>{selected.kycLevel}</dd></div><div><dt>ผูกพร้อมเพย์ในข้อมูล</dt><dd>{selected.isPromptPay ? 'ใช่' : 'ไม่ใช่'}</dd></div><div><dt>เวลาหมุนเงินเฉลี่ย</dt><dd>{money(selected.avgVelocitySec, 2)} วินาที</dd></div><div><dt>ป้ายกำกับ is_mule</dt><dd>{selected.isMule}</dd></div></dl><p className="small-note">ป้ายกำกับมาจากข้อมูลสังเคราะห์ ไม่ใช่การระบุว่าบุคคลหรือบัญชีจริงกระทำผิด</p></>}</div></dialog>
  </div>;
}
