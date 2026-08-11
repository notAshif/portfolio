"use client";

export interface StartupCard {
  name: string;
  bg: string;
  badgeColor: string;
}

export interface TeamBadgeItem {
  name: string;
  bg: string;
  letter: string;
}

export function StartupStack({
  cards,
  activeIndex,
  onCycle,
}: {
  cards: StartupCard[];
  activeIndex: number;
  onCycle: () => void;
}) {
  return (
    <div
      onClick={onCycle}
      className="startup-stack-container relative w-12 h-12 cursor-pointer group"
      title="Click to cycle products"
    >
      {cards.map((card, idx) => {
        const isTop = idx === activeIndex;
        const offset = (idx - activeIndex + cards.length) % cards.length;

        return (
          <div
            key={card.name}
            className="startup-card-item absolute inset-0 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-md border border-white/20"
            style={{
              backgroundColor: card.bg,
              zIndex: 3 - offset,
              transform: isTop
                ? "translate(0px, 0px) rotate(0deg)"
                : offset === 1
                ? "translate(-4px, -2px) rotate(10deg) scale(0.95)"
                : "translate(4px, -4px) rotate(-10deg) scale(0.9)",
            }}
          >
            {card.name[0]}
          </div>
        );
      })}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[11px] font-sans font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
        {cards[activeIndex].name}
      </span>
    </div>
  );
}

export function TeamBadges({ badges }: { badges: TeamBadgeItem[] }) {
  return (
    <div className="inline-flex items-center -space-x-2">
      {badges.map((badge) => (
        <div
          key={badge.name}
          className="group relative w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-[#F5F5F5] shadow-sm transition-transform hover:scale-110 hover:z-20 cursor-pointer"
          style={{ backgroundColor: badge.bg }}
        >
          {badge.letter}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 bg-black text-white text-[10px] font-sans font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
            {badge.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function VibecodingPopup() {
  return (
    <span className="group relative inline-block">
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="font-medium underline decoration-dashed underline-offset-4 text-[#111111] hover:text-black/70"
      >
        vibecoding
      </a>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-black/10 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30 flex flex-col gap-2">
        <div className="flex items-end gap-1 h-6">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="vibe-bar flex-1 rounded-sm bg-green-500"
              style={{
                height: `${((i * 7 + 13) % 100) + 15}%`,
                opacity: 0.5 + ((i % 5) * 0.1),
              }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] font-semibold text-black/60">
          <span>GitHub activity</span>
          <span>@asifshah</span>
        </div>
      </div>
    </span>
  );
}

export function PokerCardsPopup() {
  return (
    <span className="group relative inline-block">
      <button
        type="button"
        className="font-medium underline decoration-dashed underline-offset-4 text-[#111111] cursor-pointer border-0 bg-transparent p-0"
      >
        poker
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-36 h-28 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
        <div className="relative w-full h-full">
          <div className="poker-card-spade absolute top-2 left-4 w-14 h-20 bg-white border border-black/15 rounded-lg shadow-lg flex flex-col justify-between p-1.5 text-black">
            <span className="text-xs font-bold leading-none">A♠</span>
            <span className="text-base text-center leading-none">♠</span>
          </div>
          <div className="poker-card-heart absolute top-2 right-4 w-14 h-20 bg-white border border-black/15 rounded-lg shadow-lg flex flex-col justify-between p-1.5 text-red-600">
            <span className="text-xs font-bold leading-none">A♥</span>
            <span className="text-base text-center leading-none">♥</span>
          </div>
        </div>
      </div>
    </span>
  );
}
