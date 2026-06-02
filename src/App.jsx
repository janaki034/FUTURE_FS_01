import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Oops! Please fill out all fields before sending.');
      return;
    }
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo">Portfolio</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Full screen text introduction */}
      <Hero />
      
      {/* Clean text description */}
      <About />
      
      {/* Unified Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-badge">Python</div>
          <div className="skill-badge">Data Structures</div>
          <div className="skill-badge">Machine Learning</div>
          <div className="skill-badge">SQL & Databases</div>
          <div className="skill-badge">React.js</div>
          <div className="skill-badge">Data Science Foundations</div>
          <div className="skill-badge">Flutter</div>
          <div className="skill-badge">Firebase</div>
          <div className="skill-badge">HTML / CSS</div>
          <div className="skill-badge">GitHub</div>
        </div>
      </section>
      
      <Projects />
      
      <Contact 
        name={name} setName={setName}
        email={email} setEmail={setEmail}
        message={message} setMessage={setMessage}
        onSubmit={handleFormSubmit}
      />

      {showScrollBtn && (
        <button className="scroll-btn" onClick={scrollToTop} title="Go to top">
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
