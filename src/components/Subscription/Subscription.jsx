/**import React from "react";
import "../Subscription/Subscription.css";
import booking from "../../components/assets/booking.png";
import button from "../../components/assets/button.png";
import features from "../../components/assets/features.png";
import container from "../../components/assets/container.png";
import '../../../public/font.css'
const Subscriptions = () => {
  return (
    <section className="subscriptions">
      <div className="subscriptions-content">
        <h1 className="billing-text">BILLING OS</h1>
        <h2 className="heading">
          Secure, flexible and reliable payments made simple so you can{" "}
          <span className="highlight">focus on what matters most</span>,
          your business.
        </h2>
        <img  className= "container" src={container} alt="buttons" />
      </div>

      <div className="subscriptions-box">
        <div className="subscriptions-info">
          <img src={booking} alt="Icon" className="icon" />
          <h3>Subscriptions</h3>
          <p>
            Offer recurring billing to your customers wherever they are. Create
            country-based pricing in 150+ local currencies starting in mins.
          </p>
          <img src={button} alt="Icon" className="icons" />
        </div>
        <div className="subscriptions-image">
          <img src= {features} alt="User" />
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;**/


import React, { useState } from "react";
import "./Subscription.css";
import booking from "../../components/assets/booking.png";
import features from "../../components/assets/features.png";
import CheckoutAi from "../../components/assets/checkoutAi.png";
import pay from "../../components/assets/payment-link-card.png";
import image from "../../components/assets/payment-api-card.png";

const Subscription = () => {
  const [activeTab, setActiveTab] = useState("Subscriptions");

  const tabs = ["Subscriptions", "Checkout AI", "Payment Links", "Payment API"];

  return (
    <div className="billing-container">
      {/* Header Section */}
      <div className="header">
        <h3 className="title-gradient">BILLING OS</h3>
        <h1>
          Secure, flexible and reliable payments made {" "} <br/>simple so you can
          <span className="focus-highlight">focus on what matters most,<br/> your business.</span>
        </h1>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Subscriptions Card */}
      {activeTab === "Subscriptions" && (
        <div className="subscription-card">
          <div className="left-content">
            <img src={booking} alt="Icon" className="icon" />
            <h2>Subscriptions</h2>
            <p>
              Offer recurring billing to your customers <br/> wherever they are. Create country-based <br/>pricing in 150+ local
              currencies starting in <br/>mins.
            </p>
            <button className="demo-button">Request Demo</button>
          </div>
          <div className="right-content">
            <img src= {features} alt="User" />
            </div>
          </div>
      )}
      <div className="checkout-container">
            <div className="checkout-content">
              <div className="checkout-icon">
                <img src={booking} alt="Icon" className="icon" />
              </div>
              <h2 className= "checkout">Checkout AI</h2>
              <p className="paragraph">
                Accept payments directly through your<br/> website or sales pages. Easily
                embed our <br/>widget or generate a link for your customers.
              </p>
              <button className="checkout-button">Create an Account</button>
            </div>
      
            <div className="checkout-image">
            <img className="checkoutAi" src={CheckoutAi} alt="" />
              
            </div>
          </div>
          <div className="payment-links-container">
      <div className="payment-links-content">
        <div className="payment-icon">
          <img src={booking} alt="Icon" className="icon" />
        </div>
        <h2>Payment Links</h2>
        <p className="payment">
          Create a one-off payment link for a unique<br/> service or product. Get
          paid easily for your<br/> crafts anytime.
        </p>
        <button className="payment-button">Create Payment Link</button>
      </div>

      <div className="payment-links-image">
        <img src={pay} alt="User" className="users-image"></img>

      </div>
    </div>
    <div className="payment-api-container">
      <div className="payment-api-content">
        <div className="payment-api-icon">
          <img src={booking} alt="Icon" className="icon" />
        </div>
        <h2>Payment API</h2>
        <p className="paragraph1">
          Get access to global payment options from<br/> one central dashboard.
          Integrate with multiple<br/> payment processors with a single line of code,<br/>
          starting in mins.
        </p>
        <button className="request-access-button">Request Access</button>
      </div>

      <div className="payment-api-image">
        <img src={image} alt="User" className="userr-image" />
      </div>
    </div>
    </div>
  );
};

export default Subscription;
