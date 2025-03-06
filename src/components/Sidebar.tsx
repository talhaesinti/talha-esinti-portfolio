"use client";

import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { navigationData, navItems, socialLinks as navSocialLinks } from '@/data/translations/navigation';

// Sosyal medya ikonlarını bir nesne olarak tanımlayalım
const socialIcons = {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaYoutube
};

// Sosyal medya linklerini navigation.ts'den alıp ikonları ekleyelim
const socialLinks = navSocialLinks.map(link => {
  return {
    ...link,
    icon: socialIcons[link.icon as keyof typeof socialIcons]
  };
});

const Sidebar = () => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // navItems'ı dil seçimine göre oluştur
  const localizedNavItems = navItems.map(item => ({
    ...item,
    displayName: navigationData[language].nav[item.name as keyof typeof navigationData[typeof language]['nav']]
  }));

  // Scroll pozisyonuna göre aktif sekmeyi belirle
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.name);
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Sayfa sonuna yakınsa, son sekmeyi aktif et
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection(sections[sections.length - 1]); // Son sekme (contact)
        return;
      }
      
      // Normal scroll algılama
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // İlk yükleme için çağır
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Language Toggle */}
      <div className="hidden md:block">
        <LanguageToggle variant="desktop" />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header - menü açıkken transparent, kapalıyken blur */}
        <div className={`
          fixed top-0 left-0 right-0 h-16 z-50
          ${isMenuOpen 
            ? 'bg-transparent' 
            : 'bg-background/95 backdrop-blur-sm'
          }
          transition-colors duration-300
        `}>
          <div className="h-full px-4 flex items-center justify-between">
            <LanguageToggle variant="mobile" />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-accent hover:bg-accent/10 transition-colors rounded-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - her zaman blur efekti var */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-30"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Content */}
        <motion.div
          initial={false}
          animate={{ x: isMenuOpen ? 0 : '-100%' }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed top-0 left-0 h-screen bg-background z-40 w-[min(75vw,300px)] flex flex-col p-6 pt-20"
        >
          <nav>
            <ul className="space-y-6">
              {localizedNavItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center text-accent hover:brightness-110 transition-colors py-2"
                  >
                    <span className="text-base tracking-widest font-mono">
                      {item.displayName}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto mb-8 space-y-6">
            <div className="flex items-center justify-start space-x-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <button 
              className="w-full px-4 py-2 border border-accent text-accent hover:bg-accent/10 transition-colors rounded text-sm font-mono"
            >
              {navigationData[language].cv.download}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="fixed hidden md:flex top-0 left-0 h-screen w-[300px] lg:w-[350px] bg-primary z-40 flex-col p-6 md:p-8 lg:p-12 lg:pl-16 border-r border-[#8892b0]/10 overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Üst Kısım: Ad ve Başlıklar */}
          <div className="mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
              Talha Esinti
            </h1>
            <p className="text-base lg:text-lg text-text-secondary">
              {navigationData[language].header.role}
            </p>
            <p className="text-xs lg:text-sm text-text-secondary mt-1">
              {navigationData[language].header.subtitle}
            </p>
          </div>
          
          {/* Orta Kısım: Navigasyon Menüsü */}
          <nav>
            <ul className="space-y-5">
              {localizedNavItems.map((item) => (
                <li key={item.name} className="group relative">
                  {/* Aktif sekme çubuğu */}
                  {activeSection === item.name && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <Link 
                    href={item.href}
                    className="flex items-center text-accent hover:brightness-110 transition-colors py-1 pl-4"
                  >
                    <span className="text-sm lg:text-base tracking-widest font-mono">
                      {item.displayName}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Alt Kısım: Sosyal Medya ve CV */}
          <div className="mt-auto pt-10 pb-6">
            <div className="flex items-center justify-between mb-6 w-full">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors p-2"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <button 
              className="w-full px-3 py-2 border border-accent text-accent hover:bg-accent/10 transition-colors rounded text-xs font-mono"
            >
              {navigationData[language].cv.download}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar; 