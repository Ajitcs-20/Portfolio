"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Pricing Portal",
    description:
      "A responsive pricing portal with REST API integration and authentication.",
    image: "./images/pricing.webp",
    tag: ["All", "Web", "NextJS", "TypeScript", "MUI", "API"],
    gitUrl: "/",
    previewUrl:
      "https://pricing-forntend-dev-869822853736.asia-south1.run.app/login",
  },
  {
    id: 2,
    title: "RxBenefits App",
    description: "An internal web app for employee benefit tracking.",
    image: "./images/Rxb2.webp",
    tag: ["All", "Web", "NextJS", "TypeScript", "ChakraUI"],
    gitUrl: "/",
    previewUrl: "https://www.rxbenefits.com/",
  },
  // {
  //   id: 3,
  //   title: "Driver Drowsiness Detector",
  //   description: "Real-time fatigue detection system to prevent accidents.",
  //   image: "/", // Make sure to update with a valid image path
  //   tag: ["All", "Mobile", "Python", "OpenCV", "TensorFlow"],
  //   gitUrl: "https://github.com/Ajitcs-20/Restaurant-Website",
  //   previewUrl: "/",
  // },
  {
    id: 5,
    title: "QuoraOfCollege",
    description: "Student-centric Q&A platform for knowledge sharing.",
    image: "./images/quora.webp",
    tag: ["All", "Web", "React", "JavaScript"],
    gitUrl: "https://github.com/Ajitcs-20/QuoraOfCollege",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl text-white mt-4 mb-12  tracking-widest">
        Projects
      </h2>
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:px-12"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            className="rounded-xl overflow-hidden shadow-lg bg-[#1f1f1f] hover:scale-105 transition-transform duration-300"
          >
            <div className="relative group w-full rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <h5 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h5>
                <p className="text-sm text-gray-300 mb-3">
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
