import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me.</h2>
          
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text lead">
                I didn't start in design. I started in engineering, where precision and systems thinking are non-negotiable.
              </p>
              <p className="about-text">
                My journey began with a background in <strong>Mechatronics and Computer Science</strong>. I even spent time as a Junior Engineer at <strong>Tata Advanced Systems</strong>, working with aerospace tech. That experience wired my brain for logic, structure, and solving complex problems without room for error.
              </p>
              <p className="about-text">
                But I realized something important: a system can be perfectly engineered, but if it frustrates the human using it, it fails.
              </p>
              <p className="about-text">
                That’s why I transitioned into <strong>UI/UX Design</strong>. I bring an engineer's precision to a designer's empathy. I don't just make things look pretty—I architect experiences that are logical, seamless, and undeniably human.
              </p>
            </div>
            
            <div className="about-stats glass">
              <div className="stat-item">
                <span className="stat-number text-gradient">Tech</span>
                <span className="stat-label">Engineering Background</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number text-gradient">Empathy</span>
                <span className="stat-label">Human-Centered Design</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number text-gradient">Impact</span>
                <span className="stat-label">Measurable Results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
