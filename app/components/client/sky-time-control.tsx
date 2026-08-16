"use client";

import { useId } from "react";
import { Sun } from "lucide-react";
import { formatHourLabel, wrapHour } from "../../lib/sky-palette";
import { useSky } from "./sky-context";

const TICK_COUNT = 12;

export default function SkyTimeControl() {
  const sliderId = useId();
  const { hour, sky, period, setHour, setManual } = useSky();

  return (
    <div className="pointer-events-auto">
      <label htmlFor={sliderId} className="sr-only">
        Time of day
      </label>
      <div
        className="flex items-center gap-2 rounded-full px-3 py-2 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md transition-[background] duration-500 ease-out"
        style={{
          background: `linear-gradient(135deg, ${sky.top} 0%, ${sky.bottom} 100%)`,
        }}
      >
        <Sun className="size-3.5 shrink-0 opacity-90" aria-hidden="true" />
        <div className="relative h-5 w-[132px] sm:w-[156px]">
          <div
            className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-0.5"
            aria-hidden="true"
          >
            {Array.from({ length: TICK_COUNT }).map((_, index) => (
              <span
                key={index}
                className={`w-px rounded-full bg-white ${
                  index % 3 === 0 ? "h-2.5 opacity-80" : "h-1.5 opacity-40"
                }`}
              />
            ))}
          </div>
          <input
            id={sliderId}
            type="range"
            min={0}
            max={24}
            step={0.05}
            value={hour}
            onChange={(event) => {
              setManual(true);
              setHour(wrapHour(Number(event.target.value)));
            }}
            className="sky-time-slider absolute inset-0 h-full w-full cursor-pointer"
            aria-valuemin={0}
            aria-valuemax={24}
            aria-valuenow={Math.round(hour * 100) / 100}
            aria-valuetext={`${period}, ${formatHourLabel(hour)}`}
          />
        </div>
      </div>
    </div>
  );
}
