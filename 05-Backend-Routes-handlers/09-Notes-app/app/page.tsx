import { NotesApp } from "@/components/notes-app";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Notes App",
  description: "A minimal note-taking app with CRUD operations",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Toaster position="top-center" reverseOrder={false} />
      <NotesApp />
    </main>
  );
}
