"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
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
  return <button onClick={() => signOut()}>SignOut</button>;
};

export default Page;
