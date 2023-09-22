import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any questions or feedback, please don't hesitate to get in touch with us:</p>
        <ul>
          <li>Email: <a href="mailto:info@yourbookstore.com">rajaguru9551@gmail.com</a></li>
          <li>Phone: <a href="tel:+123456789">+123-456-789</a></li>
          <li>Address: 123 Bookstore Lane, Bookville, BO 12345</li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Feel free to send us a message:</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
