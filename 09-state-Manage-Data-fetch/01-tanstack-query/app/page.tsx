import AddUser from "@/components/AddUser";
import UserList from "@/components/UserList";

export default function Page() {
  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl text-center font-bold mb-4">
        Tanstack Query Demo
      </h1>
      <div className="space-y-6">
        <AddUser />
        <UserList />
      </div>
    </main>
  );
}
