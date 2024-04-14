import { createContext } from 'react';

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