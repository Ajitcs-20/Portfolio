import React from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

export const Approach = () => {
  return (
    <section id="approach" className="w-full py-0">
 <h2 className="text-center text-4xl text-white mt-4 mb-8 md:mb-12">
        My approach
      </h2>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="" />}
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[[255, 166, 158], [221, 255, 247]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="" />}
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({ title, icon, children, des }) => {
  return (
    <div
      className="border border-black/[0.2] group/canvas-card flex flex-col items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
    
      <div className="absolute top-3 left-3 right-3 flex justify-center lg:justify-start lg:top-5 lg:left-5 lg:right-auto  md:block">
        <div className="">{icon}</div>
      </div>

      <div className="relative z-20 px-10">
      
        <h2 className="dark:text-white text-center text-3xl relative z-10 text-black mt-4 font-bold">
          {title}
        </h2>
      
        <p
          className="text-sm relative z-10 mt-4 text-center"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>

     
      <div className="relative mt-6 w-full">
        {children}
      </div>
    </div>
  );
};

export const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
