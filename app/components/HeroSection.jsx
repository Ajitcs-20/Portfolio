"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/pdf/AjitResume2024.pdf'; 
    link.download = 'Ajit_frontend_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={textVariants}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-thin'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-600">Hello, I&apos;m{" "} </span>
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
          <p className='text-white text-base sm:text=lg mb-6 lg:text-xl font-thin'>
          With one year of hands-on experience in a dynamic startup environment, I bring a unique blend of creativity and technical expertise. Proficient in TypeScript, Chakra UI, and React, I am on the lookout for challenging opportunities that promote professional growth and innovation. Let&apos;s build something extraordinary together!
          </p>
          <div>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-sky-300 to-blue-600 hover:bg- text-white font-semibold"
            >
              Hire Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href='/pdf/AjitResume2024.pdf'
              onClick={handleDownload}
              className="inline-block relative px-1 py-1 w-full sm:w-fit rounded-full text-white mt-3 gradient-border"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 font-semibold">
                Download CV
              </span>
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          variants={imageVariants}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] transition-transform duration-300 hover:scale-105 flex justify-center items-center ">
            <Image
              src="/images/BlackWhite.png"
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
