import { updateTodoAction } from "@/action/todo-action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoKeys } from "./use-create-todo";
import { useTodosStore } from "@/store/todoStore";

interface UpdateTodoParams {
  id: string;
  data: {
    title?: string;
    description?: string;
    completed?: boolean;
    priority?: "low" | "medium" | "high";
  };
}

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const updateTodo = useTodosStore((state) => state.updateTodo);

  return useMutation({
    mutationFn: ({ id, data }: UpdateTodoParams) => updateTodoAction(id, data),
    onSuccess: (result, variables) => {
      if (result.success) {
        updateTodo(variables.id, variables.data);
      }
      queryClient.invalidateQueries({ queryKey: todoKeys.all });
    },
  });
};
