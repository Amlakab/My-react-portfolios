import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiExternalLink, FiArrowUp } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaJava, FaPhone, FaMapMarker, FaSun, FaMoon, FaServer, FaMapMarkedAlt, FaChevronCircleRight, FaCss3Alt, FaHtml5, FaJs, FaGraduationCap, FaUser, FaTools, FaProjectDiagram, FaBlog, FaEnvelope, FaQuoteRight, FaBriefcase, FaPenNib, FaEnvelopeOpenText, FaHeadset, FaLaptopCode } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFramer, SiPhp, SiMysql, SiSpringboot, SiBootstrap, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { BsChatQuote, BsLightningChargeFill, BsTelegram, BsTwitter } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiArticleLine, RiCodeSSlashLine, RiToolsFill } from 'react-icons/ri';
import { MdBuild, MdRecordVoiceOver, MdRssFeed } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';

const Portfolio = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [nameIndex, setNameIndex] = useState(0);
  const [profileIndex, setProfileIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Enhanced color scheme with proper contrast
  const colors = isDarkMode ? {
    // Dark theme colors
    primary: '#00f0ff',       // Vibrant cyan
    secondary: '#6c63ff',     // Soft purple
    accent: '#ff2d75',        // Pink accent
    
    // Background colors
    bgPrimary: '#0a192f',     // Dark navy
    bgSecondary: '#112240',   // Slightly lighter navy
    
    // Text colors
    textPrimary: '#e6f1ff',   // Bright white-blue
    textSecondary: '#ccd6f6', // Softer white-blue
    
    // UI elements
    border: 'rgba(100, 255, 255, 0.1)',
    shadow: 'rgba(2, 12, 27, 0.7)'
  } : {
    // Light theme colors
    primary: '#2563eb',       // Royal blue
    secondary: '#4f46e5',     // Indigo
    accent: '#f59e0b',        // Amber accent
    
    // Background colors
    bgPrimary: '#f8fafc',     // Very light gray
    bgSecondary: '#ffffff',   // Pure white
    
    // Text colors
    textPrimary: '#1e293b',   // Dark slate
    textSecondary: '#475569', // Grayish text
    
    // UI elements
    border: 'rgba(30, 41, 59, 0.1)',
    shadow: 'rgba(100, 100, 111, 0.2)'
  };

  // Section background alternator
  const getSectionBackground = (sectionIndex) => {
    return sectionIndex % 2 === 0 ? colors.bgPrimary : colors.bgSecondary;
  };

  const names = ["Amlakie", "Developer", "Designer", "Creator"];
  const profiles = [
    "/images/profile1.jpg",
    "/images/profile2.jpg",
    "/images/profile3.jpg"
  ];

  // Section order
  const sections = [
    'home', 'about', 'education' , 'experience', 'skills' , 'work', 
    'testimonials', 'blog', 'contact'
  ];
 const projects = [
     {
      id: 1,
      title: "E-commerce Platform",
      description: "Amazon-like shopping with AR product preview",
      tags: ["Next.js","Typescript", "Node.js", "MongoDB"],
      image: "/images/ecommerce.png",
      github: "https://github.com/Amlakab/Amlakie-e-commerce",
      link: "https://amlakie-e-commerce.vercel.app/"
    },
    {
      id: 2,
      title: "My Portfolio Website",
      description: "Customizable 3D portfolio with interactive elements",
      tags: ["React", "JavaScript", "Bootstrap"],
      image: "/images/my-portfolio.png",
      github: "https://github.com/Amlakab/project1",
      link: "https://my-react-portfolios.vercel.app/"
    },
    {
      id: 3,
      title: "Scientific Calculator",
      description: "Advanced calculator with 3D graphing capabilities",
      tags: ["Next.js", "Typescript", "Tailwind CSS"],
      image: "/images/calculator2.png",
      github: "https://github.com/Amlakab/Amlakie-Calculator",
      link: "https://my-calculator-nu-two.vercel.app/"
    },
    {
      id: 4,
      title: "INSA Website",
      description: "Interactive institutional portal with virtual campus tour",
      tags: ["React", "JavaScript", "MYSQL", "Bootstrap"],
      image: "/images/insa-website.png",
      github: "https://github.com/Amlakab/INSA-WEB",
      link: "https://insa-web.vercel.app/"
    },
       {
      id: 5,
      title: "Hospital Management System",
      description: "Comprehensive system for patient records, appointments, and billing with AI diagnostics integration",
      tags: ["HTML", "CSS", "Javascript", "MYSQL", "Bootstrap"],
      image: "/images/hospital-system.png",
      github: "https://github.com/Amlakab/HIMS"

    },
    {
      id: 6,
      title: "Transport Management",
      description: "Fleet tracking with real-time logistics optimization",
      tags: ["Next.js","TypeScript", "Tailwind CSS", "MYSQL", "Spring Boot"],
      image: "/images/transport-system2.png",
      github: "https://github.com/Amlakab/TMS"

    }
  ];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Self Employed",
    period: "2025 - Present",
    description: "Building and deploying full-stack web applications independently, focusing on scalable backend systems and engaging frontend interfaces."
  },
  {
    role: "Web Developer | Internship",
    company: "INSA (Information Network Security Agency)",
    period: "March 2025 - June 2025",
    description: "Assisted in the development of secure web applications, contributed to frontend and backend tasks, and gained exposure to real-world software engineering practices in a government organization."
  },
  {
    role: "Project Manager",
    company: "Mizan-Tepi University",
    period: "December 2024 - February 2025",
    description: "Led a student software development project, coordinated team efforts, managed timelines, and ensured successful delivery of project milestones."
  },
  {
    role: "Senior Project | Website Developer",
    company: "Mizan-Tepi University",
    period: "March 2023 - June 2023",
    description: "Developed a full-featured academic project website, focusing on frontend design, user experience, and backend integration using modern web technologies."
  }
];

  // Education data
