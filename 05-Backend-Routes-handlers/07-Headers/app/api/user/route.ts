import { NextRequest, NextResponse } from "next/server";
import { users } from "../home/route";

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();
    if (!name) {
      return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
    }

    const existingUSer = users.find((user) => user.name === name);
    if (existingUSer) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const newUser = {
      id: users.length + 1,
      name,
    };

    users.push(newUser);

    return NextResponse.json(
      { message: "User added successfully", users },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
