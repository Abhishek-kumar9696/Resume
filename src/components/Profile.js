import React from "react";
import { motion } from "framer-motion";

function Profile() {
  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="bg-black h-screen px-16 py-8">
      <motion.div
        className="ml-16 mt-8 font-bold text-green-600 w-1/2"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimation}
        viewport={{ once: true }}
      >
        <p>Hi, my name is</p>
        <p className="text-6xl font-bold text-white">Abhishek.</p>
        <p className="text-6xl font-bold text-gray-500">Software Developer.</p>
        <p className="text-xl font-bold text-gray-500 my-7">
          I'm currently{" "}
          <span className="text-green-500 font-semibold underline">
            pursuing a degree
          </span>{" "}
          in CS major. Currently focused on web technologies and{" "}
          <span className="text-green-500 font-semibold underline">
            JS frameworks
          </span>{" "}
          to create dynamic and interactive web apps.
        </p>

        <div className="flex gap-12">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 10,
            }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://github.com/Abhishek-kumar9696">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="limegreen"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path d="M12 .5C5.7.5.6 5.6.6 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7.8 2 .6.1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.3.1-2.7 0 0 1-.3 3.2 1.2a10.7 10.7 0 015.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.4.1 2.4.1 2.7.7.9 1.2 2 1.2 3.2 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2.1v3.1c0 .4.3.7.8.6a11.5 11.5 0 007.8-10.9C23.4 5.6 18.3.5 12 .5z" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 10,
            }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.linkedin.com/in/abhi4268/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="limegreen"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5 2.5 2.5 0 000-5zm.02 4.5H2v14h3V8zm5 0H7v14h3v-7c0-2 2-2.2 2 0v7h3v-8c0-4-4-3.8-5-1v-1z" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 10,
            }}
            transition={{ duration: 0.3 }}
          >
            <a href="mailto:abhishek160704kumar@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="limegreen"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1l-10 6L2 5V4zm0 3.2V20a2 2 0 002 2h16a2 2 0 002-2V7.2l-10 6-10-6z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Profile;
