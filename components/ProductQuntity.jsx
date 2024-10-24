"use client";

import useStore from "@/lib/cart";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React from "react";

const ProductQuntity = ({ product }) => {
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);

  const handleIncrease = () => {
    increaseQuantity(product._id);
  };

  const handleDecrease = () => {
    decreaseQuantity(product._id);
  };

  return (
    <div className="flex gap-2 items-center text-accent-foreground">
      <button
        onClick={handleDecrease}
        className="bg-primary size-8 grid place-content-center">
        <IconMinus />
      </button>
      <p>{product?.quantity}</p>
      <button
        onClick={handleIncrease}
        className="bg-primary size-8 grid place-content-center">
        <IconPlus />
      </button>
    </div>
  );
};

export default ProductQuntity;
