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
    <div className="flex w-full flex-col justify-between py-1 xl:py-2">
      <nav aria-label="Primary">
        <ul className="m-0 flex list-none flex-row flex-wrap items-center gap-x-3 gap-y-1 p-0 xl:flex-col xl:items-start xl:gap-1.25">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-serif italic text-[17px] leading-[1.2] text-white no-underline transition-[opacity,transform,color] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-[18px] xl:text-[20px] hover:translate-x-0.5 focus-visible:translate-x-0.5 focus-visible:outline-none ${
                    isActive
                      ? "opacity-100"
                      : "opacity-[0.34] hover:opacity-[0.72] focus-visible:opacity-[0.72]"
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
