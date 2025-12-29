"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Seed the database with initial data
export async function seedDB() {
  await prisma.post.createMany({
    data: [
      {
        title: "First Post",
        description: "This is the description for the first post.",
      },
      {
        title: "Second Post",
        description: "This is the description for the second post.",
      },
      {
        title: "Third Post",
      },
    ],
  });
  console.log("Seed data has been inserted.");
}

// Create a new post in the database
export async function createPost(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const description = formData.get("description")?.toString() || "";

  const post = await prisma.post.create({
    data: {
      title,
      description,
    },
  });

  revalidatePath("/");
  console.log("data inserted ✅ ");
  return {
    success: true,
    data: post,
  };
}

// Fetch all posts from the database
export async function getAllPosts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return posts;
}
