"use client";

import { useLanguage } from '@/context/LanguageContext';

interface LanguageToggleProps {
  variant?: 'mobile' | 'desktop'
}

const LanguageToggle = ({ variant = 'desktop' }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  const styles = {
    container: {
      mobile: "flex items-center bg-background/60 backdrop-blur-sm rounded-full p-0.5",
      desktop: "flex items-center bg-background/60 backdrop-blur-sm rounded-full p-0.5 fixed top-8 right-8 z-50"
    }
  };

  return (
    <div className={styles.container[variant]}>
      <button
        onClick={() => setLanguage('en')}
        className={`
          px-2.5 py-1 text-[11px] md:text-xs font-medium rounded-full 
          transition-colors duration-200 
          ${language === 'en' ? 'bg-accent text-background' : 'text-text-secondary'}
        `}
        disabled={language === 'en'}
      >
        EN
      </button>
      <div className="w-px h-2 md:h-2.5 bg-text-secondary/20 mx-0.5" />
      <button
        onClick={() => setLanguage('tr')}
        className={`
          px-2.5 py-1 text-[11px] md:text-xs font-medium rounded-full 
          transition-colors duration-200
          ${language === 'tr' ? 'bg-accent text-background' : 'text-text-secondary'}
        `}
        disabled={language === 'tr'}
      >
        TR
      </button>
    </div>
  );
};

export default LanguageToggle; 