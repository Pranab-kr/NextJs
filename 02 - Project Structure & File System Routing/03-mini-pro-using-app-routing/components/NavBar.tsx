"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-400 shadow-sm border-b border-red-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* {logo} */}
          <div className=" shrink-0">
            <Link href="/" className="text-2xl text-neutral-950 font-bold">
              MyApp
            </Link>
          </div>

          {/* {nav links} */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-neutral-700 text- font-bold hover:text-neutral-900 px-3 py-2 rounded-md text-lg"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-neutral-700 text- font-bold hover:text-neutral-900 px-3 py-2 rounded-md text-lg"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-neutral-700 text- font-bold hover:text-neutral-900 px-3 py-2 rounded-md text-lg"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-3">
            <div className="px-2 pt-2 space-y-1">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-700 font-bold hover:text-neutral-900 hover:bg-neutral-200 block px-3 py-2 rounded-md text-base"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-700 font-bold hover:text-neutral-900 hover:bg-neutral-200 block px-3 py-2 rounded-md text-base"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-700 font-bold hover:text-neutral-900 hover:bg-neutral-200 block px-3 py-2 rounded-md text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
