import React from "react";
import {About, Contact, Serve, Feedbacks, Hero, Navbar, Works, StarsCanvas} from './'

const Home = () => {  
  return (
      <div className="relative z-0 bg-primary">
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
        <StarsCanvas/> 
      </div>
    </div>
  )
}

export default Home
