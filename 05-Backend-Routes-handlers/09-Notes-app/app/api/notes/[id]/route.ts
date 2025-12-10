import { connectToDB } from "@/lib/db";
import { Note } from "@/model/Note";
import { NextRequest, NextResponse } from "next/server";

// Update a note
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDB();

    const { id } = await params;

    const { title, content } = await request.json();

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    return NextResponse.json(updatedNote, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update note." },
      { status: 500 }
    );
  }
}

// Delete a note
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDB();

    const { id } = await params;
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Note deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete note." },
      { status: 500 }
    );
  }
}
