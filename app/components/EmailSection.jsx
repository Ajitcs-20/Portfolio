"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
  
    const response = await fetch(endpoint, options);
    const resData = await response.json();
  
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      console.error("Error sending message: ", resData.message);
    }
  };
  

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-3">
         <span className=" bg-white rounded-full"> <Link href="https://github.com/Ajitcs-20">
            <Image src={'/images/github.png'} alt="Github Icon" width="40" height="40" />
          </Link></span>
          <Link href="https://www.linkedin.com/in/ajit-sharma-ajitcse20/">
           <Image src={'/images/linkedin.png'} alt="Linkedin Icon" width="37" height="37" /> 
          </Link>
          <Link href="mailto:ajitsharma4789@gmail.com">
           <Image src={'/images/gmail.png'} alt="Mail Icon" width="40" height="40" /> 
          </Link>
        </div>
      </div>
     
    </section>
  );
};

export default EmailSection;