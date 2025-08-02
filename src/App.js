import React, { useEffect } from 'react';
import './App.css';
import { initAllEffects } from './scrollEffects';

const quotes = [
  'Self-belief and hard work will always earn you success',
  'Every thought is a cause & every condition is an effect',
  'The only path by which another person can upset you is through your own thoughts',
  'Just keep your conscious mind busy with the expectation of the best',
  'Whatever you want to do, do with full passion and work really hard towards it',
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const randomQuote = getRandomQuote();
  
  useEffect(() => {
    initAllEffects();
  }, []);
  
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <div className="logo">DG</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <section id="home" className="section home-section">
          <div className="professional-header">
            <h2 className="professional-title">Welcome to Portfolio</h2>
          </div>
          <div className="professional-card-container">
            <div className="professional-card">
              <div className="professional-header-content">
                <div className="professional-photo-section">
                  <div className="photo-container">
                                         <img src="/profile.jpg.jpg" alt="Dhanajeyan Ganesan" className="professional-photo" />
                    <div className="photo-border-glow"></div>
                  </div>
                  <div className="professional-badge">
                    <span className="badge-text">Available for Opportunities</span>
                  </div>
                </div>
                <div className="professional-info-section">
                  <div className="name-title-section">
                    <h1 className="professional-name">DHANAJEYAN GANESAN</h1>
                    <p className="professional-role">Information Technology Student</p>
                    <p className="professional-institution">Muthayammal Engineering College</p>
                  </div>
                  <div className="professional-details">
                    <div className="detail-row">
                      <div className="detail-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span><strong>Location:</strong> Tirunelveli, Tamil Nadu</span>
                      </div>
                      <div className="detail-item">
                        <i className="fas fa-phone"></i>
                        <span><strong>Phone:</strong> +91 7418651750</span>
                      </div>
                    </div>
                    <div className="detail-row">
                      <div className="detail-item">
                        <i className="fas fa-envelope"></i>
                        <span><strong>Email:</strong> DHANAJEYAN112004@GMAIL.COM</span>
                      </div>
                      <div className="detail-item">
                        <i className="fas fa-graduation-cap"></i>
                        <span><strong>CGPA:</strong> 8.2/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="professional-actions">
                    <a href="https://github.com/Dhanajeyan-1/Dhanajeyan-1" className="action-btn github-btn" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                      <span>GitHub Profile</span>
                    </a>
                    <a href="https://www.linkedin.com/in/dhanajeyan-ganesan" className="action-btn linkedin-btn" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                      <span>LinkedIn</span>
                    </a>
                    <button className="action-btn resume-btn" onClick={() => window.open('https://drive.google.com/file/d/1_bAiw17Q0qKi2FZ894W7DDEzY2EMqspB/view?usp=sharing', '_blank')}>
                      <i className="fas fa-download"></i>
                      <span>Download Resume</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="section about-section">
          <h2>About</h2>
          <p>
            Final-year B.TECH Information Technology student with strong background in Java, web development (HTML/CSS). Keen to learn full-stack development and AI-based solutions, with hands-on experience as part of mini projects, hackathons, and an AI-based green finance platform developed recently. Quick learner with proven flexibility, leadership potential, and a learn-and-grow outlook. Open to improvement of aptitude, communication, and technical skills to contribute effectively within a fast-paced IT environment.
          </p>
        </section>
        <section id="education" className="section education-section">
          <h2>Education</h2>
          <div className="card">
            <h3>Muthayammal Engineering College</h3>
            <p>Bachelor of Technology, Information Technology<br/>CGPA: 8.2 | November 2022 - May 2026</p>
          </div>
          <div className="card">
            <h3>Sri Jayendra Swamigal Silver Jubilee Higher Secondary School</h3>
            <p>Higher Secondary Certificate<br/>74.5% | Year of Passing: 2022</p>
          </div>
          <div className="card">
            <h3>Sri Jayendra Swamigal Silver Jubilee Higher Secondary School</h3>
            <p>Secondary School Leaving Certificate<br/>61% | Year of Passing: 2020</p>
          </div>
        </section>
        <section id="projects" className="section projects-section">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/hotel-booking.jpg" alt="Hotel Booking System" className="project-img" />
                <div className="project-overlay">
                  <div className="project-tech">
                    <span>JAVA</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>MYSQL</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Hotel Booking Management System</h3>
                <p>A full-stack web application that enables users to book hotel rooms, check availability, and manage bookings online.</p>
                <p>The Hotel Booking Management System is a full-stack web application designed to simplify hotel room reservations and Registration, searching rooms for availability, and booking rooms online are possible for the users. Safe login, booking confirmation, and client database management are provided by the system. An admin panel assists hotel managers to manage rooms, booking, and payment history effectively.</p>
                <div className="project-links">
                  <a href="https://github.com/Dhanajeyan-1/Hotel-Booking-System" className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/task-management.jpg" alt="Task Management System" className="project-img" />
                <div className="project-overlay">
                  <div className="project-tech">
                    <span>JAVA</span>
                    <span>MYSQL</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Task Management System</h3>
                <p>A console-based Java application that allows users to create, update, delete, and track tasks.</p>
                <p>The Task Management System is a Java console application that helps you manage your daily tasks with features like adding tasks with title, description, deadline, and priority. It includes viewing all tasks, updating existing tasks, deleting tasks, and marking tasks as completed. The system uses file serialization to automatically save all data, so your tasks persist even after closing and reopening the program.</p>
                <div className="project-links">
                  <a href="https://github.com/Dhanajeyan-1/Task_manager-" className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/ecommerce.jpg" alt="E-Commerce Platform" className="project-img" />
                <div className="project-overlay">
                  <div className="project-tech">
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Express</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.</p>
                <p>Built with React.js frontend and Node.js backend, featuring user registration/login, product browsing with filters, shopping cart functionality, order management, and secure payment processing. Includes admin panel for inventory management and order tracking.</p>
                <div className="project-links">
                  <a href="#" className="project-link">View Code</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/weather-app.jpg" alt="Weather Application" className="project-img" />
                <div className="project-overlay">
                  <div className="project-tech">
                    <span>JavaScript</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>API</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Weather Application</h3>
                <p>A responsive weather application that provides real-time weather information and forecasts for any location.</p>
                <p>Features include current weather display, 5-day forecast, location-based weather, temperature unit conversion, and weather alerts. Uses OpenWeatherMap API for accurate weather data and includes geolocation services for automatic location detection.</p>
                <div className="project-links">
                  <a href="#" className="project-link">View Code</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="achievements" className="section achievements-section">
          <h2>Hackathon</h2>
          <div className="card">
            <h3>🏆 HackIndia 2025 - All India Hackathon</h3>
            <p>Participant<br/>HackIndia Organizing Committee<br/>March 2025</p>
            <p>Participated in a national-level hackathon and contributed to building an AI-based green finance tool.</p>
          </div>
          <div className="card">
            <h3>🥇 Shaastra 2025 IndustrAI Hackathon</h3>
            <p>IIT MADRAS<br/>January 2025</p>
            <p>Participated in the all india level hackathon and built a Real-Time Credit Risk Assessment Using Alternative Data.</p>
          </div>
          <h2>Certifications</h2>
          <div className="card">
            <h3>📜 NPTEL Certification</h3>
            <p>National Programme on Technology Enhanced Learning</p>
            <button className="certificate-btn" onClick={() => window.open('https://drive.google.com/file/d/1ZBMDTNE7WsOXy5qWr8Et78RcIPxPmaAi/view?usp=sharing', '_blank')}>
              View Certificate
            </button>
          </div>
        </section>
        <section id="skills" className="section skills-section">
          <h2>Skills & Strengths</h2>
          <div className="skills-grid">
            <span>Quick Learner</span>
            <span>Adaptability</span>
            <span>Team Collaboration</span>
            <span>Leadership Qualities</span>
          </div>
          <h3 style={{background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginTop:'2rem'}}>Programming Languages</h3>
          <div className="skills-grid">
            <span>JAVA</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>BOOTSTRAP</span>
          </div>
          <h3 style={{background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginTop:'2rem'}}>Database</h3>
          <div className="skills-grid">
            <span>MYSQL</span>
          </div>
          <h3 style={{background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginTop:'2rem'}}>AI & Machine Learning</h3>
          <div className="skills-grid">
            <span>Basic knowledge applied in projects</span>
          </div>
          <h3 style={{background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginTop:'2rem'}}>Languages</h3>
          <div className="skills-grid">
            <span>TAMIL</span>
            <span>ENGLISH</span>
          </div>
        </section>
        <section id="interests" className="section interests-section">
          <h2>Interests & Hobbies</h2>
          <div className="interests-grid">
            <span>Exploring New Technology Trends<br/><small>Playing and Watching Cricket, Learning About Finance and New Saving Habits</small></span>
            <span>Finance<br/><small>Market Analysis</small></span>
            <span>Tech Trends<br/><small>Latest Innovations</small></span>
            <span>Smart Saving<br/><small>Financial Planning</small></span>
            <span>Reading<br/><small>Technical Blogs</small></span>
            <span>Open Source<br/><small>Contributing</small></span>
            <span>Music<br/><small>Relaxation</small></span>
            <span>Photography<br/><small>Nature & Tech</small></span>
          </div>
        </section>
        <section id="contact" className="section contact-section">
          <h2>Contact</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Email</h3>
              <p>DHANAJEYAN112004@GMAIL.COM</p>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <p>+91 7418651750</p>
            </div>
            <div className="contact-card">
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/dhanajeyan-ganesan" target="_blank" rel="noopener noreferrer">Connect with me</a></p>
            </div>
            <div className="contact-card">
              <h3>GitHub</h3>
              <p><a href="https://github.com/Dhanajeyan-1/Dhanajeyan-1" target="_blank" rel="noopener noreferrer">Check out my code</a></p>
            </div>
            <div className="contact-card">
              <h3>Instagram</h3>
              <p><a href="https://www.instagram.com/erebus_11_2004/" target="_blank" rel="noopener noreferrer">Follow my journey</a></p>
            </div>
          </div>
        </section>
        <section className="section quote-section" style={{textAlign:'center',marginTop:'2rem',background:'none',boxShadow:'none'}}>
          <h3 className="quote-text">&quot;{randomQuote}&quot;</h3>
        </section>
      </main>
    </div>
  );
}

export default App;