const education = [
  {
    degree: "Bachelor of Engineering in Software Engineering",
    institution: "Mizan-Tepi University | Tepi Campus",
    year: "2021 - 2025 | Pursuing",
    description: "Pursuing a comprehensive program focused on software engineering principles with strong emphasis on modern web development practices and technologies."
  },
  {
    degree: "Internship in Software Engineering",
    institution: "INSA (Information Network Security Agency)",
    year: "March 2025 - June 2025 | Pursuing",
    description: "Hands-on internship focused on practical experience in software development, system security, and real-world application of engineering concepts."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "Amlakie delivered our project ahead of schedule with exceptional quality. His attention to detail and problem-solving skills are remarkable.",
    avatar: "/images/testimonial1.jpeg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateX",
    content:
      "Working with Amlakie was a pleasure. He transformed our complex requirements into a beautiful, functional application with stunning animations.",
    avatar: "/images/testimonial2.jpeg",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima Al-Mansoori",
    role: "Product Manager, NexaSoft",
    content:
      "Amlakie showed outstanding initiative and professionalism. His ability to adapt quickly and contribute clean, scalable code made him a valuable team asset.",
    avatar: "/images/testimonial3.jpeg",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    role: "Lead Engineer, CodeSphere",
    content:
      "What impressed us most was Amlakie’s ability to combine technical depth with UI elegance. His contributions significantly enhanced our project's UX.",
    avatar: "/images/testimonial4.jpeg",
    rating: 5
  }
];


  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating React apps that can grow with your user base while maintaining performance.",
      date: "May 15, 2023",
      image: "/images/blog1.jpg",
      category: "React"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies that will shape the next decade of web development including Web3 and AI integration.",
      date: "April 28, 2023",
      image: "/images/blog2.jpg",
      category: "Web"
    }
  ];

  const stats = [
    { number: "25+", label: "Projects Completed" },
    { number: "15", label: "Happy Clients" },
    { number: "50K+", label: "Lines of Code" },
    { number: "3", label: "Years Experience" }
  ];

// Frontend skills
const frontendSkills = [
  { name: "HTML", value: 100, icon: <FaHtml5 />, category: "frontend" },
  { name: "CSS", value: 95, icon: <FaCss3Alt />, category: "frontend" },
  { name: "JavaScript", value: 95, icon: <FaJs />, category: "frontend" },
  { name: "React.js", value: 85, icon: <FaReact />, category: "frontend" },
  { name: "Next.js", value: 85, icon: <SiNextdotjs />, category: "frontend" },
  { name: "Tailwind CSS", value: 85, icon: <SiTailwindcss />, category: "frontend" },
  { name: "Bootstrap", value: 85, icon: <SiBootstrap />, category: "frontend" },
  { name: "TypeScript", value: 75, icon: <SiTypescript />, category: "frontend" },
];

