import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import './Contact.css';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Contact = () => {
  return (
    <footer id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">
            Let’s build something <span className="text-gradient">meaningful.</span>
          </h2>
          
          <p className="contact-subtitle">
            I'm currently open for new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-links">
            <a href="mailto:nirbhaypandeyjsr123@gmail.com" className="contact-card hover-target glass">
              <div className="contact-icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="contact-info">
                <span className="contact-label">Email Me</span>
                <span className="contact-value">nirbhaypandeyjsr123@gmail.com</span>
              </div>
              <ArrowUpRight className="contact-arrow" size={20} />
            </a>
            
            <a href="https://www.linkedin.com/in/nirbhay-pandey-715a8b390" target="_blank" rel="noopener noreferrer" className="contact-card hover-target glass">
              <div className="contact-icon-wrapper">
                <LinkedinIcon />
              </div>
              <div className="contact-info">
                <span className="contact-label">Connect</span>
                <span className="contact-value">LinkedIn</span>
              </div>
              <ArrowUpRight className="contact-arrow" size={20} />
            </a>
            
            <a href="https://github.com/nirbhaypandey1712" target="_blank" rel="noopener noreferrer" className="contact-card hover-target glass">
              <div className="contact-icon-wrapper">
                <GithubIcon />
              </div>
              <div className="contact-info">
                <span className="contact-label">Code</span>
                <span className="contact-value">GitHub</span>
              </div>
              <ArrowUpRight className="contact-arrow" size={20} />
            </a>
          </div>
          
          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Nirbhay Kumar Pandey. All rights reserved.</p>
            <p className="made-with">Designed & Built with <span className="text-gradient">precision</span></p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
