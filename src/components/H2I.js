import "./H2I.css";
import React, { Component } from "react";

class Hero2img extends Component{
  render(){
    return (
      <>
        <div className="Hero">
          <div className="Mask">
            <img
              className="Intro-img"
              src={this.props.Bgimg}
              alt="cant load the img"
            />
            
          </div>
          <div className="Content" >
            <h1> {this.props.Heading} </h1>
            <p> {this.props.Text} </p>
          </div>
        </div>
      </>
    );
  }  
};

export default Hero2img;
