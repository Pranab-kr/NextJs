"use server";
import { connectDB } from "@/lib/db";
import { todoSchema } from "@/validations/todo";
import { Todo } from "@/model/todo";
import z from "zod";

type TodoInput = z.input<typeof todoSchema>;

// Action to create a new todo
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

// Action to get all todos
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

// Action to update a todo
export const updateTodoAction = async (
  id: string,
  data: Partial<TodoInput>
) => {
  try {
    await connectDB();

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );

    if (!updatedTodo) {
      return { success: false, error: "Todo not found." };
    }

    return { success: true, data: JSON.stringify(updatedTodo) };
  } catch (error) {
    console.error("Error updating todo:", error);
    return { success: false, error: "Failed to update todo." };
  }
};

// Action to delete a todo
export const deleteTodoAction = async (id: string) => {
  try {
    await connectDB();

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return { success: false, error: "Todo not found." };
    }

    return { success: true, data: JSON.stringify(deletedTodo) };
  } catch (error) {
    console.error("Error deleting todo:", error);
    return { success: false, error: "Failed to delete todo." };
  }
};
