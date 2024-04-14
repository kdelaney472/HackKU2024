import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './Search'
import Results from './Results'
import DataContext from './DataContext'
import { NextUIProvider } from '@nextui-org/system';
import Vision from './Vision'
//import './App.css'

function App() {

  const [dairyRisk, sDairy] = useState(0);
  const [glutenRisk, sGluten] = useState(0);
  const [peanutRisk, sPeanuts] = useState(0);
  const [isData, setData] = useState(false);



  const setDairy = (risk) => {
    sDairy(risk);
  }

  const setGluten = (risk) => {
    sGluten(risk);
  }

  const setPeanut = (risk) => {
    sPeanuts(risk);
  }

  const toggleData = (b) => {
    setData(b);
  }

  return (
    <>
      <DataContext.Provider value={{ dairyRisk, glutenRisk, peanutRisk, isData, setDairy, setGluten, setPeanut, toggleData }}>
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
        <Results />
      </NextUIProvider>
      </DataContext.Provider>

     
    </>
  )
}

export default App
