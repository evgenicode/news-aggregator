"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="md:relative md:container md:mx-auto p-3 bg-sky-700">
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
          <Link href="/trending" className="hover:text-blue-300 text-slate-100">
            Trending
          </Link>
        </div>
        <Link href="/news">
          <button className="hidden md:block rounded-full bg-slate-300 p-2 px-5 pt-2 text-lime-900 hover:bg-black hover:text-white">
            Get Started
          </button>
        </Link>
        <button
          id="menu-btn"
          className={`md:hidden block hamburger focus:outline-none ${
            isOpen ? "open" : ""
          }`}
          onClick={handleMenuClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? "dropdown.open" : "dropdown"}`}>
        <div
          id="menu"
          className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 
          font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md bg-blue-700"
        >
          <Link href="/news">News</Link>
          <Link href="/">Product</Link>
          <Link href="/">About</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Community</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
