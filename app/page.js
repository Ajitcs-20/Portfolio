import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import TechSkills from "./components/TechSkills"
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  const iconImages = [
    { src: '/images/icons8-html.png', text: 'HTML' },
    { src: '/images/icons8-css.png', text: 'CSS' },
    { src: '/images/icons8-javascript.png', text: 'JavaScript' },
    { src: '/images/icons8-react-js.png', text: 'React JS' },
    { src: '/images/icons8-tailwind-css.png', text: 'Tailwind CSS' },
    { src: '/images/icons8-typescript.png', text: 'TypeScript' },
    { src: '/images/icons8-git.png', text: 'Git' },
    { src: '/images/icons8-github.png', text: 'GitHub' },
    { src: '/images/icons8-java.png', text: 'Java' },
    { src: '/images/icons8-jira.png', text: 'Jira' },
    { src: '/images/icons8-slack.png', text: 'Slack' },
    { src: '/images/icons8-vs-code.png', text: 'VS Code' },
    // ... more images
  ];
  
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <TechSkills iconImages={iconImages}/>
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}