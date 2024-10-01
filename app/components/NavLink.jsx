"use client";
import Link from 'next/link';
import React from 'react';

export default function NavLink({ href, title, currentSection }) {


  return (
    <section>
    <Link href={href} className={`block py-2 pl-3 pr-4 hover:text-white ${
          currentSection === href ? "text-blue-400 font-bold" : "text-[#ADB7BE]"
        }`}>
      {title}
    </Link>
    </section>
  );
}
