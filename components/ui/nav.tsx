"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgGym } from "react-icons/cg";
import { CiBurger } from "react-icons/ci";
import { Button } from "./button";
import styles from "./nav.module.css";

export type NavLink = Readonly<{
  name: string;
  href: string;
}>;

type SidebarProps = {
  visible?: boolean;
  links: Readonly<NavLink[]>;
};

function Sidebar({ visible, links }: SidebarProps) {
  const pathname = usePathname();

  const classNames = [styles.nav];
  if (visible) {
    classNames.push(styles.open);
  } else {
    classNames.push(styles.closed);
  }

  return (
    <nav className={classNames.join(" ")}>
      <ul className="flex flex-col gap-2 p-4">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? styles.linkActive : ""}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

function Nav({
  children,
  links,
}: {
  children: React.ReactNode;
  links: NavLink[];
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col max-h-full overflow-hidden">
      <div className="fixed top-0 left-0 right-0 h-16 px-4 flex justify-between items-center shadow-md border-b border-slate-200 bg-white bg-opacity-75 backdrop-blur-sm z-10">
        <h1 className="font-bold text-lg flex items-center gap-1">
          <CgGym className="text-2xl" />
          Gym-Tracker
        </h1>
        <Button variant="ghost" className="pb-3" onClick={toggleSidebar}>
          <CiBurger className="text-4xl" />
        </Button>
      </div>
      <div className="flex relative flex-1 min-h-screen overflow-auto">
        <main className="flex-1 absolute top-0 left-0 right-0 pt-16">
          {children}
        </main>
        <Sidebar visible={isSidebarOpen} links={links} />
      </div>
    </div>
  );
}

export default Nav;
