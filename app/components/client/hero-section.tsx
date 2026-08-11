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
  tagline = "designing best-in-class products for hyperonline startups",
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
    <section className="sticky top-0 z-10 w-full h-screen min-h-[720px] flex flex-col items-center justify-center overflow-hidden bg-[#F5F5F5] select-none py-12">
      <div className="absolute inset-0 bg-[url('/hero-lines-group.svg')] bg-top bg-cover bg-no-repeat opacity-35 pointer-events-none" />
      <div className="relative z-10 w-full max-w-[min(416px,calc(100vw-48px))] px-4 sm:px-6 flex flex-col items-start gap-4 mx-auto">
      
        <div className="w-full max-w-[235px] aspect-[235/346] relative mx-auto sm:mx-0">
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
          <div className="flex flex-wrap items-center gap-2.5 mt-[25px]">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group relative inline-flex items-center justify-center gap-1.5 min-h-[30px] px-[15px] py-[5px] rounded-full bg-[#000000] text-white text-[11px] font-medium tracking-normal shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_10px_20px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.12)] transition-all duration-200 ease-linear hover:scale-105 cursor-pointer border-0"
            >
              <span>Copy email</span>
            </button>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative inline-flex items-center justify-center gap-1.5 min-h-[30px] px-[15px] py-[5px] rounded-full bg-[#e5e5e5] text-[#0B0909]/80 text-[11px] font-medium tracking-normal shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-200 ease-linear hover:scale-105 active:scale-95 cursor-pointer no-underline"
            >
              <Plus className="w-3.5 h-3.5 text-[#0B0909]/70 transition-transform duration-300 ease-out group-hover:rotate-90" />
              <span>Resume</span>
            </a>
          </div>

          <div className="min-h-[22px] mt-2.5">
            {toastMessage && (
              <p
                className="text-[11px] text-[#0B0909]/60 font-medium transition-all duration-200"
                aria-live="polite"
              >
                {toastMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
