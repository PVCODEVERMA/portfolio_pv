"use client";
import React from "react";
import { motion } from "framer-motion";
import pv from "../assets/pv.jpg";

import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../components/lib/utils";

const Home = () => {
  // Function to create animated button content
  const ButtonContent = ({ text }) => {
    return (
      <>
        <div className="span-mother">
          {text.split("").map((letter, index) => (
            <span key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              {letter}
            </span>
          ))}
        </div>
        <div className="span-mother2">
          {text.split("").map((letter, index) => (
            <span key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              {letter}
            </span>
          ))}
        </div>
      </>
    );
  };

  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 font-sans">
      <div className="h-full absolute inset-0 w-full overflow-hidden  flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full  z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-serif tracking-tight">
              Hi, I'm{" "}
              <span className="text-indigo-600 dark:text-indigo-400 italic">
                Pankaj
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
                <h1
                  className={cn("md:text-4xl text-xl text-white relative z-20")}
                >
                  Full Stack Developer
                </h1>
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              I build scalable web applications with modern technologies.
              Currently focused on MERN stack development while pursuing my
              B.Tech in Computer Science.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href={"/projects"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20 overflow-hidden"
                aria-label="View projects"
                style={{ width: "150px", height: "48px" }}
              >
                <ButtonContent text="View Projects" />
              </motion.a>

              <motion.a
                href={"/contact"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-bold rounded-full border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors overflow-hidden"
                aria-label="Contact me"
                style={{ width: "150px", height: "48px" }}
              >
                <ButtonContent text="Get In Touch" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <div className="bg-gray-200 dark:bg-gray-700 w-full h-full flex items-center justify-center">
                  <img
                    src={pv}
                    className="w-full h-full object-cover"
                    alt="Pankaj Verma"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 dark:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-lg font-medium">
                <span className="font-bold">1+ years</span> of experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add the button styles */}
      <style jsx>{`
        .span-mother {
          display: flex;
          overflow: hidden;
          position: absolute;
          left: 0;
          right: 0;
          justify-content: center;
        }

        .span-mother span {
          transform: translateY(0);
          transition: transform 0.2s;
        }

        .span-mother2 {
          display: flex;
          position: absolute;
          left: 0;
          right: 0;
          justify-content: center;
          overflow: hidden;
        }

        .span-mother2 span {
          transform: translateY(-1.2em);
          transition: transform 0.2s;
        }

        a:hover .span-mother span {
          transform: translateY(1.2em);
        }

        a:hover .span-mother2 span {
          transform: translateY(0);
        }

        /* Individual letter transitions */
        .span-mother span:nth-child(1),
        .span-mother2 span:nth-child(1) {
          transition-delay: 0s;
        }
        .span-mother span:nth-child(2),
        .span-mother2 span:nth-child(2) {
          transition-delay: 0.05s;
        }
        .span-mother span:nth-child(3),
        .span-mother2 span:nth-child(3) {
          transition-delay: 0.1s;
        }
        .span-mother span:nth-child(4),
        .span-mother2 span:nth-child(4) {
          transition-delay: 0.15s;
        }
        .span-mother span:nth-child(5),
        .span-mother2 span:nth-child(5) {
          transition-delay: 0.2s;
        }
        .span-mother span:nth-child(6),
        .span-mother2 span:nth-child(6) {
          transition-delay: 0.25s;
        }
        .span-mother span:nth-child(7),
        .span-mother2 span:nth-child(7) {
          transition-delay: 0.3s;
        }
        .span-mother span:nth-child(8),
        .span-mother2 span:nth-child(8) {
          transition-delay: 0.35s;
        }
        .span-mother span:nth-child(9),
        .span-mother2 span:nth-child(9) {
          transition-delay: 0.4s;
        }
        .span-mother span:nth-child(10),
        .span-mother2 span:nth-child(10) {
          transition-delay: 0.45s;
        }
      `}</style>
    </section>
  );
};

export default Home;