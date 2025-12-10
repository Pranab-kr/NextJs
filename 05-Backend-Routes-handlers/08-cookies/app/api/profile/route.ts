import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  //access headers from the request
  // const reqHeaders = new Headers(request.headers);

  // const authHeader = reqHeaders.get("Authorization");

  //using next/headers module
  const reqHeaders = await headers();
  const authHeader = reqHeaders.get("Authorization");
  console.log(authHeader);

  // return new Response("<h1>Profile GET endpoint</h1>", {
  //   status: 200,
  //   headers: {
  //     "Content-Type": "text/html",
  //     "custom-header": "ProfileGET-pkm",
  //   },
  // });

  const resCustom = NextResponse.json({
    success: true,
    message: "Profile GET endpoint",
  });

  resCustom.headers.set("custom-header", "ProfileGET-pkm");

  return resCustom;
}
