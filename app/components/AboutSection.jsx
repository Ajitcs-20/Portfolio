"use client";
import React, { useTransition, useState } from "react";
import CareerTimeline from './CareerTimeline';
import TabButton from "./TabButton";

const TAB_DATA = [
 

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>GLA Institute of Technology and Management</li>
        <li>Shah Faiz Public School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Data Science with Python by RemarkSkills</li>
       
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <CareerTimeline />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
          I am a recent graduate with a BTech in Computer Science and Engineering from GLA Institute of Technology and Management. Over the past year, I have honed my skills as a Frontend Developer at BluePi Consulting Pvt. Ltd. In this role, I have been responsible for developing and maintaining frontend components for critical projects using React.js, TypeScript, and Chakra UI.

One of my significant projects was the RxBenefits initiative, where I successfully integrated APIs and managed version control with Git and GitHub. This experience has not only strengthened my technical skills but also enhanced my ability to collaborate effectively with both teams and clients, ensuring timely and high-quality project deliveries.

I am deeply passionate about creating user-centric and innovative solutions. I am excited about the opportunity to contribute my skills and experiences to your team. Thank you.


          </p>
          <div className="flex flex-row justify-start mt-8 ">
           
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