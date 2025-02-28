"use client";
import SideBar from "@/components/SideBar";
import AppBar from "@/components/AppBar";
import Card from "@/components/Card";
import AddContent from "@/components/AddContent";
import { useState } from "react";

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
    <div className="flex bg-slate-900 text-white">
      <SideBar />
      <div className="w-full">
        <AppBar addContentHandler={handleDisplayContentModal} />
        <div className="grid grid-cols-4 gap-4">
          {contents.length > 0 ? (
            contents.map((content) => (
              <Card
                key={content.id}
                title={content.title}
                type={content.type}
                link={content.link}
                createdAt={content.createdAt}
              />
            ))
          ) : (
            <div className="flex">
              <p>Helo</p>
            </div>
          )}
        </div>

        {displayContentModal && (
          <AddContent handleDisplay={handleDisplayContentModal} />
        )}
      </div>
    </div>
  );
};

export default ClientPage;
