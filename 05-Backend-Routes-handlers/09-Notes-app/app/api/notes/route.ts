import { Note } from "@/model/Note";
import { connectToDB } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

// Create a new note
export async function POST(request: NextRequest) {
  try {
    await connectToDB();

    const { title, content } = await request.json();

    const newNote = await Note.create({ title, content });

    return NextResponse.json(newNote, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create note." },
      { status: 500 }
    );
  }
}

// does't need this cause page server component fetches notes directly from DB
//GET all notes
// export async function GET() {

//   try {
//     await connectToDB();

//     const notes = await Note.find().sort({ updatedAt: -1 });

//     return NextResponse.json(notes, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to fetch notes." },
//       { status: 500 }
//     );
//   }
// }
