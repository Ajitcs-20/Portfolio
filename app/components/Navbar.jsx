"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink'

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Technologies",
    path: "#technologies",
  },
  {
    title: "Contact",
    path: "#contact",
  }
];

export default function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-[#ADB7BE]">
          <Image
            src="/images/code.png"
            alt="LOGO"
            className="object-cover"
            width="40"
            height="40"
          />
        </Link>

        <div className="mobile-menu block md:hidden ">
          {!navBarOpen ? (
            <button onClick={() => setNavBarOpen(true)} className="flex items-center px-3 py-2 border rounded border-l-slate-200 text-slate-200 hover:text-white hover:border-white">
              <FaBars className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavBarOpen(false)} className="flex items-center px-3 py-2 border rounded border-l-slate-200 text-slate-200 hover:text-white hover:border-white">
              <FaTimes className="h-5 w-5" />
            </button>
          )}
        </div>

        <AnimatePresence>
          {navBarOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-[#121212] rounded-lg shadow-lg"
            >
              <ul className="flex flex-col space-y-2 p-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path} className="block px-4 py-2 text-slate-200 hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="menu hidden md:block md:w-auto" ad="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
