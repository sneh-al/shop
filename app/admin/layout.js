import Nav from "./Nav";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <Nav />
      <main className="bg-background">{children}</main>
    </div>
  );
}
