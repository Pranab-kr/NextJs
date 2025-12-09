import { NextResponse } from "next/server";
import { users } from "../../home/route";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const userId = parseInt(id, 10);

    if (!userId) {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    const isUsersExist = users.some((user) => user.id === userId);
    if (!isUsersExist) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    users.splice(userIndex, 1);

    return NextResponse.json({ updatedUsers: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while deleting the user" },
      { status: 500 }
    );
  }
}
