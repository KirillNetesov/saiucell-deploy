import React from "react";
import { skills } from "../../data/services";

const Skills = () => {
  return (
    <div style={{ opacity: 1, transform: "none" }}>
      <div className="education">
        <ul className="bars">
          <h4 className="label">Skills</h4>
          {skills.map((item, index) => (
            <li className="bar" key={index}>
              <div className="info">
                <span>{item.skill}</span>
                <span>{item.level}</span>
              </div>
              <div className="line">
                <div
                  className="line-fill"
                  style={{
                    width: item.level,
                    backgroundColor: "var(--second-color)",
                  }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
