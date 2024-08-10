import React from 'react';
import { motion } from 'framer-motion';

const iconVar = (duration) => ({
    initial: {x: -10},
    animate: {
      x: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
    });


const CareerTimeline = () => {
  const milestones = [
    { id: 1, title: 'Education', description: "GLA Institute of Technology and Management", year: '2019', side: 'right' },
    { id: 2, title: 'Work Experience', description: 'React Engineer at BluePi', year: '2023 ', side: 'left' },
    { id: 3, title: 'Project', description: "RxBenefits - Next.js, TypeScript, and Chakra UI", year: '2023', side: 'right' },
    
  ];

  return (
    <div className="flex flex-col items-center justify-left h-screen w-50% rounded-xl">
      <div className="relative w-1 bg-white h-3/4  ">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`absolute w-full flex ${milestone.side === 'left' ? 'justify-end' : 'justify-start'} items-center transform transition-all duration-500 `}
            style={{ bottom: `${index * 30}%`, animationDelay: `${index * 0.5}s` }}
          >
            {milestone.side === 'left' && (
               <motion.div
               variants={iconVar(2.5)}
               initial="initial"
               animate="animate" className="mr-8">
                <div className="border-4 border-neutral-800 rounded-md p-4 shadow-lg mb-4 animate-slide-up">
                  <h3 className=" text-lg">{milestone.title}</h3>
                  <p className="text-[#ADB7BE]">{milestone.description}</p>
                  <span className="text-sm text-[#ADB7BE]">{milestone.year}</span>
                </div>
                </motion.div>
            )}
            <div className="text-lg text-sky-500 mb-4">{milestone.year}</div>
            {milestone.side === 'right' && (
               <motion.div
               variants={iconVar(5)}
               initial="initial"
               animate="animate" className="ml-8">
                <div className=" border-4 border-neutral-800 rounded-md p-4 shadow-lg mb-4 animate-slide-up">
                  <h3 className=" text-lg">{milestone.title}</h3>
                  <p className="text-[#ADB7BE]">{milestone.description}</p>
                  <span className="text-sm text-[#ADB7BE]">{milestone.year}</span>
                </div>
                </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
