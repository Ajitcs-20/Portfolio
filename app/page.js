"use client";
import { useEffect, useState } from 'react';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Loader from './components/Loader';
import TechSkills from "./components/TechSkills"
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
      <div className=""></div>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
       
        <AchievementsSection />
        <ProjectsSection />
        <TechSkills />
        <AboutSection />
        <EmailSection />
        
      </div>
      <Footer />
    </main>
  );
}