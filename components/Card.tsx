"use client";
import { DeleteIcon, ShareIcon, TweetIcon } from "./icons";
import Label from "./ui/Label";
import { Tweet } from "react-tweet";
type CardProps = {
  type: "Youtube" | "Twitter";
};
const Card: React.FC<CardProps> = ({ type }) => {
  return (
    <div className="flex m-5 bg-slate-200 flex-col max-w-sm rounded h-96 shadow-lg px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <Label
            onLeft={<TweetIcon />}
            text="The Coldest Sunset"
            textSize="xl"
            fontWeight="bold"
          />
        </div>

        <div className="flex items-center gap-x-2">
          <ShareIcon />
          <DeleteIcon />
        </div>
      </div>
      {/* https://www.youtube.com/watch?v=w2h54xz6Ndw */}

      {type === "Youtube" && (
        <div className="h-full w-full my-4">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/w2h54xz6Ndw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {type === "Twitter" && (
        <div className="overflow-auto">
          <Tweet id="1894432786678743103" />
        </div>
      )}
      <p>Added on Feb 27 </p>
    </div>
  );
};

export default Card;
