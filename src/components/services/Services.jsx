import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { web_data, ux_data, content_data } from "./servicesData";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            {ux_data.map(({ id, content }) => {
              return (
                <li id={id}>
                  <BiCheck className="service__list-icon" />
                  <p>{content}.</p>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            {web_data.map(({ id, content }) => {
              return (
                <li id={id}>
                  <BiCheck className="service__list-icon" />
                  <p>{content}.</p>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            {content_data.map(({ id, content }) => {
              return (
                <li id={id}>
                  <BiCheck className="service__list-icon" />
                  <p>{content}.</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
