"use client";

import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/dashboard");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="text-center">
      <h1>Login Page</h1>
      <button
        onClick={handleClick}
        className="px-4 mt-4 py-2 rounded-2xl bg-zinc-900 "
      >
        DashBoard Page
      </button>
      <button
        onClick={handleGoBack}
        className="px-4 mt-4 py-2 rounded-2xl bg-zinc-900 "
      >
        Go Back
      </button>
    </div>
  );
};

export default LoginPage;
