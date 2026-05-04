import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-badge glass"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="live-dot"></span>
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Designing Experiences That Feel <span className="text-gradient">Effortless.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm <strong>Nirbhay Kumar Pandey</strong>, a UI/UX Designer focused on intuitive, human-centered digital products that solve real problems.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary hover-target">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary hover-target">
              Download Resume <Download size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating UI Elements for visual interest */}
        <div className="hero-visuals">
          <motion.div 
            className="profile-photo-container"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <div className="profile-photo-glass glass">
              <img src="/assets/profile.jpeg" alt="Nirbhay Kumar Pandey" className="profile-image" />
            </div>
            
            <motion.div 
              className="floating-badge glass"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 
              }}
            >
              <div className="flex-row">
                <span className="badge-icon">✨</span>
                <span className="badge-text">UX Designer</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="gradient-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
