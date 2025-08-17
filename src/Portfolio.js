import React, { useState, useEffect, useRef } from 'react';
import { Download, Github, ExternalLink, Mail, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  
  const observerRef = useRef();
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setVisibleElements(prev => {
          const newSet = new Set(prev);
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              newSet.add(entry.target.id);
            } else {
              newSet.delete(entry.target.id);
            }
          });
          return newSet;
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const downloadResume = () => {
    // Temporarily disabled - add your resume.pdf to public folder to enable
    alert('Resume download will be available once resume.pdf is added to the public folder');
    // const link = document.createElement('a');
    // link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    // link.download = 'Julien_Blockchain_Developer_Resume.pdf';
    // link.click();
  };

  const StarField = () => {
    const stars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: star.x + '%',
              top: star.y + '%',
              width: star.size + 'px',
              height: star.size + 'px',
              opacity: '0.3',
              animationDelay: star.delay + 's',
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    );
  };

  const techStack = {
    frontend: [
      { name: 'Solidity', icon: '⚡', color: 'text-purple-400' },
      { name: 'Ethers.js', icon: '🔗', color: 'text-blue-400' },
      { name: 'Web3.js', icon: '🌐', color: 'text-green-400' },
      { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
      { name: 'TypeScript', icon: '📘', color: 'text-blue-500' },
      { name: 'Hardhat', icon: '⚒️', color: 'text-yellow-400' },
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', color: 'text-green-500' },
    ],
    tools: [
      { name: 'Git', icon: '📝', color: 'text-orange-400' },
      { name: 'GitHub', icon: '🐙', color: 'text-gray-300' },
      { name: 'Postman', icon: '📮', color: 'text-orange-500' },
      { name: 'VSCode', icon: '💙', color: 'text-blue-600' },
      { name: 'Vim', icon: '💚', color: 'text-green-600' },
      { name: 'NPM', icon: '📦', color: 'text-red-500' },
      { name: 'Yarn', icon: '🧶', color: 'text-blue-300' },
    ],
    studying: [
      { name: 'Rust', icon: '🦀', color: 'text-orange-600' },
      { name: 'GSAP', icon: '🎬', color: 'text-green-500' },
      { name: 'Framer Motion', icon: '🎭', color: 'text-pink-400' },
    ]
  };

  const projects = [
    {
      name: 'DeFi Protocol',
      tech: 'Solidity • React • Ethers.js',
      link: 'https://github.com/yourusername/defi-protocol'
    },
    {
      name: 'NFT Marketplace',
      tech: 'Web3.js • Node.js • MongoDB',
      link: 'https://github.com/yourusername/nft-marketplace'
    },
    {
      name: 'DAO Governance',
      tech: 'Solidity • Hardhat • React',
      link: 'https://github.com/yourusername/dao-governance'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen relative">
      <StarField />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-sm font-mono text-gray-400">
            ~/julien-blockchain-dev
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">ABOUT</button>
            <button onClick={() => scrollToSection('stack')} className="text-gray-400 hover:text-white transition-colors">STACK</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white transition-colors">PROJECTS</button>
            <button
              onClick={downloadResume}
              className="bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-red-400 px-4 py-2 text-xs font-mono hover:bg-opacity-30 transition-all"
            >
              RESUME
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block text-left text-gray-400 hover:text-white transition-colors">ABOUT</button>
              <button onClick={() => scrollToSection('stack')} className="block text-left text-gray-400 hover:text-white transition-colors">STACK</button>
              <button onClick={() => scrollToSection('projects')} className="block text-left text-gray-400 hover:text-white transition-colors">PROJECTS</button>
              <button
                onClick={downloadResume}
                className="bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-red-400 px-4 py-2 text-xs font-mono hover:bg-opacity-30 transition-all"
              >
                RESUME
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="min-h-screen flex flex-col justify-center px-6 relative">
        <div className="max-w-4xl mx-auto w-full">
          <div 
            className={`transition-all duration-1000 ease-out ${
              visibleElements.has('hero-title') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            data-animate
            id="hero-title"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
              <span className="text-red-500">BLOCKCHAIN</span>
              <br />
              <span className="text-gray-300">DEVELOPER</span>
            </h1>
          </div>
          
          <div 
            className={`max-w-2xl mt-8 transition-all duration-1000 ease-out delay-200 ${
              visibleElements.has('hero-subtitle') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            data-animate
            id="hero-subtitle"
          >
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Hi, I'm Julien. A Blockchain Developer with practical experience in building high-performance, 
              scalable, and user-friendly decentralized applications and smart contract solutions.
            </p>
            <button
              onClick={downloadResume}
              className="bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-red-400 px-6 py-3 text-sm font-mono hover:bg-opacity-30 transition-all"
            >
              RESUME
            </button>
          </div>
        </div>

        <div className="font-mono text-sm text-gray-300 max-w-4xl mx-auto mt-16">
          <div className="text-purple-400 mb-2">contract BlockchainSkills &#123;</div>
          <div className="pl-4 text-green-400 mb-1">
              string public expertise = <span className="text-yellow-300">"Proficient in Solidity, Ethers.js, and smart contract development"</span>;
          </div>
          <div className="pl-4 text-green-400 mb-2">
              string public mission = <span className="text-yellow-300">"Continuously optimizing and deploying secure, efficient, and scalable decentralized applications"</span>;
          </div>
          <div className="text-purple-400">&#125;</div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`mb-16 transition-all duration-1000 ease-out ${
              visibleElements.has('about-intro') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            data-animate
            id="about-intro"
          >
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-12">
              I believe in a <strong className="text-white">developer-first and user-centered approach</strong>, 
              ensuring that every blockchain project I work on is secure, efficient, and tailored to its users' needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div 
              className={`transition-all duration-1000 ease-out delay-200 ${
                visibleElements.has('about-left') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              data-animate
              id="about-left"
            >
              <h2 className="text-red-500 text-sm font-mono mb-4">This is me.</h2>
              <h3 className="text-3xl font-bold mb-6">I'm Julien</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                A 20-year-old <strong className="text-white">Blockchain Developer</strong> based in Canada. 
                Dedicated to turning decentralized ideas into creative, high-performance solutions. I specialize in building{' '}
                <strong className="text-white">smart contracts, dApps, and scalable blockchain systems</strong> with seamless user experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My approach focuses on creating <strong className="text-white">robust, secure, and high-performing solutions</strong> tailored 
                to both user needs and business objectives. By prioritizing{' '}
                <strong className="text-white">security, scalability, and usability</strong>, I strive to deliver 
                decentralized applications that engage users and drive tangible results.
              </p>
            </div>

            <div 
              className={`transition-all duration-1000 ease-out delay-400 ${
                visibleElements.has('about-right') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              data-animate
              id="about-right"
            >
              <div className="bg-gray-900 bg-opacity-30 border border-gray-700 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-center">
                  <span className="text-red-500 border-r-2 border-red-500 animate-pulse pr-1">I CAN'T STOP CONFIGURING MY DEV ENVIRONMENT.</span>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-mono text-sm">vim.config.updated</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300 font-mono text-sm">hardhat.config.optimizing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300 font-mono text-sm">workspace.personalizing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`mb-16 transition-all duration-1000 ease-out ${
              visibleElements.has('stack-title') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            data-animate
            id="stack-title"
          >
            <h2 className="text-red-500 text-sm font-mono mb-4">✦ MY STACK</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className={`transition-all duration-1000 ease-out delay-100 ${
                visibleElements.has('frontend-stack') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              data-animate
              id="frontend-stack"
            >
              <h3 className="text-gray-300 text-lg font-bold mb-6">FRONTEND</h3>
              <div className="space-y-4">
                {techStack.frontend.map((tech) => (
                  <div key={tech.name} className="flex items-center space-x-3">
                    <span className="text-xl">{tech.icon}</span>
                    <span className={`${tech.color} font-medium`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className={`transition-all duration-1000 ease-out delay-200 ${
                visibleElements.has('backend-stack') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              data-animate
              id="backend-stack"
            >
              <h3 className="text-gray-300 text-lg font-bold mb-6">BACKEND</h3>
              <div className="space-y-4">
                {techStack.backend.map((tech) => (
                  <div key={tech.name} className="flex items-center space-x-3">
                    <span className="text-xl">{tech.icon}</span>
                    <span className={`${tech.color} font-medium`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className={`transition-all duration-1000 ease-out delay-300 ${
                visibleElements.has('tools-stack') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              data-animate
              id="tools-stack"
            >
              <h3 className="text-gray-300 text-lg font-bold mb-6">TOOLS</h3>
              <div className="space-y-4">
                {techStack.tools.map((tech) => (
                  <div key={tech.name} className="flex items-center space-x-3">
                    <span className="text-xl">{tech.icon}</span>
                    <span className={`${tech.color} font-medium`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className={`transition-all duration-1000 ease-out delay-400 ${
                visibleElements.has('studying-stack') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              data-animate
              id="studying-stack"
            >
              <h3 className="text-gray-300 text-lg font-bold mb-6">STUDYING</h3>
              <div className="space-y-4">
                {techStack.studying.map((tech) => (
                  <div key={tech.name} className="flex items-center space-x-3">
                    <span className="text-xl">{tech.icon}</span>
                    <span className={`${tech.color} font-medium`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`mb-16 transition-all duration-1000 ease-out ${
              visibleElements.has('projects-title') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            data-animate
            id="projects-title"
          >
            <h2 className="text-red-500 text-sm font-mono mb-4">✦ SELECTED PROJECTS</h2>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className={`group transition-all duration-1000 ease-out ${
                  visibleElements.has(`project-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                data-animate
                id={`project-${index}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a 
                  href={project.link}
                  className="block border border-gray-700 hover:border-red-500 hover:border-opacity-50 transition-all duration-300 p-6 rounded-lg bg-gray-900 bg-opacity-20 hover:bg-opacity-40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-red-500 group-hover:text-red-400 transition-colors">↗</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                        <p className="text-gray-400 font-mono text-sm">{project.tech}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <ExternalLink size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 ease-out ${
              visibleElements.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            data-animate
            id="contact"
          >
            <p className="text-gray-400 mb-4">You know how to find me</p>
            <a 
              href="mailto:julien.blockchain@gmail.com" 
              className="text-2xl md:text-3xl text-white hover:text-red-400 transition-colors font-mono"
            >
              julien.blockchain@gmail.com
            </a>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:julien.blockchain@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Built by JULIEN ¿¡
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;