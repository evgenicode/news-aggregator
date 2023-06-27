import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="md:relative md:container md:mx-auto p-3 bg-green-700">
      <div className="flex items-center justify-between">
        <div className="pt-0">
          <img src="favicon.ico" alt="logo" className="h-10" />
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-300 text-slate-100">
            Home
          </Link>
          <Link href="/" className="hover:text-blue-300 text-slate-100">
            About
          </Link>
          <Link href="/news" className="hover:text-blue-300 text-slate-100">
            News
          </Link>
        </div>
        <button className="hidden md:block rounded-full bg-slate-300 p-2 px-5 pt-2 text-lime-900 hover:bg-black">
          Rndbtn
        </button>
      </div>
    </header>
  );
};

export default Header;
