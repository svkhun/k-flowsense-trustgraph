import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
export default function LanguageSettings() {
  const { language, setLanguage } = useLanguage();
  return <div className="language-settings" role="group" aria-label="ภาษาเว็บไซต์ / Website language">
    <Languages size={16} aria-hidden="true" />
    <button type="button" lang="th" aria-pressed={language === 'th'} onClick={() => setLanguage('th')}>ไทย</button>
    <button type="button" lang="en" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>English</button>
  </div>;
}
