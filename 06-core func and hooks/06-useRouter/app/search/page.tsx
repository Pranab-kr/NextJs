"use client";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const query1 = searchParams.get("candy");
  const query2 = searchParams.get("color");

  console.log("Search query:", query1, query2);
  return (
    <div className="bg-zinc-900 px-4 py-2 border border-transparent ring-1 ring-white/10 rounded-xl text-xl shadow-sm shadow-white/10">
      <div>Search Page</div>
      <div className="text-center">{query1} {query2}</div>
    </div>
  );
};

export default page;
