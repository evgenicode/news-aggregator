import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

library.add(faFacebook);

const Footer = () => {
  return (
    <footer className="md:relative md:container md:mx-auto p-3 bg-gray-600">
      <div className="flex items-center justify-between">
        <div className="pt-0">
          <img src="favicon.ico" alt="logo" className="h-10" />
        </div>

        <div className="flex space-x-6">
          <Link href="https://www.facebook.com" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-slate-100"
              size="2x"
            />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-slate-100"
              size="2x"
            />
          </Link>

          <Link href="/" className="hover:text-blue-300 text-slate-100">
            About
          </Link>
          <Link href="/news" className="hover:text-blue-300 text-slate-100">
            News
          </Link>
        </div>
        <button className="hidden md:block rounded-full bg-slate-300 p-2 px-5 pt-2 text-lime-900 hover:bg-black hover:text-white">
          Subscribe to Newsletter
        </button>
      </div>
    </footer>
  );
};

export default Footer;
