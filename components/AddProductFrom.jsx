"use client";
import { Fragment, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { addProduct, register, updateUser } from "@/actions/register";

function AddProductFrom({ isUpdate, handleModal, product }) {
  const [error, setError] = useState();
  const [images, setImages] = useState([]);
  const router = useRouter();
  const ref = useRef(null);
  const handleSubmit = async (formData) => {
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      rating: formData.get("rating"),
      images: images,
    };
    const r = await addProduct(data);
    console.log(r);

    ref.current?.reset();
    setImages([]);
    if (r?.error) {
      setError(r.error);

      return;
    } else {
      return router.back();
    }
  };

  const handleUpdate = async (formData) => {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
      address: formData.get("address"),
      type: "product",
    };
    const r = await updateUser(data);
    ref.current?.reset();
    if (r?.error) {
      setError(r.error);
      return;
    }
    setUser(r);
    handleModal();
  };
  return (
    <form
      ref={ref}
      action={isUpdate ? handleUpdate : handleSubmit}
      className={`p-5 w-full bg-accent text-accent-foreground   flex flex-col justify-between items-center gap-2 
             rounded-lg ${isUpdate ? "" : "max-w-md"}`}>
      {error && <div className="">{error}</div>}
      <h1 className="mb-5 w-full text-2xl font-semibold text-accent-foreground">
        {isUpdate ? "Update Product" : "Add Product"}
      </h1>

      <label className="w-full text-sm">Name</label>
      <input
        type="text"
        defaultValue={product?.name}
        placeholder="Name"
        className="w-full h-8 text-secondary border border-solid border-black py-1 px-2.5 rounded text-[13px]"
        name="name"
      />

      <label className="w-full text-sm">description</label>
      <textarea
        placeholder="description"
        defaultValue={product?.description}
        className="w-full h-8 text-secondary border border-solid border-black py-1 px-2.5 rounded text-[13px]"
        name="description"
      />

      <label className="w-full text-sm">Price</label>
      <input
        type="number"
        defaultValue={product?.price}
        placeholder="Price"
        className="w-full h-8 text-secondary border border-solid border-black py-1 px-2.5 rounded"
        name="price"
      />

      <label className="w-full text-sm">Rating</label>
      <input
        type="rating"
        defaultValue={product?.price}
        placeholder="Rating"
        className="w-full h-8 text-secondary border border-solid border-black py-1 px-2.5 rounded"
        name="rating"
      />
      <div className="w-full justify-between items-center">
        <label className="text-sm">Images</label>
        {images.length > 0 && <button className="ml-auto">Add More</button>}
      </div>
      <input
        type="text"
        onChange={(e) => setImages([...images, e.target.value])}
        defaultValue={product?.price}
        placeholder="Images"
        className="w-full h-8 text-secondary border border-solid border-black py-1 px-2.5 rounded"
      />

      <button className="w-full p-2 rounded-lg bg-primary text-primary-foreground ">
        {isUpdate ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default AddProductFrom;
