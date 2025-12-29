import React from "react";
import { getUsers, deleteUser } from "@/actions/index";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { EditUserDialog } from "@/components/EditUserDialog";

const UserPage = async () => {
  const users = await getUsers();

  const handleDelete = async (userId: string) => {
    "use server";
    await deleteUser(userId);
  }

  return (
    <div className="mx-auto container max-w-4xl mt-6 space-y-6">
      <h1 className="text-3xl border-b-2 pb-4 font-bold text-center">
        Users List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Age:</span> {user.age}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={
                      user.isActive ? "text-green-600" : "text-gray-500"
                    }
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <form action={handleDelete.bind(null, user.id)}>
                <Button type="submit" variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </form>
              <EditUserDialog
                userId={user.id}
                userName={user.name}
                userStatus={user.isActive}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
