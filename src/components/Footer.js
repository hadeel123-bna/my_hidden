import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="mailto:info@mycompany.com">Email</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div className="contact-info">
          <p>Phone: +216 45 877 890</p>
          <p>Address: 123 My Hidden Closet, Tunis, Tn</p>
          <p>Opening Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
