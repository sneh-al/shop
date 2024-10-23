import React from "react";
import { connectDB } from "@/lib/mongodb";
import Section from "@/components/ui/Section";
import Products from "@/models/Products";
import AddProduct from "@/components/AddProduct";
import Image from "next/image";
import ProductActions from "./ProductActions";

const getMenu = async () => {
  await connectDB();
  const data = await Products.find();
  return data;
};

export const metadata = {
  title: "Admin Page",
};

const page = async () => {
  const menu = await getMenu();

  return (
    <Section cl=" h-full">
      <AddProduct />
      {menu.length === 0 ? (
        <h1>There is nothing here...</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {menu.map((item, i) => (
            <div
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
              <ProductActions product={JSON.parse(JSON.stringify(item))} />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default page;
