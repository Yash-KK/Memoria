"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SideBar from "@/components/SideBar";
const Page = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("signin");
    },
  });
  if (status === "loading") {
    return <p>Loading....</p>;
  }
  return (
    <div className="flex">
      <SideBar />;
    </div>
  );
};

export default Page;
