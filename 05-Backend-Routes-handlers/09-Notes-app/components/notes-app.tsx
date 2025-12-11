"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Trash2, Plus, Edit2, Check, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { apiClient } from "@/lib/apiClient";
import toast from "react-hot-toast";

export interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export function NotesApp({ notes: initialNotes }: { notes: Note[] }) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // Create a new note and store in the DB
  const handleAddNote = async () => {
    if (!newTitle.trim() || !newContent.trim()) return;

    try {
      const res = await apiClient.post("/notes", {
        title: newTitle,
        content: newContent,
      });
      setNotes([res.data, ...notes]);
      toast.success("Note added successfully!");

      setNewTitle("");

      setNewContent("");
    } catch (error) {
      console.error("Failed to add note:", error);
      toast.error("Failed to add note.");
    }
  };

  // Start editing a note
  const handleStartEdit = (note: Note) => {
    setEditingId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  // Save edited note patch request
  const handleSaveEdit = async (id: string) => {
    try {
      const res = await apiClient.patch(`/notes/${id}`, {
        title: editTitle,
        content: editContent,
      });

      if (res.data.success === false) {
        toast.error("Note not found.");
        return;
      }

      setNotes(notes.map((note) => (note._id === id ? res.data : note)));

      toast.success("Note updated successfully!");
    } catch (error) {
      console.error("Failed to save note:", error);
      toast.error("Failed to update note.");
    }

    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };

  // Delete a note
  const handleDeleteNote = async (id: string) => {
    try {
      const res = await apiClient.delete(`/notes/${id}`);

      if (res.data.success === false) {
        toast.error("Note not found.");
        return;
      }
      setNotes(notes.filter((note) => note._id !== id));
      toast.success(res.data.message);
    } catch (error) {
      console.error("Failed to delete note:", error);
      toast.error("Failed to delete note.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/60 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">My Notes</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto max-w-4xl p-4 md:p-8">
        {/* New Note Form */}
        <Card className="mb-8 p-6 border border-border">
          <div className="space-y-4">
            <Input
              placeholder="Note title..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="text-lg font-semibold"
            />
            <Textarea
              placeholder="Write your note here..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              rows={4}
              className="resize-none"
            />
            <div className="flex gap-2 justify-end">
              <Button
                variant={"secondary"}
                onClick={handleAddNote}
                disabled={!newTitle.trim() || !newContent.trim()}
                className="gap-2 border border-neutral-200 dark:border-neutral-700"
              >
                <Plus className="h-4 w-4" />
                Add Note
              </Button>
            </div>
          </div>
        </Card>

        {/* Notes List */}
        {notes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-2">No notes yet</p>
            <p className="text-sm text-muted-foreground">
              Create your first note above to get started
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <Card
                key={note._id}
                className="flex flex-col p-6 border border-border hover:border-accent transition-colors"
              >
                {editingId === note._id ? (
                  // Edit Mode
                  <div className="space-y-3 flex-1 flex flex-col">
                    <Input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="font-semibold"
                      placeholder="Note title"
                    />
                    <Textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      rows={4}
                      className="resize-none flex-1"
                      placeholder="Note content"
                    />
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCancelEdit}
                        className="gap-1 bg-transparent"
                      >
                        <X className="h-4 w-4" />
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleSaveEdit(note._id)}
                        className="gap-1"
                      >
                        <Check className="h-4 w-4" />
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {note.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                        {note.content}
                      </p>
                    </div>
                    <div className="space-y-3 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Updated{" "}
                        {new Date(note.updatedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleStartEdit(note)}
                          className="flex-1 gap-1"
                        >
                          <Edit2 className="h-4 w-4" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteNote(note._id)}
                          className="gap-1 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
