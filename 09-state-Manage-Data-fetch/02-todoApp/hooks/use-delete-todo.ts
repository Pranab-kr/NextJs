import { deleteTodoAction } from "@/action/todo-action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoKeys } from "./use-create-todo";
import { useTodosStore } from "@/store/todoStore";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const removeTodo = useTodosStore((state) => state.removeTodo);

  return useMutation({
    mutationFn: (id: string) => deleteTodoAction(id),
    onSuccess: (result, id) => {
      if (result.success) {
        removeTodo(id);
      }
      queryClient.invalidateQueries({ queryKey: todoKeys.all });
    },
  });
};
