"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <h1>
        Dashboard Page
        <button
          onClick={handleGoBack}
          className="px-4 mt-4 py-2 rounded-2xl bg-zinc-900 "
        >
          Go Back
        </button>
      </h1>
    </div>
  );
};

export default page;
