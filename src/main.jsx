import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
