import { NextResponse } from "next/server";

// interface Users {
//   id: number;
//   name: string;
// }

type Users = {
  id: number;
  name: string;
};

const users: Users[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

export async function GET(request: Request) {
  try {
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
