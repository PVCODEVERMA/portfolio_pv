import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from '../components/DarkModeToggle';
import { 
  FiHome, 
  FiUser, 
  FiFolder, 
  FiMail,
  FiX,
  FiMenu,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiFacebook
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: 'Home', href: '/', icon: <FiHome /> },
    { name: 'About', href: '/about', icon: <FiUser /> },
    { name: 'Projects', href: '/projects', icon: <FiFolder /> },
    { name: 'Contact', href: '/contact', icon: <FiMail /> },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: <FiGithub /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <FiLinkedin /> },
    { name: 'Twitter', href: 'https://twitter.com', icon: <FiTwitter /> },
    { name: 'Instagram', href: 'https://instagram.com', icon: <FiInstagram /> },
    { name: 'YouTube', href: 'https://youtube.com', icon: <FiYoutube /> },
    { name: 'Facebook', href: 'https://facebook.com', icon: <FiFacebook /> },
    { name: 'Discord', href: 'https://discord.com', icon: <FaDiscord /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-xl font-bold text-gray-900 dark:text-white font-serif"
            aria-label="Home"
          >
            <span className="text-indigo-600 dark:text-indigo-400">P</span>V
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 10
                }}
                className="relative"
              >
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 relative"
                  aria-label={item.name}
                >
                  {item.name}
                </a>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.span
                    key="close-icon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="h-6 w-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu-icon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="h-6 w-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav - Full Screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1,
              height: '100vh',
              transition: { 
                height: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              transition: { 
                height: { delay: 0.1, type: 'spring', stiffness: 500, damping: 30 },
                opacity: { duration: 0.1 }
              }
            }}
            className="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 overflow-hidden"
          >
            <div className="h-full flex flex-col justify-between py-10">
              {/* Navigation Links */}
              <motion.div 
                className="flex flex-col items-center space-y-6"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 + 0.2 }
                    }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center text-2xl font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 px-6 py-3 font-serif"
                      aria-label={item.name}
                    >
                      <span className="mr-3">
                        {item.icon}
                      </span>
                      {item.name}
                    </a>
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "80%", x: "-50%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Media Icons */}
              <motion.div 
                className="flex justify-center mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 p-2"
                    aria-label={social.name}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <span className="text-2xl">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;