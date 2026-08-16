import EditorialCanvas from "./client/editorial-canvas";
import SiteFooterClient from "./client/site-footer-client";

export default function EditorialSection() {
  return (
    <section
      className="relative z-20 w-full overflow-hidden rounded-t-[40px] border-t border-black/5 bg-[#F5F5F5] shadow-[0_-20px_50px_rgba(0,0,0,0.04)] sm:rounded-t-[60px]"
      id="about"
    >
      <EditorialCanvas />
      <SiteFooterClient />
    </section>
  );
}
