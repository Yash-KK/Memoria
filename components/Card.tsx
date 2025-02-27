"use client";
import { embedYoutubeUrl } from "@/lib/utils";
import { DeleteIcon, ShareIcon, TweetIcon } from "./icons";
import Label from "./ui/Label";
import { Tweet } from "react-tweet";

type CardProps = {
  type: "Youtube" | "Twitter";
  title: string;
  link: string;
};
const Card: React.FC<CardProps> = ({ title, type, link }) => {
  const twitterId = type === "Twitter" && link.split('/').at(-1);
  return (
    <div className="flex m-5 bg-slate-200 flex-col max-w-sm rounded h-96 shadow-lg px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <Label
            onLeft={<TweetIcon />}
            text={title}
            textSize="xl"
            fontWeight="bold"
          />
        </div>

        <div className="flex items-center gap-x-2">
          <ShareIcon />
          <DeleteIcon />
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
          <Tweet id={twitterId || ''} />
        </div>
      )}
      <p>Added on Feb 27 </p>
    </div>
  );
};

export default Card;
