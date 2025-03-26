import React from 'react'
import "./Header.css"
import logo from "../../components/assets/Vector.png";
import '../../../public/font.css'

const Header = () => {
    return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <img src={logo} alt="Mainstack Logo" className="logo" />

        {/* Navigation Links */}
        <nav className="nav">
          <a href="#">Products ▾</a>
          <a href="#">Resources ▾</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
        </nav>

        {/* Action Buttons */}
        <div className="buttons">
          <button className="login">Login</button>
          <button className="signup">Get started for free</button>
        </div>
      </div>
    </header>
  );
};


export default Header;

