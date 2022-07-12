import "./Aboutskills.css";

import React from "react";

const Aboutskills = () => {
  return (
    <div className="about">
      <div className="skills">
        My Skills
        <div className="skill-name">
          <p>Electronics</p>
          <p>75%</p>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: "75%", backgroundColor: "#0dff00" }}
          ></div>
        </div>
        <div className="skill-name">
          <p>Basic Web-Development</p>
          <p>80%</p>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: "80%", backgroundColor: "blue" }}
          ></div>
        </div>
        <div className="skill-name">
          <p>Advanced Web-Development</p>
          <p>50%</p>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: "50%", backgroundColor: "#00fff2" }}
          ></div>
        </div>
        <div className="skill-name">
          <p>C, C++ Programming Language</p>
          <p>65%</p>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: "65%", backgroundColor: "#fb00ff" }}
          ></div>
        </div>
        <div className="skill-name">
          <p>Team Work</p>
          <p>95%</p>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: "95%", backgroundColor: "#e6ff07" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Aboutskills;
