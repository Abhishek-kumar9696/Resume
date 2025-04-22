import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

import styleStreet from "../images/styleStreet.png";
import expense_management_image from "../images/Expense_management_system.png";
import DocuBox from "../images/DocuBox.png";

function Projects() {
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
    <div className="bg-black ml-16 px-16 mt-8">
      <motion.div
        className="flex"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimation}
        viewport={{ once: true }}
      >
        <div className="font-bold text-3xl text-white">Projects</div>
        <div className="border-t border-gray-700 w-72 ml-6 mt-3 " />
      </motion.div>

      {/* Project 1: StyleStreet */}
      <motion.div
        className="ml-1 my-8 flex gap-8"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimation}
        viewport={{ once: true }}
      >
        {/* Left Section: Text */}
        <div className="w-1/2">
          <div className="font-bold text-3xl text-white">StyleStreet</div>
          <div className="flex items-center gap-4 mt-2">
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
            <a href="https://style-street-frontend-backend.vercel.app">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#28a745"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
              </svg>
            </a>
          </div>
          <p className="text-lg font-bold text-green-500">
            (MongoDB, Express.js, React, Node.js), Cloudinary, JWT Auth,
            Braintree Payments
          </p>
          <p className="my-4 text-gray-500">
            StyleStreet is a community-driven platform that helps graduating
            college seniors pass on essential goods — including study materials,
            electronics, furniture, and everyday items — to their juniors. It
            addresses the challenge of managing and redistributing useful
            resources within the college community. The platform features secure
            user authentication, product uploads with images, advanced search
            and filter options, and a smooth claiming process. Integrated with
            the Braintree payment gateway, it supports secure card payments for
            items being handed over. StyleStreet promotes sustainability,
            reduces waste, and builds a culture of sharing and support among
            students.
          </p>
        </div>

        {/* Right Section: Image with hover animation */}
        <motion.div
          className="w-1/2 mt-32 mr-16 ml-4"
          whileHover={{ scale: 1.1 }} // Scale the image when hovered
          transition={{ duration: 0.3 }}
        >
          <a
            href="https://style-street-frontend-backend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={styleStreet}
              alt="StyleStreet Project"
              className="rounded-lg shadow-lg w-full h-auto"
              // style={{ opacity: 0.7 }}
            />
          </a>
        </motion.div>
      </motion.div>

      {/*  Expense Management System */}
      <motion.div
        className="ml-1 my-8 flex gap-8"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimation}
        viewport={{ once: true }}
      >
        {/* Left Section: Text */}
        <div className="w-1/2">
          <div className="font-bold text-3xl text-white ">
            Expense Management System
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://github.com/Abhishek-kumar9696/Expense_management">
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
            <a href="https://expense-management-frontend-i5hb.onrender.com/">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#28a745"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
              </svg>
            </a>
          </div>
          <p className="text-lg font-bold text-green-500">
            (MongoDB, Express.js, React, Node.js), Bootstrap, Ant Design, JWT
            Auth Payments
          </p>
          <p className="my-4 text-gray-500">
            Expense Management System is a user-friendly full-stack application
            that helps individuals efficiently manage and track their daily
            expenses. Built using the MERN stack, the platform allows users to
            add, edit, delete, and filter their expenses while maintaining data
            security with JWT-based authentication. The system provides a clean
            and intuitive dashboard with various charts to visualize spending
            patterns and insights over time.
          </p>
        </div>

        {/* Right Section: Image with hover animation */}
        <motion.div
          className="w-1/2 mt-32 mr-16 ml-4"
          whileHover={{ scale: 1.1 }} // Scale the image when hovered
          transition={{ duration: 0.3 }}
        >
          <a
            href="https://expense-management-frontend-i5hb.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={expense_management_image}
              alt="Expense Management System Project"
              className="rounded-lg shadow-lg w-full h-auto"
              // style={{ opacity: 0.7 }}
            />
          </a>
        </motion.div>
      </motion.div>
      {/* Project 3: DocuBox */}
      <motion.div
        className="ml-1 my-8 flex gap-8"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimation}
        viewport={{ once: true }}
      >
        {/* Left Section: Text */}
        <div className="w-1/2">
          <div className="font-bold text-3xl text-white">DocuBox</div>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://github.com/Abhishek-kumar9696/DocuBox">
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
            <a href="https://docubox-5w3s.onrender.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#28a745"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
              </svg>
            </a>
          </div>
          <p className="text-lg font-bold text-green-500">
            (MongoDB, Express.js, React, Node.js), Cloudinary, JWT Auth,
            Braintree Payments
          </p>
          <p className="my-4 text-gray-500">
            DocuBox is a streamlined file management system that enables users
            to efficiently create, edit, organize, and manage documents through
            a simple and intuitive interface. Built using Node.js, Express.js,
            and EJS, the application allows users to work with files directly
            from the web interface. It ensures data integrity by implementing a
            feature that prevents overwriting of existing files. With a
            dark-themed UI and interactive controls, DocuBox enhances
            productivity while maintaining simplicity and reliability in
            document handling.
          </p>
        </div>

        {/* Right Section: Image with hover animation */}
        <motion.div
          className="w-1/2 mt-32 mr-16 ml-4"
          whileHover={{ scale: 1.1 }} // Scale the image when hovered
          transition={{ duration: 0.3 }}
        >
          <a
            href="https://docubox-5w3s.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={DocuBox}
              alt="DocuBox Project"
              className="rounded-lg shadow-lg w-full h-auto"
              // style={{ opacity: 0.7 }}
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;
