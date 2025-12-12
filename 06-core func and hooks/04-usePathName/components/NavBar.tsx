"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathNames = usePathname();

  return (
    <nav className="flex gap-4 bg-zinc-900 p-3 rounded-xl shadow-sm shadow-white/10 ring-1 ring-white/10 border border-transparent">
      <Link
        href={"/"}
        className={`${
          pathNames === "/" ? "font-bold underline text-neutral-400" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href={"/dashboard"}
        className={`${
          pathNames === "/dashboard"
            ? "font-bold underline text-neutral-400"
            : ""
        }`}
      >
        Dashboard
      </Link>
      <Link
        href={"/about"}
        className={`${
          pathNames === "/about" ? "font-bold underline text-neutral-400" : ""
        }`}
      >
        About
      </Link>
    </nav>
  );
};

export default NavBar;
