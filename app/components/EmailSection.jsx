"use client";
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
const EmailSection = () => {

 
  

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        
        <div className="socials flex flex-row gap-3">
        <div className="flex justify-center  bg-black p-6 rounded-lg">
      <a href="mailto:ajitsharma4789@gmail.com" title="ajitsharma4789@gmail.com" className="m-2 p-4 bg-gray-800 rounded-lg hover:scale-110 transform transition duration-300">
        <FaEnvelope size="2rem" className="text-red-500" />
      </a>
      <a href="https://www.linkedin.com/in/ajit-sharma-ajitcse20/" title="/ajit-sharma-ajitcse20" className="m-2 p-4 bg-gray-800 rounded-lg hover:scale-110 transform transition duration-300">
        <FaLinkedin size="2rem" className="text-blue-700" />
      </a>
      <a href="https://github.com/Ajitcs-20" title="/Ajitcs-20" className="m-2 p-4 bg-gray-800 rounded-lg hover:scale-110 transform transition duration-300">
        <FaGithub size="2rem" className="text-white" />
      </a>
    </div>
         
        </div>
       
      </div>
     
    </section>
  );
};

export default EmailSection;