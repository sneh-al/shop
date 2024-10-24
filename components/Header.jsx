import { links } from "@/const";
import React from "react";
import Logo from "./ui/Logo";
import Link from "next/link";
import HeaderEnd from "./HeaderEnd";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-primary shadow flex items-center justify-between p-5 a">
      <Logo />
      <nav className="flex items-center justify-between w-1/2">
        <Nav />
        <HeaderEnd />
      </nav>
    </header>
  );
};

export default Header;
