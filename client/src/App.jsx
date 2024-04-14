import { useState } from 'react'
import Search from './Search'
import Results from './Results'
import DataContext from './DataContext'
import { NextUIProvider } from '@nextui-org/system';
import Vision from './Vision'
//import './App.css'

function App() {

  //Context items to indicate data population
  const [dairyRisk, sDairy] = useState(0);
  const [glutenRisk, sGluten] = useState(0);
  const [shellfishRisk, sShellfish] = useState(0);
  const [isData, setData] = useState(false);


  //Context heler functions
  const setDairy = (risk) => {
    sDairy(risk);
  }

  const setGluten = (risk) => {
    sGluten(risk);
  }

  const setShellfish = (risk) => {
    sShellfish(risk);
  }

  const toggleData = (b) => {
    setData(b);
  }

  return (
    <> {/*DataContext and NextUIProvider both are providers for our custom data and TailwindCSS respectively*/}
      <DataContext.Provider value={{ dairyRisk, glutenRisk, shellfishRisk, isData, setDairy, setGluten, setShellfish, toggleData }}>
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
              margin: "20% 10% 20% 10%",
            }}
          >
            {/*Search is a simple component that handles the search button/box and its requests*/}
            <Search/>
          </div>
        {/*Vision handles the huggingFace call for AI picture recognition*/}
        <Vision/>
        </div>
        {/*Results is a component of pie charts that gives a visual representation of allergen risks based on data from search or vision*/}
        <Results />
      </NextUIProvider>
      </DataContext.Provider>

     
    </>
  )
}

export default App
