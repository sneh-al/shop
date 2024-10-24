"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconLoader } from "@tabler/icons-react";
import toast from "react-hot-toast";

export default function Login() {
  const { status } = useSession();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error);
    }
    if (res?.ok) {
      toast.success("Logged in successfully!");
      return router.push("/");
    }
  };
  if (status === "loading")
    return (
      <div>
        <IconLoader size={24} className="animate-spin" />
      </div>
    );
  if (status === "authenticated") return router.push("/");
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form
        className="p-6 w-full max-w-md flex flex-col justify-between items-center gap-2 
         bg-accent rounded-lg text-accent-foreground shadow"
        onSubmit={handleSubmit}>
        {error && <div className="text-black">{error}</div>}
        <h1 className="mb-5 w-full text-2xl font-bold">Sign In</h1>
        <label className="w-full text-sm">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full h-8 text-secondary border border-solid border-black rounded p-2"
          name="email"
        />
        <label className="w-full text-sm">Password</label>
        <div className="flex w-full">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 text-secondary border border-solid border-black rounded p-2"
            name="password"
          />
        </div>
        <button className="w-full p-2 rounded-lg bg-primary text-primary-foreground ">
          Sign In
        </button>

        <Link
          href="/register"
          className="text-sm text-secondary-foreground transition duration-150 ease hover:text-primary">
          Don&apos;t have an account?
        </Link>
      </form>
    </section>
  );
}
