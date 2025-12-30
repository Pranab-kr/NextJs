import HomePage from "@/components/HomePage";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const sesion = await auth.api.getSession(
    {
      headers: await headers()
    }
  );

  if (!sesion) {
    redirect("/login");
  }

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Page;
