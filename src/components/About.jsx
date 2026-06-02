import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.aboutSection}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.text}>
          I am a Computer Science student interested in coding, web development, and building projects. 
          I enjoy learning new technologies and improving my skills.
        </p>
      </div>
    </section>
  );
};

const styles = {
  aboutSection: {
    padding: '100px 5%',
    backgroundColor: '#0b0f19',
    textAlign: 'center',
    color: '#ffffff',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '24px',
  },
  text: {
    fontSize: '1.2rem',
    color: '#94a3b8',
    lineHeight: '1.8',
  },
};

export default About;