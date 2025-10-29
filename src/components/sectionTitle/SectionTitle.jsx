import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <div className="title-wrapper">
        <h2 className="inner-title">{title}</h2>
        <h3 className="inner-second-title">{subtitle}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
