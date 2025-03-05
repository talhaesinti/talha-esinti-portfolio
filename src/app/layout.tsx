import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talha Esinti - Frontend Developer",
  description: "Personal portfolio website of Talha Esinti",
};

// Sayfa yenilendiğinde en başa atlamayı sağlayan bileşen
const ScrollToTop = () => {
  return (
    <script dangerouslySetInnerHTML={{
      __html: `
        window.onload = function() {
          window.scrollTo(0, 0);
        }
      `
    }} />
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <ScrollToTop />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 