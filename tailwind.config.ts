import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Ana renkler
        "text-primary": "var(--text-primary)",    
        "text-secondary": "var(--text-secondary)", 
        "accent": "var(--accent)",                
        "background": "var(--background)",        
        "background-light": "var(--background-light)",
        'tech-bg': 'rgba(45, 212, 191, 0.15)',
        'tech-tag': 'rgba(20, 184, 166, 0.1)',
      },
      fontSize: {
        // Mobil öncelikli yaklaşım
        'xs': ['12px', '16px'],     
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['28px', '36px'],    
        '4xl': ['32px', '40px'],    
        // Desktop boyutları
        'd-3xl': ['32px', '40px'],  
        'd-4xl': ['36px', '44px'],  
      },
      spacing: {
        'nav': '350px',  // Sidebar genişliği
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config; 