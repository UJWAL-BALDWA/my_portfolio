import React from 'react';
import Edu from '../components/Edu';
import Footer from "../components/Footer";
import H2I from '../components/H2I';
import Navbar from "../components/Navbar";

const Education = () => {
  return (
    <div>
      <Navbar />
      <H2I
        Bgimg="https://media.istockphoto.com/photos/open-book-with-pages-on-a-black-background-picture-id1273754964?k=20&m=1273754964&s=612x612&w=0&h=QUdLM1F0s-pSv5nnbWXjxMjLKZkjGisZwQb69gJl_O0="
        Heading="My Education."
        Text="“Knowledge is power.”"
      />
      <Edu />
      <Footer />
    </div>
  );
}

export default Education;