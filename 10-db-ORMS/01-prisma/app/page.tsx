import React from "react";
import { createPost } from "@/actions";
import PostList from "@/components/PostList";

const Home = () => {

  return (
    <div className="mx-auto container text-center max-w-4xl space-y-8 mt-8">
      <h1 className="text-3xl font-bold">Prisma Posts with Next.js</h1>

      <form action={createPost}>
        <div className="space-y-4 max-w-md mx-auto">
          <div>
            <label
              className="block mb-2 font-bold text-lg text-start px-4"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="w-full p-2 border border-transparent rounded-2xl focus:outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/10 shadow-sm shadow-white/10"
              type="text"
              id="title"
              name="title"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 font-bold text-lg text-start px-4"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="w-full p-2 border border-transparent rounded-2xl focus:outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/10 shadow-sm shadow-white/10"
              id="description"
              name="description"
            ></textarea>
          </div>
          <button
            className="px-4 py-2 bg-neutral-900 text-neutral-200 rounded-xl  hover:bg-neutral-800 border border-transparent shadow-sm shadow-white/10 ring-1 ring-white/10 transition-all duration-300 ease-out"
            type="submit"
          >
            Create Post
          </button>
        </div>
      </form>

      <PostList />
    </div>
  );
};

export default Home;
