import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/logo.png"
          alt="Melody Mocktail"
        />
        <span className="logo-text">Melody Mocktail</span>
      </div>
      <nav className="nav-links">
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/blog">Blog</a>
      </nav>
      <a href="/contact" className="contact-button">
        Contact Us
      </a>
    </header>
  );
};

export default Navbar;
