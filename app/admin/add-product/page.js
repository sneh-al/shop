import AddProductFrom from "@/components/AddProductFrom";
import { title } from "process";
import React from "react";

export const metadata = {
  title: "Add Product",
};
const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <AddProductFrom />
    </div>
  );
};

export default page;
