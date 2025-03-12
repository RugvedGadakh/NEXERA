import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './Header/Navbar'
import Services from "./Services/Services";

import Footer from './Footer/Footer';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <WhyUs/>

        {/* <Footer/> */}
        
      
    </div>
  )
}

export default Home
