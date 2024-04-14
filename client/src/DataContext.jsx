import { createContext } from 'react';

//Context provider for data population
const DataContext = createContext( {
    dairyRisk: 0,
    glutenRisk: 0,
    shellfishRisk: 0,
    isData: false,

    setDairy: () => {},
    setGluten: () => {},
    setShellfish: () => {},
    toggleData: () => {}
} );

export default DataContext;