import React from 'react';
import Contactform from '../components/Contactform';
import Footer from "../components/Footer";
import H2I from '../components/H2I';
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <H2I
        Bgimg="https://media.istockphoto.com/photos/woman-hand-holding-icon-customer-support-concept-copy-space-picture-id1141639313?b=1&k=20&m=1141639313&s=612x612&w=0&h=wuV40xTPhrMv1y0e6MCai4yfwqGlrapPC9VNi6-zckY="
        Heading="Contact."
        Text="Lets have a chat"
      />
      <Contactform/>
      <Footer />
    </div>
  );
}

export default Contact;