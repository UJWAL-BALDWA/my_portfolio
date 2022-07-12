import "./Aboutcontent.css";

import React from 'react'
import { Link } from "react-router-dom";

const Aboutcontent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <img src="https://i.pinimg.com/564x/47/77/ae/4777ae0906dd0113ad0bb00d61125d1b.jpg" />
        </div>
        <div className="right">
          <h1>I'm Ujwal Baldwa,</h1>
          <p>
            
            I am a Electronics Engineer and a Web Developer, Currently I am
            gaining experience in my both fields and I am very dedicated person.
          </p>
          <Link to="/Contact">
            <button className="btn"> Contact </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Aboutcontent;