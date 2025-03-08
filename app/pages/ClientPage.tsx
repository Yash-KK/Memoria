"use client";
import SideBar from "@/components/SideBar";
import AppBar from "@/components/AppBar";
import Card from "@/components/Card";
import AddContent from "@/components/AddContent";
import { useEffect, useState } from "react";
import Alert from "@/components/ui/Alert";
import { CheckIcon } from "@/components/icons";
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
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => setAlert(false), 4000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alert]);
  const handleDisplayContentModal = () => {
    setDisplayContentModal((prev) => !prev);
  };
  const handleDisplayAlert = () => {
    setAlert(true);
  };
  return (
    <div className="flex bg-slate-900 text-white h-screen">
      <SideBar />
      <div className="w-full">
        <AppBar addContentHandler={handleDisplayContentModal} />
        <div className="grid grid-cols-4 gap-4">
          {contents.map((content) => (
            <Card
              key={content.id}
              title={content.title}
              type={content.type}
              link={content.link}
              createdAt={content.createdAt}
            />
          ))}
        </div>
        {alert && (
          <div className="fixed bottom-4 right-4 z-50">
            <Alert text="Content Added" iconLeft={<CheckIcon />} />
          </div>
        )}
        {!contents.length && (
          <div className="flex h-[calc(100%-6rem)] items-center justify-center">
            <NoContent />
          </div>
        )}
        {displayContentModal && (
          <AddContent
            handleDisplay={handleDisplayContentModal}
            handleAlert={handleDisplayAlert}
          />
        )}
      </div>
    </div>
  );
};

export default ClientPage;
