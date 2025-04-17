"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaLinux
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiJira,
  SiTypescript,
  SiRedux,
  SiVite,
  SiFigma,
  SiEslint,
  SiTestinglibrary,
  SiJest,
  SiGithubactions,
  SiNginx,
  SiPostman,
  SiVisualstudiocode
} from "react-icons/si";
import { LampContainer } from "./ui/lamp";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const TechItem = ({ icon: Icon, label, color, duration }) => (
  <motion.div
    variants={iconVar(duration)}
    initial="initial"
    animate="animate"
    className="flex flex-col items-center gap-2 p-4 rounded-lg transition-transform hover:scale-110 duration-300"
    title={label}
  >
    <Icon className={`${color}`} style={{ width: "3rem", height: "3rem" }} />
    <span className="text-sm mt-1 tracking-wide font-light text-gray-300">
      {label}
    </span>
  </motion.div>
);

const TechSkills = () => {
  return (
    <section id="technologies">
      <h2 className="text-center text-4xl text-white mt-10 mb-4 md:mb-6 pt-10">
        Technologies
      </h2>
      <LampContainer>
        <div className="flex flex-wrap justify-center items-center gap-8 p-6 rounded-lg">
          <TechItem icon={FaReact} label="React" color="text-blue-500" duration={2.5} />
          <TechItem icon={SiNextdotjs} label="Next.js" color="text-white" duration={3} />
          <TechItem icon={SiJavascript} label="JavaScript" color="text-yellow-500" duration={3.5} />
          <TechItem icon={SiTypescript} label="TypeScript" color="text-blue-500" duration={4} />
          <TechItem icon={SiRedux} label="Redux" color="text-purple-500" duration={4.5} />
          <TechItem icon={SiTailwindcss} label="Tailwind CSS" color="text-teal-400" duration={2} />
          <TechItem icon={SiVite} label="Vite" color="text-violet-500" duration={3} />
          <TechItem icon={SiFigma} label="Figma" color="text-pink-500" duration={3.5} />
          <TechItem icon={SiEslint} label="ESLint" color="text-indigo-400" duration={2.8} />
          <TechItem icon={SiJira} label="JIRA" color="text-blue-600" duration={2.2} />
          <TechItem icon={FaGitAlt} label="Git" color="text-orange-500" duration={3} />
          <TechItem icon={SiPostman} label="Postman" color="text-orange-400" duration={2.5} />
          <TechItem icon={SiVisualstudiocode} label="VS Code" color="text-blue-400" duration={2.7} />
          <TechItem icon={SiGithubactions} label="GitHub Actions" color="text-white" duration={3} />
          <TechItem icon={SiJest} label="Jest" color="text-red-500" duration={4} />
          <TechItem icon={FaDocker} label="Docker" color="text-blue-400" duration={3.2} />
          <TechItem icon={FaLinux} label="Linux" color="text-white" duration={2.8} />
        </div>
      </LampContainer>
    </section>
  );
};

export default TechSkills;
