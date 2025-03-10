"use client"
import React from 'react';
import { FaReact, FaJava, FaGitAlt, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiJira, SiMysql, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';

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
    
    <section id="technologies" >
      <h2 className="text-center text-4xl text-white mt-10 mb-4 md:mb-6 pt-10">
         Technologies
      </h2>
      <LampContainer>
      <div className="flex flex-wrap justify-center items-center gap-4 p-6 rounded-lg">
  {/* React */}
  <motion.div
    variants={iconVar(2.5)}
    initial="initial"
    animate="animate"
    className=" p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="React"
  >
    <FaReact className="text-blue-500" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>

  {/* Next.js */}
  <motion.div
    variants={iconVar(5)}
    initial="initial"
    animate="animate"
    className=" p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="Next.js"
  >
    <SiNextdotjs className="text-white" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>

  {/* JavaScript */}
  <motion.div
    variants={iconVar(6)}
    initial="initial"
    animate="animate"
    className=" p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="JavaScript"
  >
    <SiJavascript className="text-yellow-500" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>

  {/* Java */}
  <motion.div
    variants={iconVar(4)}
    initial="initial"
    animate="animate"
    className=" p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="Java"
  >
    <FaJava className="text-red-500" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>
  {/* Git */}
  <motion.div
    variants={iconVar(7)}
    initial="initial"
    animate="animate"
    className=" p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="Git"
  >
    <FaGitAlt className="text-orange-500" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>

  {/* Tailwind CSS */}
  <motion.div
    variants={iconVar(3)}
    initial="initial"
    animate="animate"
    className=" p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="Tailwind CSS"
  >
    <SiTailwindcss className="text-teal-400" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>

  {/* JIRA */}
  <motion.div
    variants={iconVar(2)}
    initial="initial"
    animate="animate"
    className="p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="JIRA"
  >
    <SiJira className="text-blue-600" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>

  {/* Python */}
  <motion.div
    variants={iconVar(8)}
    initial="initial"
    animate="animate"
    className=" p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="Python"
  >
    <FaPython className="text-blue-600" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>

  {/* SQL */}
  <motion.div
    variants={iconVar(9)}
    initial="initial"
    animate="animate"
    className="p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="SQL"
  >
    <SiMysql className="text-blue-500" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>

  {/* TypeScript */}
  <motion.div
    variants={iconVar(10)}
    initial="initial"
    animate="animate"
    className=" p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="TypeScript"
  >
    <SiTypescript className="text-blue-500" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>

  {/* Node.js */}
  <motion.div
    variants={iconVar(11)}
    initial="initial"
    animate="animate"
    className=" p-4 rounded-lg hover:scale-110 transform transition duration-300"
    title="Node.js"
  >
    <FaNodeJs className="text-green-600" style={{ width: '3rem', height: '3rem' }} />
  </motion.div>
</div>
</LampContainer>

    </section>
  );
};

export default TechSkills;
