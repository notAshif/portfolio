"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { WritingPiece } from "../../lib/content/writing";

interface WritingListProps {
  pieces: WritingPiece[];
}

interface WritingListItemProps {
  piece: WritingPiece;
  isHovered: boolean;
  isBlurred: boolean;
  onSelect: (piece: WritingPiece) => void;
  onHover: (id: string | null) => void;
}

function WritingListItem({
  piece,
  isHovered,
  isBlurred,
  onSelect,
  onHover,
}: WritingListItemProps) {
  return (
    <li className="border-b border-black/10">
      <button
        type="button"
        onClick={() => onSelect(piece)}
        onMouseEnter={() => onHover(piece.id)}
        onMouseLeave={() => onHover(null)}
        className={`group w-full py-4 text-left transition-all duration-300 hover:bg-black/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] sm:py-6 ${
          isBlurred ? "scale-[0.99] opacity-50 blur-[2px]" : ""
        } ${isHovered ? "scale-[1.01]" : ""}`}
      >
        <h2
          className={`font-sans text-sm font-semibold transition-colors duration-300 sm:text-[15px] ${
            isHovered ? "text-[#0B0909]" : "text-[#111111]"
          }`}
        >
          {piece.title}
        </h2>
        <p className="mt-1 text-sm leading-snug text-[#888888] sm:text-[15px]">
          {piece.excerpt}
        </p>
      </button>
    </li>
  );
}

interface WritingPanelProps {
  piece: WritingPiece;
  visible: boolean;
  onClose: () => void;
}

function WritingPanel({ piece, visible, onClose }: WritingPanelProps) {
  return (
    <div className="fixed inset-0 z-50" role="presentation">
      <button
        type="button"
        className={`absolute inset-0 cursor-default bg-[#FDFCFC]/85 backdrop-blur-md transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close writing"
      />

      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby="writing-panel-title"
        className={`absolute inset-x-0 bottom-0 max-h-[92vh] overflow-y-auto rounded-t-[32px] border border-black/10 bg-white pb-8 pt-6 shadow-[0_-24px_80px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:max-h-[85vh] sm:rounded-t-[60px] sm:pb-10 sm:pt-10 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="relative mx-auto w-full max-w-3xl px-5 sm:px-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-0 rounded-full border border-black/5 bg-white/80 p-2 text-[#111111]/60 shadow-sm transition-colors hover:text-[#111111] sm:right-10"
          >
            <X size={18} />
          </button>

          <p className="text-[11px] font-medium uppercase tracking-wide text-[#0B0909]/45">
            {piece.date}
          </p>
          <h2
            id="writing-panel-title"
            className="mt-2 max-w-2xl font-serif text-2xl italic text-[#111111] sm:text-3xl xl:text-4xl"
          >
            {piece.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#888888]">
            {piece.excerpt}
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-[#0B0909]/75 sm:mt-8 sm:text-[16px]">
            {piece.content.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function WritingList({ pieces }: WritingListProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selected, setSelected] = useState<WritingPiece | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);

  useEffect(() => {
    if (!selected) {
      setPanelVisible(false);
      return;
    }

    const frame = requestAnimationFrame(() => setPanelVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [selected]);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const closePanel = () => setSelected(null);

  return (
    <>
      <ul className="border-t border-black/10">
        {pieces.map((piece) => (
          <WritingListItem
            key={piece.id}
            piece={piece}
            isHovered={hoveredId === piece.id}
            isBlurred={
              hoveredId !== null && hoveredId !== piece.id && selected === null
            }
            onSelect={setSelected}
            onHover={setHoveredId}
          />
        ))}
      </ul>

      {selected ? (
        <WritingPanel
          piece={selected}
          visible={panelVisible}
          onClose={closePanel}
        />
      ) : null}
    </>
  );
}
