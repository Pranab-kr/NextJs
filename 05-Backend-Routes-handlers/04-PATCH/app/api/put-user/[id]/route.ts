import { NextResponse , NextRequest } from "next/server";
import { users } from "../../home/route";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const userID = parseInt(id, 10);

    const userIndex = users.findIndex((user) => user.id === userID);
    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { name } = await request.json();
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    users[userIndex].name = name;

    return NextResponse.json(users[userIndex], { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
