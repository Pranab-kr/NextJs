import Image from "next/image";

const page = async () => {
  console.log("Hello form server!");

  const res = await fetch("https://api.github.com/users/Pranab-kr");
  const data = await res.json();
  console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1>Home Page</h1>
      <h2>GitHub UserName: {data?.name}</h2>
      <div className="mt-6 p-8">
        <Image
          className="rounded-2xl"
          src={data?.avatar_url}
          alt="GitHub Avatar"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default page;
