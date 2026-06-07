import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill out all fields before sending.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // 👇 Change 'your-email@example.com' to your actual email address
    window.location.href = `janakigsjanaki@gmail.com`;
  };

  return (
    <section id="contact" style={styles.contactSection}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Let's build something together!</h2>
        <p style={styles.subtext}>
          Whether you have a project idea, a question, or just want to connect, feel free to drop a message.
        </p>

        <form onSubmit={handleFormSubmit} style={styles.form}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input} 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input} 
          />
          <textarea 
            placeholder="Write message" 
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          ></textarea>
          
          <button type="submit" style={styles.submitBtn}>Send Message</button>
        </form>

        <hr style={styles.divider} />

        <div style={styles.socialContainer}>
          {/* 👇 Change the URL inside href="" to your actual LinkedIn link */}
          <a 
            href="https://www.linkedin.com/in/janakigs/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.linkedinBtn}
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contactSection: {
    padding: '80px 5%',
    backgroundColor: '#0b0f19',
    textAlign: 'center',
    color: '#ffffff',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.2rem',
    fontWeight: '700',
    marginBottom: '16px',
    lineHeight: '1.3',
  },
  subtext: {
    fontSize: '1.05rem',
    color: '#94a3b8',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  input: {
    padding: '14px 20px',
    borderRadius: '8px',
    border: '1px solid #1e293b',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '1rem',
    outline: 'none',
  },
  textarea: {
    padding: '14px 20px',
    borderRadius: '8px',
    border: '1px solid #1e293b',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '1rem',
    outline: 'none',
    resize: 'vertical',
  },
  submitBtn: {
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  divider: {
    margin: '40px 0 30px 0',
    border: '0',
    borderTop: '1px solid #1e293b',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkedinBtn: {
    padding: '12px 32px',
    borderRadius: '8px',
    backgroundColor: '#0077b5',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    boxShadow: '0 4px 12px rgba(0, 119, 181, 0.3)',
  }
};

export default Contact;