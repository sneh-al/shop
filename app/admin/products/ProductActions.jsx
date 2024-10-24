"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { deleteProduct } from "@/actions";
import AddProductFrom from "@/components/AddProductFrom";
import { IconX } from "@tabler/icons-react";

const ProductActions = ({ product, setProduct }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const router = useRouter();
  const handledelte = async () => {
    try {
      await deleteProduct(product._id);
      router.refresh();
    } catch (error) {
      alert("Somthing went wrong");
    }
  };
  const handleEdit = () => {
    setIsUpdate(!isUpdate);
  };

  return (
    <div className="bg-primary justify-between flex items-center text-primary-foreground ">
      {isUpdate && (
        <dialog
          open
          className="w-full rounded-lg border animate-fade-down z-50 text-accent-foreground">
          <button
            onClick={handleEdit}
            className="hover:rotate-180 transition-all duration-150 ease-in-out absolute top-0 right-0 m-2 ">
            <IconX className="text-accent-foreground" />
          </button>
          <AddProductFrom
            product={product}
            isUpdate={true}
            handleModal={handleEdit}
            setProduct={setProduct}
          />
        </dialog>
      )}
      <button
        onClick={handleEdit}
        className="flex gap-2 items-center w-fit p-5 underline decoration-primary-foreground underline-offset-1  group">
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
