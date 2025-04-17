"use client";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink'

const navLinks = [
  {
    title: "Home",
    path: "#home",
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
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  }
];

export default function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const closeMobileMenu = () => setNavBarOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu(); 
      }
    };
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 500; 
        const sectionHeight = section.offsetHeight;
      
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(`#${section.id}`);
          setNavBarOpen(false);
        }
      });
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-[#ADB7BE] hover:text-white">
          <Image
            src="./images/code.webp"
            alt="LOGO"
            className="object-cover"
            width="40"
            height="40"
          />
        </Link>

        <div className="mobile-menu block md:hidden">
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
                    <Link href={link.path} className={`block py-2 pl-3 pr-4 hover:text-white ${
          currentSection === link.path ? "text-blue-400 font-bold" : "text-[#ADB7BE]"
        }`}>
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
              <NavLink href={link.path} title={link.title} currentSection={currentSection}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
