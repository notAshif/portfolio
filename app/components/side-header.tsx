import SideNavClient, { MenuItem } from "./client/side-nav-client";

const menuItems: MenuItem[] = [
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
      className="fixed top-[19px] left-[40px] z-40 mix-blend-difference isolate flex flex-col gap-[5px] select-none"
      aria-label="Primary side navigation"
    >
      <SideNavClient
        menuItems={menuItems}
      />
    </aside>
  );
}