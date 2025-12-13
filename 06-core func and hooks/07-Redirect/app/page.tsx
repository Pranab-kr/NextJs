import { redirect } from "next/navigation";

const page = () => {
  const isLogin = false;

  if (!isLogin) {
    return redirect("/login");
  }

  return (
    <div>
      <div>Main Page</div>
    </div>
  );
};

export default page;
