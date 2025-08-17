import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ExternalLink, Github, Mail, Code, Zap, Shield } from 'lucide-react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars with different colors
    for (let i = 0; i < 200; i++) {
      const colors = ['255,140,60', '60,140,255', '140,255,60', '255,60,140', '255,255,60'];
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${star.opacity})`;
        ctx.fill();
        
        star.opacity += (Math.random() - 0.5) * star.twinkleSpeed;
        star.opacity = Math.max(0.1, Math.min(0.9, star.opacity));
        
        star.y += star.speed;
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

const DynamicSpotlight = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverElement, setHoverElement] = useState('');
  const [trailPositions, setTrailPositions] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePos(newPos);
      
      // Create trail effect
      setTrailPositions(prev => {
        const newTrail = [newPos, ...prev.slice(0, 5)];
        return newTrail;
      });
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest('button')) {
        setIsHovering(true);
        setHoverElement('button');
      } else if (e.target.closest('a')) {
        setIsHovering(true);
        setHoverElement('link');
      } else if (e.target.closest('.interactive')) {
        setIsHovering(true);
        setHoverElement('interactive');
      }
    };

    const handleMouseLeave = (e) => {
      if (!e.target.closest('button, a, .interactive')) {
        setIsHovering(false);
        setHoverElement('');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  const getSpotlightColor = () => {
    switch (hoverElement) {
      case 'button':
        return 'rgba(255, 60, 140, 0.3), rgba(255, 60, 140, 0.1) 40%, rgba(255, 60, 140, 0.05) 70%';
      case 'link':
        return 'rgba(60, 255, 140, 0.3), rgba(60, 255, 140, 0.1) 40%, rgba(60, 255, 140, 0.05) 70%';
      case 'interactive':
        return 'rgba(140, 60, 255, 0.3), rgba(140, 60, 255, 0.1) 40%, rgba(140, 60, 255, 0.05) 70%';
      default:
        return 'rgba(60, 140, 255, 0.2), rgba(60, 140, 255, 0.08) 40%, rgba(60, 140, 255, 0.03) 70%';
    }
  };

  return (
    <>
      {/* Main spotlight */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePos.x - (isHovering ? 100 : 60),
          top: mousePos.y - (isHovering ? 100 : 60),
          width: isHovering ? 200 : 120,
          height: isHovering ? 200 : 120,
          background: `radial-gradient(circle, ${getSpotlightColor()}, transparent)`,
          filter: 'blur(2px)',
        }}
      />
      
      {/* Trail effect */}
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-40 rounded-full"
          style={{
            left: pos.x - 10,
            top: pos.y - 10,
            width: 20 - index * 2,
            height: 20 - index * 2,
            background: `radial-gradient(circle, rgba(255, 255, 255, ${0.3 - index * 0.05}), transparent)`,
            opacity: 1 - index * 0.2,
            transition: 'opacity 0.3s ease-out',
          }}
        />
      ))}
      
      {/* Pulse rings when hovering */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-45 rounded-full animate-ping"
          style={{
            left: mousePos.x - 75,
            top: mousePos.y - 75,
            width: 150,
            height: 150,
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
        />
      )}
    </>
  );
};

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
          : 'opacity-0 translate-y-16 scale-95 rotate-1'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const SkillIcon = ({ name, color = "text-gray-400", icon: Icon }) => {
  return (
    <div className="flex items-center space-x-3 mb-4 interactive hover:translate-x-4 transition-all duration-500 group cursor-none">
      {Icon && <Icon className={`w-4 h-4 ${color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />}
      <div className={`w-3 h-3 rounded-full ${color.replace('text-', 'bg-')} group-hover:scale-150 transition-transform duration-300`}></div>
      <span className="text-sm text-gray-300 group-hover:text-white group-hover:font-semibold transition-all duration-300">{name}</span>
    </div>
  );
};

