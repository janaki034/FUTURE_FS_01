import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={styles.heroSection}>
      <div style={styles.container}>
        
        {/* Simple Status Link */}
        <div style={styles.statusBadge}>
          <span style={styles.dot}></span>
          <span style={styles.statusText}>Available for Tech Roles & Collaborations</span>
        </div>

        {/* Big Clean Title */}
        <h1 style={styles.title}>
          Hi, I'm <span style={styles.highlight}>Janaki</span>
        </h1>
        
        {/* Updated Description Text */}
        <p style={styles.subtitle}>
          Computer Science Student & Tech Enthusiast specializing in building clean, data-driven web applications.
        </p>

        {/* Buttons */}
        <div style={styles.btnContainer}>
          <a href="#projects" style={styles.primaryBtn}>View My Work</a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={styles.secondaryBtn}>View Resume</a>
        </div>

      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    minHeight: '100vh', /* Forces the section to take up the EXACT full screen height */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b0f19',
    textAlign: 'center',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#111827',
    padding: '6px 16px',
    borderRadius: '20px',
    border: '1px solid #1e293b',
    marginBottom: '24px',
  },
  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10b981',
    borderRadius: '50%',
    boxShadow: '0 0 8px #10b981',
  },
  statusText: {
    fontSize: '0.85rem',
    color: '#94a3b8',
    fontWeight: '500',
  },
  title: {
    fontSize: '4rem',
    fontWeight: '800',
    letterSpacing: '-0.05em',
    marginBottom: '16px',
    color: '#ffffff',
  },
  highlight: {
    color: '#3b82f6',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#94a3b8',
    maxWidth: '600px',
    margin: '0 auto 32px auto',
    lineHeight: '1.6',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
  primaryBtn: {
    padding: '12px 28px',
    borderRadius: '8px',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  secondaryBtn: {
    padding: '12px 28px',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem',
    border: '1px solid #334155',
  }
};

export default Hero;