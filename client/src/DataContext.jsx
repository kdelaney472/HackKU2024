import { createContext } from 'react';

const DataContext = createContext( {
    dairyRisk: 0,
    glutenRisk: 0,
    peanutRisk: 0,
    isData: false,

    setDairy: () => {},
    setGluten: () => {},
    setPeanut: () => {},
    toggleData: () => {}
} );

export default DataContext;