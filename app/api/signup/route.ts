import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({
    message: "sign up route",
    status: true,
  });
}

export function POST() {
  return NextResponse.json({
    message: "post",
    status: true,
  });
}
