"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Spinner } from "./ui/spinner";
import { Button } from "./ui/button";

type User = {
  id: number;
  name: string;
  email: string;
};

async function fetchUsers() {
  const response = await fetch("/api/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

const UserList = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  console.log(users);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {isLoading && (
        <p className="font-bold">
          <Spinner className="mr-2 inline" /> Loading users...
        </p>
      )}
      {error && <p className="text-red-500">Error loading users</p>}
      {users &&
        users?.map((user: User) => (
          <Card
            key={user.id}
            className="shadow-sm drop-shadow-black/10 dark:drop-shadow-white/10 drop-shadow-sm"
          >
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <h1>User ID: {user.id}</h1>
              <p>Name: {user.name}.</p>
              <p>Email: {user.email}.</p>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default UserList;
