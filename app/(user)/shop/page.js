import React from "react";
import { connectDB } from "@/lib/mongodb";
import Product from "@/components/Product";
import Section from "@/components/ui/Section";
import Products from "@/models/Products";

const getMenu = async () => {
  await connectDB();
  const data = await Products.find();
  return data;
};

const page = async () => {
  const menu = await getMenu();

  return (
    <Section cl="bg-accent">
      {menu.length === 0 ? (
        <h1>There is nothing here...</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {menu.map((item, i) => (
            <Product key={i} item={item} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default page;
