import { useTodosStore } from "@/store/todoStore";
import { todoSchema } from "@/validations/todo";
import {createTodoAction} from "@/action/todo-action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

type TodoFormData = z.input<typeof todoSchema>;

export const todoKeys = {
  all: ["todos"] as const,
  lists: () => [...todoKeys.all, "list"] as const,
}

export const useCreateTodo = () => {
  const queryCliet = useQueryClient();

  const addTodo = useTodosStore((state) => state.addTodo);

  return useMutation({
    mutationFn: (data: TodoFormData) => createTodoAction(data),
    onSuccess: (result) => {
      if (result.success && result.data) {
        const todo = JSON.parse(result.data);
        addTodo(todo);
        queryCliet.invalidateQueries({ queryKey: todoKeys.lists() });
      }
    },
  });
}
