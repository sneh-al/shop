"use client";
import { getCart } from "@/actions";
import { IconLetterXSmall, IconX } from "@tabler/icons-react";
import { set } from "mongoose";
import Image from "next/image";
import React, { useEffect } from "react";

const VIewOrderDetail = ({ order }) => {
  const [isDetail, setIsDetail] = React.useState(false);
  const handleModal = () => {
    setIsDetail(!isDetail);
  };
  return (
    <div className="bg-primary justify-between flex items-center text-primary-foreground ">
      <button
        className="flex gap-2 items-center w-fit p-5 underlin underline-offset-1  group"
        onClick={handleModal}>
        View Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 rotate-[315deg] group-hover:rotate-0 transition-all duration-300 ease-linear">
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"></path>
        </svg>
      </button>
      {isDetail && (
        <dialog
          open
          className="w-full bg-accent  rounded-lg border animate-fade-down z-50 text-accent-foreground">
          <button
            onClick={handleModal}
            className="hover:rotate-180 transition-all duration-150 ease-in-out absolute top-0 right-0 m-2 ">
            <IconX className="text-accent-foreground" />
          </button>
          <Summary order={order} />
        </dialog>
      )}
    </div>
  );
};

export default VIewOrderDetail;

const Summary = ({ order }) => {
  const [cart, setCart] = React.useState({});

  useEffect(() => {
    const geCartFromDb = async () => {
      try {
        const cartData = await getCart(order.cart);
        console.log(cartData);
        setCart(cartData);
      } catch (error) {
        console.log(error);
      }
    };
    geCartFromDb();
  }, [order]);
  return (
    <div className="bg-background rounded-lg">
      <div className="p-5 bg-primary font-bold text-xl  text-primary-background rounded-lg flex justify-between items-center">
        Order by {order.customerName}
      </div>
      <ul className="list-items py-5 flex flex-col gap-5 mx-auto text-left">
        {cart?.items?.map((product) => (
          <li
            key={product._id}
            className=" grid grid-cols-12  gap-2 bg-accent p-5 rounded-lg">
            <div className="flex items-center mr-auto col-span-12  md:col-span-6 gap-2">
              <Image
                width={50}
                height={50}
                src={product.image}
                alt="product"
                className="size-16 "
              />
              <p className="font-bol text-lg ">{product.name}</p>
            </div>
            <div className="flex items-center gap-2 col-span-8 md:col-span-4 ">
              <p className="text-lg ">{product.price}</p>
              <IconLetterXSmall />
              <p className="text-lg ">{product.quantity}</p>
            </div>

            <p className="font-bold text-lg ml-auto col-span-4 md:col-span-2">
              {product.price * product.quantity}
            </p>
          </li>
        ))}
      </ul>
      <div className="p-5 bg-primary font-bold text-xl text-right text-primary-background rounded-lg ">
        Total : {order.totalPrice}
      </div>
    </div>
  );
};
