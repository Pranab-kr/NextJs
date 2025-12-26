import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { connectDB } from "@/lib/db";

const page = async () => {
  // await connectDB();

  return (
    <div className="min-h-screen mx-auto max-w-2xl1 container border">
      <div className=" border-b px-4 py-8 text-center">
        <h1 className="mb-4 text-3xl font-bold ">Todo List</h1>
        <p className="text-muted-foreground ">
          Build with Next.js 15, Zustant , Tansatck Query, Zod and MongoDB
        </p>
      </div>
      <main className="flex justify-center mt-8">
        <TodoForm />
      </main>

      <div className="pt-8 mt-6 border-t">
        <TodoList />
      </div>
      {/* <footer className="mt-12 text-center text-sm text-muted-foreground  border-t">
        <p className="pt-4">
          This app demonstrates the use of Next.js 15 features.

        </p>
      </footer> */}
    </div>
  );
};

export default page;
