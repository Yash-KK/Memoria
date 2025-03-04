import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import ClientPage from "./pages/ClientPage";
import { ContentType } from "@prisma/client";

const getContents = async (
  userId: string,
  userEmail: string,
  type?: ContentType
) => {
  const contents = await prisma.content.findMany({
    where: {
      user: {
        id: userId,
        email: userEmail,
      },
      ...(type && { type }),
    },
  });
  return contents;
};
const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ type: ContentType }>;
}) => {
  const { type } = await searchParams;

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  const capitalizeType: ContentType =
    type &&
    ((String(type[0]).toUpperCase() + String(type).slice(1)) as ContentType);
  const contents = await getContents(
    session.user.id,
    session.user.email,
    type === undefined ? undefined : capitalizeType
  );

  return <ClientPage contents={contents} />;
};

export default Page;
