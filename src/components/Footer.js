import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container" id="Footer">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Look below to find contact and/or social media links
        </p>
        <p className="footer-subscription-text">
          You can contact me at any time
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Info</h2>
            <a href="tel:+8653154700">Telephone</a>
            <a href="mailto:jeremyhurst16@gmail.com">Email</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.linkedin.com/in/jeremy-hurst-38b855208/">
              LinkedIn
            </a>
            <a href="https://github.com/jhurst16">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
