"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Pricing Portal",
    description: "A responsive pricing portal with REST API integration and authentication.",
    image: "./images/pricing.png",
    tag: ["All", "Web", "NextJS", "TypeScript", "MUI", "API"],
    gitUrl: "/",
    previewUrl: "https://pricing-forntend-dev-869822853736.asia-south1.run.app/login",
  },
  {
    id: 2,
    title: "RxBenefits App",
    description: "An internal web app for employee benefit tracking.",
    image: "./images/rxb2.png",
    tag: ["All", "Web", "NextJS", "TypeScript", "ChakraUI"],
    gitUrl: "/",
    previewUrl: "https://www.rxbenefits.com/",
  },
  {
    id: 3,
    title: "Driver Drowsiness Detector",
    description: "Real-time fatigue detection system to prevent accidents.",
    image: "./images/REstore.jpg",
    tag: ["All", "Mobile", "Python", "OpenCV", "TensorFlow"],
    gitUrl: "https://github.com/Ajitcs-20/Restaurant-Website",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Star Rating",
    description: "A reusable and customizable star rating component.",
    image: "./images/react-star-rating.webp",
    tag: ["All", "Web", "React", "JavaScript", "CSS"],
    gitUrl: "https://github.com/Ajitcs-20/Star_Rating_with_NextJS",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "QuoraOfCollege",
    description: "Student-centric Q&A platform for knowledge sharing.",
    image: "./images/quora.png",
    tag: ["All", "Web", "React", "JavaScript"],
    gitUrl: "https://github.com/Ajitcs-20/QuoraOfCollege",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Foodies — Restaurant Site",
    description: "Multi-page static website for a restaurant.",
    image: "./images/REstore.jpg",
    tag: ["All", "Mobile", "HTML", "CSS", "JavaScript", "PHP"],
    gitUrl: "https://github.com/Ajitcs-20/Restaurant-Website",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl text-white mt-4 mb-12 font-bold tracking-widest">
        🚀 Featured Projects
      </h2>
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            className="rounded-xl overflow-hidden shadow-lg bg-[#1f1f1f] hover:scale-105 transition-transform duration-300"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="p-4">
              <h5 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h5>
              <p className="text-sm text-gray-400 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tag
                  .filter((t) => !["All", "Web", "Mobile"].includes(t))
                  .map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.gitUrl}
                  className="text-sm text-blue-400 hover:underline"
                >
                  GitHub
                </Link>
                <Link
                  href={project.previewUrl}
                  className="text-sm text-green-400 hover:underline"
                >
                  Live Preview
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
