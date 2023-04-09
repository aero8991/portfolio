import React from "react";

const ExperienceItems = ({ icon, skill, exp }) => {
  return (
    <article className="experience__details">
      {icon}
      <div>
        <h4>{skill}</h4>
        <small className="text-light">{exp}</small>
      </div>
    </article>
  );
};

export default ExperienceItems;
