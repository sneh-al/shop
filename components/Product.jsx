import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ item }) => {
  return (
    <Link
      href={`/shop/${item?._id}`}
      className="border bg-card text-card-foreground border-primary flex flex-col justify-between">
      <Image
        src={item?.images[0] || "https://via.placeholder.com/200x200"}
        height={200}
        width={200}
        className="w-full max-h-96 h-full object-cover"
        alt={item?.name}
      />
      <div className="p-5">
        <h5 className="font-semibold font-xl">{item?.name}</h5>
        <p className="card-text line-clamp-2 max-w-xs my-auto">
          {item?.description}
        </p>
        <div className="d-flex justify-content-between align-items-center font-semibold">
          {item.price} ₹
        </div>
      </div>
    </Link>
  );
};

export default Product;
