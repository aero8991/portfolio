import React from "react";
import "./about.css";
import picture from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { VscFolderLibrary } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={picture} alt="image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <AboutCard icon={<FaAward className="about__icon" />} largeText="Experience" smallText="10+ years working"/>
            <AboutCard icon={<ImUsers className="about__icon" />} largeText="Clients" smallText="200+ Worldwide"/>
            <AboutCard icon={<VscFolderLibrary className="about__icon" />} largeText="Projects" smallText="80+ projects"/>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quidem
            cumque quaerat nesciunt labore, minus neque, magnam iure officiis
            sint perferendis aspernatur molestiae doloremque molestias nulla
            quam sapiente enim consequatur!
          </p>
          <a href="#contact" className="btn btn-primary chat-btn">Let's Chat</a>
        </div>
      </div>
    </section>
  );
};

export default About;
