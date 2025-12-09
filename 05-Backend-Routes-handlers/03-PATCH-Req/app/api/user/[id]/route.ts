import { NextResponse } from "next/server";
import { users } from "@/app/api/home/route";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const userID = parseInt(id, 10);

    const user = users.find((user) => user.id === userID);
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
