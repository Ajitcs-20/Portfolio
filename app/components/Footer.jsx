import React from "react";
import Image from "next/image";
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href="/" className="text-[#ADB7BE]">
          <Image
            src="/images/code.png"
            alt="LOGO"
            className="object-cover"
            width="40"
            height="40"
          />
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;