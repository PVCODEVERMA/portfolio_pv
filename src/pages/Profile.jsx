import React, { useState } from "react";
import { 
  FaDownload, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaHeart, 
  FaRegHeart, 
  FaComment, 
  FaRegComment,
  FaShare
} from "react-icons/fa";
import { motion } from "framer-motion";
import pv from "../assets/pv.jpg";

const skills = [
  "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", 
  "Git", "Docker", "JavaScript", "TypeScript", "Redux"
];

const experiences = [
  {
    company: "Websbaba Technologies Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "May 2025 – Present",
    description: "Developed high-performance websites and dashboards using MERN stack. Optimized application performance by 30%."
  },
  {
    company: "Marv Softwares India Pvt. Ltd.",
    role: "React Developer",
    period: "Aug 2023 – Apr 2024",
    description: "Built responsive UIs with React and implemented state management solutions."
  }
];

const Profile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [likes, setLikes] = useState(124);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, user: "Rahul Sharma", text: "Great profile! Your projects are impressive." },
    { id: 2, user: "Priya Patel", text: "Would love to collaborate sometime!" }
  ]);
  const [activeTab, setActiveTab] = useState("about");

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setLikes(prev => isFollowing ? prev - 1 : prev + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, { 
        id: Date.now(), 
        user: "Current User", 
        text: comment,
        time: "Just now"
      }]);
      setComment("");
    }
  };

  const handleLike = () => {
    setLikes(prev => isFollowing ? prev : prev + 1);
    setIsFollowing(!isFollowing);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12 md:py-16"
    >
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-8 relative">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <img
            src={pv}
            alt="Pankaj Verma"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800"
          />
        </motion.div>
        
        <div className="text-center md:text-left">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
          >
            Pankaj Verma
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-purple-600 dark:text-purple-400 mt-2"
          >
            Full Stack Developer | MERN Specialist
          </motion.p>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 dark:text-gray-300 mt-4 max-w-lg"
          >
            Passionate developer creating scalable web applications with clean architecture and intuitive user interfaces.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 mt-6"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full flex items-center gap-2 transition-colors shadow-md"
            >
              <FaDownload /> Download Resume
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 px-5 py-2 rounded-full transition-colors shadow-md"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Follow Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleFollow}
          className={`absolute top-0 right-0 px-4 py-2 rounded-full font-medium ${
            isFollowing 
              ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white" 
              : "bg-purple-600 text-white"
          }`}
        >
          {isFollowing ? "Following" : "Follow"}
        </motion.button>
      </div>

      {/* Engagement Bar */}
      <motion.div 
        className="flex justify-between items-center mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex gap-6">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={handleLike}
          >
            {isFollowing ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-gray-500 dark:text-gray-400 text-xl hover:text-red-500" />
            )}
            <span className="text-gray-700 dark:text-gray-300">{likes}</span>
          </div>

          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? (
              <FaComment className="text-purple-600 text-xl" />
            ) : (
              <FaRegComment className="text-gray-500 dark:text-gray-400 text-xl hover:text-purple-600" />
            )}
            <span className="text-gray-700 dark:text-gray-300">{comments.length}</span>
          </div>
        </div>

        <button className="text-gray-500 dark:text-gray-400 hover:text-purple-600 flex items-center gap-1">
          <FaShare /> Share
        </button>
      </motion.div>

      {/* Comments Section */}
      {showComments && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">
            Comments ({comments.length})
          </h3>
          
          <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
            {comments.map(c => (
              <div key={c.id} className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-gray-800 dark:text-gray-200">{c.user}</p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{c.time || "2 days ago"}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{c.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleCommentSubmit} className="flex gap-3">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              required
            />
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Post
            </motion.button>
          </form>
        </motion.div>
      )}

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
        {["about", "experience", "skills", "contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium capitalize ${activeTab === tab 
              ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400" 
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {/* About Section */}
        {activeTab === "about" && (
          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-600 rounded-full"></span>
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Based in Lucknow, India, I'm a Full Stack Developer with expertise in the MERN stack. 
              I specialize in building responsive, performant web applications with clean code architecture.
              My passion lies in solving complex problems and creating seamless user experiences.
              Currently pursuing my B.Tech in Computer Science while working on freelance projects.
            </p>
          </motion.section>
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <motion.section
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-600 rounded-full"></span>
              Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="border-l-2 border-purple-500 pl-4"
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.company}</h3>
                  <div className="flex flex-wrap justify-between items-baseline mt-1">
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{exp.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Skills Section */}
        {activeTab === "skills" && (
          <motion.section
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-600 rounded-full"></span>
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ y: -3 }}
                  className="bg-purple-100 dark:bg-gray-700 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Contact Section */}
        {activeTab === "contact" && (
          <motion.section
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            id="contact"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-600 rounded-full"></span>
              Contact
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 dark:bg-gray-700 p-2 rounded-full text-purple-600 dark:text-purple-400">
                  <FaEnvelope />
                </div>
                <span>pankaj@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 dark:bg-gray-700 p-2 rounded-full text-purple-600 dark:text-purple-400">
                  <FaPhone />
                </div>
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 dark:bg-gray-700 p-2 rounded-full text-purple-600 dark:text-purple-400">
                  <FaMapMarkerAlt />
                </div>
                <span>Lucknow, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </motion.a>
            </div>
          </motion.section>
        )}
      </div>
    </motion.div>
  );
};

export default Profile;