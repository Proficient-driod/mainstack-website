import React from "react";
import "./HeroSection.css";
import frame from "../../components/assets/frame.png"
import frames from "../../components/assets/frames.png"
import logo from "../../components/assets/us-insider-logo.png"
import layer from "../../components/assets/layer.png"
import '../../../public/font.css'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <button className="powered-btn">POWERED BY AI</button>
        <h1>Earn globally on <br/>your terms</h1>
        <p>
          Our tools empower businesses to grow revenue and creators to <br/>monetize
          their work – quickly, seamlessly, and without currency<br/> limitations.
        </p>
        <button className="cta-buttonn">Get started for free</button>
        <div className="as-seen-in">
           <span className="text">AS SEEN IN</span>
          <img src={frame} alt="TechCrunch" />
          <img src={frames} alt="Yahoo Finance" />
          <img src={logo} alt="US Insider" />
        </div>
      </div>
      <div className="hero-image">
        <img src={layer} alt="Global network" />
      </div>
    </section>
  );
};

export default HeroSection;
