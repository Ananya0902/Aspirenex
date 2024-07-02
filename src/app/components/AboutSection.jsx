"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS, JavaScript/TypeScript</li>
        <li>React.js, Node.js, Express.js, Next.js</li>
        <li>MongoDb, MYSQL, PostgreSQL</li>
        <li>Core Java, C Programming, Python, Linux/Unix</li>
        <li>Operating System,Computer Networking, System Design, Distributed System, DBMS </li>
        <li>Solidity, Solana, web3.js, Ether.js, Hardhat,Truffle, Openzeppelin, IPFS, Geth</li>
        <li>Graphic Design, Figma, Microsoft Excel, Prompt Engineering, Cisco Packet Tracer</li>
        <li> Versatility, Leadership, Teamwork, Decision Making, Communication, Problem Solving</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>National Institute of Technology Arunachal Pradesh</li>
         <p>--Btech- Computer Science and Engineering</p>
         <p>--CGPA- 8.67(current)</p>
        <li>Little Flower House , Nagwa Varanasi</li>
        <p>--12th</p>
        <p>--95.4%</p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction to Artificial Intelligence</li>
         <p>--IBM Skillsbuild</p>
         <p>--Proficiency in Supervised, Unsupervised Machine Learning Algorithm, Prompt Engineering, LLMs.</p>
        <li>Artificial Intelligence Fundamental</li>
        <p>--IBM Skillsbuild</p>
        <p>--learned Natural Language Processing, AI Ethics, Machine Learning Advance</p>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  
  return (
    <section className="text-white " id="about">
      <div className=  "md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      
      
      <motion.img
        src="/images/profile.jpeg"
        alt="Profile"
        width={300}
        height={300}
        className="rounded-full border-8 border-[#474153] hover:border-[#474153] transition duration-300 ease-in-out"
        whileHover={{ scale: 1.1, rotateY: 180 }}
    
        
      />


        <div className="mt-6 p-6 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-white text-3xl font-extrabold my-20">About Me</h2>
          <p className="text-base text-gray-400 lg:text-lg hover:text-pink-400 font-bold transition-duration-150">
          As a full-stack web developer, I excel at blending design and technology to create seamless experiences. With a strong foundation in networking and cryptography, I am intrigued by blockchains potential and am actively learning its intricacies. I approach challenges humbly, embracing continuous learning. My work ethic emphasizes diligence, efficiency, and growth. Always a student at heart, Iam  committed to achieving my goals through hard work and ongoing learning.
          </p>
          <div className="flex flex-row justify-start mt-8">
  <TabButton
    selectTab={() => handleTabChange("skills")}
    active={tab === "skills"}
    className={tab === "skills" ? "text-pink-800 " : "text-gray-500"}
  >
    Skills
  </TabButton>
  <TabButton
    selectTab={() => handleTabChange("education")}
    active={tab === "education"}
    className={tab === "education" ? "text-pink-800" : "text-gray-500"}
  >
    Education
  </TabButton>
  <TabButton
    selectTab={() => handleTabChange("certifications")}
    active={tab === "certifications"}
    className={tab === "certifications" ? "text-pink-800 " : "text-gray-500"}
  >
    Certifications
  </TabButton>
</div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



