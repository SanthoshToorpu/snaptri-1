import React from "react";
import {About, Contact, Serve, Feedbacks, Hero, Navbar, Works,} from './'
import { videobg } from "../assets";

const Home = () => {  
  return (
    <div>      
      <div className="relative z-0 bg-primary">
      <video className="fixed w-full object-cover opacity-90" autoPlay loop muted>
        <source src={videobg} type="video/mp4"/>
        </video>
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>          
      </div>     
      <About/>
      <Serve/>
      {/* <Tech/> */}
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact />
        {/* <StarsCanvas/>  */}
      </div>
    </div>
    </div>
  )
}

export default Home
