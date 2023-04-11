import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Daniel Rossano
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/daniel.rossano.31">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/dross1762">
          <IoLogoTwitter />
        </a>
        <a href="https://www.linkedin.com/in/daniel-rossano-6a192228/">
          <BsLinkedin />
        </a>
        <a href="https://www.linkedin.com/in/daniel-rossano-6a192228/">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Daniel Rossano All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
