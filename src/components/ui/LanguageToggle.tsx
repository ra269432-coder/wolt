"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center h-[34px] bg-white border-2 border-blue-600 rounded-[8px] overflow-hidden ml-4">
      <button
        onClick={() => setLanguage('bn')}
        className={`px-3 h-full flex items-center justify-center font-bold text-sm transition-colors ${
          language === 'bn' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'
        }`}
      >
        বাং
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 h-full flex items-center justify-center font-bold text-sm transition-colors ${
          language === 'en' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'
        }`}
      >
        EN
      </button>
    </div>
  );
}
