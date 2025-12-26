"use server";
import { connectDB } from "@/lib/db";
import { todoSchema } from "@/validations/todo";
import { Todo } from "@/model/todo";
import z from "zod";

type TodoInput = z.input<typeof todoSchema>;

export const createTodoAction = async (data: TodoInput) => {
  try {
    const validatedData = todoSchema.parse(data);

    await connectDB();
    const createdTodo = await Todo.create({
      title: validatedData.title,
      description: validatedData.description,
      priority: validatedData.priority,
      completed: validatedData.completed,
    });

    return { success: true, data: JSON.stringify(createdTodo) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation Error:", error.issues);
    }
    console.error("Error creating todo:", error);
    return { success: false, error: "Failed to create todo." };
  }
};

export const getallTodosAction = async () => {
  try {
    await connectDB();

    const todos = await Todo.find().sort({ createdAt: -1 });

    return { success: true, data: JSON.stringify(todos) };
  } catch (error) {
    console.error("Error fetching todos:", error);

    return { success: false, error: "Failed to fetch todos." };
  }
};
