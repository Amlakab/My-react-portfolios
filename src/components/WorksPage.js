import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FiGithub, FiExternalLink, FiArrowUp } from 'react-icons/fi';
import { FaReact, FaJava, FaLaptopCode, FaSun, FaMoon, FaMapMarker, FaPhone, FaMapMarkedAlt, FaChevronCircleRight } from 'react-icons/fa';
import { SiMysql, SiCplusplus, SiAndroid } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { BsTelegram, BsTwitter } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const WorksPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('works');

  const colors = isDarkMode ? {
    primary: '#00f0ff',
    secondary: '#6c63ff',
    accent: '#ff2d75',
    bgPrimary: '#0a192f',
    bgSecondary: '#112240',
    textPrimary: '#e6f1ff',
    textSecondary: '#ccd6f6',
    border: 'rgba(100, 255, 255, 0.1)',
    shadow: 'rgba(2, 12, 27, 0.7)'
  } : {
    primary: '#2563eb',
    secondary: '#4f46e5',
    accent: '#f59e0b',
    bgPrimary: '#f8fafc',
    bgSecondary: '#ffffff',
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    border: 'rgba(30, 41, 59, 0.1)',
    shadow: 'rgba(100, 100, 111, 0.2)'
  };

  const sections = ['home', 'about', 'education', 'experience', 'skills', 'work', 'testimonials', 'blog', 'contact'];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allProjects = [
    // Existing projects from your portfolio
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Amazon-like shopping with AR product preview",
      tags: ["Next.js", "Typescript", "Node.js", "MongoDB"],
      image: "/images/ecommerce.png",
      github: "https://github.com/Amlakab/Amlakie-e-commerce",
      link: "https://amlakie-e-commerce.vercel.app/",
      category: "Web"
    },
    {
      id: 2,
      title: "My Portfolio Website",
      description: "Customizable 3D portfolio with interactive elements",
      tags: ["React", "JavaScript", "Bootstrap"],
      image: "/images/my-portfolio.png",
      github: "https://github.com/Amlakab/project1",
      link: "https://my-react-portfolios.vercel.app/",
      category: "Web"
    },
    {
      id: 3,
      title: "Scientific Calculator",
      description: "Advanced calculator with 3D graphing capabilities",
      tags: ["Next.js", "Typescript", "Tailwind CSS"],
      image: "/images/calculator2.png",
      github: "https://github.com/Amlakab/Amlakie-Calculator",
      link: "https://my-calculator-nu-two.vercel.app/",
      category: "Web"
    },
    {
      id: 4,
      title: "INSA Website",
      description: "Interactive institutional portal with virtual campus tour",
      tags: ["React", "JavaScript", "MYSQL", "Bootstrap"],
      image: "/images/insa-website.png",
      github: "https://github.com/Amlakab/INSA-WEB",
      link: "https://insa-web.vercel.app/",
      category: "Web"
    },
    {
      id: 5,
      title: "Hospital Management System",
      description: "Comprehensive system for patient records, appointments, and billing with AI diagnostics integration",
      tags: ["Java", "Spring Boot", "MYSQL", "Bootstrap"],
      image: "/images/hospital-system.png",
      github: "https://github.com/Amlakab/HIMS",
      category: "Full Stack"
    },
    {
      id: 6,
      title: "Transport Management",
      description: "Fleet tracking with real-time logistics optimization",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "MYSQL", "Spring Boot"],
      image: "/images/transport-system2.png",
      github: "https://github.com/Amlakab/TMS",
      category: "Full Stack"
    },
    // Additional projects
    {
      id: 7,
      title: "Payroll System",
      description: "Automated payroll processing with tax calculations and reporting",
      tags: ["Java", "Swing", "MYSQL"],
      image: "/images/payroll-system.jpg",
      github: "https://github.com/Amlakab/Payroll-System",
      category: "Desktop"
    },
    {
      id: 8,
      title: "Library Management",
      description: "Digital catalog and lending system for libraries",
      tags: ["C++", "File Handling"],
      image: "/images/library-system.jpg",
      github: "https://github.com/Amlakab/Library-Management",
      category: "Desktop"
    },
    {
      id: 9,
      title: "Bank Management",
      description: "Secure banking operations with transaction history",
      tags: ["C++", "OOP", "File Handling"],
      image: "/images/bank-system.jpg",
      github: "https://github.com/Amlakab/Bank-Management",
      category: "Desktop"
    },
    {
      id: 10,
      title: "ATM Simulation",
      description: "Realistic ATM interface with account management",
      tags: ["C++", "OOP"],
      image: "/images/atm-system.jpg",
      github: "https://github.com/Amlakab/ATM-Simulation",
      category: "Desktop"
    },
    {
      id: 11,
      title: "Market Management",
      description: "Inventory and sales tracking for retail businesses",
      tags: ["C++", "Data Structures"],
      image: "/images/market-system.jpg",
      github: "https://github.com/Amlakab/Market-Management",
      category: "Desktop"
    },
    {
      id: 12,
      title: "Quiz Mobile App",
      description: "Interactive quiz application with score tracking",
      tags: ["Java", "Android", "SQLite"],
      image: "/images/quiz-app.jpg",
      github: "https://github.com/Amlakab/Quiz-App",
      category: "Mobile"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const categories = ['All', 'Web', 'Desktop', 'Mobile', 'Full Stack'];

  return (
    <div className="works-page" style={{ 
      backgroundColor: colors.bgPrimary,
      color: colors.textPrimary,
      minHeight: '100vh'
    }}>
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

      {/* Hero Section for Works Page */}
      <section id="works" className="works-hero" style={{
        padding: '150px 0 80px',
        background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 700,
                  marginBottom: '20px',
                  lineHeight: 1.3
                }}
              >
                My <span style={{ color: colors.primary }}>Projects</span> Portfolio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontSize: '1.2rem',
                  lineHeight: 1.8,
                  marginBottom: '30px',
                  maxWidth: '600px'
                }}
              >
                Explore my diverse range of projects spanning web development, desktop applications, 
                and mobile solutions. Each project represents problem-solving, technical expertise, 
                and a passion for creating impactful software.
              </motion.p>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.5)' : 'rgba(248, 249, 250, 0.7)',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: `0 20px 40px ${colors.shadow}`
                }}
              >
                <h3 style={{ 
                  fontSize: '1.5rem',
                  marginBottom: '20px',
                  color: colors.primary,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <FaLaptopCode /> Development Approach
                </h3>
                <ul style={{ 
                  listStyle: 'none',
                  paddingLeft: '20px'
                }}>
                  {[
                    "Full lifecycle development from concept to deployment",
                    "Emphasis on clean, maintainable code architecture",
                    "Responsive design for optimal user experience",
                    "Secure data handling and authentication",
                    "Performance optimization techniques",
                    "Continuous integration and testing"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      style={{
                        marginBottom: '15px',
                        position: 'relative',
                        paddingLeft: '30px'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '5px',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: colors.primary
                      }}></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-grid-section" style={{ padding: '80px 0' }}>
        <Container>
          {/* Filter Buttons */}
          <motion.div 
            className="filter-buttons"
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '15px',
              marginBottom: '50px'
            }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: activeFilter === category ? colors.primary : 'transparent',
                  color: activeFilter === category ? '#fff' : colors.textPrimary,
                  border: `2px solid ${colors.primary}`,
                  padding: '10px 25px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="project-card"
                  whileHover={{ 
                    y: -10,
                    boxShadow: `0 20px 40px ${colors.shadow}`
                  }}
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.5)' : 'rgba(248, 249, 250, 0.7)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: `0 10px 30px ${colors.shadow}`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="project-image" style={{
                    position: 'relative',
                    height: '250px',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <motion.div 
                      className="project-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
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
                        gap: '20px'
                      }}
                    >
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            backgroundColor: '#fff',
                            color: colors.primary,
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
                          <FiExternalLink style={{ marginRight: '8px' }} /> Live Demo
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            backgroundColor: colors.primary,
                            color: '#fff',
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
                          <FiGithub style={{ marginRight: '8px' }} /> Code
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                  <div className="project-content" style={{ padding: '25px' }}>
                    <h3 style={{ 
                      fontSize: '1.5rem',
                      marginBottom: '15px',
                      color: colors.textPrimary
                    }}>
                      {project.title}
                    </h3>
                    <p style={{ 
                      marginBottom: '20px',
                      color: colors.textPrimary,
                      lineHeight: 1.6
                    }}>
                      {project.description}
                    </p>
                    <div className="project-meta" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div className="project-tags" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px'
                      }}>
                        {project.tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            whileHover={{ y: -2 }}
                            style={{
                              backgroundColor: colors.primary + '20',
                              color: colors.primary,
                              padding: '5px 12px',
                              borderRadius: '50px',
                              fontSize: '0.8rem',
                              fontWeight: 500
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <div className="project-tech" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        {project.category === 'Web' && <FaReact color={colors.primary} size={20} />}
                        {project.category === 'Desktop' && project.tags.includes('Java') && (
                          <FaJava color={colors.primary} size={20} />
                        )}
                        {project.category === 'Desktop' && project.tags.includes('C++') && (
                          <SiCplusplus color={colors.primary} size={20} />
                        )}
                        {project.category === 'Mobile' && (
                          <SiAndroid color={colors.primary} size={20} />
                        )}
                        {project.tags.includes('MySQL') && (
                          <SiMysql color={colors.primary} size={20} />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center',
                padding: '80px 0',
                color: colors.textPrimary
              }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                No projects found in this category
              </h3>
              <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                Try selecting a different filter or check back later for new additions
              </p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section" style={{
        padding: '80px 0',
        background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
        textAlign: 'center'
      }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              marginBottom: '30px',
              color: colors.textPrimary
            }}>
              Have a project in mind?
            </h2>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 10px 25px ${colors.primary}40`
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                color: '#ffffff',
                border: 'none',
                padding: '15px 35px',
                borderRadius: '50px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '1.1rem',
                boxShadow: `0 5px 20px ${colors.primary}30`,
                textDecoration: 'none'
              }}
            >
              Let's Discuss Your Project
            </motion.a>
          </motion.div>
        </Container>
      </section>

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

export default WorksPage;