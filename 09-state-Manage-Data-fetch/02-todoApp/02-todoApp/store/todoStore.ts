import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Todo } from "@/model/todo";

type Todo = {
  id: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  filter: string;
  setFilter: (filter: string) => void;
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  setLoading: (isLoading: boolean) => void;
}

export const useTodosStore = create<TodoState>()(
  devtools(
    (set, get) => ({
      todos: [],
      filter: "all",
      isLoading: false,

      setTodos: (todos: Todo[]) => set({ todos }),

      addTodo: (todo: Todo) =>
        set((state) => ({ todos: [...state.todos, todo] })),

      setFilter: (filter: string) => set({ filter }),

      setLoading: (isLoading: boolean) => set({ isLoading }),

      removeTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: "TodoStore", // name of the store for devtools
    }
  )
);
