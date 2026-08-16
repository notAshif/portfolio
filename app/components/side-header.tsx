import SideNavClient, { MenuItem } from "./client/side-nav-client";

export const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Writing",
    href: "/writing",
  },
];

export default function SideHeader() {
  return (
    <aside
      className="fixed top-4 inset-x-4 z-40 mix-blend-difference isolate flex flex-col gap-[5px] select-none xl:top-[19px] xl:left-[40px] xl:right-auto xl:inset-x-auto"
      aria-label="Primary side navigation"
    >
      <SideNavClient
        menuItems={menuItems}
      />
    </aside>
  );
}