export const projectsData = {
  title: {
    en: 'Projects',
    tr: 'Projeler'
  },
  data: {
    portfolio: {
        en: {
          title: 'Personal Portfolio Website with Next.js (This Website)',
          bullets: [
            '<strong>Designed and developed a modern portfolio website</strong> using <strong>Next.js</strong> and <strong>TypeScript</strong>, implementing <em>clean architecture and type safety</em>.',
            '<strong>Created a responsive and animated UI</strong> with <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong>, ensuring <em>smooth transitions and optimal viewing experience</em> across all devices.',
            '<strong>Implemented multilingual support</strong> (English/Turkish) with <em>context-based language switching</em> and optimized content management.',
          ]
        },
        tr: {
          title: 'Next.js ile Kişisel Portföy Web Sitesi (Bu Web Sitesi)',
          bullets: [
            "<strong>Next.js ve TypeScript kullanarak modern bir portföy web sitesi</strong> tasarladım ve geliştirdim, <em>ölçeklenebilir mimari</em> ve <em>tip güvenliği sağlayan kod yapısı</em> uyguladım.",
            "<strong>Tailwind CSS ve Framer Motion ile responsive ve animasyonlu bir UI</strong> oluşturdum, tüm cihazlarda <em>pürüzsüz geçişler ve optimal görüntüleme deneyimi</em> sağladım.",
            "<strong>Çoklu dil desteği</strong> (İngilizce/Türkçe) uyguladım, <em>context tabanlı dil değiştirme</em> ve optimize edilmiş içerik yönetimi sağladım."
          ]
        },
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Context API', 'Internationalization'],
        links: {
          github: 'https://github.com/talhaesinti/portfolio',
        }
      },
    tourism: {
      en: {
        title: 'Dynamic and Responsive Tourism Website (Freelance Project – Built from Scratch)',
        bullets: [
          '<strong>Developed a fully responsive and dynamic tourism website</strong> from scratch, utilizing <strong>Next.js</strong> for frontend and <strong>Django</strong> for backend, ensuring <em>seamless UI-backend integration</em>.',
          '<strong>Optimized SEO and performance</strong> with <em>server-side rendering (SSR), caching, and image compression</em>, achieving <strong>90+ scores on Google Lighthouse tests</strong>.',
          '<strong>Designed and deployed scalable backend architecture</strong> with <strong>PostgreSQL</strong>, implementing <em>efficient data management and API documentation (Swagger)</em>.',
          '<strong>Deployed on DigitalOcean</strong> with <em>CI/CD pipelines</em>, ensuring <em>high availability and seamless updates</em>.'
        ]
      },
      tr: {
        title: 'Dinamik ve Responsive Turizm Web Sitesi (Freelance Proje – Sıfırdan Geliştirildi)',
        bullets: [
          '<strong>Sıfırdan tam responsive ve dinamik bir turizm web sitesi geliştirdim</strong>, frontend için <strong>Next.js</strong> ve backend için <strong>Django</strong> kullanarak <em>sorunsuz UI-backend entegrasyonu</em> sağladım.',
          '<strong>SEO ve performansı optimize ettim</strong>, <em>sunucu tarafı rendering (SSR), önbelleğe alma ve görüntü sıkıştırma</em> ile <strong>Google Lighthouse testlerinde 90+ puanlar</strong> elde ettim.',
          '<strong>PostgreSQL ile ölçeklenebilir backend mimarisi tasarladım ve dağıttım</strong>, <em>verimli veri yönetimi ve API dokümantasyonu (Swagger)</em> uyguladım.',
          '<strong>DigitalOcean üzerinde</strong> <em>CI/CD pipeline\'ları</em> ile dağıtım yaptım, <em>yüksek kullanılabilirlik ve sorunsuz güncellemeler</em> sağladım.'
        ]
      },
      tech: ['Next.js', 'Django', 'PostgreSQL', 'RESTful APIs', 'Swagger', 'DigitalOcean', 'CI/CD', 'Tailwind CSS', 'Python'],
      links: {
        github: 'https://github.com/talhaesinti/tour-backend',
        live: 'https://tourism-website.com',
        frontend: 'https://github.com/talhaesinti/goldenpalace'
      }
    },
    business: {
      en: {
        title: 'Modern Business Website with Admin Panel (Freelance Project)',
        bullets: [
          '<strong>Developed a fully responsive business website</strong> using <strong>Next.js</strong>, featuring a <strong>custom admin panel</strong> for seamless content management.',
          '<strong>Designed a component-based architecture</strong>, ensuring <em>scalability, maintainability, and efficient UI updates</em>.',
          '<strong>Implemented server-side rendering (SSR) and PostgreSQL backend</strong>, optimizing <em>performance, SEO, and data efficiency</em>.'
        ]
      },
      tr: {
        title: 'Modern İş Web Sitesi ve Yönetim Paneli (Freelance Proje)',
        bullets: [
          '<strong>Next.js kullanarak tam responsive bir iş web sitesi geliştirdim</strong>, <strong>özel yönetim paneli</strong> ile sorunsuz içerik yönetimi sağladım.',
          '<strong>Bileşen tabanlı bir mimari tasarladım</strong>, <em>ölçeklenebilirlik, sürdürülebilirlik ve verimli UI güncellemeleri</em> sağladım.',
          '<strong>Sunucu tarafı rendering (SSR) ve PostgreSQL backend uyguladım</strong>, <em>performans, SEO ve veri verimliliğini</em> optimize ettim.'
        ]
      },
      tech: ['Next.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'Authentication', 'Admin Panel', 'Responsive Design'],
      links: {
        github: 'https://github.com/username/business-website',
        live: 'https://business-website.com'
      }
    },
    matlab: {
      en: {
        title: 'Prediction with Neural Network on MATLAB (School Project)',
        bullets: [
          '<strong>Developed a basic neural network model</strong> in <strong>MATLAB</strong> for <em>financial exchange rate forecasting</em>, applying fundamental machine learning techniques.',
          '<strong>Processed and prepared financial data</strong>, ensuring <em>clean and structured inputs</em> for training.',
          '<strong>Tested model performance</strong> and analyzed <em>prediction accuracy</em> to understand key factors affecting results.'
        ]
      },
      tr: {
        title: 'MATLAB ile Sinir Ağı Kullanarak Tahmin (Okul Projesi)',
        bullets: [
          '<strong>MATLAB\'da temel bir sinir ağı modeli geliştirdim</strong>, <em>finansal döviz kuru tahmini</em> için temel makine öğrenimi tekniklerini uyguladım.',
          '<strong>Finansal verileri işledim ve hazırladım</strong>, eğitim için <em>temiz ve yapılandırılmış girdiler</em> sağladım.',
          '<strong>Model performansını test ettim</strong> ve sonuçları etkileyen temel faktörleri anlamak için <em>tahmin doğruluğunu</em> analiz ettim.'
        ]
      },
      tech: ['MATLAB', 'Neural Networks', 'Data Preprocessing', 'Feature Engineering', 'Time Series Analysis', 'Financial Forecasting'],
      links: {
        github: 'https://github.com/talhaesinti/prediction-with-neural-network',
        live: null
      }
    },
   
  }
}; 