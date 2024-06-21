"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Craft my professional story with a beautifully designed portfolio website powered by Next.js, enriched with interactive animations and TypeScript. Showcase my creativity and achievements with a seamless and captivating user experience, tailored to impress and engage visitors",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    
  },
  {
    id: 2,
    title: "Dukaan",
    description: "Experience seamless online shopping with our MERN stack-powered e-commerce platform, delivering fast, reliable, and scalable solutions for all your needs.Tech Stack: HTML, CSS(Bootstrap), JavaScript(React.js, Node.js,Express.js), MongoDB, JWT",
    image: "/images/ecomm.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ananya0902/Dukaan",
    
  },
  {
    id: 3,
    title: "Socialize",
    description: "Connect, share, and engage on our MERN stack-powered social media platform, offering a dynamic and interactive experience for users worldwide. Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js)",
    image: "/images/social.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ananya0902/Socialize",
    
  },
  {
    id: 4,
    title: "Google Drive Clone",
    description: "Discover our innovative decentralized Google Drive clone, utilizing cutting-edge technologies including Solidity for smart contracts, Ether.js for blockchain interactions, Hardhat for development and testing, OpenZeppelin for security, IPFS for decentralized storage, and Geth for Ethereum node connectivity. Experience secure, distributed file management and seamless sharing with enhanced reliability and privacy features.",
    image: "/images/gd.jpg",
    tag: ["All", "Blockchain"],
    gitUrl: "https://github.com/Ananya0902/GoogleDriveClone",
    
  },
  {
    id: 5,
    title: "Other Blochain Contracts",
    description: "Dive into our blockchain projects section showcasing innovative smart contracts such as CrowdFunding.sol, EventManagement.sol, and Lottery.sol. Experience how these decentralized applications enhance transparency, efficiency, and reliability, offering new possibilities in digital fundraising, event organization, and fair randomization.",
    image: "/images/blockchain.jpg",
    tag: ["All", "Blockchain"],
    gitUrl: "https://github.com/Ananya0902/BLOCKCHAIN",
    
  },
 
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blockchain"
          isSelected={tag === "Blockchain"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
             
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
