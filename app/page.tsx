import { redirect } from "next/navigation";
import SideBar from "@/components/SideBar";
import AppBar from "@/components/AppBar";
import Card from "@/components/Card";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

const getContents = async (userId: string, userEmail: string) => {
  const contents = await prisma.content.findMany({
    where: {
      user: {
        id: userId,
        email: userEmail,
      },
    },
  });
  return contents;
};
const Page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  const contents = await getContents(session.user.id, session.user.email);

  return (
    <div className="flex bg-slate-900 text-white">
      <SideBar />
      <div className="w-full">
        <AppBar />
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
      </div>
    </div>
  );
};

export default Page;
