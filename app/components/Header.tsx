import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative container bg-red-500">
      <Link href="/">Home</Link>
      <div className="links">
        <Link href="/">About</Link>
        <Link href="/news">News</Link>
      </div>
    </header>
  );
};

export default Header;
