import React from 'react';

function Contact({ name, setName, email, setEmail, message, setMessage, onSubmit }) {
  return (
    <section id="contact" className="contact">
      <h2>Let's build something together! Whether you have a project idea, a question, or just want to connect, feel free to drop a message</h2>
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