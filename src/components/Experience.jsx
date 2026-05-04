import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: "UI/UX Intern",
    company: "Cognifyz Technologies",
    year: "2026",
    description: "Focusing on problem-solving, systems thinking, and real-world impact through intuitive design solutions."
  },
  {
    role: "Junior Engineer",
    company: "Tata Advanced Systems",
    year: "2021–2022",
    description: "Applied precision mindset and logical structuring to complex aerospace components and systems."
  }
];

const education = [
  {
    degree: "B.Tech Computer Science Engineering",
    institution: "Lovely Professional University (LPU)",
    year: "Graduated"
  },
  {
    degree: "Diploma in Mechatronics",
    institution: "Technical Institute",
    year: "Completed"
  }
];

const certifications = [
  "Google Cloud LLM",
  "Prompt Engineering (Vanderbilt)",
  "Project Management (Colorado Boulder)"
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-grid">
          
          <motion.div 
            className="timeline-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Experience.</h2>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item hover-target">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass">
                    <span className="timeline-year">{exp.year}</span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company text-gradient">{exp.company}</h4>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="education-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="edu-section">
              <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Education.</h2>
              
              <div className="edu-list">
                {education.map((edu, index) => (
                  <div key={index} className="edu-card glass hover-target">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-inst">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="cert-section">
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginTop: '3rem' }}>Certifications.</h2>
              
              <div className="cert-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-badge">
                    <span className="cert-icon">🏆</span>
                    <span className="cert-name">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
