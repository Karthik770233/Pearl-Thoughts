import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  const { role } = await req.json();

  // TEMP: update last created user
  const user = await prisma.user.findFirst({
    orderBy: { id: "desc" }
  });

  if(user){
    await prisma.user.update({
      where: { id: user.id },
      data: { role }
    });
  }

  return NextResponse.json({ success: true });
}
