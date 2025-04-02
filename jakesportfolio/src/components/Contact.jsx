import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.message) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus({ submitted: true, success: false, message: 'Sending...' });

    emailjs.sendForm(
      'service_1cs8c5n', // Replace with your EmailJS service ID
      'template_bzxsthp', // Replace with your EmailJS template ID
      form.current,
      'nHeNkAOVl357l0axg' // Replace with your EmailJS public key
    )
      .then((result) => {
        setStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus({
          submitted: true,
          success: false,
          message: 'There was an error sending your message. Please try again later.'
        });
        console.log(error.text);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>CONTACT ME</h1>
        
        {status.submitted && (
          <div className={`status-message ${status.success ? 'success' : 'error'}`}>
            {status.message}
          </div>
        )}
        
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"></label>
            {errors.name && <span className="error-message">{errors.name}</span>}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email"></label>
            {errors.email && <span className="error-message">{errors.email}</span>}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message"></label>
            {errors.message && <span className="error-message">{errors.message}</span>}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="6"
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
