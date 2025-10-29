import React from "react";
import { Awards as AwardsData } from "../../data/awards";
import "./Awards.css";

const Awards = () => {
  return (
    <div className="education">
      <h4 className="label">Professional Skills Summary</h4>
      <ul className="education-list">
        {AwardsData.map((item, index) => (
          <li className="item" key={index}>
            <div className="skill-card">
              <div className="icon-wrapper">{item.icon}</div>
              <div className="skill-text">
                <span className="year">{item.year}</span>
                <p>
                  <strong>{item.degree}</strong> — {item.institution}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
