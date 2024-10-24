"use client";

import ProductQuntity from "@/components/ProductQuntity";
import useStore from "@/lib/cart";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const AddtoCart = ({ product }) => {
  const [q, setQ] = React.useState(0);
  const { status } = useSession();
  const addProduct = useStore((state) => state.addProduct);
  const isalreadyInCart = useStore((state) => state.isalreadyInCart);

  const handleAdd = async () => {
    try {
      if (status === "unauthenticated")
        return toast.error("Please login to add product to cart");
      addProduct({
        quantity: 1,
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      });

      toast.success("Product added to cart");
      setQ(1);
    } catch (error) {
      toast.error("Failed to add product to cart");
      console.log(error);
    }
  };

  const isAlreadyInCart = isalreadyInCart(product._id);
  if (isAlreadyInCart)
    return (
      <Link
        href="/cart"
        className="add bg-primary/90 hover:bg-primary text-primary-foreground py-2 px-4  flex items-center rounded-md">
        Already in cart
      </Link>
    );
  return (
    <button
      onClick={handleAdd}
      className="add bg-primary/90 hover:bg-primary text-primary-foreground py-2 px-4 rounded-md">
      Add to cart
    </button>
  );
};

export default AddtoCart;
