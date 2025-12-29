import { getAllPosts } from "@/actions";
import { prisma } from "@/lib/db";
import React from "react";

const PostList = async () => {
  // directly fetching inside the component from prisma
  // const posts = await prisma.post.findMany({
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  const posts = await getAllPosts();


  return (
    <div className="space-y-8">
      <h1 className="text-xl font-bold border-b-2 py-6 border-neutral-900">
        Post List
      </h1>
      <div className="grid gap-3 grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border border-transparent rounded-2xl focus:outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/10 shadow-sm shadow-white/10"
          >
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <p>{post.description || "No description provided."}</p>
            <p className="text-sm text-gray-500 mt-2">
              Created At: {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
