import React from "react";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Orders";
import Section from "@/components/ui/Section";
import VIewOrderDetail from "@/components/VIewOrderDetail";

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
        <div className="grid grid-cols-1 gap-5 ">
          <h1 className=" font-bold text-2xl bg-accent text-accent-foreground  p-5 text-left">
            Order History
          </h1>

          {orders.map((item, i) => (
            <div
              key={item._id}
              className=" bg-accent text-accent-foreground flex flex-col justify-between">
              <div className="flex items-center justify-between gap-5 p-5 ">
                <h5 className="font-semibold font-xl">{item?.customerName}</h5>

                <div className="d-flex justify-content-between align-items-center font-semibold">
                  {item?.totalPrice} ₹
                </div>
              </div>
              <VIewOrderDetail order={JSON.parse(JSON.stringify(item))} />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default page;
