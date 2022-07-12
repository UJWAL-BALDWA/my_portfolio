import React from 'react';
import Footer from "../components/Footer";
import H2I from '../components/H2I';
import Navbar from "../components/Navbar";
import Work from '../components/Work';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <H2I
        Bgimg="https://www.gfcadvice.com/wp-content/uploads/2018/10/contact-us-bg.jpg"
        Heading="Projects."
        Text="Some of my most recent works"
      />
      <Work/>
      
      <Footer />
    </div>
  );
}

export default Projects;