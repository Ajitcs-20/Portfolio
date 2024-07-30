"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

 
 const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
        <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold' >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-600">Hello, I'm{" "} </span>
         <br></br>
          <TypeAnimation
      sequence={[
        
        'Ajit',
        1000,
        'Frontend Developer',
        1000,
        'Full Stack Developer',
        1000,
        'Software Engineer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
      </h1>
        <p className='text-[#ADB7BE]  text-base sm:text=lg mb-6 lg:text-xl '>
        Detail-oriented and motivated Frontend Developer with one year of experience in a
 startup environment. Skilled in TypeScript, Chakra UI, and React, I am actively
 seeking challenging opportunities that foster professional growth and allow me to
 contribute my expertise to innovative projects.
        </p>
        <div>
        <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-sky-300 to-blue-600 hover:bg- text-white"
            >
              Hire Me
            </Link>
           <Link
  href="/"
  className="inline-block relative px-1 py-1 w-full sm:w-fit rounded-full text-white mt-3 gradient-border"
>
  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
    Download CV
  </span>
</Link>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
       <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] transition-transform duration-300 hover:scale-105 flex justify-center items-center decorative-border">
  <Image
    src="/images/profile-pic.png"
    alt="profile picture"
    className="rounded-full object-cover"
    fill
    sizes="(max-width: 768px) 100vw, 400px"
  />
</div>




        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;