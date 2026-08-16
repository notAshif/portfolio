import SideHeader from "./side-header";
import SiteFooterClient from "./client/site-footer-client";
import SkyAtmosphere from "./client/sky-atmosphere";

interface ContentPageShellProps {
  children: React.ReactNode;
}

export default function ContentPageShell({ children }: ContentPageShellProps) {
  return (
    <SkyAtmosphere>
      <main className="relative z-10 w-full">
        <SideHeader />
        <section className="relative z-20 min-h-screen w-full overflow-hidden border-t border-black/5 bg-[#F5F5F5] pb-20 pt-24 shadow-[0_-20px_50px_rgba(0,0,0,0.04)] sm:pb-16 sm:pt-28 xl:pt-36">
          {children}
          <SiteFooterClient />
        </section>
      </main>
    </SkyAtmosphere>
  );
}
