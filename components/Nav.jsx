"use client";

import { links } from "@/const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-wrap gap-2 mr-auto">
      {links.map((link) => (
        <li
          key={link.href}
          className={`font-semibold text-lg${
            pathname === link.href ? " opacity-75 pointer-events-none" : ""
          } `}>
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
