import Image from "next/image";
import React from "react";
import Link from "next/link";
const notFound = () => {
  return <div>
    <Image
      src="/undraw_page-not-found_6wni.svg"
      alt="Not Found"
      width={500}
      height={500}
      className="hidden md:block"
    />
    <div>
    <h1 className="mt-20 text-center font-bold ">404 - Page Not Found</h1>
    <Link href="/" className="text-center text-xl text-neutral-500  mt-4 block">Go back to Home</Link>
    </div>
  </div>;
};

export default notFound;
