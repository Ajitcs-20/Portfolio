"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description: "Next.js, React.js, JavaScript, Tailwind CSS",
    image: "/images/image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ajitcs-20/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Star Rating",
    description: "Project 2 description",
    image: "/images/react-star-rating.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ajitcs-20/Star_Rating_with_NextJS",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "QuoraOfCollege social platform",
    description: "React, JavaScript",
    image: "/images/quora.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ajitcs-20/QuoraOfCollege",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Restaurant-Website",
    description: "HTML, CSS, JavaScript, PHP",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Ajitcs-20/Restaurant-Website",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "RxBenfits",
    description: "TypeScript, NextJS, CSS, ChakraUI ",
    image: "/images/rxBenfits.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
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
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
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