import React from "react";
import Title from "./Title";
import Image from "next/image";

const Section = ({ image, title, backButton, cl, children }) => {
  return (
    <section
      className={`py-24 md:py-32 px-5 md:px-16 relative overflow-hidden ${cl}`}>
      {image && (
        <Image
          src={image}
          className="w-full h-full object-cover fixed  right-0  top-0 -z-10 opacity-10"
          alt="Donut"
        />
      )}
      <article>
        <header className="flex items-center gap-2">
          {backButton && (
            <a href="javascript:history.back(1)" className="ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </a>
          )}
          <div className="px-5">{title && <Title title={title} />}</div>
        </header>
        <main className="p-5 relative">{children}</main>
      </article>
    </section>
  );
};

export default Section;
