import React from 'react';
import Footer from "../components/Footer";
import H2I from '../components/H2I';
import Navbar from "../components/Navbar";
import Aboutcontent from '../components/Aboutcontent';
import Aboutskills from '../components/Aboutskills';


 

const About = () => {
  return (
    <div>
      <Navbar />
      <H2I
        Bgimg="https://wallpaperaccess.com/full/5651986.jpg"
        Heading="About."
        Text="Electronics Engg & Web Developer"
      />

      <Aboutcontent/>
      <Aboutskills/>
      <Footer />
      
    </div>
  );
}

export default About;