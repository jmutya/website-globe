import React from "react";
import "./mainContent.css";
// import globeIcon from "./assets/logo.png"; // Replace with your actual icon
// import bannerImage from "./banner-image.png"; // Replace with your actual image

const MainContent = () => {
  return (
    <main className="main-container">
      <div className="content-wrapper">
        {/* Left Side - Image Section */}
        <div className="image-section">
          {/* <img src={bannerImage} alt="Team Working" className="banner-image" /> */}
          <div className="icon-overlay">
            {/* <img src={globeIcon} alt="Globe Icon" className="globe-icon" /> */}
          </div>
        </div>

        {/* Right Side - Text Section */}
        <div className="text-section">
          <div className="welcome-box">Welcome To</div>
          <h1 className="title">Jefferson Website</h1>
          <p className="description">
            Reliable, Secure, and Scalable Hosting Solutions.
          </p>
          <button className="cta-button">Start Slide</button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
