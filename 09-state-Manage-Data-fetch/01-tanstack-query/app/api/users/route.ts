// Query --> fetching data from this API route
// Mutation -->  Put, Post, Delete data to this API route

import { NextRequest, NextResponse } from "next/server";

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

// GET /api/users
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return NextResponse.json(users);
}

// POST /api/users
export async function POST(request: NextRequest) {
  const { name, email } = await request.json();
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}
