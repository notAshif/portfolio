"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  email?: string;
  resumeUrl?: string;
}

export default function HeroSection({
  name = "Asif Shah",
  tagline = "Designing and building products for startups.",
  email = "asifshah@gmail.com",
  resumeUrl = "...",
}: HeroSectionProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setToastMessage(`Email copied ${email}!`);
      setTimeout(() => {
        setToastMessage(null);
      }, 2500);
    } catch (err) {
      console.error("Failed to copy email:", err);
      setToastMessage("Failed to copy email");
      setTimeout(() => setToastMessage(null), 2500);
    }
  };

  return (
    <section className="sticky top-0 z-10 flex h-screen min-h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-[#F5F5F5] py-10 select-none sm:min-h-[720px] sm:py-12">
      <div className="absolute inset-0 bg-[url('/hero-lines-group.svg')] bg-top bg-cover bg-no-repeat opacity-35 pointer-events-none" />
      <div className="relative z-10 w-full max-w-[min(416px,calc(100vw-48px))] px-4 sm:px-6 flex flex-col items-start gap-4 mx-auto">
        <div className="relative mx-auto aspect-[235/346] w-full max-w-[235px] sm:mx-0">
          <Image
            src="/hero-illustration.png"
            alt={`Illustrated portrait of ${name}`}
            fill
            sizes="(max-width: 640px) 75vw, 235px"
            className="object-contain"
            priority
          />
        </div>

        <div className="w-full pl-2">
          <p className="text-[18.5px] font-medium leading-[29px] tracking-[-0.032em] text-[#0B0909]">
            <span className="font-semibold text-[#0B0909]">{name}</span>
            <span className="text-[#0B0909]/60">&nbsp;— {tagline}</span>
          </p>
          <div className="mt-[25px] flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group relative inline-flex min-h-[30px] cursor-pointer items-center justify-center gap-1.5 rounded-full border-0 bg-[#000000] px-[15px] py-[5px] text-[11px] font-medium tracking-normal text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_10px_20px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.12)] transition-colors duration-200 hover:bg-[#1a1a1a]"
            >
              <span>Copy email</span>
            </button>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative inline-flex min-h-[30px] cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#e5e5e5] px-[15px] py-[5px] text-[11px] font-medium tracking-normal text-[#0B0909]/80 no-underline shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06)] transition-colors duration-200 hover:bg-[#dcdcdc]"
            >
              <Plus className="h-3.5 w-3.5 text-[#0B0909]/70" />
              <span>Resume</span>
            </a>
          </div>

          <div className="mt-2.5 min-h-[22px]">
            {toastMessage ? (
              <p
                className="text-[11px] font-medium text-[#0B0909]/60"
                aria-live="polite"
              >
                {toastMessage}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
