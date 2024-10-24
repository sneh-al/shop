"use client";
import Image from "next/image";
import useStore from "@/lib/cart";
import { useSession } from "next-auth/react";
import CartEmpty from "@assets/empty-cart.png";
import ShopLink from "@/components/ShopLink";
import { IconLetterXSmall, IconLoader, IconTrash } from "@tabler/icons-react";
import ProductQuntity from "@/components/ProductQuntity";
import { useRouter } from "next/navigation";
import useUser from "@/lib/user";
import { makeOrder, saveCart } from "@/actions/register";

const CartPage = () => {
  const { data, status } = useSession();
  const user = useUser((state) => state.user);
  const router = useRouter();

  const cart = useStore((state) => state.cart);

  const removeProduct = useStore((state) => state.removeProduct);
  const clearCart = useStore((state) => state.clearCart);
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  //total with 4% tax
  const tax = (total * 4) / 100;
  const totalWithTax = total + tax;

  const handleRemove = (product) => {
    removeProduct(product._id);
  };

  const handleClear = () => {
    clearCart();
  };

  const handleCheckout = async () => {
    try {
      const data = {
        userId: user._id,
        items: cart,
        totalPrice: totalWithTax,
        totalItems: cart.length,
      };
      const cartData = await saveCart(data);
      const order = await makeOrder({
        userId: data.userId,
        cart: cartData._id,
        customerName: user.name,
        totalPrice: totalWithTax,
      });
      console.log(cartData, order);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(cart);
  if (status === "loading") return <IconLoader className=" animate-spin" />;
  if (status === "unauthenticated") return router.push("/login");
  if (cart.length === 0) return <EmptyCart />;
  return (
    <article className="p-5 max-w-7xl mx-auto">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <button
          className="bg-destructive text-destructive-foreground px-3 py-2"
          onClick={handleClear}>
          Remove all
        </button>
      </header>
      <ul className="list-items py-5 flex flex-col gap-5 mx-auto text-left">
        {cart.map((product) => (
          <li
            key={product._id}
            className=" grid grid-cols-12  gap-2 bg-accent p-5 rounded-lg">
            <div className="flex items-center mr-auto col-span-12  md:col-span-6 gap-2">
              <button
                className=" text-accent-foreground"
                onClick={() => handleRemove(product)}>
                <span className="sr-only">remove</span>
                <IconTrash />
              </button>
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
              <ProductQuntity product={product} />
            </div>

            <p className="font-bold text-lg ml-auto col-span-4 md:col-span-2">
              {product.price * product.quantity}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex items-center w-fit ml-auto gap-2">
        <h3 className="font-bold text-xl">Subtotal</h3>
        <p className="total font-semibold px-5">{total}</p>
      </div>
      <div className="bg-primary justify-between flex items-center text-primary-foreground px-5">
        <button
          onClick={handleCheckout}
          className="flex gap-2 items-center w-fit p-5 group">
          <span className=" text-md md:text-xl lg:text-lg">Checkout</span>
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
        <span className="ml-auto font-bold text-xl">
          Final Total : {totalWithTax}
        </span>
      </div>
    </article>
  );
};

export default CartPage;

const EmptyCart = () => {
  return (
    <article className=" w-full grid  place-conetent-center">
      <Image
        width={500}
        height={500}
        src={CartEmpty}
        className="w-full max-w-md m-auto"
        alt="empty cart"
      />
      <ShopLink linkText="Your Cart is empty. Continue Shopping" />
    </article>
  );
};
