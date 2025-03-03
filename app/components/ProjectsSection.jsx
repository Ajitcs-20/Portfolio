"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { HoverEffect } from "./ui/HoverEffect";



const projectsData = [
  {
    id: 1,
    title: "Pricing",
    description: "TypeScript, NextJS, MUI, GIT, API Integration",
    image: "./images/rxBenfits.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "RxBenefits",
    description: "TypeScript, NextJS, CSS, ChakraUI ",
    image: "./images/rxBenfits.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Driver Drowsiness Real-time detection system",
    description: "Pyhton, OpenCV, Deep Learning, CNN, TensorFlow",
    image: "./images/REstore.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ajitcs-20/Restaurant-Website",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Star Rating",
    description: "React JS, Javascript, CSS",
    image: "./images/react-star-rating.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ajitcs-20/Star_Rating_with_NextJS",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "QuoraOfCollege social platform",
    description: "React, JavaScript",
    image: "./images/quora.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ajitcs-20/QuoraOfCollege",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Restaurant-Website",
    description: "HTML, CSS, JavaScript, PHP",
    image: "./images/REstore.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ajitcs-20/Restaurant-Website",
    previewUrl: "/",
  },
 
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section id="projects">
<h2 className="text-center text-4xl text-white mt-4 mb-8 md:mb-12">
My Projects
      </h2>
     
      

      <div ref={ref}>
        <HoverEffect items={filteredProjects} />
      </div>
    </section>
  );
};

export default ProjectsSection;