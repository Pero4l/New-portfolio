import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
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
        <div className="flex gap-4 text-4xl lg:text-5xl pt-5">
          <Link href="https://www.facebook.com/Dev.Ptb?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="cursor-pointer hover:text-blue-600" />
          </Link>

          <Link href="https://www.linkedin.com/in/peter-idiku-911178338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="cursor-pointer hover:text-blue-700" />
          </Link>

          <Link href="https://github.com/Pero4l" target="blank" rel="noopener noreferrer">
            <FaSquareGithub className="cursor-pointer hover:text-gray-400" />
          </Link>

          <Link href="https://www.instagram.com/pero4l/" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className="cursor-pointer hover:text-pink-500" />
          </Link>

          <Link href="https://x.com/pero4l?s=21">
          <FaSquareXTwitter className="cursor-pointer hover:text-gray-900" />
          </Link>

          <Link href="https://www.youtube.com/@Pero_media1">
          <IoLogoYoutube className="cursor-pointer hover:text-red-500" />
          </Link>
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
