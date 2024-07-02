import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { scale: 1.25 ,  rotateY: 360},
  };
  const transition = {
    duration: 2, // Set the duration here
  };
  return (
    <motion.div>
      <motion.div
        className="h-52 md:h-72 rounded-t-xl relative group"
        variants={cardVariants}
      whileHover="hover"
      transition={transition}
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          
        </div>
      </motion.div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
      <h5 className="text-xl font-semibold mb-2 hover:text-pink-800">{title}</h5>
<p className="text-[#ADB7BE] hover:text-pink-400">{description}</p>

      </div>
    </motion.div>
  );
};

export default ProjectCard;