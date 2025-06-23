import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Show success toast
      toast.success('Message sent successfully!', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#4BB543',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#4BB543',
        },
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'Pankaj912978@gmail.com',
      link: 'mailto:Pankaj912978@gmail.com'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+91-9129787343',
      link: 'tel:+919129787343'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Lucknow, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      {/* Toast Notification Container */}
      <Toaster />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight">
              Get In <span className="text-indigo-600 dark:text-indigo-400 font-serif italic">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-serif">Let's talk about your project</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 font-sans leading-relaxed">
                Have a project in mind? Feel free to reach out to me. I'm always open to discussing new projects, 
                creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{
                      y: -5,
                      rotateZ: 0.5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
                    aria-label={`Contact via ${info.title}`}
                  >
                    <motion.div 
                      className="flex-shrink-0 p-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium font-serif">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-1 font-sans">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 }
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-sans">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all font-sans"
                      placeholder="Your Name"
                      aria-label="Your Name"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-sans">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all font-sans"
                      placeholder="your@email.com"
                      aria-label="Email Address"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-sans">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all font-sans"
                      placeholder="Tell me about your project..."
                      aria-label="Your Message"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 dark:bg-gray-700 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 dark:border-gray-600 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 dark:hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    aria-label="Send message"
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="w-6 h-6 justify-end group-hover:rotate-90  group-hover:bg-gray-50 dark:group-hover:bg-gray-700 text-gray-800 dark:text-gray-200 ease-linear duration-300 rounded-full border border-gray-700 dark:border-gray-300 group-hover:border-none p-1 rotate-45"
                          viewBox="0 0 16 19"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-gray-800 dark:fill-gray-200 group-hover:fill-gray-800 dark:group-hover:fill-gray-200"
                          ></path>
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;