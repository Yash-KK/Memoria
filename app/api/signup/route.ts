import { prisma } from "@/lib/prisma";
import { SignUpSchema, SignUpType } from "@/lib/types";
import { NextResponse, NextRequest } from "next/server";
import { hashPassword } from "@/lib/utils";

export async function GET() {
  return NextResponse.json({
    message: "sign up route",
    status: true,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedResult = SignUpSchema.safeParse(body);
    if (!validatedResult.success) {
      return NextResponse.json({
        message: "invalid inputs",
        status: false,
      });
    }
    const { email, firstName, lastName, password }: SignUpType =
      validatedResult.data;

    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExists) {
      return NextResponse.json({
        message: "user with email already exists!",
        status: false,
      });
    }
    const hashedPassword = await hashPassword(password);

    try {
      await prisma.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hashedPassword,
        },
      });
      return NextResponse.json({
        message: "successfully created user instance",
        status: true,
      });
    } catch (error) {
      return NextResponse.json({
        message: "failed to create user instance",
        status: false,
        error: error,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: error,
      status: false,
    });
  }
}
