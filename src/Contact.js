import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data validation (optional)
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all fields',
        icon: 'error',
      });
      return;
    }

    setIsSubmitted(true);

    const object = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      access_key: 'c3b2e2ca-e6ce-47de-8ff3-a5a4a27ea6db',
    };

    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        Swal.fire({
          title: 'Thank you!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
        });
        // Reset form data after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'There was an issue sending your message. Please try again later.',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        title: 'Oops!',
        text: 'There was an error submitting your form. Please try again later.',
        icon: 'error',
      });
    }

    setIsSubmitted(false);
  };

  return (
    <>
      <div className="size">
        <div className="contact-form">
          <h1>Contact Me</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message..."
              required
            ></textarea>

            <button type="submit" disabled={isSubmitted}>
              {isSubmitted ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
