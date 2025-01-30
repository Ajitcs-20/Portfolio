"use client";
import { FaEnvelope, FaLinkedin, FaGithub, FaRegCopy } from 'react-icons/fa';
import { useState } from 'react';
const EmailSection = () => {

 
  const [copied, setCopied] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text); 
    setTimeout(() => setCopied(''), 2000); 
  };


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
        
        <div className="socials flex flex-col items-start gap-3 p-3 ">
 
      <button className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"  title="Copy Email"  onClick={() => handleCopy('ajitsharma4789@gmail.com')}>
        <FaEnvelope size="2rem" className="text-red-500" />
        <p className="text-[#ADB7BE] font-semibold">
          ajitsharma4789@gmail.com
        </p>
   
        <FaRegCopy
          size="1rem"
          className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors duration-300"
          onClick={() => handleCopy('ajitsharma4789@gmail.com')}
          title="Copy Email"
        />
      </button>
      {copied === 'ajitsharma4789@gmail.com' && <p className="text-green-500">Email copied to clipboard!</p>}

      

        <button className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"   title="Copy LinkedIn URL" onClick={() => handleCopy('https://www.linkedin.com/in/ajit-sharma-ajitcse20/')} >
          <FaLinkedin size="2rem" className="text-blue-700" />
          <p className="text-[#ADB7BE] font-semibold">/ajit-sharma-ajitcse20</p>
          <FaRegCopy
            size="1rem"
            className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors duration-300"
            onClick={() => handleCopy('https://www.linkedin.com/in/ajit-sharma-ajitcse20/')}
            title="Copy LinkedIn URL"
          />
        </button>
        {copied === 'https://www.linkedin.com/in/ajit-sharma-ajitcse20/' && <p className="text-green-500">LinkedIn link copied!</p>}

       
        <button className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"  onClick={() => handleCopy('https://github.com/Ajitcs-20')}  title="Copy GitHub URL">
          <FaGithub size="2rem" className="text-white" />
          <p className="text-[#ADB7BE] font-semibold">/Ajitcs-20</p>
          <FaRegCopy
            size="1rem"
            className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors duration-300"
            onClick={() => handleCopy('https://github.com/Ajitcs-20')}
            title="Copy GitHub URL"
          />
        </button>
        {copied === 'https://github.com/Ajitcs-20' && <p className="text-green-500">GitHub link copied!</p>}
      </div>
    </div>
     
    </section>
  );
};

export default EmailSection;