import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookiesStore = await cookies();
  cookiesStore.set("exampleCookie", "candy", {
    httpOnly: true,
    path: "/",
  });

  const readCookies = cookiesStore.get("exampleCookie")?.value;

  console.log(readCookies);

  // cookiesStore.delete("exampleCookie");

  return NextResponse.json({
    message: "Cookie route accessed",
    cookie: readCookies,
  });
}
