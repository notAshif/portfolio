"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuItem {
  name: string;
  href: string;
}

interface SideNavClientProps {
  menuItems: MenuItem[];
}

const scrollToAnchor = (href: string) => {
  const targetId = href.slice(1);
  if (!targetId || targetId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
};

export default function SideNavClient({
  menuItems,
}: SideNavClientProps) {
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToAnchor(href);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full w-full py-2">
      <nav aria-label="Primary">
        <ul className="flex flex-col items-start gap-[5px] list-none p-0 m-0">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`side-nav-link text-[20px] leading-[1.2] italic font-instrument-serif ${
                    isActive ? "is-active opacity-100" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
