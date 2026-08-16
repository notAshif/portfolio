import SideHeader from "./components/side-header";
import HeroSection from "./components/client/hero-section";
import EditorialSection from "./components/editorial-section";
import SkyAtmosphere from "./components/client/sky-atmosphere";

export default function Home() {
  return (
    <SkyAtmosphere>
      <main className="relative z-10 w-full">
        <SideHeader />
        <HeroSection />
        <EditorialSection />
      </main>
    </SkyAtmosphere>
  );
}
