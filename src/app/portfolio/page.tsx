'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown, FaCode, FaBrain, FaRocket, FaEnvelope, FaDownload, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { SiTypescript, SiPython, SiReact, SiNodedotjs, SiDocker, SiTensorflow, SiMysql, SiMongodb, SiNextdotjs, SiNestjs } from 'react-icons/si';

export default function Portfolio() {
  const [section, setSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as const }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { duration: 0.3 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white font-sans overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Mouse follower gradient */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Hero Section */}
      <motion.header 
        className="relative z-10 text-center py-10 sm:py-16 md:py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent px-4">
            Damruwan Weerasinghe
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
        </motion.div>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl mt-6 text-gray-300 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="inline-block">🚀 Software Engineer</span> 
          <span className="hidden sm:inline mx-2">|</span>
          <span className="block sm:inline">🧠 AI & Backend Specialist</span>
          <span className="hidden sm:inline mx-2">|</span>
          <span className="block sm:inline">⚡ Innovation Enthusiast</span>
        </motion.p>

        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a 
            href="https://github.com/DamruwanWeer" 
            target="_blank"
            className="group relative p-3 sm:p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={24} className="sm:w-7 sm:h-7 group-hover:text-blue-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </motion.a>
          
          <motion.a 
            href="https://linkedin.com/in/damruwan" 
            target="_blank"
            className="group relative p-3 sm:p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={24} className="sm:w-7 sm:h-7 group-hover:text-blue-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </motion.a>

          <motion.a 
            href="mailto:damruwan.dev@gmail.com"
            className="group relative p-3 sm:p-4 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope size={24} className="sm:w-7 sm:h-7 group-hover:text-purple-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </motion.a>

          <motion.button 
            className="group relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border border-transparent hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2 font-semibold text-sm sm:text-base">
              <FaDownload size={14} className="sm:w-4 sm:h-4" />
              Resume
            </span>
          </motion.button>
        </motion.div>

        <motion.div 
          className="mt-16 animate-bounce text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <FaArrowDown size={24} />
        </motion.div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Navigation */}
        <motion.nav 
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center mobile-nav-compact space-x-1 sm:space-x-2 bg-gray-900/50 backdrop-blur-md rounded-full p-1 sm:p-2 border border-gray-700">
            {[
              { id: 'about', label: 'About', icon: FaCode },
              { id: 'projects', label: 'Projects', icon: FaRocket },
              { id: 'skills', label: 'Skills', icon: FaBrain },
              { id: 'contact', label: 'Contact', icon: FaEnvelope }
            ].map((item) => (
              <motion.button
                key={item.id}
                className={`relative mobile-nav-button px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 ${
                  section === item.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
                onClick={() => setSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={12} className="sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.nav>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          <motion.section 
            key={section}
            className="min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh]"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {section === 'about' && <AboutSection />}
            {section === 'projects' && <ProjectsSection />}
            {section === 'skills' && <SkillsSection />}
            {section === 'contact' && <ContactSection />}
          </motion.section>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer 
        className="relative z-10 mt-12 sm:mt-16 md:mt-20 text-center text-xs sm:text-sm text-gray-500 py-6 sm:py-8 border-t border-gray-800 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <p>© {new Date().getFullYear()} Damruwan Weerasinghe. Crafted with 💜 using React, Next.js & Tailwind CSS.</p>
      </motion.footer>

      <style jsx global>{`
        .stars, .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .stars {
          background: black url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="0.5" fill="white" opacity="0.8"/><circle cx="75" cy="25" r="0.3" fill="white" opacity="0.6"/><circle cx="50" cy="50" r="0.4" fill="white" opacity="0.7"/><circle cx="20" cy="80" r="0.2" fill="white" opacity="0.5"/><circle cx="80" cy="80" r="0.6" fill="white" opacity="0.9"/></svg>') repeat;
          background-size: 200px 200px;
        }

        .twinkling {
          background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="30" r="0.3" fill="white" opacity="1"><animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/></circle><circle cx="70" cy="70" r="0.4" fill="white" opacity="1"><animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/></circle></svg>') repeat;
          background-size: 300px 300px;
          animation: move-twink-back 200s linear infinite;
        }

        @keyframes move-twink-back {
          from {background-position: 0 0;}
          to {background-position: -10000px 5000px;}
        }

        /* Custom responsive utilities */
        @media (min-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
        }

        /* Improved mobile navigation spacing */
        @media (max-width: 479px) {
          .mobile-nav-compact {
            gap: 0.25rem;
          }
          .mobile-nav-button {
            padding: 0.5rem 0.75rem;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}

// Section Components
function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as const }
    }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        About Me 👨‍💻
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <motion.div 
          className="space-y-4 sm:space-y-6"
          variants={itemVariants}
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm a <span className="text-blue-400 font-semibold">final-year Software Engineering undergraduate</span> at SLIIT, 
              passionate about backend development, AI/NLP, and building tech that makes a difference.
            </p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Currently researching <span className="text-purple-400 font-semibold">pronunciation & grammar error detection</span> for 
              Sri Lankan English. I enjoy merging research with real-world development.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-3 sm:space-y-4"
          variants={itemVariants}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">What drives me:</h3>
          {[
            { icon: "🎯", title: "Problem Solving", desc: "Love tackling complex challenges with elegant solutions" },
            { icon: "🚀", title: "Innovation", desc: "Always exploring cutting-edge technologies and methodologies" },
            { icon: "🌍", title: "Impact", desc: "Building technology that makes a meaningful difference" },
            { icon: "📚", title: "Learning", desc: "Continuous growth through research and hands-on projects" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/20 rounded-xl hover:bg-gray-800/40 transition-all duration-300"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <span className="text-xl sm:text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">{item.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "🎤 Pronunciation Detection Model",
      description: "Advanced AI model for detecting pronunciation errors in Sri Lankan English using state-of-the-art speech processing techniques.",
      tech: ["Python", "Whisper", "MFA", "TensorFlow", "Speech Processing"],
      features: ["Real-time pronunciation analysis", "Sri Lankan English optimization", "Error classification system"],
      link: "#",
      status: "Research Project",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "💼 POS+CRM SaaS Backend",
      description: "Scalable enterprise-grade backend system for Point of Sale and Customer Relationship Management with advanced analytics.",
      tech: ["NestJS", "Sequelize", "MySQL", "Redis", "Docker"],
      features: ["Multi-tenant architecture", "Real-time analytics", "Advanced caching", "API rate limiting"],
      link: "#",
      status: "Production Ready",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "🤖 LangChain AI Chatbot",
      description: "Intelligent conversational AI powered by large language models with retrieval-augmented generation capabilities.",
      tech: ["LangChain", "OpenAI GPT", "Vector DB", "RAG", "FastAPI"],
      features: ["Context-aware responses", "Document retrieval", "Memory management", "Multi-modal support"],
      link: "#",
      status: "Active Development",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Featured Projects 🚀
      </motion.h2>
      
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            <div className="relative p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <span className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${project.color} text-white shrink-0`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-400 rounded-full shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.a 
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                whileHover={{ x: 5 }}
              >
                <span>View Project</span>
                <FaExternalLinkAlt size={10} className="sm:w-3 sm:h-3" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend & UI",
      icon: <SiReact className="text-blue-400" />,
      skills: [
        { name: "React/Next.js", level: 95, icon: <SiNextdotjs /> },
        { name: "TypeScript", level: 90, icon: <SiTypescript /> },
        { name: "Tailwind CSS", level: 85, icon: <span>🎨</span> },
        { name: "Framer Motion", level: 80, icon: <span>⚡</span> }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <SiNodedotjs className="text-green-400" />,
      skills: [
        { name: "Node.js/NestJS", level: 92, icon: <SiNestjs /> },
        { name: "Python/FastAPI", level: 88, icon: <SiPython /> },
        { name: "REST/GraphQL", level: 85, icon: <span>🔗</span> },
        { name: "Microservices", level: 80, icon: <span>🏗️</span> }
      ]
    },
    {
      title: "Databases & Storage",
      icon: <SiMysql className="text-orange-400" />,
      skills: [
        { name: "MySQL/PostgreSQL", level: 88, icon: <SiMysql /> },
        { name: "MongoDB", level: 85, icon: <SiMongodb /> },
        { name: "Redis/Caching", level: 80, icon: <span>⚡</span> },
        { name: "Prisma/Sequelize", level: 85, icon: <span>🔧</span> }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <SiTensorflow className="text-yellow-400" />,
      skills: [
        { name: "TensorFlow/PyTorch", level: 85, icon: <SiTensorflow /> },
        { name: "LangChain/RAG", level: 88, icon: <span>🤖</span> },
        { name: "NLP/Speech Processing", level: 90, icon: <span>🗣️</span> },
        { name: "OpenAI APIs", level: 85, icon: <span>🧠</span> }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <SiDocker className="text-blue-300" />,
      skills: [
        { name: "Docker/Kubernetes", level: 80, icon: <SiDocker /> },
        { name: "GitHub Actions", level: 85, icon: <span>⚙️</span> },
        { name: "AWS/Cloud", level: 75, icon: <span>☁️</span> },
        { name: "Git/Version Control", level: 95, icon: <span>📝</span> }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Technical Skills 🛠️
      </motion.h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="text-xl sm:text-2xl">{category.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-white">{category.title}</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-base sm:text-lg">{skill.icon}</span>
                      <span className="text-gray-300 text-xs sm:text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className="text-blue-400 text-xs font-semibold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 sm:h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-blue-400" />,
      title: "Email",
      value: "damruwan.dev@gmail.com",
      href: "mailto:damruwan.dev@gmail.com",
      description: "Drop me a line anytime!"
    },
    {
      icon: <FaLinkedin className="text-blue-500" />,
      title: "LinkedIn",
      value: "/in/damruwan",
      href: "https://linkedin.com/in/damruwan",
      description: "Let's connect professionally"
    },
    {
      icon: <FaGithub className="text-gray-400" />,
      title: "GitHub",
      value: "@DamruwanWeer",
      href: "https://github.com/DamruwanWeer",
      description: "Check out my code"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Let's Connect! 🤝
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Get in touch</h3>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            I'm always interested in discussing new opportunities, innovative projects, 
            or just having a chat about technology. Feel free to reach out!
          </p>
          
          <div className="space-y-3 sm:space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="text-xl sm:text-2xl">{method.icon}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                    {method.title}
                  </h4>
                  <p className="text-blue-400 text-xs sm:text-sm truncate">{method.value}</p>
                  <p className="text-gray-400 text-xs">{method.description}</p>
                </div>
                <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-400 transition-colors shrink-0" size={10} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-white font-medium mb-2 text-sm sm:text-base">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2 text-sm sm:text-base">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2 text-sm sm:text-base">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                placeholder="Your message..."
                required
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message 🚀
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}