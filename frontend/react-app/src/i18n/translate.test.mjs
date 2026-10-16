import test from 'node:test';
import assert from 'node:assert/strict';
import english from './en.js';
import { translate } from './translate.mjs';

test('Thai remains the default and English is explicitly selected', () => {
  assert.equal(translate('ออมเงิน'), 'ออมเงิน');
  assert.equal(translate('ออมเงิน', 'en'), 'Save');
  assert.equal(translate('ACC_0100', 'en'), 'ACC_0100');
});

test('a stored message can be rendered in either language without losing its amount', () => {
  const key = 'แยกเงินสมมติ ฿{amount} เข้าบัญชีออมแล้ว';
  const params = { amount: '150.00' };
  assert.equal(translate(key, 'th', params), 'แยกเงินสมมติ ฿150.00 เข้าบัญชีออมแล้ว');
  assert.equal(translate(key, 'en', params), 'Moved ฿150.00 in demo funds to savings.');
});

test('translation preserves word boundaries around inline values', () => {
  assert.equal(translate(' พบ ', 'en'), ' Showing ');
  assert.equal(translate(' ', 'en'), ' ');
  assert.equal(translate('ดูรายละเอียด ', 'en') + 'ACC_0100', 'View details ACC_0100');
});

test('React children and numeric values pass through unchanged', () => {
  const children = { type: 'span', props: { children: 123 } };
  assert.equal(translate(children, 'en'), children);
  assert.equal(translate(123, 'en'), 123);
  assert.equal(translate(null, 'en'), null);
});

test('all English catalog values are translated and preserve interpolation fields', () => {
  for (const [thai, en] of Object.entries(english)) {
    assert.ok(en.length > 0, thai);
    assert.equal(/[\u0E01-\u0E3A\u0E40-\u0E5B]/.test(en), false, thai);
    assert.deepEqual([...thai.matchAll(/\{(\w+)\}/g)].map(match => match[1]).sort(), [...en.matchAll(/\{(\w+)\}/g)].map(match => match[1]).sort(), thai);
  }
});
