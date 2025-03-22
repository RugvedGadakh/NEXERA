import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './Header/Navbar'
import Services from "./Services/Services";
import ValuableCustomers from "./Customer/Customer";
import Footer from './Footer/Footer';
import WhyUs from './WhyUs/WhyUs';
import AboutUs from './About/About';



const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Services/>
        <WhyUs/>
        <ValuableCustomers/>
        <Footer/>
        
      
    </div>
  )
}

export default Home
