import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video-1.mov" autoPlay loop muted />
      <h1>FULL STACK DEVELOPER</h1>
      <p>This is what I do</p>
    </div>
  );
}

export default HeroSection;
