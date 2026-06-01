import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        
        {/* PROJECT 1: MACHINE LEARNING */}
        <div className="project-card">
          <h3>Mental Health Risk Prediction</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', marginBottom: '15px' }}>
            Developed an ensemble machine learning system analyzing demographic and psychological attributes to classify risk levels.
          </p>
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span className="skill-badge" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>Python</span>
            <span className="skill-badge" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>Random Forest</span>
            <span className="skill-badge" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>SMOTE</span>
          </div>
        </div>

        {/* PROJECT 2: MOBILE APP */}
        <div className="project-card">
          <h3>Location-Based Assistive App</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', marginBottom: '15px' }}>
            Co-developed a mobile application utilizing Google Maps API and GPS tracking to help wheelchair users map out accessible infrastructure.
          </p>
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span className="skill-badge" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>Flutter</span>
            <span className="skill-badge" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>Firebase</span>
            <span className="skill-badge" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>Google Maps API</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;