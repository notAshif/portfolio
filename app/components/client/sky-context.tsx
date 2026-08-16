"use client";

import { createContext, useContext } from "react";
import type { SkyColors } from "../../lib/sky-palette";

type SkyContextValue = {
  hour: number;
  manual: boolean;
  sky: SkyColors;
  period: string;
  setHour: (hour: number) => void;
  setManual: (manual: boolean) => void;
};

export const SkyContext = createContext<SkyContextValue | null>(null);

export function useSky() {
  const value = useContext(SkyContext);
  if (!value) {
    throw new Error("useSky must be used within SkyAtmosphere");
  }
  return value;
}
