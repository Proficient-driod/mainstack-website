/**import React from "react";
import "./Footer.css";
import mainstackLogo from "../../components/assets/mainstackLogo.png"
import container1 from "../../components/assets/container1.png"
const CountryFlags=() =>{
  const countries = [
    {name: "United States",
     flag:
     "https://flagcdn.com/w320/us.png"
   
},
    {name: "Nigeria", 
      flag:{
    "name": "Nigeria",
    "alpha2Code": "NG",
    "flag": "https://flagcdn.com/ng.svg",
    "independent": false
  },
    },
    {name: "Great Britain", 
      flag:
     "https://flagcdn.com/w320/gb.png",
  },
    

    {name: "Canada", 
      flag: "https://flagcdn.com/w320/ca.png"
  },
    
  ];
  return(
    <div>
      <h2>Country Flags</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <img src={country.flag} alt={country.name} />
            <span style={{ marginLeft: "10px" }}>{country.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={mainstackLogo} alt="" />
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Community guidelines</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Storefront</a></li>
            <li><a href="#">Hosted Courses</a></li>
            <li><a href="#">Link in Bio</a></li>
            <li><a href="#">Invoicing</a></li>
            <li><a href="#">Bookings</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">How Tos</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Docs</a></li>
          </ul>
        </div>

        <div className="social-icons">
          <img src={container1} alt="" />
          <p>📧 support@mainstack.app</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-locations">
        <div className="location">
          
          <h4>🇺🇸 Dallas</h4>
          <p>Mainstack Social Commerce Inc<br />2909 E. Arkansas Lane, Suite C-540<br />Arlington, TX 76010</p>
        </div>
        <div className="location">

          <h4>🇳🇬 Lagos</h4>
          <p>Mainstack Social Commerce Ltd<br />42 Montgomery Road,<br />Yaba, Lagos</p>
        </div>
        <div className="location">
          <h4>🇬🇧 London</h4>
          <p>Mainstack UK Limited<br />71-75 Shelton Street, Covent Garden<br />London, WC2H 9JQ</p>
        </div>
        <div className="location">
          <h4>🇨🇦 Toronto</h4>
          <p>Mainstack Canada Corporation<br />20 Bay Street, 11th Floor<br />Toronto, ON, M5J 2N8</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>🌐 English | 🍪 Cookie settings | &copy; 2024 Mainstack Social Commerce, Inc</p>
        <p>Backed by <strong>techstars_</strong></p>
        <p className="disclaimer">* Mainstack offers its products and services in partnership with licensed transmitters and payment processors in their respective jurisdictions.</p>
        <p className="disclaimer">* All trademarks and brand names belong to their respective owners.</p>
      </div>
    </footer>
  );
};
export default Footer;**/
import React from "react";
import "./Footer.css";
import mainstackLogo from "../../components/assets/mainstackLogo.png";
import container1 from "../../components/assets/container1.png";
import language from "../../components/assets/language.png"
import Vectors from "../../components/assets/Vectors.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={mainstackLogo} alt="Mainstack Logo" />
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Community guidelines</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Storefront</a></li>
            <li><a href="#">Hosted Courses</a></li>
            <li><a href="#">Link in Bio</a></li>
            <li><a href="#">Invoicing</a></li>
            <li><a href="#">Bookings</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">How Tos</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Docs</a></li>
          </ul>
        </div>

        <div className="social-icons">
          <img src={container1} alt="Container 1" />
          <p>📧 support@mainstack.app</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-locations">
        <div className="location">
          <p><h4>Dallas</h4>
         <img  className= "dallas" src="https://flagcdn.com/w320/us.png" alt="US Flag" width="15" /> {" "}
          Mainstack Social Commerce Inc<br />2909 E. Arkansas Lane, Suite C-540<br />Arlington, TX 76010</p>
        </div>
        <div className="location">
          <p><h4> Lagos</h4>
          <img src="https://flagcdn.com/ng.svg" alt="Nigerian Flag" width={15} />{" "}
          Mainstack Social Commerce Ltd<br />42 Montgomery Road,<br />Yaba, Lagos</p>
        </div>
        <div className="location">
          <p><h4>London</h4>
          <img src="https://flagcdn.com/w320/gb.png" alt="Great Britain Flag" width={15} /> {" "}
          Mainstack UK Limited<br />71-75 Shelton Street, Covent Garden<br />London, WC2H 9JQ</p>
        </div>
        <div className="location">
          <p><h4>Toronto</h4>
          <img src="https://flagcdn.com/w320/ca.png" alt="Canadian Flag" width="15" />{" "}
          Mainstack Canada Corporation<br />20 Bay Street, 11th Floor<br />Toronto, ON, M5J 2N8</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p> <span><img className="language"src={language} alt="" /> English </span> <span>Cookie settings</span> <span> &copy; 2024 Mainstack Social Commerce, Inc</span></p>
        <p className="main">Backed by <img className="vector" src={Vectors} alt="" /></p>
        <p className="disclaimer">* Mainstack offers its products and services in partnership with licensed transmitters and payment processors in their respective jurisdictions.</p>
        <p className="disclaimer">* All trademarks and brand names belong to their respective owners.</p>
      </div>
    </footer>
  );
};

export default Footer;

