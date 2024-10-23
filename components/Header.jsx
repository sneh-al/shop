import { links } from "@/const";
import React from "react";
import Logo from "./ui/Logo";
import Link from "next/link";
import HeaderEnd from "./HeaderEnd";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-primary shadow flex items-center justify-between p-5 a">
      <Logo />
      <nav className="flex items-center justify-between w-1/2">
        <ul className="flex flex-wrap gap-2 mr-auto">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <HeaderEnd />
      </nav>
    </header>
  );
};

export default Header;
