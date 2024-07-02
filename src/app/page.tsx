"use client";
import './globals.css';
import Image from "next/image";
import CustomProvider from "./CustomProvider";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Experience from "./components/Experience";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <CustomProvider>
    <main className="flex min-h-screen flex-col bg-[#120926]">
       
      <Navbar />
      <div className=" container mt-24 mx-auto px-12 py- 14">
      
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <Experience />
      <EmailSection />
      <Footer />
      </div>
   
    </main>
    </CustomProvider>
  );
}
