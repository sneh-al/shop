import Image from "next/image";
import React from "react";
import Logo from "./ui/Logo";
import Hero2Image from "@assets/hero2.png";
import { links, sociallinks } from "@/const";

const Footer = () => {
  return (
    <footer
      className={`flex flex-col  bg-background text-foreground  border-t border-card  relative overflow-hidden mt-auto   `}>
      <article className="flex z-10 flex-wrap md:justify-center md:items-end   gap-5 pt-24 pb-10 md:pt-32 md:px-16 p-5 relative">
        <div className="flex items-center flex-col relative">
          <Image
            src={Hero2Image}
            className="max-w-xs bottom-0 left-0 object-cover absolute -z-10 opacity-20"
            alt="Donut"
          />
          <Logo />
        </div>
        <div className="flex  gap-10">
          <div className="flex flex-col px-5">
            <h2 className="font bol text-2xl mb-2">Visit Us</h2>

            <address>
              <p className="text-lg">123 Main St</p>
              <p className="text-lg">Anytown,</p>
              <p>Ahmedabad 12345</p>
              <a
                href="tel:555-555-5555"
                className="text-lg hover:text-background">
                Phone: 555-555-5555
              </a>
              <br />
              <a
                href="mailto:donut@example.com"
                className="text-lg hover:text-background">
                Email: donut@example.com
              </a>
            </address>
          </div>

          <div className="flex justify-between gap-10 flex-col px-5">
            <div>
              <h2 className="font bol text-2xl mb-2">Quick Links</h2>
              <ul className="flex gap-3 md:gap-5 items-center text-left">
                {links.map((link) => (
                  <li className="w-full" key={link.href}>
                    <a href={link.href} className="hover:text-background ">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font text-2xl mb-2">Follow Us</h2>
              <ul className="flex gap-3 md:gap-5 flex-wrap">
                {sociallinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.title}>
                      <a href="#" className=" hover:text-background">
                        <span className="sr-">{link.title}</span>
                        <Icon className="w-8 h-8" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </article>
      <div className="z-10 bg-primary md:text-center p-5">
        <p>@2024 Donut Adda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
