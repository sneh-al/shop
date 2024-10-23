import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero2Image from "@assets/hero2.png";
import { siteName } from "@/const";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="text-2xl flex items-center gap-2 font-bold">
        <Image src={Hero2Image} className="size-12 object-cover" alt="Donut" />
        {siteName}
      </Link>
    </div>
  );
};

export default Logo;
