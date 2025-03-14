"use client";
import SideBar from "@/components/SideBar";
import AppBar from "@/components/AppBar";
import Card from "@/components/Card";
import AddContent from "@/components/AddContent";
import { useState } from "react";
import NoContent from "@/components/NoContent";

type ContentType = {
  id: string;
  type: "Youtube" | "Twitter";
  title: string;
  link: string;
  createdAt: Date;
};
type ClientPageProps = {
  contents: ContentType[];
};
const ClientPage: React.FC<ClientPageProps> = ({ contents }) => {
  const [displayContentModal, setDisplayContentModal] = useState(false);

  const handleDisplayContentModal = () => {
    setDisplayContentModal((prev) => !prev);
  };

  return (
    <div className="flex bg-slate-900 text-white min-h-screen">
      <SideBar />
      <div className="w-full">
        <AppBar addContentHandler={handleDisplayContentModal} />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {contents.map((content) => (
            <Card
              contentId={content.id}
              key={content.id}
              title={content.title}
              type={content.type}
              link={content.link}
              createdAt={content.createdAt}
            />
          ))}
        </div>

        {!contents.length && (
          <div className="flex h-[calc(100%-6rem)] items-center justify-center">
            <NoContent />
          </div>
        )}
        {displayContentModal && (
          <AddContent handleDisplay={handleDisplayContentModal} />
        )}
      </div>
    </div>
  );
};

export default ClientPage;
