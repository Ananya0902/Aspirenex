"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4  text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-4xl sm:text-5xl lg:text-8xl">
              Namaste, I am{" "}
            </span>
            <br></br>
            <TypeAnimation 
              sequence={[
                "Ananya Srivastava",
                1000,
                "Web Developer",
                1000,
                "Blockchain Enthusiast",
                1000,
                "Coder...",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Hi, I am Ananya Srivastava, a final-year BTech (CSE) student at NIT Arunachal Pradesh. I specialize in full-stack web development and have a strong interest in blockchain technology. I am committed to continuous learning and aspire to become a software developer.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-400 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://docs.google.com/document/d/1sUbiadGQ9z94t9tnJrLROpBEWnRuxyBE/edit?usp=drivesdk&ouid=117577804973330524779&rtpof=true&sd=true"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" bg-[#231d2e] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
          <motion.img
              src="/images/giphy.gif" // Replace with your actual GIF URL
              alt="animated gif"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={350}
              height={350}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;