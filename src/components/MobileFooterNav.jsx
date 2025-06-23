import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { Link } from "react-router-dom"; 

const navItems = [
  { id: "home", label: "Home", icon: <FaHome />, path: "/" },
  { id: "project", label: "Project", icon: <FiFolder />, path: "/projects" },
  { id: "profile", label: "Profile", icon: <FaUser />, path: "/profile" },
];

const MobileFooterNav = () => {
  const [active, setActive] = useState("home");

  return (
    <motion.div
      className="fixed bottom-0 w-full flex justify-center items-center z-50 bg-transparent"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center bg-white px-4 py-3 shadow-xl border border-gray-200 rounded-t-lg">
          {navItems.map((item) => {
            const isActive = item.id === active;

            return (
              <Link
                to={item.path}
                key={item.id}
                onClick={() => setActive(item.id)}
                className="flex-1 flex justify-center relative"
              >
                <motion.div
                  className="w-full flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute -top-6 z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300">
                        {item.icon}
                      </div>
                    </motion.div>
                  )}

                  <div
                    className={`flex flex-col items-center transition-all duration-300 ${
                      isActive ? "text-purple-600 mt-6" : "text-gray-400 mt-2 hover:text-purple-500"
                    }`}
                  >
                    {!isActive && (
                      <motion.div
                        className="text-2xl"
                        whileHover={{ scale: 1.2 }}
                      >
                        {item.icon}
                      </motion.div>
                    )}
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileFooterNav;