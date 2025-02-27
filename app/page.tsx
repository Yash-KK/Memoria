"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SideBar from "@/components/SideBar";
import AppBar from "@/components/AppBar";
import Card from "@/components/Card";
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
    <div className="flex bg-slate-300">
      <SideBar />
      <div>
        <AppBar />
        <div className="grid grid-cols-4 gap-4">
          {/*   A loop to display all cards here */}
          <Card type="Youtube" />
          <Card type="Twitter" />
          <Card type="Youtube" />
          <Card type="Twitter" />
          <Card type="Youtube" />
          <Card type="Twitter" />
          <Card type="Youtube" />\
        </div>
      </div>
    </div>
  );
};

export default Page;
