interface PageHeadingProps {
  title: string;
  subtitle?: string;
}

export default function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <header className="mb-8 sm:mb-12 xl:mb-16">
      <h1 className="font-serif text-3xl italic tracking-tight text-[#111111] sm:text-4xl xl:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <span className="mt-2 block text-sm font-medium tracking-[-0.02em] text-[#0B0909]/60 sm:mt-3 sm:text-[15px]">
          {subtitle}
        </span>
      ) : null}
    </header>
  );
}
