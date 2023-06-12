import React from "react";
import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar,Tech, Works, StarsCanvas,Chats} from './components'
import {useState} from 'react';
import { Avatar } from "@material-tailwind/react";

const App = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>           
      </div>
      
      <About/>
      <Experience/>
      {/* <Tech/> */}
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas/> 
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
