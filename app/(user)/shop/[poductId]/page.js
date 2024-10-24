import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import ProductImages from "./ProductImages";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Products";
import Link from "next/link";
import AddtoCart from "./AddtoCart";

const getProduct = async (productId) => {
  await connectDB();
  const prodcut = await Product.findOne({ _id: productId });
  return prodcut;
};
const ProductPage = async ({ params }) => {
  const product = await getProduct(params.poductId);
  return (
    <Section>
      <article>
        <header className="flex items-center gap-2 border p-5 border-primary">
          <Link href="/shop" className="ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"></path>
            </svg>
          </Link>

          <div className="px-5 font-semibold">
            <Title title={product.name} />
          </div>
        </header>
        <main className="p-5 relative flex flex-col md:flex-row gap-10 m-auto max-w-7xl">
          <slot />

          <div className="flex flex-col gap-5">
            <ProductImages images={product.images} />
          </div>
          <div className="flex lg:w-1/2 flex-col gap-5">
            <p className="text-lg font-semibold max-w-[67ch] text-balance">
              {product.description}
            </p>
            <div className="relative w-fit">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={
                      "size-6 stroke-yellow-500" +
                      " " +
                      (index + 1 <= product.rating ? " fill-yellow-500" : "")
                    }>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex w-full justify-between bg-accent p-5 rounded-lg">
              <p>
                <span> Price </span>
                <br />
                <span className="font-bold"> {product.price} ₹</span>
              </p>
              <AddtoCart product={JSON.parse(JSON.stringify(product))} />
            </div>
          </div>
        </main>
      </article>
    </Section>
  );
};
export default ProductPage;
