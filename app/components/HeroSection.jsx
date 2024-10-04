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
    <section id="home" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={textVariants}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-semibold'>
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
          <p className='text-white text-base sm:text=lg mb-6 lg:text-xl'>
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
              className=" relative inline-flex overflow-hidden rounded-full p-[1px]  w-full sm:w-fit text-white mt-3 "
            >
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-block h-full w-full cursor-pointer items-center sm:w-fit
        justify-center rounded-full bg-slate-950 px-6 py-3 text-purple backdrop-blur-3xl font-semibold"
        >
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
              src="public/images/BlackWhite.png"
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
