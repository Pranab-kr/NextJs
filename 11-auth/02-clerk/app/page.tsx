import Client from "@/components/client";
import {
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import React from "react";

const HomePage = async () => {
  const {userId}  = await auth();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <UserButton />
      {userId ? (
        <p>User is signed in with ID: {userId}</p>
      ) : (
        <p>User is not signed in.</p>
      )}

      <Client />
    </div>
  );
};

export default HomePage;
