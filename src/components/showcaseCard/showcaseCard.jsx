import React from "react";
import "./showcaseCard.css";
import Rectangle from "../../components/assets/Rectangle.png"
import Payments from "../../components/assets/Payments.png"

const ShowcaseCard = () => {
  return (
    <div className="showcase-container">
        <img src={Rectangle} alt="background" />
      <div className="showcase-content">
        <img src={Payments} alt="" />
        <h2 className="showcase-text">
          No matter where your customers, clients, or fans<br/> are, 
          Mainstack makes it easy to showcase and<br/> get paid.
        </h2>
      </div>
    </div>
  );
};

export default ShowcaseCard;
