import Link from "next/link";
import React from "react";

const AddProduct = () => {
  return (
    <div className="bg-primary justify-between flex items-center text-primary-foreground ">
      <Link
        href="/admin/add-product"
        className="flex gap-2 items-center w-fit p-5  group">
        <span className=" text-md md:text-xl lg:text-lg">Add Product</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 rotate-[315deg] group-hover:rotate-0 transition-all duration-300 ease-linear">
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"></path>
        </svg>
      </Link>
    </div>
  );
};

export default AddProduct;
