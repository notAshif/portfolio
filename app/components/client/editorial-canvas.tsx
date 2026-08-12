"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PeopleBlobsModal from "./people-blobs-modal";
import {
  StartupCard,
  StartupStack,
  TeamBadgeItem,
  TeamBadges,
  VibecodingPopup,
  PokerCardsPopup,
} from "./editorial-widgets";

const startupCards: StartupCard[] = [
  { name: "Eido Labs", bg: "#111111", badgeColor: "#3B82F6" },
  { name: "Pills Trade", bg: "#10B981", badgeColor: "#10B981" },
  { name: "Tike", bg: "#F59E0B", badgeColor: "#F59E0B" },
];

const teamBadges: TeamBadgeItem[] = [
  { name: "Safe", bg: "#10B981", letter: "S" },
  { name: "OpenBlock", bg: "#06B6D4", letter: "O" },
  { name: "Cruize", bg: "#6366F1", letter: "C" },
];

export default function EditorialCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | HTMLParagraphElement | null)[]>([]);
  const [activeStartupIndex, setActiveStartupIndex] = useState(0);
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isEngaged, setIsEngaged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerTop = windowHeight * 0.72;
      const triggerBottom = windowHeight * 0.28;

      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsEngaged(true);
        const totalHeight = rect.height;
        const currentScroll = windowHeight - rect.top;
        const calcProgress = Math.min(
          Math.max(currentScroll / (totalHeight + windowHeight * 0.5), 0),
          1
        );
        setProgress(calcProgress);
      } else {
        setIsEngaged(false);
      }

      lineRefs.current.forEach((el) => {
        if (!el) return;
        const lineRect = el.getBoundingClientRect();

        if (lineRect.top < triggerBottom) {
          el.style.setProperty("--line-fill", "100%");
          el.classList.add("is-line-past");
        } else if (lineRect.top > triggerTop) {
          el.style.setProperty("--line-fill", "0%");
          el.classList.remove("is-line-past");
        } else {
          const fill =
            ((triggerTop - lineRect.top) / (triggerTop - triggerBottom)) * 100;
          const clampedFill = Math.min(Math.max(fill, 0), 100);
          el.style.setProperty("--line-fill", `${clampedFill}%`);
          el.classList.remove("is-line-past");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cycleStartup = () => {
    setActiveStartupIndex((prev) => (prev + 1) % startupCards.length);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[699px] mx-auto px-6 sm:px-8 pt-28 pb-24 select-none text-[#111111]"
    >
      <div
        className={`fixed top-1/2 right-6 sm:right-10 transform -translate-y-1/2 w-0.5 h-28 bg-black/10 rounded-full z-30 transition-opacity duration-300 ${
          isEngaged ? "opacity-90" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="w-full bg-[#111111] rounded-full transition-all duration-150 origin-bottom"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
          isEngaged
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#111111] text-white font-sans text-sm font-medium rounded-full shadow-2xl hover:scale-105 transition-transform"
        >
          <span>See work</span>
          <span className="text-white/80">↘</span>
        </Link>
      </div>

      <div className="flex flex-col gap-10 font-sans text-2xl sm:text-3xl font-medium tracking-[-0.048em] leading-[1.22]">
        <p ref={(el) => { lineRefs.current[0] = el; }} className="reading-line">
          I build for the internet’s most online{" "}
          <span className="font-instrument-serif italic text-3xl sm:text-4xl text-[#111111] underline decoration-black/20 underline-offset-4">
            corners.
          </span>
        </p>

        <p ref={(el) => { lineRefs.current[1] = el; }} className="reading-line">
          The places where software, speculation, and culture{" "}
          <span className="inline-block transition-all duration-500 hover:blur-none opacity-90">
            blur
          </span>{" "}
          into one another.
        </p>

        <p ref={(el) => { lineRefs.current[2] = el; }} className="reading-line">
          I like interfaces with{" "}
          <span className="relative inline-block font-semibold text-[#111111]">
            <mark className="bg-black/10 px-1.5 py-0.5 rounded text-[#111111]">
              consequence
            </mark>
            <span className="text-black/40">..</span>
          </span>
          <br />
          Where every action carries weight, whether that is capital,
          coordination, or attention.
        </p>

        <p ref={(el) => { lineRefs.current[3] = el; }} className="reading-line">
          My work is about making{" "}
          <span className="font-semibold text-[#111111]">complexity</span> feel{" "}
          <span className="font-instrument-serif italic text-3xl sm:text-4xl text-[#111111] border border-black/20 px-2 py-0.5 rounded-md inline-block">
            desirable
          </span>{" "}
          without dumbing it down.
        </p>

        <p ref={(el) => { lineRefs.current[4] = el; }} className="reading-line">
          Usually for crypto natives. Always for{" "}
          <button
            type="button"
            onClick={() => setIsPeopleModalOpen(true)}
            className="inline-block font-semibold underline decoration-black/60 underline-offset-4 text-[#111111] hover:text-black/70 cursor-pointer border-0 bg-transparent p-0"
          >
            people
          </button>
          .
        </p>

        <div
          ref={(el) => { lineRefs.current[5] = el; }}
          className="reading-line flex flex-col gap-1"
        >
          <span>Before this, I spent the last few years building</span>
          <div className="flex items-center gap-3 my-1">
            <StartupStack
              cards={startupCards}
              activeIndex={activeStartupIndex}
              onCycle={cycleStartup}
            />
            <span className="font-semibold text-[#111111]">products</span>
            <span>spanning trading, AI,</span>
          </div>
          <span>
            and social crypto, mostly steering product, design, and direction.
          </span>
        </div>

        <div
          ref={(el) => { lineRefs.current[6] = el; }}
          className="reading-line flex flex-col gap-1"
        >
          <div className="flex items-center gap-2">
            <span>Before that, I worked with teams like</span>
            <TeamBadges badges={teamBadges} />
          </div>
          <span>designing products and systems for the onchain world.</span>
        </div>

        <div className="pt-6 border-t border-black/10 text-xl sm:text-2xl leading-relaxed">
          <div
            ref={(el) => { lineRefs.current[7] = el; }}
            className="reading-line"
          >
            I’m currently <VibecodingPopup /> and playing <PokerCardsPopup />{" "}
            while looking for the next role. Looking to keep building exciting
            things with people I enjoy working with. Reach out via{" "}
            <a
              href="mailto:asifshah@gmail.com"
              className="font-semibold underline decoration-black/60 underline-offset-4 text-[#111111]"
            >
              email
            </a>{" "}
            or dm on{" "}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline decoration-black/60 underline-offset-4 text-[#111111]"
            >
              X
            </a>
            .
          </div>
        </div>
      </div>

      <PeopleBlobsModal
        isOpen={isPeopleModalOpen}
        onClose={() => setIsPeopleModalOpen(false)}
      />
    </div>
  );
}
