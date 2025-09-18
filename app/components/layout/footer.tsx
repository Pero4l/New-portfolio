import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="flex flex-col items-center gap-3">
        {/* Back to Top */}
        <Link href="#home" className="flex flex-col  items-center gap-2 cursor-pointer hover:text-blue-400">
          <MdKeyboardDoubleArrowUp size={20} />
          <p className="font-semibold">Back To Top</p>
        </Link>

        {/* Social Icons */}
        <div className="flex gap-4 text-3xl">
          <FaFacebookSquare className="cursor-pointer hover:text-blue-500" />
          <FaLinkedin className="cursor-pointer hover:text-blue-700" />
          <FaSquareGithub className="cursor-pointer hover:text-gray-400" />
          <FaInstagramSquare className="cursor-pointer hover:text-pink-500" />
          <FaSquareXTwitter className="cursor-pointer hover:text-sky-400" />
        </div>

        {/* Copyright */}
        <div className="">
          <p><span className="font-semibold">&copy;{new Date().getFullYear()} PETER IDIKU</span> All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
