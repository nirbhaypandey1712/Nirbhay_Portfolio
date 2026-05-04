import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsList = [
  "UI/UX Design",
  "Wireframing & Prototyping",
  "User Research",
  "Design Systems",
  "Usability Testing",
  "Information Architecture"
];

const toolsList = [
  "Figma",
  "Photoshop",
  "Canva",
  "Miro",
  "GitHub"
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="skills-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-content">
            <h2 className="section-title">My Toolkit.</h2>
            <p className="section-subtitle">
              The frameworks, methodologies, and tools I use to turn complex problems into elegant solutions.
            </p>
          </div>
          
          <div className="skills-grid">
            <div className="skills-card glass">
              <h3 className="card-title">Core Competencies</h3>
              <div className="tags-container">
                {skillsList.map((skill, index) => (
                  <motion.span 
                    key={index} 
                    className="tag skill-tag hover-target"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="skills-card glass">
              <h3 className="card-title">Tools & Software</h3>
              <div className="tags-container">
                {toolsList.map((tool, index) => (
                  <motion.span 
                    key={index} 
                    className="tag tool-tag hover-target"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
