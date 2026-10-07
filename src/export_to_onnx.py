import os
import lightgbm as lgb
from onnxmltools import convert_lightgbm
from onnxmltools.convert.common.data_types import FloatTensorType
import onnxruntime as rt
import numpy as np

# 1. แปลง TrustGraph Model (เดิม K-Sentinel)
# ฟีเจอร์รวม: 5 telemetry + 3 auth dummy + 16 graph embeddings = 24 features
sentinel_model_file = "models/trustgraph_lgbm.txt" if os.path.exists("models/trustgraph_lgbm.txt") else "models/k_sentinel_lgbm.txt"
sentinel_model = lgb.Booster(model_file=sentinel_model_file)
initial_type_sentinel = [("float_input", FloatTensorType([None, 24]))]

onnx_sentinel = convert_lightgbm(
    sentinel_model,
    initial_types=initial_type_sentinel,
    target_opset=14
)

with open("models/trustgraph.onnx", "wb") as f:
    f.write(onnx_sentinel.SerializeToString())
print("Exported: models/trustgraph.onnx")

# 2. แปลง FlowSense Model (เดิม WealthPilot)
# ฟีเจอร์รวม: 6 cashflow features
wealth_model_file = "models/flowsense_lgbm.txt" if os.path.exists("models/flowsense_lgbm.txt") else "models/wealthpilot_lgbm.txt"
wealth_model = lgb.Booster(model_file=wealth_model_file)
initial_type_wealth = [("float_input", FloatTensorType([None, 6]))]

onnx_wealth = convert_lightgbm(
    wealth_model,
    initial_types=initial_type_wealth,
    target_opset=14
)

with open("models/flowsense.onnx", "wb") as f:
    f.write(onnx_wealth.SerializeToString())
print("Exported: models/flowsense.onnx")

# ทดสอบรันโมเดลผ่าน ONNX Runtime
sess = rt.InferenceSession("models/trustgraph.onnx")
dummy_input = np.random.rand(1, 24).astype(np.float32)
input_name = sess.get_inputs()[0].name
label_name = sess.get_outputs()[1].name # ความน่าจะเป็น
pred_onx = sess.run([label_name], {input_name: dummy_input})[0]
print("ONNX Inference Verification Success. Sample output:", pred_onx)