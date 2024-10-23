import { Provider } from "../provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <Provider>
      <Header />
      <main>{children}</main>
      <Footer />
    </Provider>
  );
}
