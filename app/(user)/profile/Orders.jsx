import React, { useEffect, useState } from "react";
import { getUserOrders } from "@/actions/register";
import RegisterForm from "@/components/RegsiterForm";
import Section from "@/components/ui/Section";

const Orders = ({ email }) => {
  const [orders, setOrders] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getUserOrders(email).then((u) => {
      setOrders(u);
    });
  }, [email, isUpdate]);

  return (
    <div className=" shadow p-5  bg-secondary text-secondary-foreground">
      <h2 className="text-2xl mb-5">My Orders</h2>
      {orders.length == 0 && <p>You have not placed any orders yet.</p>}
      {orders.map((order, index) => (
        <div key={index}>
          <h3 className="text-xl mb-2">Order #{order._id}</h3>
          <p>Order Date: {order.createdAt}</p>
          <div>
            <p>Total Amount: {order.totalAmount}</p>
            <button>View Orders</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
