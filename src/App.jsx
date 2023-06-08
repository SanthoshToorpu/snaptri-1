import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar,Tech, Works, StarsCanvas,Chats} from './components'
import {useState} from 'react';
import { Button } from "@material-tailwind/react";



const App = () => {

  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>       
      </div>
      <Button variant="filled" className="" onClick={handleClick}>filled</Button>
      {isShown && 
      <Chats />
      }
      
      <About/>
      <Experience/>
      <Tech/>
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
