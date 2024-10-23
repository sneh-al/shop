"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ images }) => {
  const [curr, setCurr] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="flex flex-col lg:flex-row gap-2">
      <div class="flex flex-row flex-wrap lg:flex-col gap-2">
        {images.map((image, i) => (
          <button class="btn size-16 aspect-square" onClick={() => setCurr(i)}>
            <Image
              data-index={i}
              width={40}
              height={40}
              class="w-full h-full  object-cover  rounded-lg"
              src={image}
              alt="image"
            />
          </button>
        ))}
      </div>
      <div class="aspect-square md:max-w-[30rem] overflow-hidden">
        <Image
          width={400}
          height={400}
          class="img w-full h-full object-cover rounded-lg"
          src={images[curr]}
          onClick={() => setIsOpen(true)}
          alt="image"
        />
      </div>
      <dialog
        id="image"
        class="h-screen animate-fade-down bg-background w-full">
        <button class="dialog-close size-6 absolute top-2 right-2 z-10 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="group-hover:rotate-180 ease-in transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"></path>
          </svg>
        </button>
        <Image
          width={400}
          height={400}
          class="img-2 w-full h-full object-contain rounded-lg"
          src={images[curr]}
          alt="image"
        />
      </dialog>
    </div>
  );
};

export default ProductImages;
