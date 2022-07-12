import React from 'react'
import Aboutcontent from '../components/Aboutcontent';
import Aboutskills from '../components/Aboutskills';
import Footer from '../components/Footer';
import Heroimg from '../components/Heroimg';
import Navbar from '../components/Navbar';
import Work from '../components/Work';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Aboutcontent/>
      <Aboutskills/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home;