import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer>
        <div className="footer-content">
          <p>
            Copyright &copy; {currentYear} To-Do-List App. &nbsp;All rights
            reserved.
          </p>

          <div className="social-icons">
            <a href="https://twitter.com/" target="_blank">
              <FaXTwitter className="icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare className="icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;