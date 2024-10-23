import About from "@/components/About";
import Fetured from "@/components/Fetured";
import { Hero } from "@/components/Hero";
export const metadata = {
  title: "Shop Donuts",
};
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Fetured />
    </>
  );
}
