import SideHeader from "./components/side-header";
import HeroSection from "./components/client/hero-section";
import EditorialSection from "./components/editorial-section";
"use client";

import SideHeader from "./component/SideHeader";
import HeroSection from "./component/sections/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#F5F5F5]">
    <main className="relative min-h-screen w-full bg-background text-foreground">
      <SideHeader />
      <HeroSection />
      <EditorialSection />
      <HeroSection />
    </main>
  );
}


