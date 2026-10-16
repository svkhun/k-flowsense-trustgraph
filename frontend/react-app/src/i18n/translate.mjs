import english from './en.js';
export function translate(text, language = 'th', params = {}) {
  if (typeof text !== 'string') return text;
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (!normalized) return text;
  const translated = language === 'en' ? (english[normalized] ?? normalized) : normalized;
  const rendered = translated.replace(/\{(\w+)\}/g, (match, key) => params[key] ?? match);
  return (text.match(/^\s+/)?.[0] ?? '') + rendered + (text.match(/\s+$/)?.[0] ?? '');
}
