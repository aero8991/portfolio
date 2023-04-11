import React from "react";
import "./experience.css";
import ExperienceItems from "./ExperienceItems";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceItems
              icon={<BsPatchCheckFill className="experience__details-icon" />}
              skill="HTML"
              exp="Experienced"
            />
            <ExperienceItems
              icon={<BsPatchCheckFill className="experience__details-icon" />}
              skill="CSS"
              exp="Intermediate"
            />
            <ExperienceItems
              icon={<BsPatchCheckFill className="experience__details-icon" />}
              skill="JavaScript"
              exp="Experienced"
            />
            <ExperienceItems
              icon={<BsPatchCheckFill className="experience__details-icon" />}
              skill="Bootstrap"
              exp="Experienced"
            />
            <ExperienceItems
              icon={<BsPatchCheckFill  className="experience__details-icon"/>}
              skill="Tailwind"
              exp="Intermediate"
            />
            <ExperienceItems
              icon={<BsPatchCheckFill className="experience__details-icon" />}
              skill="React"
              exp="Experienced"
            />
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <ExperienceItems
            icon={<BsPatchCheckFill className="experience__details-icon" />}
            skill="Node JS"
            exp="Intermediate"
          />
          <ExperienceItems
            icon={<BsPatchCheckFill className="experience__details-icon" />}
            skill="Mongo DB"
            exp="Intermediate"
          />
          <ExperienceItems
            icon={<BsPatchCheckFill className="experience__details-icon" />}
            skill="Python"
            exp="Experienced"
          />
          <ExperienceItems
            icon={<BsPatchCheckFill className="experience__details-icon" />}
            skill="MySQL"
            exp="Experienced"
          />
          <ExperienceItems
            icon={<BsPatchCheckFill className="experience__details-icon" />}
            skill="Postgres"
            exp="Experienced"
          />
          <ExperienceItems
            icon={<BsPatchCheckFill className="experience__details-icon" />}
            skill="SQL Server"
            exp="Experienced"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
