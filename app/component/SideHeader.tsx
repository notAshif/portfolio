"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
  },
];

export default function SideHeader() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="fixed top-0 left-0 z-40 h-full pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto flex flex-col justify-between h-full py-10 px-6 sm:px-8 md:px-12 w-auto bg-transparent select-none"
      >
        {/* TOP: Navigation Links */}
        <div className="flex flex-col items-start pt-4">
          <ul className="flex flex-col space-y-2 items-start text-left">
            {navItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className={`font-instrument-serif italic text-base md:text-md tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground rounded ${
                      isActive
                        ? "text-[#0B0909] font-bold"
                        : "text-[#8E8E93] font-normal hover:text-[#0B0909]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* BOTTOM: Social Icons */}
        <div className="flex flex-col items-start pb-4">
          <ul className="flex flex-col space-y-4 items-start">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-[#464858]/70 hover:text-[#0B0909] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground rounded p-0.5 inline-block"
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
