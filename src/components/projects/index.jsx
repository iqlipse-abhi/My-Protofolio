"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <div>
      <div>
        <h1 className="flex items-center justify-center font-bold text-4xl mb-5">
          Projects
        </h1>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
      >
        {projects.map((project, index) => {
          return <ProjectLayout key={index} {...project} />;
        })}
      </motion.div>
    </div>
  );
};

export default ProjectList;
