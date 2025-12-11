import { type Note, NotesApp } from "@/components/notes-app";
import { Toaster } from "react-hot-toast";
import { Note as NoteModel } from "@/model/Note";
import { connectToDB } from "@/lib/db";

export const metadata = {
  title: "Notes App",
  description: "A minimal note-taking app with CRUD operations",
};

async function getNotes(): Promise<Note[]> {
  try {
    await connectToDB();
    const notes = await NoteModel.find({}).sort({ updatedAt: -1 }).lean();

    // Convert MongoDB documents to plain objects with string _id
    return notes.map((note) => ({
      _id: note._id.toString(),
      title: note.title,
      content: note.content,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt,
    }));
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return [];
  }
}

export default async function Home() {
  const allNotes = await getNotes();

  return (
    <main className="min-h-screen bg-background">
      <Toaster position="top-center" reverseOrder={false} />
      <NotesApp notes={allNotes} />
    </main>
  );
}
