import React, { createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';
import { translate } from './translate.mjs';
const LanguageContext = createContext(null);
export const LANGUAGE_STORAGE_KEY = 'flowsense-showcase-language';
export function LanguageProvider({ children }) {
  const [language, updateLanguage] = useState(() => {
    try { return localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'th'; }
    catch { return 'th'; }
  });
  const setLanguage = useCallback(next => {
    if (next !== 'th' && next !== 'en') return;
    updateLanguage(next);
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, next); } catch { /* Preferences remain usable without storage. */ }
  }, []);
  const t = useCallback((text, params) => translate(text, language, params), [language]);
  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'th'
      ? 'FlowSense × TrustGraph | แนวคิดและการทำงานของแอปต้นแบบ'
      : 'FlowSense × TrustGraph | Prototype concept and implementation';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === 'th'
      ? 'แนวคิด ข้อมูล และการทำงานของ FlowSense × TrustGraph: แอปต้นแบบสำหรับวางแผนใช้เงิน ออมเงิน และตรวจความเสี่ยงก่อนโอน'
      : 'Explore the concept, data, and implementation of FlowSense × TrustGraph: a prototype for spending plans, savings, and pre-transfer risk review.';
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage requires LanguageProvider');
  return context;
}
