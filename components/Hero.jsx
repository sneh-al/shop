import Image from "next/image";
import React from "react";
import ShopLink from "./ShopLink";

import HeroImage from "@assets/hero.jpg";
import Hero2Image from "@assets/hero2.png";
export function Hero() {
  return (
    <section className="w-full relative">
      <article className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-primary-foreground flex p-5 md:px-16">
          <div className="mt-auto">
            <Image
              src={Hero2Image}
              className="max-w-36 sm:max-w-xs lg:max-w-sm object-cover"
              alt="Donut Dukaan"
            />
            <h1 className="text-primary mt-auto text-balance text-3xl lg:text-5xl font-bold px-5">
              Deliciously Crafted Donuts, Made Fresh Daily!
            </h1>
          </div>
        </div>
        <div>
          <Image
            src={HeroImage}
            className="top-0 left-0 w-full -z-10 h-full object-cover"
            alt="Donut Dukaan"
          />
        </div>
      </article>

      <ShopLink linkText="Shop Now" />
    </section>
  );
}
