"use client";
import { embedYoutubeUrl } from "@/lib/utils";
import { DeleteIcon, ShareIcon, TweetIcon, VideoIcon } from "./icons";
import Label from "./ui/Label";
import { Tweet } from "react-tweet";
import Modal from "./Modal";
import { useState } from "react";

type CardProps = {
  contentId: string;
  type: "Youtube" | "Twitter";
  title: string;
  link: string;
  createdAt: Date;
};
const Card: React.FC<CardProps> = ({
  contentId,
  title,
  type,
  link,
  createdAt,
}) => {
  const twitterId = type === "Twitter" && link.split("/").at(-1);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleModalToggle = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <div className="flex m-5 bg-gray-800  hover:bg-gray-700 text-white flex-col max-w-sm rounded h-96 shadow-lg px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <Label
            onLeft={
              type === "Twitter" ? (
                <TweetIcon className="m-2" />
              ) : (
                <VideoIcon className="m-2" />
              )
            }
            text={title}
            textSize="xl"
            fontWeight="bold"
          />
        </div>

        <div className="flex items-center gap-x-2">
          <ShareIcon className="mr-2" />
          <button className="hover:bg-gray-800" onClick={handleModalToggle}>
            <DeleteIcon />
          </button>
        </div>
      </div>

      {type === "Youtube" && (
        <div className="h-full w-full my-4">
          <iframe
            className="h-full w-full"
            src={embedYoutubeUrl(link)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {type === "Twitter" && (
        <div className="overflow-auto">
          <Tweet id={twitterId || ""} />
        </div>
      )}
      <p>
        Added on <u className="font-medium">{createdAt.toDateString()}</u>{" "}
      </p>

      {modalOpen && <Modal id={contentId} handleClose={handleModalToggle} />}
    </div>
  );
};

export default Card;
