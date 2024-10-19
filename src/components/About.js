import React from "react";
import "./About.css";

// Import team member images
import member1 from './image/images.jpeg'; // Correct path
import member2 from './image/images (1).jpeg'; // Correct path
import member3 from './image/portrait-homme-riant_23-2148859448.avif'; // Correct path
import member4 from './image/images (2).jpeg'; // Correct path

// Import the "About Us" image
import aboutImage from '../image/The Brand Boutique - Logo Design.jpeg'; // Correct path

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At <strong>My Hidden </strong>, we are passionate about fashion and style. 
            Our mission is to offer high-quality products that blend comfort and design, 
            while remaining accessible to everyone. We believe everyone deserves to feel good 
            in their own skin and express themselves through what they wear.
          </p>
          <p>
            Since our founding, we’ve been committed to providing items that meet our customers' 
            needs, with a strong focus on sustainability and environmental respect. 
            We take pride in supporting ethical manufacturing practices and partnering with 
            those who share our vision.
          </p>
          <p>
            Join us on this style journey and discover how our products can enhance your everyday life!
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us" /> {/* Use the imported image here */}
        </div>
      </div>
      <div className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-circles">
          <div className="team-member">
            <img src={member1} alt="John Doe" />
            <p>John Doe - CEO</p>
          </div>
          <div className="team-member">
            <img src={member2} alt="Jane Smith" />
            <p>Jane Smith - Designer</p>
          </div>
          <div className="team-member">
            <img src={member3} alt="Bob Johnson" />
            <p>Bob Johnson - Marketing</p>
          </div>
          <div className="team-member">
            <img src={member4} alt="Alice Lee" />
            <p>Alice Lee - Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
