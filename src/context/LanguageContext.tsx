"use client";

import React, { createContext, useContext, useState } from 'react';

// Language tipini doğrudan burada tanımlayalım
type Language = 'en' | 'tr';

// Kullanılmayan tipleri kaldıralım
// type NavKeys = keyof typeof navigationData.en.nav;
// type TranslationKey = keyof typeof translations.tr;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 