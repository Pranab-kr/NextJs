import { NextRequest, NextResponse } from "next/server";

// interface Users {
//   id: number;
//   name: string;
// }

type Users = {
  id: number;
  name: string;
};

export const users: Users[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const name = searchParams.get("name");

  let filteredUsers = users;

  if (name) {
    filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  try {
    return NextResponse.json(filteredUsers);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
