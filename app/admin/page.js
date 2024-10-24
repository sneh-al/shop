import React from "react";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Orders";
import Section from "@/components/ui/Section";
import ProductActions from "./ProductActions";
import VIewOrderDetail from "./VIewOrderDetail";

const getOrders = async () => {
  await connectDB();
  const data = await Order.find();
  return data;
};

export const metadata = {
  title: "Orders History",
};

const page = async () => {
  const orders = await getOrders();

  return (
    <Section cl=" h-full">
      {orders.length === 0 ? (
        <h1>There is nothing here...</h1>
      ) : (
        <div className="grid grid-cols-1 ">
          {orders.map((item, i) => (
            <div
              key={item._id}
              className="border bg-card text-card-foreground border-primary flex flex-col justify-between">
              <div className="flex items-center justify-between gap-5 p-5 ">
                <h5 className="font-semibold font-xl">{item?.customerName}</h5>

                <div className="d-flex justify-content-between align-items-center font-semibold">
                  {item?.totalPrice} ₹
                </div>
              </div>
              <VIewOrderDetail />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default page;
