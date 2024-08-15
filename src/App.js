import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-r from-dark via-black to-dark min-h-screen text-light font-sans">
      {/* Header */}
      <header className="w-full py-6 bg-gradient-to-r from-black via-dark to-black flex justify-between items-center px-8 shadow-lg fixed top-0 z-50">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Arda Şevik</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-primary transition">About Me</a></li>
            <li><a href="#services" className="hover:text-primary transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-primary transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="pt-24"> {/* Offset for the fixed header */}

        {/* Hero Section */}
        <section className="flex items-center justify-center h-screen bg-gradient-to-b from-dark via-black to-dark">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img 
                src="/img/vesikaarda.jpg" 
                alt="Arda Şevik" 
                className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg"
              />
            </motion.div>
            <motion.h2
              className="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I'm Arda Şevik
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              A professional Mobile and Web Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <a
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-light rounded-full text-lg mr-4 hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-transform transform hover:scale-110"
              >
                View My Portfolio
              </a>
              <a
                href="/path-to-your-cv.pdf"
                className="px-8 py-4 border border-primary text-primary rounded-full text-lg hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-light transition-transform transform hover:scale-110"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-black to-dark text-center">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-12">About Me</h3>
          <div className="container mx-auto">
            <motion.p
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Born on October 3, 2000, in Izmir, I completed my 4th year in Computer Engineering at Mersin University. I am interested in mobile application development, robotics, artificial intelligence, and machine learning. Thanks to the internships I completed, I worked on both Front-End and Back-End tasks in several projects. I am more focused on the Front-End part, but I am improving myself in the Back-End with Firebase.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-dark to-black text-center">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-12">Services</h3>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Mobile App Development", description: "I develop cross-platform mobile applications using Flutter." },
              { title: "Web Development", description: "I build modern and performance-oriented websites." },
              { title: "Artificial Intelligence", description: "I work on AI and machine learning projects." }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-dark via-black to-dark p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-2xl font-bold text-light mb-4">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gradient-to-b from-dark to-black text-center">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-12">Portfolio</h3>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Mobile App",
                description: "An e-commerce application developed using Flutter and Firebase.",
                image: "/img/vesikaarda.jpg",
              },
              {
                title: "Task Management System",
                description: "A cross-platform task management system.",
                image: "/img/vesikaarda.jpg",
              },
              {
                title: "AR Product Viewer",
                description: "An augmented reality product viewing application.",
                image: "/img/vesikaarda.jpg",
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-dark via-black to-dark rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform transform hover:scale-110" />
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-light mb-2">{project.title}</h4>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-black to-dark text-center">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-12">Contact</h3>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-gray-400">You can reach me through the following channels:</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:ardasevikk@gmail.com" className="text-primary hover:text-secondary transition-transform transform hover:scale-110">
                <Mail size={24} />
              </a>
              <a href="https://github.com/edvaceid" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-transform transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/ardasevik/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-transform transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-dark via-black to-dark py-6 text-center">
          <p className="text-gray-500">&copy; 2024 Arda Şevik. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;