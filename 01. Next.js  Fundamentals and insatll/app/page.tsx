import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-4">
      <h1 className="font-bold items-center justify-center text-3xl">Welcome to the Home Page</h1>

      <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold py-1 px-2 rounded transition-colors duration-300 ease-in-out">
        Click Me
      </button>
    </div>
  );
}
