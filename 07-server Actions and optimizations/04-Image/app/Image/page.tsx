import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="rounded-xl ring-1 ring-white/10 shadow-sm shadow-white/10  border-transparent border p-4">
        <Image
          src="/samurai.png"
          alt="Samurai Image"
          width={500}
          height={500}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default page;
