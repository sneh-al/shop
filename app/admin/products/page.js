import React from "react";
import { connectDB } from "@/lib/mongodb";
import Section from "@/components/ui/Section";
import Products from "@/models/Products";
import Link from "next/link";
import Product from "./Product";

const getMenu = async () => {
  await connectDB();
  const data = await Products.find();
  return data;
};

export const metadata = {
  title: "Admin Page",
};

const ProductsAdmin = async () => {
  const menu = await getMenu();

  return (
    <Section cl=" h-full">
      <div className=" bg-accent text-accent-foreground flex gap-2 justify-between items-center mb-5">
        <h1 className=" font-bold text-2xl  p-5 text-left">
          Product Mangement
        </h1>
        <Link
          href="/admin/add-product"
          className="bg-primary text-primary-foreground px-3 py-5 h-full rounded-md">
          Add Produc
        </Link>
      </div>
      {menu.length === 0 ? (
        <h1>There is nothing here...</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {menu.map((item, i) => (
            <Product key={i} pro={JSON.parse(JSON.stringify(item))} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default ProductsAdmin;
