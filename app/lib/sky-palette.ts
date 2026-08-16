export type SkyColors = {
  top: string;
  bottom: string;
  text: string;
};

type SkyStop = {
  hour: number;
  colors: SkyColors;
};

const SKY_STOPS: SkyStop[] = [
  { hour: 0, colors: { top: "#070B18", bottom: "#1A1630", text: "#F4EEE6" } },
  { hour: 5, colors: { top: "#1C2240", bottom: "#6A4A62", text: "#F4EEE6" } },
  { hour: 6.5, colors: { top: "#7A8DB8", bottom: "#F0C4A8", text: "#1C1A18" } },
  { hour: 8, colors: { top: "#8EB6D9", bottom: "#F3D9B0", text: "#1C1A18" } },
  { hour: 12, colors: { top: "#6EA8D8", bottom: "#E8F0F6", text: "#1C1A18" } },
  { hour: 16, colors: { top: "#7A91A8", bottom: "#E8C8B0", text: "#1C1A18" } },
  { hour: 18.5, colors: { top: "#C47A5A", bottom: "#F0B070", text: "#1C1A18" } },
  { hour: 20, colors: { top: "#3A2A58", bottom: "#C46A4A", text: "#F4EEE6" } },
  { hour: 22, colors: { top: "#101428", bottom: "#2A2448", text: "#F4EEE6" } },
];

export const DEFAULT_SKY_HOUR = 16;

export function wrapHour(hour: number): number {
  const wrapped = hour % 24;
  return wrapped < 0 ? wrapped + 24 : wrapped;
}

export function localHourDecimal(date = new Date()): number {
  return date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
}

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  const n = Number.parseInt(value, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHex([r, g, b]: [number, number, number]): string {
  const toHex = (channel: number) =>
    Math.round(channel).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function mixHex(from: string, to: string, t: number): string {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  return rgbToHex([
    lerp(a[0], b[0], t),
    lerp(a[1], b[1], t),
    lerp(a[2], b[2], t),
  ]);
}

function mixColors(from: SkyColors, to: SkyColors, t: number): SkyColors {
  return {
    top: mixHex(from.top, to.top, t),
    bottom: mixHex(from.bottom, to.bottom, t),
    text: mixHex(from.text, to.text, t),
  };
}

function surroundingStops(hour: number): [SkyStop, SkyStop] {
  const h = wrapHour(hour);
  const last = SKY_STOPS.at(-1)!;
  const first = SKY_STOPS[0];

  if (h >= last.hour) {
    return [last, first];
  }

  const nextIndex = SKY_STOPS.findIndex((stop) => stop.hour > h);
  const prev =
    SKY_STOPS[nextIndex === 0 ? SKY_STOPS.length - 1 : nextIndex - 1];
  const next = SKY_STOPS[nextIndex === -1 ? 0 : nextIndex];
  return [prev, next];
}

function interpolationFactor(
  hour: number,
  prev: SkyStop,
  next: SkyStop,
): number {
  const h = wrapHour(hour);
  const span =
    next.hour < prev.hour ? 24 - prev.hour + next.hour : next.hour - prev.hour;
  if (span === 0) return 0;

  const offset = h >= prev.hour ? h - prev.hour : h + (24 - prev.hour);
  return offset / span;
}

export function skyAtHour(hour: number): SkyColors {
  const [prev, next] = surroundingStops(hour);
  return mixColors(
    prev.colors,
    next.colors,
    interpolationFactor(hour, prev, next),
  );
}

const SKY_PERIODS: { until: number; name: string }[] = [
  { until: 5, name: "night" },
  { until: 7, name: "dawn" },
  { until: 11, name: "morning" },
  { until: 15, name: "midday" },
  { until: 17.5, name: "afternoon" },
  { until: 19.5, name: "evening" },
  { until: 21.5, name: "dusk" },
  { until: 24, name: "night" },
];

export function skyPeriodName(hour: number): string {
  const h = wrapHour(hour);
  return SKY_PERIODS.find((period) => h < period.until)?.name ?? "night";
}

export function formatHourLabel(hour: number): string {
  const h = wrapHour(hour);
  const hours = Math.floor(h);
  const minutes = Math.round((h - hours) * 60) % 60;
  const period = hours >= 12 ? "PM" : "AM";
  const display = hours % 12 === 0 ? 12 : hours % 12;
  return `${display}:${minutes.toString().padStart(2, "0")} ${period}`;
}
