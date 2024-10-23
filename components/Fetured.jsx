import React from "react";
import { connectDB } from "@/lib/mongodb";
import Products from "@/models/Products";
import Section from "./ui/Section";
import ShopLink from "./ShopLink";
import Product from "./Product";

const getMenu = async () => {
  await connectDB();
  const data = await Products.find().limit(4).sort({ createdAt: -1 });
  return data;
};

const Fetured = async () => {
  const menu = await getMenu();
  return (
    <Section cl="bg-accent">
      <ShopLink title=" Donuts of the Month" linkText="View All" />
      <div className="bg-primary text-primary-foreground flex justify-between items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-primary">
          {menu.map((item, i) => (
            <Product key={i} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Fetured;