// Backend skills
const backendSkills = [
  { name: "PHP", value: 90, icon: <SiPhp />, category: "backend" },
  { name: "MySQL", value: 85, icon: <SiMysql />, category: "backend" },
  { name: "Spring Boot", value: 80, icon: <SiSpringboot />, category: "backend" },
  { name: "Java", value: 80, icon: <FaJava />, category: "backend" },
  { name: "Node.js", value: 75, icon: <FaNodeJs />, category: "backend" },
  { name: "MongoDB", value: 65, icon: <SiMongodb />, category: "backend" },
  { name: "PostgreSQL", value: 65, icon: <SiPostgresql />, category: "backend" },
  { name: "Python", value: 60, icon: <FaPython />, category: "backend" },
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

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Adding offset
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    // Initial check on mount
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, activeSection]);

  // Name and profile image cycling
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
  }, [names.length, profiles.length]);

  // Animation controls
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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
        backdropFilter: 'blur(10px)',
        color: colors.textPrimary,
        transition: 'background-color 0.3s ease'
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
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Amlakie
            </Navbar.Brand>
          </motion.div>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            style={{ 
              borderColor: isDarkMode ? '#ffffff' : colors.primary,
              color: isDarkMode ? '#ffffff' : colors.primary 
            }}
          >
            <span 
              className="navbar-toggler-icon" 
              style={{
                backgroundImage: isDarkMode ? 
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")" :
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
              }}
            />
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {sections.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Nav.Link
                    href={`#${item}`}
                    active={activeSection === item}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                    className="nav-link"
                    style={{
                      color: activeSection === item ? colors.primary : colors.textPrimary,
                      margin: '0 15px',
                      fontWeight: 500,
                      position: 'relative',
                      fontSize: '0.95rem',
                      textTransform: 'capitalize',
                      letterSpacing: '1px',
                      fontFamily: "'Poppins', sans-serif",
                      transition: 'color 0.3s ease'
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
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
                {isDarkMode ? (
                  <FaSun color={colors.primary} size={20} />
                ) : (
                  <FaMoon color={colors.primary} size={20} />
                )}
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
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
          color: colors.textPrimary,
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
                    fontFamily: "'Poppins', sans-serif",
                    color: colors.textPrimary
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
                    color: colors.textPrimary,
                    fontFamily: "'Poppins', sans-serif"
                  }}
                >
                  {names[nameIndex] === "Amlakie" ? "Software Engineer" : 
                   names[nameIndex] === "Developer" ? "Full Stack Developer" :
                   names[nameIndex] === "Designer" ? "UI/UX Expert" : "Innovative Creator"}
                </motion.h2>
                <p 
                  className="hero-description"
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '40px',
                    maxWidth: '600px',
                    color: colors.textPrimary
                  }}
                >
                  I build exceptional digital experiences with modern web technologies, 
                  creating immersive interfaces that captivate users.
                </p>
                <div className="hero-cta" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
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
                    onClick={() => {
                      // Create a temporary anchor element to trigger download
                      const link = document.createElement('a');
                      link.href = '/documents/MyCv.pdf';
                      link.download = 'MyCv.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <FiDownload style={{ marginRight: '8px' }} /> Download CV
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: `0 10px 25px ${colors.primary}80` }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      color: '#ffffff',
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
                    onClick={() => {
                      const workSection = document.getElementById('work');
                      if (workSection) {
                        workSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    View My Work
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

      {/* About Section */}
      <section 
        id="about" 
        className="section about-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(1),
          color: colors.textPrimary
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
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 
                className="section-title"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontFamily: "'Poppins', sans-serif",
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
              <FaUser color={colors.primary} />
              About Me
              <motion.div 
                style={{
                  position: 'absolute',
                  bottom: '-15px',
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
            </div>
            <Row className="align-items-center">
              <Col lg={4} md={12} className="mb-5 mb-lg-0">
                <motion.div
                  whileHover={{ rotate: 2 }}
                  transition={{ type: "spring" }}
                  className="about-image-wrapper mx-auto"
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '300px',
                    height: '400px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    margin: '0 auto',
                    border: `2px solid ${colors.primary}`
                  }}
                >
                  <img 
                    src="/images/about4.jpg" 
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
                    marginBottom: '8px', 
                    color: colors.textPrimary,
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    Who is Amlakie?
                  </h3>
                  <h5 style={{ 
                    fontSize: 'clamp(1.2rem, 3vw, 1.2rem)', 
                    marginBottom: '25px', 
                    color: colors.textPrimary,
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    Software Developer
                  </h5>
                  <p style={{ 
                    marginBottom: '20px', 
                    lineHeight: 1.8, 
                    fontSize: '1.1rem',
                    color: colors.textPrimary
                  }}>
                    I’m a passionate and self-motivated Software Developer with a strong foundation in both front-end and back-end technologies. I thrive in fast-paced environments and bring a proactive mindset to every project I undertake. With hands-on experience in a wide range of modern tools and frameworks—such as HTML, CSS, JavaScript, PHP, Java, Spring Boot, React.js, Next.js, and Node.js—I specialize in building efficient, scalable, and user-focused web applications. My journey has been shaped by a deep curiosity for innovation, especially in artificial intelligence and data science, and a commitment to continuous learning. I enjoy translating complex problems into simple, elegant solutions and collaborating with teams to bring impactful ideas to life. Whether it's crafting responsive UIs or designing powerful APIs, I am dedicated to creating high-quality software that makes a difference.
                    </p>
                          
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>


      {/* Education Section */}
      <section 
        id="education" 
        className="section education-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(4),
          color: colors.textPrimary
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
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 
                className="section-title"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontFamily: "'Poppins', sans-serif",
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                <FaGraduationCap color={colors.primary} />
                My Education
                <motion.div 
                  style={{
                    position: 'absolute',
                    bottom: '-15px',
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
            </div>
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
                    style={{
                      backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.5)' : 'rgba(248, 249, 250, 0.7)',
                      padding: '30px',
                      borderRadius: '15px',
                      borderLeft: `5px solid ${colors.primary}`,
                      color: colors.textPrimary
                    }}
                  >
                    <h3 style={{ 
                      fontSize: '1.5rem',
                      color: colors.primary,
                      marginBottom: '10px',
                      fontFamily: "'Poppins', sans-serif"
                    }}>
                      {edu.degree}
                    </h3>
                    <h4 style={{ 
                      fontSize: '1.2rem',
                      color: colors.textPrimary,
                      marginBottom: '10px',
                      fontWeight: 600
                    }}>
                      {edu.institution}
                    </h4>
                    <span className="date" style={{ 
                      display: 'inline-block',
                      marginBottom: '15px',
                      color: isDarkMode ? '#00f0ff' : '#2563eb',
                      fontWeight: 500,
                      backgroundColor: isDarkMode ? 'rgba(0, 240, 255, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      {edu.year}
                    </span>
                    <p style={{ 
                      marginBottom: 0,
                      lineHeight: 1.8,
                      color: colors.textPrimary
                    }}>
                      {edu.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>


      {/* Experience Section */}
      <section 
        id="experience" 
        className="section experience-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(3),
          color: colors.textPrimary
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
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 
                className="section-title"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontFamily: "'Poppins', sans-serif",
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                <FaBriefcase color={colors.primary} />
                My Experience
                <motion.div 
                  style={{
                    position: 'absolute',
                    bottom: '-15px',
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
            </div>
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
                    style={{
                      backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.5)' : 'rgba(248, 249, 250, 0.7)',
                      padding: '30px',
                      borderRadius: '15px',
                      borderLeft: `5px solid ${colors.primary}`,
                      color: colors.textPrimary
                    }}
                  >
                    <h3 style={{ 
                      fontSize: '1.5rem',
                      color: colors.primary,
                      marginBottom: '10px',
                      fontFamily: "'Poppins', sans-serif"
                    }}>
                      {exp.role}
                    </h3>
                    <h4 style={{ 
                      fontSize: '1.2rem',
                      color: colors.textPrimary,
                      marginBottom: '10px',
                      fontWeight: 600
                    }}>
                      {exp.company}
                    </h4>
                    <span className="date" style={{ 
                      display: 'inline-block',
                      marginBottom: '15px',
                      color: isDarkMode ? '#00f0ff' : '#2563eb',
                      fontWeight: 500,
                      backgroundColor: isDarkMode ? 'rgba(0, 240, 255, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      {exp.period}
                    </span>
                    <p style={{ 
                      marginBottom: 0,
                      lineHeight: 1.8,
                      color: colors.textPrimary
                    }}>
                      {exp.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>


      {/* Skills Section */}
      <section 
        id="skills" 
        className="section skills-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(2),
          color: colors.textPrimary
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
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
           <h2 
                className="section-title"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontFamily: "'Poppins', sans-serif",
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
              <FaTools color={colors.primary} />
              My Skills
              <motion.div 
                style={{
                  position: 'absolute',
                  bottom: '-15px',
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
            </div>
            {/* Description Row */}
            <Row className="mb-5">
              <Col>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <p style={{ 
                    textAlign: 'center',
                    marginBottom: '30px', 
                    lineHeight: 1.8, 
                    fontSize: '1.1rem',
                    color: colors.textPrimary
                  }}>
                    I've mastered a variety of technologies in the web development world,
                    from backend systems to interactive frontend experiences. My skills evolve
                    with the industry to deliver cutting-edge solutions.
                  </p>
                </motion.div>
              </Col>
            </Row>

            {/* Skills Columns */}
            <Row>
              {/* Frontend Skills Column */}
              <Col lg={6} md={12} className="mb-5 mb-lg-0">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeft}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 20px 40px ${colors.primary}20`,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    padding: '30px',
                    backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.7)' : 'rgba(248, 249, 250, 0.7)',
                    borderRadius: '20px',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid transparent`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      marginBottom: '25px', 
                      color: colors.primary,
                      fontFamily: "'Poppins', sans-serif",
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px'
                    }}>
                      <motion.span
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <FaReact />
                      </motion.span>
                      Frontend Skills
                    </h3>
                    {frontendSkills.map((skill, index) => (
                      <motion.div 
                        className="progress-item" 
                        key={index}
                        style={{ marginBottom: '25px' }}
                        whileHover={{
                          x: 10,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div 
                          className="progress-header"
                          style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
                        >
                          <motion.span 
                            className="skill-icon"
                            style={{ 
                              fontSize: '1.5rem', 
                              marginRight: '15px',
                              color: colors.primary
                            }}
                            whileHover={{ scale: 1.2 }}
                          >
                            {skill.icon}
                          </motion.span>
                          <span 
                            className="skill-name"
                            style={{ 
                              fontWeight: 600, 
                              flexGrow: 1,
                              fontSize: '1.1rem',
                              color: colors.textPrimary
                            }}
                          >
                            {skill.name}
                          </span>
                          <motion.span 
                            className="skill-percent"
                            style={{ 
                              fontWeight: 700,
                              color: colors.primary,
                              fontSize: '1.1rem'
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill.value}%
                          </motion.span>
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
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </Col>
              
              {/* Backend Skills Column */}
              <Col lg={6} md={12}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInRight}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 20px 40px ${colors.secondary}20`,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    padding: '30px',
                    backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.7)' : 'rgba(248, 249, 250, 0.7)',
                    borderRadius: '20px',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid transparent`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      marginBottom: '25px', 
                      color: colors.secondary,
                      fontFamily: "'Poppins', sans-serif",
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px'
                    }}>
                      <motion.span
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <FaServer />
                      </motion.span>
                      Backend Skills
                    </h3>
                    {backendSkills.map((skill, index) => (
                      <motion.div 
                        className="progress-item" 
                        key={index}
                        style={{ marginBottom: '25px' }}
                        whileHover={{
                          x: 10,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div 
                          className="progress-header"
                          style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
                        >
                          <motion.span 
                            className="skill-icon"
                            style={{ 
                              fontSize: '1.5rem', 
                              marginRight: '15px',
                              color: colors.secondary
                            }}
                            whileHover={{ scale: 1.2 }}
                          >
                            {skill.icon}
                          </motion.span>
                          <span 
                            className="skill-name"
                            style={{ 
                              fontWeight: 600, 
                              flexGrow: 1,
                              fontSize: '1.1rem',
                              color: colors.textPrimary
                            }}
                          >
                            {skill.name}
                          </span>
                          <motion.span 
                            className="skill-percent"
                            style={{ 
                              fontWeight: 700,
                              color: colors.secondary,
                              fontSize: '1.1rem'
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill.value}%
                          </motion.span>
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
                              background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary})`,
                              borderRadius: '5px',
                              boxShadow: `0 2px 10px ${colors.secondary}30`
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
            
            {/* View Full Skillset Button */}
            <Row className="mt-5">
              <Col className="text-center">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: `0 5px 15px ${colors.primary}40`,
                    background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                    color: '#ffffff',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '50px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    boxShadow: `0 5px 15px ${colors.primary}30`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  View Full Skillset
                </motion.button>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Work Section */}
      <section 
        id="work" 
        className="section work-section "
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(5),
          color: colors.textPrimary
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 
                className="section-title"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontFamily: "'Poppins', sans-serif",
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
              <FaLaptopCode color={colors.primary} />
              My Work
              <motion.div 
                style={{
                  position: 'absolute',
                  bottom: '-15px',
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
          </div>

            <div className="project-filter mb-5" style={{ 
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              {['All', 'Web', 'Mobile', 'Design', 'Full Stack'].map((filter, index) => (
                <motion.button
                  key={index}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: colors.primary,
                    color: '#ffffff'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="filter-btn"
                  style={{
                    backgroundColor: 'transparent',
                    color: colors.textPrimary,
                    border: `1px solid ${colors.primary}`,
                    padding: '8px 20px',
                    borderRadius: '50px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>

            {/* Alternating 2-column layout with responsive */}
            <style>{`
              .project-row {
                display: flex;
                gap: 30px;
                width: 100%;
              }
              .project-card {
                min-width: 300px;
                height: 350px;
                background-color: ${isDarkMode ? 'rgba(10, 25, 47, 0.5)' : 'rgba(248, 249, 250, 0.7)'};
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 10px 30px ${colors.shadow};
                display: flex;
                flex-direction: column;
                transition: all 0.3s ease;
              }
              .project-card.wide {
                flex: 0 0 66.66%;
              }
              .project-card.narrow {
                flex: 0 0 33.33%;
              }

              @media (max-width: 768px) {
                .project-row {
                  flex-direction: column;
                }
                .project-card.wide,
                .project-card.narrow {
                  flex: 1 1 100% !important;
                  min-width: auto;
                  height: auto;
                }
              }
            `}</style>

            <div className="project-grid" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, rowIndex) => {
                const firstIndex = rowIndex * 2;
                const secondIndex = firstIndex + 1;
                const wideOnRight = rowIndex % 2 === 0;

                const firstProject = projects[firstIndex];
                const secondProject = projects[secondIndex] || null;

                const leftProject = wideOnRight ? firstProject : secondProject;
                const rightProject = wideOnRight ? secondProject : firstProject;

                return (
                  <div key={rowIndex} className="project-row">
                    {[leftProject, rightProject].map((proj, i) => {
                      if (!proj) return null;
                      const isWide = (i === 1 && wideOnRight) || (i === 0 && !wideOnRight);
                      return (
                        <motion.div
                          key={proj.id}
                          className={`project-card ${isWide ? 'wide' : 'narrow'}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          whileHover={{ y: -10, boxShadow: `0 15px 30px ${colors.shadow}` }}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="project-image" style={{
                            position: 'relative',
                            height: '75%',
                            overflow: 'hidden',
                          }}>
                            <img 
                              src={proj.image} 
                              alt={proj.title} 
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                              }}
                            />
                            <motion.div 
                              className="project-overlay"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: `linear-gradient(to top, ${colors.primary}ee, transparent)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transition: 'opacity 0.5s ease-in-out'
                              }}
                              whileHover={{ opacity: 1 }}
                            >
                              {proj.link && (
                                <motion.a
                                  href={proj.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  style={{
                                    background: colors.primary,
                                    color: '#ffffff',
                                    border: 'none',
                                    padding: '12px 25px',
                                    borderRadius: '50px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    fontSize: '0.9rem',
                                    textDecoration: 'none'
                                  }}
                                >
                                  <FiExternalLink className="me-2" /> View Project
                                </motion.a>
                              )}
                            </motion.div>
                          </div>
                          <div className="project-info" style={{ padding: '20px', flex: 1 }}>
                            <h3 style={{ 
                              fontSize: '1.4rem',
                              marginBottom: '10px',
                              color: colors.textPrimary,
                              fontFamily: "'Poppins', sans-serif"
                            }}>
                              {proj.title}
                            </h3>
                            <p style={{ 
                              marginBottom: '15px',
                              color: colors.textPrimary,
                              fontSize: '0.95rem',
                              lineHeight: 1.5
                            }}>
                              {proj.description}
                            </p>
                            <div style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center'
                            }}>
                              <div className="project-tags" style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px',
                                flex: 1
                              }}>
                                {proj.tags.map((tag, i) => (
                                  <motion.span 
                                    key={i}
                                    whileHover={{ y: -2 }}
                                    style={{
                                      backgroundColor: colors.primary + '20',
                                      color: colors.primary,
                                      padding: '5px 10px',
                                      borderRadius: '50px',
                                      fontSize: '0.75rem',
                                      fontWeight: 500
                                    }}
                                  >
                                    {tag}
                                  </motion.span>
                                ))}
                              </div>
                              {proj.github && (
                                <motion.a
                                  href={proj.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  style={{
                                    color: colors.textPrimary,
                                    fontSize: '1.5rem',
                                    marginLeft: '15px'
                                  }}
                                >
                                  <FiGithub />
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-5">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 5px 15px ${colors.primary}40`
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  color: '#ffffff',
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
                View All Projects
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </section>



      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        className="section testimonials-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(6),
          color: colors.textPrimary
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
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 
                className="section-title"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontFamily: "'Poppins', sans-serif",
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
              <MdRecordVoiceOver color={colors.primary} />
              Client Testimonials
              <motion.div 
                style={{
                  position: 'absolute',
                  bottom: '-15px',
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
            </div>
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
                        backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.5)' : 'rgba(248, 249, 250, 0.7)',
                        borderRadius: '20px',
                        padding: '40px',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)',
                        minWidth: '80%',
                        scrollSnapAlign: 'start'
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
                            color: colors.textPrimary,
                            fontFamily: "'Poppins', sans-serif"
                          }}>
                            {testimonial.name}
                          </h4>
                          <p style={{ 
                            fontSize: '1rem',
                            color: colors.textPrimary,
                            marginBottom: '10px',
                            opacity: 0.8
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
                            color: colors.textPrimary
                          }}
                        >
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            fontSize: '3rem',
                            lineHeight: 1,
                            color: colors.primary,
                            opacity: 0.2
                          }}>"</span>
                          {testimonial.content}
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

      {/* Blog Section */}
      <section 
        id="blog" 
        className="section blog-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(7),
          color: colors.textPrimary
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
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 
                className="section-title"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontFamily: "'Poppins', sans-serif",
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
              <RiArticleLine color={colors.primary} />
              Latest Articles
              <motion.div 
                style={{
                  position: 'absolute',
                  bottom: '-15px',
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
            </div>
            <Row>
              {blogPosts.map((post) => (
                <Col md={6} key={post.id} className="mb-4">
                  <motion.div
                    className="blog-card"
                    style={{
                      backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.5)' : 'rgba(248, 249, 250, 0.7)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      marginBottom: '30px',
                      height: '100%'
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
                          color: '#ffffff',
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
                        color: colors.textPrimary,
                        fontFamily: "'Poppins', sans-serif"
                      }}>
                        {post.title}
                      </h3>
                      <p 
                        className="blog-date"
                        style={{
                          fontSize: '0.95rem',
                          color: colors.textPrimary,
                          marginBottom: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          opacity: 0.8
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
                          color: colors.textPrimary
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
                          fontSize: '1rem'
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
                  boxShadow: `0 5px 15px ${colors.primary}40`
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  color: '#ffffff',
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

      {/* Stats Section */}
      <section 
        className="section stats-section"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          color: '#ffffff',
          padding: '100px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col md={3} sm={6} key={index} className="mb-4">
                <motion.div
                  className="stat-card"
                  style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(5px)',
                    marginBottom: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <motion.div 
                    className="stat-number"
                    style={{
                      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                      fontWeight: 700,
                      marginBottom: '15px',
                      fontFamily: "'Poppins', sans-serif",
                      position: 'relative'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div 
                    className="stat-label"
                    style={{
                      fontSize: '1.2rem',
                      opacity: 0.9,
                      fontWeight: 500
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="section contact-section"
        style={{
          padding: '100px 0',
          position: 'relative',
          backgroundColor: getSectionBackground(8),
          color: colors.textPrimary
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
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 
                className="section-title"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  fontWeight: 700,
                  color: colors.textPrimary,
                  fontFamily: "'Poppins', sans-serif",
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
              <FaHeadset color={colors.primary} />
              Get In Touch
              <motion.div 
                style={{
                  position: 'absolute',
                  bottom: '-15px',
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
            </div>

            {/* Contact Info */}
            <Row className="text-center mb-5">
              <Col md={4} sm={12} className="mb-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <FaMapMarker size={30} color={colors.primary} />
                  <h3 style={{ 
                    color: colors.primary,
                    fontFamily: "'Poppins', sans-serif",
                    margin: '15px 0'
                  }}>Location</h3>
                  <p style={{ color: colors.textPrimary }}>Addis Ababa, Ethiopia</p>
                </motion.div>
              </Col>
              <Col md={4} sm={12} className="mb-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <FaPhone size={30} color={colors.primary} />
                  <h3 style={{ 
                    color: colors.primary,
                    fontFamily: "'Poppins', sans-serif",
                    margin: '15px 0'
                  }}>Phone</h3>
                  <p style={{ color: colors.textPrimary }}>+251 9 12 43 65 73</p>
                </motion.div>
              </Col>
              <Col md={4} sm={12} className="mb-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <FiMail size={30} color={colors.primary} />
                  <h3 style={{ 
                    color: colors.primary,
                    fontFamily: "'Poppins', sans-serif",
                    margin: '15px 0'
                  }}>Email</h3>
                  <p style={{ color: colors.textPrimary }}>amlakieab4@gmail.com</p>
                </motion.div>
              </Col>
            </Row>

            {/* Contact Form */}
            <Row>
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

              <Col md={6}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div 
                    className="contact-form"
                    style={{
                      backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.5)' : 'rgba(248, 249, 250, 0.7)',
                      padding: '40px',
                      borderRadius: '20px',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <h3 style={{ 
                      color: colors.primary,
                      fontSize: '2rem',
                      marginBottom: '25px',
                      fontFamily: "'Poppins', sans-serif"
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
                                fontSize: '1rem',
                                backgroundColor: 'transparent',
                                color: colors.textPrimary
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
                                fontSize: '1rem',
                                backgroundColor: 'transparent',
                                color: colors.textPrimary
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
                            fontSize: '1rem',
                            backgroundColor: 'transparent',
                            color: colors.textPrimary
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
                            fontSize: '1rem',
                            resize: 'none',
                            backgroundColor: 'transparent',
                            color: colors.textPrimary
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
                          color: '#ffffff',
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
        backgroundColor: '#000',
        color: '#fff',
        padding: '60px 0 100px', // extra space for back-to-top button
        textAlign: 'center',
        borderTop: '1px solid #fff'
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Footer Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
            textAlign: 'left'
          }}>
            {/* About Section */}
            <div className="box">
              <h3 style={{
                marginBottom: '15px',
                fontSize: '1.5rem',
                color: '#fff'
              }}>Amlakie's Portfolio</h3>
              <p style={{
                opacity: 0.8,
                lineHeight: 1.6,
                color: '#fff'
              }}>
                Thank you for visiting my personal portfolio website. Connect with me over socials. <br/><br/> Keep Rising 🚀. Connect with me over live chat!
              </p>
            </div>

            {/* Quick Links */}
            <div className="box">
              <h3 style={{
                marginBottom: '15px',
                fontSize: '1.2rem',
                color: '#fff'
              }}>Quick Links</h3>
              <ul style={{
                listStyle: 'none',
                paddingLeft: 0
              }}>
                {[
                  { title: "Home", id: "home" },
                  { title: "About", id: "about" },
                  { title: "Skills", id: "skills" },
                  { title: "Education", id: "education" },
                  { title: "Work", id: "work" },
                  { title: "Experience", id: "experience" }
                ].map((link, index) => (
                  <li key={index} style={{ marginBottom: '10px' }}>
                    <a
                      href={`#${link.id}`}
                      style={{
                        textDecoration: 'none',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: 500
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = colors.primary}
                      onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
                    >
                      <FaChevronCircleRight /> {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info + Social Media */}
            <div className="box">
              <h3 style={{
                marginBottom: '15px',
                fontSize: '1.2rem',
                color: '#fff'
              }}>Contact Info</h3>
              <p style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '10px',
                opacity: 0.9
              }}>
                <FaPhone size={20} /> +251 9 12 43 55 73
              </p>
              <p style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '10px',
                opacity: 0.9
              }}>
                <IoMdMail size={20} /> amlakieab4@gmail.com
              </p>
              <p style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
                opacity: 0.9
              }}>
                <FaMapMarkedAlt size={20} /> Adiss Abeba, Ethiopia
              </p>

              {/* Social Media Icons */}
              <div style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'flex-start',
                flexWrap: 'wrap'
              }}>
                <a
                  href="https://www.linkedin.com/in/Amlakie "
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    fontSize: '1.5rem',
                    color: '#fff',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.primary}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                >
                  <AiFillLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/Amlakab "
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{
                    fontSize: '1.5rem',
                    color: '#fff',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.primary}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                >
                  <AiFillGithub size={20} />
                </a>
                <a
                  href="mailto:amlakieab4@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  style={{
                    fontSize: '1.5rem',
                    color: '#fff',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.primary}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                >
                  <IoMdMail size={20} />
                </a>
                <a
                  href="https://twitter.com/amlakie "
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  style={{
                    fontSize: '1.5rem',
                    color: '#fff',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.primary}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                >
                  <BsTwitter size={20} />
                </a>
                <a
                  href="https://t.me/amlak1221 "
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  style={{
                    fontSize: '1.5rem',
                    color: '#fff',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.primary}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                >
                  <BsTelegram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Credit Line */}
          <p style={{
            fontSize: '1rem',
            opacity: 0.7,
            marginBottom: '30px',
            color: '#fff'
          }}>
            Designed with{' '}
            <i className="fa fa-heart pulse" style={{ color: '#ff4d4d', margin: '0 5px' }}></i>{' '}
            by{' '}
            <a
              href="https://www.linkedin.com/in/Amlakie "
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: colors.primary,
                fontWeight: 600,
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = colors.primary}
            >
              Amlakie Abebaw
            </a>
          </p>
        </motion.div>
      </Container>

      {/* Back to Top Button - Bottom Right Corner */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: `0 5px 15px rgba(255, 255, 255, 0.3)` }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          border: 'none',
          padding: '12px 18px',
          borderRadius: '50px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontSize: '0.9rem',
          backdropFilter: 'blur(5px)'
        }}
        aria-label="Back to top"
        onMouseOver={(e) => e.currentTarget.style.color = colors.primary}
        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
      >
        <FiArrowUp />
      </motion.button>
    </footer>

    </div>
  );
};

export default Portfolio;