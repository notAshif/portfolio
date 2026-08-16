import Image from "next/image";

interface FeaturedProjectCardProps {
  title: string;
  category: string;
  year: string;
  imageSrc: string;
  imageAlt: string;
}

export default function FeaturedProjectCard({
  title,
  category,
  year,
  imageSrc,
  imageAlt,
}: FeaturedProjectCardProps) {
  return (
    <article className="mb-8 overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-sm sm:mb-12 sm:rounded-[32px]">
      <div className="relative aspect-[16/10] w-full bg-[#f5f5f5]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex items-end justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-8 sm:py-6">
        <div className="min-w-0">
          <h2 className="font-sans text-base font-semibold text-[#111111] sm:text-lg">
            {title}
          </h2>
          <p className="mt-0.5 text-sm text-[#888888]">{category}</p>
        </div>
        <span className="shrink-0 text-sm text-[#888888]">{year}</span>
      </div>
    </article>
  );
}
