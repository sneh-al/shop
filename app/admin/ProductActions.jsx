"use client";

import { deleteProduct } from "@/actions/register";
import { useRouter } from "next/navigation";

const ProductActions = ({ product }) => {
  const router = useRouter();
  const handledelte = async () => {
    try {
      await deleteProduct(product._id);
      router.refresh();
    } catch (error) {
      alert("Somthing went wrong");
    }
  };

  return (
    <div className="bg-primary justify-between flex items-center text-primary-foreground ">
      <button
        href="/admin/add-product"
        className="flex gap-2 items-center w-fit p-5 underlin underline-offset-1  group">
        Edit
      </button>

      <button
        onClick={handledelte}
        className="flex bg-destructive text-destructive-foreground gap-2 items-center w-fit p-5  group">
        Delete
      </button>
    </div>
  );
};

export default ProductActions;
