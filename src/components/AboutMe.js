import React from "react";
import { motion } from "framer-motion"; 
import Abhi from "../images/Abhi_image.jpeg";

function AboutMe() {
  // Scroll animation settings
  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="bg-black flex flex-wrap ml-16 py-8  px-16 gap-8">
      {/* Left Section: About Me */}
      <motion.div
        className="w-full md:w-1/2"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimation}
        viewport={{ once: true }}
      >
        <div className="relative flex items-center">
          <div className="font-bold text-3xl text-white">About Me</div>
          <div className="border-t border-gray-700 w-40 ml-6 mt-2" />
        </div>

        <p className="leading-relaxed my-4 font-semibold text-xl text-gray-500">
          Hi, I'm Abhishek — a full-stack developer with solid experience in the
          MERN stack and a strong grasp of Data Structures and Algorithms. Since
          2021, I've built scalable apps like e-commerce platforms, file
          managers, and expense management systems. I enjoy problem-solving,
          exploring new tech, and collaborating with developer communities. I'm
          currently learning Socket.io to dive deeper into real-time web
          applications.
        </p>
      </motion.div>

      {/* Right Section: Hello Box with Image */}
      <motion.div
        className="w-full md:w-1/3 bg-gray-800 border border-gray-800 rounded-2xl p-4 h-96 text-white hover:scale-105 hover:bg-gray-700 transition-all duration-300"
        whileHover={{
          scale: 1.05, // Slightly scale the box on hover
          backgroundColor: "#2d2d2d", // Darken the background on hover
        }}
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <img
            src={Abhi}
            alt="Abhishek_image"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
