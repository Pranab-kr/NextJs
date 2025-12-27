import { useTodosStore } from "@/store/todoStore";

type FilterType = "all" | "active" | "completed";

interface Todo {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
}

export const useFilterTodos = (todos: Todo[]) => {
  const filter = useTodosStore((state) => state.filter) as FilterType;
  const setFilter = useTodosStore((state) => state.setFilter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  return {
    filter,
    setFilter,
    filteredTodos,
    counts,
  };
};
