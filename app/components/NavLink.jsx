"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function NavLink({ href, title }) {
  const [currentSection, setCurrentSection] = useState("");
 
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 500; // Adjust offset for accuracy
        const sectionHeight = section.offsetHeight;
      
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(currentSection);
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
