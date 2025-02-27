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
  console.log("session: ", session);
  if (!session) {
    redirect("/signin");
  }
  const contents = await getContents(session.user.id, session.user.email);

  return (
    <div className="flex bg-slate-300">
      <SideBar />
      <div>
        <AppBar />
        <div className="grid grid-cols-4 gap-4">
          {/*   A loop to display all cards here */}
          {contents.length > 0 ? (
            contents.map((content) => (
              <Card
                key={content.id}
                title={content.title}
                type={content.type}
                link={content.link}
              />
            ))
          ) : (
            <>
              <p>Helo</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
