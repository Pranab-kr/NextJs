"use client";

import { useClerk, useUser } from "@clerk/nextjs";

export default function Page() {
  const { isSignedIn, user, isLoaded } = useUser();

  const clerk = useClerk();

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => clerk.signOut({})}>Sign out</button>
      <h1>Hello {user?.firstName}!</h1>
    </div>
  );
}
