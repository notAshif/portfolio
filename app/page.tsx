import SideHeader from "./components/side-header";
import HeroSection from "./components/client/hero-section";
import EditorialSection from "./components/editorial-section";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#F5F5F5]">
      <SideHeader />
      <HeroSection />
      <EditorialSection />
    </main>
  );
}

