import React from "react";
import "./jointUsersSection.css";
import card from "../../components/assets/cardComponent.png"

const JoinUsersSection = () => {
  return (
    <div className="join-users-container">
       <img src={card} alt="" />
      <div className="join-users-content">
        <h2 className="join-users-title">
          Join other users in<br/> 125+ countries
        </h2>
        <p className="join-users-description">
          Showcase and receive payments for your work and services, sell online,<br/>
          create invoices, manage clients, build a community, and track analytics <br/>
          all in one place, starting now.
          <button className="join-users-button">Get Started</button>
        </p>
        <button className="join-users-button">Get Started</button>
         </div>
    </div>
  );
};

export default JoinUsersSection;
