"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { menuItems } from "../side-header";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/asifshah",
    icon: GitHubIcon,
  },
  {
    name: "X",
    href: "https://x.com",
    icon: XIcon,
  },
  {
    name: "Email",
    href: "mailto:asifshah@gmail.com",
    icon: Mail,
  },
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-4.3 1.4-4.3-2.1-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export default function SiteFooterClient() {
  return (
    <footer className="relative z-20 w-full px-5 pb-8 pt-12 sm:px-10 sm:pt-16">
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <span className="shrink-0 font-serif text-[24px] italic leading-none tracking-tight text-[#111111] sm:text-[28px] xl:text-[32px]">
          Asif
        </span>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-1.5 text-[11px] font-medium tracking-wide text-[#0B0909]/45">
            {menuItems.map((item, index) => (
              <li key={item.name} className="flex items-center gap-x-1.5">
                {index > 0 ? <span aria-hidden="true">·</span> : null}
                <Link
                  href={item.href}
                  className="text-[#0B0909]/45 no-underline transition-colors hover:text-[#0B0909]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={item.name}
                className="inline-flex size-8 items-center justify-center text-[#0B0909]/70 transition-colors hover:text-[#0B0909]"
              >
                <item.icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
