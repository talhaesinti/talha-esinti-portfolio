"use client";

import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import MouseEffect from "@/components/MouseEffect";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <MouseEffect />
      <Sidebar />
      <MainContent />
    </div>
  );
} 