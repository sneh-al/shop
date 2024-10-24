import React, { useEffect, useState } from "react";
import { getUserOrders } from "@/actions";

import VIewOrderDetail from "@/components/VIewOrderDetail";

const Orders = ({ email }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUserOrders(email).then((u) => {
      setOrders(u);
    });
  }, [email]);

  return (
    <div className=" shadow p-5  bg-secondary text-secondary-foreground">
      <h2 className="text-2xl mb-5">My Orders</h2>
      {orders.length == 0 && <p>You have not placed any orders yet.</p>}
      {orders.map((order, index) => (
        <div
          key={order._id}
          className=" bg-accent text-accent-foreground flex flex-col justify-between">
          <div className="flex items-center justify-between gap-5 p-5 ">
            <h5 className="font-semibold font-xl">{order?.customerName}</h5>

            <div className="d-flex justify-content-between align-items-center font-semibold">
              {order?.totalPrice} ₹
            </div>
          </div>
          <VIewOrderDetail order={JSON.parse(JSON.stringify(order))} />
        </div>
      ))}
    </div>
  );
};

export default Orders;
