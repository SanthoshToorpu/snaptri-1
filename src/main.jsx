import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
