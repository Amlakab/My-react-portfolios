import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaJava, FaPhone, FaMapMarker, FaSun, FaMoon } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFramer } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [nameIndex, setNameIndex] = useState(0);
  const [profileIndex, setProfileIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Enhanced color scheme with better contrast and professional palette
  const colors = isDarkMode ? {
    // Dark theme colors
    primary: '#00f0ff',       // Vibrant cyan
    secondary: '#6c63ff',     // Soft purple
    accent: '#ff2d75',        // Pink accent
    
    // Background colors (two alternating shades)
    bgPrimary: '#0a192f',     // Dark navy (hero, skills, etc.)
    bgSecondary: '#112240',   // Slightly lighter navy (about, experience, etc.)
    
    // Text colors
    textPrimary: '#ccd6f6',   // Light blue (main text)
    textSecondary: '#8892b0', // Lighter text (secondary)
    textDark: '#1a1a2e',      // For light backgrounds in dark mode
    
    // UI elements
    border: 'rgba(100, 255, 255, 0.1)',
    shadow: 'rgba(2, 12, 27, 0.7)'
  } : {
    // Light theme colors
    primary: '#2563eb',       // Royal blue
    secondary: '#4f46e5',     // Indigo
    accent: '#f59e0b',        // Amber accent
    
    // Background colors (two alternating shades)
    bgPrimary: '#f8fafc',     // Very light gray (hero, skills, etc.)
    bgSecondary: '#ffffff',   // Pure white (about, experience, etc.)
    
    // Text colors
    textPrimary: '#1e293b',   // Dark slate (main text)
    textSecondary: '#475569', // Grayish text (secondary)
    textDark: '#1a1a2e',      // For dark text on light bg
    
    // UI elements
    border: 'rgba(30, 41, 59, 0.1)',
    shadow: 'rgba(100, 100, 111, 0.2)'
  };

  // Section background alternator
  const getSectionBackground = (sectionIndex) => {
    return sectionIndex % 2 === 0 ? colors.bgPrimary : colors.bgSecondary;
  };

  const getSectionTextColor = (sectionIndex) => {
    return sectionIndex % 2 === 0 ? colors.textPrimary : colors.textPrimary;
  };

  const names = ["Amlakie", "Developer", "Designer", "Creator"];
  const profiles = [
    "/images/profile1.png",
    "/images/profile2.png",
    "/images/profile3.png"
  ];

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % names.length);
    }, 3000);

    const profileInterval = setInterval(() => {
      setProfileIndex((prev) => (prev + 1) % profiles.length);
    }, 4000);

    return () => {
      clearInterval(nameInterval);
      clearInterval(profileInterval);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "Comprehensive system for patient records, appointments, and billing with AI diagnostics integration",
      tags: ["React", "Node.js", "MongoDB", "AI"],
      image: "/images/hospital-system.png",
      width: "wide"
    },
    {
      id: 2,
      title: "Transport Management",
      description: "Fleet tracking with real-time logistics optimization",
      tags: ["React", "Python", "PostgreSQL"],
      image: "/images/transport-system.png",
      width: "narrow"
    },
    {
      id: 3,
      title: "Scientific Calculator",
      description: "Advanced calculator with 3D graphing capabilities",
      tags: ["JavaScript", "WebGL", "MathJS"],
      image: "/images/calculator.png",
      width: "narrow"
    },
    {
      id: 4,
      title: "INSA Website",
      description: "Interactive institutional portal with virtual campus tour",
      tags: ["React", "Three.js", "Firebase"],
      image: "/images/insa-website.png",
      width: "narrow"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "Amazon-like shopping with AR product preview",
      tags: ["React", "Node.js", "AR.js"],
      image: "/images/ecommerce.png",
      width: "narrow"
    },
    {
      id: 6,
      title: "Portfolio Template",
      description: "Customizable 3D portfolio with interactive elements",
      tags: ["React", "Framer Motion", "Three.js"],
      image: "/images/portfolio-template.png",
      width: "wide"
    }
  ];

  // Experience data
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Developed AI-powered web applications using modern JavaScript frameworks and implemented responsive UIs with micro-interactions."
    },
    {
      role: "Frontend Architect",
      company: "Digital Creations",
      period: "2019 - 2021",
      description: "Led frontend teams to create immersive web experiences with animations and 3D elements."
    }
  ];

  // Education data
  const education = [
    {
      degree: "Master in Computer Science",
      institution: "University of Technology",
      year: "2018 - 2020",
      description: "Specialized in Human-Computer Interaction and Advanced Web Technologies"
    },
    {
      degree: "Bachelor in Software Engineering",
      institution: "State University",
      year: "2014 - 2018",
      description: "Focused on Full Stack Development and User Experience Design"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Amlakie delivered our project ahead of schedule with exceptional quality. His attention to detail and problem-solving skills are remarkable.",
      avatar: "/images/testimonial1.png",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateX",
      content: "Working with Amlakie was a pleasure. He transformed our complex requirements into a beautiful, functional application with stunning animations.",
      avatar: "/images/testimonial2.png",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating React apps that can grow with your user base while maintaining performance.",
      date: "May 15, 2023",
      image: "/images/blog1.png",
      category: "React"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies that will shape the next decade of web development including Web3 and AI integration.",
      date: "April 28, 2023",
      image: "/images/blog2.png",
      category: "Web"
    }
  ];

  const stats = [
    { number: "25+", label: "Projects Completed" },
    { number: "15", label: "Happy Clients" },
    { number: "50K+", label: "Lines of Code" },
    { number: "3", label: "Years Experience" }
  ];

    const skills = [
    { name: "React", value: 95, icon: <FaReact /> },
    { name: "Node.js", value: 90, icon: <FaNodeJs /> },
    { name: "TypeScript", value: 85, icon: <SiTypescript /> },
    { name: "Python", value: 80, icon: <FaPython /> },
    { name: "MongoDB", value: 75, icon: <SiMongodb /> },
    { name: "PostgreSQL", value: 70, icon: <SiPostgresql /> },
    { name: "Java", value: 65, icon: <FaJava /> },
    { name: "Framer Motion", value: 85, icon: <SiFramer /> }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  // Section order for background alternation
  const sections = [
    'home', 'about', 'skills', 'experience', 'education', 'work', 
    'testimonials', 'blog', 'contact'
  ];

  return (
    <div className="portfolio-app" style={{ 
      backgroundColor: colors.bgPrimary,
      color: colors.textPrimary,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Animated Background */}
      <div className="animated-bg">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-particle"
            style={{ backgroundColor: colors.primary }}
            initial={{ 
              y: -100, 
              x: Math.random() * window.innerWidth,
              opacity: 0
            }}
            animate={{
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth,
              opacity: [0, 0.2, 0],
              transition: {
                duration: 15 + Math.random() * 30,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navbar expand="lg" fixed="top" className="portfolio-nav" style={{ 
        backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.9)' : 'rgba(248, 249, 250, 0.9)',
        backdropFilter: 'blur(10px)'
      }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar.Brand 
              href="#home" 
              className="logo"
              style={{ 
                color: colors.primary,
                fontSize: '1.8rem',
                fontWeight: 700,
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '1px'
              }}
            >
              Amlakie
            </Navbar.Brand>
          </motion.div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: colors.primary }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {sections.map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Nav.Link
                    href={`#${item}`}
                    active={activeSection === item}
                    onClick={() => scrollToSection(item)}
                    className="nav-link"
                    style={{
                      color: activeSection === item ? colors.primary : colors.textPrimary,
                      margin: '0 15px',
                      fontWeight: 500,
                      position: 'relative',
                      fontSize: '0.95rem',
                      textTransform: 'capitalize',
                      letterSpacing: '1px',
                      fontFamily: "'Poppins', sans-serif"
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    {activeSection === item && (
                      <motion.div
                        style={{
                          position: 'absolute',
                          bottom: -5,
                          left: 0,
                          width: '100%',
                          height: '2px',
                          backgroundColor: colors.primary
                        }}
                        layoutId="underline"
                      />
                    )}
                  </Nav.Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ marginLeft: '15px', cursor: 'pointer' }}
                onClick={toggleTheme}
              >
                {isDarkMode ? <FaSun color={colors.primary} size={20} /> : <FaMoon color={colors.primary} size={20} />}
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section (Primary BG) */}
      <section 
        id="home" 
        className="hero-section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: getSectionBackground(0),
          color: getSectionTextColor(0),
          padding: '100px 0'
        }}
      >
                <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="order-md-1 order-2">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 
                  className="hero-title"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 700,
                    marginBottom: '20px',
                    lineHeight: 1.2,
                    fontFamily: "'Orbitron', sans-serif",
                    color: colors.text
                  }}
                >
                  Hi, I'm <span style={{ color: colors.primary }}>{names[nameIndex]}</span>
                </h1>
                <motion.h2 
                  className="hero-subtitle"
                  key={nameIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 400,
                    marginBottom: '30px',
                    color: colors.text,
                    fontFamily: "'Orbitron', sans-serif"
                  }}
                >
                  {names[nameIndex] === "Amlakie" ? "Full Stack Developer" : 
                   names[nameIndex] === "Developer" ? "React Specialist" :
                   names[nameIndex] === "Designer" ? "UI/UX Expert" : "Innovative Creator"}
                </motion.h2>
                <p 
                  className="hero-description"
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '40px',
                    maxWidth: '600px',
                    color: colors.text
                  }}
                >
                  I build exceptional digital experiences with modern web technologies, 
                  creating immersive interfaces that captivate users.
                </p>
                <div className="hero-cta" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: `0 10px 25px ${colors.primary}80` }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      color: colors.light,
                      border: 'none',
                      padding: '15px 30px',
                      borderRadius: '50px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '1rem',
                      boxShadow: `0 5px 15px ${colors.primary}30`
                    }}
                  >
                    View My Work
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline"
                    style={{
                      backgroundColor: 'transparent',
                      color: colors.primary,
                      border: `2px solid ${colors.primary}`,
                      padding: '13px 28px',
                      borderRadius: '50px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '1rem'
                    }}
                  >
                    <FiDownload style={{ marginRight: '8px' }} /> Download CV
                  </motion.button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6} md={12} className="order-md-2 order-1 mb-5 mb-md-0">
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-image-container"
                style={{ position: 'relative', display: 'flex', justifyContent: 'center', perspective: '1000px' }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={profileIndex}
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: '380px',
                      height: '380px',
                      borderRadius: '30px',
                      overflow: 'hidden',
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <img 
                      src={profiles[profileIndex]} 
                      alt="Profile" 
                      className="hero-image" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <div 
                      className="hero-image-bg"
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        width: 'calc(100% - 40px)',
                        height: 'calc(100% - 40px)',
                        border: `5px solid ${colors.primary}`,
                        borderRadius: '30px',
                        zIndex: -1,
                        transform: 'rotate(5deg)'
                      }}
                    ></div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section (Secondary BG) */}
      <section 
        id="about" 
        className="section about-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(1),
          color: getSectionTextColor(1)
        }}
      >
                <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <h2 
              className="section-title text-center"
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                fontWeight: 700,
                marginBottom: '25px',
                color: colors.dark,
                fontFamily: "'Orbitron', sans-serif",
                position: 'relative',
                display: 'inline-block'
              }}
            >
              About Me
              <motion.div 
                style={{
                  content: '',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                  borderRadius: '2px'
                }}
                layoutId="sectionDivider"
              />
            </h2>
            <Row className="align-items-center">
              <Col lg={4} md={12} className="mb-5 mb-lg-0">
                <motion.div
                  whileHover={{ rotate: 2 }}
                  transition={{ type: "spring" }}
                  className="about-image-wrapper mx-auto"
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '320px',
                    height: '320px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    margin: '0 auto',
                    border: `5px solid ${colors.light}`
                  }}
                >
                  <img 
                    src="/images/about.png" 
                    alt="About" 
                    className="about-image" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                </motion.div>
              </Col>
              <Col lg={8} md={12}>
                <div className="about-content" style={{ paddingLeft: '0', paddingTop: '40px', paddingLeft: '0' }}>
                  <h3 style={{ 
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                    marginBottom: '25px', 
                    color: colors.dark,
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    Who is Amlakie?
                  </h3>
                  <p style={{ 
                    marginBottom: '20px', 
                    lineHeight: 1.8, 
                    fontSize: '1.1rem',
                    color: colors.textDark
                  }}>
                    I'm a passionate full-stack developer with 5+ years of experience building cutting-edge web applications.
                    I specialize in JavaScript technologies across the whole stack with a focus on creating immersive user experiences.
                  </p>
                  <p style={{ 
                    marginBottom: '20px', 
                    lineHeight: 1.8, 
                    fontSize: '1.1rem',
                    color: colors.textDark
                  }}>
                    My approach combines technical expertise with creative problem-solving to deliver
                    high-quality, user-friendly applications that push the boundaries of modern web design.
                  </p>
                  <div className="about-info" style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '40px'
                  }}>
                    <div className="info-item" style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        fontWeight: 600, 
                        marginRight: '15px', 
                        minWidth: '80px',
                        color: colors.primary
                      }}>
                        Name:
                      </span>
                      <p style={{ margin: 0, fontWeight: 500 }}>Amlakie</p>
                    </div>
                    <div className="info-item" style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        fontWeight: 600, 
                        marginRight: '15px', 
                        minWidth: '80px',
                        color: colors.primary
                      }}>
                        Email:
                      </span>
                      <p style={{ margin: 0, fontWeight: 500 }}>amlakie@example.com</p>
                    </div>
                    <div className="info-item" style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        fontWeight: 600, 
                        marginRight: '15px', 
                        minWidth: '80px',
                        color: colors.primary
                      }}>
                        From:
                      </span>
                      <p style={{ margin: 0, fontWeight: 500 }}>Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="info-item" style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        fontWeight: 600, 
                        marginRight: '15px', 
                        minWidth: '80px',
                        color: colors.primary
                      }}>
                        Focus:
                      </span>
                      <p style={{ margin: 0, fontWeight: 500 }}>Interactive Web Experiences</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Skills Section (Primary BG) */}
      <section 
        id="skills" 
        className="section skills-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(2),
          color: getSectionTextColor(2)
        }}
      >
                <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <h2 
              className="section-title text-center"
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                fontWeight: 700,
                marginBottom: '25px',
                color: colors.text,
                fontFamily: "'Orbitron', sans-serif",
                position: 'relative',
                display: 'inline-block'
              }}
            >
              My Skills
              <motion.div 
                style={{
                  content: '',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                  borderRadius: '2px'
                }}
                layoutId="sectionDivider"
              />
            </h2>
            <Row>
              <Col lg={6} md={12} className="mb-5 mb-lg-0">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeft}
                >
                  <div className="skills-content">
                    <h3 style={{ 
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                      marginBottom: '25px', 
                      color: colors.text,
                      fontFamily: "'Orbitron', sans-serif"
                    }}>
                      My technical expertise.
                    </h3>
                    <p style={{ 
                      marginBottom: '30px', 
                      lineHeight: 1.8, 
                      fontSize: '1.1rem',
                      color: colors.text
                    }}>
                      I've mastered a variety of technologies in the web development world,
                      from backend systems to interactive frontend experiences. My skills evolve
                      with the industry to deliver cutting-edge solutions.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: `0 5px 15px ${colors.primary}40` }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        color: colors.light,
                        border: 'none',
                        padding: '15px 30px',
                        borderRadius: '50px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: '1rem',
                        boxShadow: `0 5px 15px ${colors.primary}30`
                      }}
                    >
                      View Full Skillset
                    </motion.button>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6} md={12}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInRight}
                >
                  <div 
                    className="skills-progress"
                    style={{
                      padding: '30px',
                      backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.7)' : 'rgba(248, 249, 250, 0.7)',
                      borderRadius: '20px',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {skills.map((skill, index) => (
                      <div 
                        className="progress-item" 
                        key={index}
                        style={{ marginBottom: '25px' }}
                      >
                        <div 
                          className="progress-header"
                          style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
                        >
                          <span 
                            className="skill-icon"
                            style={{ 
                              fontSize: '1.5rem', 
                              marginRight: '15px',
                              color: colors.primary
                            }}
                          >
                            {skill.icon}
                          </span>
                          <span 
                            className="skill-name"
                            style={{ 
                              fontWeight: 600, 
                              flexGrow: 1,
                              fontSize: '1.1rem',
                              color: colors.text
                            }}
                          >
                            {skill.name}
                          </span>
                          <span 
                            className="skill-percent"
                            style={{ 
                              fontWeight: 700,
                              color: colors.primary,
                              fontSize: '1.1rem'
                            }}
                          >
                            {skill.value}%
                          </span>
                        </div>
                        <motion.div
                          className="progress-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          style={{
                            width: '100%',
                            height: '10px',
                            backgroundColor: isDarkMode ? '#112240' : '#e9ecef',
                            borderRadius: '5px',
                            overflow: 'hidden'
                          }}
                        >
                          <motion.div
                            className="progress-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                            style={{
                              height: '100%',
                              background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                              borderRadius: '5px',
                              boxShadow: `0 2px 10px ${colors.primary}30`
                            }}
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Experience Section (Secondary BG) */}
      <section 
        id="experience" 
        className="section experience-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(3),
          color: getSectionTextColor(3)
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">My Experience</h2>
            <div className="section-divider"></div>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    className="timeline-content"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                    <span className="date">{exp.period}</span>
                    <p>{exp.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Education Section (Primary BG) */}
      <section 
        id="education" 
        className="section education-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(4),
          color: getSectionTextColor(4)
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">My Education</h2>
            <div className="section-divider"></div>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    className="timeline-content"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                    <span className="date">{edu.year}</span>
                    <p>{edu.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Work Section (Secondary BG) */}
      <section 
        id="work" 
        className="section work-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(5),
          color: getSectionTextColor(5)
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">My Work</h2>
            <div className="section-divider"></div>
            <div className="project-filter">
              {['All', 'Web', 'Mobile', 'Design', 'Full Stack'].map((filter, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "var(--primary-color)", color: "white" }}
                  whileTap={{ scale: 0.95 }}
                  className="filter-btn"
                >
                  {filter}
                </motion.button>
              ))}
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`project-card ${project.width === 'wide' ? 'wide' : 'narrow'}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="view-btn"
                      >
                        <FiExternalLink className="me-2" /> View Project
                      </motion.button>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <motion.span 
                          key={i}
                          whileHover={{ y: -2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-5">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(108, 99, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View All Projects
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Testimonials Section (Primary BG) */}
      <section 
        id="testimonials" 
        className="section testimonials-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(6),
          color: getSectionTextColor(6)
        }}
      >
 <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <h2 
              className="section-title text-center"
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                fontWeight: 700,
                marginBottom: '25px',
                color: colors.text,
                fontFamily: "'Orbitron', sans-serif",
                position: 'relative',
                display: 'inline-block'
              }}
            >
              Client Testimonials
              <motion.div 
                style={{
                  content: '',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                  borderRadius: '2px'
                }}
                layoutId="sectionDivider"
              />
            </h2>
            <Row className="justify-content-center">
              <Col lg={10}>
                <div 
                  className="testimonial-slider"
                  style={{
                    position: 'relative',
                    padding: '20px 0',
                    display: 'flex',
                    gap: '30px',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none'
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <motion.div
                      key={testimonial.id}
                      className="testimonial-card"
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                      }}
                      style={{
                        backgroundColor: colors.light,
                        borderRadius: '20px',
                        padding: '40px',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
                        minWidth: '80%',
                        scrollSnapAlign: 'start',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                      }}
                    >
                      <div 
                        className="testimonial-header"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '25px'
                        }}
                      >
                        <div 
                          className="testimonial-avatar"
                          style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            marginRight: '25px',
                            border: `3px solid ${colors.primary}`,
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="testimonial-author">
                          <h4 style={{ 
                            fontSize: '1.4rem', 
                            marginBottom: '5px',
                            color: colors.dark,
                            fontFamily: "'Orbitron', sans-serif"
                          }}>
                            {testimonial.name}
                          </h4>
                          <p style={{ 
                            fontSize: '1rem',
                            color: colors.textDark,
                            marginBottom: '10px'
                          }}>
                            {testimonial.role}
                          </p>
                          <div 
                            className="testimonial-rating"
                            style={{ color: '#ffc107', fontSize: '1.1rem' }}
                          >
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p 
                          style={{ 
                            fontStyle: 'italic',
                            lineHeight: 1.8,
                            position: 'relative',
                            paddingLeft: '30px',
                            fontSize: '1.1rem',
                            color: colors.dark
                          }}
                        >
                          "{testimonial.content}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Blog Section (Secondary BG) */}
      <section 
        id="blog" 
        className="section blog-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(7),
          color: getSectionTextColor(7)
        }}
      >
              <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <h2 
              className="section-title text-center"
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                fontWeight: 700,
                marginBottom: '25px',
                color: colors.dark,
                fontFamily: "'Orbitron', sans-serif",
                position: 'relative',
                display: 'inline-block'
              }}
            >
              Latest Articles
              <motion.div 
                style={{
                  content: '',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                  borderRadius: '2px'
                }}
                layoutId="sectionDivider"
              />
            </h2>
            <Row>
              {blogPosts.map((post) => (
                <Col md={6} key={post.id} className="mb-4">
                  <motion.div
                    className="blog-card"
                    style={{
                      backgroundColor: colors.light,
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      marginBottom: '30px',
                      height: '100%',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: post.id * 0.1 }}
                    whileHover={{ 
                      y: -10, 
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div 
                      className="blog-image"
                      style={{
                        position: 'relative',
                        height: '250px',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.8s ease'
                        }}
                      />
                      <div 
                        className="blog-category"
                        style={{
                          position: 'absolute',
                          top: '20px',
                          right: '20px',
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                          color: colors.light,
                          padding: '6px 18px',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {post.category}
                      </div>
                    </div>
                    <div 
                      className="blog-content"
                      style={{ padding: '30px' }}
                    >
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        marginBottom: '15px',
                        color: colors.dark,
                        fontFamily: "'Orbitron', sans-serif"
                      }}>
                        {post.title}
                      </h3>
                      <p 
                        className="blog-date"
                        style={{
                          fontSize: '0.95rem',
                          color: colors.textDark,
                          marginBottom: '20px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <span style={{
                          display: 'inline-block',
                          width: '15px',
                          height: '2px',
                          backgroundColor: colors.primary,
                          marginRight: '10px'
                        }}></span>
                        {post.date}
                      </p>
                      <p 
                        className="blog-excerpt"
                        style={{
                          marginBottom: '25px',
                          lineHeight: 1.8,
                          color: colors.textDark
                        }}
                      >
                        {post.excerpt}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-read-more"
                        style={{
                          backgroundColor: 'transparent',
                          color: colors.primary,
                          border: 'none',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: 0,
                          fontSize: '1rem',
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                      >
                        Read More <FiExternalLink style={{ marginLeft: '8px' }} />
                      </motion.button>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
            <div className="text-center mt-5">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 10px 25px ${colors.primary}40`
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  color: colors.light,
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '1rem',
                  boxShadow: `0 5px 15px ${colors.primary}30`
                }}
              >
                View All Articles
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section (Primary BG) */}
      <section 
        id="contact" 
        className="section contact-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(8),
          color: getSectionTextColor(8)
        }}
      >
                <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <h2 
              className="section-title text-center"
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                fontWeight: 700,
                marginBottom: '25px',
                color: colors.dark,
                fontFamily: "'Orbitron', sans-serif",
                position: 'relative',
                display: 'inline-block'
              }}
            >
              Get In Touch
              <motion.div 
                style={{
                  content: '',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                  borderRadius: '2px'
                }}
                layoutId="sectionDivider"
              />
            </h2>
            
            {/* Basic Contact Information (Horizontally Aligned) */}
            <Row className="text-center mb-5">
              <Col md={4} sm={12} className="mb-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <FaMapMarker size={30} color={colors.primary} />
                  <h3 style={{ color: colors.primary }}>Location</h3>
                  <p style={{ color: colors.textDark }}>Addis Ababa, Ethiopia</p>
                </motion.div>
              </Col>
              <Col md={4} sm={12} className="mb-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <FaPhone size={30} color={colors.primary} />
                  <h3 style={{ color: colors.primary }}>Phone</h3>
                  <p style={{ color: colors.textDark }}>+251 9 12 43 65 73</p>
                </motion.div>
              </Col>
              <Col md={4} sm={12} className="mb-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <FiMail size={30} color={colors.primary} />
                  <h3 style={{ color: colors.primary }}>Email</h3>
                  <p style={{ color: colors.textDark }}>contact@amlakie.com</p>
                </motion.div>
              </Col>
            </Row>

            {/* Two Columns: Map and Contact Form */}
            <Row>
              {/* Left Column: Map */}
              <Col md={6} className="mb-5 mb-md-0">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.869244319124!2d38.76321431536945!3d9.012326893541918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f1a4b1f3b5%3A0x1c5b5b5b5b5b5b5b!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1633080000000!5m2!1sen!2set"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </motion.div>
              </Col>

              {/* Right Column: Contact Form */}
              <Col md={6}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div 
                    className="contact-form"
                    style={{
                      backgroundColor: colors.light,
                      padding: '40px',
                      borderRadius: '20px',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <h3 style={{ 
                      color: colors.primary,
                      fontSize: '2rem',
                      marginBottom: '25px',
                      fontFamily: "'Orbitron', sans-serif"
                    }}>
                      Send Me a Message
                    </h3>
                    <form>
                      <Row>
                        <Col md={6}>
                          <div 
                            className="form-group"
                            style={{ marginBottom: '25px' }}
                          >
                            <input
                              type="text"
                              placeholder="Your Name"
                              required
                              style={{
                                width: '100%',
                                padding: '15px 20px',
                                border: `1px solid ${colors.primary}`,
                                borderRadius: '10px',
                                fontFamily: 'inherit',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                fontSize: '1rem',
                                backgroundColor: isDarkMode ? '#0a192f' : '#f8f9fa',
                                color: colors.text
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div 
                            className="form-group"
                            style={{ marginBottom: '25px' }}
                          >
                            <input
                              type="email"
                              placeholder="Your Email"
                              required
                              style={{
                                width: '100%',
                                padding: '15px 20px',
                                border: `1px solid ${colors.primary}`,
                                borderRadius: '10px',
                                fontFamily: 'inherit',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                fontSize: '1rem',
                                backgroundColor: isDarkMode ? '#0a192f' : '#f8f9fa',
                                color: colors.text
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                      <div 
                        className="form-group"
                        style={{ marginBottom: '25px' }}
                      >
                        <input
                          type="text"
                          placeholder="Subject"
                          required
                          style={{
                            width: '100%',
                            padding: '15px 20px',
                            border: `1px solid ${colors.primary}`,
                            borderRadius: '10px',
                            fontFamily: 'inherit',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            fontSize: '1rem',
                            backgroundColor: isDarkMode ? '#0a192f' : '#f8f9fa',
                            color: colors.text
                          }}
                        />
                      </div>
                      <div 
                        className="form-group"
                        style={{ marginBottom: '25px' }}
                      >
                        <textarea
                          placeholder="Your Message"
                          rows={5}
                          required
                          style={{
                            width: '100%',
                            padding: '15px 20px',
                            border: `1px solid ${colors.primary}`,
                            borderRadius: '10px',
                            fontFamily: 'inherit',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            fontSize: '1rem',
                            resize: 'none',
                            backgroundColor: isDarkMode ? '#0a192f' : '#f8f9fa',
                            color: colors.text
                          }}
                        ></textarea>
                      </div>
                      <motion.button
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: `0 5px 15px ${colors.primary}40`
                        }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        style={{
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                          color: colors.light,
                          border: 'none',
                          padding: '15px 30px',
                          borderRadius: '50px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          fontSize: '1rem',
                          boxShadow: `0 5px 15px ${colors.primary}30`,
                          width: '100%',
                          justifyContent: 'center'
                        }}
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer 
        className="footer"
        style={{
          backgroundColor: colors.bgPrimary,
          color: colors.textPrimary,
          padding: '60px 0 30px',
          textAlign: 'center',
          position: 'relative',
          borderTop: `1px solid ${colors.border}`
        }}
      >
                <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-content"
          >
            <div 
              className="social-links"
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '25px',
                marginBottom: '40px'
              }}
            >
              {[
                { icon: <FiGithub />, url: "#" },
                { icon: <FiLinkedin />, url: "#" },
                { icon: <FiMail />, url: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -5, 
                    color: colors.primary,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    color: colors.light,
                    fontSize: '1.8rem',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p style={{ 
              marginBottom: 0,
              fontSize: '1rem',
              opacity: 0.8
            }}>
              © {new Date().getFullYear()} Amlakie. All rights reserved.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 5px 15px ${colors.primary}30`
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline btn-sm mt-3"
              onClick={() => scrollToSection('home')}
              style={{
                backgroundColor: 'transparent',
                color: colors.primary,
                border: `2px solid ${colors.primary}`,
                padding: '8px 20px',
                borderRadius: '50px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.9rem',
                marginTop: '20px'
              }}
            >
              Back to Top
            </motion.button>
          </motion.div>
        </Container>
      </footer>
    </div>
  );
};

export default Portfolio;