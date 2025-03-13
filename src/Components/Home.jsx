import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './Header/Navbar'
import Services from "./Services/Services";
import ValuableCustomers from "./Customer/Customer";
import Footer from './Footer/Footer';
import WhyUs from './WhyUs/WhyUs';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <WhyUs/>
        <ValuableCustomers/>
        <Footer/>
        
      
    </div>
  )
}

export default Home
