import React, { useState } from "react";
import "./StoreFront.css";
import book from "../../components/assets/book.png";
import Images from "../../components/assets/images.png";
import invoicing from "../../components/assets/invoicing-card.png";
import bookingimage from "../../components/assets/booking-card-img.png";

const Storefront = () => {
  const [activeTab, setActiveTab] = useState("Storefront");

  return (
    
      <div className="storefront-container">
      {/* Header Section */}
      <header className="head">
        <p className="business-tools">BUSINESS TOOLS</p>
        <h1 className="store">
          Take charge of your sales with our robust <br />
          business solutions and tools, built and tailored to <br />
          <span className="highlight-text">your everyday business needs.</span>
        </h1>
      </header>
      <div>
      {/* Navigation Bar */}
      <div className="navbar">
        <button
          className={activeTab === "Storefront" ? "nav-item active" : "nav-item"}
          onClick={() => setActiveTab("Storefront")}
        >
          Storefront
        </button>

        <button
          className={activeTab === "Invoicing" ? "nav-item active" : "nav-item"}
          onClick={() => setActiveTab("Invoicing")}
        >
          Invoicing
        </button>

        <button
          className={activeTab === "Bookings" ? "nav-item active" : "nav-item"}
          onClick={() => setActiveTab("Bookings")}
        >
          Bookings
        </button>
      </div>

      {/* Display Content Based on Active Tab */}
      {/* <div className="tab-content">
        {activeTab === "Storefront" && <img src={book} alt="Storefront Content" />}
        {activeTab === "Invoicing" && <img src={invoicing} alt="Invoicing Content" />}
        {activeTab === "Bookings" && <img src={bookingimage} alt="Bookings Content" />}
      </div> }


      {/* Sticky Storefront Section */}
      <div className="storefront-card" >
        <div className="left-section">
          <div className="icon-title">
            <div className="store-icon">
                <img className="icon1"src={book} alt="" />
            </div>
            <h2 className="head1">Storefront</h2>
          </div>
          <p className="description">
            Create a store that turns visitors into<br/> customers. Sell your products
            to anyone,<br/> anywhere, anytime.
          </p>
          <button className="store-btn">Create storefront</button>
        </div>

        {/* Product and Payment Info */}
        <div className="right-section">
          <img src={Images} alt="User Working" className="Images" />
        </div>
      </div>
      <div className="invoicing-container" >
      <div className="invoicing-content">
        <div className="invoicing-icon">
          <img className="icon1"src={book} alt="" />
        </div>
        <h2>Invoicing</h2>
        <p className="paragraph1">
          Manage all payments in one place. Get paid <br/>faster for your services from clients locally and<br/> abroad.
        </p>
        <button className="create-invoice-button">Create Invoice</button>
      </div>

      <div className="invoicing-image">
        <img src={invoicing} alt="User" className="user-image" />
      </div>
    </div>


    <div className="bookings-container" >
      {/* Left Section - Text and Button */}
      <div className="bookings-content">
  
          <img className="icon1"src={book} alt="" />
        
        <h2 className="bookings-title">Bookings</h2>
        <p className="bookings-text">
          Effortlessly manage your appointments and<br/> events with our user-friendly booking app that<br/> 
          simplifies scheduling, saves you time, and <br/>provides a seamless experience for both you <br/>and your clients.
        </p>
        <button className="bookings-button">Create Booking</button>
      </div>

      {/* Right Section - Image & Cards */}
      <div className="bookings-image-container">
        <img src={bookingimage} alt="User smiling while booking" className="bookings-image" />
      </div>
    </div>
    </div>
   </div>
  );
};

export default Storefront;
