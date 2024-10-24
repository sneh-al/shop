"use client";
import React, { Fragment, useEffect, useState } from "react";
import { getUserByEmail } from "@/actions";
import RegisterForm from "@/components/RegsiterForm";
import { IconX } from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserCard = ({ data }) => {
  const [user, setUser] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getUserByEmail(data.email).then((u) => {
      setUser(u);
    });
  }, [data]);
  const handleEdit = () => {
    setIsUpdate(!isUpdate);
  };

  const handleSignout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };
  return (
    <Fragment>
      {isUpdate && (
        <dialog
          open
          className="w-full rounded-lg border animate-fade-down z-50 text-accent-foreground">
          <button
            onClick={handleEdit}
            className="hover:rotate-180 transition-all duration-150 ease-in-out absolute top-0 right-0 m-2 ">
            <IconX className="text-accent-foreground" />
          </button>
          <RegisterForm
            user={user}
            isUpdate={true}
            setUser={setUser}
            setIsUpdate={setIsUpdate}
          />
        </dialog>
      )}
      <div className=" shadow p-5 bg-background text-background-foreground  flex flex-wrap justify-between items-center">
        <div>
          <h1 className="font-semibold text-2xl ">{user?.name}</h1>
          <p>{user?.email}</p>
          <address className="max-w-32">
            <p>{user?.address}</p>
          </address>
        </div>
      </div>
      <div className="bg-primary justify-between flex items-center text-primary-foreground z-10 ">
        <button
          onClick={handleEdit}
          className="flex gap-2 items-center w-fit p-5  group">
          <span className=" text-md md:text-xl lg:text-lg">Edit Profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 rotate-[315deg] group-hover:rotate-0 transition-all duration-300 ease-linear z-10 ">
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <button
          className=" bg-destructive text-destructive-foreground p-5"
          onClick={handleSignout}>
          Sign Out
        </button>
      </div>
    </Fragment>
  );
};

export default UserCard;
