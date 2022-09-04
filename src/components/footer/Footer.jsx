import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <div id="footer-container">
      <div id="icons">
        <FaInstagram className="icon" />
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaYoutube className="icon" />
      </div>
      <p>Copyright &copy; {new Date().getFullYear()} OVAT</p>
    </div>
  );
};
