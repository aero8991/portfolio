import React from "react";
import "./about.css";
import picture from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { VscFolderLibrary } from "react-icons/vsc";
import AboutCard from "./AboutCard";
import working from "../../assets/working1.png"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={working} alt="image" className="image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              icon={<FaAward className="about__icon" />}
              largeText="Experience"
              smallText="10+ years working"
            />
            <AboutCard
              icon={<ImUsers className="about__icon" />}
              largeText="Clients"
              smallText="200+ Worldwide"
            />
            <AboutCard
              icon={<VscFolderLibrary className="about__icon" />}
              largeText="Projects"
              smallText="40+ projects"
            />
          </div>
          <p>
            I’m a passionate professional with 10+ years of broad front end and back end analytical
            experience including Python programming, data analytics, process
            improvements, machine learning/ AI and predictive forecasting. I’m a
            seasoned analyst seeking to leverage my strong analytical
            experiences, leadership skills and efficiency improvement ideas to
            increase profitability.
          </p>
          <a href="#contact" className="btn btn-primary chat-btn">
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
