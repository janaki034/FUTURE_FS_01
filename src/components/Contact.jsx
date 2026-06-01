import React from 'react';

function Contact({ name, setName, email, setEmail, message, setMessage, onSubmit }) {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea 
          rows="5" 
          placeholder="Write message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;