"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getallTodosAction } from "@/action/todo-action";
import { useUpdateTodo } from "@/hooks/use-update-todo";
import { useFilterTodos } from "@/hooks/use-filter-todos";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useDeleteTodo } from "@/hooks/use-delete-todo";
import { Trash2 } from "lucide-react";

interface Todo {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
}

const priorityColors = {
  low: "secondary",
  medium: "default",
  high: "destructive",
} as const;

const TodoList = () => {
  const { data: todos = [], isLoading, isError } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const result = await getallTodosAction();
      if (result.success && result.data) {
        return JSON.parse(result.data);
      }
      throw new Error(result.error || "Failed to fetch todos");
    },
  });

  const { filter, setFilter, filteredTodos, counts } = useFilterTodos(todos);
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  const handleDelete = (id: string) => {
    deleteTodoMutation.mutate(id, {
      onSuccess: (result) => {
        if (result.success) {
          toast.success("Todo deleted successfully");
        } else {
          toast.error("Failed to delete todo");
        }
      },
      onError: () => {
        toast.error("An error occurred while deleting");
      },
    });
  };

  const handleToggleComplete = (todo: Todo) => {
    updateTodoMutation.mutate(
      { id: todo._id, data: { completed: !todo.completed } },
      {
        onSuccess: (result) => {
          if (result.success) {
            toast.success(
              todo.completed ? "Todo marked as pending" : "Todo marked as completed"
            );
          } else {
            toast.error("Failed to update todo");
          }
        },
        onError: () => {
          toast.error("An error occurred while updating");
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-destructive mt-8 py-10">
        <p className="text-lg">Failed to load todos</p>
        <p className="text-sm">Please try again later.</p>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="text-center text-muted-foreground mt-8 py-10">
        <p className="text-lg">No todos yet!</p>
        <p className="text-sm">Create your first todo to get started.</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          All ({counts.all})
        </Button>
        <Button
          variant={filter === "active" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("active")}
        >
          Active ({counts.active})
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("completed")}
        >
          Completed ({counts.completed})
        </Button>
      </div>

      {/* Todo Grid */}
      {filteredTodos.length === 0 ? (
        <div className="text-center text-muted-foreground py-10">
          <p className="text-lg">No {filter} todos</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTodos.map((todo) => (
        <Card
          key={todo._id}
          className={todo.completed ? "opacity-60" : ""}
        >
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <CardTitle
                className={
                  todo.completed ? "line-through text-muted-foreground" : ""
                }
              >
                {todo.title}
              </CardTitle>
              <Badge variant={priorityColors[todo.priority]}>
                {todo.priority}
              </Badge>
            </div>
            {todo.description && (
              <CardDescription className="mt-1">
                {todo.description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => handleToggleComplete(todo)}
                disabled={updateTodoMutation.isPending}
              />
              <span className="text-sm text-muted-foreground">
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Created: {new Date(todo.createdAt).toLocaleDateString()}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDelete(todo._id)}
              disabled={deleteTodoMutation.isPending}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
