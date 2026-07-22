"use client";

import SideHeader from "./component/SideHeader";
import HeroSection from "./component/sections/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground">
      <SideHeader />
      <HeroSection />
    </main>
  );
}

