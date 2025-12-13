//"use server is needed inside the function, not at the top level" to perform server actions like form submissions.
//server actions eliminate the api route middleman, allowing direct server-side operations from the component.

import { createUser } from "@/actions";

const UserForm = () => {
  //inline server action function (not recommended)
  // const createUser = async (formData: FormData) => {
  //   "use server";
  //   const name = formData.get("name")?.valueOf();
  //   console.log("Creating user with name:", name);
  //   // Here you would typically send the data to your backend or database
  // };

  return (
    <div className="mt-4">
      <form action={createUser} className="flex flex-col">
        <input
          className="ring-1 ring-white/10 shadow-sm border border-transparent shadow-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
          type="text"
          placeholder="Enter your name"
          name="name"
        />
        <button
          className="bg-zinc-900 px-4 py-2 mt-2 rounded-xl border border-transparent ring-1 ring-white/10 shadow-sm shadow-white/10"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
