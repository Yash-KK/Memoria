"use server";

import { prisma } from "@/lib/prisma";
import { SignUpSchema, SignUpType } from "@/lib/types/zod";
import { hashPassword } from "@/lib/utils";

export const signUpUser = async ({
  firstName,
  lastName,
  email,
  password,
}: SignUpType) => {
  const validatedInput = SignUpSchema.safeParse({
    firstName,
    lastName,
    email,
    password,
  });
  if (!validatedInput.success) {
    return {
      message: "Validation failed",
      status: false,
      errors: validatedInput.error.format(),
    };
  }
  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExists) {
      return {
        message: "user with email already exists!",
        status: false,
      };
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
      return {
        message: "successfully created user instance",
        status: true,
      };
    } catch (error) {
      return {
        message: "failed to create user instance",
        status: false,
        error: error,
      };
    }
  } catch (error) {
    return {
      message: "something went wrong",
      error: error,
      status: false,
    };
  }
};
