import React from 'react';
import { motion } from 'framer-motion';
import { Boxes } from '../components/ui/background-boxes';
import { cn } from '../components/lib/utils';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio for Political Leader',
      description: 'Developed and deployed a portfolio website for Shri Keshav Prasad Maurya using React.js and Tailwind CSS with enhanced SEO.',
      tags: ['React', 'Tailwind CSS', 'SEO'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Pure Water Filters - E-commerce',
      description: 'Created a React.js based product store with full routing using React Router DOM and modular components.',
      tags: ['React', 'E-commerce', 'Responsive Design'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Waste Management Platform',
      description: 'College project building a web-based dashboard for tracking waste disposal with authentication and admin panel.',
      tags: ['MERN Stack', 'Data Visualization', 'Authentication'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Webbaba Company Website',
      description: 'Company website with dynamic sections, contact forms, and SEO setup using MERN stack and clean UI/UX practices.',
      tags: ['MERN', 'UI/UX', 'SEO'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              My <span className="text-indigo-600 dark:text-indigo-400 font-serif italic">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 flex items-center justify-center">
                  <motion.span 
                    className="text-2xl font-bold text-white font-serif"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title.split(' ')[0]}
                  </motion.span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-serif">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-sans leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm rounded-full font-sans"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github} 
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans"
                      aria-label={`View ${project.title} on GitHub`}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="mr-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </motion.div>
                      GitHub
                    </motion.a>
                    <motion.a 
                      href={project.demo} 
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans"
                      aria-label={`View ${project.title} demo`}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="mr-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.div>
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;