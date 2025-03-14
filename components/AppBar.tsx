"use client";
import { signOut } from "next-auth/react";
import { AddIcon, LogoutIcon, ShareIcon } from "./icons";
import Button from "./ui/Button";
import Label from "./ui/Label";

type AppBarType = {
  addContentHandler: () => void;
};
const AppBar: React.FC<AppBarType> = ({ addContentHandler }) => {
  const handleClick = () => {
    alert("it works...");
  };
  return (
    <div className="flex lg:justify-between p-6 bg-gray-900">
      <Label
        text="All Notes"
        textSize="4xl"
        fontWeight="bold"
        className="text-white"
      />
      <div className="hidden lg:flex">
        <Button
          onClick={handleClick}
          onLeft={<ShareIcon className="mr-2" />}
          text="Share Brain"
          type="button"
          textSize="lg"
          fontWeight="medium"
          className="text-white bg-gray-700 hover:bg-gray-600 mr-3"
        />
        <Button
          onClick={addContentHandler}
          text="Add Content"
          onLeft={<AddIcon className="mr-2" />}
          type="button"
          textSize="lg"
          fontWeight="medium"
          className="text-white bg-gray-700 hover:bg-gray-600"
        />
      </div>
      <div className="flex sm:hidden justify-end w-full">
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

export default AppBar;
