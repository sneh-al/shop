"use client";
import { useState } from "react";
import ProductActions from "./ProductActions";
import Image from "next/image";

const Product = ({ pro }) => {
  const [product, setProduct] = useState(pro);
  return (
    <div
      key={product._id}
      href={`/shop/${product?._id}`}
      className="border bg-card text-card-foreground border-primary flex flex-col justify-between">
      <Image
        src={product?.images[0] || "https://via.placeholder.com/200x200"}
        height={200}
        width={200}
        className="w-full max-h-96 h-full object-cover"
        alt={product?.name}
      />
      <div className="p-5">
        <h5 className="font-semibold font-xl">{product?.name}</h5>
        <p className="card-text line-clamp-2 max-w-xs my-auto">
          {product?.description}
        </p>
        <div className="d-flex justify-content-between align-products-center font-semibold">
          {product.price} ₹
        </div>
      </div>
      <ProductActions product={product} setProduct={setProduct} />
    </div>
  );
};

export default Product;
