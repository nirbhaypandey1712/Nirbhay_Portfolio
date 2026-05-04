import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 'ac-remote',
    title: 'AC Remote Redesign',
    subtitle: 'When Control Feels Like Confusion',
    image: '/assets/ac_remote.png',
    hook: 'What should take 2 seconds… was taking 10 — and frustrating users every single time.',
    context: 'The AC remote interface wasn’t just cluttered — it was mentally exhausting. Too many buttons, no clear hierarchy, and zero guidance forced users to think before acting. And in UX, that’s already a failure.',
    investigation: [
      'Users paused before clicking',
      'They searched instead of acting',
      'Even basic actions felt uncertain'
    ],
    breakdown: [
      'Overloaded interface → decision fatigue',
      'No hierarchy → everything felt equally important',
      'Poor feedback → users unsure of outcomes'
    ],
    insight: 'The problem wasn’t complexity… it was lack of clarity. Users didn’t need fewer features. They needed better prioritization.',
    solution: 'Simplified the interface into primary controls (Power, Temperature) and secondary controls (Mode, Fan). Introduced clear visual hierarchy and minimal, distraction-free layout.',
    impact: [
      { metric: '⏱', text: 'Faster task completion' },
      { metric: '🧠', text: 'Reduced cognitive load' },
      { metric: '📈', text: 'Improved usability & confidence' }
    ],
    reflection: 'Simplicity isn’t basic — it’s powerful.'
  },
  {
    id: 'tata-1mg',
    title: 'TATA 1mg App Redesign',
    subtitle: 'When Healthcare Feels Complicated',
    image: '/assets/tata_1mg.png',
    hook: 'Getting medicine shouldn’t feel like solving a maze.',
    context: 'The TATA 1mg app had everything users needed — but finding it? That was the real struggle. Navigation was cluttered, workflows were fragmented, and users often felt lost mid-task.',
    investigation: [
      'Too many steps in medicine ordering',
      'Inconsistent navigation in lab bookings',
      'Information overload in consultations'
    ],
    breakdown: [
      'Poor information architecture → users couldn’t find what they needed',
      'Fragmented flows → tasks felt longer than necessary',
      'Visual inconsistency → lack of trust and clarity'
    ],
    insight: 'The issue wasn’t lack of features… it was lack of flow. Users weren’t confused by options — they were overwhelmed by how those options were presented.',
    solution: 'Restructured the experience by streamlining navigation into clear categories, reducing steps in key workflows, and creating a consistent visual system.',
    impact: [
      { metric: '⏱', text: 'Reduced user effort across key tasks' },
      { metric: '📈', text: 'Improved engagement and usability' },
      { metric: '🧭', text: 'Clearer navigation and user journeys' }
    ],
    reflection: 'Good design doesn’t just guide users — it reassures them.'
  },
  {
    id: 'careerboost',
    title: 'CareerBoost App',
    subtitle: 'When Too Many Choices Lead to No Decisions',
    image: '/assets/careerboost.png',
    hook: 'Users weren’t stuck because they lacked ambition… they were stuck because they lacked direction.',
    context: 'Students and professionals had access to countless career resources — but no clear path to follow. The result? Confusion, overwhelm, and inaction.',
    investigation: [
      'Jumping between platforms',
      'Consuming scattered information',
      'Struggling to make decisions due to fragmentation'
    ],
    breakdown: [
      'Scattered resources → no structured journey',
      'No clear roadmap → users felt lost',
      'High cognitive load → decision paralysis'
    ],
    insight: 'The problem wasn’t lack of information… it was lack of structure. Users didn’t need more options. They needed guided clarity.',
    solution: 'Designed CareerBoost as a unified platform with structured career roadmaps, step-by-step guidance, and a clean, intuitive interface to reduce decision fatigue.',
    impact: [
      { metric: '🎯', text: 'Unified platform with clear flow' },
      { metric: '🧠', text: 'Reduced decision fatigue' },
      { metric: '🚀', text: 'Seamless user journey' }
    ],
    reflection: 'This project taught me that clarity beats creativity when usability is at stake.'
  }
];

const CaseStudy = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`case-study ${isEven ? 'layout-normal' : 'layout-reversed'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="cs-visual">
        <div className="cs-image-wrapper">
          <img src={project.image} alt={project.title} className="cs-image" />
          <div className="cs-overlay"></div>
        </div>
      </div>
      
      <div className="cs-content">
        <div className="cs-header">
          <h3 className="cs-title">{project.title}</h3>
          <p className="cs-subtitle text-gradient">"{project.subtitle}"</p>
        </div>
        
        <div className="cs-body">
          <div className="cs-section hook">
            <p className="cs-hook">🔥 {project.hook}</p>
            <p className="cs-context">{project.context}</p>
          </div>
          
          <div className="cs-section insight">
            <h4 className="cs-label">💡 The Insight</h4>
            <p className="cs-insight-text">"{project.insight}"</p>
          </div>
          
          <div className="cs-section solution">
            <h4 className="cs-label">🎨 The Solution</h4>
            <p className="cs-solution-text">{project.solution}</p>
          </div>
          
          <div className="cs-section impact">
            <h4 className="cs-label">🚀 The Impact</h4>
            <ul className="cs-impact-list">
              {project.impact.map((item, i) => (
                <li key={i}>
                  <span className="impact-metric">{item.metric}</span>
                  <span className="impact-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="cs-reflection">
            <p className="reflection-text">🎤 "{project.reflection}"</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Selected Work.</h2>
          <p className="section-subtitle">Case studies detailing my process from problem to solution.</p>
        </div>
        
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <CaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
