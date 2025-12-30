"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logged in user {session.user?.email}</p>
      <p>Logged in user {session.user?.name}</p>

      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/login");
              },
            },
          })
        }
      >
        Sign Out
      </Button>
    </div>
  );
};

export default HomePage;
