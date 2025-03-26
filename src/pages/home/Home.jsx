import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Subscription from "../../components/Subscription/Subscription.jsx";
import StoreFront from "../../components/StoreFront/StoreFront.jsx";
import CreatorTools from "../../components/CreatorTools/CreatorTools.jsx";
import ShowcaseCard from "../../components/showcaseCard/showcaseCard.jsx";
import JoinUsersSection from "../../components/jointUsersSection/jointUsersSection.jsx";
import Footer from "../../components/footer/Footer.jsx";
//import Bookings from "../../components/cards/Bookings.jsx";
//import CheckoutAiCard from "../../components/Subscription/CheckoutAiCard.jsx"
//import Courses from "../../components/cards/Courses.jsx";
//import Invoicing from "../../components/cards/Invoicing.jsx";
//import PaymentAPI from "../../components/cards/PaymentApi.jsx";

const Home = () => {
  return (
    <div className="parent">
      <Header />
      <HeroSection />
      <Subscription/>
      <StoreFront/> 
      <CreatorTools />
      <ShowcaseCard />
      <JoinUsersSection />
      <Footer />
      
  
      <div></div>
    </div>
  );
};

export default Home;
