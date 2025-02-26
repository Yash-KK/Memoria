import React from "react";
import Label from "./ui/Label";
import { MemoriaIcon, TweetIcon, VideoIcon } from "./icons";

const SideBar = () => {
  return (
    <div className="flex flex-col h-screen w-full max-w-[20rem] bg-slate-100 p-5 text-gray-700 shadow-2xl">
      <Label
        onLeft={<MemoriaIcon />}
        text="Memoria"
        textSize="6xl"
        fontWeight="semi-bold"
        className="text-red-900 font-bubblegum cursor-pointer"
      />
      <div className="flex flex-col p-3">
        <Label
          onLeft={<TweetIcon />}
          text="Tweets"
          textSize="2xl"
          fontWeight="medium"
          className="text-gray-600 mb-4 cursor-pointer hover:font-bold"
        />
        <Label
          onLeft={<VideoIcon />}
          text="Videos"
          textSize="2xl"
          fontWeight="medium"
          className="text-gray-600 cursor-pointer hover:font-bold"
        />
      </div>
    </div>
  );
};
export default SideBar;
