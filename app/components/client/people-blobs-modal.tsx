"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface PeopleBlobsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const blobCards = [
  { id: 1, type: "color", color: "#FF5F5E", label: "Product & Craft" },
  { id: 2, type: "color", color: "#3B82F6", label: "Crypto Native" },
  { id: 3, type: "color", color: "#10B981", label: "Hyperonline Culture" },
  { id: 4, type: "color", color: "#F59E0B", label: "Onchain Systems" },
  { id: 5, type: "color", color: "#8B5CF6", label: "Design Direction" },
  { id: 6, type: "color", color: "#EC4899", label: "Community & Vision" },
];

export default function PeopleBlobsModal({
  isOpen,
  onClose,
}: PeopleBlobsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDFCFC]/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in">
      <div
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close people overlay"
        className="absolute top-6 right-8 z-10 p-2 text-[#111111]/60 hover:text-[#111111] transition-colors rounded-full bg-white/60 shadow-sm border border-black/5 cursor-pointer"
      >
        <X size={20} />
      </button>

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center gap-8 text-center pointer-events-auto">
        <h3 className="font-instrument-serif italic text-4xl sm:text-5xl text-[#111111] tracking-tight">
          Building for people on the internet
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl mt-4">
          {blobCards.map((card) => (
            <div
              key={card.id}
              className="group relative aspect-[4/3] rounded-2xl p-4 flex flex-col justify-end bg-white border border-black/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div
                className="absolute top-3 right-3 w-4 h-4 rounded-full opacity-80 group-hover:scale-125 transition-transform"
                style={{ backgroundColor: card.color }}
              />
              <span className="font-sans text-xs font-semibold text-[#111111] text-left">
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
