"use client";
import { useEffect, useState } from 'react';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { WavyBackground } from "./components/ui/wavy-background";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { TimelineDemo } from './components/TimelineDemo';
import ProjectsSection from "./components/ProjectsSection";
import Loader from './components/Loader';
import { Approach } from './components/Approach';
import TechSkills from "./components/TechSkills";

import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <main className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
      <WavyBackground className="max-w-8xl mx-auto pb-40">
        <HeroSection />
        </WavyBackground>
       <AchievementsSection />  
        <ProjectsSection />
       
        <TechSkills />
       
         <Approach /> 
        <TimelineDemo/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}