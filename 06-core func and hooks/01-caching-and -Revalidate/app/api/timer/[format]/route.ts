import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ format: string }> }
) {
  const currentTime = new Date();
  const { format } = await params;

  const data = {
    timestamp: currentTime.toString(),
    readable: currentTime.toLocaleTimeString(),
    unix: currentTime.getTime(),
    message: "Timer api called successfully",
    requestId: Math.random().toString(36).substring(2, 15),
  };

  switch (format) {
    case "utc":
      data.readable = currentTime.toUTCString();
      break;
    case "iso":
      data.readable = currentTime.toISOString();
      break;
    case "locale":
      data.readable = currentTime.toLocaleString();
      break;
    default:
      data.readable = currentTime.toLocaleTimeString();
      break;
  }
  return NextResponse.json(data);
}
