"use client";
import React from "react";
import Label from "./ui/Label";
import { LogoutIcon, MemoriaIcon, TweetIcon, VideoIcon } from "./icons";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex flex-col hidden md:block h-screen w-full max-w-[20rem] bg-slate-800  p-5 shadow-2xl">
      <Label
        onLeft={<MemoriaIcon />}
        onClick={() => redirect("/")}
        text="Memoria"
        textSize="6xl"
        fontWeight="semi-bold"
        className="text-red-800 font-bubblegum cursor-pointer"
      />
      <div className="flex flex-col p-2">
        <Link href="?type=twitter">
          <Label
            onLeft={<TweetIcon className="mr-3" />}
            text="Tweets"
            textSize="2xl"
            fontWeight="medium"
            className="text-white mb-4 cursor-pointer hover:font-bold"
          />
        </Link>
        <Link href="?type=youtube">
          <Label
            onLeft={<VideoIcon className="mr-3" />}
            text="Videos"
            textSize="2xl"
            fontWeight="medium"
            className="text-white mb-4 cursor-pointer hover:font-bold"
          />
        </Link>
        <Label
          onLeft={<LogoutIcon className="mr-3" />}
          onClick={() => signOut()}
          text="Logout"
          textSize="2xl"
          fontWeight="medium"
          className="text-white mb-4 cursor-pointer hover:font-bold"
        />
      </div>
    </div>
  );
};
export default SideBar;
