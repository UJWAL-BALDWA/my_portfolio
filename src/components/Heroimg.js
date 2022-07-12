import "./Heroimg.css";
import React from 'react';
import {Link} from "react-router-dom";
import Typewriter from "typewriter-effect";
import Resume from "../images/UJWAL_BALDWA_RESUME.docx";

const Heroimg = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img
            className="intro-img"
            src="https://st3.depositphotos.com/3746381/32355/v/600/depositphotos_323556220-stock-illustration-neon-circle-sign-vector-light.jpg"
            alt="cant load the img"
          />
        </div>
        <div className="content">
          <p> Hello, I'M  </p>

          <h1> UJWAL BALDWA </h1>

          <div className="App">
            <Typewriter
              options={{
                strings: [
                  "Electronics Engineering",
                  "Web Designer",
                  "Web Developer",
                  "Front End Developer",
                  "Photo Editior",
                  "Video Editior",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div>
            <Link to={Resume} className="btn">
              Resume
            </Link>
            <Link to="/contact" className="btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heroimg;