const ProjectCard = ({ title, description, tech, delay = 0, position = "left" }) => {
  return (
    <AnimatedSection delay={delay} className={position === "right" ? "ml-auto" : ""}>
      <div className={`border border-gray-700 rounded-2xl p-8 hover:border-orange-500 transition-all duration-700 group interactive hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-gray-900/30 hover:rotate-1 max-w-md ${position === "right" ? "ml-8" : "mr-8"}`}>
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-white font-bold group-hover:text-orange-400 transition-colors duration-300 text-xl">
            {title}
          </h3>
          <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-orange-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
        </div>
        <p className="text-gray-400 text-base mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{description}</p>
        <p className="text-sm text-gray-500 group-hover:text-orange-300 transition-colors duration-300 font-semibold">{tech}</p>
      </div>
    </AnimatedSection>
  );
};

const FloatingElement = ({ children, className = "", direction = "up" }) => {
  const getAnimationClass = () => {
    switch (direction) {
      case "left": return "animate-float-left";
      case "right": return "animate-float-right";
      default: return "animate-float";
    }
  };

  return (
    <div className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden cursor-none">
      <StarryBackground />
      <DynamicSpotlight />
      
      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-50 p-8">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-orange-400 transition-all duration-500 hover:scale-125 interactive hover:rotate-90 transform"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex items-center justify-center backdrop-blur-lg">
          <div className="text-center space-y-12 transform">
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleMenuClick(e, item.toLowerCase())}
                className="block text-4xl text-white hover:text-orange-400 transition-all duration-700 cursor-none interactive hover:scale-125 transform hover:rotate-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section - Asymmetric Layout */}
      <section id="home" className="min-h-screen flex items-center relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 items-center min-h-screen">
            {/* Main Title - Takes up 8 columns, offset */}
            <div className="col-span-12 lg:col-span-8 lg:col-start-2">
              <AnimatedSection>
                <FloatingElement direction="up">
                  <h1 
                    className="text-7xl md:text-9xl font-black mb-8 leading-none"
                    style={{
                      transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`,
                    }}
                  >
                    <span className="text-orange-500 hover:text-orange-400 transition-colors duration-500 block transform hover:scale-105">
                      BLOCKCHAIN
                    </span>
                    <span className="text-white hover:text-gray-200 transition-colors duration-500 block transform hover:scale-105 ml-16">
                      DEVELOPER
                    </span>
                  </h1>
                </FloatingElement>
              </AnimatedSection>
            </div>

            {/* Floating Description - Positioned creatively */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 relative">
              <AnimatedSection delay={300}>
                <FloatingElement direction="right" className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-700 interactive hover:scale-105 hover:rotate-1 transform">
                  <p className="text-gray-300 text-xl leading-relaxed">
                    Passionate blockchain architect specializing in <span className="text-orange-400 font-semibold">DeFi protocols</span>, 
                    <span className="text-blue-400 font-semibold"> smart contracts</span>, and 
                    <span className="text-purple-400 font-semibold"> Web3 innovations</span>. 
                    Building the future of decentralized finance.
                  </p>
                </FloatingElement>
              </AnimatedSection>
            </div>

            {/* Resume Button - Floating position */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-3">
              <AnimatedSection delay={600}>
                <FloatingElement direction="left">
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-12 py-6 rounded-full transition-all duration-700 interactive hover:scale-125 hover:shadow-2xl hover:shadow-orange-500/40 transform font-bold text-xl group hover:rotate-3">
                    <span className="group-hover:animate-pulse">RESUME</span>
                    <Code className="inline ml-3 group-hover:rotate-90 transition-transform duration-500" size={24} />
                  </button>
                </FloatingElement>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-20 right-20 opacity-20">
          <FloatingElement className="text-6xl">⚡</FloatingElement>
        </div>
        <div className="absolute bottom-40 left-20 opacity-20">
          <FloatingElement direction="right" className="text-5xl">🔗</FloatingElement>
        </div>
      </section>

      {/* Philosophy Section - Diagonal Layout */}
      <section className="py-40 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <AnimatedSection>
                <FloatingElement>
                  <h2 className="text-5xl md:text-7xl font-light text-gray-300 leading-tight hover:text-white transition-colors duration-700 transform hover:scale-105 italic">
                    "I believe in <span className="text-orange-400 font-semibold">decentralized systems</span> that 
                    empower users, ensuring every smart contract prioritizes 
                    <span className="text-blue-400 font-semibold"> security</span>, 
                    <span className="text-purple-400 font-semibold"> transparency</span>, and 
                    <span className="text-green-400 font-semibold"> user sovereignty</span>."
                  </h2>
                </FloatingElement>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Magazine-style Layout */}
      <section id="about" className="py-40 relative z-10">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-4">
              <AnimatedSection>
                <h3 className="text-orange-500 text-lg mb-6 tracking-widest font-bold">THIS IS ME</h3>
                <h2 className="text-6xl font-black mb-8 hover:text-orange-400 transition-colors duration-500">I'm Julien</h2>
              </AnimatedSection>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:col-start-5">
              <AnimatedSection delay={200}>
                <div className="space-y-8">
                  <p className="text-gray-300 leading-relaxed text-2xl font-light">
                    Blockchain architect with an <span className="text-orange-400 font-semibold">unwavering commitment</span> to building 
                    secure, scalable decentralized applications that reshape digital asset interaction.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Two-column story */}
          <div className="grid grid-cols-12 gap-16 mb-32">
            <div className="col-span-12 lg:col-span-5">
              <AnimatedSection delay={300}>
                <FloatingElement className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-500">
                  <p className="text-gray-400 leading-relaxed text-lg mb-6">
                    A dedicated blockchain pioneer with deep expertise in <span className="text-blue-400">Ethereum</span>, 
                    <span className="text-green-400"> Solana</span>, and emerging Layer 2 protocols. 
                  </p>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Passionate about creating <span className="text-purple-400">trustless systems</span> that eliminate 
                    intermediaries and democratize financial services for everyone.
                  </p>
                </FloatingElement>
              </AnimatedSection>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <AnimatedSection delay={500}>
                <FloatingElement direction="right" className="transform hover:rotate-1 transition-all duration-500">
                  <p className="text-gray-300 leading-relaxed text-xl mb-8">
                    My approach focuses on writing <span className="text-orange-400 font-semibold">gas-optimized smart contracts</span>, 
                    implementing robust security measures, and creating intuitive DApps.
                  </p>
                  <div className="border-l-4 border-orange-500 pl-6">
                    <p className="text-gray-400 italic text-lg">
                      "Code is law, but law must be just, secure, and accessible to all."
                    </p>
                  </div>
                </FloatingElement>
              </AnimatedSection>
            </div>
          </div>

          {/* Fun statement */}
          <AnimatedSection className="text-center mb-32" delay={600}>
            <FloatingElement>
              <h3 className="text-orange-500 text-4xl font-black mb-8 hover:scale-110 transition-transform duration-500 interactive">
                🔥 I CAN'T STOP OPTIMIZING GAS FEES 🔥
              </h3>
            </FloatingElement>
          </AnimatedSection>

          {/* Skills Grid - Creative Layout */}
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <AnimatedSection delay={100}>
                <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/40 transition-all duration-500 hover:scale-105 interactive">
                  <h4 className="text-orange-500 text-sm mb-8 tracking-widest font-bold">BLOCKCHAIN STACK</h4>
                  <div className="space-y-2">
                    <SkillIcon name="Solidity" color="text-blue-400" icon={Code} />
                    <SkillIcon name="Rust" color="text-orange-500" icon={Zap} />
                    <SkillIcon name="Web3.js" color="text-yellow-500" />
                    <SkillIcon name="Ethers.js" color="text-blue-300" />
                    <SkillIcon name="Hardhat" color="text-yellow-400" />
                    <SkillIcon name="OpenZeppelin" color="text-blue-500" icon={Shield} />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-span-12 lg:col-span-3 lg:col-start-5">
              <AnimatedSection delay={200}>
                <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/40 transition-all duration-500 hover:scale-105 interactive">
                  <h4 className="text-purple-400 text-lg font-bold mb-8">NETWORKS</h4>
                  <div className="space-y-2">
                    <SkillIcon name="Ethereum" color="text-gray-300" />
                    <SkillIcon name="Polygon" color="text-purple-500" />
                    <SkillIcon name="Solana" color="text-green-400" />
                    <SkillIcon name="Arbitrum" color="text-blue-400" />
                    <SkillIcon name="Optimism" color="text-red-500" />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-span-12 lg:col-span-3 lg:col-start-9">
              <AnimatedSection delay={300}>
                <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/40 transition-all duration-500 hover:scale-105 interactive">
                  <h4 className="text-green-400 text-lg font-bold mb-8">EXPLORING</h4>
                  <div className="space-y-2">
                    <SkillIcon name="Layer Zero" color="text-purple-400" />
                    <SkillIcon name="ZK-SNARKs" color="text-green-400" />
                    <SkillIcon name="Account Abstraction" color="text-blue-300" />
                    <SkillIcon name="Cosmos SDK" color="text-purple-300" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Staggered Layout */}
      <section id="projects" className="py-40 relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <AnimatedSection>
              <h3 className="text-orange-500 text-lg mb-8 tracking-widest font-bold">SELECTED PROJECTS</h3>
              <h2 className="text-5xl font-black text-white mb-16">Building the Future</h2>
            </AnimatedSection>
          </div>
          
          <div className="space-y-24">
            <ProjectCard 
              title="🔥 DeFi Yield Aggregator"
              description="Advanced yield farming protocol that automatically compounds rewards across multiple DeFi platforms. Features automated rebalancing, gas optimization, and multi-chain support."
              tech="Solidity • Web3.js • Compound Protocol • Yearn Integration"
              delay={0}
              position="left"
            />
            
            <ProjectCard 
              title="🎨 NFT Marketplace 2.0"
              description="Next-generation NFT platform with lazy minting, royalty distribution, and cross-chain compatibility. Built with sustainability and creator economics in mind."
              tech="Solidity • IPFS • Polygon • OpenSea API"
              delay={200}
              position="right"
            />
            
            <ProjectCard 
              title="🌉 Cross-Chain Bridge"
              description="Secure asset bridge enabling seamless transfers between Ethereum, Polygon, and Arbitrum. Implements multi-signature validation and emergency pause mechanisms."
              tech="Solidity • Rust • Layer Zero • Multi-sig Wallet"
              delay={400}
              position="left"
            />
            
            <ProjectCard 
              title="🏛️ DAO Governance Hub"
              description="Comprehensive governance platform for DAOs featuring proposal creation, weighted voting, treasury management, and automated execution of passed proposals."
              tech="Solidity • Snapshot • Aragon Framework • TypeScript"
              delay={600}
              position="right"
            />
          </div>
        </div>
      </section>

      {/* Contact Section - Centered but Creative */}
      <section id="contact" className="py-40 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <FloatingElement>
                <h2 className="text-4xl font-light text-gray-400 mb-8">Let's build the</h2>
                <h1 className="text-7xl font-black text-orange-500 mb-12 hover:scale-105 transition-transform duration-500">
                  DECENTRALIZED FUTURE
                </h1>
                <p className="text-2xl text-gray-300 mb-16">together</p>
              </FloatingElement>
              
              <div className="space-y-8">
                <a 
                  href="mailto:julien.blockchain@gmail.com"
                  className="text-4xl text-white hover:text-orange-400 transition-all duration-700 inline-flex items-center space-x-4 interactive hover:scale-110 transform group"
                >
                  <Mail size={40} className="group-hover:animate-bounce" />
                  <span>julien.blockchain@gmail.com</span>
                </a>
                
                <div className="flex justify-center space-x-12 mt-16">
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-all duration-500 interactive hover:scale-150 transform">
                    <Github size={36} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-500 interactive hover:scale-150 transform">
                    <Code size={36} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={300} className="mt-24">
            <FloatingElement direction="right">
              <p className="text-sm text-gray-500">
                crafted with 💙 by Julien • powered by blockchain magic ✨
              </p>
            </FloatingElement>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;