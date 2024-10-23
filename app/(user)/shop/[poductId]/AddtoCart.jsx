"use client";

import { useSession } from "next-auth/react";
import React from "react";

const AddtoCart = () => {
  const { status } = useSession();
  const handleAdd = async () => {
    try {
      if (status === "unauthenticated")
        alert("You need to sign in to add to cart");
      // add to cart
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleAdd}
      className="add bg-primary/90 hover:bg-primary text-primary-foreground py-2 px-4 rounded-md">
      Add to cart
    </button>
  );
};

export default AddtoCart;
