"use server";

import { db } from "@/lib/db";
import { usersTable } from "@/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { desc } from 'drizzle-orm';

// create a new user
export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const age = Number(formData.get("age"));
  const isActive = formData.get("isActive") === "true" ? true : false;

  const user = await db
    .insert(usersTable)
    .values({
      name,
      email,
      age,
      isActive,
    })
    .returning({
      id: usersTable.id,
      name: usersTable.name,
    });

  revalidatePath("/users");

  return user;
}

// fetch all users
export async function getUsers() {
  const users = await db.select().from(usersTable).orderBy(desc(usersTable.createdAt));
  return users;
}

//update user
export async function updateUser(formData: FormData, userId: string) {
  const name = formData.get("name") as string;
  const isActive = formData.get("isActive") === "true" ? true : false;

  const updatedUser = await db
    .update(usersTable)
    .set({
      name,
      isActive,
    })
    .where(eq(usersTable.id, userId))
    .returning({
      name: usersTable.name,
      isActive: usersTable.isActive,
    });

  revalidatePath("/users");

  return updatedUser;
}

//delete user
export async function deleteUser(userId: string) {
  await db.delete(usersTable).where(eq(usersTable.id, userId));
  revalidatePath("/users");
}
