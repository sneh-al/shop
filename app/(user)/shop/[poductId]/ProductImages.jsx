"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ images }) => {
  const [curr, setCurr] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <div className="flex flex-row flex-wrap lg:flex-col gap-2">
        {images.map((image, i) => (
          <button
            className="btn size-16 aspect-square"
            key={i}
            onClick={() => setCurr(i)}>
            <Image
              data-index={i}
              width={40}
              height={40}
              className="w-full h-full  object-cover  rounded-lg"
              src={image}
              alt="image"
            />
          </button>
        ))}
      </div>
      <div className="aspect-square md:max-w-[30rem] overflow-hidden">
        <Image
          width={400}
          height={400}
          className="img w-full h-full object-cover rounded-lg"
          src={images[curr]}
          onClick={() => setIsOpen(true)}
          alt="image"
        />
      </div>
      <dialog
        id="image"
        className="h-screen animate-fade-down bg-background w-full">
        <button className="dialog-close size-6 absolute top-2 right-2 z-10 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:rotate-180 ease-in transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"></path>
          </svg>
        </button>
        <Image
          width={400}
          height={400}
          className="img-2 w-full h-full object-contain rounded-lg"
          src={images[curr]}
          alt="image"
        />
      </dialog>
    </div>
  );
};

export default ProductImages;
