import authOptions from "@/lib/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions });
  if (!session) {
    redirect("/signup");
  }

  const contents = await prisma.content.findMany({
    where: {
      user: {
        email: session.user.email as string,
        id: session.user.id,
      },
    },
    select: {
      id: true,
      title: true,
      type: true,
      link: true,
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
  return NextResponse.json({
    status: true,
    contents: contents,
  });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions });
  if (!session) {
    redirect("/signup");
  }
  const { title, type, link } = await req.json();
  if (!title || !type || !link) {
    return NextResponse.json({
      status: false,
      message: "title, type and link required",
    });
  }

  try {
    const newContent = await prisma.content.create({
      data: {
        title: title,
        type: type,
        link: link,
        userId: session.user.id,
      },
    });

    return NextResponse.json({
      status: true,
      message: "successfully added new content",
      body: newContent,
    });
  } catch {
    return NextResponse.json({
      status: false,
      message: "failed to add new content",
    });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions });
  if (!session) {
    redirect("/signup");
  }
  const { contentId } = await req.json();

  if (!contentId) {
    return NextResponse.json({
      status: false,
      message: "contentId required",
    });
  }

  try {
    await prisma.content.delete({
      where: {
        id: contentId,
      },
    });
    return NextResponse.json({
      status: true,
      message: "successfully deleted content",
    });
  } catch {
    return NextResponse.json({
      status: false,
      message: "failed to delete content",
    });
  }
}
