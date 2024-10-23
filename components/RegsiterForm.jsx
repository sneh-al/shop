"use client";
import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { register, updateUser } from "@/actions/register";
import { useSession } from "next-auth/react";
import { IconLoader } from "@tabler/icons-react";

export default function RegisterForm({
  user,
  isUpdate,
  setIsUpdate,
  setUser,
  isAdmin,
}) {
  const { status } = useSession();

  const [error, setError] = useState();
  const router = useRouter();
  const ref = useRef(null);
  const handleSubmit = async (formData) => {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
      address: formData.get("address"),
      type: formData.get("type"),
    };

    const r = await register(data);
    ref.current?.reset();
    if (r?.error) {
      setError(r.error);
      return;
    } else {
      if (isAdmin) {
        return router.back();
      }
      return router.push("/login");
    }
  };

  const handleUpdate = async (formData) => {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
      address: formData.get("address"),
      type: "user",
    };
    const r = await updateUser(data);
    ref.current?.reset();
    if (r?.error) {
      setError(r.error);
      return;
    }
    setUser(r);
    setIsUpdate(false);
  };
  if (status === "loading")
    return (
      <div>
        <IconLoader size={24} className="animate-spin" />
      </div>
    );
  if (status === "authenticated") return router.push("/");
  return (
    <form
      ref={ref}
      action={isUpdate ? handleUpdate : handleSubmit}
      className={`p-5 w-full   flex flex-col justify-between items-center gap-2 
            bg-accent rounded-lg ${isUpdate ? "" : "max-w-md"}`}>
      {error && <div className="">{error}</div>}
      <h1 className="mb-5 w-full text-2xl font-semibold text-accent-foreground">
        {isAdmin ? "Add User" : isUpdate ? "Update User" : "Sign Up"}
      </h1>

      <label className="w-full text-sm">Full Name</label>
      <input
        type="text"
        defaultValue={user?.name}
        placeholder="Full Name"
        className="w-full h-8 text-secondary border border-solid border-black py-1 px-2.5 rounded text-[13px]"
        name="name"
      />

      <label className="w-full text-sm">Address</label>
      <textarea
        placeholder="Postal Address"
        defaultValue={user?.address}
        className="w-full h-8 text-secondary border border-solid border-black py-1 px-2.5 rounded text-[13px]"
        name="address"
      />

      <label className="w-full text-sm">Email</label>
      <input
        type="email"
        defaultValue={user?.email}
        placeholder="Email"
        className="w-full h-8 text-secondary border border-solid border-black py-1 px-2.5 rounded"
        name="email"
      />

      {!isUpdate && (
        <Fragment>
          <label className="w-full text-sm">Password</label>
          <div className="flex w-full">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-8 text-secondary border border-solid border-black py-1 px-2.5 rounded"
              name="password"
            />
          </div>
          <label className="w-full text-sm">Type</label>
          <div className="flex w-full gap-2">
            <input type="radio" id="user" name="type" value="user" />
            <label for="user">User</label>
            <br />
            <input type="radio" id="css" name="type" value="admin" />
            <label for="admin">Admin</label>
            <br />
          </div>
        </Fragment>
      )}

      <button className="w-full p-2 rounded-lg bg-primary text-primary-foreground ">
        {isAdmin ? "Add User" : isUpdate ? "Update" : "Sign Up"}
      </button>
      {!isAdmin && !isUpdate && (
        <Link
          href="/login"
          className="text-sm text-accent-foreground transition duration-150 ease hover:text-primary">
          Already have an account?
        </Link>
      )}
    </form>
  );
}
