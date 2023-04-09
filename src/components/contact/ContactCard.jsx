import React from "react";


const ContactCard = ({ icon, contactMethod, connect, contactLink }) => {
  return (
    <article className="contact__option">
      {icon}
      <h4>{contactMethod}</h4>
      <h5>{connect}</h5>
      <a href={contactLink} target="_blank">
        Send a message
      </a>
    </article>
  );
};

export default ContactCard;
