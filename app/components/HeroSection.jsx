"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleGoToLinkedIn = () => {
    setShowModal(false);
    window.open("https://www.linkedin.com/in/ajit-sharma-ajitcse20/", "_blank");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    const link = document.createElement('a');
    link.href = `${window.location.origin}/pdf/Ajit_Resume2025.pdf`;
      link.download = 'Ajit_Resume2025.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };
  // const handleDownload = (e) => {
  //   e.preventDefault();
  
  //   // simulate file missing or disable download
  //   const resumeAvailable = false; // simulate resume not available
  
  //   if (!resumeAvailable) {
  //     const goToLinkedIn = window.confirm(
  //       "Resume is currently unavailable.\nWould you like to view/download it from LinkedIn?"
  //     );
  //     if (goToLinkedIn) {
  //       window.open("https://www.linkedin.com/in/ajit-sharma-ajitcse20/", "_blank");
  //     }
  //     return;
  //   }
  
  //   // If resume becomes available later:
  //   const link = document.createElement('a');
  //   link.href = '/pdf/Ajit_Resume2025.pdf';
  //   link.download = 'Ajit_Resume2025.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  
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
       <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-6 w-[90%] max-w-md text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                Resume Unavailable
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                My updated resume is currently not available for direct download. Would you like to view or download it from LinkedIn?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleGoToLinkedIn}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Go to LinkedIn
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-200 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
                'React.js Developer',
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
          With more than 1.5 years of hands-on experience in a dynamic startup environment, I bring a unique blend of creativity and technical expertise. Proficient in React.js, Next.js and TypeScript. I am on the lookout for challenging opportunities that promote professional growth and innovation. Let&apos;s build something extraordinary together!
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
        <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] transition-transform duration-300 hover:scale-105 flex justify-center items-center">
  <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700">
    <div className="w-full h-full rounded-full bg-black p-[3px]">
      <Image
        src="./images/BlackWhite.png"
        alt="profile picture"
        className="rounded-full object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
