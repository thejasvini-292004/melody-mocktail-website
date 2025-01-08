import React from "react";
import "./ContactUs.css";
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="title-box">
        <h1>Contact Us</h1>
        <p>Feel Free to reach out to us through any platform.</p>
        <div className="title-underline"></div>
      </div>

      <div className="logos-section">
        <BsInstagram />
        <span className="instagram-text">@melody_mocktail</span>
        <FaYoutube />
        <span className="youtube-text">@melody_mocktail</span>
        <FaFacebook />
        <span className="facebook-text">@melody_mocktail</span>
      </div>

      <div className="form-newsletter-container">
        <div className="form-section">
          <div className="input-container">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-container">
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-container">
            <textarea placeholder="Message"></textarea>
          </div>
          <button className="submit-button">Submit </button>
        </div>

        <div className="newsletter-section">
          <h3>Our Newsletter</h3>
          <p>Subscribe to our newsletter to recieve updates and latest news.</p>
          <div className="newsletter-input-container">
            <input type="email" placeholder="Email" />
            <button className="newsletter-submit-button">Submit </button>
          </div>
        </div>
      </div>

      <div className="info-cards">
        <div className="info-card contact-info-card">
          <h4>
            <FaPhoneAlt />
            <span className="number">(+876) 765 665</span>
          </h4>
          <p>
            Feel free to reach out to us anytime. We are available 24/7 for any
            queries.
          </p>
        </div>
        <div className="info-card email-info-card">
          <h4>
            <MdEmail />
            <span className="email">contact@sample-gmail.com</span>
          </h4>
          <p>
            Drop us an email, and we will get back to you as soon as possible.
            We look forward to hearing from you!
          </p>
        </div>
        <div className="info-card address-info-card">
          <h4>
            <FaLocationDot />
            <span className="address">123 Melody St, Your City</span>
          </h4>
          <p>
            Visit us at our office or send us mail at the address provided. We’d
            love to meet you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
