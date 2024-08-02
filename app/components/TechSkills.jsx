"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiJira } from 'react-icons/si';

const iconVar = (duration) => ({
initial: {y: -10},
animate: {
  y: [10, -10],
  transition: {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  }
}
});

const TechSkills = ({ iconImages }) => {
  return (
    <div >
       <h2 className="text-center text-4xl  text-white mt-10 mb-8 md:mb-12 pt-10">
         Technologies
      </h2>
   
      <div className="flex flex-wrap justify-center items-center gap-4 bg-black p-6 rounded-lg">
      <motion.div
      variants={iconVar(2.5)}
      initial="initial"
      animate="animate"
       className="border-4 border-neutral-800 p-4 rounded-lg hover:scale-110 transform transition duration-300" title="React">
        <FaReact className="text-blue-500" style={{ width: '3rem', height: '3rem' }} />
      </motion.div>
      <motion.div
      variants={iconVar(5)}
      initial="initial"
      animate="animate" className="border-4 border-neutral-800 p-4 rounded-lg hover:scale-110 transform transition duration-300" title="Next.js">
        <SiNextdotjs className="text-white" style={{ width: '3rem', height: '3rem' }} />
        </motion.div>
      
      <motion.div
      variants={iconVar(6)}
      initial="initial"
      animate="animate" className="border-4 border-neutral-800 p-4 rounded-lg hover:scale-110 transform transition duration-300" title="JavaScript">
        <SiJavascript className="text-yellow-500" style={{ width: '3rem', height: '3rem' }} />
        </motion.div>
      <motion.div
      variants={iconVar(4)}
      initial="initial"
      animate="animate" className="border-4 border-neutral-800 p-4 rounded-lg hover:scale-110 transform transition duration-300" title="Java">
        <FaJava className="text-red-500" style={{ width: '3rem', height: '3rem' }} />
        </motion.div>
      <motion.div
      variants={iconVar(7)}
      initial="initial"
      animate="animate" className="border-4 border-neutral-800 p-4 rounded-lg hover:scale-110 transform transition duration-300" title="Git">
        <FaGitAlt className="text-orange-500" style={{ width: '3rem', height: '3rem' }} />
        </motion.div>
      <motion.div
      variants={iconVar(3)}
      initial="initial"
      animate="animate" className="border-4 border-neutral-800 p-4 rounded-lg hover:scale-110 transform transition duration-300" title="Tailwind CSS">
        <SiTailwindcss className="text-teal-400" style={{ width: '3rem', height: '3rem' }} />
        </motion.div>
      <motion.div
      variants={iconVar(2)}
      initial="initial"
      animate="animate" className="border-4 border-neutral-800 p-4 rounded-lg hover:scale-110 transform transition duration-300" title="JIRA">
        <SiJira className="text-blue-600" style={{ width: '3rem', height: '3rem' }} />
        </motion.div>
    </div>
    </div>
  );
};

export default TechSkills;
