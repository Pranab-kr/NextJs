"use client";

import { useState } from "react";

const page = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p className="text-lg ml-2 font-semibold">Count: {count}</p>
      <button
        className="py-2 px-4 mt-4 bg-neutral-900 hover:bg-neutral-800 transition-colors ease-in-out duration-300 rounded-2xl"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default page;
