import React from "react";
import { Home} from './components'
import { DigitalMarketing, EPublications, ProjectManagement, ITServices } from "./components/submenu";
import { Routes, Route  } from "react-router-dom";


const App = () => {
  return (
    <Routes>
//       <Route path='/' element={<Home/>} />
//      <Route path='/digitalmarketing' element={<DigitalMarketing/>} />
        <Route path='/epublications' element={<EPublications/>} />
        <Route path='/projectmanagement' element={<ProjectManagement/>} />
        <Route path='/itservices' element={<ITServices/>} />
        
//  </Routes>
  )
}

export default App
