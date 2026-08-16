"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_SKY_HOUR,
  localHourDecimal,
  skyAtHour,
  skyPeriodName,
} from "../../lib/sky-palette";
import { SkyContext } from "./sky-context";
import SkyTimeControl from "./sky-time-control";

export default function SkyAtmosphere({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hour, setHour] = useState(DEFAULT_SKY_HOUR);
  const [manual, setManual] = useState(false);
  const sky = skyAtHour(hour);
  const period = skyPeriodName(hour);

  useEffect(() => {
    if (manual) return;

    const sync = () => setHour(localHourDecimal());
    sync();
    const id = window.setInterval(sync, 30_000);
    return () => window.clearInterval(id);
  }, [manual]);

  return (
    <SkyContext.Provider
      value={{ hour, manual, sky, period, setHour, setManual }}
    >
      <div
        className="relative min-h-screen w-full"
        style={
          {
            "--sky-top": sky.top,
            "--sky-bottom": sky.bottom,
            "--sky-text": sky.text,
          } as React.CSSProperties
        }
      >
        <div
          className="sky-layer pointer-events-none fixed inset-0 z-0"
          aria-hidden="true"
        />

        {children}

        <section
          className="relative z-0 flex min-h-[220px] items-center justify-center px-6 pb-24 pt-10 sm:min-h-[240px]"
          aria-label="Get in touch"
        >
          <p className="max-w-[42rem] text-center text-[13px] leading-relaxed sm:text-[14px] text-[color:var(--sky-text)]">
            <span className="font-semibold">Get in touch</span>
            <span className="opacity-80">
              {" "}
              — for thoughtful design work, early products, or building together.{" "}
            </span>
            <a
              href="mailto:asifshah@gmail.com"
              className="underline decoration-current/40 underline-offset-4"
            >
              asifshah@gmail.com
            </a>
            <span className="opacity-70"> · © 2026 · sky shifts with the hour</span>
          </p>

          <div className="pointer-events-none absolute inset-x-4 bottom-5 flex items-end justify-start sm:inset-x-6">
            <SkyTimeControl />
          </div>
        </section>
      </div>
    </SkyContext.Provider>
  );
}
