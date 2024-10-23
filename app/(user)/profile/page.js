"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import UserCard from "@/components/UserCard";
import Orders from "./Orders";
import Section from "@/components/ui/Section";

const Profile = () => {
  const { data, status } = useSession();
  const router = useRouter();
  console.log(data);

  if (status !== "authenticated") router.replace("/login");
  return (
    <div className=" flex bg-accent flex-col gap-2   ">
      {data?.user && (
        <Section cl="max-w-5xl mx-auto w-full h-full">
          <UserCard data={data.user} />
          <Orders email={data.user.email} />
        </Section>
      )}
    </div>
  );
};

export default Profile;
