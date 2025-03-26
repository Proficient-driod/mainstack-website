import React, { useState } from "react";
import "./CreatorTools.css"
import booked from "../../components/assets/booked.png"
//import button3 from "../../components/assets/button3.png"
import featureimages from "../../components/assets/featureimages.png"
import Courses from "../../components/assets/courses-card.png";


const CreatorTools = () => {
  const [activeTab, setActiveTab] = useState("Link in Bio");

  return (
    <div className="creator-tools">
      {/* Header Section */}
      <h5 className="section">CREATOR TOOLS</h5>
      <h1 className="main-heading">
        Elevate your brand. <span className="gray-text">Ignite your passion.</span>
        <span className="black-text">Create, <br/>share, and monetize</span> your creative business with<br/> our robust tools.
        <span className="black-text">Track analytics in one place.</span>
      </h1>

      {/* Tab Switcher */}
      <div className="tab-container">
        {["Link in Bio", "Media Kit", "Courses"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Feature Section */}
      <div className="feature-card">
        {/* Left Section */}
        <div className="feature-text">
          <img className="icons" src={booked} alt="" />
          <h3 className="feature-title">Link in Bio</h3>
          <p className="feature-description">
            Create a Link in Bio to showcase your incredible<br/> work and services with our drag-and-drop site <br/>builder.
            No code required.
          </p>
          <button className="cta-button">Create Link in Bio</button>
        </div>

        {/* Right Section */}
        <div className="feature-image-container">
          <img
            src={featureimages}
            alt="Feature"
            className="feature-image"
          />
          </div>
        </div>
        <div className="courses-container">
      {/* Left Section - Text and Button */}
      <div className="courses-content">
        <div className="icon-box">
          <img className= "icons"src={booked} alt="" />
        </div>
        <h2 className="courses-title">Courses</h2>
        <p className="paragraph">
          Monetize your knowledge, create and sell your <br/>courses with AI. Sell to anyone, anywhere,<br/> anytime. Easy peasy.
        </p>
        <button className="courses-button">Create Courses</button>
      </div>

      {/* Right Section - Image & Course Cards */}
      <div className="courses-image-container">
        <img src={Courses} alt="Student learning online" className="courses-image" />
    
      </div>
    </div>
      </div>
  
  );
};

export default CreatorTools;



