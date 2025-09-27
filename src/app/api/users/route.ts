import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectDB();
  return NextResponse.json({ message: "its working" });
}
