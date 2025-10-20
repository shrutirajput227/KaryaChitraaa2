import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Pranami Atara",
    role: "backend Developer",
    // image: "https://via.placeholder.com/150",
    bio: "Pranami leads the development with a focus on building smooth, scalable backend solutions and clean UI design.",
    github: "https://github.com/pranami1",
    linkedin: "https://www.linkedin.com/in/pranami-atara-6598752a5",
  },
  {
    name: "Shruti",
    role: "Frontend Developer",
    // image: "https://via.placeholder.com/150",
    bio: "Passionate about crafting modern interfaces and interactive user experiences with React and Tailwind.",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Shurendra",
    role: "Designer",
    // image: "https://via.placeholder.com/150",
    bio: "Handles backend logic, database design, and API performance with precision and scalability.",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 py-16 px-6 text-center pt-34">

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About <span className="text-orange-600">Us</span>
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        We’re a team of passionate developers and designers dedicated to
        building smart, modern digital experiences that connect talent and
        opportunity seamlessly.
      </motion.p>

      {/* Team Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 flex flex-col items-center"
            whileHover={{ y: -8 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-purple-100"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-orange-600 font-medium mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
            <div className="flex gap-4">
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-purple-600 transition"
              >
                <Github size={20} />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-purple-600 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mission Section */}
      <motion.div
        className="mt-20 max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600">
          At GigConnect, our mission is to simplify how professionals connect
          with meaningful opportunities. We blend technology, creativity, and
          teamwork to create impactful digital platforms that empower both
          talent and businesses.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
