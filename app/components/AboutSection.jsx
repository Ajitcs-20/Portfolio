"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>GIT & GitHub</li>
        <li>HTML/CSS</li>
        <li>JIRA</li>
        <li>OOPs</li>
       
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] ">
          I am a recent graduate with a BTech in Computer Science and Engineering from GLA Institute of Technology and Management. Over the past year, I have honed my skills as a Frontend Developer at BluePi Consulting Pvt. Ltd. In this role, I have been responsible for developing and maintaining frontend components for critical projects using React.js, TypeScript, and Chakra UI.

One of my significant projects was the RxBenefits initiative, where I successfully integrated APIs and managed version control with Git and GitHub. This experience has not only strengthened my technical skills but also enhanced my ability to collaborate effectively with both teams and clients, ensuring timely and high-quality project deliveries.

I am deeply passionate about creating user-centric and innovative solutions. I am excited about the opportunity to contribute my skills and experiences to your team. Thank you for considering my application. I look forward to discussing how I can add value to your projects.


          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;