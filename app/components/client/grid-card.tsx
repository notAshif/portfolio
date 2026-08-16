interface GridCardProps {
  title: string;
  description: string;
  meta?: string;
  accent?: string;
}

export default function GridCard({
  title,
  description,
  meta,
  accent = "#3B82F6",
}: GridCardProps) {
  return (
    <article className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:aspect-[4/3] sm:p-5">
      <div
        className="absolute top-4 right-4 size-4 rounded-full opacity-80 transition-transform group-hover:scale-125"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />
      {meta ? (
        <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-[#0B0909]/45">
          {meta}
        </p>
      ) : null}
      <h2 className="font-sans text-lg font-semibold text-[#111111]">{title}</h2>
      <p className="mt-1 text-sm leading-relaxed text-[#0B0909]/60">{description}</p>
    </article>
  );
}
