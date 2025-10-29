import React from "react";
import { education } from "@/data/education.js";

const Education = () => {
  return (
    <div className="education">
      <h4 className="label">Experience</h4>
      <ul className="education-list">
        {education.map((item, index) => (
          <li className="item" key={index}>
            <span className="year">{item.year}</span>
            <p>
              <strong>{item.degree}</strong> — {item.Institution}
            </p>

            {item.description && (
              <ul className="experience-description">
                {item.description
                  .trim()
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, i) => (
                    <li key={i}>{line.trim()}</li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
