import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './Search'
import Results from './Results'
import { NextUIProvider } from '@nextui-org/system';
import Vision from './Vision'
//import './App.css'

function App() {

  return (
    <>
      <NextUIProvider>
        <div 
          style={{
            height:"100vh",
            width:"30%",
            float:"left",
            background: "-webkit-radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
          }}
        >
          <div
            style={{
              height:"20vh",
              margin: "20% 10% 0% 10%",
            }}
          >
            <Search/>
          </div>
        
        <Vision/>
        </div>
      </NextUIProvider>
     
    </>
  )
}

export default App
