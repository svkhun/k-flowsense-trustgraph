# 📑 สารบัญและคำอธิบายชุดข้อมูล (Dataset Index)

ดูรายละเอียดฉบับเต็มได้ที่ [README.md](file:///d:/All%20Project/K-Sentinel%20and%20WealthPilot/data/README.md)

### 📌 สรุปชื่อไฟล์และหน้าที่:
1. **`01_flowsense_user_profiles.csv`**
   - **ระบบ:** FlowSense (WealthPilot)
   - **หน้าที่:** ข้อมูลโปรไฟล์ลูกค้า 1,200 คน (เงินเดือน, ค่าเช่าห้อง, หนี้ผ่อนชำระ, ค่าน้ำไฟ, เงินสำรองฉุกเฉิน, ลิมิตใช้จ่ายปลอดภัย Safe-to-Spend)
2. **`02_flowsense_cashflow_transactions.csv`**
   - **ระบบ:** FlowSense (WealthPilot)
   - **หน้าที่:** รายการธุรกรรมกระแสเงินสดรายวัน (เงินเดือนเข้า, จ่ายค่าอาหาร, ค่ารถ, ซื้อของ 7-11, บิลค่าน้ำไฟ, ยอดคงเหลือสะสมในบัญชี)
3. **`03_sentinel_users_and_mule_labels.csv`**
   - **ระบบ:** K-Sentinel
   - **หน้าที่:** ข้อมูลบัญชีผู้ใช้ 1,200 บัญชี แยกบัญชีปกติ (95%) และบัญชีม้า AOC (5%)
4. **`04_sentinel_fraud_transactions.csv`**
   - **ระบบ:** K-Sentinel
   - **หน้าที่:** ประวัติธุรกรรมการโอนเงิน 6,400 รายการสำหรับฝึกโมเดลตรวจจับการโกง/บัญชีม้า
5. **`05_sentinel_graph_node_embeddings.csv`**
   - **ระบบ:** TrustGraph
   - **หน้าที่:** เวกเตอร์ความสัมพันธ์กราฟ 16 มิติ (GNN Embeddings) สำหรับตรวจจับเครือข่ายบัญชีม้า
