import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import { Boxes } from '../components/ui/background-boxes';
import { cn } from '../components/lib/utils';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90, icon: <FaCode className="mr-2" /> },
    { name: 'React', level: 85, icon: <FaLaptopCode className="mr-2" /> },
    { name: 'Node.js', level: 80, icon: <FaServer className="mr-2" /> },
    { name: 'MongoDB', level: 75, icon: <FaServer className="mr-2" /> },
    { name: 'Express', level: 75, icon: <FaServer className="mr-2" /> },
    { name: 'Tailwind CSS', level: 85, icon: <FaLaptopCode className="mr-2" /> },
  ];

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Webbaba Technologies Pvt. Ltd',
      period: 'Feb 2024 - Present',
      description: 'Developing and deploying portfolio websites with React.js and Tailwind CSS. Enhancing SEO for company websites.',
      icon: <FaChartLine />
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Marv Software Private Limited',
      period: 'Jan 2025 - Apr 2025',
      description: 'Built MERN stack web apps with secure login using JWT & Redux. Optimized API response time by 25%.',
      icon: <FaCode />
    },
    {
      role: 'Summer Training - Full Stack',
      company: 'ZN Infotech',
      period: 'Summer 2023',
      description: 'Focused on building MERN stack applications and frontend optimization with React.js and Tailwind CSS.',
      icon: <FaLaptopCode />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50 font-sans relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight">
              About <span className="text-indigo-600 dark:text-indigo-400 italic">Me</span>
            </h2>
            <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-serif">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                I'm a passionate Full Stack Developer with 1+ years of experience in the MERN stack. Currently pursuing my B.Tech in Computer Science from AKTU (2021-2025) with a CGPA of 7.2.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                I specialize in creating responsive web applications with clean, maintainable code. Certified in MERN Stack Development from PW Skills and currently expanding my knowledge in Data Science.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy competitive programming and working on personal projects to enhance my skills.
              </p>
              
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-6 font-serif">My Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium flex items-center">
                          <motion.span
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {skill.icon}
                          </motion.span>
                          {skill.name}
                        </span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div 
                          className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-serif">Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-indigo-600 dark:border-indigo-500"
                  >
                    <motion.div 
                      className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 dark:bg-indigo-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.5 }}
                    >
                      {exp.icon}
                    </motion.div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h4 className="text-xl font-semibold font-serif">{exp.role}</h4>
                      <div className="flex justify-between mt-2 mb-3">
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;