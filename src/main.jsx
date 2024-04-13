import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from '../scraping/ContextProvider.jsx'
import { NextUIProvider } from "@nextui-org/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </NextUIProvider>,
)
