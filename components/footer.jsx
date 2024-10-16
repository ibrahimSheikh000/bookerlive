import React from 'react';
import Logo from '/images/logo (1).png'; 
import '../css/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={Logo} alt="BookerLive Logo" className="footer-logo" />
            <p className="footer-description">
              Our dedication to create outstanding travel experiences has allowed us to build this company, and much of our business comes from repeat customers and referrals from those who have had successful trips with us in the past.
            </p>
          </div>

          {/* Adjusted grid classes to keep Company and City side by side */}
          <div className="col-sm-6 col-md-2">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Hotel Search</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          
          <div className="col-sm-6 col-md-2">
            <h5>City's</h5>
            <ul className="list-unstyled">
              <li><a href="#">Amsterdam</a></li>
              <li><a href="#">Berlin</a></li>
              <li><a href="#">New York</a></li>
              <li><a href="#">Miami</a></li>
              <li><a href="#">Tokyo</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Newsletter & Social</h5>
            <p>Sign up to get our latest exclusive updates, deals, offers and promotions.</p>
            <form className="footer-form">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Email address" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    <i className="fas fa-envelope"></i>Enter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
