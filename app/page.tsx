import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import ClientPage from "./pages/ClientPage";

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
  return <ClientPage contents={contents} />;
};

export default Page;
