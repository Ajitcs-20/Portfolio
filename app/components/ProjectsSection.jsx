"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RxBenefits",
    description: "TypeScript, NextJS, CSS, ChakraUI ",
    image: "./images/rxBenfits.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Star Rating",
    description: "React JS, Javascript, CSS",
    image: "./images/react-star-rating.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ajitcs-20/Star_Rating_with_NextJS",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "QuoraOfCollege social platform",
    description: "React, JavaScript",
    image: "./images/quora.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ajitcs-20/QuoraOfCollege",
    previewUrl: "/",
  },
  {
    id: 5,
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
     
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;