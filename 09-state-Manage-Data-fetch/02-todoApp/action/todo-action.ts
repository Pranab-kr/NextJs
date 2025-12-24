"use server";
import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/db";
import { todoSchema } from "@//validations/todo";
import { Todo } from "@/model/todo";
import z from "zod";

export const createTodoAction = async (formData: FormData) => {
  try {
    const validatedData = todoSchema.parse({
      title: formData.get("title"),
      description: formData.get("description"),
    });

    await connectDB();
    const createdTodo = await Todo.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
      },
    });

    revalidatePath("/");
    return { success: true, data: JSON.stringify(createdTodo) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation Error:", error.issues);
    }
    return { success: false, error: "Failed to create todo." };
  }
};
