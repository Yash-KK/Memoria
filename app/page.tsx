"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });
  if (status === "loading") {
    return <p>Loading....</p>;
  }
  console.log("Status: ", status);
  return "Hi";
};

export default Page;
