import React from 'react'
import Image from 'next/image'
export const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold' ><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm{" "} </span>
          Ajit</h1>
        <p className='text-[#ADB7BE]  text-base sm:text=lg mb-6 lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed eum sit quaerat consectetur exercitationem neque perspiciatis cupiditate quas non.
        </p>
        <div>'
          <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white">Hire Me</button>
          <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-transparent  hover:bg-slate-800 text-white  border-white mt-3">Download CV</button>
        </div>
        </div>
        <div className='col-span-1 lg:col-span-5 place-self-center mt-4 lg:mt-0 '>
            <div className='rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative overflow-hidden'>
            <Image src="/images/myImage.png" alt="image" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover w-full h-full" width={300} height={300}/>
            
        </div>
        </div>
        </div>
    </section>
  )
}
