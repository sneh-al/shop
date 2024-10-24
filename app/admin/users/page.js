import React from "react";
import { connectDB } from "@/lib/mongodb";
import Section from "@/components/ui/Section";
import User from "@/models/User";
import UserCard from "./UserCard";
import Link from "next/link";

export const dynamic = "force-dynamic";

const getUser = async () => {
  await connectDB();
  const data = await User.find();
  return data;
};

export const metadata = {
  title: "User Management",
};
const page = async () => {
  const users = await getUser();

  return (
    <Section cl=" h-full">
      <div className=" bg-accent text-accent-foreground flex gap-2 justify-between items-center mb-5">
        <h1 className=" font-bold text-2xl  p-5 text-left">User Mangement</h1>
        <Link
          href="/admin/users/add-user"
          className="bg-primary text-primary-foreground px-3 py-5 h-full rounded-md">
          Add User
        </Link>
      </div>
      {users.length === 0 ? (
        <h1>There is nothing here...</h1>
      ) : (
        <ul className="grid grid-cols-1 gap-5">
          {users.map((user) => (
            <UserCard
              key={user._id}
              userData={JSON.parse(JSON.stringify(user))}
            />
          ))}
        </ul>
      )}
    </Section>
  );
};

export default page;
