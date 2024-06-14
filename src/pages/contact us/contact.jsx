import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? We'd love to hear from you!
        Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form className="contactForm">
        <div className="formGroup">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
