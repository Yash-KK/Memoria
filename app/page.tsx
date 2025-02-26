"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SideBar from "@/components/SideBar";
const Page = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("signin");
    },
  });
  if (status === "loading") {
    return <p>Loading....</p>;
  }
  console.log("Status: ", status);
  console.log("data: ", session);
  return <SideBar />;
};

export default Page;
