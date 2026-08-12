import EditorialCanvas from "./client/editorial-canvas";

export default function EditorialSection() {
  return (
    <section className="relative z-20 w-full -mt-[60px] rounded-t-[60px] bg-[#F5F5F5] border-t border-black/5 shadow-[0_-20px_50px_rgba(0,0,0,0.04)] overflow-hidden" id="about">
      <EditorialCanvas />
    </section>
  );
}
