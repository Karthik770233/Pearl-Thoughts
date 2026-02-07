import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || user.password !== password) {
    return NextResponse.json({
      message: "Invalid credentials",
    });
  }

  return NextResponse.json({
    message: "Login successful",
  });
}
