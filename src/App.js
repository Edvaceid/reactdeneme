import React, { useState } from 'react';
import {Mail, Github, Linkedin, FileText } from 'lucide-react'; // Düzeltilmiş importlar
import './App.css';

const ProfessionalPortfolio = () => {
  const [activeTab, setActiveTab] = useState('about');

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    'Flutter', 'Dart', 'Firebase', 'RESTful APIs', 'Git', 
    'UI/UX Design', 'State Management', 'Agile Methodologies'
  ];

  const projects = [
    {
      title: 'E-commerce Mobile App',
      description: 'Developed a full-featured e-commerce application using Flutter and Firebase, implementing real-time inventory management and secure payment processing.',
      technologies: ['Flutter', 'Firebase', 'Stripe API']
    },
    {
      title: 'Task Management System',
      description: 'Created a cross-platform task management application with cloud synchronization, push notifications, and analytics dashboard.',
      technologies: ['Flutter', 'Node.js', 'MongoDB']
    },
    {
      title: 'AR Product Viewer',
      description: 'Built an augmented reality app allowing users to visualize products in their real environment, integrating with a product catalog API.',
      technologies: ['Flutter', 'ARCore', 'RESTful API']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Your Name</h1>
          <p className="text-xl text-gray-600">Flutter Developer</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm mt-4">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 font-medium transition-colors duration-200 ${
                    activeTab === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section id="about" className={activeTab === 'about' ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am a passionate Flutter developer with a strong background in mobile application development. 
            With a degree in Computer Engineering and 3 years of professional experience, I specialize in 
            creating efficient, scalable, and user-friendly mobile applications. My expertise lies in 
            developing cross-platform solutions that provide seamless user experiences across different devices.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I am dedicated to staying up-to-date with the latest trends and best practices in mobile development, 
            and I am always eager to take on new challenges that allow me to grow both personally and professionally.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className={activeTab === 'skills' ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <span className="text-blue-600 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={activeTab === 'projects' ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={activeTab === 'contact' ? 'block' : 'hidden'}>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
          </p>
          <div className="space-y-2">
            <a href="mailto:your.email@example.com" className="flex items-center text-blue-600 hover:text-blue-800">
              <Mail size={20} className="mr-2" /> your.email@example.com
            </a>
            <a href="https://github.com/edvaceid" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
              <Github size={20} className="mr-2" /> GitHub Profile
            </a>
            <a href="https://linkedin.com/in/edvaceid" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
              <Linkedin size={20} className="mr-2" /> LinkedIn Profile
            </a>
            <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
              <FileText size={20} className="mr-2" /> Download Resume
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalPortfolio;