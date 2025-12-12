import { NextResponse } from "next/server";

export async function GET() {
  const currentTime = new Date();

  return NextResponse.json({
    timestamp: currentTime.toString(),
    readable: currentTime.toLocaleTimeString(),
    unix: currentTime.getTime(),
    message: "Timer api called successfully",
    requestId: Math.random().toString(36).substring(2, 15),
  });
}
