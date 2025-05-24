import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFramer } from 'react-icons/si';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [nameIndex, setNameIndex] = useState(0);
  const [profileIndex, setProfileIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  return (
    <div className="portfolio-app">
      {/* Animated Background */}
      <div className="animated-bg">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-particle"
            initial={{ 
              y: -100, 
              x: Math.random() * window.innerWidth,
              opacity: 0
            }}
            animate={{
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth,
              opacity: [0, 1, 0],
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
      <Navbar expand="lg" fixed="top" className="portfolio-nav">
        <Container>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar.Brand href="#home" className="logo">Amlakie</Navbar.Brand>
          </motion.div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {['home', 'about', 'skills', 'experience', 'education', 'work', 'blog', 'testimonials', 'contact'].map((item) => (
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
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="hero-title">
                  Hi, I'm <span className="highlight">{names[nameIndex]}</span>
                </h1>
                <motion.h2 
                  className="hero-subtitle"
                  key={nameIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {names[nameIndex] === "Amlakie" ? "Full Stack Developer" : 
                   names[nameIndex] === "Developer" ? "React Specialist" :
                   names[nameIndex] === "Designer" ? "UI/UX Expert" : "Innovative Creator"}
                </motion.h2>
                <p className="hero-description">
                  I build exceptional digital experiences with modern web technologies, 
                  creating immersive interfaces that captivate users.
                </p>
                <div className="hero-cta">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(108, 99, 255, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    View My Work
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline"
                  >
                    <FiDownload className="me-2" /> Download CV
                  </motion.button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-image-container"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={profileIndex}
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={profiles[profileIndex]} alt="Profile" className="hero-image" />
                    <div className="hero-image-bg"></div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
            <Row className="align-items-center">
              <Col lg={4}>
                <motion.div
                  whileHover={{ rotate: 2 }}
                  transition={{ type: "spring" }}
                  className="about-image-wrapper"
                >
                  <img src="/images/about.png" alt="About" className="about-image" />
                </motion.div>
              </Col>
              <Col lg={8}>
                <div className="about-content">
                  <h3>Who is Amlakie?</h3>
                  <p>
                    I'm a passionate full-stack developer with 5+ years of experience building cutting-edge web applications.
                    I specialize in JavaScript technologies across the whole stack with a focus on creating immersive user experiences.
                  </p>
                  <p>
                    My approach combines technical expertise with creative problem-solving to deliver
                    high-quality, user-friendly applications that push the boundaries of modern web design.
                  </p>
                  <div className="about-info">
                    <div className="info-item">
                      <span>Name:</span>
                      <p>Amlakie</p>
                    </div>
                    <div className="info-item">
                      <span>Email:</span>
                      <p>amlakie@example.com</p>
                    </div>
                    <div className="info-item">
                      <span>From:</span>
                      <p>Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="info-item">
                      <span>Focus:</span>
                      <p>Interactive Web Experiences</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">My Skills</h2>
            <div className="section-divider"></div>
            <Row>
              <Col lg={6}>
                <div className="skills-content">
                  <h3>My technical expertise.</h3>
                  <p>
                    I've mastered a variety of technologies in the web development world,
                    from backend systems to interactive frontend experiences. My skills evolve
                    with the industry to deliver cutting-edge solutions.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(108, 99, 255, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    View Full Skillset
                  </motion.button>
                </div>
              </Col>
              <Col lg={6}>
                <div className="skills-progress">
                  {skills.map((skill, index) => (
                    <div className="progress-item" key={index}>
                      <div className="progress-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.value}%</span>
                      </div>
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      >
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
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

      {/* Education Section */}
      <section id="education" className="section education-section">
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

      {/* Work/Projects Section */}
      <section id="work" className="section work-section">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Client Testimonials</h2>
            <div className="section-divider"></div>
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="testimonial-slider">
                  {testimonials.map((testimonial) => (
                    <motion.div
                      key={testimonial.id}
                      className="testimonial-card"
                      whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="testimonial-header">
                        <div className="testimonial-avatar">
                          <img src={testimonial.avatar} alt={testimonial.name} />
                        </div>
                        <div className="testimonial-author">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.role}</p>
                          <div className="testimonial-rating">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>"{testimonial.content}"</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Blog/Articles Section */}
      <section id="blog" className="section blog-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Latest Articles</h2>
            <div className="section-divider"></div>
            <Row>
              {blogPosts.map((post) => (
                <Col md={6} key={post.id}>
                  <motion.div
                    className="blog-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: post.id * 0.1 }}
                    whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="blog-image">
                      <img src={post.image} alt={post.title} />
                      <div className="blog-category">{post.category}</div>
                    </div>
                    <div className="blog-content">
                      <h3>{post.title}</h3>
                      <p className="blog-date">{post.date}</p>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-read-more"
                      >
                        Read More <FiExternalLink className="ms-2" />
                      </motion.button>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
            <div className="text-center mt-5">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(108, 99, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View All Articles
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="section stats-section">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col md={3} sm={6} key={index}>
                <motion.div
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <motion.div 
                    className="stat-number"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider"></div>
            <Row>
              <Col lg={5}>
                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <p>
                    Feel free to reach out if you're looking for a developer, have a question,
                    or just want to connect. I'm always open to discussing new projects and opportunities.
                  </p>
                  <div className="info-item">
                    <div className="info-icon">
                      <FiMail />
                    </div>
                    <div className="info-content">
                      <h4>Email</h4>
                      <span>amlakie@example.com</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <FiLinkedin />
                    </div>
                    <div className="info-content">
                      <h4>LinkedIn</h4>
                      <span>linkedin.com/in/amlakie</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <FiGithub />
                    </div>
                    <div className="info-content">
                      <h4>GitHub</h4>
                      <span>github.com/amlakie</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <motion.div 
                  className="contact-form"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <form>
                    <Row>
                      <Col md={6}>
                        <div className="form-group">
                          <input type="text" placeholder="Name" required />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <input type="email" placeholder="Email" required />
                        </div>
                      </Col>
                    </Row>
                    <div className="form-group">
                      <input type="text" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                      <textarea placeholder="Message" rows={5} required></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(108, 99, 255, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="btn-primary"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-content"
          >
            <div className="social-links">
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
                  whileHover={{ y: -5, color: "var(--primary-color)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p>© {new Date().getFullYear()} Amlakie. All rights reserved.</p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(108, 99, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline btn-sm mt-3"
              onClick={() => scrollToSection('home')}
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
