"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Check, Plus } from "lucide-react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const email = "asifshah.dev@gmail.com";

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      if (video.paused) {
        video.play().catch((err) => console.log("Video playback error:", err));
      }
    }
  }, []);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const handleOpenResume = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 py-12 overflow-hidden select-none bg-background text-foreground">
      {/* Background Leaf Video (Strictly bounded inside HeroSection) */}
      <video
        key="hero-leaf-video"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover blur-[14px] scale-110 pointer-events-none z-0 opacity-50"
      >
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>

      {/* Background SVG Grid (hero-lines-group.svg strictly bounded inside HeroSection) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full bg-[url('/hero-lines-group.svg')] bg-cover bg-no-repeat bg-center pointer-events-none z-0 opacity-100"
      />

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-xl mx-auto space-y-5">
        {/* Hero Illustration */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src="/hero-illustration.png"
            alt="Hero Illustration"
            fill
            priority
            sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 240px"
            className="object-contain"
          />
        </div>

        {/* Bio Inline Text */}
        <div className="px-2">
          <p className="text-xs sm:text-sm md:text-[15px] font-sans text-accent leading-relaxed tracking-tight text-center">
            <strong className="font-semibold text-foreground">Asif Shah</strong>
            <span className="mx-1.5 opacity-60">—</span>
            <span>Building AI-powered products and modern web experiences</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-2.5 pt-1">
          <button
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="bg-foreground text-background text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground active:scale-95 cursor-pointer shadow-sm"
          >
            {copied ? "Copied!" : "Copy email"}
          </button>

          <button
            onClick={handleOpenResume}
            aria-label="Open resume"
            className="bg-foreground/[0.05] hover:bg-foreground/10 text-accent hover:text-foreground border border-foreground/[0.06] text-xs font-medium px-3.5 py-2 rounded-full transition-all duration-200 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground active:scale-95 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2]" />
            <span>Resume</span>
          </button>
        </div>
      </div>

      {/* Toast Feedback */}
      {copied && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-foreground text-background px-4 py-2 rounded-full text-xs font-sans flex items-center gap-2 shadow-md animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
          <span>Email copied to clipboard</span>
        </div>
      )}
    </section>
  );
}
