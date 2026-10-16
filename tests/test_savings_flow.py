import copy
import unittest
from datetime import datetime

from fastapi import HTTPException

from src.app_v2 import (
    BEHAVIORAL_PROFILES_CACHE,
    LIVE_ACCOUNT_STATES,
    MicroSweepRequest,
    SavingsPreferenceRequest,
    VaultWithdrawalRequest,
    get_savings_capacity,
    set_savings_preference,
    trigger_micro_sweep,
    withdraw_savings,
)


class SavingsFlowTests(unittest.TestCase):
    account_id = "ACC_0100"

    def setUp(self):
        self.original_state = copy.deepcopy(LIVE_ACCOUNT_STATES[self.account_id])
        LIVE_ACCOUNT_STATES[self.account_id].update(
            main_balance=40000.0,
            vault_balance=1000.0,
            total_swept=0.0,
            daily_spent_today=200.0,
            savings_enabled=False,
        )

    def tearDown(self):
        LIVE_ACCOUNT_STATES[self.account_id] = self.original_state

    def test_capacity_reserves_bills_living_cost_and_buffer(self):
        profile = BEHAVIORAL_PROFILES_CACHE[self.account_id]
        state = LIVE_ACCOUNT_STATES[self.account_id]
        capacity = get_savings_capacity(state, profile, datetime(2026, 10, 16))
        self.assertEqual(capacity["days_to_payday"], 12)
        self.assertAlmostEqual(
            capacity["safe_to_save"],
            max(0, 40000 - capacity["projected_living_cost"] - capacity["fixed_commitments"] - capacity["emergency_buffer"]),
        )
        self.assertEqual(capacity["max_sweep_amount"], 500.0)

    def test_sweep_requires_opt_in_and_rejects_unsafe_amount(self):
        payload = MicroSweepRequest(account_id=self.account_id)
        with self.assertRaises(HTTPException):
            trigger_micro_sweep(payload, x_idempotency_key=None)
        set_savings_preference(SavingsPreferenceRequest(account_id=self.account_id, enabled=True))
        with self.assertRaises(HTTPException):
            trigger_micro_sweep(MicroSweepRequest(account_id=self.account_id, custom_sweep_amount=501), x_idempotency_key=None)
        with self.assertRaises(HTTPException):
            trigger_micro_sweep(MicroSweepRequest(account_id=self.account_id, custom_sweep_amount=0.001), x_idempotency_key=None)
        result = trigger_micro_sweep(payload, x_idempotency_key=None)
        self.assertLessEqual(result["swept_amount"], 500)
        self.assertAlmostEqual(result["new_main_balance"] + result["new_vault_balance"], 41000)

        LIVE_ACCOUNT_STATES[self.account_id]["main_balance"] = 500
        before = copy.deepcopy(LIVE_ACCOUNT_STATES[self.account_id])
        with self.assertRaises(HTTPException):
            trigger_micro_sweep(payload, x_idempotency_key=None)
        self.assertEqual(LIVE_ACCOUNT_STATES[self.account_id], before)

    def test_normal_withdrawal_allows_partial_or_full_without_savings_opt_in(self):
        with self.assertRaises(HTTPException):
            withdraw_savings(VaultWithdrawalRequest(account_id=self.account_id, amount=1000.01), x_idempotency_key=None)
        with self.assertRaises(HTTPException):
            withdraw_savings(VaultWithdrawalRequest(account_id=self.account_id, amount=0.001), x_idempotency_key=None)
        partial = withdraw_savings(VaultWithdrawalRequest(account_id=self.account_id, amount=250.0), x_idempotency_key=None)
        self.assertEqual(partial["withdrawn_amount"], 250.0)
        self.assertEqual(partial["new_vault_balance"], 750.0)
        full = withdraw_savings(VaultWithdrawalRequest(account_id=self.account_id, amount=750.0), x_idempotency_key=None)
        self.assertEqual(full["new_vault_balance"], 0.0)
        self.assertEqual(full["new_main_balance"], 41000.0)


if __name__ == "__main__":
    unittest.main()
