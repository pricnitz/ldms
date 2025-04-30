import React, { useState } from 'react';
import '../css/contact.css'; // Make sure this is the updated CSS you shared

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Get in touch</p>
      <p className="message">We’d love to hear from you!</p>

      <label>
        <input
          className="input"
          type="text"
          name="name"
          placeholder=" "
          value={formData.name}
          onChange={handleChange}
          required
        />
        <span>Name</span>
      </label>

      <label>
        <input
          className="input"
          type="email"
          name="email"
          placeholder=" "
          value={formData.email}
          onChange={handleChange}
          required
        />
        <span>Email</span>
      </label>

      <label>
        <input
          className="input"
          type="text"
          name="subject"
          placeholder=" "
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <span>Subject</span>
      </label>

      <label>
        <textarea
          className="input"
          name="message"
          placeholder=" "
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <span>Message</span>
      </label>

      <button className="submit" type="submit">Send Message</button>

      <p className="signin">Need help? <a href="#">Contact Support</a></p>
    </form>
  );
}
