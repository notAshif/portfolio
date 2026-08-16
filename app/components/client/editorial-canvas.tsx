"use client";

import { memo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import GitHubActivityWidget from "./github-activity-widget";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const splitLineClass = [
  "relative block w-full max-w-full",
  "[--line-fill:0%] [--line-pop:0]",
  "text-[rgba(17,17,17,0.32)]",
  "bg-[linear-gradient(90deg,#111_0%,#111_calc(var(--line-fill)-4%),#1111119e_var(--line-fill),#11111152_calc(var(--line-fill)+4%),#11111152_100%)]",
  "bg-clip-text [-webkit-text-fill-color:transparent]",
  "data-[line-past]:text-[#111111] data-[line-past]:[-webkit-text-fill-color:currentColor]",
  "[&_a]:[-webkit-text-fill-color:initial]",
  "[&_button]:[-webkit-text-fill-color:initial]",
  "[&_mark]:[-webkit-text-fill-color:initial]",
  "[&_[data-split-ignore]]:[-webkit-text-fill-color:initial]",
].join(" ");

const EditorialDescription = memo(function EditorialDescription() {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = descriptionRef.current;
      if (!root) return;

      const split = SplitText.create(root.querySelectorAll("[data-split]"), {
        type: "lines",
        autoSplit: true,
        aria: "none",
        ignore: "[data-split-ignore]",
        linesClass: splitLineClass,
        onSplit(self) {
          const tweens = self.lines.map((line) => {
            const el = line as HTMLElement;
            el.style.setProperty("--line-fill", "0%");
            el.style.setProperty("--line-pop", "0");

            return gsap.fromTo(
              el,
              { "--line-progress": 0 },
              {
                "--line-progress": 1,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  scrub: 1,
                  start: "top 72%",
                  end: "top 28%",
                  onUpdate(trigger) {
                    const progress = trigger.progress;
                    el.style.setProperty(
                      "--line-fill",
                      `${(progress * 100).toFixed(2)}%`
                    );
                    el.style.setProperty("--line-pop", progress.toFixed(3));
                    el.toggleAttribute("data-line-past", progress >= 0.999);
                  },
                },
              }
            );
          });

          return gsap.timeline().add(tweens, 0);
        },
      });

      return () => {
        split.revert();
      };
    },
    { scope: descriptionRef }
  );

  return (
    <div
      ref={descriptionRef}
      className="description relative mx-auto w-full max-w-[699px] px-5 pt-24 pb-8 select-none text-[#111111] sm:px-8 sm:pt-28"
    >
      <div className="flex flex-col gap-8 font-sans text-[24px] font-medium tracking-[-0.048em] leading-[1.2] sm:gap-10 sm:text-[28px] lg:text-[32px]">
        <p data-split>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p data-split>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>

        <p data-split>
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>

        <div data-split-ignore>
          <GitHubActivityWidget />
        </div>
      </div>
    </div>
  );
});

export default function EditorialCanvas() {
  return <EditorialDescription />;
}
